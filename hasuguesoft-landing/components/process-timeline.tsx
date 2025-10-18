import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Lightbulb, Code, Rocket, Clock, CheckCircle } from "lucide-react"

export function ProcessTimeline() {
  const bmadSteps = [
    {
      phase: "B",
      title: "Business Analysis",
      subtitle: "Diagnóstico",
      duration: "1 semana",
      icon: <Search className="h-6 w-6" />,
      description: "Análisis profundo de procesos actuales y identificación de oportunidades de automatización",
      activities: [
        "Mapeo de procesos existentes",
        "Identificación de cuellos de botella",
        "Análisis de datos y flujos",
        "Definición de objetivos ROI",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      phase: "M",
      title: "Methodology Design",
      subtitle: "Diseño",
      duration: "1-2 semanas",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "Diseño de arquitectura agéntica y definición de metodología personalizada",
      activities: [
        "Arquitectura de solución IA",
        "Diseño de flujos automatizados",
        "Selección de tecnologías",
        "Prototipado rápido",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      phase: "A",
      title: "Agentic Development",
      subtitle: "Desarrollo Agéntico",
      duration: "3-4 semanas",
      icon: <Code className="h-6 w-6" />,
      description: "Desarrollo acelerado con IA integrada y automatización inteligente",
      activities: [
        "Desarrollo con IA generativa",
        "Automatización de procesos",
        "Integración de sistemas",
        "Testing automatizado",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      phase: "D",
      title: "Deployment & Optimization",
      subtitle: "Implementación",
      duration: "1-2 semanas",
      icon: <Rocket className="h-6 w-6" />,
      description: "Despliegue optimizado y capacitación para maximizar adopción",
      activities: [
        "Despliegue en producción",
        "Capacitación del equipo",
        "Monitoreo y optimización",
        "Documentación completa",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ]

  const traditionalComparison = [
    { phase: "Análisis", duration: "2-3 semanas" },
    { phase: "Diseño", duration: "3-4 semanas" },
    { phase: "Desarrollo", duration: "8-12 semanas" },
    { phase: "Testing", duration: "2-3 semanas" },
    { phase: "Implementación", duration: "2-3 semanas" },
  ]

  return (
    <section id="proceso" className="py-20 dark-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Metodología <span className="text-gradient">BMAD-METHOD™</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro proceso propietario que combina análisis empresarial, diseño metodológico, desarrollo agéntico y
            despliegue optimizado
          </p>
        </div>

        {/* BMAD Process Steps */}
        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          {bmadSteps.map((step, index) => (
            <Card key={index} className="relative bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.phase}
                  </div>
                </div>
                <CardTitle className="text-lg text-card-foreground">{step.title}</CardTitle>
                <CardDescription className="font-medium">{step.subtitle}</CardDescription>
                <Badge variant="outline" className="mx-auto">
                  <Clock className="h-3 w-3 mr-1" />
                  {step.duration}
                </Badge>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">{step.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-card-foreground">Actividades clave:</h4>
                  <ul className="space-y-1">
                    {step.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              {/* Connection line */}
              {index < bmadSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 z-10" />
              )}
            </Card>
          ))}
        </div>

        {/* Comparison with Traditional */}
        <div className="bg-card rounded-lg border border-border p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-card-foreground">BMAD-METHOD™ vs Desarrollo Tradicional</h3>
            <p className="text-muted-foreground">Comparación de tiempos y eficiencia</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* BMAD Timeline */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-primary rounded-full" />
                <h4 className="font-semibold text-primary">BMAD-METHOD™</h4>
                <Badge className="bg-success text-success-foreground">6-8 semanas</Badge>
              </div>

              <div className="space-y-3">
                {bmadSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                      {step.phase}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm text-card-foreground">{step.subtitle}</span>
                        <span className="text-xs text-muted-foreground">{step.duration}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-1">
                        <div
                          className={`bg-gradient-to-r ${step.color} h-2 rounded-full`}
                          style={{ width: `${100 / bmadSteps.length}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Traditional Timeline */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-4 h-4 bg-muted-foreground rounded-full" />
                <h4 className="font-semibold text-muted-foreground">Desarrollo Tradicional</h4>
                <Badge variant="outline" className="border-destructive text-destructive">
                  12-20 semanas
                </Badge>
              </div>

              <div className="space-y-3">
                {traditionalComparison.map((phase, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-muted-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm text-muted-foreground">{phase.phase}</span>
                        <span className="text-xs text-muted-foreground">{phase.duration}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mt-1">
                        <div
                          className="bg-muted-foreground h-2 rounded-full"
                          style={{ width: `${100 / traditionalComparison.length}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
            <blockquote className="text-center">
              <p className="text-lg font-medium text-primary mb-2">
                "El proceso fue transparente desde el día 1. Sabíamos exactamente qué esperar en cada fase."
              </p>
              <footer className="text-sm text-muted-foreground">
                — María González, Directora de Operaciones, TechCorp Colombia
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
