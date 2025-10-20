import { z } from 'zod';

import { locales } from '@lib/i18n/config';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(120, 'Name is too long'),
  email: z
    .string()
    .min(1, 'Email is required')
    .regex(EMAIL_REGEX, 'Invalid email address'),
  company: z.string().max(150, 'Company name is too long').optional(),
  message: z.string().min(10, 'Message is too short').max(2000, 'Message is too long'),
  locale: z.enum(locales, {
    message: 'Unsupported locale'
  }).default(locales[0]),
  token: z.string().min(1, 'Captcha token missing')
});

export type ContactPayload = z.infer<typeof contactSchema>;
