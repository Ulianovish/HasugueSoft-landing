import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { DemoFormModal } from "@/components/demo-form-modal"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden dark-section">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust indicator */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-success/20 border border-success/30 text-success text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
            Empresas colombianas ya están ahorrando $85K anuales
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-6 text-foreground">
            Automatiza tus procesos con IA en <span className="text-gradient">6 semanas</span>, no 6 meses
          </h1>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            15 años de experiencia enterprise + metodología agéntica = Resultados en tiempo récord
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <DemoFormModal
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                  Solicitar Demo Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-border hover:bg-muted bg-transparent text-foreground"
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Demo en Video
            </Button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">50-70%</div>
              <div className="text-sm text-muted-foreground">Reducción en tiempo de desarrollo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">280%</div>
              <div className="text-sm text-muted-foreground">ROI promedio en implementaciones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">6-8</div>
              <div className="text-sm text-muted-foreground">Semanas vs 12-20 tradicional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
