"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Filter, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { galleryItems } from "@/content/gallery"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

export default function GalleryPage() {
  const { language, t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const galleryCategories = [
    { id: "all", name: language === "es" ? "Todos" : "All" },
    { id: "pest-control", name: language === "es" ? "Control de Plagas" : "Pest Control" },
    { id: "landscaping", name: language === "es" ? "Jardinería" : "Landscaping" },
    { id: "cleaning", name: language === "es" ? "Limpieza" : "Cleaning" },
    { id: "window-cleaning", name: "Window Cleaning" },
    { id: "screen-cleaning", name: "Screen Cleaning" },
    { id: "christmas-lights", name: "Christmas Lights" },
    { id: "pressure-wash", name: "Pressure Wash" },
    { id: "soft-wash", name: "Soft Wash" },
    { id: "solar-panel-cleaning", name: "Solar Panel Cleaning" },
    { id: "residential", name: language === "es" ? "Residencial" : "Residential" },
    { id: "commercial", name: language === "es" ? "Comercial" : "Commercial" },
  ]

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  // Check if we have images for all active services
  const hasCleaningImages = galleryItems.some(item => item.category === "cleaning")
  const hasWindowCleaningImages = galleryItems.some(item => item.category === "window-cleaning")
  const hasPressureWashImages = galleryItems.some(item => item.category === "pressure-wash")
  const showComingSoonNotice = !hasCleaningImages || !hasWindowCleaningImages || !hasPressureWashImages

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, { es: string; en: string }> = {
      "pest-control": { es: "Control de Plagas", en: "Pest Control" },
      "landscaping": { es: "Jardinería", en: "Landscaping" },
      "cleaning": { es: "Limpieza", en: "Cleaning" },
      "window-cleaning": { es: "Window Cleaning", en: "Window Cleaning" },
      "screen-cleaning": { es: "Screen Cleaning", en: "Screen Cleaning" },
      "christmas-lights": { es: "Christmas Lights", en: "Christmas Lights" },
      "pressure-wash": { es: "Pressure Wash", en: "Pressure Wash" },
      "soft-wash": { es: "Soft Wash", en: "Soft Wash" },
      "solar-panel-cleaning": { es: "Solar Panel Cleaning", en: "Solar Panel Cleaning" },
      "residential": { es: "Residencial", en: "Residential" },
      "commercial": { es: "Comercial", en: "Commercial" },
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
                ? "Mira ejemplos visuales de los 9 servicios activos que ofrecemos para propiedades en Puerto Rico."
                : "See visual examples of the 9 active services we offer for properties in Puerto Rico."}
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
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-4 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-semibold text-background text-lg">{item.title}</h3>
                  <p className="text-sm text-background/80 mb-2">{item.description}</p>
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

      {/* Coming Soon Notice - only show if missing images for some services */}
      {showComingSoonNotice && (
        <section className="py-12 bg-secondary/50">
          <div className="container mx-auto px-4">
            <Card className="max-w-xl mx-auto">
              <CardContent className="p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {language === "es" ? "Más fotos próximamente" : "More photos coming soon"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {language === "es"
                    ? "Estamos actualizando la galería para incluir trabajos de todos nuestros 9 servicios activos."
                    : "We are updating the gallery to include work from all our 9 active services."}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Info Section - Updated CTA */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === "es" ? "¿Quieres ver tu propiedad lista y funcionando?" : "Want to see your property ready and working?"}
            </h2>
            <p className="text-muted-foreground mb-6">
              {language === "es"
                ? "Cotiza el servicio que necesitas y coordinamos la atención según tu propiedad."
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
