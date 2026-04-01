"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, Building2, ArrowRight, CheckCircle2, SprayCan, Target, Bug, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { CTASection } from "@/components/sections/cta-section"
import { useLanguage } from "@/lib/language-context"
import { services } from "@/content/services"
import { pestIconMap } from "@/components/pest-icons"

type PestType = typeof services.pests[number]

export default function ServicesPage() {
  const { language, t } = useLanguage()
  const [selectedPest, setSelectedPest] = useState<PestType | null>(null)

  // Separate pests by category
  const generalPests = services.pests.filter(p => !('category' in p))
  const lawnPests = services.pests.filter(p => 'category' in p && p.category === 'lawn')
  const ornamentalPests = services.pests.filter(p => 'category' in p && p.category === 'ornamental')

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
                ? "Ofrecemos dos métodos principales de control de plagas: fumigación profesional y exterminación por trampas. Contamos con el Certificado 4 de CESPET para tratamiento de césped y ornamentales."
                : "We offer two main pest control methods: professional fumigation and trap extermination. We hold CESPET Certificate 4 for lawn and ornamental treatment."}
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
              ? "Haz clic en cualquier plaga para ver más información, imagen e identificación."
              : "Click on any pest to see more information, image and identification."}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {generalPests.map((pest) => {
              const name = language === "es" ? pest.nameEs : pest.nameEn
              const methodLabels = pest.methods.map(m => 
                language === "es" 
                  ? (m === "fumigation" ? "Fumigación" : "Trampas")
                  : (m === "fumigation" ? "Fumigation" : "Traps")
              )
              const PestIcon = pestIconMap[pest.icon] || Bug

              return (
                <Card 
                  key={pest.id} 
                  className="p-4 text-center hover:shadow-lg transition-all cursor-pointer hover:border-primary group"
                  onClick={() => setSelectedPest(pest)}
                >
                  <PestIcon className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-sm mb-1">{name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {methodLabels.join(" / ")}
                  </p>
                  <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {language === "es" ? "Ver más" : "See more"}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Lawn & Ornamental Pests */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {language === "es" ? "Plagas de Césped y Ornamentales" : "Lawn and Ornamental Pests"}
              </h2>
              <p className="text-sm text-primary font-medium">
                {language === "es" ? "Certificado 4 de CESPET" : "CESPET Certificate 4"}
              </p>
            </div>
          </div>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            {language === "es"
              ? "Tratamiento especializado para plagas que afectan jardines, césped y plantas ornamentales."
              : "Specialized treatment for pests that affect gardens, lawns and ornamental plants."}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...lawnPests, ...ornamentalPests].map((pest) => {
              const name = language === "es" ? pest.nameEs : pest.nameEn
              const methodLabels = pest.methods.map(m => 
                language === "es" 
                  ? (m === "fumigation" ? "Fumigación" : "Trampas")
                  : (m === "fumigation" ? "Fumigation" : "Traps")
              )
              const PestIcon = pestIconMap[pest.icon] || Bug
              const categoryLabel = 'category' in pest && pest.category === 'lawn' 
                ? (language === "es" ? "Césped" : "Lawn")
                : (language === "es" ? "Ornamental" : "Ornamental")

              return (
                <Card 
                  key={pest.id} 
                  className="p-4 text-center hover:shadow-lg transition-all cursor-pointer hover:border-primary group"
                  onClick={() => setSelectedPest(pest)}
                >
                  <div className="absolute top-2 right-2">
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                      {categoryLabel}
                    </span>
                  </div>
                  <PestIcon className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-sm mb-1">{name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {methodLabels.join(" / ")}
                  </p>
                  <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {language === "es" ? "Ver más" : "See more"}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pest Detail Modal */}
      <Dialog open={!!selectedPest} onOpenChange={() => setSelectedPest(null)}>
        <DialogContent className="max-w-2xl">
          {selectedPest && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl flex items-center gap-3">
                  {(() => {
                    const PestIcon = pestIconMap[selectedPest.icon] || Bug
                    return <PestIcon className="h-8 w-8 text-primary" />
                  })()}
                  {language === "es" ? selectedPest.nameEs : selectedPest.nameEn}
                </DialogTitle>
                <DialogDescription>
                  {selectedPest.methods.map(m => 
                    language === "es" 
                      ? (m === "fumigation" ? "Fumigación" : "Trampas")
                      : (m === "fumigation" ? "Fumigation" : "Traps")
                  ).join(" / ")}
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={selectedPest.image}
                    alt={language === "es" ? selectedPest.nameEs : selectedPest.nameEn}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    {language === "es" ? "Identificación y Riesgos" : "Identification and Risks"}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {language === "es" ? selectedPest.descriptionEs : selectedPest.descriptionEn}
                  </p>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">
                      {language === "es" ? "Método de Control" : "Control Method"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedPest.methods.map(method => (
                        <span 
                          key={method}
                          className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm"
                        >
                          {method === "fumigation" ? <SprayCan className="h-4 w-4" /> : <Target className="h-4 w-4" />}
                          {language === "es" 
                            ? (method === "fumigation" ? "Fumigación" : "Trampas")
                            : (method === "fumigation" ? "Fumigation" : "Traps")
                          }
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button asChild className="w-full mt-6">
                    <Link href="/contact">
                      {language === "es" ? "Solicitar Tratamiento" : "Request Treatment"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Residential vs Commercial */}
      <section className="py-16 md:py-20 bg-secondary">
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
      <section className="py-16 md:py-20 bg-background">
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
