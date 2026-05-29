"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, Shield, Clock, Award, CheckCircle2, Bug, TreePine, HardHat, SprayCan, Droplets, Users, Layers, Wrench, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

export default function HomePage() {
  const { language, t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/30">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <Shield className="h-4 w-4" />
                {t.home.trustedBy}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {t.home.heroTitle}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg text-pretty">
                {t.home.heroSubtitle}
              </p>
              {/* Service badges */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Bug className="h-3.5 w-3.5" />
                  {language === "es" ? "Control de Plagas" : "Pest Control"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-700">
                  <Wrench className="h-3.5 w-3.5" />
                  {language === "es" ? "Plomería" : "Plumbing"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-700">
                  <Zap className="h-3.5 w-3.5" />
                  {language === "es" ? "Electricidad" : "Electrical"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-700">
                  <TreePine className="h-3.5 w-3.5" />
                  {language === "es" ? "Jardinería" : "Landscaping"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700">
                  <SprayCan className="h-3.5 w-3.5" />
                  {language === "es" ? "Limpieza" : "Cleaning"}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  <Link href="/contact">
                    {t.ui.getQuote}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phoneClean}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {t.ui.callNow}
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative pb-16">
              {/* Grid de 5 servicios - Orden: Control de Plagas, Plomería, Electricidad, Jardinería, Limpieza */}
              <div className="grid grid-cols-3 gap-3">
                {/* Primera columna - Control de Plagas (arriba) y Plomería (abajo) */}
                <div className="space-y-3">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-lg group">
                    <Image
                      src="/images/hero-pest-control.jpg"
                      alt={language === "es" ? "Control de Plagas" : "Pest Control"}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center gap-1.5">
                        <Bug className="h-3.5 w-3.5 text-white" />
                        <p className="text-white text-xs font-medium">{language === "es" ? "Control de Plagas" : "Pest Control"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-lg group">
                    <Image
                      src="/images/hero-plumbing.jpg"
                      alt={language === "es" ? "Plomería" : "Plumbing"}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center gap-1.5">
                        <Wrench className="h-3.5 w-3.5 text-white" />
                        <p className="text-white text-xs font-medium">{language === "es" ? "Plomería" : "Plumbing"}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Segunda columna - imagen grande de ELECTRICIDAD */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-muted shadow-xl group">
                  <Image
                    src="/images/hero-electrical.jpg"
                    alt={language === "es" ? "Electricidad" : "Electrical"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-1.5">
                      <Zap className="h-4 w-4 text-white" />
                      <p className="text-white text-sm font-medium">{language === "es" ? "Electricidad" : "Electrical"}</p>
                    </div>
                  </div>
                </div>
                
                {/* Tercera columna - Jardinería y Limpieza */}
                <div className="space-y-3">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-lg group">
                    <Image
                      src="/images/hero-landscaping.jpg"
                      alt={language === "es" ? "Jardinería" : "Landscaping"}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center gap-1.5">
                        <TreePine className="h-3.5 w-3.5 text-white" />
                        <p className="text-white text-xs font-medium">{language === "es" ? "Jardinería" : "Landscaping"}</p>
                      </div>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted shadow-lg group">
                    <Image
                      src="/images/hero-cleaning.jpg"
                      alt={language === "es" ? "Limpieza" : "Cleaning"}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center gap-1.5">
                        <SprayCan className="h-3.5 w-3.5 text-white" />
                        <p className="text-white text-xs font-medium">{language === "es" ? "Limpieza" : "Cleaning"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats badge - posicionado debajo del grid */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card rounded-xl shadow-lg p-4 border hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">300+</p>
                    <p className="text-sm text-muted-foreground">{t.home.statsClients}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">300+</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsClients}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">4</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsYears}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">5</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsServices}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">78</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsMunicipios}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services - Categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.home.servicesTitle}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t.home.servicesDesc}
            </p>
          </div>

          {/* Active Services - First Row: Pest Control and Plumbing */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Pest Control */}
            <Link href="/services/pest-control" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/hero-pest-control.jpg"
                    alt={language === "es" ? "Control de Plagas" : "Pest Control"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground mb-2">
                      <Bug className="h-4 w-4" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {language === "es" ? "Control de Plagas" : "Pest Control"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === "es" 
                      ? "Fumigación, trampeo y control preventivo para proteger tu hogar o negocio contra plagas comunes en Puerto Rico."
                      : "Fumigation, trapping and preventive control to protect your home or business against common pests in Puerto Rico."}
                  </p>
                  <span className="inline-flex items-center text-primary font-medium text-sm">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Plumbing */}
            <Link href="/services/plumbing" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src="/images/hero-plumbing.jpg"
                    alt={language === "es" ? "Plomería" : "Plumbing"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-3 py-1 text-sm font-medium text-white mb-2">
                      <Wrench className="h-4 w-4" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-cyan-600 transition-colors">
                    {language === "es" ? "Plomería" : "Plumbing"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === "es" 
                      ? "Reparación de fugas, destapes, tuberías, calentadores y accesorios de plomería para propiedades residenciales y comerciales."
                      : "Leak repair, drain cleaning, pipes, water heaters and plumbing fixtures for residential and commercial properties."}
                  </p>
                  <span className="inline-flex items-center text-cyan-600 font-medium text-sm">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Second Row - 3 Active Services: Electrical, Landscaping, Cleaning */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Electrical */}
            <Link href="/services/electrical" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/hero-electrical.jpg"
                    alt={language === "es" ? "Electricidad" : "Electrical"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-yellow-600 px-3 py-1 text-xs font-medium text-white">
                      <Zap className="h-3 w-3" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-yellow-600 transition-colors">
                    {language === "es" ? "Electricidad" : "Electrical"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "es" 
                      ? "Instalaciones y reparaciones eléctricas para paneles, breakers, tomacorrientes, iluminación y abanicos de techo."
                      : "Electrical installations and repairs for panels, breakers, outlets, lighting and ceiling fans."}
                  </p>
                  <span className="inline-flex items-center text-yellow-600 font-medium text-sm">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Landscaping */}
            <Link href="/services/landscaping" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/hero-landscaping.jpg"
                    alt={language === "es" ? "Jardinería" : "Landscaping"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
                      <TreePine className="h-3 w-3" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-green-600 transition-colors">
                    {language === "es" ? "Jardinería" : "Landscaping"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "es" 
                      ? "Corte de grama, poda, limpieza exterior y mantenimiento de áreas verdes para que tu propiedad luzca cuidada."
                      : "Lawn mowing, pruning, exterior cleaning and green area maintenance so your property looks well-kept."}
                  </p>
                  <span className="inline-flex items-center text-green-600 font-medium text-sm">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Cleaning */}
            <Link href="/services/cleaning" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/hero-cleaning.jpg"
                    alt={language === "es" ? "Limpieza" : "Cleaning"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                      <SprayCan className="h-3 w-3" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                    {language === "es" ? "Limpieza" : "Cleaning"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "es" 
                      ? "Limpieza residencial, comercial, profunda y post-construcción para mantener tus espacios listos y presentables."
                      : "Residential, commercial, deep and post-construction cleaning to keep your spaces ready and presentable."}
                  </p>
                  <span className="inline-flex items-center text-blue-600 font-medium text-sm">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Coming Soon Services - 4 columns */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
              <Clock className="h-4 w-4" />
              {language === "es" ? "Próximamente" : "Coming Soon"}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Water Damage Mitigation */}
            <div className="group cursor-default">
              <div className="relative overflow-hidden rounded-xl bg-card border shadow-sm p-5 text-center opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10 mx-auto mb-3">
                  <Droplets className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {language === "es" ? "Mitigación de Daños por Agua" : "Water Damage Mitigation"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {language === "es" ? "Daños por agua y humedad" : "Water and humidity damage"}
                </p>
              </div>
            </div>

            {/* Handyman Repairs */}
            <div className="group cursor-default">
              <div className="relative overflow-hidden rounded-xl bg-card border shadow-sm p-5 text-center opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 mx-auto mb-3">
                  <HardHat className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {language === "es" ? "Reparaciones Handyman" : "Handyman Repairs"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {language === "es" ? "Reparaciones menores" : "Minor repairs"}
                </p>
              </div>
            </div>

            {/* Roof Sealing */}
            <div className="group cursor-default">
              <div className="relative overflow-hidden rounded-xl bg-card border shadow-sm p-5 text-center opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 mx-auto mb-3">
                  <Layers className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {language === "es" ? "Sellado de Techos" : "Roof Sealing"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {language === "es" ? "Protección contra filtraciones" : "Leak protection"}
                </p>
              </div>
            </div>

            {/* Lead and Asbestos Mitigation */}
            <div className="group cursor-default">
              <div className="relative overflow-hidden rounded-xl bg-card border shadow-sm p-5 text-center opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 mx-auto mb-3">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {language === "es" ? "Mitigación de Plomo y Asbesto" : "Lead & Asbestos Mitigation"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {language === "es" ? "Manejo profesional" : "Professional handling"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                {t.home.whyChooseUs}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                {t.home.whyChooseUsDesc}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.home.benefit1Title}</h3>
                    <p className="text-muted-foreground text-sm">{t.home.benefit1Desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.home.benefit2Title}</h3>
                    <p className="text-muted-foreground text-sm">{t.home.benefit2Desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.home.benefit3Title}</h3>
                    <p className="text-muted-foreground text-sm">{t.home.benefit3Desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.home.benefit4Title}</h3>
                    <p className="text-muted-foreground text-sm">{t.home.benefit4Desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/hero-pest-control.jpg"
                      alt={language === "es" ? "Control de Plagas" : "Pest Control"}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/hero-cleaning.jpg"
                      alt={language === "es" ? "Limpieza" : "Cleaning"}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/hero-landscaping.jpg"
                      alt={language === "es" ? "Jardinería" : "Landscaping"}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/hero-plumbing.jpg"
                      alt={language === "es" ? "Plomería" : "Plumbing"}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.home.coverageTitle}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {t.home.coverageDesc}
            </p>
          </div>
        </div>
        {/* Marquee Carousel */}
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[
              'Adjuntas', 'Aguada', 'Aguadilla', 'Aguas Buenas', 'Aibonito', 'Añasco', 'Arecibo', 'Arroyo',
              'Barceloneta', 'Barranquitas', 'Bayamón', 'Cabo Rojo', 'Caguas', 'Camuy', 'Canóvanas', 'Carolina',
              'Cataño', 'Cayey', 'Ceiba', 'Ciales', 'Cidra', 'Coamo', 'Comerío', 'Corozal', 'Culebra',
              'Dorado', 'Fajardo', 'Florida', 'Guánica', 'Guayama', 'Guayanilla', 'Guaynabo', 'Gurabo',
              'Hatillo', 'Hormigueros', 'Humacao', 'Isabela', 'Jayuya', 'Juana Díaz'
            ].map((city) => (
              <span 
                key={city}
                className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground mx-1.5 shrink-0"
              >
                {city}
              </span>
            ))}
            {[
              'Adjuntas', 'Aguada', 'Aguadilla', 'Aguas Buenas', 'Aibonito', 'Añasco', 'Arecibo', 'Arroyo',
              'Barceloneta', 'Barranquitas', 'Bayamón', 'Cabo Rojo', 'Caguas', 'Camuy', 'Canóvanas', 'Carolina',
              'Cataño', 'Cayey', 'Ceiba', 'Ciales', 'Cidra', 'Coamo', 'Comerío', 'Corozal', 'Culebra',
              'Dorado', 'Fajardo', 'Florida', 'Guánica', 'Guayama', 'Guayanilla', 'Guaynabo', 'Gurabo',
              'Hatillo', 'Hormigueros', 'Humacao', 'Isabela', 'Jayuya', 'Juana Díaz'
            ].map((city, i) => (
              <span 
                key={`${city}-dup-${i}`}
                className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground mx-1.5 shrink-0"
              >
                {city}
              </span>
            ))}
          </div>
          <div className="flex animate-marquee-reverse whitespace-nowrap mt-3">
            {[
              'Juncos', 'Lajas', 'Lares', 'Las Marías', 'Las Piedras', 'Lo��za', 'Luquillo', 'Manatí',
              'Maricao', 'Maunabo', 'Mayagüez', 'Moca', 'Morovis', 'Naguabo', 'Naranjito', 'Orocovis',
              'Patillas', 'Peñuelas', 'Ponce', 'Quebradillas', 'Rincón', 'Río Grande', 'Sabana Grande',
              'Salinas', 'San Germán', 'San Juan', 'San Lorenzo', 'San Sebastián', 'Santa Isabel',
              'Toa Alta', 'Toa Baja', 'Trujillo Alto', 'Utuado', 'Vega Alta', 'Vega Baja', 'Vieques',
              'Villalba', 'Yabucoa', 'Yauco'
            ].map((city) => (
              <span 
                key={city}
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mx-1.5 shrink-0"
              >
                {city}
              </span>
            ))}
            {[
              'Juncos', 'Lajas', 'Lares', 'Las Marías', 'Las Piedras', 'Loíza', 'Luquillo', 'Manatí',
              'Maricao', 'Maunabo', 'Mayagüez', 'Moca', 'Morovis', 'Naguabo', 'Naranjito', 'Orocovis',
              'Patillas', 'Peñuelas', 'Ponce', 'Quebradillas', 'Rincón', 'Río Grande', 'Sabana Grande',
              'Salinas', 'San Germán', 'San Juan', 'San Lorenzo', 'San Sebastián', 'Santa Isabel',
              'Toa Alta', 'Toa Baja', 'Trujillo Alto', 'Utuado', 'Vega Alta', 'Vega Baja', 'Vieques',
              'Villalba', 'Yabucoa', 'Yauco'
            ].map((city, i) => (
              <span 
                key={`${city}-dup-${i}`}
                className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mx-1.5 shrink-0"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {t.home.ctaTitle}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 text-pretty">
              {t.home.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link href="/contact">
                  {t.ui.getQuote}
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <a href={`tel:${company.phoneClean}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {company.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
