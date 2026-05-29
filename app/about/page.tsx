"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Shield, Heart, Award, Users, Target, Phone, Bug, TreePine, HardHat, SprayCan, Droplets, ArrowRight, Wrench, Zap, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { language, t } = useLanguage()

  const teamMembers = language === "es" ? [
    { 
      name: "Gabriel Acosta", 
      role: "Presidente e Inspector", 
      description: "Fundador y líder de Acosta Property Services. Con visión empresarial y amplia experiencia en campo, dirige todas las operaciones de la empresa y realiza inspecciones especializadas para garantizar la calidad de cada servicio que ofrecemos a nuestros clientes.",
      image: "/images/team/gabriel.png"
    },
    { 
      name: "Sharimar Sánchez", 
      role: "Supervisora de Operaciones", 
      description: "Coordina y supervisa todas las operaciones diarias de la empresa, asegurando que cada servicio se ejecute con eficiencia, puntualidad y los más altos estándares de calidad para la satisfacción de nuestros clientes.",
      image: "/images/team/shari.png"
    },
    { 
      name: "Víctor Camacho", 
      role: "Exterminador", 
      description: "Técnico certificado especializado en control de plagas con amplia experiencia en fumigación, tratamientos químicos y biológicos. Garantiza la eliminación efectiva de plagas en cada propiedad que visitamos.",
      image: "/images/team/victor.png"
    },
    { 
      name: "Luis Muñoz", 
      role: "Especialista en IT", 
      description: "Responsable de toda la infraestructura tecnológica de la empresa. Optimiza sistemas, procesos y herramientas digitales para brindar un servicio más ágil, eficiente y moderno a todos nuestros clientes.",
      image: "/images/team/luis.png"
    },
    { 
      name: "Roderih Ávila", 
      role: "Marketing", 
      description: "Encargado de la estrategia de comunicación, publicidad y presencia digital de la empresa. Conecta con la comunidad puertorriqueña a través de redes sociales y campañas para dar a conocer nuestros servicios.",
      image: "/images/team/roderih.png"
    }
  ] : [
    { 
      name: "Gabriel Acosta", 
      role: "President & Inspector", 
      description: "Founder and leader of Acosta Property Services. With business vision and extensive field experience, he directs all company operations and performs specialized inspections to ensure the quality of every service we offer to our clients.",
      image: "/images/team/gabriel.png"
    },
    { 
      name: "Sharimar Sanchez", 
      role: "Operations Supervisor", 
      description: "Coordinates and supervises all daily company operations, ensuring each service is executed with efficiency, punctuality and the highest quality standards for our clients satisfaction.",
      image: "/images/team/shari.png"
    },
    { 
      name: "Victor Camacho", 
      role: "Exterminator", 
      description: "Certified technician specialized in pest control with extensive experience in fumigation, chemical and biological treatments. Ensures effective pest elimination in every property we visit.",
      image: "/images/team/victor.png"
    },
    { 
      name: "Luis Munoz", 
      role: "IT Specialist", 
      description: "Responsible for all company technological infrastructure. Optimizes systems, processes and digital tools to provide faster, more efficient and modern service to all our clients.",
      image: "/images/team/luis.png"
    },
    { 
      name: "Roderih Avila", 
      role: "Marketing", 
      description: "In charge of communication strategy, advertising and digital presence for the company. Connects with the Puerto Rican community through social media and campaigns to promote our services.",
      image: "/images/team/roderih.png"
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.about.title}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
                {language === "es" ? "Un equipo local para cuidar propiedades en Puerto Rico" : "A local team to care for properties in Puerto Rico"}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {language === "es" 
                  ? "Desde 2022, ayudamos a hogares, negocios y propiedades comerciales con servicios de control de plagas, plomería, electricidad, jardinería y limpieza."
                  : "Since 2022, we help homes, businesses and commercial properties with pest control, plumbing, electrical, landscaping and cleaning services."}
              </p>
              
              {/* Service chips - 5 active services in order */}
              <div className="flex flex-wrap gap-2 mb-6">
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
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">{t.ui.getQuote}</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phoneClean}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {company.phone}
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Service cards grid - 5 active services */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              <Link href="/services/pest-control" className="group relative">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-pest-control.jpg"
                    alt={language === "es" ? "Control de Plagas" : "Pest Control"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Bug className="h-3.5 w-3.5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm">
                      {language === "es" ? "Control de Plagas" : "Pest Control"}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {language === "es" ? "Fumigación y trampeo" : "Fumigation & trapping"}
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/services/plumbing" className="group relative">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-plumbing.jpg"
                    alt={language === "es" ? "Plomería" : "Plumbing"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Wrench className="h-3.5 w-3.5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm">
                      {language === "es" ? "Plomería" : "Plumbing"}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {language === "es" ? "Reparaciones y destapes" : "Repairs & unclogging"}
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/services/electrical" className="group relative">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-electrical.jpg"
                    alt={language === "es" ? "Electricidad" : "Electrical"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Zap className="h-3.5 w-3.5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm">
                      {language === "es" ? "Electricidad" : "Electrical"}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {language === "es" ? "Paneles e iluminación" : "Panels & lighting"}
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/services/landscaping" className="group relative">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-landscaping.jpg"
                    alt={language === "es" ? "Jardinería" : "Landscaping"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <TreePine className="h-3.5 w-3.5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm">
                      {language === "es" ? "Jardinería" : "Landscaping"}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {language === "es" ? "Corte y mantenimiento" : "Mowing & maintenance"}
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/services/cleaning" className="group relative col-span-2 md:col-span-1">
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-cleaning.jpg"
                    alt={language === "es" ? "Limpieza" : "Cleaning"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1.5 mb-1">
                      <SprayCan className="h-3.5 w-3.5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm">
                      {language === "es" ? "Limpieza" : "Cleaning"}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {language === "es" ? "Residencial y comercial" : "Residential & commercial"}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">300+</div>
              <div className="text-sm opacity-80">{t.home.statsClients}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">4</div>
              <div className="text-sm opacity-80">{t.home.statsYears}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">5</div>
              <div className="text-sm opacity-80">{t.home.statsServices}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">78</div>
              <div className="text-sm opacity-80">{t.home.statsMunicipios}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services - Lo que resolvemos */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Lo que resolvemos para tu propiedad" : "What we solve for your property"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "es" 
                ? "Reunimos servicios esenciales para que puedas proteger, reparar y mantener tu propiedad con un solo equipo." 
                : "We bring together essential services so you can protect, repair and maintain your property with one team."}
            </p>
          </div>

          {/* Active Services - 5 services in correct order */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* 1. Control de Plagas */}
            <Link href="/services/pest-control" className="group">
              <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Bug className="h-7 w-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {language === "es" ? "Control de Plagas" : "Pest Control"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "es" ? "Fumigación, trampeo y control preventivo." : "Fumigation, trapping and preventive control."}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>

            {/* 2. Plomería */}
            <Link href="/services/plumbing" className="group">
              <Card className="h-full hover:shadow-lg transition-all hover:border-cyan-500/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                    <Wrench className="h-7 w-7 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-600 transition-colors">
                      {language === "es" ? "Plomería" : "Plumbing"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "es" ? "Fugas, destapes, calentadores y accesorios." : "Leaks, unclogging, heaters and fixtures."}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>

            {/* 3. Electricidad */}
            <Link href="/services/electrical" className="group">
              <Card className="h-full hover:shadow-lg transition-all hover:border-yellow-500/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors">
                    <Zap className="h-7 w-7 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-yellow-600 transition-colors">
                      {language === "es" ? "Electricidad" : "Electrical"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "es" ? "Paneles, breakers, iluminación, tomacorrientes y abanicos." : "Panels, breakers, lighting, outlets and fans."}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>

            {/* 4. Jardinería */}
            <Link href="/services/landscaping" className="group">
              <Card className="h-full hover:shadow-lg transition-all hover:border-green-500/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500/10 group-hover:bg-green-500/20 transition-colors">
                    <TreePine className="h-7 w-7 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-green-600 transition-colors">
                      {language === "es" ? "Jardinería" : "Landscaping"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "es" ? "Corte de grama, poda y mantenimiento exterior." : "Lawn mowing, pruning and exterior maintenance."}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>

            {/* 5. Limpieza */}
            <Link href="/services/cleaning" className="group">
              <Card className="h-full hover:shadow-lg transition-all hover:border-blue-500/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <SprayCan className="h-7 w-7 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors">
                      {language === "es" ? "Limpieza" : "Cleaning"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "es" ? "Limpieza residencial, comercial y post-construcción." : "Residential, commercial and post-construction cleaning."}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Coming Soon Services */}
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              {language === "es" ? "Próximamente" : "Coming Soon"}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center p-4 opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/10 mx-auto mb-2">
                <Droplets className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="font-semibold text-sm">{language === "es" ? "Mitigación de Daños por Agua" : "Water Damage Mitigation"}</h3>
            </Card>
            <Card className="text-center p-4 opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 mx-auto mb-2">
                <HardHat className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-sm">{language === "es" ? "Reparaciones Handyman" : "Handyman Repairs"}</h3>
            </Card>
            <Card className="text-center p-4 opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 mx-auto mb-2">
                <Layers className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="font-semibold text-sm">{language === "es" ? "Sellado de Techos" : "Roof Sealing"}</h3>
            </Card>
            <Card className="text-center p-4 opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 mx-auto mb-2">
                <Shield className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-sm">{language === "es" ? "Mitigación de Plomo y Asbesto" : "Lead & Asbestos Mitigation"}</h3>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Values Combined */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          {/* Mission - compact */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {language === "es" ? "Nuestra misión" : "Our mission"}
            </h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Ser el equipo de confianza para mantener propiedades en Puerto Rico seguras, funcionales y presentables."
                : "To be the trusted team for keeping properties in Puerto Rico safe, functional and presentable."}
            </p>
          </div>

          {/* Values */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-foreground">{t.about.valuesTitle}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.about.value1}</h3>
              <p className="text-muted-foreground">{t.about.value1Desc}</p>
            </Card>
            <Card className="text-center p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                <Award className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.about.value2}</h3>
              <p className="text-muted-foreground">{t.about.value2Desc}</p>
            </Card>
            <Card className="text-center p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                <Heart className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{t.about.value3}</h3>
              <p className="text-muted-foreground">{t.about.value3Desc}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.about.teamTitle}</h2>
            <p className="text-muted-foreground text-lg">{t.about.teamDesc}</p>
          </div>

          {/* President card - featured */}
          <div className="max-w-md mx-auto mb-10">
            <Card className="overflow-hidden shadow-lg border-primary/20">
              <div className="aspect-square relative bg-gradient-to-b from-secondary to-background">
                <Image
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-xl">{teamMembers[0].name}</h3>
                <p className="text-primary font-semibold mb-3">{teamMembers[0].role}</p>
                <p className="text-muted-foreground text-sm">{teamMembers[0].description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Rest of team */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(1).map((member, i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square relative bg-gradient-to-b from-secondary to-background">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "es" ? "¿Necesitas ayuda con tu propiedad?" : "Need help with your property?"}
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            {language === "es" 
              ? "Contáctanos para coordinar una cotización de control de plagas, plomería, electricidad, jardinería o limpieza."
              : "Contact us to coordinate a quote for pest control, plumbing, electrical, landscaping or cleaning."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">{t.ui.getQuote}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href={`tel:${company.phoneClean}`}>
                <Phone className="mr-2 h-5 w-5" />
                {t.ui.callNow}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
