import { defineCollection, z } from 'astro:content';

const ctaSchema = z.object({
  label: z.string(),
  href: z.string()
});

const heroMetricSchema = z.object({
  value: z.string(),
  label: z.string(),
  description: z.string().optional()
});

const heroSchema = z.object({
  kicker: z.string().optional(),
  title: z.string(),
  highlight: z.string().optional(),
  suffix: z.string().optional(),
  subtitle: z.string(),
  primaryCta: ctaSchema.optional(),
  secondaryCta: ctaSchema.optional(),
  metrics: z.array(heroMetricSchema).default([])
});

const featureSchema = z.object({
  text: z.string(),
  positive: z.boolean().default(true)
});

const approachSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  timeframe: z.string(),
  cost: z.string(),
  costCOP: z.string(),
  customization: z.string(),
  icon: z.string().optional(),
  highlight: z.boolean().default(false),
  features: z.array(featureSchema).default([])
});

const valuePropositionSchema = z.object({
  heading: z.string(),
  description: z.string(),
  approaches: z.array(approachSchema)
});

const processStepSchema = z.object({
  phase: z.string(),
  title: z.string(),
  subtitle: z.string(),
  duration: z.string(),
  description: z.string(),
  color: z.string().optional(),
  activities: z.array(z.string()).default([])
});

const traditionalPhaseSchema = z.object({
  phase: z.string(),
  duration: z.string()
});

const processSchema = z.object({
  heading: z.string(),
  description: z.string(),
  steps: z.array(processStepSchema),
  traditionalTimeline: z.array(traditionalPhaseSchema).default([]),
  testimonial: z
    .object({
      quote: z.string(),
      author: z.string(),
      role: z.string()
    })
    .optional()
});

const caseStudyResultSchema = z.object({
  metric: z.string(),
  value: z.string(),
  detail: z.string().optional()
});

const caseStudySchema = z.object({
  industry: z.string(),
  company: z.string(),
  timeline: z.string(),
  investment: z.string(),
  challenge: z.string(),
  solution: z.string(),
  color: z.string().optional(),
  results: z.array(caseStudyResultSchema).default([]),
  testimonial: z
    .object({
      quote: z.string(),
      author: z.string(),
      role: z.string()
    })
    .optional()
});

const caseStudiesSchema = z
  .object({
    heading: z.string(),
    description: z.string(),
    items: z.array(caseStudySchema),
    cta: z
      .object({
        heading: z.string(),
        description: z.string(),
        label: z.string(),
        href: z.string()
      })
      .optional()
  })
  .optional();

const calculatorSchema = z
  .object({
    heading: z.string(),
    highlight: z.string().optional(),
    description: z.string()
  })
  .optional();

const credentialSchema = z.object({
  title: z.string(),
  description: z.string(),
  highlight: z.string().optional(),
  icon: z.string().optional()
});

const certificationSchema = z.object({
  name: z.string(),
  type: z.string()
});

const expertiseSchema = z.object({
  area: z.string(),
  years: z.string()
});

const achievementSchema = z.object({
  metric: z.string(),
  label: z.string()
});

const badgeSchema = z.object({
  label: z.string(),
  icon: z.string().optional()
});

const credibilitySchema = z
  .object({
    heading: z.string(),
    description: z.string(),
    credentials: z.array(credentialSchema),
    certifications: z.array(certificationSchema),
    expertise: z.array(expertiseSchema),
    achievements: z.array(achievementSchema),
    statement: z.object({
      heading: z.string(),
      description: z.string(),
      badges: z.array(badgeSchema).default([])
    }),
    finalCta: z
      .object({
        heading: z.string(),
        description: z.string(),
        label: z.string(),
        href: z.string()
      })
      .optional()
  })
  .optional();

const callToActionSchema = z
  .object({
    heading: z.string(),
    description: z.string(),
    label: z.string(),
    href: z.string()
  })
  .optional();

const contactSchema = z.object({
  heading: z.string(),
  description: z.string()
});

const landingSchema = z.object({
  metaTitle: z.string(),
  metaDescription: z.string(),
  hero: heroSchema,
  valueProposition: valuePropositionSchema,
  process: processSchema,
  caseStudies: caseStudiesSchema,
  calculator: calculatorSchema,
  credibility: credibilitySchema,
  callToAction: callToActionSchema,
  contact: contactSchema
});

const landingEs = defineCollection({
  type: 'content',
  schema: landingSchema.extend({
    lang: z.literal('es')
  })
});

const landingEn = defineCollection({
  type: 'content',
  schema: landingSchema.extend({
    lang: z.literal('en')
  })
});

export const collections = {
  es: landingEs,
  en: landingEn
};
