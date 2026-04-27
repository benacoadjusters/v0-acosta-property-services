// Gallery Data - Project Images
export const galleryItems = [
  // Control de Plagas
  {
    id: 1,
    title: "Control de Plagas Residencial",
    description: "Tratamiento completo interior y exterior para hogar familiar",
    category: "pest-control",
    location: "San Juan, PR",
    image: "/images/gallery/pest-residential-1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Control de Plagas Comercial",
    description: "Programa integral de control de plagas para restaurante",
    category: "pest-control",
    location: "Bayamón, PR",
    image: "/images/gallery/pest-commercial-1.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Tratamiento de Termitas",
    description: "Inspección y tratamiento completo de termitas",
    category: "pest-control",
    location: "Carolina, PR",
    image: "/images/gallery/pest-termite-1.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Fumigación Exterior",
    description: "Tratamiento perimetral para prevención de plagas",
    category: "pest-control",
    location: "Condado, PR",
    image: "/images/gallery/pest-exterior-1.jpg",
    featured: true
  },
  // Jardinería
  {
    id: 5,
    title: "Corte de Grama",
    description: "Corte y mantenimiento semanal de césped residencial",
    category: "landscaping",
    location: "Guaynabo, PR",
    image: "/images/gallery/landscaping-lawn-1.jpg",
    featured: true
  },
  {
    id: 6,
    title: "Poda de Árboles",
    description: "Poda profesional de árboles y arbustos",
    category: "landscaping",
    location: "Caguas, PR",
    image: "/images/gallery/landscaping-pruning-1.jpg",
    featured: true
  },
  {
    id: 7,
    title: "Diseño Paisajístico",
    description: "Diseño e instalación completa de jardín tropical",
    category: "landscaping",
    location: "Isla Verde, PR",
    image: "/images/gallery/landscaping-design-1.jpg",
    featured: true
  },
  {
    id: 8,
    title: "Mantenimiento Comercial",
    description: "Mantenimiento de áreas verdes para complejo comercial",
    category: "landscaping",
    location: "Ponce, PR",
    image: "/images/gallery/landscaping-commercial-1.jpg",
    featured: true
  }
] as const

export const galleryCategories = [
  { id: "all", name: "Todos los Proyectos" },
  { id: "pest-control", name: "Control de Plagas" },
  { id: "landscaping", name: "Jardinería" },
  { id: "residential", name: "Residencial" },
  { id: "commercial", name: "Comercial" }
] as const

export type GalleryItem = (typeof galleryItems)[number]
export type GalleryCategory = (typeof galleryCategories)[number]
