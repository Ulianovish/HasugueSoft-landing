/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {}

declare interface ImportMetaEnv {
  readonly RESEND_API_KEY: string;
  readonly RESEND_FROM_EMAIL: string;
  readonly CONTACT_RECIPIENT_EMAIL: string;
  readonly HCAPTCHA_SECRET?: string;
  readonly RECAPTCHA_SECRET?: string;
  readonly SITE_URL?: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
