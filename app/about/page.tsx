"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Shield, Heart, Award, Users, Target, Phone, Bug, TreePine, SprayCan, Droplets, ArrowRight, Grid3X3, Sparkles, Zap, Waves, Sun } from "lucide-react"
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

  const services = [
    { href: "/services/pest-control", icon: Bug, color: "text-primary", bgColor: "bg-primary/10", nameEs: "Control de Plagas", nameEn: "Pest Control" },
    { href: "/services/landscaping", icon: TreePine, color: "text-green-600", bgColor: "bg-green-500/10", nameEs: "Jardinería", nameEn: "Landscaping" },
    { href: "/services/cleaning", icon: SprayCan, color: "text-blue-600", bgColor: "bg-blue-500/10", nameEs: "Limpieza", nameEn: "Cleaning" },
    { href: "/services/window-cleaning", icon: Droplets, color: "text-sky-600", bgColor: "bg-sky-500/10", nameEs: "Window Cleaning", nameEn: "Window Cleaning" },
    { href: "/services/screen-cleaning", icon: Grid3X3, color: "text-slate-600", bgColor: "bg-slate-500/10", nameEs: "Screen Cleaning", nameEn: "Screen Cleaning" },
    { href: "/services/christmas-lights", icon: Sparkles, color: "text-red-600", bgColor: "bg-red-500/10", nameEs: "Christmas Lights", nameEn: "Christmas Lights" },
    { href: "/services/pressure-wash", icon: Zap, color: "text-orange-600", bgColor: "bg-orange-500/10", nameEs: "Pressure Wash", nameEn: "Pressure Wash" },
    { href: "/services/soft-wash", icon: Waves, color: "text-teal-600", bgColor: "bg-teal-500/10", nameEs: "Soft Wash", nameEn: "Soft Wash" },
    { href: "/services/solar-panel-cleaning", icon: Sun, color: "text-yellow-600", bgColor: "bg-yellow-500/10", nameEs: "Solar Panel Cleaning", nameEn: "Solar Panel Cleaning" },
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
                  ? "Desde 2022, ayudamos a hogares, negocios y propiedades comerciales con servicios de control de plagas, jardinería, limpieza y mantenimiento especializado de exteriores."
                  : "Since 2022, we help homes, businesses and commercial properties with pest control, landscaping, cleaning and specialized exterior maintenance services."}
              </p>
              
              {/* Service chips - 9 active services */}
              <div className="flex flex-wrap gap-2 mb-6">
                {services.slice(0, 5).map((service) => {
                  const Icon = service.icon
                  return (
                    <span key={service.href} className={`inline-flex items-center gap-1.5 rounded-full ${service.bgColor} px-3 py-1 text-sm font-medium ${service.color}`}>
                      <Icon className="h-3.5 w-3.5" />
                      {language === "es" ? service.nameEs : service.nameEn}
                    </span>
                  )
                })}
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {services.slice(5).map((service) => {
                  const Icon = service.icon
                  return (
                    <span key={service.href} className={`inline-flex items-center gap-1.5 rounded-full ${service.bgColor} px-3 py-1 text-sm font-medium ${service.color}`}>
                      <Icon className="h-3.5 w-3.5" />
                      {language === "es" ? service.nameEs : service.nameEn}
                    </span>
                  )
                })}
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
            
            {/* Service cards grid - 9 active services with real images */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { href: "/services/pest-control", image: "/images/hero-pest-control.jpg", nameEs: "Control de Plagas", nameEn: "Pest Control", icon: Bug, color: "text-white" },
                { href: "/services/landscaping", image: "/images/hero-landscaping.jpg", nameEs: "Jardinería", nameEn: "Landscaping", icon: TreePine, color: "text-white" },
                { href: "/services/cleaning", image: "/images/hero-cleaning.jpg", nameEs: "Limpieza", nameEn: "Cleaning", icon: SprayCan, color: "text-white" },
                { href: "/services/window-cleaning", image: "/images/window-cleaning.png", nameEs: "Limpieza de ventanas", nameEn: "Window Cleaning", icon: Droplets, color: "text-white" },
                { href: "/services/screen-cleaning", image: "/images/hero-screen-cleaning.png", nameEs: "Limpieza de mallas", nameEn: "Screen Cleaning", icon: Grid3X3, color: "text-white" },
                { href: "/services/christmas-lights", image: "/images/hero-christmas-lights.png", nameEs: "Luces navideñas", nameEn: "Christmas Lights", icon: Sparkles, color: "text-white" },
                { href: "/services/pressure-wash", image: "/images/pressure-wash.png", nameEs: "Lavado a presión", nameEn: "Pressure Wash", icon: Zap, color: "text-white" },
                { href: "/services/soft-wash", image: "/images/hero-soft-wash.png", nameEs: "Lavado suave", nameEn: "Soft Wash", icon: Waves, color: "text-white" },
                { href: "/services/solar-panel-cleaning", image: "/images/hero-solar-panel.png", nameEs: "Paneles solares", nameEn: "Solar Panel", icon: Sun, color: "text-white" },
              ].map((service) => {
                const Icon = service.icon
                return (
                  <Link key={service.href} href={service.href} className="group relative">
                    <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={service.image}
                        alt={language === "es" ? service.nameEs : service.nameEn}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <div className="flex items-center gap-1.5">
                          <Icon className="h-3 w-3 text-white" />
                          <h3 className="text-white font-semibold text-[10px] sm:text-xs leading-tight">
                            {language === "es" ? service.nameEs : service.nameEn}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
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
              <div className="text-3xl md:text-4xl font-bold mb-1">9</div>
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
                ? "Reunimos 9 servicios activos para que puedas proteger, limpiar y mantener tu propiedad con un solo equipo." 
                : "We bring together 9 active services so you can protect, clean and maintain your property with one team."}
            </p>
          </div>

          {/* Active Services - 9 services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Link key={service.href} href={service.href} className="group">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${service.bgColor} group-hover:scale-110 transition-transform`}>
                        <Icon className={`h-7 w-7 ${service.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {language === "es" ? service.nameEs : service.nameEn}
                        </h3>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/services">{language === "es" ? "Ver todos los servicios" : "View all services"}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Lo que nos impulsa" : "What drives us"}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {language === "es" ? "Misión" : "Mission"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "es" 
                    ? "Ofrecer soluciones integrales de mantenimiento que cuiden y mejoren el valor de las propiedades de nuestros clientes."
                    : "Provide comprehensive maintenance solutions that care for and enhance the value of our clients properties."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-green-500/10 mb-4">
                  <Shield className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {language === "es" ? "Compromiso" : "Commitment"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "es" 
                    ? "Garantizamos resultados profesionales en cada servicio, cumpliendo con los más altos estándares de calidad."
                    : "We guarantee professional results in every service, meeting the highest quality standards."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-blue-500/10 mb-4">
                  <Heart className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {language === "es" ? "Pasión" : "Passion"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "es" 
                    ? "Amamos lo que hacemos y se refleja en cada proyecto que completamos para nuestros clientes."
                    : "We love what we do and it shows in every project we complete for our clients."}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-orange-500/10 mb-4">
                  <Award className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {language === "es" ? "Excelencia" : "Excellence"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "es" 
                    ? "Nos esforzamos por superar las expectativas en cada servicio que proporcionamos."
                    : "We strive to exceed expectations in every service we provide."}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Nuestro equipo" : "Our team"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "es" 
                ? "Profesionales comprometidos con el cuidado de tu propiedad."
                : "Professionals committed to caring for your property."}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {language === "es" ? "¿Por qué elegirnos?" : "Why choose us?"}
              </h2>
              <div className="space-y-4">
                {[
                  { 
                    titleEs: "Un solo equipo, múltiples servicios", 
                    titleEn: "One team, multiple services",
                    descEs: "No necesitas coordinar con múltiples proveedores. Nosotros nos encargamos de todo.",
                    descEn: "No need to coordinate with multiple providers. We take care of everything."
                  },
                  { 
                    titleEs: "Conocemos Puerto Rico", 
                    titleEn: "We know Puerto Rico",
                    descEs: "Entendemos las necesidades específicas de las propiedades en la isla.",
                    descEn: "We understand the specific needs of properties on the island."
                  },
                  { 
                    titleEs: "Respuesta rápida", 
                    titleEn: "Fast response",
                    descEs: "Te contactamos el mismo día y coordinamos visitas según tu disponibilidad.",
                    descEn: "We contact you the same day and coordinate visits according to your availability."
                  },
                  { 
                    titleEs: "Precios transparentes", 
                    titleEn: "Transparent pricing",
                    descEs: "Cotizaciones claras sin cargos ocultos ni sorpresas.",
                    descEn: "Clear quotes with no hidden charges or surprises."
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-foreground">{language === "es" ? item.titleEs : item.titleEn}</h3>
                      <p className="text-muted-foreground text-sm">{language === "es" ? item.descEs : item.descEn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-3 gap-3">
                {/* 9 servicios activos en grid 3x3 */}
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-pest-control.jpg"
                    alt="Pest Control"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-landscaping.jpg"
                    alt="Landscaping"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-cleaning.jpg"
                    alt="Cleaning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/window-cleaning.png"
                    alt="Window Cleaning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-screen-cleaning.png"
                    alt="Screen Cleaning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-christmas-lights.png"
                    alt="Christmas Lights"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/pressure-wash.png"
                    alt="Pressure Wash"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-soft-wash.png"
                    alt="Soft Wash"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-solar-panel.png"
                    alt="Solar Panel Cleaning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === "es" ? "¿Necesitas ayuda con tu propiedad?" : "Need help with your property?"}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {language === "es" 
              ? "Contáctanos para coordinar una cotización de control de plagas, jardinería, limpieza o cualquiera de nuestros 9 servicios activos."
              : "Contact us to coordinate a quote for pest control, landscaping, cleaning or any of our 9 active services."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">{t.ui.getQuote}</Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20">
              <a href={`tel:${company.phoneClean}`}>
                <Phone className="mr-2 h-5 w-5" />
                {language === "es" ? "Llamar Ahora" : "Call Now"}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
