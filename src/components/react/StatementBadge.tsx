import { Globe, Star, Zap } from 'lucide-react';

interface Badge {
  label: string;
  icon?: string;
}

interface Props {
  badge: Badge;
}

const iconMap = {
  '🌐': Globe,
  '⭐': Star,
  '⚡': Zap,
};

export function StatementBadge({ badge }: Props) {
  const IconComponent = badge.icon && iconMap[badge.icon as keyof typeof iconMap]
    ? iconMap[badge.icon as keyof typeof iconMap]
    : Star;

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
      <IconComponent className="h-4 w-4" strokeWidth={1.5} />
      {badge.label}
    </span>
  );
}
