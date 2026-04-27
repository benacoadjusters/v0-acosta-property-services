"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Shield, Heart, Award, Users, Target, Phone, Bug, TreePine, HardHat, SprayCan, Paintbrush, Droplets, ArrowRight } from "lucide-react"
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
                {t.about.subtitle}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {language === "es" 
                  ? "Desde 2022, ofrecemos servicios profesionales para el cuidado integral de tu propiedad en Puerto Rico."
                  : "Since 2022, we offer professional services for the comprehensive care of your property in Puerto Rico."}
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
            
            {/* Two service images grid */}
            <div className="grid grid-cols-2 gap-4">
              <Link href="/services/pest-control" className="group relative">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero-pest-control.jpg"
                    alt={language === "es" ? "Control de Plagas" : "Pest Control"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <Bug className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg">
                      {language === "es" ? "Control de Plagas" : "Pest Control"}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {language === "es" ? "Fumigación y trampas" : "Fumigation & traps"}
                    </p>
                  </div>
                </div>
              </Link>
              
              <Link href="/services/landscaping" className="group relative mt-8">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero-landscaping.jpg"
                    alt={language === "es" ? "Jardinería" : "Landscaping"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <TreePine className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg">
                      {language === "es" ? "Jardinería" : "Landscaping"}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {language === "es" ? "Corte y mantenimiento" : "Mowing & maintenance"}
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
              <div className="text-3xl md:text-4xl font-bold mb-1">4</div>
              <div className="text-sm opacity-80">{t.home.statsYears}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">300+</div>
              <div className="text-sm opacity-80">{t.home.statsClients}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">78</div>
              <div className="text-sm opacity-80">{t.home.statsMunicipios}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-80">{t.home.statsIsland}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Lo Que Hacemos" : "What We Do"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "es" 
                ? "Soluciones integrales para el cuidado de tu propiedad" 
                : "Comprehensive solutions for your property care"}
            </p>
          </div>

          {/* Active Services - Row 1 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Pest Control */}
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
                      {language === "es" ? "Fumigación, trampas y control biológico" : "Fumigation, traps and biological control"}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>

            {/* Landscaping */}
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
                      {language === "es" ? "Corte, poda y diseño paisajístico" : "Mowing, pruning and landscape design"}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Coming Soon Services - Row 2 */}
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              {language === "es" ? "Próximamente" : "Coming Soon"}
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center p-4 opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 mx-auto mb-2">
                <SprayCan className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-sm">{language === "es" ? "Limpieza y Mantenimiento" : "Cleaning & Maintenance"}</h3>
            </Card>
            <Card className="text-center p-4 opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 mx-auto mb-2">
                <Paintbrush className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-sm">{language === "es" ? "Reparaciones / Pintura" : "Repairs / Painting"}</h3>
            </Card>
            <Card className="text-center p-4 opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 mx-auto mb-2">
                <HardHat className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="font-semibold text-sm">{language === "es" ? "Mitigación Ambiental" : "Environmental"}</h3>
            </Card>
            <Card className="text-center p-4 opacity-80">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-500/10 mx-auto mb-2">
                <Droplets className="h-5 w-5 text-teal-600" />
              </div>
              <h3 className="font-semibold text-sm">{language === "es" ? "Mitigación de Moho" : "Mold Mitigation"}</h3>
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
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{t.about.missionTitle}</h2>
            <p className="text-muted-foreground">
              {language === "es" 
                ? "Ser tu aliado confiable para el cuidado integral de propiedades en Puerto Rico."
                : "To be your trusted partner for comprehensive property care in Puerto Rico."}
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
            {language === "es" ? "¿Listo Para Cuidar Tu Propiedad?" : "Ready to Care for Your Property?"}
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
            {language === "es" 
              ? "Contáctanos hoy para una cotización gratis. Nuestro equipo está listo para ayudarte con control de plagas, jardinería y más."
              : "Contact us today for a free quote. Our team is ready to help you with pest control, landscaping and more."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">{t.ui.getQuote}</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
              <a href={`tel:${company.phoneClean}`}>
                <Phone className="mr-2 h-5 w-5" />
                {company.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
