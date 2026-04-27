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
  Paintbrush,
  Droplets,
  Zap,
  Home,
  Building2,
  Hammer
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function PropertyMaintenancePage() {
  const { language, t } = useLanguage()

  const plannedServices = language === "es" ? [
    {
      icon: Paintbrush,
      title: "Pintura y Acabados",
      description: "Servicios de pintura interior y exterior para refrescar y proteger su propiedad. Preparación de superficies y acabados profesionales."
    },
    {
      icon: Droplets,
      title: "Plomería General",
      description: "Reparación de tuberías, grifos, inodoros y sistemas de agua. Instalación y mantenimiento de sistemas de plomería."
    },
    {
      icon: Zap,
      title: "Reparaciones Eléctricas",
      description: "Reparación de enchufes, interruptores, iluminación y sistemas eléctricos menores. Instalación de luminarias."
    },
    {
      icon: Hammer,
      title: "Carpintería y Reparaciones",
      description: "Reparación de puertas, ventanas, gabinetes y estructuras de madera. Instalación y ajustes generales."
    },
    {
      icon: Shield,
      title: "Mantenimiento Preventivo",
      description: "Inspecciones periódicas y mantenimiento preventivo para evitar reparaciones costosas. Planes personalizados."
    },
    {
      icon: Home,
      title: "Preparación de Propiedades",
      description: "Preparación de propiedades para venta o alquiler. Limpieza profunda, reparaciones menores y mejoras estéticas."
    }
  ] : [
    {
      icon: Paintbrush,
      title: "Painting and Finishes",
      description: "Interior and exterior painting services to refresh and protect your property. Surface preparation and professional finishes."
    },
    {
      icon: Droplets,
      title: "General Plumbing",
      description: "Repair of pipes, faucets, toilets and water systems. Installation and maintenance of plumbing systems."
    },
    {
      icon: Zap,
      title: "Electrical Repairs",
      description: "Repair of outlets, switches, lighting and minor electrical systems. Lighting fixture installation."
    },
    {
      icon: Hammer,
      title: "Carpentry and Repairs",
      description: "Repair of doors, windows, cabinets and wood structures. General installation and adjustments."
    },
    {
      icon: Shield,
      title: "Preventive Maintenance",
      description: "Periodic inspections and preventive maintenance to avoid costly repairs. Customized plans."
    },
    {
      icon: Home,
      title: "Property Preparation",
      description: "Property preparation for sale or rent. Deep cleaning, minor repairs and aesthetic improvements."
    }
  ]

  const benefits = language === "es" ? [
    {
      title: "Un Solo Proveedor",
      description: "Todos sus servicios de mantenimiento con un solo contacto. Simplificamos la gestión de su propiedad."
    },
    {
      title: "Respuesta Rápida",
      description: "Atendemos sus necesidades de mantenimiento de manera oportuna para minimizar inconvenientes."
    },
    {
      title: "Trabajo Garantizado",
      description: "Garantizamos la calidad de nuestro trabajo. Si no está satisfecho, lo arreglamos."
    },
    {
      title: "Precios Transparentes",
      description: "Cotizaciones claras y sin sorpresas. Sabrá exactamente cuánto pagará antes de comenzar."
    }
  ] : [
    {
      title: "Single Provider",
      description: "All your maintenance services with one contact. We simplify the management of your property."
    },
    {
      title: "Fast Response",
      description: "We address your maintenance needs promptly to minimize inconvenience."
    },
    {
      title: "Guaranteed Work",
      description: "We guarantee the quality of our work. If you're not satisfied, we fix it."
    },
    {
      title: "Transparent Pricing",
      description: "Clear quotes with no surprises. You'll know exactly how much you'll pay before we start."
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-background to-blue-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              <Clock className="h-4 w-4" />
              {language === "es" ? "Próximamente" : "Coming Soon"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {language === "es" 
                ? "Mantenimiento de Propiedades" 
                : "Property Maintenance"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              {language === "es"
                ? "Estamos expandiendo nuestros servicios para incluir mantenimiento general de propiedades. Reparaciones, pintura, plomería y más, todo con la calidad que nos caracteriza."
                : "We are expanding our services to include general property maintenance. Repairs, painting, plumbing and more, all with the quality that characterizes us."}
            </p>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center justify-center gap-3 bg-blue-100 border-2 border-blue-200 rounded-2xl px-8 py-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-blue-800">
                  {language === "es" ? "En Desarrollo" : "Under Development"}
                </p>
                <p className="text-sm text-blue-600">
                  {language === "es" ? "Contáctenos para más información" : "Contact us for more information"}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
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
                ? "Estos son los servicios de mantenimiento que estaremos ofreciendo próximamente."
                : "These are the maintenance services we will be offering soon."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="p-6 border-dashed border-2 border-blue-200 bg-blue-50/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    {service.title}
                    <span className="text-xs bg-blue-200 text-blue-700 px-2 py-0.5 rounded-full">
                      {language === "es" ? "Próximo" : "Soon"}
                    </span>
                  </h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === "es" 
                  ? "¿Por Qué Elegir Nuestro Servicio de Mantenimiento?" 
                  : "Why Choose Our Maintenance Service?"}
              </h2>
              <div className="space-y-6">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500/10 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
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
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 text-center">
                <Wrench className="h-24 w-24 text-blue-300 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {language === "es" ? "Servicio en Desarrollo" : "Service Under Development"}
                </h3>
                <p className="text-blue-600 mb-6">
                  {language === "es" 
                    ? "Estamos preparando nuestro equipo y recursos para ofrecer servicios de mantenimiento de la más alta calidad."
                    : "We are preparing our team and resources to offer the highest quality maintenance services."}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-blue-700">
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
            <Card className="p-6 border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500 text-white">
                  <Home className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Propietarios de Viviendas" : "Homeowners"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Mantenga su hogar en perfectas condiciones con nuestros servicios de mantenimiento preventivo y correctivo."
                  : "Keep your home in perfect condition with our preventive and corrective maintenance services."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Reparaciones menores del hogar", "Pintura y acabados", "Mantenimiento preventivo", "Preparación para venta o alquiler"]
                  : ["Minor home repairs", "Painting and finishes", "Preventive maintenance", "Preparation for sale or rent"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Building2 className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {language === "es" ? "Propiedades Comerciales" : "Commercial Properties"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Mantenga su negocio funcionando sin problemas con un mantenimiento confiable y programado."
                  : "Keep your business running smoothly with reliable, scheduled maintenance."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Mantenimiento de oficinas", "Reparaciones de locales comerciales", "Contratos de mantenimiento", "Respuesta de emergencia"]
                  : ["Office maintenance", "Commercial space repairs", "Maintenance contracts", "Emergency response"]
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Interesado en Nuestros Servicios de Mantenimiento?" 
                : "Interested in Our Maintenance Services?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "Déjenos sus datos y le contactaremos tan pronto como estos servicios estén disponibles. También puede contactarnos para consultas generales."
                : "Leave us your information and we will contact you as soon as these services are available. You can also contact us for general inquiries."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
                <Link href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  {language === "es" ? "Solicitar Información" : "Request Information"}
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-700 font-semibold border border-white/20">
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
