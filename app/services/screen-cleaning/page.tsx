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
  Wind,
  Eye,
  ShieldCheck,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function ScreenCleaningPage() {
  const { language, t } = useLanguage()

  const benefits = [
    {
      icon: Wind,
      titleEs: "Mejor Ventilación",
      titleEn: "Better Ventilation",
      descEs: "Screens limpios permiten mejor flujo de aire",
      descEn: "Clean screens allow better airflow"
    },
    {
      icon: ShieldCheck,
      titleEs: "Protección Duradera",
      titleEn: "Lasting Protection",
      descEs: "Limpieza que mantiene la integridad del screen",
      descEn: "Cleaning that maintains screen integrity"
    },
    {
      icon: Sparkles,
      titleEs: "Sin Polvo ni Salitre",
      titleEn: "No Dust or Salt",
      descEs: "Removemos acumulación de polvo, salitre y suciedad",
      descEn: "We remove dust, salt and dirt buildup"
    },
    {
      icon: Calendar,
      titleEs: "Servicio Regular",
      titleEn: "Regular Service",
      descEs: "Mantenimiento programado para screens siempre limpios",
      descEn: "Scheduled maintenance for always clean screens"
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Grid3X3 className="h-4 w-4" />
                <span>Screen Cleaning</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {language === "es" 
                  ? "Limpieza de Screens Profesional" 
                  : "Professional Screen Cleaning"}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "es"
                  ? "Screens y mallas limpias para mejor ventilación y visibilidad en hogares y negocios de Puerto Rico."
                  : "Clean screens and mesh for better ventilation and visibility in Puerto Rico homes and businesses."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    {t.common.getQuote}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {t.common.callNow}
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/screen-cleaning.png"
                  alt="Screen Cleaning"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Beneficios del Servicio" : "Service Benefits"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">
                    {language === "es" ? benefit.titleEs : benefit.titleEn}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {language === "es" ? benefit.descEs : benefit.descEn}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === "es" 
              ? "¿Listo para screens impecables?" 
              : "Ready for spotless screens?"}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {language === "es"
              ? "Contáctanos hoy para una cotización gratuita de limpieza de screens."
              : "Contact us today for a free screen cleaning quote."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                {t.common.getQuote}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20">
              <a href={`tel:${company.phone}`}>
                <Phone className="mr-2 h-5 w-5" />
                {t.common.callNow}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
