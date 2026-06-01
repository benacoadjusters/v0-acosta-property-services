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
  Zap,
  ShieldCheck,
  Calendar
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function SolarPanelCleaningPage() {
  const { language, t } = useLanguage()

  const benefits = [
    {
      icon: Zap,
      titleEs: "Mayor Eficiencia",
      titleEn: "Greater Efficiency",
      descEs: "Paneles limpios generan hasta 25% más energía",
      descEn: "Clean panels generate up to 25% more energy"
    },
    {
      icon: ShieldCheck,
      titleEs: "Cuidado Especializado",
      titleEn: "Specialized Care",
      descEs: "Técnicas seguras que no dañan los paneles",
      descEn: "Safe techniques that don't damage panels"
    },
    {
      icon: Sparkles,
      titleEs: "Sin Residuos",
      titleEn: "No Residue",
      descEs: "Limpieza que no deja manchas ni marcas",
      descEn: "Cleaning that leaves no spots or marks"
    },
    {
      icon: Calendar,
      titleEs: "Mantenimiento Regular",
      titleEn: "Regular Maintenance",
      descEs: "Programación para máximo rendimiento continuo",
      descEn: "Scheduling for maximum continuous performance"
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
                <Sun className="h-4 w-4" />
                <span>Solar Panel Cleaning</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {language === "es" 
                  ? "Limpieza de Paneles Solares" 
                  : "Solar Panel Cleaning"}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {language === "es"
                  ? "Maximiza la eficiencia de tus paneles solares con limpieza profesional. Más energía, más ahorro en Puerto Rico."
                  : "Maximize your solar panel efficiency with professional cleaning. More energy, more savings in Puerto Rico."}
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
                  src="/images/solar-panel-cleaning.png"
                  alt="Solar Panel Cleaning"
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
              ? "¿Listo para paneles más eficientes?" 
              : "Ready for more efficient panels?"}
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            {language === "es"
              ? "Contáctanos hoy para una cotización gratuita de limpieza de paneles solares."
              : "Contact us today for a free solar panel cleaning quote."}
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
