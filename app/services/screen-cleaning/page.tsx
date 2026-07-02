"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  Grid3X3, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Building2,
  Home,
  Phone,
  ShieldCheck,
  Wind
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function ScreenCleaningPage() {
  const { language, t } = useLanguage()

  const services = [
    {
      id: "residential-screens",
      icon: Home,
      nameEs: "Screens Residenciales",
      nameEn: "Residential Screens",
      descriptionEs: "Limpieza de screens y mallas para ventanas de tu hogar. Removemos polvo, salitre y suciedad acumulada.",
      descriptionEn: "Screen and mesh cleaning for your home windows. We remove dust, salt buildup and accumulated dirt.",
      featuresEs: ["Limpieza profunda", "Remoción de salitre", "Inspección de daños", "Reinstalación incluida"],
      featuresEn: ["Deep cleaning", "Salt removal", "Damage inspection", "Reinstallation included"]
    },
    {
      id: "commercial-screens",
      icon: Building2,
      nameEs: "Screens Comerciales",
      nameEn: "Commercial Screens",
      descriptionEs: "Servicios de limpieza de screens para negocios y edificios comerciales.",
      descriptionEn: "Screen cleaning services for businesses and commercial buildings.",
      featuresEs: ["Grandes cantidades", "Mantenimiento programado", "Servicio rápido", "Presupuesto comercial"],
      featuresEn: ["Large quantities", "Scheduled maintenance", "Fast service", "Commercial pricing"]
    }
  ]

  const benefits = language === "es" ? [
    { icon: Wind, title: "Mejor Ventilación", description: "Screens limpios permiten mejor flujo de aire." },
    { icon: Sparkles, title: "Vista Clara", description: "Sin polvo ni salitre bloqueando tu vista." },
    { icon: ShieldCheck, title: "Protección", description: "Limpieza que extiende la vida de tus screens." },
    { icon: CheckCircle2, title: "Aspecto Renovado", description: "Screens que lucen como nuevos." }
  ] : [
    { icon: Wind, title: "Better Ventilation", description: "Clean screens allow better airflow." },
    { icon: Sparkles, title: "Clear View", description: "No dust or salt blocking your view." },
    { icon: ShieldCheck, title: "Protection", description: "Cleaning that extends the life of your screens." },
    { icon: CheckCircle2, title: "Renewed Look", description: "Screens that look like new." }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 via-background to-slate-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-500/10 px-4 py-1.5 text-sm font-medium text-slate-700 mb-4">
                <Grid3X3 className="h-4 w-4" />
                {language === "es" ? "Limpieza de mallas" : "Screen Cleaning"}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {language === "es" ? "Limpieza de mallas para ventanas" : "Clean screens for better ventilation and view"}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8">
                {language === "es"
                  ? "Limpieza profesional de screens y mallas. Removemos polvo, salitre y suciedad acumulada en Puerto Rico."
                  : "Professional screen and mesh cleaning. We remove dust, salt buildup and accumulated dirt in Puerto Rico."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-slate-700 hover:bg-slate-800 text-white">
                  <Link href="/contact">{t.ui.getQuote}<ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phoneClean}`}><Phone className="mr-2 h-5 w-5" />{t.ui.callNow}</a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/screen-cleaning.png" alt="Screen Cleaning" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Servicios de Screen Cleaning" : "Screen Cleaning Services"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-500/10">
                      <Icon className="h-7 w-7 text-slate-600" />
                    </div>
                    <CardTitle>{language === "es" ? service.nameEs : service.nameEn}</CardTitle>
                  </div>
                  <CardDescription className="mb-4">{language === "es" ? service.descriptionEs : service.descriptionEn}</CardDescription>
                  <ul className="space-y-2">
                    {(language === "es" ? service.featuresEs : service.featuresEn).map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-slate-600" /><span className="text-sm">{f}</span></li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <Card key={i} className="text-center p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-500/10 mx-auto mb-4">
                    <Icon className="h-7 w-7 text-slate-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{language === "es" ? "¿Screens sucios bloqueando tu vista?" : "Dirty screens blocking your view?"}</h2>
          <p className="text-lg text-white/80 mb-8">{language === "es" ? "Contáctanos para una cotización gratuita." : "Contact us for a free quote."}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-slate-700 hover:bg-white/90">
              <Link href="/contact">{t.ui.getQuote}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-900 border border-white/20">
              <a href={`tel:${company.phoneClean}`}><Phone className="mr-2 h-5 w-5" />{company.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
