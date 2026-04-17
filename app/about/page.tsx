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
    { name: "Fundador", role: "CEO y Director", description: "Con vision y dedicacion, fundo Acosta Property Services para brindar servicio profesional y confiable a Puerto Rico." },
    { name: "Equipo de Operaciones", role: "Gestion de Servicios", description: "Nuestro equipo asegura que cada servicio se entregue con la mas alta calidad en todas las areas de cobertura." },
    { name: "Tecnicos Certificados", role: "Especialistas en Campo", description: "Profesionales capacitados con experiencia en control de plagas y fumigacion para hogares y negocios." },
    { name: "Servicio al Cliente", role: "Atencion Personalizada", description: "Garantizamos que cada cliente reciba atencion rapida y amigable desde la primera llamada hasta el seguimiento." }
  ] : [
    { name: "Founder", role: "CEO & Director", description: "With vision and dedication, founded Acosta Property Services to provide professional and reliable service to Puerto Rico." },
    { name: "Operations Team", role: "Service Management", description: "Our team ensures every service is delivered with the highest quality across all coverage areas." },
    { name: "Certified Technicians", role: "Field Specialists", description: "Trained professionals with experience in pest control and fumigation for homes and businesses." },
    { name: "Customer Service", role: "Personalized Attention", description: "We ensure every customer receives quick and friendly attention from the first call to follow-up." }
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video bg-secondary flex items-center justify-center">
                  <Users className="h-12 w-12 text-muted-foreground/30" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
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
