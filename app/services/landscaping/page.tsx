"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  TreePine, 
  ArrowRight, 
  CheckCircle2, 
  Scissors, 
  Leaf, 
  Sun, 
  Droplets, 
  Home, 
  Building2,
  Phone,
  Sparkles,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function LandscapingPage() {
  const { language, t } = useLanguage()

  const services = [
    {
      id: "lawn-mowing",
      icon: Scissors,
      image: "/images/landscaping/lawn-mowing.jpg",
      nameEs: "Corte de Grama",
      nameEn: "Lawn Mowing",
      descriptionEs: "Servicio profesional de corte de grama para mantener su césped saludable y con apariencia impecable. Utilizamos equipos comerciales de alta calidad para un corte uniforme y preciso.",
      descriptionEn: "Professional lawn mowing service to keep your lawn healthy and looking impeccable. We use high-quality commercial equipment for a uniform and precise cut.",
      featuresEs: ["Corte uniforme y profesional", "Equipos comerciales de alta calidad", "Frecuencia semanal o quincenal", "Bordes y orillas definidos"],
      featuresEn: ["Uniform professional cut", "High-quality commercial equipment", "Weekly or biweekly frequency", "Defined edges and borders"]
    },
    {
      id: "pruning",
      icon: TreePine,
      image: "/images/landscaping/pruning.jpg",
      nameEs: "Poda de Árboles y Arbustos",
      nameEn: "Tree and Shrub Pruning",
      descriptionEs: "Poda profesional para mantener sus árboles y arbustos saludables, con forma estética y seguros. Eliminamos ramas muertas, damos forma y controlamos el crecimiento.",
      descriptionEn: "Professional pruning to keep your trees and shrubs healthy, aesthetically shaped and safe. We remove dead branches, shape and control growth.",
      featuresEs: ["Poda de formación y mantenimiento", "Remoción de ramas secas", "Control de crecimiento", "Árboles frutales y ornamentales"],
      featuresEn: ["Formation and maintenance pruning", "Dead branch removal", "Growth control", "Fruit and ornamental trees"]
    },
    {
      id: "landscape-design",
      icon: Sparkles,
      image: "/images/landscaping/landscape-design.jpg",
      nameEs: "Diseño Paisajístico",
      nameEn: "Landscape Design",
      descriptionEs: "Transformamos espacios exteriores en jardines hermosos y funcionales. Diseñamos y ejecutamos proyectos de paisajismo adaptados al clima tropical de Puerto Rico.",
      descriptionEn: "We transform outdoor spaces into beautiful and functional gardens. We design and execute landscaping projects adapted to Puerto Rico's tropical climate.",
      featuresEs: ["Diseño personalizado", "Selección de plantas nativas", "Sistemas de riego", "Iluminación exterior"],
      featuresEn: ["Custom design", "Native plant selection", "Irrigation systems", "Outdoor lighting"]
    },
    {
      id: "maintenance",
      icon: Calendar,
      image: "/images/landscaping/garden-cleaning.jpg",
      nameEs: "Mantenimiento General",
      nameEn: "General Maintenance",
      descriptionEs: "Servicio integral de mantenimiento de jardines que incluye limpieza, deshierbe, fertilización y cuidado general de todas las áreas verdes de su propiedad.",
      descriptionEn: "Comprehensive garden maintenance service including cleaning, weeding, fertilization and general care of all green areas on your property.",
      featuresEs: ["Limpieza de áreas verdes", "Control de malezas", "Fertilización programada", "Cuidado de plantas"],
      featuresEn: ["Green area cleaning", "Weed control", "Scheduled fertilization", "Plant care"]
    }
  ]

  const benefits = language === "es" ? [
    {
      icon: Sun,
      title: "Adaptado al Clima Tropical",
      description: "Conocemos las plantas y técnicas que funcionan mejor en el clima de Puerto Rico."
    },
    {
      icon: Leaf,
      title: "Productos Eco-Amigables",
      description: "Utilizamos fertilizantes y productos que cuidan el medio ambiente."
    },
    {
      icon: Droplets,
      title: "Sistemas de Riego Eficientes",
      description: "Instalamos y mantenemos sistemas de riego que ahorran agua."
    },
    {
      icon: CheckCircle2,
      title: "Garantía de Satisfacción",
      description: "Si no está satisfecho con nuestro trabajo, lo corregimos sin costo adicional."
    }
  ] : [
    {
      icon: Sun,
      title: "Adapted to Tropical Climate",
      description: "We know the plants and techniques that work best in Puerto Rico's climate."
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      description: "We use fertilizers and products that care for the environment."
    },
    {
      icon: Droplets,
      title: "Efficient Irrigation Systems",
      description: "We install and maintain water-saving irrigation systems."
    },
    {
      icon: CheckCircle2,
      title: "Satisfaction Guarantee",
      description: "If you're not satisfied with our work, we'll fix it at no additional cost."
    }
  ]

  const customerTypes = [
    {
      id: "residential",
      icon: Home,
      nameEs: "Residencial",
      nameEn: "Residential",
      descriptionEs: "Mantenemos el jardín de su hogar hermoso y saludable durante todo el año. Servicio personalizado para propiedades residenciales.",
      descriptionEn: "We keep your home's garden beautiful and healthy all year round. Personalized service for residential properties.",
      featuresEs: ["Patios y jardines", "Áreas de piscina", "Entradas y caminos", "Terrazas y balcones"],
      featuresEn: ["Patios and gardens", "Pool areas", "Driveways and paths", "Terraces and balconies"]
    },
    {
      id: "commercial",
      icon: Building2,
      nameEs: "Comercial",
      nameEn: "Commercial",
      descriptionEs: "Servicios de jardinería para negocios, edificios comerciales y propiedades de alquiler. Mantenga una imagen profesional.",
      descriptionEn: "Landscaping services for businesses, commercial buildings and rental properties. Maintain a professional image.",
      featuresEs: ["Edificios de oficinas", "Centros comerciales", "Condominios", "Propiedades de alquiler"],
      featuresEn: ["Office buildings", "Shopping centers", "Condominiums", "Rental properties"]
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-50 via-background to-green-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-700 mb-4">
                <TreePine className="h-4 w-4" />
                {language === "es" ? "Servicios de Jardinería" : "Landscaping Services"}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {language === "es" 
                  ? "Jardinería Profesional para su Propiedad" 
                  : "Professional Landscaping for Your Property"}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8">
                {language === "es"
                  ? "Transformamos y mantenemos las áreas verdes de su hogar o negocio. Desde corte de grama hasta diseño paisajístico completo, cuidamos cada detalle de su jardín."
                  : "We transform and maintain the green areas of your home or business. From lawn mowing to complete landscape design, we take care of every detail of your garden."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
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
                  src="/images/hero-landscaping.jpg"
                  alt={language === "es" ? "Jardinería Profesional" : "Professional Landscaping"}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                    <TreePine className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">100%</p>
                    <p className="text-sm text-muted-foreground">
                      {language === "es" ? "Satisfacción" : "Satisfaction"}
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
              {language === "es" ? "Nuestros Servicios de Jardinería" : "Our Landscaping Services"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Ofrecemos una gama completa de servicios para mantener su propiedad hermosa."
                : "We offer a complete range of services to keep your property beautiful."}
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
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/10">
                        <Icon className="h-6 w-6 text-green-600" />
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
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
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
      <section className="py-16 md:py-24 bg-green-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "¿Por Qué Elegirnos?" : "Why Choose Us?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Más que jardineros, somos expertos en el cuidado de su propiedad."
                : "More than gardeners, we are experts in caring for your property."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 mx-auto mb-4">
                    <Icon className="h-7 w-7 text-green-600" />
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
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${isResidential ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700'}`}>
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
                        <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${isResidential ? 'bg-green-600 hover:bg-green-700 text-white' : ''}`} variant={isResidential ? "default" : "outline"}>
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
      <section className="py-16 md:py-24 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Listo para Transformar su Jardín?" 
                : "Ready to Transform Your Garden?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "Solicite una cotización gratis y sin compromiso. Visitamos su propiedad y le presentamos un plan personalizado."
                : "Request a free, no-obligation quote. We visit your property and present you with a personalized plan."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-white/90 font-semibold">
                <Link href="/contact">
                  {t.ui.getQuote}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-green-700 text-white hover:bg-green-800 font-semibold border border-white/20">
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
