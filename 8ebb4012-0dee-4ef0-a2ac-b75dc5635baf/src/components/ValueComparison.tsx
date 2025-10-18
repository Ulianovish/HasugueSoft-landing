import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, XIcon, ClockIcon, DollarSignIcon, SlidersIcon } from 'lucide-react';
export function ValueComparison() {
  const comparisonData = [{
    title: 'Desarrollo Agéntico',
    timeframe: '6-8 semanas',
    cost: '$5K-15K USD',
    costCOP: '~20M-60M COP',
    customization: 'Alta',
    maintenance: 'Incluido 3 meses',
    highlight: true,
    icon: <SlidersIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />
  }, {
    title: 'Desarrollo Tradicional',
    timeframe: '12-20 semanas',
    cost: '$25K+ USD',
    costCOP: '~100M+ COP',
    customization: 'Alta',
    maintenance: 'Costo adicional',
    highlight: false,
    icon: <ClockIcon className="h-8 w-8 text-slate-500 dark:text-slate-400" />
  }, {
    title: 'Solución SaaS',
    timeframe: 'Inmediato',
    cost: '$500-2K USD/mes',
    costCOP: '~2M-8M COP/mes',
    customization: 'Baja',
    maintenance: 'Incluido',
    highlight: false,
    icon: <DollarSignIcon className="h-8 w-8 text-slate-500 dark:text-slate-400" />
  }];
  return <section id="servicios" className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
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
            Comparativa de Valor
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
            Descubre por qué el desarrollo agéntico ofrece el mejor balance
            entre velocidad, costo y personalización para PyMEs colombianas.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {comparisonData.map((option, index) => <motion.div key={index} initial={{
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
        }} className={`rounded-lg p-6 ${option.highlight ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500 dark:border-blue-400 shadow-lg' : 'bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>
              <div className={`flex justify-center mb-4 ${option.highlight ? 'scale-110' : ''}`}>
                {option.icon}
              </div>
              <h3 className={`text-xl font-bold text-center mb-4 ${option.highlight ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200'}`}>
                {option.title}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Tiempo de desarrollo
                  </p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {option.timeframe}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Costo
                  </p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {option.cost}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {option.costCOP}
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-sm text-slate-500 dark:text-slate-400 mr-2">
                    Personalización
                  </p>
                  {option.customization === 'Alta' ? <CheckIcon className="h-5 w-5 text-green-500 dark:text-green-400" /> : <XIcon className="h-5 w-5 text-red-500 dark:text-red-400" />}
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Mantenimiento
                  </p>
                  <p className="font-semibold text-slate-700 dark:text-slate-200">
                    {option.maintenance}
                  </p>
                </div>
              </div>
              {option.highlight && <div className="mt-6 text-center">
                  <span className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    Recomendado
                  </span>
                </div>}
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
        delay: 0.5
      }} className="text-center mt-12">
          <p className="text-slate-600 dark:text-slate-300 italic">
            "El desarrollo agéntico reduce costos en un 40-60% vs el desarrollo
            tradicional, con tiempos de entrega hasta 3 veces más rápidos"
          </p>
        </motion.div>
      </div>
    </section>;
}