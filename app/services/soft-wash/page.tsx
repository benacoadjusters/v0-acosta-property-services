"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  Droplet, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Building2,
  Home,
  Phone,
  ShieldCheck,
  Leaf
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function SoftWashPage() {
  const { language, t } = useLanguage()

  const services = [
    {
      id: "residential-softwash",
      icon: Home,
      nameEs: "Soft Wash Residencial",
      nameEn: "Residential Soft Wash",
      descriptionEs: "Lavado suave para superficies delicadas de tu hogar. Ideal para siding, estuco, techos y superficies pintadas.",
      descriptionEn: "Gentle washing for delicate surfaces of your home. Ideal for siding, stucco, roofs and painted surfaces.",
      featuresEs: ["Siding y estuco", "Techos delicados", "Superficies pintadas", "Sin daños"],
      featuresEn: ["Siding and stucco", "Delicate roofs", "Painted surfaces", "No damage"]
    },
    {
      id: "commercial-softwash",
      icon: Building2,
      nameEs: "Soft Wash Comercial",
      nameEn: "Commercial Soft Wash",
      descriptionEs: "Servicios de lavado suave para edificios comerciales y propiedades de negocios.",
      descriptionEn: "Soft wash services for commercial buildings and business properties.",
      featuresEs: ["Fachadas comerciales", "Techos de negocios", "Áreas delicadas", "Mantenimiento programado"],
      featuresEn: ["Commercial facades", "Business roofs", "Delicate areas", "Scheduled maintenance"]
    }
  ]

  const benefits = language === "es" ? [
    { icon: Droplet, title: "Baja Presión", description: "Limpieza efectiva sin dañar superficies." },
    { icon: Leaf, title: "Biodegradable", description: "Productos seguros para tu jardín y ambiente." },
    { icon: ShieldCheck, title: "Sin Daños", description: "Perfecto para superficies delicadas." },
    { icon: Sparkles, title: "Resultados Duraderos", description: "Limpieza profunda que dura más tiempo." }
  ] : [
    { icon: Droplet, title: "Low Pressure", description: "Effective cleaning without damaging surfaces." },
    { icon: Leaf, title: "Biodegradable", description: "Products safe for your garden and environment." },
    { icon: ShieldCheck, title: "No Damage", description: "Perfect for delicate surfaces." },
    { icon: Sparkles, title: "Lasting Results", description: "Deep cleaning that lasts longer." }
  ]

  return (
    <>
      <section className="bg-gradient-to-br from-teal-50 via-background to-teal-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-700 mb-4">
                <Droplet className="h-4 w-4" />
                Soft Wash
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {language === "es" ? "Lavado suave para superficies delicadas" : "Gentle washing for delicate surfaces"}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8">
                {language === "es"
                  ? "Limpieza profesional con baja presión para siding, estuco, techos y superficies pintadas en Puerto Rico."
                  : "Professional low-pressure cleaning for siding, stucco, roofs and painted surfaces in Puerto Rico."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Link href="/contact">{t.ui.getQuote}<ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={`tel:${company.phoneClean}`}><Phone className="mr-2 h-5 w-5" />{t.ui.callNow}</a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/images/soft-wash.png" alt="Soft Wash" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Servicios de Soft Wash" : "Soft Wash Services"}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal-500/10">
                      <Icon className="h-7 w-7 text-teal-600" />
                    </div>
                    <CardTitle>{language === "es" ? service.nameEs : service.nameEn}</CardTitle>
                  </div>
                  <CardDescription className="mb-4">{language === "es" ? service.descriptionEs : service.descriptionEn}</CardDescription>
                  <ul className="space-y-2">
                    {(language === "es" ? service.featuresEs : service.featuresEn).map((f, i) => (
                      <li key={i} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-teal-600" /><span className="text-sm">{f}</span></li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-teal-50/50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <Card key={i} className="text-center p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-500/10 mx-auto mb-4">
                    <Icon className="h-7 w-7 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{language === "es" ? "¿Superficies delicadas que necesitan limpieza?" : "Delicate surfaces that need cleaning?"}</h2>
          <p className="text-lg text-white/80 mb-8">{language === "es" ? "Soft wash es la solución. Contáctanos." : "Soft wash is the solution. Contact us."}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-white/90">
              <Link href="/contact">{t.ui.getQuote}<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" className="bg-teal-700 hover:bg-teal-800 border border-white/20">
              <a href={`tel:${company.phoneClean}`}><Phone className="mr-2 h-5 w-5" />{company.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
