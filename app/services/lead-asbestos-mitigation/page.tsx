"use client"

import Link from "next/link"
import { 
  HardHat, 
  ArrowRight, 
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Phone,
  Mail,
  FileText,
  Building2,
  Home,
  Microscope
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function LeadAsbestosMitigationPage() {
  const { language, t } = useLanguage()

  const plannedServices = language === "es" ? [
    {
      icon: Microscope,
      title: "Evaluación de asbesto",
      description: "Evaluación profesional para identificar materiales que puedan contener asbesto en tu propiedad."
    },
    {
      icon: Shield,
      title: "Manejo profesional de asbesto",
      description: "Manejo seguro y especializado de materiales con asbesto siguiendo protocolos de seguridad aplicables."
    },
    {
      icon: AlertTriangle,
      title: "Evaluación de plomo",
      description: "Detección de pintura con plomo y otras fuentes de contaminación por plomo en propiedades."
    },
    {
      icon: HardHat,
      title: "Mitigación de plomo",
      description: "Manejo seguro o encapsulación de pintura con plomo para proteger a tu familia."
    },
    {
      icon: FileText,
      title: "Orientación y documentación",
      description: "Orientación sobre cumplimiento aplicable y documentación del proceso realizado."
    },
    {
      icon: Building2,
      title: "Consultoría especializada",
      description: "Asesoría para propietarios y administradores sobre manejo de materiales sensibles."
    }
  ] : [
    {
      icon: Microscope,
      title: "Asbestos evaluation",
      description: "Professional evaluation to identify materials that may contain asbestos in your property."
    },
    {
      icon: Shield,
      title: "Professional asbestos handling",
      description: "Safe and specialized handling of asbestos materials following applicable safety protocols."
    },
    {
      icon: AlertTriangle,
      title: "Lead evaluation",
      description: "Detection of lead paint and other sources of lead contamination in properties."
    },
    {
      icon: HardHat,
      title: "Lead mitigation",
      description: "Safe handling or encapsulation of lead paint to protect your family."
    },
    {
      icon: FileText,
      title: "Guidance and documentation",
      description: "Guidance on applicable compliance and documentation of the process performed."
    },
    {
      icon: Building2,
      title: "Specialized consulting",
      description: "Advice for owners and managers on handling sensitive materials."
    }
  ]

  const whyImportant = language === "es" ? [
    {
      title: "Protección de la salud",
      description: "El asbesto y el plomo son materiales que pueden representar riesgos para la salud si no se manejan adecuadamente."
    },
    {
      title: "Cumplimiento aplicable",
      description: "Existen regulaciones que pueden requerir la identificación y manejo adecuado de estos materiales."
    },
    {
      title: "Seguridad",
      description: "El manejo profesional de estos materiales protege a tu familia, empleados o inquilinos."
    },
    {
      title: "Tranquilidad",
      description: "Saber que tu propiedad ha sido evaluada y atendida por profesionales brinda mayor tranquilidad."
    }
  ] : [
    {
      title: "Health protection",
      description: "Asbestos and lead are materials that can pose health risks if not handled properly."
    },
    {
      title: "Applicable compliance",
      description: "There are regulations that may require proper identification and handling of these materials."
    },
    {
      title: "Safety",
      description: "Professional handling of these materials protects your family, employees or tenants."
    },
    {
      title: "Peace of mind",
      description: "Knowing that your property has been evaluated and attended by professionals provides greater peace of mind."
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-background to-orange-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-700 mb-6">
              <Clock className="h-4 w-4" />
              {language === "es" ? "Próximamente" : "Coming Soon"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {language === "es" 
                ? "Mitigación de plomo y asbesto" 
                : "Lead and Asbestos Mitigation"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              {language === "es"
                ? "Servicio próximamente disponible para propiedades que requieren evaluación y manejo profesional de materiales sensibles como plomo o asbesto."
                : "Service coming soon for properties that require professional evaluation and handling of sensitive materials like lead or asbestos."}
            </p>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center justify-center gap-3 bg-orange-100 border-2 border-orange-200 rounded-2xl px-8 py-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
                <HardHat className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-orange-800">
                  {language === "es" ? "En Desarrollo" : "Under Development"}
                </p>
                <p className="text-sm text-orange-600">
                  {language === "es" ? "Contáctanos para más información" : "Contact us for more information"}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
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
                ? "Estos son los servicios de mitigación de plomo y asbesto que estaremos ofreciendo próximamente."
                : "These are the lead and asbestos mitigation services we will be offering soon."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="p-6 border-dashed border-2 border-orange-200 bg-orange-50/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 mb-4">
                    <Icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    {service.title}
                    <span className="text-xs bg-orange-200 text-orange-700 px-2 py-0.5 rounded-full">
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
                  ? "¿Por qué es importante la mitigación de plomo y asbesto?" 
                  : "Why is lead and asbestos mitigation important?"}
              </h2>
              <div className="space-y-6">
                {whyImportant.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-orange-600" />
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
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 text-center">
                <HardHat className="h-24 w-24 text-orange-300 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-orange-800 mb-2">
                  {language === "es" ? "Servicio en Desarrollo" : "Service Under Development"}
                </h3>
                <p className="text-orange-600 mb-6">
                  {language === "es" 
                    ? "Estamos preparando este servicio especializado para ofrecerlo próximamente en Puerto Rico."
                    : "We are preparing this specialized service to offer it soon in Puerto Rico."}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-orange-700">
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
            <Card className="p-6 border-orange-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500 text-white">
                  <Home className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Propietarios residenciales" : "Residential Owners"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Especialmente si tu hogar fue construido antes de 1978, podría contener pintura con plomo o materiales con asbesto."
                  : "Especially if your home was built before 1978, it may contain lead paint or asbestos materials."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Casas construidas antes de 1978", "Renovaciones y remodelaciones", "Familias con niños pequeños", "Compra o venta de propiedad"]
                  : ["Homes built before 1978", "Renovations and remodeling", "Families with young children", "Property purchase or sale"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 border-orange-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Propietarios comerciales" : "Commercial Owners"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Los edificios comerciales e industriales antiguos pueden contener materiales que deben ser evaluados y manejados apropiadamente."
                  : "Older commercial and industrial buildings may contain materials that should be evaluated and properly handled."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Edificios comerciales antiguos", "Proyectos de demolición", "Cumplimiento regulatorio", "Protección de empleados"]
                  : ["Older commercial buildings", "Demolition projects", "Regulatory compliance", "Employee protection"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-orange-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Tu propiedad requiere evaluación de plomo o asbesto?" 
                : "Does your property require lead or asbestos evaluation?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "Déjanos tus datos y te orientamos cuando este servicio especializado esté disponible."
                : "Leave us your information and we'll guide you when this specialized service is available."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-white/90 font-semibold">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {language === "es" ? "Solicitar Información" : "Request Information"}
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-orange-600 text-white hover:bg-orange-700 font-semibold border border-white/20">
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
