"use client"

import Link from "next/link"
import { 
  Wrench, 
  ArrowRight, 
  Clock,
  Shield,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
  Home,
  Hammer,
  Settings,
  PenTool
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function RepairsHandymanPage() {
  const { language, t } = useLanguage()

  const plannedServices = language === "es" ? [
    {
      icon: Hammer,
      title: "Reparaciones menores",
      description: "Ajustes básicos y reparaciones pequeñas para mantener tu propiedad en buenas condiciones."
    },
    {
      icon: Settings,
      title: "Instalaciones básicas",
      description: "Soporte para instalaciones sencillas y mejoras menores dentro de la propiedad."
    },
    {
      icon: Wrench,
      title: "Mantenimiento general",
      description: "Atención a detalles de mantenimiento que ayudan a prevenir problemas mayores."
    },
    {
      icon: PenTool,
      title: "Ajustes y retoques",
      description: "Correcciones simples para mejorar funcionalidad, orden y presentación."
    }
  ] : [
    {
      icon: Hammer,
      title: "Minor repairs",
      description: "Basic adjustments and small repairs to keep your property in good condition."
    },
    {
      icon: Settings,
      title: "Basic installations",
      description: "Support for simple installations and minor improvements within the property."
    },
    {
      icon: Wrench,
      title: "General maintenance",
      description: "Attention to maintenance details that help prevent bigger problems."
    },
    {
      icon: PenTool,
      title: "Adjustments and touch-ups",
      description: "Simple corrections to improve functionality, order and presentation."
    }
  ]

  const whyImportant = language === "es" ? [
    {
      title: "Prevención",
      description: "Las reparaciones menores a tiempo ayudan a prevenir problemas mayores y más costosos en el futuro."
    },
    {
      title: "Funcionalidad",
      description: "Mantener todo funcionando correctamente mejora la comodidad y el uso diario de tu propiedad."
    },
    {
      title: "Presentación",
      description: "Los detalles bien cuidados mejoran la apariencia general de tu hogar o negocio."
    },
    {
      title: "Valor",
      description: "Una propiedad bien mantenida conserva mejor su valor en el tiempo."
    }
  ] : [
    {
      title: "Prevention",
      description: "Timely minor repairs help prevent bigger and more costly problems in the future."
    },
    {
      title: "Functionality",
      description: "Keeping everything working properly improves the comfort and daily use of your property."
    },
    {
      title: "Presentation",
      description: "Well-kept details improve the overall appearance of your home or business."
    },
    {
      title: "Value",
      description: "A well-maintained property better preserves its value over time."
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
                ? "Reparaciones handyman para mantenimiento general" 
                : "Handyman repairs for general maintenance"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              {language === "es"
                ? "Servicio próximamente disponible para reparaciones menores, instalaciones básicas y mantenimiento general de propiedades en Puerto Rico."
                : "Service coming soon for minor repairs, basic installations and general property maintenance in Puerto Rico."}
            </p>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center justify-center gap-3 bg-purple-100 border-2 border-purple-200 rounded-2xl px-8 py-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-purple-800">
                  {language === "es" ? "En Desarrollo" : "Under Development"}
                </p>
                <p className="text-sm text-purple-600">
                  {language === "es" ? "Contáctanos para más información" : "Contact us for more information"}
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
              {language === "es" ? "Servicios que estamos preparando" : "Services we are preparing"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Estos son los servicios de reparaciones handyman que estaremos ofreciendo próximamente."
                : "These are the handyman repair services we will be offering soon."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                      {language === "es" ? "Próximamente" : "Coming Soon"}
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
                  ? "¿Por qué es importante el mantenimiento general?" 
                  : "Why is general maintenance important?"}
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
                <Wrench className="h-24 w-24 text-purple-300 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-purple-800 mb-2">
                  {language === "es" ? "Servicio en Desarrollo" : "Service Under Development"}
                </h3>
                <p className="text-purple-600 mb-6">
                  {language === "es" 
                    ? "Estamos preparando este servicio para ofrecerlo próximamente en Puerto Rico."
                    : "We are preparing this service to offer it soon in Puerto Rico."}
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
              {language === "es" ? "¿Quién necesita este servicio?" : "Who needs this service?"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-purple-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500 text-white">
                  <Home className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Propietarios de viviendas" : "Homeowners"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Propietarios que desean mantener sus hogares en buenas condiciones con reparaciones y ajustes básicos."
                  : "Homeowners who want to keep their homes in good condition with basic repairs and adjustments."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Reparaciones menores", "Ajustes en puertas y ventanas", "Mejoras funcionales", "Mantenimiento preventivo"]
                  : ["Minor repairs", "Door and window adjustments", "Functional improvements", "Preventive maintenance"]
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
                  {language === "es" ? "Negocios y comercios" : "Businesses"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Negocios que necesitan mantener sus espacios funcionales y presentables para clientes y empleados."
                  : "Businesses that need to keep their spaces functional and presentable for customers and employees."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Mantenimiento de oficinas", "Reparaciones rápidas", "Ajustes de mobiliario", "Mejoras menores"]
                  : ["Office maintenance", "Quick repairs", "Furniture adjustments", "Minor improvements"]
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
                ? "¿Te interesa este servicio cuando esté disponible?" 
                : "Interested in this service when available?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "Déjanos tus datos y te orientamos cuando el servicio de reparaciones handyman esté listo."
                : "Leave us your information and we'll guide you when the handyman repairs service is ready."}
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
