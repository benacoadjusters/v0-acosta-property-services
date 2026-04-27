"use client"

import Link from "next/link"
import { 
  Paintbrush, 
  ArrowRight, 
  Clock,
  Shield,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
  Home,
  Hammer,
  Wrench,
  PaintBucket,
  Ruler,
  Palette
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function RepairsPaintingPage() {
  const { language, t } = useLanguage()

  const plannedServices = language === "es" ? [
    {
      icon: PaintBucket,
      title: "Pintura Interior",
      description: "Pintura profesional de paredes, techos, molduras y acabados interiores con productos de alta calidad."
    },
    {
      icon: Palette,
      title: "Pintura Exterior",
      description: "Pintura y protección de fachadas, terrazas, balcones y otras superficies exteriores."
    },
    {
      icon: Hammer,
      title: "Reparaciones de Paredes",
      description: "Reparación de grietas, huecos, humedad y otros daños en paredes y techos."
    },
    {
      icon: Ruler,
      title: "Instalación de Molduras",
      description: "Instalación de molduras decorativas, zócalos, cornisas y otros acabados arquitectónicos."
    },
    {
      icon: Wrench,
      title: "Carpintería Menor",
      description: "Reparaciones de puertas, ventanas, gabinetes y otros elementos de madera."
    },
    {
      icon: Shield,
      title: "Acabados y Retoques",
      description: "Trabajos de acabado, retoques y mejoras estéticas para renovar espacios."
    }
  ] : [
    {
      icon: PaintBucket,
      title: "Interior Painting",
      description: "Professional painting of walls, ceilings, moldings and interior finishes with high quality products."
    },
    {
      icon: Palette,
      title: "Exterior Painting",
      description: "Painting and protection of facades, terraces, balconies and other exterior surfaces."
    },
    {
      icon: Hammer,
      title: "Wall Repairs",
      description: "Repair of cracks, holes, moisture damage and other wall and ceiling damage."
    },
    {
      icon: Ruler,
      title: "Molding Installation",
      description: "Installation of decorative moldings, baseboards, cornices and other architectural finishes."
    },
    {
      icon: Wrench,
      title: "Minor Carpentry",
      description: "Repairs of doors, windows, cabinets and other wood elements."
    },
    {
      icon: Shield,
      title: "Finishes and Touch-ups",
      description: "Finishing work, touch-ups and aesthetic improvements to renovate spaces."
    }
  ]

  const whyImportant = language === "es" ? [
    {
      title: "Protección",
      description: "La pintura protege las superficies del clima, humedad y desgaste, extendiendo su vida útil."
    },
    {
      title: "Valor de Propiedad",
      description: "Una propiedad bien mantenida con pintura fresca tiene mayor valor en el mercado."
    },
    {
      title: "Estética",
      description: "Los colores y acabados correctos transforman espacios y crean ambientes agradables."
    },
    {
      title: "Prevención",
      description: "Las reparaciones menores a tiempo previenen problemas mayores y costosos en el futuro."
    }
  ] : [
    {
      title: "Protection",
      description: "Paint protects surfaces from weather, moisture and wear, extending their lifespan."
    },
    {
      title: "Property Value",
      description: "A well-maintained property with fresh paint has higher market value."
    },
    {
      title: "Aesthetics",
      description: "The right colors and finishes transform spaces and create pleasant environments."
    },
    {
      title: "Prevention",
      description: "Timely minor repairs prevent larger and costlier problems in the future."
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-50 via-background to-purple-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-700 mb-6">
              <Clock className="h-4 w-4" />
              {language === "es" ? "Próximamente" : "Coming Soon"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {language === "es" 
                ? "Reparaciones Menores y Pintura" 
                : "Minor Repairs and Painting"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              {language === "es"
                ? "Estamos preparando servicios profesionales de reparaciones menores y pintura para Puerto Rico. Desde pequeños arreglos hasta renovación completa de pintura."
                : "We are preparing professional minor repairs and painting services for Puerto Rico. From small fixes to complete paint renovation."}
            </p>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center justify-center gap-3 bg-purple-100 border-2 border-purple-200 rounded-2xl px-8 py-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500">
                <Paintbrush className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-purple-800">
                  {language === "es" ? "En Desarrollo" : "Under Development"}
                </p>
                <p className="text-sm text-purple-600">
                  {language === "es" ? "Contáctenos para más información" : "Contact us for more information"}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-purple-500 hover:bg-purple-600 text-white">
                <Link href="/contact">
                  {language === "es" ? "Solicitar Información" : "Request Information"}
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
        </div>
      </section>

      {/* Planned Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Servicios Planificados" : "Planned Services"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Estos son los servicios de reparaciones y pintura que estaremos ofreciendo próximamente."
                : "These are the repairs and painting services we will be offering soon."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="p-6 border-dashed border-2 border-purple-200 bg-purple-50/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 mb-4">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    {service.title}
                    <span className="text-xs bg-purple-200 text-purple-700 px-2 py-0.5 rounded-full">
                      {language === "es" ? "Próximamente" : "Soon"}
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why It's Important */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === "es" 
                  ? "¿Por Qué son Importantes las Reparaciones y Pintura?" 
                  : "Why are Repairs and Painting Important?"}
              </h2>
              <div className="space-y-6">
                {whyImportant.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-500/10 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8 text-center">
                <Paintbrush className="h-24 w-24 text-purple-300 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-purple-800 mb-2">
                  {language === "es" ? "Servicio en Desarrollo" : "Service Under Development"}
                </h3>
                <p className="text-purple-600 mb-6">
                  {language === "es" 
                    ? "Estamos preparando equipos y materiales profesionales para ofrecer el mejor servicio."
                    : "We are preparing professional equipment and materials to offer the best service."}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-purple-700">
                  <Clock className="h-4 w-4" />
                  {language === "es" ? "Disponible pronto" : "Available soon"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "¿Quién Necesita Este Servicio?" : "Who Needs This Service?"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-purple-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500 text-white">
                  <Home className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Propietarios de Viviendas" : "Homeowners"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Propietarios que desean mejorar, renovar o mantener sus hogares en perfectas condiciones."
                  : "Homeowners who want to improve, renovate or maintain their homes in perfect condition."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Renovación de pintura", "Reparación de grietas", "Mejoras estéticas", "Mantenimiento preventivo"]
                  : ["Paint renovation", "Crack repair", "Aesthetic improvements", "Preventive maintenance"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 border-purple-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Negocios y Comercios" : "Businesses"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Negocios que necesitan mantener una imagen profesional y espacios atractivos para clientes."
                  : "Businesses that need to maintain a professional image and attractive spaces for customers."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Pintura de oficinas", "Renovación de locales", "Reparaciones rápidas", "Acabados comerciales"]
                  : ["Office painting", "Store renovation", "Quick repairs", "Commercial finishes"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-purple-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Interesado en Nuestros Servicios de Reparaciones y Pintura?" 
                : "Interested in Our Repairs and Painting Services?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "Déjenos sus datos y le contactaremos tan pronto como estos servicios estén disponibles. También puede contactarnos para consultas generales."
                : "Leave us your information and we will contact you as soon as these services are available. You can also contact us for general inquiries."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {language === "es" ? "Solicitar Información" : "Request Information"}
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-purple-600 text-white hover:bg-purple-700 font-semibold border border-white/20">
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
