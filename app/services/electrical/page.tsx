"use client"

import Link from "next/link"
import { 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Clock,
  Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { company } from "@/content/company"

export const metadata = {
  title: "Electricidad Próximamente | Acosta Property Services",
  description: "Servicio de electricidad próximamente disponible para propiedades en Puerto Rico."
}

export default function ElectricalPage() {
  const { language, t } = useLanguage()

  const plannedServices = [
    {
      nameEs: "Paneles eléctricos",
      nameEn: "Electrical panels"
    },
    {
      nameEs: "Breakers",
      nameEn: "Breakers"
    },
    {
      nameEs: "Tomacorrientes y switches",
      nameEn: "Outlets and switches"
    },
    {
      nameEs: "Iluminación interior y exterior",
      nameEn: "Interior and exterior lighting"
    },
    {
      nameEs: "Abanicos de techo",
      nameEn: "Ceiling fans"
    }
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-yellow-50 via-background to-yellow-100/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-500/10 px-4 py-1.5 text-sm font-medium text-yellow-700 mb-6">
              <Clock className="h-4 w-4" />
              <span>{language === "es" ? "Próximamente" : "Coming Soon"}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {language === "es" ? "Electricidad" : "Electrical"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty mb-8">
              {language === "es"
                ? "Servicio próximamente disponible para paneles, breakers, tomacorrientes, iluminación y abanicos de techo."
                : "Service coming soon for panels, breakers, outlets, lighting and ceiling fans."}
            </p>
          </div>
        </div>
      </section>

      {/* Planned Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {language === "es" ? "Servicios planificados" : "Planned services"}
              </h2>
              <p className="text-muted-foreground">
                {language === "es"
                  ? "Estamos preparando estos servicios eléctricos para ofrecerlos próximamente."
                  : "We are preparing these electrical services to offer them soon."}
              </p>
            </div>
            
            <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/10">
                  <Zap className="h-7 w-7 text-yellow-600" />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-500 px-2.5 py-0.5 text-xs font-medium text-white mb-1">
                    {language === "es" ? "En desarrollo" : "In development"}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    {language === "es" ? "Servicios Eléctricos" : "Electrical Services"}
                  </h3>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plannedServices.map((service, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-yellow-600 shrink-0" />
                    <span className="text-muted-foreground">
                      {language === "es" ? service.nameEs : service.nameEn}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground italic mb-6">
                {language === "es"
                  ? "Este servicio aún no está disponible. Te invitamos a consultar la disponibilidad."
                  : "This service is not yet available. We invite you to check availability."}
              </p>

              <Button asChild size="lg" variant="outline" className="w-full">
                <Link href="/contact">
                  {language === "es" ? "Consultar Disponibilidad" : "Check Availability"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Active Services */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {language === "es" 
                ? "Mientras tanto, explora nuestros servicios activos" 
                : "Meanwhile, explore our active services"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {language === "es"
                ? "Actualmente ofrecemos control de plagas, jardinería, limpieza, window cleaning, screen cleaning, Christmas lights, pressure wash, soft wash y solar panel cleaning."
                : "We currently offer pest control, landscaping, cleaning, window cleaning, screen cleaning, Christmas lights, pressure wash, soft wash and solar panel cleaning."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/services">
                  {language === "es" ? "Ver Todos los Servicios" : "View All Services"}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
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
