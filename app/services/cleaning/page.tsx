"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  SprayCan, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Building2,
  Home,
  Phone,
  Brush,
  Wind,
  ShieldCheck,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function CleaningPage() {
  const { language, t } = useLanguage()

  const services = [
    {
      id: "deep-cleaning",
      icon: Sparkles,
      image: "/images/cleaning/deep-cleaning.jpg",
      nameEs: "Limpieza Profunda",
      nameEn: "Deep Cleaning",
      descriptionEs: "Limpieza exhaustiva de su hogar o negocio. Llegamos a cada rincón, eliminamos suciedad acumulada, desengrasamos superficies y dejamos su espacio impecable.",
      descriptionEn: "Thorough cleaning of your home or business. We reach every corner, remove accumulated dirt, degrease surfaces and leave your space spotless.",
      featuresEs: ["Limpieza de techos y paredes", "Desengrase de cocina", "Limpieza de baños", "Ventanas y cristales"],
      featuresEn: ["Ceiling and wall cleaning", "Kitchen degreasing", "Bathroom cleaning", "Windows and glass"]
    },
    {
      id: "office-cleaning",
      icon: Building2,
      image: "/images/cleaning/office-cleaning.jpg",
      nameEs: "Limpieza de Oficinas",
      nameEn: "Office Cleaning",
      descriptionEs: "Mantenemos su espacio de trabajo limpio y profesional. Servicios diarios, semanales o según sus necesidades para oficinas de cualquier tamaño.",
      descriptionEn: "We keep your workspace clean and professional. Daily, weekly or as-needed services for offices of any size.",
      featuresEs: ["Limpieza de escritorios", "Desinfección de áreas comunes", "Vaciado de papeleras", "Limpieza de pisos"],
      featuresEn: ["Desk cleaning", "Common area disinfection", "Trash removal", "Floor cleaning"]
    },
    {
      id: "post-construction",
      icon: Brush,
      image: "/images/cleaning/post-construction.jpg",
      nameEs: "Limpieza Post-Construcción",
      nameEn: "Post-Construction Cleaning",
      descriptionEs: "Eliminamos polvo, escombros y residuos de construcción o remodelación. Dejamos su propiedad lista para usar después de cualquier proyecto.",
      descriptionEn: "We remove dust, debris and construction residues. We leave your property ready to use after any project.",
      featuresEs: ["Remoción de escombros", "Limpieza de polvo fino", "Limpieza de ventanas", "Pulido de superficies"],
      featuresEn: ["Debris removal", "Fine dust cleaning", "Window cleaning", "Surface polishing"]
    },
    {
      id: "maintenance",
      icon: Calendar,
      image: "/images/cleaning/maintenance-cleaning.jpg",
      nameEs: "Mantenimiento Regular",
      nameEn: "Regular Maintenance",
      descriptionEs: "Programas de limpieza regular para mantener su propiedad siempre impecable. Planes semanales, quincenales o mensuales adaptados a sus necesidades.",
      descriptionEn: "Regular cleaning programs to keep your property always spotless. Weekly, biweekly or monthly plans adapted to your needs.",
      featuresEs: ["Planes personalizados", "Horarios flexibles", "Equipo dedicado", "Productos de calidad"],
      featuresEn: ["Customized plans", "Flexible schedules", "Dedicated team", "Quality products"]
    }
  ]

  const benefits = language === "es" ? [
    {
      icon: ShieldCheck,
      title: "Personal Verificado",
      description: "Todo nuestro personal pasa por verificación de antecedentes para su tranquilidad."
    },
    {
      icon: Sparkles,
      title: "Productos Profesionales",
      description: "Utilizamos productos de limpieza de grado comercial, seguros y efectivos."
    },
    {
      icon: Wind,
      title: "Equipos Modernos",
      description: "Contamos con equipos profesionales para resultados superiores."
    },
    {
      icon: CheckCircle2,
      title: "Garantía de Satisfacción",
      description: "Si no está satisfecho, regresamos y lo corregimos sin costo adicional."
    }
  ] : [
    {
      icon: ShieldCheck,
      title: "Verified Staff",
      description: "All our staff undergoes background checks for your peace of mind."
    },
    {
      icon: Sparkles,
      title: "Professional Products",
      description: "We use commercial-grade cleaning products, safe and effective."
    },
    {
      icon: Wind,
      title: "Modern Equipment",
      description: "We have professional equipment for superior results."
    },
    {
      icon: CheckCircle2,
      title: "Satisfaction Guarantee",
      description: "If you're not satisfied, we come back and fix it at no extra cost."
    }
  ]

  const customerTypes = [
    {
      id: "residential",
      icon: Home,
      nameEs: "Residencial",
      nameEn: "Residential",
      descriptionEs: "Limpieza profesional para su hogar. Desde limpiezas profundas hasta mantenimiento regular.",
      descriptionEn: "Professional cleaning for your home. From deep cleaning to regular maintenance.",
      featuresEs: ["Casas y apartamentos", "Mudanzas", "Limpieza de emergencia", "Eventos especiales"],
      featuresEn: ["Houses and apartments", "Move-in/out", "Emergency cleaning", "Special events"]
    },
    {
      id: "commercial",
      icon: Building2,
      nameEs: "Comercial",
      nameEn: "Commercial",
      descriptionEs: "Servicios de limpieza para negocios de todos los tamaños. Mantenga una imagen profesional.",
      descriptionEn: "Cleaning services for businesses of all sizes. Maintain a professional image.",
      featuresEs: ["Oficinas", "Restaurantes", "Tiendas", "Edificios comerciales"],
      featuresEn: ["Offices", "Restaurants", "Stores", "Commercial buildings"]
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-background to-blue-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-700 mb-4">
                <SprayCan className="h-4 w-4" />
                {language === "es" ? "Servicios de Limpieza" : "Cleaning Services"}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {language === "es" 
                  ? "Limpieza Profesional para su Propiedad" 
                  : "Professional Cleaning for Your Property"}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8">
                {language === "es"
                  ? "Ofrecemos servicios de limpieza profesional para hogares y negocios en todo Puerto Rico. Personal capacitado, productos de calidad y resultados garantizados."
                  : "We offer professional cleaning services for homes and businesses throughout Puerto Rico. Trained staff, quality products and guaranteed results."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
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
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-cleaning.jpg"
                  alt={language === "es" ? "Limpieza Profesional" : "Professional Cleaning"}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                    <SprayCan className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">100%</p>
                    <p className="text-sm text-muted-foreground">
                      {language === "es" ? "Garantizado" : "Guaranteed"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Nuestros Servicios de Limpieza" : "Our Cleaning Services"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Ofrecemos una gama completa de servicios de limpieza profesional."
                : "We offer a complete range of professional cleaning services."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              const name = language === "es" ? service.nameEs : service.nameEn
              const description = language === "es" ? service.descriptionEs : service.descriptionEn
              const features = language === "es" ? service.featuresEs : service.featuresEn

              return (
                <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={service.image}
                      alt={name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-blue-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "¿Por Qué Elegirnos?" : "Why Choose Us?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Nos distinguimos por la calidad y profesionalismo de nuestro servicio."
                : "We stand out for the quality and professionalism of our service."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 mx-auto mb-4">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Servicios para Todo Tipo de Propiedad" : "Services for All Property Types"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {customerTypes.map((type) => {
              const Icon = type.icon
              const name = language === "es" ? type.nameEs : type.nameEn
              const description = language === "es" ? type.descriptionEs : type.descriptionEn
              const features = language === "es" ? type.featuresEs : type.featuresEn
              const isResidential = type.id === "residential"

              return (
                <Card key={type.id} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${isResidential ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{description}</p>
                  <ul className="space-y-2 mb-6">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${isResidential ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}`} variant={isResidential ? "default" : "outline"}>
                    <Link href="/contact">
                      {t.ui.getQuote}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Listo para un Espacio Impecable?" 
                : "Ready for a Spotless Space?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "Solicite una cotización gratis. Evaluamos su espacio y le presentamos un plan personalizado."
                : "Request a free quote. We evaluate your space and present you with a personalized plan."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-white/90 font-semibold">
                <Link href="/contact">
                  {t.ui.getQuote}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-700 text-white hover:bg-blue-800 font-semibold border border-white/20">
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
