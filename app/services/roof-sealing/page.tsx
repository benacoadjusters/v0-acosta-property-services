"use client"

import Link from "next/link"
import { 
  Layers, 
  ArrowRight, 
  Clock,
  Shield,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
  Home,
  Droplets,
  Search,
  Sun
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function RoofSealingPage() {
  const { language, t } = useLanguage()

  const plannedServices = language === "es" ? [
    {
      icon: Shield,
      title: "Sellado preventivo",
      description: "Aplicación de soluciones para ayudar a proteger el techo contra filtraciones."
    },
    {
      icon: Droplets,
      title: "Protección contra humedad",
      description: "Atención preventiva para superficies expuestas a lluvia, sol y humedad."
    },
    {
      icon: Layers,
      title: "Mantenimiento de techos",
      description: "Orientación y mantenimiento preventivo para reducir riesgos de deterioro."
    },
    {
      icon: Search,
      title: "Evaluación visual",
      description: "Revisión inicial para identificar señales visibles de filtración o desgaste."
    }
  ] : [
    {
      icon: Shield,
      title: "Preventive sealing",
      description: "Application of solutions to help protect the roof against leaks."
    },
    {
      icon: Droplets,
      title: "Moisture protection",
      description: "Preventive attention for surfaces exposed to rain, sun and humidity."
    },
    {
      icon: Layers,
      title: "Roof maintenance",
      description: "Guidance and preventive maintenance to reduce deterioration risks."
    },
    {
      icon: Search,
      title: "Visual evaluation",
      description: "Initial review to identify visible signs of leaks or wear."
    }
  ]

  const whyImportant = language === "es" ? [
    {
      title: "Prevención de filtraciones",
      description: "El sellado preventivo ayuda a evitar filtraciones que pueden causar daños mayores en tu propiedad."
    },
    {
      title: "Clima tropical",
      description: "Puerto Rico tiene lluvias frecuentes y sol intenso que pueden afectar la integridad del techo."
    },
    {
      title: "Protección de la propiedad",
      description: "Un techo bien mantenido protege todo lo que hay debajo: estructura, contenido y personas."
    },
    {
      title: "Mantenimiento preventivo",
      description: "Atender el techo antes de que aparezcan problemas mayores puede ser más económico a largo plazo."
    }
  ] : [
    {
      title: "Leak prevention",
      description: "Preventive sealing helps avoid leaks that can cause major damage to your property."
    },
    {
      title: "Tropical climate",
      description: "Puerto Rico has frequent rain and intense sun that can affect roof integrity."
    },
    {
      title: "Property protection",
      description: "A well-maintained roof protects everything underneath: structure, contents and people."
    },
    {
      title: "Preventive maintenance",
      description: "Addressing the roof before major problems appear can be more economical in the long run."
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-background to-amber-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-700 mb-6">
              <Clock className="h-4 w-4" />
              {language === "es" ? "Próximamente" : "Coming Soon"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {language === "es" 
                ? "Sellado de techos" 
                : "Roof Sealing"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              {language === "es"
                ? "Servicio próximamente disponible para sellado preventivo de techos y protección contra filtraciones en Puerto Rico."
                : "Service coming soon for preventive roof sealing and leak protection in Puerto Rico."}
            </p>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center justify-center gap-3 bg-amber-100 border-2 border-amber-200 rounded-2xl px-8 py-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-amber-800">
                  {language === "es" ? "En Desarrollo" : "Under Development"}
                </p>
                <p className="text-sm text-amber-600">
                  {language === "es" ? "Contáctanos para más información" : "Contact us for more information"}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
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
                ? "Estos son los servicios de sellado de techos que estaremos ofreciendo próximamente."
                : "These are the roof sealing services we will be offering soon."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plannedServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="p-6 border-dashed border-2 border-amber-200 bg-amber-50/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 mb-4">
                    <Icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    {service.title}
                    <span className="text-xs bg-amber-200 text-amber-700 px-2 py-0.5 rounded-full">
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
                  ? "¿Por qué es importante el sellado de techos?" 
                  : "Why is roof sealing important?"}
              </h2>
              <div className="space-y-6">
                {whyImportant.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-amber-600" />
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
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-8 text-center">
                <Layers className="h-24 w-24 text-amber-300 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  {language === "es" ? "Servicio en Desarrollo" : "Service Under Development"}
                </h3>
                <p className="text-amber-600 mb-6">
                  {language === "es" 
                    ? "Estamos preparando este servicio para ofrecerlo próximamente en Puerto Rico."
                    : "We are preparing this service to offer it soon in Puerto Rico."}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-amber-700">
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
            <Card className="p-6 border-amber-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500 text-white">
                  <Home className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Propietarios residenciales" : "Residential Owners"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Propietarios que quieren proteger sus hogares de filtraciones y daños por agua en el techo."
                  : "Homeowners who want to protect their homes from leaks and water damage on the roof."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Techos con señales de desgaste", "Prevención antes de temporada de lluvias", "Propiedades antiguas", "Mantenimiento preventivo"]
                  : ["Roofs showing signs of wear", "Prevention before rainy season", "Older properties", "Preventive maintenance"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 border-amber-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Propietarios comerciales" : "Commercial Owners"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Negocios y propiedades comerciales que necesitan proteger sus instalaciones de daños por agua."
                  : "Businesses and commercial properties that need to protect their facilities from water damage."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Edificios comerciales", "Almacenes y bodegas", "Oficinas y locales", "Propiedades de alquiler"]
                  : ["Commercial buildings", "Warehouses and storage", "Offices and retail", "Rental properties"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Quieres saber cuándo estará disponible?" 
                : "Want to know when it will be available?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "Contáctanos y te orientamos sobre disponibilidad futura del servicio de sellado de techos."
                : "Contact us and we'll guide you on the future availability of the roof sealing service."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-amber-600 hover:bg-white/90 font-semibold">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {language === "es" ? "Solicitar Información" : "Request Information"}
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-amber-600 text-white hover:bg-amber-700 font-semibold border border-white/20">
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
