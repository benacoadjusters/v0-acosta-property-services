"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Bug, TreePine, HardHat, SprayCan, Droplets, CheckCircle2, Clock, Phone, Wrench, Zap, Layers, Shield, Grid3X3, Sparkles, Waves, Droplet, Sun } from "lucide-react"
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
      descriptionEs: "Tratamiento profesional para el control de plagas, trampeo y control preventivo para proteger hogares y negocios contra plagas comunes en Puerto Rico.",
      descriptionEn: "Professional pest control treatment, trapping and preventive control to protect homes and businesses against common pests in Puerto Rico.",
      featuresEs: [
        "Tratamiento profesional para el control de plagas",
        "Trampeo para roedores",
        "Control preventivo",
        "Servicio residencial y comercial",
        "Atención a plagas comunes en Puerto Rico"
      ],
      featuresEn: [
        "Professional pest control treatment",
        "Rodent trapping",
        "Preventive control",
        "Residential and commercial service",
        "Attention to common pests in Puerto Rico"
      ],
      image: "/images/hero-pest-control.jpg"
    },
    {
      id: "pressure-wash",
      href: "/services/pressure-wash",
      icon: Waves,
      bgColor: "bg-slate-500/10",
      textColor: "text-slate-700",
      badgeColor: "bg-slate-700",
      hoverColor: "hover:text-slate-700",
      buttonColor: "bg-slate-700 hover:bg-slate-800 text-white",
      nameEs: "Lavado a presión",
      nameEn: "Pressure Wash",
      descriptionEs: "Limpieza con presión para aceras, marquesinas, entradas, paredes, pisos exteriores y superficies resistentes.",
      descriptionEn: "Pressure cleaning for resistant surfaces like sidewalks, carports, driveways, walls and exterior areas.",
      featuresEs: [
        "Aceras y entradas",
        "Marquesinas y pisos exteriores",
        "Paredes y superficies resistentes",
        "Áreas comerciales exteriores",
        "Cotización según superficie"
      ],
      featuresEn: [
        "Sidewalks and driveways",
        "Carports and outdoor floors",
        "Walls and resistant surfaces",
        "Outdoor commercial areas",
        "Quote based on surface"
      ],
      image: "/images/pressure-wash.png"
    },
    {
      id: "solar-panel-cleaning",
      href: "/services/solar-panel-cleaning",
      icon: Sun,
      bgColor: "bg-amber-500/10",
      textColor: "text-amber-600",
      badgeColor: "bg-amber-600",
      hoverColor: "hover:text-amber-600",
      buttonColor: "bg-amber-600 hover:bg-amber-700 text-white",
      nameEs: "Limpieza de paneles solares",
      nameEn: "Solar Panel Cleaning",
      descriptionEs: "Limpieza de paneles solares para remover polvo, salitre y suciedad acumulada.",
      descriptionEn: "Solar panel cleaning to remove dust, salt and dirt without promising specific energy results.",
      featuresEs: [
        "Limpieza exterior de paneles solares",
        "Remoción de polvo y salitre",
        "Atención a suciedad acumulada",
        "Servicio residencial y comercial",
        "Cotización según cantidad"
      ],
      featuresEn: [
        "Exterior panel cleaning",
        "Dust and salt removal",
        "Attention to accumulated dirt",
        "Residential and commercial service",
        "Quote based on quantity"
      ],
      image: "/images/solar-panel-cleaning.png"
    }
  ]

  const comingSoonServices = [
    {
      id: "landscaping",
      href: "/services/landscaping",
      icon: TreePine,
      bgColor: "bg-green-500/10",
      textColor: "text-green-600",
      badgeColor: "bg-green-600",
      nameEs: "Jardinería",
      nameEn: "Landscaping",
      descriptionEs: "Corte de grama, poda, limpieza exterior y mantenimiento de áreas verdes para que tu propiedad luzca cuidada.",
      descriptionEn: "Lawn mowing, pruning, exterior cleaning and green area maintenance so your property looks well-kept.",
      featuresEs: [
        "Corte de grama",
        "Poda de árboles y arbustos",
        "Mantenimiento de jardines",
        "Limpieza de áreas verdes",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Lawn mowing",
        "Tree and shrub pruning",
        "Garden maintenance",
        "Green area cleaning",
        "Service in development"
      ]
    },
    {
      id: "cleaning",
      href: "/services/cleaning",
      icon: SprayCan,
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-600",
      badgeColor: "bg-blue-600",
      nameEs: "Limpieza",
      nameEn: "Cleaning",
      descriptionEs: "Limpieza residencial, comercial, profunda y post-construcción para mantener tus espacios listos y presentables.",
      descriptionEn: "Residential, commercial, deep and post-construction cleaning to keep your spaces ready and presentable.",
      featuresEs: [
        "Limpieza residencial",
        "Limpieza comercial",
        "Limpieza profunda",
        "Limpieza post-construcción",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Residential cleaning",
        "Commercial cleaning",
        "Deep cleaning",
        "Post-construction cleaning",
        "Service in development"
      ]
    },
    {
      id: "window-cleaning",
      href: "/services/window-cleaning",
      icon: Droplets,
      bgColor: "bg-cyan-500/10",
      textColor: "text-cyan-600",
      badgeColor: "bg-cyan-600",
      nameEs: "Limpieza de ventanas y cristales",
      nameEn: "Window Cleaning",
      descriptionEs: "Limpieza de ventanas, cristales y puertas de vidrio para hogares, negocios y propiedades comerciales.",
      descriptionEn: "Window and glass cleaning to improve the appearance, light entry and presentation of your property.",
      featuresEs: [
        "Limpieza de ventanas interiores y exteriores",
        "Cristales y puertas de vidrio",
        "Remoción de polvo y suciedad",
        "Servicio residencial y comercial",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Interior and exterior window cleaning",
        "Glass and glass doors",
        "Dust and dirt removal",
        "Residential and commercial service",
        "Service in development"
      ]
    },
    {
      id: "screen-cleaning",
      href: "/services/screen-cleaning",
      icon: Grid3X3,
      bgColor: "bg-teal-500/10",
      textColor: "text-teal-600",
      badgeColor: "bg-teal-600",
      nameEs: "Limpieza de mallas para ventanas",
      nameEn: "Screen Cleaning",
      descriptionEs: "Remoción de polvo, salitre y suciedad acumulada en mallas de ventanas y puertas.",
      descriptionEn: "Cleaning of screens and meshes to remove dust, salt and accumulated dirt.",
      featuresEs: [
        "Limpieza de mallas para ventanas",
        "Remoción de polvo y salitre",
        "Atención a mallas con suciedad",
        "Servicio residencial y comercial",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Screen cleaning",
        "Dust and salt removal",
        "Attention to dirty meshes",
        "Residential and commercial service",
        "Service in development"
      ]
    },
    {
      id: "christmas-lights",
      href: "/services/christmas-lights",
      icon: Sparkles,
      bgColor: "bg-red-500/10",
      textColor: "text-red-600",
      badgeColor: "bg-red-600",
      nameEs: "Instalación de luces navideñas",
      nameEn: "Christmas Lights",
      descriptionEs: "Instalación y montaje de luces navideñas para hogares, negocios y propiedades comerciales, según temporada.",
      descriptionEn: "Installation and setup of Christmas lights for homes, businesses and commercial properties, by season and coordination.",
      featuresEs: [
        "Instalación de luces navideñas",
        "Montaje decorativo",
        "Servicio para hogares y negocios",
        "Coordinación por temporada",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Christmas lights installation",
        "Decorative setup",
        "Service for homes and businesses",
        "Seasonal coordination",
        "Service in development"
      ]
    },
    {
      id: "soft-wash",
      href: "/services/soft-wash",
      icon: Droplet,
      bgColor: "bg-sky-500/10",
      textColor: "text-sky-600",
      badgeColor: "bg-sky-600",
      nameEs: "Lavado suave",
      nameEn: "Soft Wash",
      descriptionEs: "Lavado exterior con menor presión para superficies delicadas que requieren más cuidado.",
      descriptionEn: "Soft washing for delicate surfaces that need exterior cleaning with lower pressure.",
      featuresEs: [
        "Fachadas y paredes exteriores",
        "Superficies delicadas",
        "Limpieza con menor presión",
        "Atención a suciedad superficial",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Facades and exterior walls",
        "Delicate surfaces",
        "Cleaning with lower pressure",
        "Attention to surface dirt",
        "Service in development"
      ]
    },
    {
      id: "plumbing",
      href: "/services/plumbing",
      icon: Wrench,
      bgColor: "bg-cyan-500/10",
      textColor: "text-cyan-600",
      badgeColor: "bg-cyan-500",
      nameEs: "Plomería",
      nameEn: "Plumbing",
      descriptionEs: "Servicio próximamente disponible para fugas, destapes, tuberías, calentadores y accesorios de plomería.",
      descriptionEn: "Service coming soon for leaks, drain cleaning, pipes, water heaters and plumbing fixtures.",
      featuresEs: [
        "Reparación de fugas",
        "Destape de desagües",
        "Reparación de tuberías",
        "Calentadores de agua",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Leak repair",
        "Drain cleaning",
        "Pipe repair",
        "Water heaters",
        "Service in development"
      ]
    },
    {
      id: "electrical",
      href: "/services/electrical",
      icon: Zap,
      bgColor: "bg-yellow-500/10",
      textColor: "text-yellow-600",
      badgeColor: "bg-yellow-500",
      nameEs: "Electricidad",
      nameEn: "Electrical",
      descriptionEs: "Servicio próximamente disponible para paneles, breakers, tomacorrientes, iluminación y abanicos de techo.",
      descriptionEn: "Service coming soon for panels, breakers, outlets, lighting and ceiling fans.",
      featuresEs: [
        "Paneles eléctricos",
        "Breakers",
        "Tomacorrientes y switches",
        "Iluminación",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Electrical panels",
        "Breakers",
        "Outlets and switches",
        "Lighting",
        "Service in development"
      ]
    },
    {
      id: "water-damage",
      href: "/services/water-damage-mitigation",
      icon: Droplets,
      bgColor: "bg-teal-500/10",
      textColor: "text-teal-600",
      badgeColor: "bg-teal-500",
      nameEs: "Mitigación de daños por agua",
      nameEn: "Water Damage Mitigation",
      descriptionEs: "Servicio próximamente disponible para atender daños por agua, humedad y problemas relacionados.",
      descriptionEn: "Service coming soon to address water damage, humidity and related issues.",
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
      descriptionEs: "Servicio próximamente disponible para reparaciones menores, instalaciones básicas y mantenimiento general.",
      descriptionEn: "Service coming soon for minor repairs, basic installations and general maintenance.",
      featuresEs: [
        "Reparaciones menores",
        "Instalaciones básicas",
        "Ajustes y mantenimiento",
        "Soporte general",
        "Servicio en desarrollo"
      ],
      featuresEn: [
        "Minor repairs",
        "Basic installations",
        "Adjustments and maintenance",
        "General support",
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
                ? "Soluciones para proteger, limpiar y mantener hogares, negocios y propiedades comerciales en Puerto Rico."
                : "Solutions to protect, clean and maintain homes, businesses and commercial properties in Puerto Rico."}
            </p>
            {/* Active Services Chips */}
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <Bug className="h-3.5 w-3.5" />
                {language === "es" ? "Control de Plagas" : "Pest Control"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-500/10 px-3 py-1 text-sm font-medium text-slate-700">
                <Waves className="h-3.5 w-3.5" />
                {language === "es" ? "Lavado a presión" : "Pressure Wash"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700">
                <Sun className="h-3.5 w-3.5" />
                {language === "es" ? "Paneles solares" : "Solar Panel Cleaning"}
              </span>
            </div>
            {/* Coming Soon Chips */}
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <TreePine className="h-3.5 w-3.5" />
                {language === "es" ? "Jardinería — Próximamente" : "Landscaping — Coming Soon"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <SprayCan className="h-3.5 w-3.5" />
                {language === "es" ? "Limpieza — Próximamente" : "Cleaning — Coming Soon"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <Droplets className="h-3.5 w-3.5" />
                {language === "es" ? "Limpieza de ventanas — Próximamente" : "Window Cleaning — Coming Soon"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <Grid3X3 className="h-3.5 w-3.5" />
                {language === "es" ? "Limpieza de mallas — Próximamente" : "Screen Cleaning — Coming Soon"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                {language === "es" ? "Luces navideñas — Próximamente" : "Christmas Lights — Coming Soon"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <Droplet className="h-3.5 w-3.5" />
                {language === "es" ? "Lavado suave — Próximamente" : "Soft Wash — Coming Soon"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <Wrench className="h-3.5 w-3.5" />
                {language === "es" ? "Plomería — Próximamente" : "Plumbing — Coming Soon"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <Zap className="h-3.5 w-3.5" />
                {language === "es" ? "Electricidad — Próximamente" : "Electrical — Coming Soon"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <Droplets className="h-3.5 w-3.5" />
                {language === "es" ? "Mitigación de daños por agua — Próximamente" : "Water Damage — Coming Soon"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <HardHat className="h-3.5 w-3.5" />
                {language === "es" ? "Reparaciones handyman — Próximamente" : "Handyman — Coming Soon"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <Layers className="h-3.5 w-3.5" />
                {language === "es" ? "Sellado de techos — Próximamente" : "Roof Sealing — Coming Soon"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                <Shield className="h-3.5 w-3.5" />
                {language === "es" ? "Mitigación de plomo y asbesto — Próximamente" : "Lead & Asbestos — Coming Soon"}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Listo para coordinar tu servicio?" 
                : "Ready to coordinate your service?"}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 text-pretty">
              {language === "es"
                ? "Dinos qué necesita tu propiedad y te orientamos con una cotización para nuestros servicios activos: control de plagas, lavado a presión y limpieza de paneles solares."
                : "Tell us what your property needs and we'll guide you with a quote for our active services: pest control, pressure wash and solar panel cleaning."}
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
