"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Calendar, Send, CheckCircle } from "lucide-react"

interface DemoFormProps {
  trigger?: React.ReactNode
  triggerText?: string
}

export function DemoFormModal({ trigger, triggerText = "Solicitar Demo Gratuita" }: DemoFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    employees: "",
    industry: "",
    challenges: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Auto close after success
    setTimeout(() => {
      setIsOpen(false)
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        employees: "",
        industry: "",
        challenges: "",
        timeline: "",
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">{triggerText}</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Solicitar Demo Gratuita
          </DialogTitle>
          <DialogDescription>
            Agenda una demostración personalizada de 30 minutos y descubre cómo el desarrollo agéntico puede transformar
            tu empresa
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8">
            <CheckCircle className="h-16 w-16 text-success mb-4" />
            <h3 className="text-xl font-semibold text-success mb-2">¡Demo Agendada!</h3>
            <p className="text-center text-muted-foreground mb-4">
              Recibirás un email de confirmación con los detalles de tu demo personalizada. Nuestro equipo se contactará
              contigo dentro de 2 horas.
            </p>
            <div className="text-sm text-muted-foreground text-center">
              <p>📅 Demo de 30 minutos</p>
              <p>💡 Análisis personalizado de tu caso</p>
              <p>📊 Estimación de ROI específica</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Tu nombre"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email corporativo *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@empresa.com"
                />
              </div>
            </div>

            {/* Company Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">Empresa *</Label>
                <Input
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+57 300 123 4567"
                />
              </div>
            </div>

            {/* Company Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="employees">Número de empleados *</Label>
                <Select value={formData.employees} onValueChange={(value) => handleSelectChange("employees", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona el tamaño" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10-50">10-50 empleados</SelectItem>
                    <SelectItem value="51-100">51-100 empleados</SelectItem>
                    <SelectItem value="101-200">101-200 empleados</SelectItem>
                    <SelectItem value="201-500">201-500 empleados</SelectItem>
                    <SelectItem value="500+">500+ empleados</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="industry">Industria *</Label>
                <Select value={formData.industry} onValueChange={(value) => handleSelectChange("industry", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu industria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distribucion">Distribución y Logística</SelectItem>
                    <SelectItem value="consultoria">Consultoría</SelectItem>
                    <SelectItem value="manufactura">Manufactura</SelectItem>
                    <SelectItem value="retail">Retail y Comercio</SelectItem>
                    <SelectItem value="servicios">Servicios Profesionales</SelectItem>
                    <SelectItem value="tecnologia">Tecnología</SelectItem>
                    <SelectItem value="salud">Salud</SelectItem>
                    <SelectItem value="educacion">Educación</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-2">
              <Label htmlFor="challenges">Principales desafíos operativos *</Label>
              <Textarea
                id="challenges"
                name="challenges"
                required
                value={formData.challenges}
                onChange={handleInputChange}
                placeholder="Describe los procesos manuales o ineficiencias que te gustaría automatizar..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Timeline deseado</Label>
              <Select value={formData.timeline} onValueChange={(value) => handleSelectChange("timeline", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="¿Cuándo te gustaría implementar?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inmediato">Inmediato (1-2 semanas)</SelectItem>
                  <SelectItem value="corto">Corto plazo (1-2 meses)</SelectItem>
                  <SelectItem value="medio">Mediano plazo (3-6 meses)</SelectItem>
                  <SelectItem value="largo">Largo plazo (6+ meses)</SelectItem>
                  <SelectItem value="explorando">Solo explorando opciones</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={
                isSubmitting ||
                !formData.name ||
                !formData.email ||
                !formData.company ||
                !formData.phone ||
                !formData.employees ||
                !formData.industry ||
                !formData.challenges
              }
            >
              {isSubmitting ? (
                "Agendando Demo..."
              ) : (
                <>
                  Agendar Mi Demo Gratuita
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Al enviar este formulario, aceptas que nos contactemos contigo para coordinar tu demo personalizada. No
              compartimos tu información con terceros.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
