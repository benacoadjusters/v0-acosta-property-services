"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, Building2, ArrowRight, CheckCircle2, SprayCan, Target, Bug } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CTASection } from "@/components/sections/cta-section"
import { useLanguage } from "@/lib/language-context"
import { services } from "@/content/services"
import { pestIconMap } from "@/components/pest-icons"

export default function ServicesPage() {
  const { language, t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t.nav.services}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              {language === "es" ? "Servicios de Control de Plagas" : "Pest Control Services"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              {language === "es"
                ? "Ofrecemos dos métodos principales de control de plagas: fumigación profesional y exterminación por trampas. Ambos métodos son seguros y efectivos para proteger tu propiedad."
                : "We offer two main pest control methods: professional fumigation and trap extermination. Both methods are safe and effective to protect your property."}
            </p>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t.serviceCategories.methods}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            {language === "es"
              ? "Utilizamos los métodos más efectivos según el tipo de plaga y las necesidades de tu propiedad."
              : "We use the most effective methods depending on the type of pest and your property's needs."}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.methods.map((method) => {
              const Icon = method.icon === "spray" ? SprayCan : Target
              const name = language === "es" ? method.nameEs : method.nameEn
              const description = language === "es" ? method.descriptionEs : method.descriptionEn
              const benefits = language === "es" ? method.benefits.es : method.benefits.en

              return (
                <Card key={method.id} className="overflow-hidden">
                  <div className="relative aspect-video">
                    <Image
                      src={method.image}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-2xl">{name}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">
                      {language === "es" ? "Beneficios:" : "Benefits:"}
                    </h4>
                    <ul className="space-y-2">
                      {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{benefit}</span>
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

      {/* Pests We Control */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t.serviceCategories.commonPests}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            {language === "es"
              ? "Controlamos todo tipo de plagas comunes en Puerto Rico con los métodos más apropiados."
              : "We control all types of common pests in Puerto Rico with the most appropriate methods."}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.pests.map((pest) => {
              const name = language === "es" ? pest.nameEs : pest.nameEn
              const methodLabels = pest.methods.map(m => 
                language === "es" 
                  ? (m === "fumigation" ? "Fumigación" : "Trampas")
                  : (m === "fumigation" ? "Fumigation" : "Traps")
              )
              const PestIcon = pestIconMap[pest.icon] || Bug

              return (
                <Card key={pest.id} className="p-4 text-center hover:shadow-md transition-shadow">
                  <PestIcon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-sm mb-1">{name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {methodLabels.join(" / ")}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Servicios Por Tipo de Propiedad" : "Services by Property Type"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential */}
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={services.serviceTypes.residential.image}
                  alt={language === "es" ? services.serviceTypes.residential.titleEs : services.serviceTypes.residential.titleEn}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Home className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {language === "es" ? services.serviceTypes.residential.titleEs : services.serviceTypes.residential.titleEn}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {language === "es" ? services.serviceTypes.residential.descriptionEs : services.serviceTypes.residential.descriptionEn}
                </p>
                <ul className="space-y-2 mb-6">
                  {(language === "es" ? services.serviceTypes.residential.benefits.es : services.serviceTypes.residential.benefits.en).slice(0, 4).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">
                    {t.ui.getQuote}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Commercial */}
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={services.serviceTypes.commercial.image}
                  alt={language === "es" ? services.serviceTypes.commercial.titleEs : services.serviceTypes.commercial.titleEn}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    {language === "es" ? services.serviceTypes.commercial.titleEs : services.serviceTypes.commercial.titleEn}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  {language === "es" ? services.serviceTypes.commercial.descriptionEs : services.serviceTypes.commercial.descriptionEn}
                </p>
                <ul className="space-y-2 mb-6">
                  {(language === "es" ? services.serviceTypes.commercial.benefits.es : services.serviceTypes.commercial.benefits.en).slice(0, 4).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">
                    {t.ui.getQuote}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            {language === "es" ? "Industrias que Servimos" : "Industries We Serve"}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto text-center">
            {language === "es"
              ? "Experiencia en control de plagas para diversos tipos de negocios."
              : "Pest control experience for various types of businesses."}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {(language === "es" ? services.serviceTypes.commercial.industries.es : services.serviceTypes.commercial.industries.en).map((industry, i) => (
              <div key={i} className="bg-card p-4 rounded-lg text-center border">
                <span className="text-sm font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
