"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Bug, TreePine, HardHat, SprayCan, Droplets, CheckCircle2, Clock, Phone, Wrench, Zap, Layers, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function ServicesIndexPage() {
  const { language, t } = useLanguage()

  const activeServices = [
    {
      id: "pest-control",
      href: "/services/pest-control",
      icon: Bug,
      bgColor: "bg-primary/10",
      textColor: "text-primary",
      badgeColor: "bg-primary",
      hoverColor: "hover:text-primary",
      buttonColor: "",
      nameEs: "Control de Plagas",
      nameEn: "Pest Control",
      descriptionEs: "Fumigación, trampeo y control preventivo para proteger hogares, negocios y propiedades comerciales contra plagas comunes en Puerto Rico.",
      descriptionEn: "Fumigation, trapping and preventive control to protect homes, businesses and commercial properties against common pests in Puerto Rico.",
      featuresEs: [
        "Fumigación profesional",
        "Trampeo para roedores",
        "Control preventivo",
        "Servicio residencial y comercial",
        "Atención a plagas comunes en Puerto Rico"
      ],
      featuresEn: [
        "Professional fumigation",
        "Rodent trapping",
        "Preventive control",
        "Residential and commercial service",
        "Attention to common pests in Puerto Rico"
      ],
      image: "/images/hero-pest-control.jpg"
    },
    {
      id: "plumbing",
      href: "/services/plumbing",
      icon: Wrench,
      bgColor: "bg-cyan-500/10",
      textColor: "text-cyan-600",
      badgeColor: "bg-cyan-600",
      hoverColor: "hover:text-cyan-600",
      buttonColor: "bg-cyan-600 hover:bg-cyan-700 text-white",
      nameEs: "Plomería",
      nameEn: "Plumbing",
      descriptionEs: "Reparación de fugas, destapes, tuberías, calentadores y accesorios de plomería para propiedades residenciales y comerciales.",
      descriptionEn: "Leak repair, drain cleaning, pipes, water heaters and plumbing fixtures for residential and commercial properties.",
      featuresEs: [
        "Reparación de fugas",
        "Destape de desagües",
        "Reparación de tuberías",
        "Calentadores de agua",
        "Instalación de accesorios"
      ],
      featuresEn: [
        "Leak repair",
        "Drain cleaning",
        "Pipe repair",
        "Water heaters",
        "Fixture installation"
      ],
      image: "/images/hero-plumbing.jpg"
    },
    {
      id: "electrical",
      href: "/services/electrical",
      icon: Zap,
      bgColor: "bg-yellow-500/10",
      textColor: "text-yellow-600",
      badgeColor: "bg-yellow-600",
      hoverColor: "hover:text-yellow-600",
      buttonColor: "bg-yellow-600 hover:bg-yellow-700 text-white",
      nameEs: "Electricidad",
      nameEn: "Electrical",
      descriptionEs: "Instalaciones y reparaciones eléctricas para paneles, breakers, tomacorrientes, iluminación y abanicos de techo.",
      descriptionEn: "Electrical installations and repairs for panels, breakers, outlets, lighting and ceiling fans.",
      featuresEs: [
        "Paneles eléctricos",
        "Breakers",
        "Tomacorrientes y switches",
        "Iluminación interior y exterior",
        "Abanicos de techo"
      ],
      featuresEn: [
        "Electrical panels",
        "Breakers",
        "Outlets and switches",
        "Interior and exterior lighting",
        "Ceiling fans"
      ],
      image: "/images/hero-electrical.jpg"
    },
    {
      id: "landscaping",
      href: "/services/landscaping",
      icon: TreePine,
      bgColor: "bg-green-500/10",
      textColor: "text-green-600",
      badgeColor: "bg-green-600",
      hoverColor: "hover:text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700 text-white",
      nameEs: "Jardinería",
      nameEn: "Landscaping",
      descriptionEs: "Corte de grama, poda, mantenimiento de jardines y limpieza de áreas verdes para mantener tu propiedad presentable.",
      descriptionEn: "Lawn mowing, pruning, garden maintenance and green area cleaning to keep your property presentable.",
      featuresEs: [
        "Corte de grama",
        "Poda de árboles y arbustos",
        "Mantenimiento de jardines",
        "Limpieza de áreas verdes",
        "Diseño y mejoras exteriores"
      ],
      featuresEn: [
        "Lawn mowing",
        "Tree and shrub pruning",
        "Garden maintenance",
        "Green area cleaning",
        "Exterior design and improvements"
      ],
      image: "/images/hero-landscaping.jpg"
    },
    {
      id: "cleaning",
      href: "/services/cleaning",
      icon: SprayCan,
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-600",
      badgeColor: "bg-blue-600",
      hoverColor: "hover:text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700 text-white",
      nameEs: "Limpieza",
      nameEn: "Cleaning",
      descriptionEs: "Limpieza residencial, comercial, profunda y post-construcción para hogares, oficinas, negocios y propiedades comerciales.",
      descriptionEn: "Residential, commercial, deep and post-construction cleaning for homes, offices, businesses and commercial properties.",
      featuresEs: [
        "Limpieza residencial",
        "Limpieza comercial",
        "Limpieza profunda",
        "Limpieza post-construcción",
        "Mantenimiento regular"
      ],
      featuresEn: [
        "Residential cleaning",
        "Commercial cleaning",
        "Deep cleaning",
        "Post-construction cleaning",
        "Regular maintenance"
      ],
      image: "/images/hero-cleaning.jpg"
    }
  ]

  const comingSoonServices = [
    {
      id: "water-damage",
      href: "/services/water-damage-mitigation",
      icon: Droplets,
      bgColor: "bg-teal-500/10",
      textColor: "text-teal-600",
      badgeColor: "bg-teal-500",
      nameEs: "Mitigación de daños por agua",
      nameEn: "Water Damage Mitigation",
      descriptionEs: "Servicio próximamente disponible para atender daños por agua, humedad y problemas relacionados en propiedades residenciales y comerciales.",
      descriptionEn: "Service coming soon to address water damage, humidity and related issues in residential and commercial properties.",
      featuresEs: [
        "Evaluación de áreas afectadas",
        "Atención a humedad",
        "Prevención de daños mayores",
        "Orientación para propietarios",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Assessment of affected areas",
        "Humidity attention",
        "Prevention of major damage",
        "Owner guidance",
        "Service in development"
      ]
    },
    {
      id: "handyman",
      href: "/services/handyman-repairs",
      icon: HardHat,
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-600",
      badgeColor: "bg-purple-500",
      nameEs: "Reparaciones handyman",
      nameEn: "Handyman Repairs",
      descriptionEs: "Servicio próximamente disponible para reparaciones menores, instalaciones básicas y mantenimiento general de propiedades.",
      descriptionEn: "Service coming soon for minor repairs, basic installations and general property maintenance.",
      featuresEs: [
        "Reparaciones menores",
        "Instalaciones básicas",
        "Ajustes y mantenimiento",
        "Soporte general para propiedades",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Minor repairs",
        "Basic installations",
        "Adjustments and maintenance",
        "General property support",
        "Service in development"
      ]
    },
    {
      id: "roof-sealing",
      href: "/services/roof-sealing",
      icon: Layers,
      bgColor: "bg-amber-500/10",
      textColor: "text-amber-600",
      badgeColor: "bg-amber-500",
      nameEs: "Sellado de techos",
      nameEn: "Roof Sealing",
      descriptionEs: "Servicio próximamente disponible para sellado preventivo de techos y protección contra filtraciones.",
      descriptionEn: "Service coming soon for preventive roof sealing and leak protection.",
      featuresEs: [
        "Sellado preventivo",
        "Protección contra filtraciones",
        "Mantenimiento de techos",
        "Protección contra humedad",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Preventive sealing",
        "Leak protection",
        "Roof maintenance",
        "Humidity protection",
        "Service in development"
      ]
    },
    {
      id: "lead-asbestos",
      href: "/services/lead-asbestos-mitigation",
      icon: Shield,
      bgColor: "bg-orange-500/10",
      textColor: "text-orange-600",
      badgeColor: "bg-orange-500",
      nameEs: "Mitigación de plomo y asbesto",
      nameEn: "Lead & Asbestos Mitigation",
      descriptionEs: "Servicio próximamente disponible para propiedades que requieren manejo profesional de plomo o asbesto.",
      descriptionEn: "Service coming soon for properties requiring professional lead or asbestos handling.",
      featuresEs: [
        "Evaluación especializada",
        "Manejo de materiales sensibles",
        "Orientación para propietarios",
        "Cumplimiento y seguridad",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Specialized assessment",
        "Sensitive material handling",
        "Owner guidance",
        "Compliance and safety",
        "Service in development"
      ]
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
                ? "Soluciones para proteger, reparar y mantener hogares, negocios y propiedades comerciales en Puerto Rico."
                : "Solutions to protect, repair and maintain homes, businesses and commercial properties in Puerto Rico."}
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Bug className="h-3.5 w-3.5" />
                {language === "es" ? "Control de Plagas" : "Pest Control"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-700">
                <Wrench className="h-3.5 w-3.5" />
                {language === "es" ? "Plomería" : "Plumbing"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-700">
                <Zap className="h-3.5 w-3.5" />
                {language === "es" ? "Electricidad" : "Electrical"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-700">
                <TreePine className="h-3.5 w-3.5" />
                {language === "es" ? "Jardinería" : "Landscaping"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700">
                <SprayCan className="h-3.5 w-3.5" />
                {language === "es" ? "Limpieza" : "Cleaning"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-700">
                <Droplets className="h-3.5 w-3.5" />
                {language === "es" ? "Mitigación de daños por agua" : "Water Damage Mitigation"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-700">
                <HardHat className="h-3.5 w-3.5" />
                {language === "es" ? "Reparaciones handyman" : "Handyman Repairs"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700">
                <Layers className="h-3.5 w-3.5" />
                {language === "es" ? "Sellado de techos" : "Roof Sealing"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-700">
                <Shield className="h-3.5 w-3.5" />
                {language === "es" ? "Mitigación de plomo y asbesto" : "Lead & Asbestos Mitigation"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Active Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {activeServices.map((service, index) => {
              const Icon = service.icon
              const name = language === "es" ? service.nameEs : service.nameEn
              const description = language === "es" ? service.descriptionEs : service.descriptionEn
              const features = language === "es" ? service.featuresEs : service.featuresEn
              const isReversed = index % 2 !== 0

              return (
                <div 
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Image */}
                  <div className={`relative ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={service.image}
                        alt={name}
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center gap-2 rounded-full ${service.badgeColor} px-3 py-1.5 text-sm font-medium text-white`}>
                          <Icon className="h-4 w-4" />
                          {language === "es" ? "Disponible" : "Available"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isReversed ? 'lg:order-1' : ''}>
                    <div className={`inline-flex items-center gap-2 rounded-full ${service.bgColor} px-3 py-1 text-sm font-medium ${service.textColor} mb-4`}>
                      <Icon className="h-4 w-4" />
                      {language === "es" ? "Servicio Activo" : "Active Service"}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {name}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6 text-pretty">
                      {description}
                    </p>
                    
                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className={`h-5 w-5 shrink-0 ${service.textColor}`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="lg" className={service.buttonColor}>
                        <Link href={service.href}>
                          {language === "es" ? "Saber Más" : "Learn More"}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline">
                        <Link href="/contact">
                          {language === "es" ? "Cotización Gratis" : "Free Quote"}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground mb-4">
              <Clock className="h-4 w-4" />
              {language === "es" ? "Próximamente" : "Coming Soon"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {language === "es" ? "Servicios en Desarrollo" : "Services in Development"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {comingSoonServices.map((service) => {
              const Icon = service.icon
              const name = language === "es" ? service.nameEs : service.nameEn
              const description = language === "es" ? service.descriptionEs : service.descriptionEn
              const features = language === "es" ? service.featuresEs : service.featuresEn

              return (
                <Link 
                  key={service.id}
                  href={service.href}
                  className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${service.bgColor} shrink-0`}>
                      <Icon className={`h-6 w-6 ${service.textColor}`} />
                    </div>
                    <div>
                      <span className={`inline-flex items-center gap-1.5 rounded-full ${service.badgeColor} px-2.5 py-0.5 text-xs font-medium text-white mb-2`}>
                        {language === "es" ? "Próximamente" : "Coming Soon"}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    {description}
                  </p>
                  <div className="space-y-2">
                    {features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className={`h-4 w-4 shrink-0 ${service.textColor}`} />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Link>
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
              {language === "es" ? "¿Listo para coordinar tu servicio?" : "Ready to coordinate your service?"}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 text-pretty">
              {language === "es" 
                ? "Dinos qué necesita tu propiedad y te orientamos con una cotización para control de plagas, plomería, electricidad, jardinería o limpieza."
                : "Tell us what your property needs and we'll guide you with a quote for pest control, plumbing, electrical, landscaping or cleaning."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link href="/contact">
                  {language === "es" ? "Cotización Gratis" : "Free Quote"}
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
