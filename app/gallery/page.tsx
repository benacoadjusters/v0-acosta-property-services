"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { galleryItems } from "@/content/gallery"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export default function GalleryPage() {
  const { language, t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const galleryCategories = [
    { id: "all", name: language === "es" ? "Todos" : "All" },
    { id: "pest-control", name: language === "es" ? "Control de Plagas" : "Pest Control" },
    { id: "pressure-wash", name: language === "es" ? "Lavado a Presión" : "Pressure Wash" },
    { id: "solar-panel", name: language === "es" ? "Paneles Solares" : "Solar Panels" },
  ]

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, { es: string; en: string }> = {
      "pest-control": { es: "Control de Plagas", en: "Pest Control" },
      "pressure-wash": { es: "Lavado a Presión", en: "Pressure Wash" },
      "solar-panel": { es: "Paneles Solares", en: "Solar Panels" },
    }
    return labels[category]?.[language] || category
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {language === "es" ? "Galería" : "Gallery"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              {language === "es" ? "Galería de servicios" : "Services Gallery"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              {language === "es" 
                ? "Mira ejemplos visuales de nuestros servicios activos: control de plagas, lavado a presión y limpieza de paneles solares."
                : "See visual examples of our active services: pest control, pressure wash and solar panel cleaning."}
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <span className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
              <Filter className="h-4 w-4" />
              {language === "es" ? "Filtrar:" : "Filter:"}
            </span>
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="shrink-0"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-secondary cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={language === "es" ? item.title : (item.titleEn || item.title)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-4 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-semibold text-background text-lg">
                    {language === "es" ? item.title : (item.titleEn || item.title)}
                  </h3>
                  <p className="text-sm text-background/80 mb-2">
                    {language === "es" ? item.description : (item.descriptionEn || item.description)}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-background/70">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-3 py-1 bg-card/90 backdrop-blur rounded-full text-xs font-medium capitalize">
                  {getCategoryLabel(item.category)}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {language === "es" 
                  ? "No se encontraron proyectos en esta categoría." 
                  : "No projects found in this category."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "es" ? "¿Quieres ver tu propiedad asi?" : "Want to see your property like this?"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {language === "es"
                ? "Cotiza el servicio que necesitas y coordinamos la atencion segun tu propiedad."
                : "Quote the service you need and we'll coordinate attention according to your property."}
            </p>
            <Button asChild>
              <Link href="/contact">{t.ui.getQuote}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
