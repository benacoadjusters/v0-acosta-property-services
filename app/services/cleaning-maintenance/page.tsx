"use client"

import Link from "next/link"
import { 
  SprayCan, 
  ArrowRight, 
  Clock,
  Shield,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
  Home,
  Warehouse,
  Brush,
  Recycle,
  CalendarCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function CleaningMaintenancePage() {
  const { language, t } = useLanguage()

  const plannedServices = language === "es" ? [
    {
      icon: Sparkles,
      title: "Limpieza Profunda",
      description: "Limpieza exhaustiva de espacios incluyendo áreas difíciles de alcanzar y superficies que requieren atención especial."
    },
    {
      icon: Building2,
      title: "Limpieza de Oficinas",
      description: "Servicios de limpieza comercial para mantener espacios de trabajo limpios, organizados y profesionales."
    },
    {
      icon: Warehouse,
      title: "Limpieza Post-Construcción",
      description: "Limpieza especializada después de remodelaciones o construcciones para dejar el espacio listo para usar."
    },
    {
      icon: Shield,
      title: "Desinfección",
      description: "Servicios de desinfección profesional para eliminar gérmenes, bacterias y virus de superficies."
    },
    {
      icon: Recycle,
      title: "Mantenimiento Preventivo",
      description: "Programas de mantenimiento regular para preservar la condición de su propiedad a largo plazo."
    },
    {
      icon: CalendarCheck,
      title: "Planes Personalizados",
      description: "Programas de limpieza adaptados a las necesidades específicas de su hogar o negocio."
    }
  ] : [
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Thorough cleaning of spaces including hard-to-reach areas and surfaces requiring special attention."
    },
    {
      icon: Building2,
      title: "Office Cleaning",
      description: "Commercial cleaning services to maintain clean, organized and professional workspaces."
    },
    {
      icon: Warehouse,
      title: "Post-Construction Cleaning",
      description: "Specialized cleaning after remodeling or construction to leave the space ready to use."
    },
    {
      icon: Shield,
      title: "Disinfection",
      description: "Professional disinfection services to eliminate germs, bacteria and viruses from surfaces."
    },
    {
      icon: Recycle,
      title: "Preventive Maintenance",
      description: "Regular maintenance programs to preserve your property's condition long-term."
    },
    {
      icon: CalendarCheck,
      title: "Custom Plans",
      description: "Cleaning programs tailored to the specific needs of your home or business."
    }
  ]

  const whyImportant = language === "es" ? [
    {
      title: "Ambiente Saludable",
      description: "Un espacio limpio reduce alérgenos, bacterias y otros contaminantes que afectan la salud."
    },
    {
      title: "Productividad",
      description: "Los espacios limpios y organizados mejoran la productividad y el bienestar de las personas."
    },
    {
      title: "Primera Impresión",
      description: "Un negocio limpio proyecta profesionalismo y genera confianza en clientes y visitantes."
    },
    {
      title: "Preservación",
      description: "El mantenimiento regular extiende la vida útil de superficies, equipos y mobiliario."
    }
  ] : [
    {
      title: "Healthy Environment",
      description: "A clean space reduces allergens, bacteria and other contaminants that affect health."
    },
    {
      title: "Productivity",
      description: "Clean and organized spaces improve people's productivity and well-being."
    },
    {
      title: "First Impression",
      description: "A clean business projects professionalism and builds trust with customers and visitors."
    },
    {
      title: "Preservation",
      description: "Regular maintenance extends the lifespan of surfaces, equipment and furniture."
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
                ? "Limpieza y Mantenimiento" 
                : "Cleaning & Maintenance"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              {language === "es"
                ? "Estamos preparando servicios profesionales de limpieza y mantenimiento para Puerto Rico. Limpieza profunda, desinfección y mantenimiento preventivo para su propiedad."
                : "We are preparing professional cleaning and maintenance services for Puerto Rico. Deep cleaning, disinfection and preventive maintenance for your property."}
            </p>
            
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center justify-center gap-3 bg-blue-100 border-2 border-blue-200 rounded-2xl px-8 py-4 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                <SprayCan className="h-6 w-6 text-white" />
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
                ? "Estos son los servicios de limpieza y mantenimiento que estaremos ofreciendo próximamente."
                : "These are the cleaning and maintenance services we will be offering soon."}
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
                  ? "¿Por Qué es Importante la Limpieza Profesional?" 
                  : "Why is Professional Cleaning Important?"}
              </h2>
              <div className="space-y-6">
                {whyImportant.map((item, index) => (
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
                <SprayCan className="h-24 w-24 text-blue-300 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {language === "es" ? "Servicio en Desarrollo" : "Service Under Development"}
                </h3>
                <p className="text-blue-600 mb-6">
                  {language === "es" 
                    ? "Estamos preparando equipos y productos profesionales para ofrecer el mejor servicio de limpieza."
                    : "We are preparing professional equipment and products to offer the best cleaning service."}
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
                  {language === "es" ? "Hogares" : "Homes"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Familias ocupadas que necesitan ayuda para mantener su hogar limpio y saludable."
                  : "Busy families who need help keeping their home clean and healthy."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Limpieza profunda periódica", "Preparación para eventos", "Mudanzas y renovaciones", "Mantenimiento regular"]
                  : ["Periodic deep cleaning", "Event preparation", "Moving and renovations", "Regular maintenance"]
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
                  {language === "es" ? "Negocios" : "Businesses"}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {language === "es"
                  ? "Empresas que necesitan mantener espacios profesionales y saludables para empleados y clientes."
                  : "Companies that need to maintain professional and healthy spaces for employees and customers."}
              </p>
              <ul className="space-y-2">
                {(language === "es" 
                  ? ["Oficinas corporativas", "Locales comerciales", "Restaurantes y cafeterías", "Consultorios y clínicas"]
                  : ["Corporate offices", "Retail locations", "Restaurants and cafes", "Clinics and offices"]
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
                ? "¿Interesado en Nuestros Servicios de Limpieza?" 
                : "Interested in Our Cleaning Services?"}
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
