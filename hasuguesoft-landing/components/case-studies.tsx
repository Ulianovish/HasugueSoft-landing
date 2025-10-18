import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Truck, Users, Factory, TrendingUp, Clock, Target, ArrowRight } from "lucide-react"

export function CaseStudies() {
  const caseStudies = [
    {
      industry: "Distribución",
      company: "LogiCorp Colombia",
      icon: <Truck className="h-8 w-8" />,
      challenge: "Gestión manual de inventarios con errores frecuentes y pérdidas de stock",
      solution: "Sistema de automatización de inventarios con IA predictiva",
      results: [
        { metric: "Reducción de errores", value: "15% → 2%", improvement: "87% mejora" },
        { metric: "Tiempo de procesamiento", value: "-65%", improvement: "Ahorro 25h/semana" },
        { metric: "ROI anual", value: "$95K USD", improvement: "320% ROI" },
      ],
      testimonial: {
        quote:
          "La automatización transformó completamente nuestras operaciones. Ahora podemos predecir demanda y optimizar stock en tiempo real.",
        author: "Carlos Mendoza",
        position: "Gerente de Operaciones",
      },
      timeline: "7 semanas",
      investment: "$12K USD",
      color: "from-blue-500 to-blue-600",
    },
    {
      industry: "Consultoría",
      company: "StrategIA Consulting",
      icon: <Users className="h-8 w-8" />,
      challenge: "Seguimiento manual de horas y proyectos generaba facturación imprecisa",
      solution: "Plataforma de time tracking automatizado con análisis de productividad",
      results: [
        { metric: "Horas administrativas", value: "-20h/semana", improvement: "50% reducción" },
        { metric: "Precisión facturación", value: "98.5%", improvement: "+15% ingresos" },
        { metric: "Satisfacción cliente", value: "4.8/5", improvement: "92% satisfacción" },
      ],
      testimonial: {
        quote:
          "Recuperamos 20 horas semanales que ahora dedicamos a generar valor para nuestros clientes. El ROI fue inmediato.",
        author: "Ana Patricia Ruiz",
        position: "Directora General",
      },
      timeline: "6 semanas",
      investment: "$8K USD",
      color: "from-purple-500 to-purple-600",
    },
    {
      industry: "Manufactura",
      company: "IndusTech Medellín",
      icon: <Factory className="h-8 w-8" />,
      challenge: "Control de producción manual causaba retrasos y desperdicios",
      solution: "Sistema de control de producción inteligente con IoT y IA",
      results: [
        { metric: "Eficiencia producción", value: "+35%", improvement: "Aumento significativo" },
        { metric: "Reducción desperdicios", value: "-28%", improvement: "Ahorro $45K/año" },
        { metric: "Tiempo de setup", value: "-40%", improvement: "Más flexibilidad" },
      ],
      testimonial: {
        quote:
          "La visibilidad en tiempo real de nuestra producción nos permitió identificar y resolver cuellos de botella que no sabíamos que existían.",
        author: "Roberto Jiménez",
        position: "Gerente de Producción",
      },
      timeline: "8 semanas",
      investment: "$15K USD",
      color: "from-green-500 to-green-600",
    },
  ]

  return (
    <section id="casos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Casos de <span className="text-gradient">Éxito Reales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas colombianas que ya están transformando sus operaciones con desarrollo agéntico
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${study.color} text-white shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {study.icon}
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1">
                      {study.industry}
                    </Badge>
                    <CardTitle className="text-lg">{study.company}</CardTitle>
                  </div>
                </div>

                <div className="flex gap-2 mb-3">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    <Clock className="h-3 w-3 mr-1" />
                    {study.timeline}
                  </Badge>
                  <Badge className="bg-success/10 text-success border-success/20">
                    <Target className="h-3 w-3 mr-1" />
                    {study.investment}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Challenge & Solution */}
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm text-destructive mb-1">Desafío:</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Solución:</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-success" />
                    Resultados:
                  </h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex justify-between items-center p-2 bg-muted/50 rounded">
                        <span className="text-xs font-medium">{result.metric}:</span>
                        <div className="text-right">
                          <div className="text-sm font-bold text-success">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.improvement}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <blockquote className="text-sm italic text-muted-foreground mb-2">
                    "{study.testimonial.quote}"
                  </blockquote>
                  <footer className="text-xs">
                    <strong className="text-foreground">{study.testimonial.author}</strong>
                    <br />
                    <span className="text-muted-foreground">{study.testimonial.position}</span>
                  </footer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg">
            <h3 className="text-2xl font-bold">¿Tu empresa podría ser la siguiente?</h3>
            <p className="text-muted-foreground max-w-md">
              Únete a las empresas colombianas que ya están automatizando sus procesos y multiplicando su eficiencia
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Ver Casos de Éxito Completos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
