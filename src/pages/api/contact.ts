import type { APIRoute } from 'astro';

import { trackEvent } from '@lib/analytics';
import { getFallbackLocale, isSupportedLocale, type Locale } from '@lib/i18n/config';
import { contactSchema, type ContactPayload } from '@lib/forms/validator';

export const prerender = false;

export const config = {
  runtime: 'edge'
} satisfies Partial<APIRoute>;

const MESSAGES: Record<Locale, { success: string; invalid: string; captcha: string; transport: string }> = {
  es: {
    success: 'Gracias por contactarnos. Te responderemos pronto.',
    invalid: 'No pudimos procesar tu mensaje. Revisa los datos e intenta nuevamente.',
    captcha: 'No pudimos verificar que seas una persona. Actualiza la página e intenta de nuevo.',
    transport: 'Ocurrió un error al enviar tu mensaje. Intenta nuevamente en unos minutos.'
  },
  en: {
    success: 'Thanks for reaching out. We will get back to you shortly.',
    invalid: 'We could not process your message. Check the data and try again.',
    captcha: 'We could not verify that you are human. Refresh and try again.',
    transport: 'Something went wrong while sending your message. Please try again later.'
  }
};

export const POST: APIRoute = async ({ request }) => {
  const requestLocale = request.headers.get('x-locale') ?? request.headers.get('accept-language')?.split(',')[0].split('-')[0] ?? null;
  const locale = isSupportedLocale(requestLocale) ? requestLocale : getFallbackLocale();

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ ok: false, message: MESSAGES[locale].invalid }, 400);
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    await trackEvent('form.submit', { ok: false, reason: 'validation', locale });
    return jsonResponse({ ok: false, message: MESSAGES[locale].invalid, issues: parsed.error.issues }, 422);
  }

  const payload = parsed.data;
  const verification = await verifyCaptcha(payload.token, request);
  if (!verification.ok) {
    await trackEvent('form.submit', { ok: false, reason: 'captcha', locale });
    return jsonResponse({ ok: false, message: MESSAGES[locale].captcha }, 403);
  }

  const delivery = await deliverEmail(payload);
  if (!delivery.ok) {
    await trackEvent('form.submit', {
      ok: false,
      reason: 'transport',
      locale,
      status: delivery.status ?? 0
    });
    return jsonResponse({ ok: false, message: MESSAGES[locale].transport }, 502);
  }

  await trackEvent('form.submit', { ok: true, locale });

  return jsonResponse({ ok: true, message: MESSAGES[locale].success }, 200);
};

function jsonResponse(data: Record<string, unknown>, status: number) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store'
    }
  });
}

async function verifyCaptcha(token: string, request: Request) {
  const secret = import.meta.env.HCAPTCHA_SECRET ?? import.meta.env.RECAPTCHA_SECRET;
  if (!secret) {
    return { ok: true };
  }

  const remoteIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? undefined;
  const isHcaptcha = Boolean(import.meta.env.HCAPTCHA_SECRET);
  const endpoint = isHcaptcha ? 'https://hcaptcha.com/siteverify' : 'https://www.google.com/recaptcha/api/siteverify';

  const params = new URLSearchParams({
    secret,
    response: token
  });
  if (remoteIp) {
    params.append('remoteip', remoteIp);
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params
  });

  if (!response.ok) {
    return { ok: false, status: response.status };
  }

  const result = (await response.json()) as { success?: boolean };
  return { ok: Boolean(result.success) };
}

async function deliverEmail(payload: ContactPayload) {
  const apiKey = import.meta.env.RESEND_API_KEY;
  const from = import.meta.env.RESEND_FROM_EMAIL;
  const to = import.meta.env.CONTACT_RECIPIENT_EMAIL;

  if (!apiKey || !from || !to) {
    if (import.meta.env.DEV) {
      console.warn('[contact] Missing email environment variables. Skipping delivery.');
    }
    return { ok: true, skipped: true };
  }

  const subject = `[Landing] ${payload.locale === 'es' ? 'Nuevo mensaje' : 'New message'} from ${payload.name}`;

  const text = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    payload.company ? `Company: ${payload.company}` : null,
    `Locale: ${payload.locale}`,
    '',
    payload.message
  ]
    .filter(Boolean)
    .join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text
    })
  });

  return { ok: response.ok, status: response.status };
}
