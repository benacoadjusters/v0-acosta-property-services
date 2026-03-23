"use client"

import Link from "next/link"
import { Bug, Home, Building2, ArrowRight, CheckCircle2, Rat, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import { useLanguage } from "@/lib/language-context"

export default function ServicesPage() {
  const { language, t } = useLanguage()

  const serviceCategories = [
    {
      id: "pest-control",
      icon: Bug,
      name: t.services.pestControlTitle,
      description: t.services.pestControlDesc,
      href: "/services/pest-control"
    },
    {
      id: "termite",
      icon: Bug,
      name: language === "es" ? "Control de Termitas" : "Termite Control",
      description: language === "es" 
        ? "Proteccion especializada contra termitas subterraneas y de madera seca."
        : "Specialized protection against subterranean and drywood termites.",
      href: "/services/termite-control"
    },
    {
      id: "rodent",
      icon: Rat,
      name: language === "es" ? "Control de Roedores" : "Rodent Control",
      description: language === "es"
        ? "Eliminacion efectiva de ratas y ratones con metodos seguros."
        : "Effective elimination of rats and mice with safe methods.",
      href: "/services/rodent-control"
    },
    {
      id: "fumigation",
      icon: Leaf,
      name: language === "es" ? "Fumigacion" : "Fumigation",
      description: language === "es"
        ? "Servicios de fumigacion profesional para todo tipo de plagas."
        : "Professional fumigation services for all types of pests.",
      href: "/services/fumigation"
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.nav.services}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              {language === "es" ? "Servicios Profesionales de Control de Plagas" : "Professional Pest Control Services"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              {language === "es"
                ? "Desde control de plagas hasta fumigacion, ofrecemos servicios completos para proteger tu hogar o negocio en todo Puerto Rico."
                : "From pest control to fumigation, we offer comprehensive services to protect your home or business across Puerto Rico."}
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {language === "es" ? "Servicios de Control de Plagas" : "Pest Control Services"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((service) => {
              const Icon = service.icon
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
                        {t.ui.learnMore}
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
              {language === "es" ? "Soluciones Para Cada Propiedad" : "Solutions for Every Property"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "es"
                ? "Ya seas propietario de hogar o negocio, tenemos programas especializados para tus necesidades."
                : "Whether you're a homeowner or business owner, we have specialized programs to meet your needs."}
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
                  <h3 className="text-2xl font-bold">{t.services.residentialTitle}</h3>
                  <p className="text-muted-foreground">{language === "es" ? "Para hogares" : "For homeowners"}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{t.services.residentialDesc}</p>
              <ul className="space-y-3 mb-6">
                {(language === "es" 
                  ? ["Proteccion de familia y mascotas", "Tratamientos programados", "Respuesta de emergencia", "Garantia de satisfaccion"]
                  : ["Family and pet safe treatments", "Scheduled treatments", "Emergency response", "Satisfaction guarantee"]
                ).map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/services/residential-pest-control">
                  {language === "es" ? "Explorar Servicios Residenciales" : "Explore Residential Services"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </Card>

            {/* Commercial */}
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Building2 className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{t.services.commercialTitle}</h3>
                  <p className="text-muted-foreground">{language === "es" ? "Para negocios" : "For businesses"}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{t.services.commercialDesc}</p>
              <ul className="space-y-3 mb-6">
                {(language === "es"
                  ? ["Cumplimiento de salud y seguridad", "Minima interrupcion de operaciones", "Documentacion para auditorias", "Servicio 24/7 disponible"]
                  : ["Health & safety compliance", "Minimal operational disruption", "Audit documentation", "24/7 service available"]
                ).map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/services/commercial-pest-control">
                  {language === "es" ? "Explorar Servicios Comerciales" : "Explore Commercial Services"}
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.home.whyChooseUs}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">{t.home.whyChooseUsDesc}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">{t.home.statsYears}</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-3xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">{t.home.statsClients}</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-3xl font-bold text-primary">78</div>
                <div className="text-sm text-muted-foreground">{t.home.statsMunicipios}</div>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">{t.home.statsIsland}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
