import React from 'react';
import { motion } from 'framer-motion';
export function HeroSection() {
  const scrollToCalculator = () => {
    const calculator = document.getElementById('calculadora');
    if (calculator) {
      calculator.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="inicio" className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-purple-400 dark:bg-purple-600 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-400 dark:bg-blue-600 blur-3xl"></div>
        <div className="absolute top-40 left-1/3 w-48 h-48 rounded-full bg-orange-400 dark:bg-orange-600 blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-slate-800 dark:text-white">
            Automatiza tus procesos con IA en{' '}
            <span className="text-blue-600 dark:text-blue-400">6 semanas</span>,
            no 6 meses
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8">
            15 años de experiencia enterprise + metodología agéntica =
            Resultados en tiempo récord
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <button onClick={scrollToCalculator} className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors shadow-lg hover:shadow-xl">
              Solicitar Demo Gratuita
            </button>
            <button onClick={scrollToCalculator} className="bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-8 py-3 rounded-md text-lg font-medium transition-colors">
              Calcular Mi ROI
            </button>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-lg">
            <p className="text-slate-700 dark:text-slate-200 font-medium mb-2">
              Empresas colombianas ya están ahorrando
            </p>
            <p className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
              $85K anuales{' '}
              <span className="text-slate-500 dark:text-slate-400 text-lg">
                en promedio
              </span>
            </p>
            <div className="mt-4 flex justify-center gap-8">
              <div>
                <p className="text-orange-500 dark:text-orange-400 font-bold text-2xl">
                  50-70%
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  reducción en tiempo
                </p>
              </div>
              <div>
                <p className="text-green-500 dark:text-green-400 font-bold text-2xl">
                  280%
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  ROI promedio
                </p>
              </div>
              <div>
                <p className="text-purple-500 dark:text-purple-400 font-bold text-2xl">
                  6-8
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  semanas de desarrollo
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}