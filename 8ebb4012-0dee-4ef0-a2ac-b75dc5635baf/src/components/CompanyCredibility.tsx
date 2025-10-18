import React from 'react';
import { motion } from 'framer-motion';
import { AwardIcon, TrendingUpIcon, UserCheckIcon, ShieldIcon } from 'lucide-react';
export function CompanyCredibility() {
  const credentials = [{
    icon: <AwardIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
    title: '15 Años de Experiencia',
    description: 'Trayectoria comprobada en desarrollo de software para empresas líderes en Colombia y Latinoamérica.'
  }, {
    icon: <TrendingUpIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
    title: 'BMAD-METHOD™',
    description: 'Metodología propietaria que combina las mejores prácticas de desarrollo con tecnologías de IA avanzadas.'
  }, {
    icon: <UserCheckIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
    title: 'Equipo Especializado',
    description: 'Ingenieros y consultores con experiencia enterprise adaptando soluciones para PyMEs.'
  }, {
    icon: <ShieldIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />,
    title: 'Garantía de Resultados',
    description: 'Nos comprometemos con métricas claras y resultados tangibles para tu negocio.'
  }];
  return <section id="empresa" className="py-16 md:py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
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
            ¿Por qué HasugueSoft?
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
            Llevamos capacidades enterprise a PyMEs por primera vez en Colombia
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {credentials.map((credential, index) => <motion.div key={index} initial={{
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
        }} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">{credential.icon}</div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                {credential.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                {credential.description}
              </p>
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
      }} className="mt-16 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              Nuestra Promesa
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              No solo desarrollamos software, creamos soluciones que transforman
              tu negocio
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                50-70%
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Reducción en tiempo de desarrollo
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                40-60%
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Reducción en costos vs desarrollo tradicional
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                280%
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                ROI promedio en implementaciones
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}