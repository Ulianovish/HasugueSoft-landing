export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">HasugueSoft</div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Llevamos capacidades enterprise a PyMEs por primera vez en Colombia. 15 años de experiencia en desarrollo
              agéntico.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>Bogotá, Colombia</p>
              <p>contacto@hasuguesoft.com</p>
              <p>+57 (1) 234-5678</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Desarrollo Agéntico
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Automatización de Procesos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Consultoría IA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  BMAD-METHOD™
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 HasugueSoft. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
