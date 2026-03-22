import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Shield, Heart, Award, Users, Target, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import { company } from "@/content/company"

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: `Conoce a ${company.name} - servicios profesionales de control de plagas en Puerto Rico desde 2022. Nuestra historia, misión y valores.`,
}

const teamMembers = [
  {
    name: "Fundador",
    role: "CEO y Director",
    description: "Con visión y dedicación, fundó Acosta Property Services para brindar servicio profesional y confiable a Puerto Rico."
  },
  {
    name: "Equipo de Operaciones",
    role: "Gestión de Servicios",
    description: "Nuestro equipo asegura que cada servicio se entregue con la más alta calidad en todas las áreas de cobertura."
  },
  {
    name: "Técnicos Certificados",
    role: "Especialistas en Campo",
    description: "Profesionales capacitados con experiencia en control de plagas y fumigación para hogares y negocios."
  },
  {
    name: "Servicio al Cliente",
    role: "Atención Personalizada",
    description: "Garantizamos que cada cliente reciba atención rápida y amigable desde la primera llamada hasta el seguimiento."
  }
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Sobre Nosotros</span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
                Protegiendo Puerto Rico Desde 2022
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                {company.about.story}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Solicitar Cotización</Link>
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
      <section className="py-12 bg-card border-y">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {company.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nuestra Misión</h2>
            <p className="text-xl text-muted-foreground text-pretty">
              {company.about.mission}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Valores</h2>
            <p className="text-muted-foreground text-lg">
              Estos valores guían todo lo que hacemos y cómo servimos a nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.about.values.map((value, i) => {
              const icons = [Shield, Heart, Users, Award]
              const Icon = icons[i] || Shield
              return (
                <Card key={i} className="text-center p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestro Equipo</h2>
            <p className="text-muted-foreground text-lg">
              Un equipo dedicado a brindar el mejor servicio de control de plagas en Puerto Rico.
            </p>
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

      {/* Why Trust Us */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por Qué Confiar en Nosotros?</h2>
            <p className="opacity-80 text-lg">
              Hemos construido nuestra reputación en confiabilidad, calidad y satisfacción del cliente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {company.guarantees.map((guarantee, i) => (
              <div key={i} className="flex items-center gap-3 bg-primary-foreground/10 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 shrink-0" />
                <span className="font-medium">{guarantee}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg mb-4 opacity-80">
              {company.licenses.join(" • ")}
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
