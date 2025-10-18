import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Clock, DollarSign, Zap, Settings } from "lucide-react"

export function ValueProposition() {
  const approaches = [
    {
      title: "Desarrollo Agéntico",
      subtitle: "HasugueSoft",
      timeframe: "6-8 semanas",
      cost: "$5K-15K USD",
      costCOP: "$20M-60M COP",
      customization: "Alta personalización",
      icon: <Zap className="h-6 w-6" />,
      color: "primary",
      features: [
        "Metodología BMAD-METHOD™",
        "IA integrada desde el diseño",
        "Automatización inteligente",
        "Escalabilidad empresarial",
        "Soporte 15 años experiencia",
        "ROI promedio 280%",
      ],
      highlighted: true,
    },
    {
      title: "Desarrollo Tradicional",
      subtitle: "Agencias convencionales",
      timeframe: "12-20 semanas",
      cost: "$25K+ USD",
      costCOP: "$100M+ COP",
      customization: "Alta personalización",
      icon: <Settings className="h-6 w-6" />,
      color: "muted",
      features: [
        "Metodologías tradicionales",
        "Desarrollo manual extenso",
        "Integración IA posterior",
        "Escalabilidad limitada",
        "Soporte variable",
        "ROI incierto",
      ],
      highlighted: false,
    },
    {
      title: "Soluciones SaaS",
      subtitle: "Plataformas existentes",
      timeframe: "Inmediato",
      cost: "$500-2K/mes USD",
      costCOP: "$2M-8M/mes COP",
      customization: "Baja personalización",
      icon: <Clock className="h-6 w-6" />,
      color: "muted",
      features: [
        "Configuración limitada",
        "Funcionalidades genéricas",
        "Dependencia del proveedor",
        "Costos recurrentes altos",
        "Soporte estándar",
        "ROI a largo plazo",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Por qué elegir <span className="text-gradient">Desarrollo Agéntico</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comparamos nuestro enfoque innovador con las alternativas tradicionales del mercado
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {approaches.map((approach, index) => (
            <Card
              key={index}
              className={`relative ${
                approach.highlighted
                  ? "border-primary bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg scale-105"
                  : "border-border bg-card"
              }`}
            >
              {approach.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">Recomendado</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-3 rounded-full ${approach.highlighted ? "bg-primary/10" : "bg-muted"}`}>
                  <div className={approach.highlighted ? "text-primary" : "text-muted-foreground"}>{approach.icon}</div>
                </div>
                <CardTitle className="text-xl mb-2">{approach.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{approach.subtitle}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key metrics */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Tiempo:</span>
                    <span className={`font-semibold ${approach.highlighted ? "text-primary" : "text-foreground"}`}>
                      {approach.timeframe}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Costo:</span>
                    <div className="text-right">
                      <div className={`font-semibold ${approach.highlighted ? "text-primary" : "text-foreground"}`}>
                        {approach.cost}
                      </div>
                      <div className="text-xs text-muted-foreground">{approach.costCOP}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <span className="text-sm font-medium">Personalización:</span>
                    <span className={`font-semibold ${approach.highlighted ? "text-primary" : "text-foreground"}`}>
                      {approach.customization}
                    </span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Características:</h4>
                  <ul className="space-y-2">
                    {approach.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm">
                        {approach.highlighted ? (
                          <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        ) : (
                          <div className="h-4 w-4 mt-0.5 flex-shrink-0">
                            {featureIndex < 3 ? (
                              <Check className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                        )}
                        <span className={approach.highlighted ? "text-foreground" : "text-muted-foreground"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-success/10 border border-success/20 rounded-full text-success font-medium">
            <DollarSign className="h-5 w-5" />
            Ahorra 40-60% vs desarrollo tradicional con resultados en la mitad del tiempo
          </div>
        </div>
      </div>
    </section>
  )
}
