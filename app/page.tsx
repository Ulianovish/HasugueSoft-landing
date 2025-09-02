"use client"

import Link from "next/link"
import { CodeRain } from "@/components/code-rain"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"


import { SpinningEarth } from "@/components/spinning-earth"
import { TypingHero } from "@/components/typing-hero"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { ServicesViewportSection } from "@/components/services-viewport-section"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 z-0">
        {/* Spinning Earth */}
        <div className="opacity-10">
          <SpinningEarth />
        </div>
        {/* Code rain */}
        <div className="opacity-10 dark:opacity-10 light:opacity-3">
          <CodeRain />
        </div>
      </div>

      {/* Hero Video - Full screen background */}
      <div className="fixed inset-0 z-[1] pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          style={{
            filter: "contrast(1.2) brightness(0.7) grayscale(100%)",
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp%20%283%29%20%281%29%20%282%29%20%282%29-i8U3zTcWrQss8nKM5ekseP7qFR5KVP.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content container */}
      <div className="relative z-10">
        <NavBar />
        <ProfileDropdown />

        {/* Hero section with better contrast */}
        <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">


            {/* Enhanced hero with better contrast */}
            <div className="relative">
              {/* Background for better contrast in light mode */}
              <div className="absolute inset-0 bg-background/80 dark:bg-transparent rounded-2xl blur-3xl"></div>
              <div className="relative z-10">
                <TypingHero />
              </div>
            </div>

            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8"></div>

            {/* Enhanced description with better contrast */}
            <div className="relative">
              <div className="absolute inset-0 bg-background/60 dark:bg-transparent rounded-xl blur-2xl"></div>
              <p className="relative z-10 text-muted-foreground max-w-xl mx-auto font-medium">
                ¿Tu competencia ya automatizó y tú sigues perdiendo tiempo en procesos manuales? En solo 6 semanas, transformamos tu PyME con IA que realmente funciona. 15 años perfeccionando nuestra metodología ágil Resultados garantizados que verás desde la primera semana.
              </p>
            </div>


          </div>
        </section>

        {/* Expertise section */}
  

        {/* Services viewport section */}
        <ServicesViewportSection />

        {/* Enhanced Contact section */}
        <section id="contact" className="py-20 px-4 sm:px-6 relative bg-black">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-foreground">Ready to </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                  innovate?
                </span>
              </motion.h2>
              <motion.div
                className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Conversemos sobre cómo podemos automatizar tus procesos críticos con desarrollo agéntico, reduciendo costos y tiempos de implementación para tu PyME.
              </motion.p>
            </div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/services"
                    className="group relative px-6 py-3 bg-gray-800 text-white rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Servicios</span>
                    </span>
                  </Link>

                  <Link
                    href="/consultation"
                    className="group relative px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg font-medium text-base hover:from-purple-400 hover:to-violet-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                  >
                    <span className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Demo Gratuita</span>
                    </span>
                  </Link>

                  <Link
                    href="/support"
                    className="group relative px-6 py-3 bg-gray-800 text-white rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
                  >
                    <span className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Soporte</span>
                    </span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-2xl">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Sin compromiso inicial</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Diagnóstico de procesos</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Propuesta agéntica</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
