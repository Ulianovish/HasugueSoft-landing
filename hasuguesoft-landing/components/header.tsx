"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { DemoFormModal } from "@/components/demo-form-modal"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gradient">HasugueSoft</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors">
              Servicios
            </a>
            <a href="#proceso" className="text-muted-foreground hover:text-foreground transition-colors">
              Proceso
            </a>
            <a href="#casos" className="text-muted-foreground hover:text-foreground transition-colors">
              Casos de Éxito
            </a>
            <a href="#empresa" className="text-muted-foreground hover:text-foreground transition-colors">
              Empresa
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <DemoFormModal />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2">
              <a
                href="#servicios"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#proceso"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Proceso
              </a>
              <a
                href="#casos"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Casos de Éxito
              </a>
              <a
                href="#empresa"
                className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Empresa
              </a>
              <div className="px-3 py-2">
                <DemoFormModal
                  trigger={
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Solicitar Demo Gratuita
                    </Button>
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
