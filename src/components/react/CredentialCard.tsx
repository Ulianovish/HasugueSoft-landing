import { Calendar, Building2, Zap, TrendingUp, Globe, Star } from 'lucide-react';

interface Credential {
  title: string;
  description: string;
  highlight?: string;
  icon?: string;
}

interface Props {
  credential: Credential;
}

const iconMap = {
  '📅': Calendar,
  '🏢': Building2,
  '⚡': Zap,
  '⚡️': Zap,
  '📈': TrendingUp,
  '🌐': Globe,
  '⭐': Star,
  '⭐️': Star,
};

export function CredentialCard({ credential }: Props) {
  const IconComponent = credential.icon && iconMap[credential.icon as keyof typeof iconMap]
    ? iconMap[credential.icon as keyof typeof iconMap]
    : Star;

  return (
    <article className="rounded-3xl border border-border bg-card p-6 text-center shadow-sm">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        <IconComponent className="h-6 w-6" strokeWidth={1.5} />
      </div>
      {credential.highlight && (
        <span className="mx-auto mb-2 inline-block rounded-full border border-success/20 bg-success/10 px-3 py-1 text-xs font-semibold text-success">
          {credential.highlight}
        </span>
      )}
      <h3 className="text-lg font-semibold text-card-foreground">{credential.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{credential.description}</p>
    </article>
  );
}
