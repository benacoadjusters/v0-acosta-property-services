"use client"

import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Shield, Heart, Award, Users, Target, Phone } from "lucide-react"
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
                {t.about.subtitle}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                {t.about.story}
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
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/team.jpg"
                alt="Equipo de Acosta Property Services"
                fill
                className="object-cover"
              />
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

      {/* Mission */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t.about.missionTitle}</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              {t.about.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.about.valuesTitle}</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.home.ctaTitle}</h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">{t.home.ctaDesc}</p>
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
