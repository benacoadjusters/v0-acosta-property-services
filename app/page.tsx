"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Phone, ArrowRight, Shield, Clock, Award, CheckCircle2, Bug, TreePine, HardHat, SprayCan, Droplets, Users, Layers, Wrench, Zap, Grid3X3, Sparkles, Waves, Droplet, Sun, Eye, AlertTriangle, ClipboardList, Calendar, MapPin, Building2, Home as HomeIcon, Thermometer, CloudRain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

// Hero carousel images
const heroImages = [
  {
    src: "/images/hero/casa-moderna-exterior.png",
    alt: "Mantenimiento exterior de propiedad residencial en Puerto Rico"
  },
  {
    src: "/images/hero/edificio-comercial.png",
    alt: "Servicios para propiedad comercial en Puerto Rico"
  },
  {
    src: "/images/hero/villa-tropical-solar.png",
    alt: "Cuidado de propiedad tropical con placas solares"
  },
  {
    src: "/images/hero/villa-navidad.png",
    alt: "Instalación de luces navideñas en propiedad tropical"
  }
]

export default function HomePage() {
  const { language, t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Autoplay carousel
  useEffect(() => {
    if (reducedMotion || language === "en") return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [reducedMotion, language])

  // Spanish version - New clean design
  if (language === "es") {
    return (
      <>
        {/* Hero Section - Spanish with Carousel - Full width images with CTA overlay */}
        <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
          {/* Carousel Images */}
          {heroImages.map((image, index) => (
            <div
              key={image.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>
          ))}
          
          {/* CTA Buttons Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-center text-balance drop-shadow-lg px-4">
              Cuidamos cada detalle por ti
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8">
                <Link href="/contact">
                  Cotización Gratis
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8">
                <Link href="/services">
                  Ver Servicios
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Carousel indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? "bg-white w-6" 
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Stats Bar - Spanish */}
        <section className="border-y bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold">300+</p>
                <p className="text-sm opacity-80 mt-1">Clientes Atendidos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold">4</p>
                <p className="text-sm opacity-80 mt-1">Años de Experiencia</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold">78</p>
                <p className="text-sm opacity-80 mt-1">Municipios Cubiertos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold">Res. y Com.</p>
                <p className="text-sm opacity-80 mt-1">Tipo de Propiedad</p>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios - Enfoque positivo */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Más tiempo para ti, nosotros nos encargamos
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Control de plagas, jardinería, mantenimiento exterior y más. Todo lo que tu propiedad necesita, con un solo proveedor.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Un solo equipo de confianza</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    9 servicios, un solo contacto. Sin coordinar múltiples proveedores ni perseguir cotizaciones.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">Profesionales locales</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Equipo en Puerto Rico que conoce las necesidades reales de propiedades residenciales y comerciales.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/10">
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-foreground">Recupera tu tiempo</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Nos encargamos del mantenimiento para que tú te enfoques en tu negocio, familia o lo que importa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-foreground">Tranquilidad garantizada</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Servicio profesional con compromiso. Tu propiedad protegida, mantenida y lista cuando la necesites.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Button asChild size="lg" variant="outline">
                <Link href="/services">
                  Conoce nuestros 9 servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Expertos en el clima de Puerto Rico */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Expertos en el clima de Puerto Rico
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Conocemos los retos únicos de la isla y sabemos exactamente cómo mantener tu propiedad en óptimas condiciones todo el año.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 mb-4">
                  <Droplets className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Protección contra salitre</h3>
                <p className="text-muted-foreground text-sm">
                  Mantenemos cristales, mallas y superficies protegidas del ambiente costero.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 mb-4">
                  <Thermometer className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Preparados para el trópico</h3>
                <p className="text-muted-foreground text-sm">
                  Servicios adaptados al clima tropical para que tu propiedad luzca siempre bien.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 mb-4">
                  <Bug className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Control preventivo</h3>
                <p className="text-muted-foreground text-sm">
                  Actuamos antes de que los problemas crezcan. Prevención inteligente y efectiva.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Propiedades que impresionan</h3>
                <p className="text-muted-foreground text-sm">
                  Una propiedad bien cuidada atrae mejores oportunidades y genera confianza.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proceso Simple */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                De pendiente a plan claro
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Te ayudamos a identificar la prioridad y avanzar hacia la cotización correcta sin complicarte.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Nos dices qué está pasando</h3>
                <p className="text-muted-foreground text-sm">
                  Nos cuentas el tipo de propiedad, municipio y lo que quieres resolver.
                </p>
              </div>

              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Identificamos la prioridad</h3>
                <p className="text-muted-foreground text-sm">
                  Te orientamos según urgencia, condición, acceso y alcance del trabajo.
                </p>
              </div>

              <div className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Te guiamos al servicio correcto</h3>
                <p className="text-muted-foreground text-sm">
                  Coordinamos la cotización sin que tengas que adivinar por dónde empezar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Bloque compacto hacia /services */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                ¿Buscas un servicio específico?
              </h2>
              <p className="text-muted-foreground mb-6 text-pretty">
                La lista completa de servicios activos y próximos está organizada en una p��gina aparte para que puedas comparar y elegir mejor.
              </p>
              <Button asChild size="lg">
                <Link href="/services">
                  Ver Todos los Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Menos proveedores, más control */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Menos proveedores, más control sobre tu propiedad
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                  Coordinas diferentes necesidades desde un mismo equipo, con orientación clara según el tipo de propiedad y el alcance del trabajo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Un solo punto de contacto</h3>
                      <p className="text-muted-foreground text-sm">
                        Evitas coordinar cada necesidad con un proveedor diferente.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Enfoque local</h3>
                      <p className="text-muted-foreground text-sm">
                        Trabajamos pensando en las condiciones reales de Puerto Rico.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <ClipboardList className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Cotización por alcance</h3>
                      <p className="text-muted-foreground text-sm">
                        Cada trabajo se evalúa según propiedad, acceso, condición y necesidad.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Residencial y comercial</h3>
                      <p className="text-muted-foreground text-sm">
                        Atendemos hogares, negocios y propiedades comerciales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero/casa-moderna-exterior.png"
                  alt="Servicios profesionales para propiedades en Puerto Rico"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Coverage - Spanish */}
        <section className="py-16 md:py-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                {t.home.coverageTitle}
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                {t.home.coverageDesc}
              </p>
            </div>
          </div>
          {/* Marquee Carousel */}
          <div className="relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                'Adjuntas', 'Aguada', 'Aguadilla', 'Aguas Buenas', 'Aibonito', 'Añasco', 'Arecibo', 'Arroyo',
                'Barceloneta', 'Barranquitas', 'Bayamón', 'Cabo Rojo', 'Caguas', 'Camuy', 'Canóvanas', 'Carolina',
                'Cataño', 'Cayey', 'Ceiba', 'Ciales', 'Cidra', 'Coamo', 'Comerío', 'Corozal', 'Culebra',
                'Dorado', 'Fajardo', 'Florida', 'Guánica', 'Guayama', 'Guayanilla', 'Guaynabo', 'Gurabo',
                'Hatillo', 'Hormigueros', 'Humacao', 'Isabela', 'Jayuya', 'Juana Díaz'
              ].map((city) => (
                <span 
                  key={city}
                  className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground mx-1.5 shrink-0"
                >
                  {city}
                </span>
              ))}
              {[
                'Adjuntas', 'Aguada', 'Aguadilla', 'Aguas Buenas', 'Aibonito', 'Añasco', 'Arecibo', 'Arroyo',
                'Barceloneta', 'Barranquitas', 'Bayamón', 'Cabo Rojo', 'Caguas', 'Camuy', 'Canóvanas', 'Carolina',
                'Cataño', 'Cayey', 'Ceiba', 'Ciales', 'Cidra', 'Coamo', 'Comerío', 'Corozal', 'Culebra',
                'Dorado', 'Fajardo', 'Florida', 'Guánica', 'Guayama', 'Guayanilla', 'Guaynabo', 'Gurabo',
                'Hatillo', 'Hormigueros', 'Humacao', 'Isabela', 'Jayuya', 'Juana Díaz'
              ].map((city, i) => (
                <span 
                  key={`${city}-dup-${i}`}
                  className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground mx-1.5 shrink-0"
                >
                  {city}
                </span>
              ))}
            </div>
            <div className="flex animate-marquee-reverse whitespace-nowrap mt-3">
              {[
                'Juncos', 'Lajas', 'Lares', 'Las Marías', 'Las Piedras', 'Loiza', 'Luquillo', 'Manati',
                'Maricao', 'Maunabo', 'Mayagüez', 'Moca', 'Morovis', 'Naguabo', 'Naranjito', 'Orocovis',
                'Patillas', 'Peñuelas', 'Ponce', 'Quebradillas', 'Rincón', 'Río Grande', 'Sabana Grande',
                'Salinas', 'San Germán', 'San Juan', 'San Lorenzo', 'San Sebastián', 'Santa Isabel',
                'Toa Alta', 'Toa Baja', 'Trujillo Alto', 'Utuado', 'Vega Alta', 'Vega Baja', 'Vieques',
                'Villalba', 'Yabucoa', 'Yauco'
              ].map((city, i) => (
                <span 
                  key={`${city}-dup-${i}`}
                  className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mx-1.5 shrink-0"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final - Spanish */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                ¿Qué necesitas resolver en tu propiedad?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 text-pretty">
                Cuéntanos qué está pasando y te orientamos con el servicio adecuado para tu hogar, negocio o propiedad comercial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                  <Link href="/contact">
                    Cotización Gratis
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <a href={`tel:${company.phoneClean}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Llamar Ahora
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  // English version - Original design (unchanged)
  return (
    <>
      {/* Hero Section - English */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/30">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                Trusted by over 300 clients in Puerto Rico
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Your property clean, protected and ready to impress
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg text-pretty">
                Pest control, landscaping, cleaning and specialized exterior services for homes, businesses and commercial properties in Puerto Rico.
              </p>
              {/* Service badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Bug className="h-3.5 w-3.5" />
                  Pest Control
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-700">
                  <TreePine className="h-3.5 w-3.5" />
                  Landscaping
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700">
                  <SprayCan className="h-3.5 w-3.5" />
                  Cleaning
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-700">
                  <Droplets className="h-3.5 w-3.5" />
                  Window Cleaning
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-700">
                  <Grid3X3 className="h-3.5 w-3.5" />
                  Screen Cleaning
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  Christmas Lights
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-500/10 px-3 py-1 text-sm font-medium text-slate-700">
                  <Waves className="h-3.5 w-3.5" />
                  Pressure Wash
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-700">
                  <Droplet className="h-3.5 w-3.5" />
                  Soft Wash
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700">
                  <Sun className="h-3.5 w-3.5" />
                  Solar Panel Cleaning
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link href="/contact">
                    {t.ui.getQuote}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phoneClean}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {t.ui.callNow}
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative pb-8">
              {/* Grid de 9 servicios activos */}
              <div className="grid grid-cols-3 gap-2">
                {/* Row 1 */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image src="/images/hero-pest-control.jpg" alt="Pest Control" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Bug className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">Pest Control</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image src="/images/hero-landscaping.jpg" alt="Landscaping" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <TreePine className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">Landscaping</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image src="/images/hero-cleaning.jpg" alt="Cleaning" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <SprayCan className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">Cleaning</p>
                    </div>
                  </div>
                </div>
                {/* Row 2 */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image src="/images/window-cleaning.png" alt="Window Cleaning" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Droplets className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">Window Cleaning</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image src="/images/hero-screen-cleaning.png" alt="Screen Cleaning" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Grid3X3 className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">Screen Cleaning</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image src="/images/hero-christmas-lights.png" alt="Christmas Lights" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">Christmas Lights</p>
                    </div>
                  </div>
                </div>
                {/* Row 3 */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image src="/images/pressure-wash.png" alt="Pressure Wash" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Waves className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">Pressure Wash</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image src="/images/hero-soft-wash.png" alt="Soft Wash" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Droplet className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">Soft Wash</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image src="/images/hero-solar-panel.png" alt="Solar Panel Cleaning" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-300" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Sun className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">Solar Panel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - English */}
      <section className="border-y bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">300+</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsClients}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">4</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsYears}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">9</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsServices}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">78</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsMunicipios}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - English */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Services to make your property look better and function better
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              One team to protect, clean and maintain your property in Puerto Rico with active services for interiors, exteriors and commercial areas.
            </p>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us - English */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                More cleaning, more presence, less complications
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                When your property looks well-maintained, it conveys confidence. We help you keep it protected, clean and presentable with clear and coordinated services.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Clear and fast response</h3>
                    <p className="text-muted-foreground text-sm">We guide you from the first contact to coordinate the service your property needs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Nine active services</h3>
                    <p className="text-muted-foreground text-sm">Pest control, landscaping, cleaning, window cleaning, screen cleaning, Christmas lights, pressure wash, soft wash and solar panel cleaning.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Independent services</h3>
                    <p className="text-muted-foreground text-sm">Each service has its own focus, scope and quote. We don&apos;t group specialized work within general cleaning.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Service for Puerto Rico</h3>
                    <p className="text-muted-foreground text-sm">We serve homes, businesses and commercial properties in municipalities across the island.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-3 gap-3">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/hero-pest-control.jpg" alt="Pest Control" fill className="object-cover object-center" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/hero-landscaping.jpg" alt="Landscaping" fill className="object-cover object-center" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/hero-cleaning.jpg" alt="Cleaning" fill className="object-cover object-center" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/window-cleaning.png" alt="Window Cleaning" fill className="object-cover object-center" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/hero-screen-cleaning.png" alt="Screen Cleaning" fill className="object-cover object-center" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/hero-christmas-lights.png" alt="Christmas Lights" fill className="object-cover object-center" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/pressure-wash.png" alt="Pressure Wash" fill className="object-cover object-center" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/hero-soft-wash.png" alt="Soft Wash" fill className="object-cover object-center" />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image src="/images/hero-solar-panel.png" alt="Solar Panel Cleaning" fill className="object-cover object-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage - English */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.home.coverageTitle}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t.home.coverageDesc}
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[
              'Adjuntas', 'Aguada', 'Aguadilla', 'Aguas Buenas', 'Aibonito', 'Añasco', 'Arecibo', 'Arroyo',
              'Barceloneta', 'Barranquitas', 'Bayamón', 'Cabo Rojo', 'Caguas', 'Camuy', 'Canóvanas', 'Carolina',
              'Cataño', 'Cayey', 'Ceiba', 'Ciales', 'Cidra', 'Coamo', 'Comerío', 'Corozal', 'Culebra',
              'Dorado', 'Fajardo', 'Florida', 'Guánica', 'Guayama', 'Guayanilla', 'Guaynabo', 'Gurabo',
              'Hatillo', 'Hormigueros', 'Humacao', 'Isabela', 'Jayuya', 'Juana Díaz'
            ].map((city) => (
              <span key={city} className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground mx-1.5 shrink-0">{city}</span>
            ))}
            {[
              'Adjuntas', 'Aguada', 'Aguadilla', 'Aguas Buenas', 'Aibonito', 'Añasco', 'Arecibo', 'Arroyo',
              'Barceloneta', 'Barranquitas', 'Bayamón', 'Cabo Rojo', 'Caguas', 'Camuy', 'Canóvanas', 'Carolina',
              'Cataño', 'Cayey', 'Ceiba', 'Ciales', 'Cidra', 'Coamo', 'Comerío', 'Corozal', 'Culebra',
              'Dorado', 'Fajardo', 'Florida', 'Guánica', 'Guayama', 'Guayanilla', 'Guaynabo', 'Gurabo',
              'Hatillo', 'Hormigueros', 'Humacao', 'Isabela', 'Jayuya', 'Juana Díaz'
            ].map((city, i) => (
              <span key={`${city}-dup-${i}`} className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground mx-1.5 shrink-0">{city}</span>
            ))}
          </div>
          <div className="flex animate-marquee-reverse whitespace-nowrap mt-3">
            {[
              'Juncos', 'Lajas', 'Lares', 'Las Marías', 'Las Piedras', 'Loiza', 'Luquillo', 'Manati',
              'Maricao', 'Maunabo', 'Mayagüez', 'Moca', 'Morovis', 'Naguabo', 'Naranjito', 'Orocovis',
              'Patillas', 'Peñuelas', 'Ponce', 'Quebradillas', 'Rincón', 'Río Grande', 'Sabana Grande',
              'Salinas', 'San Germán', 'San Juan', 'San Lorenzo', 'San Sebastián', 'Santa Isabel',
              'Toa Alta', 'Toa Baja', 'Trujillo Alto', 'Utuado', 'Vega Alta', 'Vega Baja', 'Vieques',
              'Villalba', 'Yabucoa', 'Yauco'
            ].map((city, i) => (
              <span key={`${city}-dup-${i}`} className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mx-1.5 shrink-0">{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - English */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              What does your property need today?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 text-pretty">
              Tell us if you need pest control, landscaping, cleaning, window cleaning, screen cleaning, Christmas lights, pressure wash, soft wash or solar panel cleaning. We guide you and coordinate a quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link href="/contact">
                  {t.ui.getQuote}
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <a href={`tel:${company.phoneClean}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {company.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
