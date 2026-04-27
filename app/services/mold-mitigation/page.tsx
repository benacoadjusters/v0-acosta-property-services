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
  FileText,
  Building2,
  Home,
  Thermometer,
  Wind,
  Microscope
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function MoldMitigationPage() {
  const { language, t } = useLanguage()

  const plannedServices = language === "es" ? [
    {
      icon: Microscope,
      title: "Inspección de Moho",
      description: "Evaluación profesional para identificar la presencia, tipo y extensión de moho en su propiedad."
    },
    {
      icon: Shield,
      title: "Remoción de Moho",
      description: "Eliminación segura y completa de moho utilizando técnicas especializadas y equipo profesional."
    },
    {
      icon: Thermometer,
      title: "Control de Humedad",
      description: "Identificación y corrección de fuentes de humedad para prevenir el regreso del moho."
    },
    {
      icon: Wind,
      title: "Purificación de Aire",
      description: "Limpieza del aire y eliminación de esporas de moho para mejorar la calidad del aire interior."
    },
    {
      icon: FileText,
      title: "Certificación",
      description: "Documentación y certificación de que su propiedad está libre de moho después del tratamiento."
    },
    {
      icon: AlertTriangle,
      title: "Prevención",
      description: "Tratamientos preventivos y recomendaciones para evitar futuros problemas de moho."
    }
  ] : [
    {
      icon: Microscope,
      title: "Mold Inspection",
      description: "Professional assessment to identify the presence, type and extent of mold in your property."
    },
    {
      icon: Shield,
      title: "Mold Removal",
      description: "Safe and complete mold removal using specialized techniques and professional equipment."
    },
    {
      icon: Thermometer,
      title: "Humidity Control",
      description: "Identification and correction of moisture sources to prevent mold from returning."
    },
    {
      icon: Wind,
      title: "Air Purification",
      description: "Air cleaning and mold spore removal to improve indoor air quality."
    },
    {
      icon: FileText,
      title: "Certification",
      description: "Documentation and certification that your property is mold-free after treatment."
    },
    {
      icon: AlertTriangle,
      title: "Prevention",
      description: "Preventive treatments and recommendations to avoid future mold problems."
    }
  ]

  const whyImportant = language === "es" ? [
    {
      title: "Problemas de Salud",
      description: "El moho puede causar alergias, problemas respiratorios y otros problemas de salud, especialmente en personas sensibles."
    },
    {
      title: "Daño Estructural",
      description: "El moho puede deteriorar materiales de construcción, causando daños costosos a su propiedad."
    },
    {
      title: "Clima Tropical",
      description: "Puerto Rico tiene un clima húmedo ideal para el crecimiento de moho, haciendo la prevención esencial."
    },
    {
      title: "Valor de Propiedad",
      description: "Una propiedad con problemas de moho pierde valor significativo en el mercado inmobiliario."
    }
  ] : [
    {
      title: "Health Problems",
      description: "Mold can cause allergies, respiratory problems and other health issues, especially in sensitive individuals."
    },
    {
      title: "Structural Damage",
      description: "Mold can deteriorate building materials, causing costly damage to your property."
    },
    {
      title: "Tropical Climate",
      description: "Puerto Rico has a humid climate ideal for mold growth, making prevention essential."
    },
    {
      title: "Property Value",
      description: "A property with mold problems loses significant value in the real estate market."
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
                ? "Mitigación de Moho" 
                : "Mold Mitigation"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              {language === "es"
                ? "Estamos preparando servicios profesionales de mitigación de moho para Puerto Rico. Inspección, remoción segura y prevención para proteger su propiedad y salud."
                : "We are preparing professional mold mitigation services for Puerto Rico. Inspection, safe removal and prevention to protect your property and health."}
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
                  {language === "es" ? "Contáctenos para más información" : "Contact us for more information"}
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
              {language === "es" ? "Servicios Planificados" : "Planned Services"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Estos son los servicios de mitigación de moho que estaremos ofreciendo próximamente."
                : "These are the mold mitigation services we will be offering soon."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  ? "¿Por Qué es Importante la Mitigación de Moho?" 
                  : "Why is Mold Mitigation Important?"}
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
                    ? "Estamos preparando el equipo y certificaciones necesarias para ofrecer estos servicios especializados."
                    : "We are preparing the equipment and certifications needed to offer these specialized services."}
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
              {language === "es" ? "¿Quién Necesita Este Servicio?" : "Who Needs This Service?"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 border-teal-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500 text-white">
                  <Home className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Propietarios Residenciales" : "Residential Owners"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "El moho puede aparecer en cualquier hogar, especialmente en áreas con alta humedad como baños, cocinas y sótanos."
                  : "Mold can appear in any home, especially in high humidity areas like bathrooms, kitchens and basements."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Manchas de humedad visibles", "Olor a humedad persistente", "Problemas de filtración", "Áreas mal ventiladas"]
                  : ["Visible moisture stains", "Persistent musty smell", "Leak problems", "Poorly ventilated areas"]
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
                  {language === "es" ? "Propietarios Comerciales" : "Commercial Owners"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Los negocios deben mantener ambientes saludables para empleados y clientes, libres de moho y contaminantes."
                  : "Businesses must maintain healthy environments for employees and customers, free of mold and contaminants."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Oficinas y comercios", "Restaurantes y hoteles", "Escuelas y guarderías", "Edificios de apartamentos"]
                  : ["Offices and retail", "Restaurants and hotels", "Schools and daycares", "Apartment buildings"]
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
                ? "¿Interesado en Nuestros Servicios de Mitigación de Moho?" 
                : "Interested in Our Mold Mitigation Services?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "Déjenos sus datos y le contactaremos tan pronto como estos servicios estén disponibles. También puede contactarnos para consultas generales."
                : "Leave us your information and we will contact you as soon as these services are available. You can also contact us for general inquiries."}
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
