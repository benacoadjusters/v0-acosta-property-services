"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  Sun, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Building2,
  Home,
  Phone,
  ShieldCheck,
  Zap,
  TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function SolarPanelCleaningPage() {
  const { language, t } = useLanguage()

  const services = [
    {
      id: "residential-solar",
      icon: Home,
      nameEs: "Paneles Residenciales",
      nameEn: "Residential Panels",
      descriptionEs: "Limpieza profesional de paneles solares para tu hogar. Maximiza la eficiencia de tu sistema solar.",
      descriptionEn: "Professional solar panel cleaning for your home. Maximize the efficiency of your solar system.",
      featuresEs: ["Limpieza sin rayas", "Inspección visual", "Reporte de condición", "Programación flexible"],
      featuresEn: ["Streak-free cleaning", "Visual inspection", "Condition report", "Flexible scheduling"]
    },
    {
      id: "commercial-solar",
      icon: Building2,
      nameEs: "Paneles Comerciales",
      nameEn: "Commercial Panels",
      descriptionEs: "Servicios de limpieza para instalaciones solares comerciales e industriales.",
      descriptionEn: "Cleaning services for commercial and industrial solar installations.",
      featuresEs: ["Grandes instalaciones", "Mantenimiento programado", "Equipos especializados", "Informes detallados"],
      featuresEn: ["Large installations", "Scheduled maintenance", "Specialized equipment", "Detailed reports"]
    }
  ]

  const benefits = language === "es" ? [
    { icon: Zap, title: "Mayor Eficiencia", description: "Paneles limpios generan hasta 25% más energía." },
    { icon: TrendingUp, title: "Mejor Rendimiento", description: "Maximiza tu inversión en energía solar." },
    { icon: ShieldCheck, title: "Sin Daños", description: "Técnicas seguras que protegen tus paneles." },
    { icon: Sparkles, title: "Aspecto Impecable", description: "Tu sistema solar luciendo como nuevo." }
  ] : [
    { icon: Zap, title: "Higher Efficiency", description: "Clean panels generate up to 25% more energy." },
    { icon: TrendingUp, title: "Better Performance", description: "Maximize your solar energy investment." },
    { icon: ShieldCheck, title: "No Damage", description: "Safe techniques that protect your panels." },
    { icon: Sparkles, title: "Spotless Look", description: "Your solar system looking like new." }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-amber-50 via-background to-amber-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-700 mb-4">
                <Sun className="h-4 w-4" />
                Solar Panel Cleaning
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {language === "es" ? "Paneles solares limpios, máxima eficiencia" : "Clean solar panels, maximum efficiency"}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8">
                {language === "es"
                  ? "Limpieza profesional de paneles solares para hogares y negocios en Puerto Rico. Aumenta la producción de energía."
                  : "Professional solar panel cleaning for homes and businesses in Puerto Rico. Increase energy production."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Link href="/contact">{t.ui.getQuote}<ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phoneClean}`}><Phone className="mr-2 h-5 w-5" />{t.ui.callNow}</a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/solar-panel-cleaning.png" alt="Solar Panel Cleaning" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Servicios de Solar Panel Cleaning" : "Solar Panel Cleaning Services"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10">
                      <Icon className="h-7 w-7 text-amber-600" />
                    </div>
                    <CardTitle>{language === "es" ? service.nameEs : service.nameEn}</CardTitle>
                  </div>
                  <CardDescription className="mb-4">{language === "es" ? service.descriptionEs : service.descriptionEn}</CardDescription>
                  <ul className="space-y-2">
                    {(language === "es" ? service.featuresEs : service.featuresEn).map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-amber-600" /><span className="text-sm">{f}</span></li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-amber-50/50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <Card key={i} className="text-center p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/10 mx-auto mb-4">
                    <Icon className="h-7 w-7 text-amber-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{language === "es" ? "¿Paneles solares sucios reduciendo tu energía?" : "Dirty solar panels reducing your energy?"}</h2>
          <p className="text-lg text-white/80 mb-8">{language === "es" ? "La limpieza regular maximiza tu inversión solar." : "Regular cleaning maximizes your solar investment."}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-white/90">
              <Link href="/contact">{t.ui.getQuote}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800 border border-white/20">
              <a href={`tel:${company.phoneClean}`}><Phone className="mr-2 h-5 w-5" />{company.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
