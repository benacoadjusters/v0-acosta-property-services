// Gallery Data - Project Images (Active Services Only)
export const galleryItems = [
  // Control de Plagas
  {
    id: 1,
    title: "Control de Plagas Residencial",
    titleEn: "Residential Pest Control",
    description: "Tratamiento completo interior y exterior para hogar familiar",
    descriptionEn: "Complete interior and exterior treatment for family home",
    category: "pest-control",
    location: "San Juan, PR",
    image: "/images/hero-pest-control.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Control de Plagas Comercial",
    titleEn: "Commercial Pest Control",
    description: "Programa integral de control de plagas para negocio",
    descriptionEn: "Comprehensive pest control program for business",
    category: "pest-control",
    location: "Bayamón, PR",
    image: "/images/gallery/pest-commercial-1.jpg",
    featured: true
  },
  // Lavado a Presión
  {
    id: 7,
    title: "Lavado a Presión",
    titleEn: "Pressure Washing",
    description: "Limpieza de aceras y superficies exteriores",
    descriptionEn: "Sidewalk and exterior surface cleaning",
    category: "pressure-wash",
    location: "San Juan, PR",
    image: "/images/pressure-wash.png",
    featured: true
  },
  // Limpieza de Paneles Solares
  {
    id: 10,
    title: "Limpieza de Paneles Solares",
    titleEn: "Solar Panel Cleaning",
    description: "Remoción de polvo y suciedad en paneles solares",
    descriptionEn: "Dust and dirt removal from solar panels",
    category: "solar-panel",
    location: "Isla Verde, PR",
    image: "/images/solar-panel-cleaning.png",
    featured: true
  }
] as const

export const galleryCategories = [
  { id: "all", nameEs: "Todos", nameEn: "All" },
  { id: "pest-control", nameEs: "Control de Plagas", nameEn: "Pest Control" },
  { id: "pressure-wash", nameEs: "Lavado a Presión", nameEn: "Pressure Wash" },
  { id: "solar-panel", nameEs: "Paneles Solares", nameEn: "Solar Panels" }
] as const

export type GalleryItem = (typeof galleryItems)[number]
export type GalleryCategory = (typeof galleryCategories)[number]
