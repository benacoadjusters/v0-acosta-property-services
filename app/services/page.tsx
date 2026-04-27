"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Bug, TreePine, HardHat, SprayCan, Paintbrush, Droplets, CheckCircle2, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function ServicesIndexPage() {
  const { language, t } = useLanguage()

  const serviceCategories = [
    {
      id: "pest-control",
      href: "/services/pest-control",
      icon: Bug,
      color: "primary",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
      badgeColor: "bg-primary",
      status: "active",
      nameEs: "Control de Plagas",
      nameEn: "Pest Control",
      descriptionEs: "Fumigación, trampeo y control biológico para eliminar todo tipo de plagas. Protegemos su hogar y negocio con métodos seguros, efectivos y certificados por el Departamento de Agricultura de Puerto Rico.",
      descriptionEn: "Fumigation, trapping and biological control to eliminate all types of pests. We protect your home and business with safe, effective methods certified by the Puerto Rico Department of Agriculture.",
      featuresEs: [
        "Fumigación profesional",
        "Exterminación por trampas",
        "Control biológico",
        "Servicio residencial y comercial",
        "Técnicos certificados",
        "Garantía de servicio"
      ],
      featuresEn: [
        "Professional fumigation",
        "Trap extermination",
        "Biological control",
        "Residential and commercial service",
        "Certified technicians",
        "Service guarantee"
      ],
      image: "/images/hero-pest-control.jpg"
    },
    {
      id: "landscaping",
      href: "/services/landscaping",
      icon: TreePine,
      color: "green",
      bgColor: "bg-green-500/10",
      textColor: "text-green-600",
      badgeColor: "bg-green-600",
      status: "active",
      nameEs: "Jardinería",
      nameEn: "Landscaping",
      descriptionEs: "Servicios completos de mantenimiento y diseño de jardines. Desde corte de grama hasta diseño paisajístico, cuidamos las áreas verdes de su propiedad para mantenerlas hermosas durante todo el año.",
      descriptionEn: "Complete garden maintenance and design services. From lawn mowing to landscape design, we care for your property's green areas to keep them beautiful year-round.",
      featuresEs: [
        "Corte de grama",
        "Poda de árboles y arbustos",
        "Diseño paisajístico",
        "Mantenimiento de jardines",
        "Siembra y fertilización",
        "Limpieza de áreas verdes"
      ],
      featuresEn: [
        "Lawn mowing",
        "Tree and shrub pruning",
        "Landscape design",
        "Garden maintenance",
        "Planting and fertilization",
        "Green area cleaning"
      ],
      image: "/images/hero-landscaping.jpg"
    },
    {
      id: "cleaning-maintenance",
      href: "/services/cleaning-maintenance",
      icon: SprayCan,
      color: "blue",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-600",
      badgeColor: "bg-blue-500",
      status: "coming-soon",
      nameEs: "Limpieza y Mantenimiento",
      nameEn: "Cleaning & Maintenance",
      descriptionEs: "Próximamente ofreceremos servicios profesionales de limpieza y mantenimiento general. Limpieza profunda, mantenimiento preventivo y cuidado integral de propiedades.",
      descriptionEn: "Coming soon: professional cleaning and general maintenance services. Deep cleaning, preventive maintenance and comprehensive property care.",
      featuresEs: [
        "Limpieza profunda",
        "Mantenimiento preventivo",
        "Limpieza de oficinas",
        "Limpieza post-construcción",
        "Desinfección",
        "Mantenimiento general"
      ],
      featuresEn: [
        "Deep cleaning",
        "Preventive maintenance",
        "Office cleaning",
        "Post-construction cleaning",
        "Disinfection",
        "General maintenance"
      ],
      image: null
    },
    {
      id: "repairs-painting",
      href: "/services/repairs-painting",
      icon: Paintbrush,
      color: "purple",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-600",
      badgeColor: "bg-purple-500",
      status: "coming-soon",
      nameEs: "Reparaciones Menores / Pintura",
      nameEn: "Minor Repairs / Painting",
      descriptionEs: "Próximamente ofreceremos servicios de reparaciones menores y pintura. Desde pequeños arreglos hasta renovación completa de pintura interior y exterior.",
      descriptionEn: "Coming soon: minor repairs and painting services. From small fixes to complete interior and exterior paint renovation.",
      featuresEs: [
        "Pintura interior",
        "Pintura exterior",
        "Reparaciones de paredes",
        "Instalación de molduras",
        "Carpintería menor",
        "Acabados y retoques"
      ],
      featuresEn: [
        "Interior painting",
        "Exterior painting",
        "Wall repairs",
        "Molding installation",
        "Minor carpentry",
        "Finishes and touch-ups"
      ],
      image: null
    },
    {
      id: "environmental",
      href: "/services/environmental",
      icon: HardHat,
      color: "orange",
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-600",
      badgeColor: "bg-orange-500",
      status: "coming-soon",
      nameEs: "Mitigación Ambiental",
      nameEn: "Environmental Mitigation",
      descriptionEs: "Próximamente ofreceremos servicios profesionales de mitigación de asbesto y plomo. Remoción segura y certificada de materiales peligrosos.",
      descriptionEn: "Coming soon: professional asbestos and lead mitigation services. Safe and certified removal of hazardous materials.",
      featuresEs: [
        "Inspección de asbesto",
        "Remoción de plomo",
        "Certificación ambiental",
        "Cumplimiento regulatorio",
        "Disposición segura",
        "Consultoría especializada"
      ],
      featuresEn: [
        "Asbestos inspection",
        "Lead removal",
        "Environmental certification",
        "Regulatory compliance",
        "Safe disposal",
        "Specialized consulting"
      ],
      image: null
    },
    {
      id: "mold-mitigation",
      href: "/services/mold-mitigation",
      icon: Droplets,
      color: "teal",
      bgColor: "bg-teal-500/10",
      textColor: "text-teal-600",
      badgeColor: "bg-teal-500",
      status: "coming-soon",
      nameEs: "Mitigación de Moho",
      nameEn: "Mold Mitigation",
      descriptionEs: "Próximamente ofreceremos servicios profesionales de mitigación de moho. Inspección, remoción segura y prevención para proteger su propiedad y salud.",
      descriptionEn: "Coming soon: professional mold mitigation services. Inspection, safe removal and prevention to protect your property and health.",
      featuresEs: [
        "Inspección de moho",
        "Remoción segura",
        "Tratamiento preventivo",
        "Control de humedad",
        "Desinfección",
        "Certificación"
      ],
      featuresEn: [
        "Mold inspection",
        "Safe removal",
        "Preventive treatment",
        "Humidity control",
        "Disinfection",
        "Certification"
      ],
      image: null
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <CheckCircle2 className="h-4 w-4" />
              {language === "es" ? "Servicios Profesionales" : "Professional Services"}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              {language === "es" ? "Nuestros Servicios" : "Our Services"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              {language === "es" 
                ? "Soluciones integrales para el cuidado y protección de su propiedad. Control de plagas, jardinería profesional y próximamente mitigación ambiental."
                : "Comprehensive solutions for the care and protection of your property. Pest control, professional landscaping and coming soon environmental mitigation."}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Bug className="h-3.5 w-3.5" />
                {language === "es" ? "Control de Plagas" : "Pest Control"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-700">
                <TreePine className="h-3.5 w-3.5" />
                {language === "es" ? "Jardinería" : "Landscaping"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700">
                <SprayCan className="h-3.5 w-3.5" />
                {language === "es" ? "Limpieza" : "Cleaning"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-700">
                <Paintbrush className="h-3.5 w-3.5" />
                {language === "es" ? "Pintura" : "Painting"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-700">
                <HardHat className="h-3.5 w-3.5" />
                {language === "es" ? "Ambiental" : "Environmental"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-700">
                <Droplets className="h-3.5 w-3.5" />
                {language === "es" ? "Moho" : "Mold"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {serviceCategories.map((service, index) => {
              const Icon = service.icon
              const name = language === "es" ? service.nameEs : service.nameEn
              const description = language === "es" ? service.descriptionEs : service.descriptionEn
              const features = language === "es" ? service.featuresEs : service.featuresEn
              const isComingSoon = service.status === "coming-soon"
              const isReversed = index % 2 !== 0

              return (
                <div 
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image/Visual */}
                  <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
                    {service.image ? (
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={service.image}
                          alt={name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`inline-flex items-center gap-2 rounded-full ${service.badgeColor} px-3 py-1.5 text-sm font-medium text-white`}>
                            <Icon className="h-4 w-4" />
                            {isComingSoon 
                              ? (language === "es" ? "Próximamente" : "Coming Soon")
                              : (language === "es" ? "Disponible" : "Available")
                            }
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl flex items-center justify-center ${
                        service.id === "cleaning-maintenance" ? "bg-gradient-to-br from-blue-100 to-blue-50" :
                        service.id === "repairs-painting" ? "bg-gradient-to-br from-purple-100 to-purple-50" :
                        service.id === "mold-mitigation" ? "bg-gradient-to-br from-teal-100 to-teal-50" :
                        "bg-gradient-to-br from-orange-100 to-orange-50"
                      }`}>
                        <div className="text-center">
                          <Icon className={`h-24 w-24 mx-auto mb-4 ${
                            service.id === "cleaning-maintenance" ? "text-blue-300" :
                            service.id === "repairs-painting" ? "text-purple-300" :
                            service.id === "mold-mitigation" ? "text-teal-300" :
                            "text-orange-300"
                          }`} />
                          <span className={`inline-flex items-center gap-2 rounded-full ${service.badgeColor} px-4 py-2 text-sm font-medium text-white`}>
                            <Clock className="h-4 w-4" />
                            {language === "es" ? "Próximamente" : "Coming Soon"}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className={`inline-flex items-center gap-2 rounded-full ${service.bgColor} px-3 py-1 text-sm font-medium ${service.textColor} mb-4`}>
                      <Icon className="h-4 w-4" />
                      {isComingSoon 
                        ? (language === "es" ? "Próximamente" : "Coming Soon")
                        : (language === "es" ? "Servicio Activo" : "Active Service")
                      }
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {name}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 text-pretty">
                      {description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className={`h-5 w-5 shrink-0 ${service.textColor}`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    {isComingSoon ? (
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild size="lg" className={
                          service.id === "cleaning-maintenance" ? "bg-blue-500 hover:bg-blue-600 text-white" :
                          service.id === "repairs-painting" ? "bg-purple-500 hover:bg-purple-600 text-white" :
                          service.id === "mold-mitigation" ? "bg-teal-500 hover:bg-teal-600 text-white" :
                          "bg-orange-500 hover:bg-orange-600 text-white"
                        }>
                          <Link href={service.href}>
                            {t.ui.learnMore}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                          <Link href="/contact">
                            {t.ui.getQuote}
                          </Link>
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild size="lg" className={service.id === "landscaping" ? "bg-green-600 hover:bg-green-700 text-white" : ""}>
                          <Link href={service.href}>
                            {t.ui.learnMore}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                          <Link href="/contact">
                            {t.ui.getQuote}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" ? "¿Listo para Proteger su Propiedad?" : "Ready to Protect Your Property?"}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 text-pretty">
              {language === "es" 
                ? "Solicite una cotización gratis y sin compromiso. Nuestro equipo de expertos está listo para ayudarle con cualquiera de nuestros servicios."
                : "Request a free, no-obligation quote. Our team of experts is ready to help you with any of our services."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link href="/contact">
                  {t.ui.getQuote}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
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
