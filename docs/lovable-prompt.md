# Prompt Optimizado para Lovable - HasugueSoft Landing Page

## Contexto del Proyecto

Crea una landing page profesional para HasugueSoft, una empresa colombiana que ofrece "desarrollo agéntico" (desarrollo de software potenciado por IA) para PyMEs. El objetivo es generar 50+ leads calificados mensuales de empresas con presupuestos de $5K+ para automatización de procesos.

**Tech Stack Requerido:**
- Astro con TypeScript
- React para componentes interactivos
- Tailwind CSS para styling
- Framer Motion para animaciones
- Formularios con validación
- Integración con APIs (HubSpot CRM)
- Optimización para SEO y Core Web Vitals

## Objetivo Principal

Crear una landing page de una sola página que eduque al mercado colombiano sobre "desarrollo agéntico" y convierta visitantes en leads calificados a través de una calculadora ROI interactiva y contenido educativo convincente.

## Instrucciones Detalladas Paso a Paso

### 1. Estructura de la Página
1. Crea una landing page de una sola página con navegación suave entre secciones usando Astro con TypeScript
2. Implementa un header sticky con logo HasugueSoft y navegación responsive
3. Organiza el contenido en estas secciones principales:
   - Hero Section con CTA prominente
   - Value Proposition Comparison (tabla comparativa)
   - ROI Calculator (componente React interactivo principal)
   - Process Explanation (4 pasos del BMAD-METHOD™ con timeline)
   - Case Studies (3 casos de éxito colombianos)
   - Company Credibility (15 años experiencia)
   - Footer con información de contacto y ubicación Colombia

### 2. Hero Section
1. Headline principal: "Automatiza tus procesos con IA en 6 semanas, no 6 meses"
2. Subheadline: "15 años de experiencia enterprise + metodología agéntica = Resultados en tiempo récord"
3. CTA primario prominente: "Solicitar Demo Gratuita"
4. Indicador de confianza: "Empresas colombianas ya están ahorrando $85K anuales"
5. Fondo con gradiente sutil y elementos visuales que sugieran automatización
6. Completamente responsive con optimización mobile-first

### 3. Calculadora ROI (Componente Crítico)
1. Crea un componente React interactivo con estos campos:
   - Número de empleados (dropdown: 50-100, 101-200, 201-500)
   - Procesos manuales actuales (slider: 5-50)
   - Horas perdidas semanalmente (input numérico)
   - Costos operativos mensuales (input con formato de pesos colombianos)
2. Implementa cálculo en tiempo real que muestre:
   - Costo anual actual de procesos manuales
   - Ahorro proyectado con automatización
   - ROI porcentual y período de recuperación
   - Resultados en pesos colombianos y USD
3. Integra captura de leads después del cálculo:
   - Campos: nombre, email, empresa, teléfono (opcional)
   - Validación en tiempo real
   - Mensaje: "Recibe reporte detallado de tu potencial de ahorro"
4. Muestra resultados con gráficos visuales y breakdown de ahorros

### 4. Sección de Comparación de Valor
1. Tabla comparativa visual mostrando:
   - Desarrollo Agéntico: 6-8 semanas, $5K-15K, alta personalización
   - Desarrollo Tradicional: 12-20 semanas, $25K+, alta personalización
   - SaaS: Inmediato, $500-2K/mes, baja personalización
2. Destacar beneficios del enfoque agéntico con iconos y métricas
3. Incluir equivalencias en pesos colombianos

### 5. Explicación del Proceso (BMAD-METHOD™)
1. Visualización de 4 pasos con timeline:
   - Diagnóstico (1 semana)
   - Diseño (1-2 semanas)
   - Desarrollo Agéntico (3-4 semanas)
   - Implementación (1-2 semanas)
2. Comparación visual con timeline tradicional (12-20 semanas)
3. Testimonial integrado: "El proceso fue transparente desde el día 1"

### 6. Casos de Estudio
1. Tres casos específicos por industria:
   - **Distribuidora:** Automatización de inventarios, reducción de errores del 15% al 2%
   - **Consultoría:** Time tracking automatizado, ahorro de 20 horas semanales
   - **Manufactura:** Control de producción, mejora de eficiencia del 35%
2. Cada caso debe incluir métricas específicas y testimoniales
3. Diseño en cards con iconos de industria

### 7. Credibilidad de la Empresa
1. Destacar "15 años de experiencia enterprise"
2. Explicar BMAD-METHOD™ como metodología propietaria
3. Mostrar credenciales sin jerga técnica intimidante
4. Mensaje clave: "Llevamos capacidades enterprise a PyMEs por primera vez en Colombia"

## Especificaciones de Diseño y Estilo

### Paleta de Colores
- **Primary:** #2563EB (azul profesional para CTAs principales)
- **Secondary:** #7C3AED (púrpura para acentos)
- **Accent:** #F59E0B (naranja para destacar ROI y métricas)
- **Success:** #10B981 (verde para métricas positivas)
- **Neutral:** #64748B, #F8FAFC (texto y fondos)

### Tipografía
- **Headings:** Poppins (600-700 weight)
- **Body:** Inter (400-500 weight)
- **Tamaños:** H1: 3.5rem, H2: 2.5rem, Body: 1rem (mobile-first)

### Componentes Clave
1. **Botones primarios:** Gradiente sutil, hover effects, estados de loading
2. **Cards de casos de estudio:** Elevación sutil, hover animations
3. **Inputs de calculadora:** Validación visual, formato de moneda colombiana
4. **Navegación:** Sticky header con indicador de progreso

### Responsividad
- **Mobile (320-767px):** Layout de una columna, navegación hamburger
- **Tablet (768-1023px):** Layout híbrido, calculadora en dos columnas
- **Desktop (1024px+):** Layout completo, hover states activos

## Restricciones y Consideraciones Técnicas

### Performance
- Carga inicial < 3 segundos (aprovechando SSG de Astro)
- Lazy loading para imágenes below-the-fold
- Optimización de Core Web Vitals
- Animaciones a 60fps consistente
- Hidratación selectiva de componentes React

### Accesibilidad
- Contraste WCAG AA (4.5:1 mínimo)
- Navegación completa por teclado
- Alt text descriptivo para todas las imágenes
- Etiquetas semánticas HTML5

### SEO
- Meta tags optimizados para "automatización procesos PyMEs Colombia"
- Structured data para empresa local
- Optimización para búsquedas locales (Bogotá, Medellín, Cali)
- Aprovechamiento del SSG de Astro para mejor SEO

### Integraciones Requeridas
- Google Analytics 4 con eventos personalizados
- Pixel de Facebook/Meta para retargeting
- Preparación para integración HubSpot (formularios)
- Hotjar para análisis de comportamiento

## Alcance Específico del Desarrollo

**CREAR:**
- Página principal completa (index.astro)
- Componente React de calculadora ROI interactiva
- Componentes Astro reutilizables (Button, Card, Input, etc.)
- Layout responsive con navegación
- Formularios con validación
- Animaciones y micro-interacciones

**NO MODIFICAR:**
- Configuraciones de Astro existentes
- Archivos de configuración de Tailwind (usar clases estándar)
- Estructura de carpetas del proyecto

## Contenido Específico a Incluir

### Headlines y Copy Principal
- "Automatiza tus procesos con IA en 6 semanas, no 6 meses"
- "15 años de experiencia enterprise + metodología agéntica = Resultados en tiempo récord"
- "Empresas colombianas ya están ahorrando $85K anuales promedio"
- "Llevamos capacidades enterprise a PyMEs por primera vez en Colombia"

### Métricas Clave para Mostrar
- 50-70% reducción en tiempo de desarrollo
- 40-60% reducción en costos vs desarrollo tradicional
- ROI promedio del 280% en implementaciones
- 6-8 semanas vs 12-20 semanas tradicional

### CTAs Principales
- "Solicitar Demo Gratuita" (primario)
- "Calcular Mi ROI" (calculadora)
- "Ver Casos de Éxito" (casos de estudio)
- "Recibe Reporte Detallado" (post-calculadora)

## Notas Importantes

1. **Enfoque Mobile-First:** 70% del tráfico esperado es móvil
2. **Contexto Colombiano:** Usar pesos colombianos, terminología local, referencias culturales apropiadas
3. **Educación del Mercado:** Explicar "desarrollo agéntico" sin intimidar con jerga técnica
4. **Conversión Optimizada:** Objetivo de 8-12% de conversión visitante-a-lead
5. **Trust Building:** Elementos de credibilidad distribuidos estratégicamente

**CRÍTICO:** Todo el código generado requerirá revisión humana, testing exhaustivo y refinamiento antes de considerarse listo para producción. La calculadora ROI es el componente más crítico y debe funcionar perfectamente en todos los dispositivos.