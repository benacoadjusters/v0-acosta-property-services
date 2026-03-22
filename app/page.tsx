import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, Shield, Clock, Award, Users, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { company } from "@/content/company"
import { services } from "@/content/services"

// JSON-LD Schema for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PestControlService",
  "name": company.name,
  "description": company.description,
  "url": "https://acostapropertyservices.com",
  "telephone": company.phone,
  "email": company.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": company.address.street,
    "addressLocality": company.address.city,
    "addressRegion": company.address.state,
    "postalCode": company.address.zip,
    "addressCountry": "PR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.4655",
    "longitude": "-66.1057"
  },
  "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-14:00",
  "areaServed": {
    "@type": "State",
    "name": "Puerto Rico"
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  }
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/30">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                Servicio Profesional en Puerto Rico
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Protegemos Tu Propiedad, Garantizamos Tu Tranquilidad
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg text-pretty">
                Control de plagas profesional para hogares y negocios en todo Puerto Rico. 
                4 años de experiencia protegiendo familias y empresas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link href="/contact">
                    Solicitar Cotizacion Gratis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phoneClean}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {company.phone}
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Estimados Gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Servicio Garantizado</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-2xl">
                <Image
                  src="/images/hero-pest-control.jpg"
                  alt="Técnico de Acosta Property Services realizando servicio de control de plagas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">300+</p>
                    <p className="text-sm text-muted-foreground">Clientes Satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-y bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground mt-1">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">300+</p>
              <p className="text-sm text-muted-foreground mt-1">Clientes Atendidos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">78</p>
              <p className="text-sm text-muted-foreground mt-1">Municipios Cubiertos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground mt-1">Toda la Isla</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Brief intro without duplicating services page */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Soluciones Completas de Control de Plagas
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Ofrecemos servicios profesionales de fumigacion y control de plagas para proteger tu hogar o negocio.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Control de Plagas</h3>
                <p className="text-muted-foreground mb-4">
                  Eliminacion efectiva de cucarachas, hormigas, roedores, termitas y mas.
                </p>
                <Link href="/services/pest-control" className="inline-flex items-center text-primary font-medium hover:underline">
                  Conocer mas <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Servicios Residenciales</h3>
                <p className="text-muted-foreground mb-4">
                  Proteccion completa para tu hogar y familia con tratamientos seguros.
                </p>
                <Link href="/services/residential-pest-control" className="inline-flex items-center text-primary font-medium hover:underline">
                  Conocer mas <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Servicios Comerciales</h3>
                <p className="text-muted-foreground mb-4">
                  Soluciones para restaurantes, oficinas, almacenes y todo tipo de negocios.
                </p>
                <Link href="/services/commercial-pest-control" className="inline-flex items-center text-primary font-medium hover:underline">
                  Conocer mas <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">
                Ver Todos los Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Acosta - Unique value proposition */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Por Que Elegir Acosta Property Services
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Somos una empresa familiar con raices profundas en Puerto Rico. 
                Entendemos las plagas locales y sabemos como combatirlas efectivamente.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Productos Seguros y Efectivos</h3>
                    <p className="text-muted-foreground">Usamos productos aprobados por la EPA que son seguros para tu familia y mascotas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Respuesta Rapida</h3>
                    <p className="text-muted-foreground">Entendemos la urgencia. Ofrecemos citas el mismo dia o al dia siguiente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Garantia de Satisfaccion</h3>
                    <p className="text-muted-foreground">Si las plagas regresan entre tratamientos, volvemos sin costo adicional.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/about">
                    Conoce Nuestra Historia
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/images/residential-service.jpg"
                      alt="Servicio residencial de control de plagas"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/commercial-service.jpg"
                      alt="Servicio comercial de control de plagas"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/team.jpg"
                      alt="Equipo de Acosta Property Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src="/images/service-truck.jpg"
                      alt="Camión de servicio de Acosta Property Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Area Brief */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Servimos Todo Puerto Rico
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Desde San Juan hasta Mayaguez, desde Ponce hasta Arecibo. 
              Cubrimos los 78 municipios de la isla con servicio profesional.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['San Juan', 'Bayamon', 'Carolina', 'Ponce', 'Caguas', 'Guaynabo', 'Mayaguez', 'Arecibo'].map((city) => (
                <span 
                  key={city}
                  className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground"
                >
                  {city}
                </span>
              ))}
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="/service-areas">
                Ver Todas las Areas de Servicio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Listo para Proteger Tu Propiedad?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 text-pretty">
              Contactanos hoy para una inspeccion y cotizacion gratis. 
              Nuestro equipo esta listo para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link href="/contact">
                  Solicitar Cotizacion Gratis
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
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
