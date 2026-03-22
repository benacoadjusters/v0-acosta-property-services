import { Metadata } from "next"
import Link from "next/link"
import { Bug, Home, Shield, Droplets, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import { services } from "@/content/services"
import { company } from "@/content/company"

export const metadata: Metadata = {
  title: "Our Services",
  description: "Professional pest control and property services for homes and businesses across Puerto Rico. Residential and commercial solutions available.",
}

const icons = {
  bug: Bug,
  home: Home,
  shield: Shield,
  spray: Droplets,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Professional Property Services
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              From pest control to property maintenance, we offer comprehensive services to protect and maintain your home or business across Puerto Rico.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Pest Control Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.categories.map((service) => {
              const Icon = icons[service.icon as keyof typeof icons] || Bug
              return (
                <Card key={service.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={service.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solutions for Every Property
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you're a homeowner or business owner, we have specialized programs to meet your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential */}
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Home className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{services.serviceTypes.residential.title}</h3>
                  <p className="text-muted-foreground">For homeowners</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                {services.serviceTypes.residential.description}
              </p>
              <ul className="space-y-3 mb-6">
                {services.serviceTypes.residential.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href={services.serviceTypes.residential.href}>
                  Explore Residential Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            {/* Commercial */}
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Shield className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{services.serviceTypes.commercial.title}</h3>
                  <p className="text-muted-foreground">For businesses</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                {services.serviceTypes.commercial.description}
              </p>
              <ul className="space-y-3 mb-6">
                {services.serviceTypes.commercial.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href={services.serviceTypes.commercial.href}>
                  Explore Commercial Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Acosta Property Services?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                For over 15 years, we've been protecting homes and businesses across Puerto Rico with reliable, effective pest control solutions.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {company.stats.map((stat, i) => (
                  <div key={i} className="text-center p-4 bg-secondary rounded-lg">
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {company.guarantees.map((guarantee, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
