import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from './ThemeContext';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    theme,
    toggleTheme
  } = useTheme();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2 dark:bg-slate-800 dark:shadow-slate-700/20' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.5
      }} className="flex items-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            HasugueSoft
          </div>
        </motion.div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Inicio', 'Servicios', 'Calculadora', 'Proceso', 'Casos', 'Empresa'].map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 font-medium transition-colors">
              {item}
            </button>)}
          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors" aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}>
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button onClick={() => scrollToSection('contacto')} className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
            Solicitar Demo
          </button>
        </nav>
        {/* Mobile Navigation Toggle and Theme Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300" aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'}>
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button className="text-slate-800 dark:text-slate-200" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {/* Mobile Navigation Menu */}
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="absolute top-full left-0 right-0 bg-white dark:bg-slate-800 shadow-lg py-4 md:hidden">
            <div className="flex flex-col space-y-3 px-4">
              {['Inicio', 'Servicios', 'Calculadora', 'Proceso', 'Casos', 'Empresa'].map((item, index) => <button key={index} onClick={() => scrollToSection(item.toLowerCase())} className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 font-medium transition-colors text-left py-2">
                  {item}
                </button>)}
              <button onClick={() => scrollToSection('contacto')} className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors w-full text-center">
                Solicitar Demo
              </button>
            </div>
          </motion.div>}
      </div>
    </header>;
}