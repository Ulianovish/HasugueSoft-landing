import { useState, type FormEvent } from 'react';

type ContactFormProps = {
  locale: 'es' | 'en';
};

type FormState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success'; message: string }
  | { status: 'error'; message: string };

const DEFAULT_MESSAGES = {
  es: {
    name: 'Nombre',
    email: 'Correo',
    company: 'Empresa (opcional)',
    message: 'Cuéntanos sobre tu proyecto',
    submit: 'Enviar',
    success: 'Gracias por tu mensaje. Te contactaremos pronto.',
    error: 'No pudimos enviar tu mensaje. Intenta nuevamente.'
  },
  en: {
    name: 'Name',
    email: 'Email',
    company: 'Company (optional)',
    message: 'Tell us about your project',
    submit: 'Send',
    success: 'Thanks for your message. We will reply soon.',
    error: 'We could not send your message. Please try again.'
  }
} as const;

export function ContactForm({ locale }: ContactFormProps) {
  const messages = DEFAULT_MESSAGES[locale];
  const [state, setState] = useState<FormState>({ status: 'idle' });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    setState({ status: 'submitting' });

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
      locale,
      token: formData.get('token') ?? ''
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-locale': locale
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result?.message ?? 'Unexpected error');
      }

      event.currentTarget.reset();
      setState({ status: 'success', message: result.message ?? messages.success });
    } catch (error) {
      console.error(error);
      setState({
        status: 'error',
        message: error instanceof Error ? error.message : messages.error
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-left text-sm font-medium text-neutral-700">
          {messages.name}
          <input
            name="name"
            type="text"
            required
            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm text-neutral-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </label>
        <label className="flex flex-col gap-2 text-left text-sm font-medium text-neutral-700">
          {messages.email}
          <input
            name="email"
            type="email"
            required
            className="rounded-lg border border-neutral-300 px-4 py-2 text-sm text-neutral-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-left text-sm font-medium text-neutral-700">
        {messages.company}
        <input
          name="company"
          type="text"
          className="rounded-lg border border-neutral-300 px-4 py-2 text-sm text-neutral-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        />
      </label>
      <label className="flex flex-col gap-2 text-left text-sm font-medium text-neutral-700">
        {messages.message}
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-lg border border-neutral-300 px-4 py-3 text-sm text-neutral-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        />
      </label>
      <input type="hidden" name="token" value="" />
      <button
        type="submit"
        disabled={state.status === 'submitting'}
        className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {state.status === 'submitting' ? '…' : messages.submit}
      </button>
      {state.status === 'success' && <p className="text-sm text-emerald-600">{state.message}</p>}
      {state.status === 'error' && <p className="text-sm text-red-600">{state.message}</p>}
    </form>
  );
}
