"use client"

import Link from "next/link"
import { 
  Droplets, 
  ArrowRight, 
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
  Home,
  Thermometer,
  Search,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function WaterDamageMitigationPage() {
  const { language, t } = useLanguage()

  const plannedServices = language === "es" ? [
    {
      icon: Search,
      title: "Evaluación de áreas afectadas por agua",
      description: "Identificación de áreas con daños visibles por agua o humedad en tu propiedad."
    },
    {
      icon: Thermometer,
      title: "Atención a humedad visible",
      description: "Atención a problemas de humedad que pueden afectar paredes, techos y otras superficies."
    },
    {
      icon: Shield,
      title: "Prevención de daños mayores",
      description: "Orientación para ayudar a prevenir que los daños por agua se conviertan en problemas más grandes."
    },
    {
      icon: FileText,
      title: "Orientación para propietarios",
      description: "Información y recomendaciones para propietarios sobre cómo manejar daños por agua."
    },
    {
      icon: AlertTriangle,
      title: "Servicio en desarrollo",
      description: "Estamos preparando este servicio para ofrecer atención profesional a daños por agua en Puerto Rico."
    }
  ] : [
    {
      icon: Search,
      title: "Evaluation of water-affected areas",
      description: "Identification of areas with visible water or moisture damage on your property."
    },
    {
      icon: Thermometer,
      title: "Visible humidity attention",
      description: "Attention to humidity problems that can affect walls, ceilings and other surfaces."
    },
    {
      icon: Shield,
      title: "Prevention of major damage",
      description: "Guidance to help prevent water damage from becoming bigger problems."
    },
    {
      icon: FileText,
      title: "Guidance for owners",
      description: "Information and recommendations for property owners on how to handle water damage."
    },
    {
      icon: AlertTriangle,
      title: "Service in development",
      description: "We are preparing this service to offer professional attention to water damage in Puerto Rico."
    }
  ]

  const whyImportant = language === "es" ? [
    {
      title: "Daño estructural",
      description: "El agua y la humedad pueden deteriorar materiales de construcción si no se atienden a tiempo."
    },
    {
      title: "Problemas relacionados",
      description: "La humedad prolongada puede generar moho y otros problemas que afectan la propiedad."
    },
    {
      title: "Clima tropical",
      description: "Puerto Rico tiene un clima húmedo y lluvioso que puede aumentar los riesgos de daños por agua."
    },
    {
      title: "Protección de la propiedad",
      description: "Atender los daños por agua a tiempo ayuda a proteger el valor de tu propiedad."
    }
  ] : [
    {
      title: "Structural damage",
      description: "Water and moisture can deteriorate building materials if not addressed in time."
    },
    {
      title: "Related problems",
      description: "Prolonged humidity can generate mold and other problems that affect the property."
    },
    {
      title: "Tropical climate",
      description: "Puerto Rico has a humid and rainy climate that can increase the risks of water damage."
    },
    {
      title: "Property protection",
      description: "Addressing water damage in time helps protect your property's value."
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-50 via-background to-teal-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-700 mb-6">
              <Clock className="h-4 w-4" />
              {language === "es" ? "Próximamente" : "Coming Soon"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {language === "es" 
                ? "Mitigación de daños por agua" 
                : "Water Damage Mitigation"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              {language === "es"
                ? "Servicio próximamente disponible para atender daños por agua, humedad y problemas relacionados en propiedades residenciales y comerciales."
                : "Service coming soon to address water damage, moisture and related problems in residential and commercial properties."}
            </p>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center justify-center gap-3 bg-teal-100 border-2 border-teal-200 rounded-2xl px-8 py-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-teal-800">
                  {language === "es" ? "En Desarrollo" : "Under Development"}
                </p>
                <p className="text-sm text-teal-600">
                  {language === "es" ? "Contáctanos para más información" : "Contact us for more information"}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
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
                ? "Estos son los servicios de mitigación de daños por agua que estaremos ofreciendo próximamente."
                : "These are the water damage mitigation services we will be offering soon."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plannedServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="p-6 border-dashed border-2 border-teal-200 bg-teal-50/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 mb-4">
                    <Icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    {service.title}
                    <span className="text-xs bg-teal-200 text-teal-700 px-2 py-0.5 rounded-full">
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
                  ? "¿Por qué es importante atender los daños por agua?" 
                  : "Why is it important to address water damage?"}
              </h2>
              <div className="space-y-6">
                {whyImportant.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500/10 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-teal-600" />
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
              <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl p-8 text-center">
                <Droplets className="h-24 w-24 text-teal-300 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-teal-800 mb-2">
                  {language === "es" ? "Servicio en Desarrollo" : "Service Under Development"}
                </h3>
                <p className="text-teal-600 mb-6">
                  {language === "es" 
                    ? "Estamos preparando este servicio para ofrecerlo próximamente en Puerto Rico."
                    : "We are preparing this service to offer it soon in Puerto Rico."}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-teal-700">
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
            <Card className="p-6 border-teal-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500 text-white">
                  <Home className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Propietarios residenciales" : "Residential Owners"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Los daños por agua pueden aparecer en cualquier hogar, especialmente en áreas con alta humedad o filtraciones."
                  : "Water damage can appear in any home, especially in areas with high humidity or leaks."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Manchas de humedad visibles", "Filtraciones en techos o paredes", "Áreas con olor a humedad", "Daños después de lluvias fuertes"]
                  : ["Visible moisture stains", "Roof or wall leaks", "Areas with musty smell", "Damage after heavy rain"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 border-teal-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Propietarios comerciales" : "Commercial Owners"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Los negocios necesitan mantener ambientes secos y saludables para empleados y clientes."
                  : "Businesses need to maintain dry and healthy environments for employees and customers."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Oficinas y comercios", "Almacenes y bodegas", "Edificios de apartamentos", "Locales comerciales"]
                  : ["Offices and retail", "Warehouses and storage", "Apartment buildings", "Commercial spaces"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-teal-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-teal-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Tu propiedad tiene señales de humedad o filtraciones?" 
                : "Does your property show signs of moisture or leaks?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "Déjanos tus datos y te orientamos cuando este servicio esté disponible."
                : "Leave us your information and we'll guide you when this service is available."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-white/90 font-semibold">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {language === "es" ? "Solicitar Información" : "Request Information"}
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-teal-600 text-white hover:bg-teal-700 font-semibold border border-white/20">
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
