"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Send } from "lucide-react"

export function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
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
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="bg-success/10 border-success/20">
        <CardContent className="flex flex-col items-center justify-center py-8">
          <FileText className="h-12 w-12 text-success mb-4" />
          <h3 className="text-xl font-semibold text-success mb-2">¡Reporte Enviado!</h3>
          <p className="text-center text-muted-foreground">
            Recibirás tu reporte detallado de potencial de ahorro en tu email en los próximos minutos. Nuestro equipo se
            contactará contigo dentro de 24 horas.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          Recibe Reporte Detallado
        </CardTitle>
        <CardDescription>
          Obtén un análisis completo de tu potencial de ahorro y una propuesta personalizada
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              <Label htmlFor="phone">Teléfono (opcional)</Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+57 300 123 4567"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Cuéntanos sobre tus procesos actuales (opcional)</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Describe brevemente los procesos que te gustaría automatizar..."
              rows={3}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                Recibir Reporte Detallado
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Al enviar este formulario, aceptas que nos contactemos contigo para enviarte información relevante sobre
            nuestros servicios.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
