import { Zap, Settings, Clock } from 'lucide-react';

interface Feature {
  text: string;
  positive?: boolean;
}

interface Approach {
  icon?: string;
  title: string;
  subtitle: string;
  timeframe: string;
  cost: string;
  costCOP: string;
  customization: string;
  features: Feature[];
  highlight?: boolean;
}

interface Labels {
  recommended: string;
  timeline: string;
  cost: string;
  customization: string;
  features: string;
}

interface Props {
  approach: Approach;
  labels: Labels;
}

const iconMap = {
  '⚡': Zap,
  '⚙️': Settings,
  '🕐': Clock,
};

export function ValueApproachCard({ approach, labels }: Props) {
  const IconComponent = approach.icon && iconMap[approach.icon as keyof typeof iconMap]
    ? iconMap[approach.icon as keyof typeof iconMap]
    : Zap;

  return (
    <article
      className={`relative rounded-3xl border bg-card transition-all duration-300 ${
        approach.highlight
          ? 'border-primary bg-gradient-to-br from-primary/5 to-secondary/10 shadow-xl lg:scale-[1.02]'
          : 'border-border'
      }`}
    >
      {approach.highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground shadow">
          {labels.recommended}
        </div>
      )}

      <div className="border-b border-border px-8 pb-6 pt-8 text-center">
        <div
          className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
            approach.highlight ? 'bg-primary/15 text-primary' : 'bg-muted text-muted-foreground'
          }`}
        >
          <IconComponent className="h-8 w-8" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-semibold text-card-foreground">{approach.title}</h3>
        <p className="text-sm text-muted-foreground">{approach.subtitle}</p>
      </div>

      <div className="space-y-4 px-8 py-6">
        <div className="grid gap-3">
          <div className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3 text-sm">
            <span className="font-medium text-muted-foreground">{labels.timeline}:</span>
            <span className={`font-semibold ${approach.highlight ? 'text-primary' : 'text-foreground'}`}>
              {approach.timeframe}
            </span>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3 text-sm">
            <span className="font-medium text-muted-foreground">{labels.cost}:</span>
            <div className="text-right">
              <div className={`font-semibold ${approach.highlight ? 'text-primary' : 'text-foreground'}`}>
                {approach.cost}
              </div>
              <div className="text-xs text-muted-foreground">{approach.costCOP}</div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3 text-sm">
            <span className="font-medium text-muted-foreground">{labels.customization}:</span>
            <span className={`font-semibold ${approach.highlight ? 'text-primary' : 'text-foreground'}`}>
              {approach.customization}
            </span>
          </div>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold text-card-foreground">{labels.features}</h4>
          <ul className="space-y-2">
            {approach.features.map((feature, idx) => {
              const isPositive = feature.positive !== false;
              return (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span
                    className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold ${
                      isPositive ? 'bg-success/15 text-success' : 'bg-destructive/15 text-destructive'
                    }`}
                  >
                    {isPositive ? '✓' : '✕'}
                  </span>
                  <span className={approach.highlight && isPositive ? 'text-foreground' : 'text-muted-foreground'}>
                    {feature.text}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}
