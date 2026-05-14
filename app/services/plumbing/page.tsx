"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  Wrench, 
  ArrowRight, 
  CheckCircle2, 
  Droplets, 
  Building2,
  Home,
  Phone,
  ShieldCheck,
  Clock,
  ThumbsUp,
  AlertTriangle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function PlumbingPage() {
  const { language, t } = useLanguage()

  const services = [
    {
      id: "pipe-repair",
      icon: Wrench,
      image: "/images/plumbing/pipe-repair.jpg",
      nameEs: "Reparación de Tuberías",
      nameEn: "Pipe Repair",
      descriptionEs: "Reparamos todo tipo de tuberías: fugas, roturas, corrosión y conexiones defectuosas. Trabajamos con tuberías de PVC, cobre, hierro galvanizado y PEX.",
      descriptionEn: "We repair all types of pipes: leaks, breaks, corrosion and faulty connections. We work with PVC, copper, galvanized iron and PEX pipes.",
      featuresEs: ["Detección de fugas", "Reparación de roturas", "Reemplazo de secciones", "Tuberías de agua y drenaje"],
      featuresEn: ["Leak detection", "Break repair", "Section replacement", "Water and drain pipes"]
    },
    {
      id: "drain-cleaning",
      icon: Droplets,
      image: "/images/plumbing/drain-cleaning.jpg",
      nameEs: "Destape de Desagües",
      nameEn: "Drain Cleaning",
      descriptionEs: "Limpiamos y destapamos desagües obstruidos en lavabos, duchas, inodoros y líneas principales. Utilizamos equipos profesionales de hidrojet y snake.",
      descriptionEn: "We clean and unclog blocked drains in sinks, showers, toilets and main lines. We use professional hydrojet and snake equipment.",
      featuresEs: ["Destape de inodoros", "Limpieza de líneas", "Hidrojet profesional", "Mantenimiento preventivo"],
      featuresEn: ["Toilet unclogging", "Line cleaning", "Professional hydrojet", "Preventive maintenance"]
    },
    {
      id: "water-heater",
      icon: AlertTriangle,
      image: "/images/plumbing/water-heater.jpg",
      nameEs: "Calentadores de Agua",
      nameEn: "Water Heaters",
      descriptionEs: "Instalación, reparación y mantenimiento de calentadores de agua eléctricos y solares. Mejoramos la eficiencia y extendemos la vida útil de su equipo.",
      descriptionEn: "Installation, repair and maintenance of electric and solar water heaters. We improve efficiency and extend the life of your equipment.",
      featuresEs: ["Instalación nueva", "Reparaciones", "Calentadores solares", "Mantenimiento anual"],
      featuresEn: ["New installation", "Repairs", "Solar heaters", "Annual maintenance"]
    },
    {
      id: "fixture-install",
      icon: Home,
      image: "/images/plumbing/fixture-install.jpg",
      nameEs: "Instalación de Accesorios",
      nameEn: "Fixture Installation",
      descriptionEs: "Instalamos grifos, inodoros, lavabos, duchas y todos los accesorios de plomería. Actualizamos sus baños y cocinas con productos de calidad.",
      descriptionEn: "We install faucets, toilets, sinks, showers and all plumbing fixtures. We upgrade your bathrooms and kitchens with quality products.",
      featuresEs: ["Grifos y llaves", "Inodoros y lavabos", "Duchas y bañeras", "Conexiones de electrodomésticos"],
      featuresEn: ["Faucets and valves", "Toilets and sinks", "Showers and bathtubs", "Appliance connections"]
    }
  ]

  const benefits = language === "es" ? [
    {
      icon: Clock,
      title: "Respuesta Rápida",
      description: "Atendemos emergencias de plomería el mismo día. Su tiempo es valioso."
    },
    {
      icon: ShieldCheck,
      title: "Trabajo Garantizado",
      description: "Todos nuestros trabajos tienen garantía. Si algo falla, lo arreglamos."
    },
    {
      icon: ThumbsUp,
      title: "Precios Justos",
      description: "Cotizaciones claras sin sorpresas. Sabe exactamente lo que pagará."
    },
    {
      icon: CheckCircle2,
      title: "Técnicos Capacitados",
      description: "Personal con experiencia y certificaciones en plomería profesional."
    }
  ] : [
    {
      icon: Clock,
      title: "Fast Response",
      description: "We handle plumbing emergencies the same day. Your time is valuable."
    },
    {
      icon: ShieldCheck,
      title: "Guaranteed Work",
      description: "All our work is guaranteed. If something fails, we fix it."
    },
    {
      icon: ThumbsUp,
      title: "Fair Prices",
      description: "Clear quotes with no surprises. You know exactly what you'll pay."
    },
    {
      icon: CheckCircle2,
      title: "Trained Technicians",
      description: "Experienced and certified professional plumbing staff."
    }
  ]

  const customerTypes = [
    {
      id: "residential",
      icon: Home,
      nameEs: "Residencial",
      nameEn: "Residential",
      descriptionEs: "Servicios de plomería para su hogar. Desde reparaciones pequeñas hasta instalaciones completas.",
      descriptionEn: "Plumbing services for your home. From small repairs to complete installations.",
      featuresEs: ["Baños y cocinas", "Calentadores de agua", "Destapes de emergencia", "Remodelaciones"],
      featuresEn: ["Bathrooms and kitchens", "Water heaters", "Emergency unclogging", "Remodeling"]
    },
    {
      id: "commercial",
      icon: Building2,
      nameEs: "Comercial",
      nameEn: "Commercial",
      descriptionEs: "Plomería comercial para negocios, restaurantes y edificios. Mantenimiento y reparaciones.",
      descriptionEn: "Commercial plumbing for businesses, restaurants and buildings. Maintenance and repairs.",
      featuresEs: ["Restaurantes", "Oficinas", "Edificios comerciales", "Contratos de mantenimiento"],
      featuresEn: ["Restaurants", "Offices", "Commercial buildings", "Maintenance contracts"]
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-50 via-background to-cyan-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-700 mb-4">
                <Wrench className="h-4 w-4" />
                {language === "es" ? "Servicios de Plomería" : "Plumbing Services"}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {language === "es" 
                  ? "Plomería Profesional y Confiable" 
                  : "Professional and Reliable Plumbing"}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8">
                {language === "es"
                  ? "Resolvemos todos sus problemas de plomería en Puerto Rico. Reparaciones, instalaciones, destapes y mantenimiento con respuesta rápida y trabajo garantizado."
                  : "We solve all your plumbing problems in Puerto Rico. Repairs, installations, unclogging and maintenance with fast response and guaranteed work."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
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
                  src="/images/hero-plumbing.jpg"
                  alt={language === "es" ? "Plomería Profesional" : "Professional Plumbing"}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10">
                    <Clock className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{language === "es" ? "Mismo" : "Same"}</p>
                    <p className="text-sm text-muted-foreground">
                      {language === "es" ? "Día" : "Day"}
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
              {language === "es" ? "Nuestros Servicios de Plomería" : "Our Plumbing Services"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Soluciones completas para todas sus necesidades de plomería."
                : "Complete solutions for all your plumbing needs."}
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
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                        <Icon className="h-6 w-6 text-cyan-600" />
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
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 mt-0.5 shrink-0" />
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
      <section className="py-16 md:py-24 bg-cyan-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "¿Por Qué Elegirnos?" : "Why Choose Us?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es"
                ? "Somos su mejor opción para plomería en Puerto Rico."
                : "We are your best choice for plumbing in Puerto Rico."}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center p-6 hover:shadow-md transition-shadow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 mx-auto mb-4">
                    <Icon className="h-7 w-7 text-cyan-600" />
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
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${isResidential ? 'bg-cyan-600 text-white' : 'bg-cyan-100 text-cyan-700'}`}>
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
                        <CheckCircle2 className="h-4 w-4 text-cyan-600 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full ${isResidential ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : ''}`} variant={isResidential ? "default" : "outline"}>
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

      {/* Emergency CTA */}
      <section className="py-16 md:py-24 bg-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Emergencia de Plomería?" 
                : "Plumbing Emergency?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "No espere a que el problema empeore. Llámenos ahora y resolvemos su emergencia hoy mismo."
                : "Don't wait for the problem to get worse. Call us now and we'll solve your emergency today."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-white/90 font-semibold">
                <Link href="/contact">
                  {t.ui.getQuote}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-cyan-700 text-white hover:bg-cyan-800 font-semibold border border-white/20">
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
