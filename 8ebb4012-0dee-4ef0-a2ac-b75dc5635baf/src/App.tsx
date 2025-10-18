import React from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ValueComparison } from './components/ValueComparison';
import { ROICalculator } from './components/ROICalculator';
import { ProcessExplanation } from './components/ProcessExplanation';
import { CaseStudies } from './components/CaseStudies';
import { CompanyCredibility } from './components/CompanyCredibility';
import { Footer } from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';
export function App() {
  return <ThemeProvider>
      <div className="font-sans bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Header />
        <main>
          <HeroSection />
          <ValueComparison />
          <ROICalculator />
          <ProcessExplanation />
          <CaseStudies />
          <CompanyCredibility />
        </main>
        <Footer />
      </div>
    </ThemeProvider>;
}