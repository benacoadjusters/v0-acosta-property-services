""use client"

// Solar Panel Cleaning Service Page"

import Link from "next/link"
import Image from "next/image"
import { 
  ArrowRight, 
  CheckCircle2, 
  Phone,
  Sun,
  Home,
  Building2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export default function SolarPanelCleaningPage() {
  const { language, t } = useLanguage()

  const benefits = [
    {
      id: "exterior-cleaning",
      nameEs: "Limpieza exterior de paneles solares",
      nameEn: "Exterior solar panel cleaning"
    },
    {
      id: "dust-salt",
      nameEs: "Remoción de polvo y salitre",
      nameEn: "Dust and salt removal"
    },
    {
      id: "accumulated-dirt",
      nameEs: "Atención a suciedad acumulada",
      nameEn: "Attention to accumulated dirt"
    },
    {
      id: "residential-commercial",
      nameEs: "Servicio residencial y comercial",
      nameEn: "Residential and commercial service"
    },
    {
      id: "custom-quote",
      nameEs: "Cotización según cantidad y acceso",
      nameEn: "Quote based on quantity and access"
    }
  ]

  const customerTypes = [
    {
      id: "residential",
      icon: Home,
      nameEs: "Residencial",
      nameEn: "Residential",
      descriptionEs: "Limpieza de paneles solares para casas y propiedades residenciales.",
      descriptionEn: "Solar panel cleaning for houses and residential properties."
    },
    {
      id: "commercial",
      icon: Building2,
      nameEs: "Comercial",
      nameEn: "Commercial",
      descriptionEs: "Limpieza de paneles solares para negocios y propiedades comerciales.",
      descriptionEn: "Solar panel cleaning for businesses and commercial properties."
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-background to-amber-100/30 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-medium text-amber-700 mb-4">
                <Sun className="h-4 w-4" />
                <span>{language === "es" ? "Disponible" : "Available"}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                {language === "es" 
                  ? "Solar Panel Cleaning para paneles más limpios" 
                  : "Solar Panel Cleaning for cleaner panels"}
              </h1>
              <p className="text-xl text-muted-foreground text-pretty mb-8">
                {language === "es"
                  ? "Limpieza de paneles solares para remover polvo, salitre, suciedad y residuos acumulados."
                  : "Solar panel cleaning to remove dust, salt, dirt and accumulated residues."}
              </p>
              <p className="text-sm text-muted-foreground mb-8 italic">
                {language === "es"
                  ? "Nota: No prometemos aumento específico de producción eléctrica."
                  : "Note: We do not promise specific increase in electrical production."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
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
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/solar-panel-cleaning.png"
                  alt={language === "es" ? "Solar Panel Cleaning Profesional" : "Professional Solar Panel Cleaning"}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              {language === "es" ? "Lo que incluye el servicio" : "What the service includes"}
            </h2>
            <Card className="p-6 md:p-8">
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit.id} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-amber-600 mt-0.5 shrink-0" />
                    <span className="text-lg">
                      {language === "es" ? benefit.nameEs : benefit.nameEn}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-16 md:py-24 bg-amber-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "es" ? "Servicios para Todo Tipo de Propiedad" : "Services for All Property Types"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {customerTypes.map((type) => {
              const Icon = type.icon
              const name = language === "es" ? type.nameEs : type.nameEn
              const description = language === "es" ? type.descriptionEs : type.descriptionEn
              const isResidential = type.id === "residential"

              return (
                <Card key={type.id} className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${isResidential ? 'bg-amber-600 text-white' : 'bg-amber-100 text-amber-700'}`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{name}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{description}</p>
                  <Button asChild className={`w-full ${isResidential ? 'bg-amber-600 hover:bg-amber-700 text-white' : ''}`} variant={isResidential ? "default" : "outline"}>
                    <Link href="/contact">
                      {t.ui.getQuote}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-amber-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              {language === "es" 
                ? "¿Tus paneles solares necesitan limpieza?" 
                : "Do your solar panels need cleaning?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 text-pretty">
              {language === "es" 
                ? "Solicita una cotización según la cantidad de paneles, acceso y condición actual."
                : "Request a quote based on the number of panels, access and current condition."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-white/90 font-semibold">
                <Link href="/contact">
                  {t.ui.getQuote}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20">
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
