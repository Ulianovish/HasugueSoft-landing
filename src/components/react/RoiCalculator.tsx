import { useMemo, useState } from 'react';

import type { Locale } from '@lib/i18n/config';

const employeeOptions = [
  { value: '50-100', minEmployees: 50 },
  { value: '101-200', minEmployees: 101 },
  { value: '201-500', minEmployees: 201 }
];

const translations = {
  es: {
    employeesLabel: 'Número de empleados',
    employeesPlaceholder: 'Selecciona el tamaño de tu empresa',
    processesLabel: 'Procesos manuales actuales',
    weeklyHoursLabel: 'Horas perdidas semanalmente',
    weeklyHoursPlaceholder: 'ej: 40',
    monthlyCostsLabel: 'Costos operativos mensuales (COP)',
    monthlyCostsPlaceholder: 'ej: $50.000.000',
    sliderMin: '5 procesos',
    sliderMax: '50 procesos',
    calculateLabel: 'Calcular mi ROI',
    roiTitle: 'Resultados de tu ROI',
    currentCost: 'Costo anual actual',
    projectedSavings: 'Ahorro proyectado',
    roi: 'ROI',
    payback: 'Recuperación',
    paybackUnit: 'meses',
    monthlySavings: 'Ahorro mensual',
    emptyState: 'Completa el formulario para ver tu potencial de ahorro personalizado',
    buttonCta: 'Chatear por WhatsApp'
  },
  en: {
    employeesLabel: 'Number of employees',
    employeesPlaceholder: 'Select your company size',
    processesLabel: 'Current manual processes',
    weeklyHoursLabel: 'Weekly hours lost',
    weeklyHoursPlaceholder: 'e.g. 40',
    monthlyCostsLabel: 'Monthly operational costs (COP)',
    monthlyCostsPlaceholder: 'e.g. $50.000.000',
    sliderMin: '5 processes',
    sliderMax: '50 processes',
    calculateLabel: 'Calculate my ROI',
    roiTitle: 'Your ROI summary',
    currentCost: 'Current annual cost',
    projectedSavings: 'Projected savings',
    roi: 'ROI',
    payback: 'Payback',
    paybackUnit: 'months',
    monthlySavings: 'Monthly savings',
    emptyState: 'Complete the form to reveal your personalised savings potential',
    buttonCta: 'Chat on WhatsApp'
  }
} satisfies Record<Locale, Record<string, string>>;

interface RoiResults {
  currentAnnualCost: number;
  projectedSavings: number;
  roiPercentage: number;
  paybackPeriod: number;
  monthlySavings: number;
}

interface RoiCalculatorProps {
  locale: Locale;
}

const COP_FORMATTER = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

const USD_FORMATTER = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

export default function RoiCalculator({ locale }: RoiCalculatorProps) {
  const t = useMemo(() => translations[locale], [locale]);

  const [employees, setEmployees] = useState('');
  const [manualProcesses, setManualProcesses] = useState(15);
  const [weeklyHours, setWeeklyHours] = useState('');
  const [monthlyCosts, setMonthlyCosts] = useState('');
  const [results, setResults] = useState<RoiResults | null>(null);

  // Función para formatear el valor con símbolo de moneda y separadores de miles
  const formatCurrencyInput = (value: string) => {
    // Remover todo excepto números
    const numericValue = value.replace(/[^\d]/g, '');
    
    if (!numericValue) return '';
    
    // Agregar separadores de miles (puntos)
    const formattedNumber = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    // Agregar símbolo de peso
    return `$${formattedNumber}`;
  };

  // Función para manejar el cambio en el input de costos mensuales
  const handleMonthlyCostsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedValue = formatCurrencyInput(inputValue);
    setMonthlyCosts(formattedValue);
  };

  const calculate = () => {
    if (!employees || !weeklyHours || !monthlyCosts) {
      return;
    }

    const employeeBucket = employeeOptions.find((option) => option.value === employees);
    const employeeCount = employeeBucket ? employeeBucket.minEmployees : parseInt(employees, 10) || 0;
    const hoursPerWeek = parseFloat(weeklyHours);
    const normalizedCosts = Number(monthlyCosts.replace(/[^\d.]/g, ''));

    if (!employeeCount || !hoursPerWeek || !normalizedCosts) {
      return;
    }

    const hourlyRate = 25_000; // COP average hourly cost
    const annualHoursCost = hoursPerWeek * 52 * hourlyRate;
    const processEfficiencyLoss = (manualProcesses / 50) * 0.3;
    const currentAnnualCost = (annualHoursCost + normalizedCosts * 12) * (1 + processEfficiencyLoss);

    const automationSavings = 0.65;
    const projectedSavings = currentAnnualCost * automationSavings;
    const implementationCost = employeeCount < 100 ? 25_000_000 : employeeCount < 200 ? 45_000_000 : 65_000_000;

    const roiPercentage = ((projectedSavings - implementationCost) / implementationCost) * 100;
    const paybackPeriod = implementationCost / (projectedSavings / 12);
    const monthlySavings = projectedSavings / 12;

    setResults({
      currentAnnualCost,
      projectedSavings,
      roiPercentage,
      paybackPeriod,
      monthlySavings
    });
  };

  const formatCop = (value: number) => COP_FORMATTER.format(Math.round(value));
  const formatUsd = (value: number) => USD_FORMATTER.format(Math.round(value / 4200));

  const isDisabled = !employees || !weeklyHours || !monthlyCosts;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm">
        <div className="mb-6 space-y-2">
          <label className="block text-sm font-medium text-foreground" htmlFor="employees">
            {t.employeesLabel}
          </label>
          <select
            id="employees"
            value={employees}
            onChange={(event) => setEmployees(event.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          >
            <option value="" disabled>
              {t.employeesPlaceholder}
            </option>
            {employeeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value.replace('-', ' - ')}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6 space-y-3">
          <p className="text-sm font-medium text-foreground">
            {t.processesLabel}: <span className="font-semibold text-primary">{manualProcesses}</span>
          </p>
          <input
            type="range"
            min={5}
            max={50}
            step={1}
            value={manualProcesses}
            onChange={(event) => setManualProcesses(Number(event.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{t.sliderMin}</span>
            <span>{t.sliderMax}</span>
          </div>
        </div>

        <div className="mb-6 space-y-2">
          <label className="block text-sm font-medium text-foreground" htmlFor="weekly-hours">
            {t.weeklyHoursLabel}
          </label>
          <input
            id="weekly-hours"
            type="number"
            min={1}
            value={weeklyHours}
            onChange={(event) => setWeeklyHours(event.target.value)}
            placeholder={t.weeklyHoursPlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

        <div className="mb-6 space-y-2">
          <label className="block text-sm font-medium text-foreground" htmlFor="monthly-costs">
            {t.monthlyCostsLabel}
          </label>
          <input
            id="monthly-costs"
            type="text"
            inputMode="numeric"
            value={monthlyCosts}
            onChange={handleMonthlyCostsChange}
            placeholder={t.monthlyCostsPlaceholder}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>

        <button
          type="button"
          onClick={calculate}
          disabled={isDisabled}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          {t.calculateLabel}
          <span aria-hidden>↗︎</span>
        </button>
      </div>

      <div className="space-y-6">
        {results ? (
          <div className="space-y-6">
            <div className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-primary">{t.roiTitle}</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-card p-4 text-center shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{t.currentCost}</p>
                  <p className="mt-2 text-2xl font-semibold text-destructive">{formatCop(results.currentAnnualCost)}</p>
                  <p className="text-xs text-muted-foreground">{formatUsd(results.currentAnnualCost)}</p>
                </div>
                <div className="rounded-2xl bg-card p-4 text-center shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{t.projectedSavings}</p>
                  <p className="mt-2 text-2xl font-semibold text-success">{formatCop(results.projectedSavings)}</p>
                  <p className="text-xs text-muted-foreground">{formatUsd(results.projectedSavings)}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-card p-4 text-center shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{t.roi}</p>
                  <p className="mt-2 text-2xl font-semibold text-primary">{results.roiPercentage.toFixed(0)}%</p>
                </div>
                <div className="rounded-2xl bg-card p-4 text-center shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{t.payback}</p>
                  <p className="mt-2 text-2xl font-semibold text-primary">
                    {results.paybackPeriod.toFixed(1)} {t.paybackUnit}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-success/20 bg-success/10 p-4 text-center">
                <p className="text-lg font-semibold text-success">
                  {t.monthlySavings}: {formatCop(results.monthlySavings)}
                </p>
                <p className="text-xs text-muted-foreground">{formatUsd(results.monthlySavings)}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">
                {locale === 'es'
                  ? 'Comparte estos resultados con tu equipo o agenda una llamada para revisar el caso a detalle.'
                  : 'Share these results with your team or book a call to review your scenario in detail.'}
              </p>
              <a
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                href="https://wa.me/573044916302"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {t.buttonCta}
              </a>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-border/40 bg-card/70 p-10 text-center shadow-sm">
            <p className="text-sm text-muted-foreground">{t.emptyState}</p>
          </div>
        )}
      </div>
    </div>
  );
}
