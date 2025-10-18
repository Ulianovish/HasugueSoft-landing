import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  Users,
  Building2,
  Zap,
  Shield,
  Globe,
  Calendar,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react"
import { DemoFormModal } from "@/components/demo-form-modal"

export function CompanyCredibility() {
  const credentials = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "15 Años de Experiencia",
      description: "Desde 2009 desarrollando soluciones enterprise para el mercado colombiano",
      highlight: "2009-2024",
    },
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "50+ Empresas Atendidas",
      description: "PyMEs y corporaciones en Bogotá, Medellín, Cali y otras ciudades principales",
      highlight: "Multi-ciudad",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "BMAD-METHOD™",
      description: "Metodología propietaria registrada que acelera desarrollo en 60%",
      highlight: "Patentado",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "280% ROI Promedio",
      description: "Retorno de inversión comprobado en implementaciones de automatización",
      highlight: "Garantizado",
    },
  ]

  const certifications = [
    { name: "ISO 27001", type: "Seguridad de Información" },
    { name: "AWS Partner", type: "Cloud Computing" },
    { name: "Microsoft Gold", type: "Desarrollo de Aplicaciones" },
    { name: "Google Cloud", type: "IA y Machine Learning" },
  ]

  const teamExpertise = [
    { area: "Arquitectura de Software", years: "12+ años promedio" },
    { area: "Inteligencia Artificial", years: "8+ años promedio" },
    { area: "Automatización de Procesos", years: "10+ años promedio" },
    { area: "Integración de Sistemas", years: "15+ años promedio" },
  ]

  const achievements = [
    { metric: "99.8%", label: "Uptime garantizado" },
    { metric: "24/7", label: "Soporte técnico" },
    { metric: "6 semanas", label: "Tiempo promedio entrega" },
    { metric: "100%", label: "Proyectos completados" },
  ]

  return (
    <section id="empresa" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Experiencia Enterprise</span> para PyMEs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Llevamos capacidades enterprise a PyMEs por primera vez en Colombia. 15 años de experiencia respaldan cada
            proyecto.
          </p>
        </div>

        {/* Main Credentials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential, index) => (
            <Card key={index} className="bg-card border-border text-center hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">
                  <div className="text-primary">{credential.icon}</div>
                </div>
                <Badge className="mx-auto mb-2 bg-success/10 text-success border-success/20">
                  {credential.highlight}
                </Badge>
                <CardTitle className="text-lg">{credential.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{credential.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Credibility Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Certifications */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certificaciones
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-semibold text-sm">{cert.name}</div>
                    <div className="text-xs text-muted-foreground">{cert.type}</div>
                  </div>
                  <CheckCircle className="h-4 w-4 text-success" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Team Expertise */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Experiencia del Equipo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {teamExpertise.map((expertise, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div>
                    <div className="font-semibold text-sm">{expertise.area}</div>
                    <div className="text-xs text-muted-foreground">Experiencia comprobada</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {expertise.years}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Key Metrics */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Garantías de Servicio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-3 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{achievement.metric}</div>
                  <div className="text-xs text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Value Proposition Statement */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 mb-8">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Llevamos capacidades enterprise a PyMEs por primera vez en Colombia
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Durante 15 años hemos trabajado con grandes corporaciones. Ahora, con el desarrollo agéntico, podemos
              ofrecer la misma calidad y sofisticación a empresas medianas, a una fracción del costo y tiempo
              tradicional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                Presencia Nacional
              </Badge>
              <Badge className="bg-success/20 text-success border-success/30 px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                Calidad Enterprise
              </Badge>
              <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Velocidad Agéntica
              </Badge>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <h3 className="text-xl font-semibold">¿Listo para transformar tu empresa?</h3>
            <p className="text-muted-foreground max-w-md">
              Únete a las empresas que ya confían en nuestra experiencia y metodología comprobada
            </p>
            <DemoFormModal
              triggerText="Agendar Consulta Gratuita"
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Agendar Consulta Gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
