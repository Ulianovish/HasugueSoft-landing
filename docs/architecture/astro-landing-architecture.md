# HasugueSoft Landing – Architecture Blueprint

## 1. Context & Objectives
- **Purpose**: Define the target architecture for the HasugueSoft marketing site after migrating from the current Next.js proof-of-concept to Astro with Bun, focusing on static generation, multilingual support, and frictionless deployment on Vercel.
- **Scope**: Frontend (Astro) build, edge-form processing, multilingual content pipeline (es/en), CI/CD, infrastructure, and operational guardrails.
- **Key Outcomes**
  - Sub-second LCP on modern devices via Astro SSG, optimized assets, and minimal client-side JS.
  - Durable content workflow that allows marketing to expand in Spanish/English without engineering bottlenecks.
  - Reliable form submissions processed at the edge with spam protection and route hardening.
  - Developer productivity through Bun tooling, Tailwind, and targeted React islands.

## 2. Solution Overview
- **Rendering Model**: Astro 4 static site generation with optional client islands (`client:idle`) for interactive widgets.
- **Runtime & Package Manager**: Bun ≥1.1 for dependency installs and script execution, reducing cold-start times in CI.
- **Hosting**: Vercel (Production + Preview) serving static assets from global edge network; edge function for contact form.
- **Content Strategy**: Astro Content Collections splitting localized content by locale directories; markdown/MDX backed by schema.
- **Internationalization**: `@astrojs/i18n` (experimental) combined with `astro-i18next` for translations, metadata, and localized routes (`/es`, `/en`).
- **Form Processing**: Vercel Edge Function written in TypeScript with Zod validation, hCaptcha/Recaptcha verification, and email delivery via Resend.
- **Observability**: Vercel Analytics, optional Plausible, Lighthouse CI, and synthetic uptime checks via Better Stack (recommended).

## 3. Technology Stack

| Category | Technology | Version | Purpose | Rationale |
| --- | --- | --- | --- | --- |
| Framework | Astro | 4.x | Static site generation | Delivers SSG-first performance and zero-JS by default. |
| Runtime & Package Manager | Bun | ≥1.1 | Script execution & dependency management | Fast installs/builds, native TypeScript support. |
| UI Interactivity | React Islands via `@astrojs/react` | 18.x | Progressive enhancement | Reuse existing React components only where needed. |
| Styling | TailwindCSS (via `@astrojs/tailwind`) | 3.x/4.x | Utility-first styling | Aligns with existing design tokens, fast iteration. |
| Icons | `astro-icon` + `lucide-react` | latest | Iconography | Lightweight vector icons, tree-shaken. |
| Forms Validation | Zod | latest | Schema validation | Type-safe validation on edge function and client isles. |
| Edge Email | Resend API | latest | Form delivery | Reliable email dispatch with logging. |
| Analytics | Vercel Web Analytics / Plausible | latest | Usage insights | Zero-cookie analytics that respect privacy. |
| Testing | Playwright + Vitest | latest | Regression & unit tests | Coverage for critical flows/components. |
| CI/CD | GitHub Actions + Vercel | latest | Automated checks & deploy | Preview builds and gated production releases. |

## 4. System Architecture
1. **Content Authors** update markdown/MDX files under `src/content/{es,en}`.
2. **Build Pipeline** (Bun) executes linting, Astro check, and static generation producing `/dist`.
3. **Deployment** pushes artifacts to Vercel; static assets cached at edge nodes, localized routes served from CDN.
4. **Contact Form Submission** hits `/api/contact` edge endpoint:
   - Validates payload with Zod, verifies captcha token, enriches metadata (IP, locale).
   - Sends sanitized payload to Resend (email) and optional analytics event.
   - Returns localized success/error response; logs to Vercel analytics for monitoring.
5. **Monitoring**: Vercel Analytics + Lighthouse CI capture performance; optional Better Stack pings production URL.

## 5. Repository & Directory Structure

```plaintext
hasuguesoft-landing/
├── astro.config.mjs
├── bunfig.toml
├── package.json
├── public/
│   └── assets/               # Static assets (favicons, manifest, OG images)
├── src/
│   ├── env.d.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── [lang]/
│   │   │   ├── index.astro
│   │   │   └── [...slug].astro
│   │   └── api/
│   │       └── contact.ts    # Edge function handler
│   ├── components/
│   │   ├── astro/            # Pure Astro components
│   │   └── react/            # React islands (hydrated selectively)
│   ├── content/
│   │   ├── config.ts         # Collections schema
│   │   ├── es/               # Spanish content entries
│   │   └── en/               # English content entries
│   ├── lib/
│   │   ├── analytics.ts      # Analytics helper wrappers
│   │   ├── i18n/
│   │   │   ├── config.ts     # i18n setup and locale helpers
│   │   │   └── dictionaries/ # JSON translation dictionaries
│   │   └── forms/
│   │       └── validator.ts  # Shared Zod schemas
│   └── styles/
│       └── globals.css       # Tailwind base + custom styles
├── tests/
│   ├── e2e/                  # Playwright specs
│   └── unit/                 # Vitest component tests
├── .github/
│   └── workflows/
│       └── ci.yml
└── docs/
    └── architecture/
        └── astro-landing-architecture.md
```

## 6. Content & Internationalization
- **Locales**: `es` (default), `en`; additional locales extend `astro.config.mjs`.
- **Routing**: Localized directories under `src/pages/[lang]`; root `/` redirects to `/es` using middleware (Vercel edge or Astro middleware).
- **Metadata**: Each page entry includes localized `title`, `description`, `ogImage`, and canonical URLs.
- **Shared Strings**: UI text stored in JSON dictionaries to reduce duplication; heavy content (hero copy, testimonials) kept in markdown with frontmatter linking assets.
- **Fallback Logic**: If a localized entry is missing, fallback to Spanish but surface TODO via build warning.

## 7. Styling & Design Tokens
- Tailwind plugins: `@astrojs/tailwind`, `tailwindcss-animate`, `@tailwindcss/typography`.
- Theme tokens defined in `tailwind.config.cjs` and mirrored as CSS variables for runtime usage (light/dark mode).
- Shared design tokens exported for React islands via `@/lib/theme`.
- Radix-based components (dialog, accordion) wrapped in isles to avoid global JS; ensure server-rendered fallbacks for accessibility.

## 8. Edge Function – Contact Form
- **Location**: `src/pages/api/contact.ts` with `export const config = { runtime: 'edge' }`.
- **Flow**:
  1. Parse request body (JSON) and locale header.
  2. Validate using shared Zod schema (`forms/validator.ts`).
  3. Verify captcha token via Google reCAPTCHA enterprise or hCaptcha.
  4. Send email via Resend API with DKIM-signed domain.
  5. Log structured event (`form.submit`) to Vercel analytics and return localized response.
- **Error Handling**: Distinguish between validation (422), captcha (403), transport (502), and unexpected errors (500). Provide localized messages.
- **Rate Limiting**: Consider Vercel Edge Config or Upstash Redis for IP throttling if spam increases.

## 9. Build, CI/CD & Environments
- **Scripts** (`package.json`):
  - `bun astro dev`: local dev server.
  - `bun astro build`: static build to `dist/`.
  - `bun astro preview`: serve build locally.
  - `bun astro check`: type-safe template validation.
  - `bun lint`: ESLint (if added) for Astro/React.
- **GitHub Actions (`ci.yml`)**:
  1. Checkout + cache `.bun`, `.astro`.
  2. `bun install --frozen-lockfile`.
  3. `bun astro check`.
  4. `bun lint` (optional once ESLint configured).
  5. `bun astro build`.
  6. `npx @lhci/cli autorun` against preview URL (conditional).
- **Environments**:
  - `development`: Local Bun dev server with `.env.local`.
  - `preview`: Vercel preview deployments on PR branches; environment variables scoped to preview.
  - `production`: Vercel production environment triggered from main branch.
- **Environment Variables** (managed in Vercel):
  - `RESEND_API_KEY`
  - `CONTACT_RECIPIENT_EMAIL`
  - `HCAPTCHA_SECRET` (or `RECAPTCHA_SECRET`)
  - `SITE_URL`
  - `ANALYTICS_WRITE_KEY` (if Plausible/Sentry added)

## 10. Observability & Quality Gates
- **Performance**: Lighthouse CI thresholds (LCP < 1s, TTI < 1.5s, Performance ≥ 95). Failing scores block production deploy via PR status check.
- **Analytics**: Vercel Analytics with `track(…)` wrapper enabling structured events; optional fallback to Plausible via server-side proxy to maintain privacy.
- **Error Monitoring**: Optional Sentry integration using Astro plugin; capture edge function errors.
- **Uptime**: Better Stack or Vercel Cron Worker hitting `/health` to validate CDN + edge function.
- **Testing Strategy**:
  - Unit tests (Vitest) for React islands and utility functions.
  - Playwright smoke tests for `/es` and `/en` verifying hero render, form submission happy path (stub Resend).
  - Contract tests for edge function via MSW/mocked fetch.

## 11. Security & Compliance
- Enforce security headers through `vercel.json`:
  - `Content-Security-Policy`: restrict scripts to self + `vercel-insights.com` + captcha provider.
  - `Strict-Transport-Security`: `max-age=31536000; includeSubDomains; preload`.
  - `Permissions-Policy`: limit camera/microphone/geolocation.
- Sanitize user input server-side and never echo unescaped values.
- Ensure form responses avoid PII beyond contact intent; if storing data, comply with GDPR (document retention policy).
- Configure domain with HTTPS and DNSSEC; verify DMARC/SPF for email reliability.

## 12. Developer Workflow & Standards
- **Branching**: `main` (production), `develop` (optional), feature branches per task.
- **Conventions**:
  - Filenames `PascalCase.astro` for components, `kebab-case.mdx` for content entries.
  - Use absolute imports via Bun aliases (configured in `bunfig.toml` & `tsconfig.json`).
  - React islands must declare hydration strategy explicitly and keep bundle size < 50 KB. Prefer CSS animations for simple effects.
  - All new pages require localized versions simultaneously; PR fails if translation missing.
- **Code Review Checklist**:
  1. Lint/build passing.
  2. Lighthouse score acceptable.
  3. No stray client-side JS for static sections.
  4. Security headers unchanged without review.

## 13. Risks & Mitigations
- **Astro i18n instability**: Track experimental API updates; abstract locale helper to ease migration if the API changes.
- **Edge rate limits**: Vercel’s free tier limits (100k edge invocations). Monitor usage; consider fallback to serverless function if necessary.
- **Content synchronization**: Missing translations break parity. Mitigate with build-time guard that fails when `es` entry lacks `en` counterpart.
- **Third-party dependencies**: Keep Radix usage minimal; evaluate the necessity of each React island to avoid bundle creep.

## 14. Next Steps
1. Scaffold Astro project with Bun scripts and Tailwind integration.
2. Implement content collections and i18n configuration; migrate initial pages.
3. Develop contact edge function with Zod validation and Resend integration.
4. Configure GitHub Actions, Lighthouse CI, and `vercel.json` headers.
5. Draft developer onboarding guide referencing this architecture.

