import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, MailIcon, LinkedinIcon, TwitterIcon, FacebookIcon } from 'lucide-react';
export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer id="contacto" className="bg-slate-900 dark:bg-slate-950 text-white py-12 md:py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <h3 className="text-2xl font-bold text-white mb-4">HasugueSoft</h3>
            <p className="text-slate-300 mb-6">
              Transformando PyMEs colombianas con desarrollo agéntico y
              soluciones de automatización impulsadas por IA.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <FacebookIcon className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
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
          delay: 0.2
        }}>
            <h3 className="text-lg font-semibold text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-slate-300 hover:text-white transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicios')} className="text-slate-300 hover:text-white transition-colors">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('calculadora')} className="text-slate-300 hover:text-white transition-colors">
                  Calculadora ROI
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('proceso')} className="text-slate-300 hover:text-white transition-colors">
                  Proceso
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('casos')} className="text-slate-300 hover:text-white transition-colors">
                  Casos de Éxito
                </button>
              </li>
            </ul>
          </motion.div>
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
          delay: 0.4
        }}>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contáctanos
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-300">
                  Calle 100 #11B-27, Bogotá, Colombia
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-slate-300">+57 (601) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                <span className="text-slate-300">info@hasuguesoft.co</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                Agendar Una Llamada
              </button>
            </div>
          </motion.div>
        </div>
        <div className="border-t border-slate-700 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2023 HasugueSoft. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}