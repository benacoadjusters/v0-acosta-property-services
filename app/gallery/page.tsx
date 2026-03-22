"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"
import { galleryItems, galleryCategories } from "@/content/gallery"
import { cn } from "@/lib/utils"

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nuestro Trabajo</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Galería de Proyectos
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Vea ejemplos de nuestro trabajo en propiedades residenciales y comerciales en todo Puerto Rico. Desde control general de plagas hasta tratamientos especializados, entregamos resultados.
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
              Filtrar:
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
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-semibold text-background text-lg">{item.title}</h3>
                  <p className="text-sm text-background/80 mb-2">{item.description}</p>
                  <div className="flex items-center gap-1 text-sm text-background/70">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-card/90 backdrop-blur rounded-full text-xs font-medium capitalize">
                  {item.category === "residential" && "Residencial"}
                  {item.category === "commercial" && "Comercial"}
                  {item.category === "termite" && "Termitas"}
                  {item.category === "mosquito" && "Mosquitos"}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No se encontraron proyectos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Vea los Resultados por Sí Mismo
            </h2>
            <p className="text-muted-foreground mb-6">
              Estos proyectos representan solo una muestra de las propiedades que hemos protegido en Puerto Rico. Contáctenos para ver cómo podemos ayudarle con sus necesidades de control de plagas.
            </p>
            <Button asChild>
              <Link href="/contact">Obtener Cotización Gratis</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
