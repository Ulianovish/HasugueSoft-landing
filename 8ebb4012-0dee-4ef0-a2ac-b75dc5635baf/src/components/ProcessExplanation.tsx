import React from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, PencilIcon, CodeIcon, PlayIcon } from 'lucide-react';
export function ProcessExplanation() {
  const steps = [{
    icon: <SearchIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
    title: 'Diagnóstico',
    duration: '1 semana',
    description: 'Analizamos tus procesos actuales e identificamos oportunidades de automatización con IA.',
    color: 'blue'
  }, {
    icon: <PencilIcon className="h-8 w-8 text-purple-500 dark:text-purple-400" />,
    title: 'Diseño',
    duration: '1-2 semanas',
    description: 'Creamos un plan detallado y diseñamos la solución a medida para tu empresa.',
    color: 'purple'
  }, {
    icon: <CodeIcon className="h-8 w-8 text-orange-500 dark:text-orange-400" />,
    title: 'Desarrollo Agéntico',
    duration: '3-4 semanas',
    description: 'Implementamos la solución utilizando IA para acelerar el desarrollo y garantizar calidad.',
    color: 'orange'
  }, {
    icon: <PlayIcon className="h-8 w-8 text-green-500 dark:text-green-400" />,
    title: 'Implementación',
    duration: '1-2 semanas',
    description: 'Integramos la solución en tu empresa y capacitamos a tu equipo para su uso.',
    color: 'green'
  }];
  return <section id="proceso" className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-2xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            El BMAD-METHOD™
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Nuestra metodología propietaria que garantiza resultados en tiempo
            récord
          </motion.p>
        </div>
        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2 * index
          }} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:mb-16 relative`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-slate-800 border-4 border-blue-500 dark:border-blue-400 hidden md:block"></div>
                {/* Content */}
                <div className="md:w-1/2 p-4">
                  <div className={`bg-${step.color}-50 dark:bg-${step.color}-900/20 p-6 rounded-lg shadow-md border-l-4 border-${step.color}-500 dark:border-${step.color}-400 relative`}>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full bg-${step.color}-100 dark:bg-${step.color}-900/30 mr-4`}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                          {step.title}
                        </h3>
                        <p className={`text-${step.color}-600 dark:text-${step.color}-400 font-medium`}>
                          {step.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      {step.description}
                    </p>
                  </div>
                </div>
                {/* Spacer for timeline */}
                <div className="md:w-1/2 p-4 hidden md:block"></div>
              </motion.div>)}
          </div>
          {/* Traditional comparison */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.8
        }} className="mt-16 bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                      BMAD-METHOD™
                    </h4>
                    <div className="text-3xl font-bold text-slate-800 dark:text-white">
                      6-8 semanas
                    </div>
                    <div className="h-4 w-48 bg-blue-500 dark:bg-blue-600 rounded-full mt-2"></div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="font-bold text-slate-600 dark:text-slate-400 mb-2">
                      Desarrollo Tradicional
                    </h4>
                    <div className="text-3xl font-bold text-slate-800 dark:text-white">
                      12-20 semanas
                    </div>
                    <div className="h-4 w-96 bg-slate-400 dark:bg-slate-500 rounded-full mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Testimonial */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 1
        }} className="mt-12 text-center">
            <div className="inline-block bg-white dark:bg-slate-800 px-8 py-6 rounded-lg shadow-md">
              <p className="text-slate-600 dark:text-slate-300 italic mb-4">
                "El proceso fue transparente desde el día 1. Nos sorprendió lo
                rápido que pudimos ver resultados tangibles con el enfoque
                agéntico."
              </p>
              <div>
                <p className="font-medium text-slate-800 dark:text-white">
                  Carlos Ramírez
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Director de Operaciones, Distribuidora Nacional
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}