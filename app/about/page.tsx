"use client"

import Link from "next/link"
import Image from "next/image"
import { Shield, Heart, Award, Users, Target, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { language, t } = useLanguage()

  // Leader - Gabriel (displayed larger)
  const teamLeader = language === "es" ? { 
    name: "Gabriel Acosta", 
    role: "Presidente e Inspector", 
    description: "Fundador y líder de Acosta Property Services. Con visión empresarial y amplia experiencia en campo, dirige todas las operaciones de la empresa y realiza inspecciones especializadas para garantizar la calidad de cada servicio que ofrecemos a nuestros clientes.",
    image: "/images/team/gabriel.png"
  } : { 
    name: "Gabriel Acosta", 
    role: "President & Inspector", 
    description: "Founder and leader of Acosta Property Services. With business vision and extensive field experience, he directs all company operations and performs specialized inspections to ensure the quality of every service we offer to our clients.",
    image: "/images/team/gabriel.png"
  }

  // Middle row - Shari, Luis, Rode
  const teamMiddle = language === "es" ? [
    { 
      name: "Sharimar Sánchez", 
      role: "Supervisora de Operaciones", 
      description: "Coordina y supervisa todas las operaciones diarias de la empresa, asegurando que cada servicio se ejecute con eficiencia, puntualidad y los más altos estándares de calidad para la satisfacción de nuestros clientes.",
      image: "/images/team/shari.png"
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
      name: "Sharimar Sanchez", 
      role: "Operations Supervisor", 
      description: "Coordinates and supervises all daily company operations, ensuring each service is executed with efficiency, punctuality and the highest quality standards for our clients satisfaction.",
      image: "/images/team/shari.png"
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

  // Last row - Victor
  const teamLast = language === "es" ? { 
    name: "Víctor Camacho", 
    role: "Exterminador", 
    description: "Técnico certificado especializado en control de plagas con amplia experiencia en fumigación, tratamientos químicos y biológicos. Garantiza la eliminación efectiva de plagas en cada propiedad que visitamos.",
    image: "/images/team/victor.png"
  } : { 
    name: "Victor Camacho", 
    role: "Exterminator", 
    description: "Certified technician specialized in pest control with extensive experience in fumigation, chemical and biological treatments. Ensures effective pest elimination in every property we visit.",
    image: "/images/team/victor.png"
  }

  return (
    <>
      {/* Hero - About Us focused */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.about.title}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
                {language === "es" ? "Tu Propiedad en buenas manos." : "Your Property in Good Hands."}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {language === "es" 
                  ? "Acosta Property Services nació de la visión de ofrecer todos los servicios de mantenimiento bajo un solo equipo de confianza. Entendemos que tu propiedad requiere atención constante, por eso nos dedicamos a simplificar tu gestión de mantenimiento."
                  : "Acosta Property Services was created to offer all maintenance services under one trusted team. We understand that your property requires constant attention, which is why we're dedicated to simplifying your maintenance management."}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "es" 
                  ? "Hoy servimos a más de 300 clientes en los 78 municipios de Puerto Rico, con un equipo local comprometido con la excelencia."
                  : "Today we serve more than 300 clients in all 78 municipalities of Puerto Rico, with a local team committed to excellence."}
              </p>
              
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
            
            {/* Company image */}
            <div className="relative aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/team/gabriel.png"
                alt={language === "es" ? "Equipo Acosta Property Services" : "Acosta Property Services Team"}
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Gabriel Acosta</p>
                <p className="text-white/80 text-sm">{language === "es" ? "Fundador y Presidente" : "Founder & President"}</p>
              </div>
            </div>
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
          
          {/* Gabriel - Leader, centered and larger */}
          <div className="flex justify-center mb-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow max-w-md w-full">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={teamLeader.image}
                  alt={teamLeader.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-1">{teamLeader.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{teamLeader.role}</p>
                <p className="text-muted-foreground text-sm">{teamLeader.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Shari, Luis, Rode - Middle row */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {teamMiddle.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-[4/3] bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Victor - Last, centered */}
          <div className="flex justify-center">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow max-w-sm w-full">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={teamLast.image}
                  alt={teamLast.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-1">{teamLast.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{teamLast.role}</p>
                <p className="text-muted-foreground text-sm">{teamLast.description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "¿Por qué elegirnos?" : "Why choose us?"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {language === "es" 
                ? "Nos diferenciamos por nuestro compromiso con cada cliente y cada propiedad."
                : "We stand out for our commitment to every client and every property."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {language === "es" ? "Un solo equipo" : "One team"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "es" 
                  ? "Todos nuestros servicios bajo un mismo equipo. Sin coordinar múltiples proveedores."
                  : "All our services under one team. No coordinating multiple providers."}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 mx-auto mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {language === "es" ? "Conocemos Puerto Rico" : "We know Puerto Rico"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "es" 
                    ? "Entendemos las necesidades específicas de las propiedades en la isla."
                    : "We understand the specific needs of properties on the island."}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {language === "es" ? "Respuesta rápida" : "Fast response"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "es" 
                    ? "Te contactamos el mismo día y coordinamos según tu disponibilidad."
                    : "We contact you the same day and coordinate according to your availability."}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10 mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">
                  {language === "es" ? "Precios transparentes" : "Transparent pricing"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "es" 
                    ? "Cotizaciones claras sin cargos ocultos ni sorpresas."
                    : "Clear quotes with no hidden charges or surprises."}
                </p>
              </CardContent>
            </Card>
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
                ? "Contáctanos para coordinar una cotización de control de plagas, lavado a presión o limpieza de paneles solares."
                : "Contact us to coordinate a quote for pest control, pressure wash or solar panel cleaning."}
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
