import React, { useState } from 'react';
import { motion } from 'framer-motion';
type FormData = {
  employees: string;
  processes: number;
  hours: number;
  costs: number;
  name: string;
  email: string;
  company: string;
  phone: string;
};
type CalculationResult = {
  annualCost: number;
  projectedSavings: number;
  roiPercentage: number;
  recoveryPeriod: number;
};
export function ROICalculator() {
  const [formData, setFormData] = useState<FormData>({
    employees: '50-100',
    processes: 10,
    hours: 20,
    costs: 15000000,
    name: '',
    email: '',
    company: '',
    phone: ''
  });
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    [key: string]: string;
  }>({});
  // Format currency in COP
  const formatCOP = (value: number): string => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  // Format currency in USD
  const formatUSD = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };
  // Convert COP to USD (approximate)
  const copToUsd = (cop: number): number => {
    const exchangeRate = 4000; // Approximate COP to USD exchange rate
    return cop / exchangeRate;
  };
  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    if (name === 'processes' || name === 'hours') {
      setFormData({
        ...formData,
        [name]: parseInt(value)
      });
    } else if (name === 'costs') {
      // Remove non-numeric characters for currency input
      const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
      setFormData({
        ...formData,
        [name]: numericValue
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  // Calculate ROI
  const calculateROI = () => {
    // Average hourly cost based on monthly costs and typical work hours
    const avgHourlyCost = formData.costs / 160; // Assuming 160 working hours per month
    // Annual cost of manual processes
    const annualCost = formData.processes * formData.hours * avgHourlyCost * 52; // 52 weeks in a year
    // Projected savings (typically 40-60% of current costs)
    const projectedSavings = annualCost * 0.5; // Using 50% as an average
    // Average implementation cost based on company size
    let implementationCost = 0;
    switch (formData.employees) {
      case '50-100':
        implementationCost = 20000000; // ~$5K USD
        break;
      case '101-200':
        implementationCost = 40000000; // ~$10K USD
        break;
      case '201-500':
        implementationCost = 60000000; // ~$15K USD
        break;
      default:
        implementationCost = 20000000;
    }
    // ROI percentage
    const roiPercentage = projectedSavings / implementationCost * 100;
    // Recovery period in months
    const recoveryPeriod = implementationCost / (projectedSavings / 12);
    setCalculationResult({
      annualCost,
      projectedSavings,
      roiPercentage,
      recoveryPeriod
    });
    setShowLeadForm(true);
  };
  // Validate lead form
  const validateForm = (): boolean => {
    const errors: {
      [key: string]: string;
    } = {};
    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Email inválido';
    }
    if (!formData.company.trim()) {
      errors.company = 'El nombre de la empresa es requerido';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would typically send the data to your backend or CRM
      console.log('Form submitted:', formData);
      setFormSubmitted(true);
    }
  };
  return <section id="calculadora" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
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
            Calculadora de ROI
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
            Descubre cuánto puede ahorrar tu empresa con la automatización de
            procesos mediante IA
          </motion.p>
        </div>
        <div className="max-w-4xl mx-auto">
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
          delay: 0.3
        }} className="bg-white dark:bg-slate-700 rounded-xl shadow-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                    Número de empleados
                  </label>
                  <select name="employees" value={formData.employees} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="50-100">50-100 empleados</option>
                    <option value="101-200">101-200 empleados</option>
                    <option value="201-500">201-500 empleados</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                    Procesos manuales actuales: {formData.processes}
                  </label>
                  <input type="range" name="processes" min="5" max="50" value={formData.processes} onChange={handleInputChange} className="w-full h-2 bg-slate-200 dark:bg-slate-600 rounded-lg appearance-none cursor-pointer" />
                  <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <span>5</span>
                    <span>50</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                    Horas perdidas semanalmente
                  </label>
                  <input type="number" name="hours" value={formData.hours} onChange={handleInputChange} min="1" className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                    Costos operativos mensuales (COP)
                  </label>
                  <input type="text" name="costs" value={formatCOP(formData.costs)} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <button onClick={calculateROI} className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 rounded-md font-medium transition-colors">
                  Calcular Ahorro Potencial
                </button>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                {!calculationResult ? <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="text-6xl text-blue-200 dark:text-blue-900 mb-4">
                      %
                    </div>
                    <p className="text-slate-500 dark:text-slate-400">
                      Completa el formulario para calcular tu ahorro potencial
                      con la automatización de procesos
                    </p>
                  </div> : <div className="space-y-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white text-center">
                      Resultados del Análisis
                    </h3>
                    <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Costo anual actual
                      </p>
                      <p className="text-2xl font-bold text-slate-800 dark:text-white">
                        {formatCOP(calculationResult.annualCost)}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        ({formatUSD(copToUsd(calculationResult.annualCost))})
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-4 text-center">
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        Ahorro proyectado anual
                      </p>
                      <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                        {formatCOP(calculationResult.projectedSavings)}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        (
                        {formatUSD(copToUsd(calculationResult.projectedSavings))}
                        )
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-4 text-center">
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          ROI
                        </p>
                        <p className="text-2xl font-bold text-orange-500 dark:text-orange-400">
                          {Math.round(calculationResult.roiPercentage)}%
                        </p>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 text-center">
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Recuperación
                        </p>
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          {Math.round(calculationResult.recoveryPeriod)} meses
                        </p>
                      </div>
                    </div>
                  </div>}
              </div>
            </div>
            {showLeadForm && !formSubmitted && <motion.div initial={{
            opacity: 0,
            height: 0
          }} animate={{
            opacity: 1,
            height: 'auto'
          }} transition={{
            duration: 0.5
          }} className="mt-8 border-t border-slate-200 dark:border-slate-600 pt-6">
                <h3 className="text-lg font-medium text-slate-800 dark:text-white mb-4">
                  Recibe un reporte detallado de tu potencial de ahorro
                </h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                      Nombre completo*
                    </label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={`w-full rounded-md border ${formErrors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    {formErrors.name && <p className="text-red-500 dark:text-red-400 text-xs mt-1">
                        {formErrors.name}
                      </p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                      Email corporativo*
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={`w-full rounded-md border ${formErrors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    {formErrors.email && <p className="text-red-500 dark:text-red-400 text-xs mt-1">
                        {formErrors.email}
                      </p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                      Empresa*
                    </label>
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} className={`w-full rounded-md border ${formErrors.company ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`} />
                    {formErrors.company && <p className="text-red-500 dark:text-red-400 text-xs mt-1">
                        {formErrors.company}
                      </p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                      Teléfono (opcional)
                    </label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="md:col-span-2">
                    <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white py-3 rounded-md font-medium transition-colors">
                      Recibir Reporte Detallado
                    </button>
                  </div>
                </form>
              </motion.div>}
            {formSubmitted && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5
          }} className="mt-8 text-center bg-green-50 dark:bg-green-900/30 p-6 rounded-lg">
                <div className="text-green-500 dark:text-green-400 text-4xl mb-4">
                  ✓
                </div>
                <h3 className="text-xl font-medium text-slate-800 dark:text-white mb-2">
                  ¡Gracias por tu interés!
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Hemos recibido tu solicitud. En breve recibirás un reporte
                  detallado sobre el potencial de ahorro para tu empresa.
                </p>
              </motion.div>}
          </motion.div>
        </div>
      </div>
    </section>;
}