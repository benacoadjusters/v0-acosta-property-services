"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, Shield, Clock, Award, CheckCircle2, Bug, TreePine, HardHat } from "lucide-react"
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
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-700">
                  <TreePine className="h-3.5 w-3.5" />
                  {language === "es" ? "Jardinería" : "Landscaping"}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-700">
                  <HardHat className="h-3.5 w-3.5" />
                  {language === "es" ? "Mitigación Ambiental" : "Environmental Mitigation"}
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
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-xl">
                  <Image
                    src="/images/hero-pest-control.jpg"
                    alt={language === "es" ? "Control de Plagas" : "Pest Control"}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium">{language === "es" ? "Control de Plagas" : "Pest Control"}</p>
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted shadow-xl mt-8">
                  <Image
                    src="/images/hero-landscaping.jpg"
                    alt={language === "es" ? "Jardinería" : "Landscaping"}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <p className="text-white text-sm font-medium">{language === "es" ? "Jardinería" : "Landscaping"}</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-4 border hidden md:block">
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
              <p className="text-3xl md:text-4xl font-bold">4</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsYears}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">300+</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsClients}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold">78</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsMunicipios}</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold">{t.home.statsIslandCoverage}</p>
              <p className="text-sm opacity-80 mt-1">{t.home.statsIsland}</p>
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
              {language === "es" 
                ? "Soluciones integrales para el mantenimiento y protección de tu propiedad. Desde control de plagas hasta jardinería profesional."
                : "Comprehensive solutions for the maintenance and protection of your property. From pest control to professional landscaping."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pest Control */}
            <Link href="/services/pest-control" className="group">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/hero-pest-control.jpg"
                    alt={language === "es" ? "Control de Plagas" : "Pest Control"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground mb-2">
                      <Bug className="h-4 w-4" />
                      {language === "es" ? "Activo" : "Active"}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {language === "es" ? "Control de Plagas" : "Pest Control"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === "es" 
                      ? "Fumigación, trampeo y control biológico. Protegemos tu hogar y negocio de todo tipo de plagas con métodos seguros y efectivos."
                      : "Fumigation, trapping and biological control. We protect your home and business from all types of pests with safe and effective methods."}
                  </p>
                  <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
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
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white mb-2">
                      <TreePine className="h-4 w-4" />
                      {language === "es" ? "Activo" : "Active"}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-green-600 transition-colors">
                    {language === "es" ? "Jardinería" : "Landscaping"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === "es" 
                      ? "Mantenimiento de jardines, poda, corte de grama, diseño paisajístico y cuidado de áreas verdes para propiedades residenciales y comerciales."
                      : "Garden maintenance, pruning, lawn mowing, landscape design and green area care for residential and commercial properties."}
                  </p>
                  <span className="inline-flex items-center text-green-600 font-medium text-sm group-hover:gap-2 transition-all">
                    {t.ui.learnMore}
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Environmental Mitigation - Coming Soon */}
            <div className="group cursor-default">
              <div className="relative overflow-hidden rounded-2xl bg-card border shadow-sm opacity-90">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50">
                    <HardHat className="h-20 w-20 text-orange-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white mb-2">
                      <HardHat className="h-4 w-4" />
                      {language === "es" ? "Próximamente" : "Coming Soon"}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {language === "es" ? "Mitigación Ambiental" : "Environmental Mitigation"}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {language === "es" 
                      ? "Próximamente ofreceremos servicios de mitigación de asbesto y plomo. Remoción segura y certificada para proteger la salud de tu familia."
                      : "Coming soon: asbestos and lead mitigation services. Safe and certified removal to protect your family's health."}
                  </p>
                  <span className="inline-flex items-center text-orange-500 font-medium text-sm">
                    {language === "es" ? "En construcción" : "Under development"}
                    <Clock className="ml-2 h-4 w-4" />
                  </span>
                </div>
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
                    <p className="text-muted-foreground">{t.home.benefit1Desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.home.benefit2Title}</h3>
                    <p className="text-muted-foreground">{t.home.benefit2Desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.home.benefit3Title}</h3>
                    <p className="text-muted-foreground">{t.home.benefit3Desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.home.benefit4Title}</h3>
                    <p className="text-muted-foreground">{t.home.benefit4Desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/residential-service.jpg"
                      alt="Servicio residencial"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/commercial-service.jpg"
                      alt="Servicio comercial"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/team.jpg"
                      alt="Equipo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/service-truck.jpg"
                      alt="Vehículo de servicio"
                      fill
                      className="object-cover"
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
              'Juncos', 'Lajas', 'Lares', 'Las Marías', 'Las Piedras', 'Loíza', 'Luquillo', 'Manatí',
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
