"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Bot, Code, Users, Shield, Zap, Globe, ArrowUpRight, CheckCircle, Building2, Smartphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  WebDevGraphic,
  AgenticGraphic,
  AutomationGraphic,
  ConsultingGraphic,
  MobileGraphic,
  ArchitectureGraphic,
} from "./animated-service-graphics"

export function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      title: "Desarrollo Agéntico",
      description: "Transformamos tu negocio con desarrollo de agentes de inteligencia artificial usando metodología agéntica.",
      icon: <Bot className="w-8 h-8" />,
      features: [
        "Desarrollo acelerado con IA",
        "Soluciones personalizadas",
        "Escalabilidad garantizada",
        "Metodología Agéntica",
        "Integración inteligente",
      ],
      gradient: "from-purple-500 to-indigo-500",
      badge: "Servicio Principal",
      graphic: <AgenticGraphic />,
    },
    {
      title: "Automatización de Procesos",
      description: "Optimiza tus operaciones con sistemas inteligentes que automatizan flujos de trabajo.",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Automatización de flujos",
        "Integración de datos",
        "Arquitectura en la nube",
        "Reducción de errores 95%",
        "Eficiencia mejorada 250%",
      ],
      gradient: "from-purple-500 to-violet-500",
      badge: "Automatización",
      graphic: <AutomationGraphic />,
    },
    {
      title: "Consultoría Tecnológica",
      description: "Guiamos tu transformación digital con estrategias personalizadas y soluciones innovadoras.",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Estrategias de innovación",
        "Análisis y optimización",
        "Implementación ágil",
        "ROI promedio 320%",
        "Resultados garantizados",
      ],
      gradient: "from-orange-500 to-yellow-500",
      badge: "Consultoría",
      graphic: <ConsultingGraphic />,
    },
    {
      title: "Desarrollo Web",
      description: "Sitios web de vanguardia que convierten visitantes en clientes con máximo rendimiento.",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Velocidades ultrarrápidas",
        "Seguridad empresarial",
        "Diseño optimizado",
        "Arquitectura escalable",
        "Diseño mobile-first",
      ],
      gradient: "from-blue-500 to-cyan-500",
      badge: "Desarrollo",
      graphic: <WebDevGraphic />,
    },
    {
      title: "Aplicaciones Móviles",
      description: "Experiencias móviles poderosas que involucran usuarios e impulsan crecimiento empresarial.",
      icon: <Smartphone className="w-8 h-8" />,
      features: [
        "Compatibilidad multiplataforma",
        "Sincronización tiempo real",
        "Seguridad avanzada",
        "Analíticas integradas",
        "Desarrollo 2x más rápido",
      ],
      gradient: "from-red-500 to-pink-500",
      badge: "Móvil",
      graphic: <MobileGraphic />,
    },
    {
      title: "Arquitectura de Software",
      description: "Arquitecturas escalables y robustas que soportan el crecimiento de tu negocio.",
      icon: <Building2 className="w-8 h-8" />,
      features: [
        "Diseño escalable",
        "Arquitectura microservicios",
        "Seguridad por diseño",
        "Mejores prácticas",
        "Entrega a tiempo 98%",
      ],
      gradient: "from-pink-500 to-rose-500",
      badge: "Arquitectura",
      graphic: <ArchitectureGraphic />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold">
              <span className="text-white">Nuestros </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-600">
                Servicios
              </span>
            </h2>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluciones integrales que abarcan innovación digital y excelencia tecnológica
            </p>
          </motion.div>

          {/* Services grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="relative h-full rounded-2xl border border-border/50 bg-background/80 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]">
                  {/* Animated graphic background */}
                  <div className={`absolute inset-0 text-primary`}>{service.graphic}</div>

                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Arrow icon */}
                  <div className="absolute top-6 right-6 z-10">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>

                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Badge */}
                    <div className="mb-4">
                      <Badge variant="outline" className="bg-background/50 border-border/50">
                        {service.badge}
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                      {/* Features list */}
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action button */}
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <button className="group/btn flex items-center text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium">
                        <span>Saber Más</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
