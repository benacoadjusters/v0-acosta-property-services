"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, Shield, Clock, Award, CheckCircle2, Bug, TreePine, HardHat, SprayCan, Droplets, Users, Layers, Wrench, Zap, Grid3X3, Sparkles, Waves, Droplet, Sun } from "lucide-react"
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
                {language === "es" ? "Confiado por más de 300 clientes en Puerto Rico" : "Trusted by over 300 clients in Puerto Rico"}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                {language === "es" 
                  ? "Tu propiedad limpia, protegida y lista para impresionar" 
                  : "Your property clean, protected and ready to impress"}
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg text-pretty">
                {language === "es"
                  ? "Control de plagas, jardinería, limpieza y servicios especializados para exteriores en hogares, negocios y propiedades comerciales en Puerto Rico."
                  : "Pest control, landscaping, cleaning and specialized exterior services for homes, businesses and commercial properties in Puerto Rico."}
              </p>
              {/* Service badges - 9 servicios activos */}
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Bug className="h-3.5 w-3.5" />
                  {language === "es" ? "Control de Plagas" : "Pest Control"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-700">
                  <TreePine className="h-3.5 w-3.5" />
                  {language === "es" ? "Jardinería" : "Landscaping"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-700">
                  <SprayCan className="h-3.5 w-3.5" />
                  {language === "es" ? "Limpieza" : "Cleaning"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-700">
                  <Droplets className="h-3.5 w-3.5" />
                  {language === "es" ? "Limpieza de ventanas (Window Cleaning)" : "Window Cleaning"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-700">
                  <Grid3X3 className="h-3.5 w-3.5" />
                  {language === "es" ? "Limpieza de mallas (Screen Cleaning)" : "Screen Cleaning"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-700">
                  <Sparkles className="h-3.5 w-3.5" />
                  {language === "es" ? "Luces navideñas (Christmas Lights)" : "Christmas Lights"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-500/10 px-3 py-1 text-sm font-medium text-slate-700">
                  <Waves className="h-3.5 w-3.5" />
                  {language === "es" ? "Lavado a presión (Pressure Wash)" : "Pressure Wash"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-700">
                  <Droplet className="h-3.5 w-3.5" />
                  {language === "es" ? "Lavado suave (Soft Wash)" : "Soft Wash"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-700">
                  <Sun className="h-3.5 w-3.5" />
                  {language === "es" ? "Paneles solares (Solar Panel Cleaning)" : "Solar Panel Cleaning"}
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
            <div className="relative pb-8">
              {/* Grid de 9 servicios activos */}
              <div className="grid grid-cols-3 gap-2">
                {/* Fila 1: Control de Plagas, Jardinería, Limpieza */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
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
                      <Bug className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">{language === "es" ? "Control de Plagas" : "Pest Control"}</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
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
                      <TreePine className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">{language === "es" ? "Jardinería" : "Landscaping"}</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
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
                      <SprayCan className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">{language === "es" ? "Limpieza" : "Cleaning"}</p>
                    </div>
                  </div>
                </div>
                
                {/* Fila 2: Window Cleaning, Screen Cleaning, Christmas Lights */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image
                    src="/images/window-cleaning.png"
                    alt={language === "es" ? "Limpieza de ventanas" : "Window Cleaning"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Droplets className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">{language === "es" ? "Limpieza de ventanas" : "Window Cleaning"}</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image
                    src="/images/hero-screen-cleaning.png"
                    alt={language === "es" ? "Limpieza de mallas" : "Screen Cleaning"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Grid3X3 className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">{language === "es" ? "Limpieza de mallas" : "Screen Cleaning"}</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image
                    src="/images/hero-christmas-lights.png"
                    alt={language === "es" ? "Luces navideñas" : "Christmas Lights"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">{language === "es" ? "Luces navideñas" : "Christmas Lights"}</p>
                    </div>
                  </div>
                </div>
                
                {/* Fila 3: Pressure Wash, Soft Wash, Solar Panel Cleaning */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image
                    src="/images/pressure-wash.png"
                    alt={language === "es" ? "Lavado a presión" : "Pressure Wash"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Waves className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">{language === "es" ? "Lavado a presión" : "Pressure Wash"}</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image
                    src="/images/hero-soft-wash.png"
                    alt={language === "es" ? "Lavado suave" : "Soft Wash"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Droplet className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">{language === "es" ? "Lavado suave" : "Soft Wash"}</p>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg group">
                  <Image
                    src="/images/hero-solar-panel.png"
                    alt={language === "es" ? "Paneles solares" : "Solar Panel Cleaning"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div className="flex items-center gap-1.5">
                      <Sun className="h-3 w-3 text-white" />
                      <p className="text-white text-[10px] sm:text-xs font-medium">{language === "es" ? "Paneles solares" : "Solar Panel"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Updated to 9 services */}
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
              <p className="text-3xl md:text-4xl font-bold">9</p>
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
              {language === "es" 
                ? "Servicios para que tu propiedad se vea mejor y funcione mejor"
                : "Services to make your property look better and function better"}
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              {language === "es"
                ? "Un solo equipo para proteger, limpiar y mantener tu propiedad en Puerto Rico con servicios activos para interiores, exteriores y áreas comerciales."
                : "One team to protect, clean and maintain your property in Puerto Rico with active services for interiors, exteriors and commercial areas."}
            </p>
          </div>

          {/* Active Services - 9 services in grid */}
          {/* First Row: Pest Control, Jardinería, Limpieza */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Pest Control */}
            <Link href="/services/pest-control" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/hero-pest-control.jpg"
                    alt={language === "es" ? "Control de Plagas" : "Pest Control"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                      <Bug className="h-3 w-3" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {language === "es" ? "Control de Plagas" : "Pest Control"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "es" 
                      ? "Fumigación, trampeo y control preventivo para proteger hogares y negocios contra plagas comunes en Puerto Rico."
                      : "Fumigation, trapping and preventive control to protect homes and businesses against common pests in Puerto Rico."}
                  </p>
                  <span className="inline-flex items-center text-primary font-medium text-sm">
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

          {/* Second Row: Window Cleaning, Screen Cleaning, Christmas Lights */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Window Cleaning */}
            <Link href="/services/window-cleaning" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/window-cleaning.png"
                    alt={language === "es" ? "Limpieza de ventanas y cristales" : "Window Cleaning"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-3 py-1 text-xs font-medium text-white">
                      <Droplets className="h-3 w-3" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cyan-600 transition-colors">
                    {language === "es" ? "Limpieza de ventanas y cristales (Window Cleaning)" : "Window Cleaning"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "es" 
                      ? "Limpieza de ventanas, cristales y puertas de vidrio para hogares, negocios y propiedades comerciales."
                      : "Window and glass cleaning to improve the appearance, light entry and presentation of your property."}
                  </p>
                  <span className="inline-flex items-center text-cyan-600 font-medium text-sm">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Screen Cleaning */}
            <Link href="/services/screen-cleaning" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/screen-cleaning.png"
                    alt={language === "es" ? "Limpieza de mallas para ventanas" : "Screen Cleaning"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-3 py-1 text-xs font-medium text-white">
                      <Grid3X3 className="h-3 w-3" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-teal-600 transition-colors">
                    {language === "es" ? "Limpieza de mallas para ventanas (Screen Cleaning)" : "Screen Cleaning"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "es" 
                      ? "Remoción de polvo, salitre y suciedad acumulada en mallas de ventanas y puertas."
                      : "Cleaning of screens and meshes to remove dust, salt and accumulated dirt."}
                  </p>
                  <span className="inline-flex items-center text-teal-600 font-medium text-sm">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Christmas Lights */}
            <Link href="/services/christmas-lights" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/christmas-lights.png"
                    alt={language === "es" ? "Instalación de luces navideñas" : "Christmas Lights"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white">
                      <Sparkles className="h-3 w-3" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-red-600 transition-colors">
                    {language === "es" ? "Instalación de luces navideñas (Christmas Lights)" : "Christmas Lights"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "es" 
                      ? "Instalación y montaje de luces navideñas para hogares, negocios y propiedades comerciales, según temporada."
                      : "Installation and setup of Christmas lights for homes, businesses and commercial properties, by season and coordination."}
                  </p>
                  <span className="inline-flex items-center text-red-600 font-medium text-sm">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Third Row: Pressure Wash, Soft Wash, Solar Panel Cleaning */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Pressure Wash */}
            <Link href="/services/pressure-wash" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/pressure-wash.png"
                    alt={language === "es" ? "Lavado a presión" : "Pressure Wash"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-700 px-3 py-1 text-xs font-medium text-white">
                      <Waves className="h-3 w-3" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-slate-700 transition-colors">
                    {language === "es" ? "Lavado a presión (Pressure Wash)" : "Pressure Wash"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "es" 
                      ? "Limpieza con presión para aceras, marquesinas, entradas, paredes, pisos exteriores y superficies resistentes."
                      : "Pressure cleaning for resistant surfaces like sidewalks, carports, driveways, walls and exterior areas."}
                  </p>
                  <span className="inline-flex items-center text-slate-700 font-medium text-sm">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Soft Wash */}
            <Link href="/services/soft-wash" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/soft-wash.png"
                    alt={language === "es" ? "Lavado suave" : "Soft Wash"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-3 py-1 text-xs font-medium text-white">
                      <Droplet className="h-3 w-3" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-sky-600 transition-colors">
                    {language === "es" ? "Lavado suave (Soft Wash)" : "Soft Wash"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "es" 
                      ? "Lavado exterior con menor presión para superficies delicadas que requieren más cuidado."
                      : "Soft washing for delicate surfaces that need exterior cleaning with lower pressure."}
                  </p>
                  <span className="inline-flex items-center text-sky-600 font-medium text-sm">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Solar Panel Cleaning */}
            <Link href="/services/solar-panel-cleaning" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/solar-panel-cleaning.png"
                    alt={language === "es" ? "Limpieza de paneles solares" : "Solar Panel Cleaning"}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-amber-600 px-3 py-1 text-xs font-medium text-white">
                      <Sun className="h-3 w-3" />
                      {language === "es" ? "Disponible" : "Available"}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-amber-600 transition-colors">
                    {language === "es" ? "Limpieza de paneles solares (Solar Panel Cleaning)" : "Solar Panel Cleaning"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "es" 
                      ? "Limpieza de paneles solares para remover polvo, salitre y suciedad acumulada."
                      : "Solar panel cleaning to remove dust, salt and dirt without promising specific energy results."}
                  </p>
                  <span className="inline-flex items-center text-amber-600 font-medium text-sm">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Coming Soon Services - 6 services including Plumbing and Electrical */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
              <Clock className="h-4 w-4" />
              {language === "es" ? "Próximamente" : "Coming Soon"}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {/* Plumbing - Now Coming Soon */}
            <div className="group cursor-default">
              <div className="relative overflow-hidden rounded-xl bg-card border shadow-sm p-5 text-center opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 mx-auto mb-3">
                  <Wrench className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {language === "es" ? "Plomería" : "Plumbing"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {language === "es" ? "Fugas, destapes, tuberías" : "Leaks, drain cleaning, pipes"}
                </p>
              </div>
            </div>

            {/* Electrical - Now Coming Soon */}
            <div className="group cursor-default">
              <div className="relative overflow-hidden rounded-xl bg-card border shadow-sm p-5 text-center opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/10 mx-auto mb-3">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {language === "es" ? "Electricidad" : "Electrical"}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {language === "es" ? "Paneles, breakers, iluminación" : "Panels, breakers, lighting"}
                </p>
              </div>
            </div>

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

      {/* Why Choose Us - Updated text */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                {language === "es" 
                  ? "Más limpieza, más presencia, menos complicaciones"
                  : "More cleaning, more presence, less complications"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                {language === "es"
                  ? "Cuando tu propiedad se ve cuidada, transmite confianza. Te ayudamos a mantenerla protegida, limpia y presentable con servicios claros y coordinados."
                  : "When your property looks well-maintained, it conveys confidence. We help you keep it protected, clean and presentable with clear and coordinated services."}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {language === "es" ? "Respuesta clara y rápida" : "Clear and fast response"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "es" 
                        ? "Te orientamos desde el primer contacto para coordinar el servicio que tu propiedad necesita."
                        : "We guide you from the first contact to coordinate the service your property needs."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {language === "es" ? "Nueve servicios activos" : "Nine active services"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "es" 
                        ? "Control de plagas, jardinería, limpieza, window cleaning, screen cleaning, Christmas lights, pressure wash, soft wash y solar panel cleaning."
                        : "Pest control, landscaping, cleaning, window cleaning, screen cleaning, Christmas lights, pressure wash, soft wash and solar panel cleaning."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {language === "es" ? "Servicios independientes" : "Independent services"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "es" 
                        ? "Cada servicio tiene su propio enfoque, alcance y cotización. No agrupamos trabajos especializados dentro de limpieza general."
                        : "Each service has its own focus, scope and quote. We don't group specialized work within general cleaning."}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Layers className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {language === "es" ? "Servicio para Puerto Rico" : "Service for Puerto Rico"}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === "es" 
                        ? "Atendemos hogares, negocios y propiedades comerciales en municipios de toda la isla."
                        : "We serve homes, businesses and commercial properties in municipalities across the island."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-3 gap-3">
                {/* 9 servicios activos en grid 3x3 */}
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-pest-control.jpg"
                    alt={language === "es" ? "Control de Plagas" : "Pest Control"}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-landscaping.jpg"
                    alt={language === "es" ? "Jardinería" : "Landscaping"}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-cleaning.jpg"
                    alt={language === "es" ? "Limpieza" : "Cleaning"}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/window-cleaning.png"
                    alt="Window Cleaning"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-screen-cleaning.png"
                    alt="Screen Cleaning"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-christmas-lights.png"
                    alt="Christmas Lights"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/pressure-wash.png"
                    alt="Pressure Wash"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-soft-wash.png"
                    alt="Soft Wash"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-solar-panel.png"
                    alt="Solar Panel Cleaning"
                    fill
                    className="object-cover object-center"
                  />
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
              'Juncos', 'Lajas', 'Lares', 'Las Marías', 'Las Piedras', 'Loiza', 'Luquillo', 'Manati',
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

      {/* CTA - Updated */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Qué necesita tu propiedad hoy?"
                : "What does your property need today?"}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 text-pretty">
              {language === "es"
                ? "Cuéntanos si necesitas control de plagas, jardinería, limpieza, window cleaning, screen cleaning, Christmas lights, pressure wash, soft wash o solar panel cleaning. Te orientamos y coordinamos una cotización."
                : "Tell us if you need pest control, landscaping, cleaning, window cleaning, screen cleaning, Christmas lights, pressure wash, soft wash or solar panel cleaning. We guide you and coordinate a quote."}
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
