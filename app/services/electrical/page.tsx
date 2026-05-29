"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Building2,
  Home,
  Phone,
  ShieldCheck,
  Clock,
  ThumbsUp,
  Fan
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function ElectricalPage() {
  const { language, t } = useLanguage()

  const services = [
    {
      id: "panel-upgrade",
      icon: Zap,
      image: "/images/electrical/panel-upgrade.jpg",
      nameEs: "Paneles Eléctricos",
      nameEn: "Electrical Panels",
      descriptionEs: "Instalación, reparación y actualización de paneles eléctricos. Aumentamos la capacidad de tu sistema para soportar las demandas modernas de energía.",
      descriptionEn: "Installation, repair and upgrade of electrical panels. We increase your system's capacity to support modern energy demands.",
      featuresEs: ["Actualización de paneles", "Instalación de breakers", "Reparación de cortocircuitos", "Aumento de capacidad"],
      featuresEn: ["Panel upgrades", "Breaker installation", "Short circuit repair", "Capacity increase"]
    },
    {
      id: "outlet-install",
      icon: Zap,
      image: "/images/electrical/outlet-install.jpg",
      nameEs: "Tomacorrientes y Switches",
      nameEn: "Outlets and Switches",
      descriptionEs: "Instalación y reparación de tomacorrientes regulares, GFCI y USB. Actualizamos switches y agregamos puntos de energía donde los necesite.",
      descriptionEn: "Installation and repair of regular, GFCI and USB outlets. We upgrade switches and add power points where you need them.",
      featuresEs: ["Tomacorrientes GFCI", "Tomacorrientes USB", "Switches dimmer", "Reubicación de puntos"],
      featuresEn: ["GFCI outlets", "USB outlets", "Dimmer switches", "Point relocation"]
    },
    {
      id: "lighting-install",
      icon: Lightbulb,
      image: "/images/electrical/lighting-install.jpg",
      nameEs: "Iluminación",
      nameEn: "Lighting",
      descriptionEs: "Instalación de todo tipo de iluminación: empotrada, de techo, exterior y decorativa. Diseñamos sistemas de iluminación eficientes y atractivos.",
      descriptionEn: "Installation of all types of lighting: recessed, ceiling, outdoor and decorative. We design efficient and attractive lighting systems.",
      featuresEs: ["Luces empotradas", "Iluminación LED", "Luces exteriores", "Sensores de movimiento"],
      featuresEn: ["Recessed lights", "LED lighting", "Outdoor lights", "Motion sensors"]
    },
    {
      id: "fan-install",
      icon: Fan,
      image: "/images/electrical/fan-install.jpg",
      nameEs: "Abanicos de Techo",
      nameEn: "Ceiling Fans",
      descriptionEs: "Instalación profesional de abanicos de techo. Mejoramos la circulación de aire y el confort de tu hogar o negocio en el clima tropical de Puerto Rico.",
      descriptionEn: "Professional ceiling fan installation. We improve air circulation and comfort in your home or business in Puerto Rico's tropical climate.",
      featuresEs: ["Instalación segura", "Abanicos con luz", "Balanceo y ajuste", "Control remoto"],
      featuresEn: ["Safe installation", "Fans with lights", "Balancing and adjustment", "Remote control"]
    }
  ]

  const benefits = language === "es" ? [
    {
      icon: ShieldCheck,
      title: "Enfoque en Seguridad",
      description: "Trabajamos con enfoque en seguridad y buenas prácticas eléctricas."
    },
    {
      icon: Clock,
      title: "Respuesta Rápida",
      description: "Atendemos problemas eléctricos con prontitud para tu tranquilidad."
    },
    {
      icon: ThumbsUp,
      title: "Orientación Clara",
      description: "Te orientamos con claridad antes de comenzar el trabajo."
    },
    {
      icon: CheckCircle2,
      title: "Personal Capacitado",
      description: "Personal con experiencia en trabajo eléctrico residencial y comercial."
    }
  ] : [
    {
      icon: ShieldCheck,
      title: "Safety Focus",
      description: "We work with a focus on safety and good electrical practices."
    },
    {
      icon: Clock,
      title: "Fast Response",
      description: "We handle electrical problems promptly for your peace of mind."
    },
    {
      icon: ThumbsUp,
      title: "Clear Guidance",
      description: "We guide you clearly before starting the work."
    },
    {
      icon: CheckCircle2,
      title: "Trained Staff",
      description: "Staff with experience in residential and commercial electrical work."
    }
  ]

  const customerTypes = [
    {
      id: "residential",
      icon: Home,
      nameEs: "Residencial",
      nameEn: "Residential",
      descriptionEs: "Servicios eléctricos para tu hogar. Desde reparaciones hasta instalaciones completas.",
      descriptionEn: "Electrical services for your home. From repairs to complete installations.",
      featuresEs: ["Instalación de abanicos", "Iluminación", "Paneles eléctricos", "Tomacorrientes"],
      featuresEn: ["Fan installation", "Lighting", "Electrical panels", "Outlets"]
    },
    {
      id: "commercial",
      icon: Building2,
      nameEs: "Comercial",
      nameEn: "Commercial",
      descriptionEs: "Electricidad comercial para negocios y edificios. Instalaciones y mantenimiento.",
      descriptionEn: "Commercial electrical for businesses and buildings. Installations and maintenance.",
      featuresEs: ["Oficinas y tiendas", "Iluminación comercial", "Sistemas de emergencia", "Mantenimiento"],
      featuresEn: ["Offices and stores", "Commercial lighting", "Emergency systems", "Maintenance"]
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-50 via-background to-amber-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-700 mb-4">
                <Zap className="h-4 w-4" />
                {language === "es" ? "Electricidad" : "Electrical"}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {language === "es" 
                  ? "Soluciones eléctricas seguras para tu propiedad" 
                  : "Safe electrical solutions for your property"}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8">
                {language === "es"
                  ? "Instalaciones y reparaciones eléctricas para paneles, breakers, tomacorrientes, iluminación y abanicos de techo."
                  : "Electrical installations and repairs for panels, breakers, outlets, lighting and ceiling fans."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white">
                  <Link href="/contact">
                    {t.ui.getQuote}
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
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-electrical.jpg"
                  alt={language === "es" ? "Electricidad Profesional" : "Professional Electrical"}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10">
                    <ShieldCheck className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{language === "es" ? "Trabajo" : "Safe"}</p>
                    <p className="text-sm text-muted-foreground">
                      {language === "es" ? "Seguro" : "Work"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Servicios eléctricos para mantener todo funcionando" : "Electrical services to keep everything running"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Trabajamos problemas eléctricos comunes con enfoque en seguridad, orden y funcionamiento confiable."
                : "We handle common electrical problems with a focus on safety, order and reliable operation."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              const name = language === "es" ? service.nameEs : service.nameEn
              const description = language === "es" ? service.descriptionEs : service.descriptionEn
              const features = language === "es" ? service.featuresEs : service.featuresEn

              return (
                <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video">
                    <Image
                      src={service.image}
                      alt={name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/10">
                        <Icon className="h-6 w-6 text-yellow-600" />
                      </div>
                      <CardTitle className="text-xl">{name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-2 gap-2">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-yellow-600 mt-0.5 shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-yellow-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Seguridad y claridad en cada trabajo eléctrico" : "Safety and clarity in every electrical job"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Antes de comenzar, te orientamos sobre el trabajo necesario para mantener tu sistema eléctrico seguro y funcionando."
                : "Before starting, we guide you on the work needed to keep your electrical system safe and running."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/10 mx-auto mb-4">
                    <Icon className="h-7 w-7 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Servicios para Todo Tipo de Propiedad" : "Services for All Property Types"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {customerTypes.map((type) => {
              const Icon = type.icon
              const name = language === "es" ? type.nameEs : type.nameEn
              const description = language === "es" ? type.descriptionEs : type.descriptionEn
              const features = language === "es" ? type.featuresEs : type.featuresEn
              const isResidential = type.id === "residential"

              return (
                <Card key={type.id} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${isResidential ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-700'}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{description}</p>
                  <ul className="space-y-2 mb-6">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-yellow-600 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${isResidential ? 'bg-yellow-600 hover:bg-yellow-700 text-white' : ''}`} variant={isResidential ? "default" : "outline"}>
                    <Link href="/contact">
                      {t.ui.getQuote}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-yellow-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Necesitas revisar algo eléctrico?" 
                : "Need to check something electrical?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "Coordina una cotización para instalaciones, reparaciones o mejoras eléctricas en tu propiedad."
                : "Schedule a quote for electrical installations, repairs or upgrades on your property."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-yellow-700 hover:bg-white/90 font-semibold">
                <Link href="/contact">
                  {t.ui.getQuote}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-yellow-700 text-white hover:bg-yellow-800 font-semibold border border-white/20">
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
