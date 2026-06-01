"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  Droplets, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Building2,
  Home,
  Phone,
  ShieldCheck,
  Sun,
  Wind
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function WindowCleaningPage() {
  const { language, t } = useLanguage()

  const services = [
    {
      id: "residential-windows",
      icon: Home,
      nameEs: "Ventanas Residenciales",
      nameEn: "Residential Windows",
      descriptionEs: "Limpieza profesional de ventanas para tu hogar. Cristales impecables que dejan entrar la luz natural.",
      descriptionEn: "Professional window cleaning for your home. Spotless glass that lets natural light in.",
      featuresEs: ["Interior y exterior", "Marcos y bordes", "Screens incluidos", "Sin marcas ni rayas"],
      featuresEn: ["Interior and exterior", "Frames and edges", "Screens included", "Streak-free finish"]
    },
    {
      id: "commercial-windows",
      icon: Building2,
      nameEs: "Ventanas Comerciales",
      nameEn: "Commercial Windows",
      descriptionEs: "Servicios de limpieza de ventanas para negocios, oficinas y edificios comerciales de cualquier altura.",
      descriptionEn: "Window cleaning services for businesses, offices and commercial buildings of any height.",
      featuresEs: ["Edificios de altura", "Storefronts", "Oficinas", "Mantenimiento programado"],
      featuresEn: ["High-rise buildings", "Storefronts", "Offices", "Scheduled maintenance"]
    }
  ]

  const benefits = language === "es" ? [
    { icon: Sparkles, title: "Cristales Impecables", description: "Sin marcas, sin rayas, solo brillo." },
    { icon: Sun, title: "Más Luz Natural", description: "Ventanas limpias que iluminan tu espacio." },
    { icon: ShieldCheck, title: "Protección", description: "Limpieza que extiende la vida de tus ventanas." },
    { icon: Wind, title: "Vista Clara", description: "Disfruta de vistas sin obstrucciones." }
  ] : [
    { icon: Sparkles, title: "Spotless Glass", description: "No marks, no streaks, just shine." },
    { icon: Sun, title: "More Natural Light", description: "Clean windows that brighten your space." },
    { icon: ShieldCheck, title: "Protection", description: "Cleaning that extends the life of your windows." },
    { icon: Wind, title: "Clear View", description: "Enjoy unobstructed views." }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-cyan-50 via-background to-cyan-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-700 mb-4">
                <Droplets className="h-4 w-4" />
                Window Cleaning
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {language === "es" ? "Ventanas cristalinas que transforman tu espacio" : "Crystal clear windows that transform your space"}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8">
                {language === "es"
                  ? "Limpieza profesional de ventanas para hogares y negocios en Puerto Rico. Cristales impecables, sin marcas ni rayas."
                  : "Professional window cleaning for homes and businesses in Puerto Rico. Spotless glass, streak-free finish."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  <Link href="/contact">{t.ui.getQuote}<ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phoneClean}`}><Phone className="mr-2 h-5 w-5" />{t.ui.callNow}</a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/window-cleaning.png" alt="Window Cleaning" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Servicios de Window Cleaning" : "Window Cleaning Services"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">
                      <Icon className="h-7 w-7 text-cyan-600" />
                    </div>
                    <CardTitle>{language === "es" ? service.nameEs : service.nameEn}</CardTitle>
                  </div>
                  <CardDescription className="mb-4">{language === "es" ? service.descriptionEs : service.descriptionEn}</CardDescription>
                  <ul className="space-y-2">
                    {(language === "es" ? service.featuresEs : service.featuresEn).map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-600" /><span className="text-sm">{f}</span></li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cyan-50/50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <Card key={i} className="text-center p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 mx-auto mb-4">
                    <Icon className="h-7 w-7 text-cyan-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{language === "es" ? "¿Listo para ventanas cristalinas?" : "Ready for crystal clear windows?"}</h2>
          <p className="text-lg text-white/80 mb-8">{language === "es" ? "Contáctanos para una cotización gratuita." : "Contact us for a free quote."}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-white/90">
              <Link href="/contact">{t.ui.getQuote}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" className="bg-cyan-700 hover:bg-cyan-800 border border-white/20">
              <a href={`tel:${company.phoneClean}`}><Phone className="mr-2 h-5 w-5" />{company.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
