"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  Globe,
  Smartphone,
  Bot,
  Package,
  Building2,
  Laptop,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Shield,
  Rocket,
  Target,
  BarChart,
  Lightbulb,
  Layers,
  Code,
  Database,
  Cloud,
  Lock,
  Gauge,
  Activity,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    id: "agentic",
    title: "Desarrollo Agéntico",
    subtitle: "Metodología Agéntica",
    description:
      "Transformamos tu negocio con desarrollo de software usando nuestra metodología agéntica. Creamos soluciones inteligentes que se adaptan y evolucionan con tu empresa.",
    icon: <Bot className="w-8 h-8" />,
    features: [
      { icon: <Rocket className="w-5 h-5" />, text: "Desarrollo acelerado con IA" },
      { icon: <Shield className="w-5 h-5" />, text: "Seguridad empresarial" },
      { icon: <Target className="w-5 h-5" />, text: "Soluciones personalizadas" },
      { icon: <Gauge className="w-5 h-5" />, text: "Escalabilidad garantizada" },
    ],
    stats: [
      { label: "Reducción de Tiempo", value: "70%" },
      { label: "Eficiencia Mejorada", value: "250%" },
      { label: "Satisfacción Cliente", value: "98%" },
    ],
    technologies: ["Metodología Agéntica", "IA", "Next.js", "TypeScript", "Supabase"],
    gradient: "from-purple-500 via-indigo-400 to-purple-600",
    bgGradient: "from-purple-500/20 via-indigo-400/10 to-purple-600/20",
    accentColor: "text-white",
  },
  {
    id: "website",
    title: "Desarrollo Web",
    subtitle: "Moderno, Rápido y Escalable",
    description:
      "Transforma tu presencia digital con sitios web de vanguardia que convierten visitantes en clientes. Construidos con las últimas tecnologías para máximo rendimiento y experiencia de usuario.",
    icon: <Globe className="w-8 h-8" />,
    features: [
      { icon: <Rocket className="w-5 h-5" />, text: "Velocidades de carga ultrarrápidas" },
      { icon: <Shield className="w-5 h-5" />, text: "Seguridad de nivel empresarial" },
      { icon: <Target className="w-5 h-5" />, text: "Diseño optimizado para conversión" },
      { icon: <Gauge className="w-5 h-5" />, text: "Garantía de 99.9% uptime" },
    ],
    stats: [
      { label: "Aumento de Velocidad", value: "340%" },
      { label: "Mejora en Conversión", value: "127%" },
      { label: "Satisfacción Cliente", value: "98%" },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
    bgGradient: "from-blue-500/20 via-cyan-400/10 to-blue-600/20",
    accentColor: "text-white",
  },
  {
    id: "mobile",
    title: "Aplicaciones Móviles",
    subtitle: "Nativas y Multiplataforma",
    description:
      "Creamos experiencias móviles poderosas que involucran a los usuarios y impulsan el crecimiento empresarial. Del concepto a la tienda de apps, entregamos aplicaciones que los usuarios aman.",
    icon: <Smartphone className="w-8 h-8" />,
    features: [
      { icon: <Users className="w-5 h-5" />, text: "Compatibilidad multiplataforma" },
      { icon: <Zap className="w-5 h-5" />, text: "Sincronización en tiempo real" },
      { icon: <Lock className="w-5 h-5" />, text: "Características de seguridad avanzadas" },
      { icon: <BarChart className="w-5 h-5" />, text: "Analíticas integradas" },
    ],
    stats: [
      { label: "Calificación App Store", value: "4.8★" },
      { label: "Retención de Usuarios", value: "85%" },
      { label: "Velocidad de Desarrollo", value: "2x Más Rápido" },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    gradient: "from-red-500 via-pink-400 to-red-600",
    bgGradient: "from-red-500/20 via-pink-400/10 to-red-600/20",
    accentColor: "text-white",
  },
  {
    id: "automation",
    title: "Automatización de Procesos",
    subtitle: "Inteligencia e Integración",
    description:
      "Optimiza tus operaciones con sistemas digitales inteligentes que automatizan flujos de trabajo, se integran perfectamente y escalan con el crecimiento de tu negocio.",
    icon: <Zap className="w-8 h-8" />,
    features: [
      { icon: <Zap className="w-5 h-5" />, text: "Automatización de flujos de trabajo" },
      { icon: <Database className="w-5 h-5" />, text: "Integración de datos" },
      { icon: <Cloud className="w-5 h-5" />, text: "Arquitectura nativa en la nube" },
      { icon: <Layers className="w-5 h-5" />, text: "Diseño API-first" },
    ],
    stats: [
      { label: "Aumento de Eficiencia", value: "250%" },
      { label: "Reducción de Costos", value: "60%" },
      { label: "Reducción de Errores", value: "95%" },
    ],
    technologies: ["Node.js", "Python", "AWS", "Docker", "Kubernetes"],
    gradient: "from-purple-500 via-violet-400 to-purple-600",
      bgGradient: "from-purple-500/20 via-violet-400/10 to-purple-600/20",
    accentColor: "text-white",
  },
  {
    id: "consulting",
    title: "Consultoría Tecnológica",
    subtitle: "Transformación Digital",
    description:
      "Guiamos tu transformación digital con estrategias personalizadas y soluciones tecnológicas que impulsan el crecimiento y la innovación en tu empresa.",
    icon: <Users className="w-8 h-8" />,
    features: [
      { icon: <Lightbulb className="w-5 h-5" />, text: "Estrategias de innovación" },
      { icon: <Target className="w-5 h-5" />, text: "Análisis y optimización" },
      { icon: <Rocket className="w-5 h-5" />, text: "Implementación ágil" },
      { icon: <Award className="w-5 h-5" />, text: "Resultados garantizados" },
    ],
    stats: [
      { label: "ROI Promedio", value: "320%" },
      { label: "Tiempo de Implementación", value: "30 días" },
      { label: "Éxito de Proyectos", value: "95%" },
    ],
    technologies: ["Análisis de Datos", "IA", "Cloud Computing", "DevOps", "Agile"],
    gradient: "from-orange-500 via-yellow-400 to-orange-600",
    bgGradient: "from-orange-500/20 via-yellow-400/10 to-orange-600/20",
    accentColor: "text-white",
  },

  {
    id: "architecture",
    title: "Arquitectura de Software",
    subtitle: "Diseño Escalable y Robusto",
    description:
      "Diseñamos arquitecturas de software escalables y robustas que soportan el crecimiento de tu negocio, garantizando rendimiento, seguridad y mantenibilidad a largo plazo.",
    icon: <Building2 className="w-8 h-8" />,
    features: [
      { icon: <Lightbulb className="w-5 h-5" />, text: "Principios de diseño escalable" },
      { icon: <Layers className="w-5 h-5" />, text: "Arquitectura de microservicios" },
      { icon: <Shield className="w-5 h-5" />, text: "Seguridad por diseño" },
      { icon: <Award className="w-5 h-5" />, text: "Mejores prácticas de la industria" },
    ],
    stats: [
      { label: "Proyectos Completados", value: "150+" },
      { label: "Satisfacción Cliente", value: "96%" },
      { label: "Entrega a Tiempo", value: "98%" },
    ],
    technologies: ["Microservicios", "Docker", "Kubernetes", "AWS", "DevOps"],
    gradient: "from-pink-500 via-rose-400 to-pink-600",
    bgGradient: "from-pink-500/20 via-rose-400/10 to-pink-600/20",
    accentColor: "text-white",
  },
]

export function ServicesViewportSection() {
  const [activeService, setActiveService] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([])
  const router = useRouter()

  // Intersection observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = serviceRefs.current.findIndex((ref) => ref === entry.target)
            if (index !== -1) {
              setActiveService(index)
            }
          }
        })
      },
      { threshold: 0.3, rootMargin: "-20% 0px -20% 0px" },
    )

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigateToProjects = () => {
    router.push("/projects")
  }

  const scrollToService = (index: number) => {
    serviceRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }

  return (
    <section ref={containerRef} className="relative py-20 px-4 sm:px-6 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      {/* Dot Navigation - Left Side */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => scrollToService(index)}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeService === index
                  ? "bg-white scale-125 shadow-lg"
                  : "bg-white/30 hover:bg-white/60 hover:scale-110"
              }`}
            >
              {/* Tooltip */}
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/90 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap border border-white/20">
                  {service.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700 mb-6 backdrop-blur-sm"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Servicios Premium</span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
            <span className="text-white">Servicios que </span>
            <span className="text-white font-light italic">Transforman</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Soluciones integrales diseñadas para acelerar el crecimiento de tu negocio y transformación digital
          </p>
        </motion.div>

        <div className="relative">
          {/* Services Content */}
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => (serviceRefs.current[index] = el)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="min-h-[80vh] flex items-center"
              >
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  <motion.div
                    className={`space-y-8 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div>
                      <motion.div
                        className={`inline-flex items-center space-x-3 px-4 py-2 bg-gradient-to-r ${service.bgGradient} rounded-full border border-white/10 mb-6`}
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      >
                        <div className={service.accentColor}>{service.icon}</div>
                        <span className={`text-sm font-medium ${service.accentColor}`}>{service.subtitle}</span>
                      </motion.div>

                      <h3 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">{service.title}</h3>

                      <p className="text-lg text-gray-300 leading-relaxed mb-8">{service.description}</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          viewport={{ once: false }}
                          className="flex items-center space-x-3"
                        >
                          <div className={service.accentColor}>{feature.icon}</div>
                          <span className="text-gray-300">{feature.text}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {service.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: statIndex * 0.1 }}
                          viewport={{ once: false }}
                          className={`text-center p-4 bg-gradient-to-br ${service.bgGradient} rounded-xl border border-white/10`}
                        >
                          <div className={`text-2xl font-bold ${service.accentColor} mb-1`}>{stat.value}</div>
                          <div className="text-xs text-gray-400">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          viewport={{ once: false }}
                        >
                          <Badge
                            className={`bg-gradient-to-r ${service.bgGradient} ${service.accentColor} border-white/20 hover:border-white/30`}
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>

                    {/* Arrow Navigation */}
                    {index === services.length - 1 && (
                      <motion.div
                        className="flex items-center space-x-4 pt-8"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <button
                          onClick={handleNavigateToProjects}
                          className="group flex items-center space-x-3 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 rounded-full transition-all duration-300"
                        >
                          <span className="text-white font-medium">Ver Nuestros Proyectos</span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                          </motion.div>
                        </button>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Enhanced UI Graphics */}
                  <motion.div
                    className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <ServiceUIGraphic service={service} index={index} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Enhanced UI Graphics Components
function ServiceUIGraphic({ service, index }: { service: any; index: number }) {
  const getServiceGraphic = () => {
    switch (service.id) {
      case "agentic":
        return <AgenticUIGraphic service={service} />
      case "website":
        return <WebsiteUIGraphic service={service} />
      case "mobile":
        return <MobileUIGraphic service={service} />
      case "automation":
        return <AutomationUIGraphic service={service} />
      case "consulting":
        return <ConsultingUIGraphic service={service} />
      case "architecture":
        return <ArchitectureUIGraphic service={service} />
      default:
        return <WebsiteUIGraphic service={service} />
    }
  }

  return (
    <div className="relative">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-white/5 rounded-3xl blur-3xl"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      {/* Main UI Container */}
      <div className="relative bg-white/95 backdrop-blur-xl border border-gray-300 rounded-3xl p-8 overflow-hidden shadow-2xl">
        {getServiceGraphic()}
      </div>
    </div>
  )
}

function WebsiteUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Browser Window */}
      <div className="bg-gray-100 rounded-lg overflow-hidden shadow-xl">
        <div className="flex items-center space-x-2 px-4 py-3 bg-gray-200">
          <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-gray-700 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
          <div className="flex-1 bg-white rounded px-3 py-1 ml-4 shadow-inner">
            <span className="text-xs text-gray-600">https://yourwebsite.com</span>
          </div>
          <div className="flex space-x-1">
            <div className="w-4 h-4 bg-gray-300 rounded hover:bg-gray-400 transition-colors"></div>
            <div className="w-4 h-4 bg-gray-300 rounded hover:bg-gray-400 transition-colors"></div>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-br from-white to-gray-50 min-h-[200px]">
          <div className="space-y-4">
            <motion.div
              className="h-6 bg-gradient-to-r from-gray-700 to-gray-800 rounded w-3/4 shadow-sm"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>
            <div className="h-3 bg-gray-300 rounded w-full shadow-sm"></div>
            <div className="h-3 bg-gray-300 rounded w-2/3 shadow-sm"></div>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-16 bg-gradient-to-br from-gray-200 to-gray-100 rounded shadow-md hover:shadow-lg transition-shadow"
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                ></motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Performance Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Speed Score</span>
            <Gauge className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">98/100</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "98%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Uptime</span>
            <Activity className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">99.9%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "99.9%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function MobileUIGraphic({ service }: { service: any }) {
  return (
    <div className="flex justify-center items-center space-x-6">
      {/* Enhanced Phone Mockup */}
      <div className="relative">
        <div className="w-48 h-80 bg-gray-900 rounded-3xl p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-2xl overflow-hidden relative">
            {/* Status Bar */}
            <div className="flex justify-between items-center px-4 py-2 bg-gray-50 text-xs">
              <span className="font-medium">9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-gray-500 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
              </div>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-4">
              <motion.div
                className="h-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded w-3/4 shadow-sm"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.div>
              <div className="space-y-2">
                <div className="h-2 bg-gray-300 rounded w-full shadow-sm"></div>
                <div className="h-2 bg-gray-300 rounded w-2/3 shadow-sm"></div>
              </div>

              {/* Interactive Cards */}
              <div className="space-y-3 mt-6">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg shadow-sm border border-gray-100"
                    animate={{ x: [0, 2, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full shadow-sm"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-1.5 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
              <div className="flex justify-around">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`w-6 h-6 rounded ${i === 1 ? "bg-gray-700" : "bg-gray-300"} shadow-sm`}
                    animate={i === 1 ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  ></motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced App Features */}
      <div className="space-y-4">
        {service.features.slice(0, 3).map((feature: any, index: number) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-md"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-gray-600">{feature.icon}</div>
            <span className="text-sm text-gray-700 font-medium">{feature.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DigitalSystemsUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced System Architecture */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="grid grid-cols-3 gap-4">
          {/* Data Sources */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Data Sources</h4>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded shadow-md flex items-center justify-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Database className="w-4 h-4 text-white" />
              </motion.div>
            ))}
          </div>

          {/* Processing */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Processing</h4>
            <motion.div
              className="h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded shadow-lg flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              whileHover={{ scale: 1.1 }}
            >
              <Cog className="w-8 h-8 text-white animate-spin" style={{ animationDuration: "3s" }} />
            </motion.div>
          </div>

          {/* Outputs */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Outputs</h4>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-8 bg-gradient-to-r from-gray-600 to-gray-700 rounded shadow-md flex items-center justify-center"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 + 1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Cloud className="w-4 h-4 text-white" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Flow Arrows */}
        <div className="flex justify-center items-center mt-4 space-x-4">
          <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </motion.div>
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Performance Dashboard */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Efficiency</span>
            <TrendingUp className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">+250%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Automation</span>
            <Zap className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">95%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "95%" }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function MechanicalUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced 3D Model Viewer */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">3D Model Viewer</h4>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>

        {/* 3D Viewport */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-40 flex items-center justify-center relative overflow-hidden shadow-inner">
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg shadow-xl"
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-2 bg-gradient-to-br from-gray-500 to-gray-700 rounded shadow-inner"></div>
          </motion.div>

          {/* Grid Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div
              className="w-full h-full bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M0 0h20v1H0zM0 0v20h1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {["Rotate", "Zoom", "Pan"].map((tool, index) => (
              <motion.button
                key={tool}
                className={`px-3 py-1 text-xs rounded shadow-sm border transition-colors ${
                  index === 0
                    ? "bg-gray-700 text-white border-gray-800"
                    : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tool}
              </motion.button>
            ))}
          </div>
          <div className="text-xs text-gray-500">Precision: 0.01mm</div>
        </div>
      </div>

      {/* Enhanced Specifications */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Tolerance</span>
            <Target className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">±0.01mm</div>
          <div className="text-xs text-gray-500 mt-1">Industry Leading</div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Material</span>
            <Package className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-lg font-bold text-gray-800">Titanium</div>
          <div className="text-xs text-gray-500 mt-1">Grade 5</div>
        </motion.div>
      </div>
    </div>
  )
}

function ProductUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Product Development Pipeline */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <h4 className="text-sm font-semibold text-gray-700 mb-4">Development Pipeline</h4>
        <div className="space-y-4">
          {["Ideation", "Validation", "MVP", "Launch"].map((stage, index) => (
            <motion.div
              key={stage}
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
            >
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
                  index <= 2 ? "bg-gradient-to-r from-gray-600 to-gray-800 text-white" : "bg-gray-300 text-gray-600"
                }`}
                animate={index <= 2 ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
              >
                {index <= 2 ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Lightbulb className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <Target className="w-4 h-4" />
                )}
              </motion.div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">{stage}</span>
                  <span className="text-xs text-gray-500">{index <= 2 ? "Complete" : "In Progress"}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-1 shadow-inner">
                  <motion.div
                    className={`h-2 rounded-full shadow-sm ${
                      index <= 2 ? "bg-gradient-to-r from-gray-600 to-gray-800" : "bg-gray-300"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: index <= 2 ? "100%" : "60%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.2 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enhanced Success Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Success Rate</span>
            <Star className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">92%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-gray-600 to-gray-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">ROI Average</span>
            <TrendingUp className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">3.2x</div>
          <div className="text-xs text-gray-500 mt-1">Return on Investment</div>
        </motion.div>
      </div>
    </div>
  )
}

function AgenticUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced AI Agent Interface */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">AI Agent Dashboard</h4>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>

        {/* AI Agent Visualization */}
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg h-40 flex items-center justify-center relative overflow-hidden shadow-inner border border-purple-300">
          {/* Neural Network Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full flex items-center justify-center">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-600 rounded-full"
                  style={{
                    left: `${20 + (i % 4) * 20}%`,
                    top: `${20 + Math.floor(i / 4) * 20}%`,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>

          {/* Central AI Bot */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full shadow-xl flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(147, 51, 234, 0.3)",
                  "0 0 40px rgba(147, 51, 234, 0.6)",
                  "0 0 20px rgba(147, 51, 234, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <Bot className="w-8 h-8 text-white" />
            </motion.div>

            {/* Orbiting Data Points */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-purple-400 rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  transformOrigin: "0 0",
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((i * 120 * Math.PI) / 180) * 30,
                  y: Math.sin((i * 120 * Math.PI) / 180) * 30,
                }}
                transition={{
                  rotate: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  x: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Enhanced AI Controls */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {["Train", "Deploy", "Monitor"].map((action, index) => (
              <motion.button
                key={action}
                className={`px-3 py-1 text-xs rounded shadow-sm border transition-colors ${
                  index === 1
                    ? "bg-purple-700 text-white border-purple-800"
                    : "bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {action}
              </motion.button>
            ))}
          </div>
          <div className="text-xs text-purple-600">Desarrollo Agéntico Activo</div>
        </div>
      </div>

      {/* Enhanced AI Performance Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">AI Efficiency</span>
            <Rocket className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">98.5%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "98.5%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Learning Rate</span>
            <Lightbulb className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">2.3x</div>
          <div className="text-xs text-gray-500 mt-1">Faster Adaptation</div>
        </motion.div>
      </div>
    </div>
  )
}

function AutomationUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Automation Dashboard */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">Automation Control Center</h4>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>

        {/* Automation Flow Visualization */}
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg h-40 flex items-center justify-center relative overflow-hidden shadow-inner border border-purple-300">
          {/* Process Flow */}
          <div className="flex items-center space-x-8">
            {/* Input */}
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-xl flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Database className="w-6 h-6 text-white" />
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowRight className="w-6 h-6 text-purple-600" />
            </motion.div>

            {/* Processing */}
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-xl flex items-center justify-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
            >
              <ArrowRight className="w-6 h-6 text-purple-600" />
            </motion.div>

            {/* Output */}
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-xl flex items-center justify-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            >
              <Cloud className="w-6 h-6 text-white" />
            </motion.div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full flex items-center justify-center">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-600 rounded-full"
                  style={{
                    left: `${10 + (i % 4) * 25}%`,
                    top: `${30 + Math.floor(i / 4) * 40}%`,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.3 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {["Start", "Pause", "Monitor"].map((action, index) => (
              <motion.button
                key={action}
                className={`px-3 py-1 text-xs rounded shadow-sm border transition-colors ${
                  index === 0
                    ? "bg-purple-700 text-white border-purple-800"
            : "bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {action}
              </motion.button>
            ))}
          </div>
          <div className="text-xs text-purple-600">24/7 Active</div>
        </div>
      </div>

      {/* Enhanced Performance Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Efficiency</span>
            <TrendingUp className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">+250%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Cost Savings</span>
            <Award className="w-4 h-4 text-purple-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">60%</div>
          <div className="text-xs text-gray-500 mt-1">Operational Costs</div>
        </motion.div>
      </div>
    </div>
  )
}

function ConsultingUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Strategy Dashboard */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">Strategy Dashboard</h4>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>

        {/* Strategy Visualization */}
        <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg h-40 flex items-center justify-center relative overflow-hidden shadow-inner border border-orange-300">
          {/* Central Strategy Hub */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full shadow-xl flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 20px rgba(234, 88, 12, 0.3)",
                  "0 0 40px rgba(234, 88, 12, 0.6)",
                  "0 0 20px rgba(234, 88, 12, 0.3)"
                ]
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <Lightbulb className="w-8 h-8 text-white" />
            </motion.div>

            {/* Orbiting Strategy Elements */}
            {["Análisis", "Planificación", "Ejecución", "Revisión"].map((phase, i) => (
              <motion.div
                key={phase}
                className="absolute flex items-center justify-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transformOrigin: "0 0",
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((i * 90 * Math.PI) / 180) * 40,
                  y: Math.sin((i * 90 * Math.PI) / 180) * 40,
                }}
                transition={{
                  rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  x: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  y: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                }}
              >
                <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center shadow-md">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full flex items-center justify-center">
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-orange-600 rounded-full"
                  style={{
                    left: `${15 + (i % 4) * 20}%`,
                    top: `${15 + Math.floor(i / 4) * 20}%`,
                  }}
                  animate={{ opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Tools */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {["Analizar", "Planificar", "Ejecutar"].map((tool, index) => (
              <motion.button
                key={tool}
                className={`px-3 py-1 text-xs rounded shadow-sm border transition-colors ${
                  index === 1
                    ? "bg-orange-700 text-white border-orange-800"
                    : "bg-orange-100 text-orange-700 border-orange-300 hover:bg-orange-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tool}
              </motion.button>
            ))}
          </div>
          <div className="text-xs text-orange-600">Strategic Planning</div>
        </div>
      </div>

      {/* Enhanced Success Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">ROI Average</span>
            <TrendingUp className="w-4 h-4 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">320%</div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 shadow-inner">
            <motion.div
              className="bg-gradient-to-r from-orange-600 to-orange-700 h-2 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: "90%" }}
              transition={{ duration: 2, ease: "easeOut" }}
            ></motion.div>
          </div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Success Rate</span>
            <Award className="w-4 h-4 text-orange-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">95%</div>
          <div className="text-xs text-gray-500 mt-1">Project Success</div>
        </motion.div>
      </div>
    </div>
  )
}

function ArchitectureUIGraphic({ service }: { service: any }) {
  return (
    <div className="space-y-6">
      {/* Enhanced Blueprint Viewer */}
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-700">Blueprint Viewer</h4>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          </div>
        </div>

        {/* Blueprint Canvas */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-40 flex items-center justify-center relative overflow-hidden shadow-inner border border-gray-300">
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="w-full h-full bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fillOpacity='0.2'%3E%3Cpath d='M0 0h20v1H0zM0 0v20h1V0z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Building Structure */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Foundation */}
            <motion.div
              className="w-32 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-sm shadow-md"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            ></motion.div>

            {/* Walls */}
            <motion.div
              className="w-28 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-t-sm mx-auto -mt-1 shadow-lg relative"
              animate={{ y: [0, -1, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              {/* Windows */}
              <div className="absolute top-2 left-2 w-4 h-4 bg-gray-300 rounded-sm shadow-inner"></div>
              <div className="absolute top-2 right-2 w-4 h-4 bg-gray-300 rounded-sm shadow-inner"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-gray-200 rounded-sm shadow-inner"></div>
            </motion.div>

            {/* Roof */}
            <motion.div
              className="w-32 h-8 bg-gradient-to-r from-gray-600 to-gray-700 transform -skew-y-12 -mt-2 shadow-lg"
              animate={{ rotateZ: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
            ></motion.div>
          </motion.div>
        </div>

        {/* Enhanced Tools */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex space-x-2">
            {["2D", "3D", "VR"].map((view, index) => (
              <motion.button
                key={view}
                className={`px-3 py-1 text-xs rounded shadow-sm border transition-colors ${
                  index === 1
                    ? "bg-gray-700 text-white border-gray-800"
                    : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {view}
              </motion.button>
            ))}
          </div>
          <div className="text-xs text-gray-500">Scale: 1:100</div>
        </div>
      </div>

      {/* Enhanced Project Stats */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Projects</span>
            <Building2 className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">150+</div>
          <div className="text-xs text-gray-500 mt-1">Completed</div>
        </motion.div>
        <motion.div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-md" whileHover={{ scale: 1.05 }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-600 font-medium">Satisfaction</span>
            <Award className="w-4 h-4 text-gray-600" />
          </div>
          <div className="text-2xl font-bold text-gray-800">96%</div>
          <div className="text-xs text-gray-500 mt-1">Client Rating</div>
        </motion.div>
      </div>
    </div>
  )
}
