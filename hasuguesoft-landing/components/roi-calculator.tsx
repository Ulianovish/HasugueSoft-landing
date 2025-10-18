"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react"
import { LeadCaptureForm } from "@/components/lead-capture-form"

interface ROIResults {
  currentAnnualCost: number
  projectedSavings: number
  roiPercentage: number
  paybackPeriod: number
  monthlySavings: number
}

export function ROICalculator() {
  const [employees, setEmployees] = useState<string>("")
  const [manualProcesses, setManualProcesses] = useState<number[]>([15])
  const [weeklyHours, setWeeklyHours] = useState<string>("")
  const [monthlyCosts, setMonthlyCosts] = useState<string>("")
  const [results, setResults] = useState<ROIResults | null>(null)
  const [showLeadForm, setShowLeadForm] = useState(false)

  const calculateROI = () => {
    if (!employees || !weeklyHours || !monthlyCosts) return

    const employeeCount = Number.parseInt(employees.split("-")[0])
    const hoursPerWeek = Number.parseFloat(weeklyHours)
    const monthlyOperationalCosts = Number.parseFloat(monthlyCosts.replace(/[^\d.]/g, ""))
    const processCount = manualProcesses[0]

    // ROI calculation logic based on Colombian market
    const hourlyRate = 25000 // COP per hour average
    const annualHoursCost = hoursPerWeek * 52 * hourlyRate
    const processEfficiencyLoss = (processCount / 50) * 0.3 // 30% max efficiency loss
    const currentAnnualCost = (annualHoursCost + monthlyOperationalCosts * 12) * (1 + processEfficiencyLoss)

    // Agentic development savings
    const automationSavings = 0.65 // 65% average savings
    const projectedSavings = currentAnnualCost * automationSavings
    const implementationCost = employeeCount < 100 ? 25000000 : employeeCount < 200 ? 45000000 : 65000000 // COP

    const roiPercentage = ((projectedSavings - implementationCost) / implementationCost) * 100
    const paybackPeriod = implementationCost / (projectedSavings / 12)
    const monthlySavings = projectedSavings / 12

    const calculatedResults: ROIResults = {
      currentAnnualCost,
      projectedSavings,
      roiPercentage,
      paybackPeriod,
      monthlySavings,
    }

    setResults(calculatedResults)
    setShowLeadForm(true)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const formatUSD = (amount: number) => {
    const usdAmount = amount / 4200 // Approximate COP to USD conversion
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(usdAmount)
  }

  return (
    <section id="calculadora" className="py-20 dark-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Calcula tu <span className="text-gradient">Potencial de Ahorro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre cuánto puedes ahorrar automatizando tus procesos con desarrollo agéntico
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-card-foreground">
                <Calculator className="h-5 w-5 text-primary" />
                Calculadora ROI
              </CardTitle>
              <CardDescription>
                Completa los datos de tu empresa para obtener una estimación personalizada
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Number of employees */}
              <div className="space-y-2">
                <Label htmlFor="employees" className="text-card-foreground">
                  Número de empleados
                </Label>
                <Select value={employees} onValueChange={setEmployees}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tamaño de tu empresa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="50-100">50-100 empleados</SelectItem>
                    <SelectItem value="101-200">101-200 empleados</SelectItem>
                    <SelectItem value="201-500">201-500 empleados</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Manual processes */}
              <div className="space-y-2">
                <Label className="text-card-foreground">Procesos manuales actuales: {manualProcesses[0]}</Label>
                <Slider
                  value={manualProcesses}
                  onValueChange={setManualProcesses}
                  max={50}
                  min={5}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>5 procesos</span>
                  <span>50 procesos</span>
                </div>
              </div>

              {/* Weekly hours lost */}
              <div className="space-y-2">
                <Label htmlFor="hours" className="text-card-foreground">
                  Horas perdidas semanalmente
                </Label>
                <Input
                  id="hours"
                  type="number"
                  placeholder="ej: 40"
                  value={weeklyHours}
                  onChange={(e) => setWeeklyHours(e.target.value)}
                />
              </div>

              {/* Monthly operational costs */}
              <div className="space-y-2">
                <Label htmlFor="costs" className="text-card-foreground">
                  Costos operativos mensuales (COP)
                </Label>
                <Input
                  id="costs"
                  type="text"
                  placeholder="ej: $50,000,000"
                  value={monthlyCosts}
                  onChange={(e) => setMonthlyCosts(e.target.value)}
                />
              </div>

              <Button
                onClick={calculateROI}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={!employees || !weeklyHours || !monthlyCosts}
              >
                Calcular Mi ROI
                <TrendingUp className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {results ? (
              <>
                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Resultados de tu ROI</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-card rounded-lg">
                        <DollarSign className="h-8 w-8 text-destructive mx-auto mb-2" />
                        <div className="text-2xl font-bold text-destructive">
                          {formatCurrency(results.currentAnnualCost)}
                        </div>
                        <div className="text-sm text-muted-foreground">Costo anual actual</div>
                        <div className="text-xs text-muted-foreground">{formatUSD(results.currentAnnualCost)}</div>
                      </div>

                      <div className="text-center p-4 bg-card rounded-lg">
                        <TrendingUp className="h-8 w-8 text-success mx-auto mb-2" />
                        <div className="text-2xl font-bold text-success">
                          {formatCurrency(results.projectedSavings)}
                        </div>
                        <div className="text-sm text-muted-foreground">Ahorro proyectado</div>
                        <div className="text-xs text-muted-foreground">{formatUSD(results.projectedSavings)}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-card rounded-lg">
                        <div className="text-3xl font-bold text-primary">{results.roiPercentage.toFixed(0)}%</div>
                        <div className="text-sm text-muted-foreground">ROI</div>
                      </div>

                      <div className="text-center p-4 bg-card rounded-lg">
                        <Clock className="h-6 w-6 text-primary mx-auto mb-1" />
                        <div className="text-2xl font-bold text-primary">{results.paybackPeriod.toFixed(1)} meses</div>
                        <div className="text-sm text-muted-foreground">Recuperación</div>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                      <div className="text-lg font-semibold text-success mb-1">
                        Ahorro mensual: {formatCurrency(results.monthlySavings)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatUSD(results.monthlySavings)} USD mensuales
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {showLeadForm && <LeadCaptureForm />}
              </>
            ) : (
              <Card className="bg-muted/50 border-dashed border-2 border-muted-foreground/20">
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <Calculator className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-center">
                    Completa el formulario para ver tu potencial de ahorro personalizado
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
