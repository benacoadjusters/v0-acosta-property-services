"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, Building2, ArrowRight, CheckCircle2, SprayCan, Target, Bug, Leaf, X } from "lucide-react"
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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

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
            <p className="text-xl text-muted-foreground text-pretty mb-6">
              {language === "es"
                ? "Ofrecemos soluciones integrales de control de plagas: fumigación, trampeo, y control biológico. Aplicamos el método más adecuado según el tipo de plaga y las necesidades de su propiedad. Certificados por el Departamento de Agricultura y Comercio de Puerto Rico."
                : "We offer comprehensive pest control solutions: fumigation, trapping, and biological control. We apply the most appropriate method based on the pest type and your property's needs. Certified by the Puerto Rico Department of Agriculture and Commerce."}
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                {language === "es" ? "Categoría 8-A: Control de Plagas en Estructuras" : "Category 8-A: Structural Pest Control"}
              </span>
              <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle2 className="h-4 w-4" />
                {language === "es" ? "Categoría 4: Control de Plagas en Césped y Ornamentales" : "Category 4: Lawn & Ornamental Pest Control"}
              </span>
            </div>
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
              ? "Utilizamos los métodos más efectivos según el tipo de plaga y las necesidades de su propiedad."
              : "We use the most effective methods depending on the type of pest and your property's needs."}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.methods.map((method) => {
              const Icon = method.icon === "spray" ? SprayCan : method.icon === "leaf" ? Leaf : Target
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

      {/* All Pests We Control - Single unified grid */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t.serviceCategories.commonPests}
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            {language === "es"
              ? "Haga clic en cualquier plaga para ver información detallada, imágenes de identificación y métodos de control."
              : "Click on any pest to see detailed information, identification images and control methods."}
          </p>
          
          {/* 3 rows of 5 = 15 pests */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {services.pests.map((pest) => {
              const name = language === "es" ? pest.nameEs : pest.nameEn
              const methodLabels = pest.methods.map(m => {
                if (language === "es") {
                  if (m === "fumigation") return "Fumigación"
                  if (m === "traps") return "Trampas"
                  if (m === "biological") return "Control Biológico"
                  return m
                } else {
                  if (m === "fumigation") return "Fumigation"
                  if (m === "traps") return "Traps"
                  if (m === "biological") return "Biological Control"
                  return m
                }
              })
              const PestIcon = pestIconMap[pest.icon] || Bug

              return (
                <Card 
                  key={pest.id} 
                  className="p-3 text-center hover:shadow-md transition-all cursor-pointer hover:border-primary group"
                  onClick={() => {
                    setSelectedPest(pest)
                    setSelectedImageIndex(0)
                  }}
                >
                  <PestIcon className="h-8 w-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-xs mb-1 line-clamp-2">{name}</h3>
                  <p className="text-[10px] text-muted-foreground line-clamp-1">
                    {methodLabels.join(" / ")}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pest Detail Modal with multiple images */}
      <Dialog open={!!selectedPest} onOpenChange={() => setSelectedPest(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden flex flex-col p-0">
          {selectedPest && (
            <>
              {/* Sticky header on mobile */}
              <DialogHeader className="sticky top-0 z-10 bg-background border-b p-4 md:p-6 md:border-b-0 md:relative shrink-0">
                {/* Close button for mobile */}
                <button
                  onClick={() => setSelectedPest(null)}
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 md:hidden"
                  aria-label={language === "es" ? "Cerrar" : "Close"}
                >
                  <X className="h-5 w-5" />
                </button>
                <DialogTitle className="text-xl md:text-2xl flex items-center gap-3 pr-8">
                  {(() => {
                    const PestIcon = pestIconMap[selectedPest.icon] || Bug
                    return <PestIcon className="h-6 w-6 md:h-8 md:w-8 text-primary shrink-0" />
                  })()}
                  <span className="line-clamp-2">{language === "es" ? selectedPest.nameEs : selectedPest.nameEn}</span>
                </DialogTitle>
                <DialogDescription>
                  {selectedPest.methods.map(m => {
                    if (language === "es") {
                      if (m === "fumigation") return "Fumigación"
                      if (m === "traps") return "Trampas"
                      if (m === "biological") return "Control Biológico"
                      return m
                    } else {
                      if (m === "fumigation") return "Fumigation"
                      if (m === "traps") return "Traps"
                      if (m === "biological") return "Biological Control"
                      return m
                    }
                  }).join(" / ")}
                </DialogDescription>
              </DialogHeader>
              
              {/* Scrollable content */}
              <div className="overflow-y-auto flex-1 p-4 md:p-6 md:pt-0">
              <div className="space-y-6">
                {/* Main Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={selectedPest.images[selectedImageIndex].src}
                    alt={language === "es" ? selectedPest.images[selectedImageIndex].labelEs : selectedPest.images[selectedImageIndex].labelEn}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white font-medium">
                      {language === "es" ? selectedPest.images[selectedImageIndex].labelEs : selectedPest.images[selectedImageIndex].labelEn}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Images */}
                {selectedPest.images.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {selectedPest.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`relative w-20 h-20 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                          selectedImageIndex === index ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-muted-foreground/30'
                        }`}
                      >
                        <Image
                          src={img.src}
                          alt={language === "es" ? img.labelEs : img.labelEn}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Description */}
                <div>
                  <h4 className="font-semibold mb-3 text-lg">
                    {language === "es" ? "Identificación y Riesgos" : "Identification and Risks"}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "es" ? selectedPest.descriptionEs : selectedPest.descriptionEn}
                  </p>
                </div>
                
                {/* Control Method */}
                <div>
                  <h4 className="font-semibold mb-3">
                    {language === "es" ? "Método de Control" : "Control Method"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedPest.methods.map(method => {
                      const MethodIcon = method === "fumigation" ? SprayCan : method === "biological" ? Leaf : Target
                      const label = language === "es"
                        ? (method === "fumigation" ? "Fumigación" : method === "biological" ? "Control Biológico" : "Trampas")
                        : (method === "fumigation" ? "Fumigation" : method === "biological" ? "Biological Control" : "Traps")
                      return (
                        <span 
                          key={method}
                          className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm"
                        >
                          <MethodIcon className="h-4 w-4" />
                          {label}
                        </span>
                      )
                    })}
                  </div>
                </div>
                
                <Button asChild className="w-full">
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
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Servicios Por Tipo de Propiedad" : "Services by Property Type"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.customerTypes.map((clientType) => {
              const isResidential = clientType.id === "residential"
              const Icon = isResidential ? Home : Building2
              const name = language === "es" ? clientType.nameEs : clientType.nameEn
              const description = language === "es" ? clientType.descriptionEs : clientType.descriptionEn
              const features = language === "es" ? clientType.features.es : clientType.features.en

              return (
                <Card key={clientType.id} className="overflow-hidden">
                  <div className="relative aspect-video bg-secondary">
                    <Image
                      src={isResidential ? "/images/residential-service.jpg" : "/images/commercial-service.jpg"}
                      alt={name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${isResidential ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-bold">{name}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{description}</p>
                    <ul className="space-y-2 mb-6">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className={`h-5 w-5 mt-0.5 shrink-0 ${isResidential ? 'text-primary' : 'text-accent'}`} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full ${!isResidential ? 'bg-accent text-accent-foreground hover:bg-accent/90' : ''}`}>
                      <Link href="/contact">
                        {t.ui.getQuote}
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

      <CTASection />
    </>
  )
}
