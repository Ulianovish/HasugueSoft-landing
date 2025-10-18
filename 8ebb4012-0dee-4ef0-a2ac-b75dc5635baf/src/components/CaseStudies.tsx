import React from 'react';
import { motion } from 'framer-motion';
import { PackageIcon, ClipboardIcon, FactoryIcon } from 'lucide-react';
export function CaseStudies() {
  const caseStudies = [{
    icon: <PackageIcon className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
    title: 'Distribuidora Nacional',
    industry: 'Distribución',
    challenge: 'Errores frecuentes en inventario y procesos manuales lentos',
    solution: 'Sistema de gestión de inventario con IA predictiva',
    results: ['Reducción de errores del 15% al 2%', 'Ahorro de 25 horas semanales en procesos', 'ROI del 320% en 8 meses'],
    quote: 'La automatización nos permitió enfocarnos en crecimiento en lugar de corrección de errores.',
    person: 'María Gómez, Gerente de Logística'
  }, {
    icon: <ClipboardIcon className="h-12 w-12 text-purple-500 dark:text-purple-400" />,
    title: 'Consultora Estratégica',
    industry: 'Consultoría',
    challenge: 'Seguimiento manual de tiempo y recursos en proyectos',
    solution: 'Plataforma integrada de time tracking con IA',
    results: ['Ahorro de 20 horas semanales en reportes', 'Facturación optimizada con 12% de incremento', 'Visibilidad en tiempo real de recursos'],
    quote: 'Pasamos de usar 5 herramientas diferentes a una solución integrada que nos da visibilidad total.',
    person: 'Andrés López, Director de Proyectos'
  }, {
    icon: <FactoryIcon className="h-12 w-12 text-orange-500 dark:text-orange-400" />,
    title: 'Manufacturera del Valle',
    industry: 'Manufactura',
    challenge: 'Control manual de producción con altos tiempos muertos',
    solution: 'Sistema de control de producción con IA predictiva',
    results: ['Mejora de eficiencia del 35%', 'Reducción de desperdicios del 22%', 'Ahorro anual de $120M COP'],
    quote: 'Nuestra planta ahora opera con precisión y podemos predecir problemas antes de que ocurran.',
    person: 'Roberto Sánchez, Jefe de Planta'
  }];
  return <section id="casos" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
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
            Casos de Éxito
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
            Empresas colombianas que ya están viendo resultados con nuestras
            soluciones
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.1 * index
        }} className="bg-white dark:bg-slate-700 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex justify-center mb-4">{study.icon}</div>
                <h3 className="text-xl font-bold text-center text-slate-800 dark:text-white mb-2">
                  {study.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-4">
                  Industria: {study.industry}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Desafío:
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {study.challenge}
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Solución:
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    {study.solution}
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-200 mb-1">
                    Resultados:
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {study.results.map((result, i) => <li key={i} className="mb-1">
                        {result}
                      </li>)}
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 border-t border-slate-100 dark:border-slate-600">
                <p className="text-slate-600 dark:text-slate-300 italic text-sm mb-2">
                  "{study.quote}"
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                  {study.person}
                </p>
              </div>
            </motion.div>)}
        </div>
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
        delay: 0.6
      }} className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors shadow-md">
            Ver Más Casos de Éxito
          </button>
        </motion.div>
      </div>
    </section>;
}