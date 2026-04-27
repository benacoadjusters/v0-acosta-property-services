// Gallery Data - Project Images
export const galleryItems = [
  // Control de Plagas
  {
    id: 1,
    title: "Control de Plagas Residencial",
    description: "Tratamiento completo interior y exterior para hogar familiar",
    category: "pest-control",
    location: "San Juan, PR",
    image: "/images/residential-service.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Control de Plagas Comercial",
    description: "Programa integral de control de plagas para restaurante",
    category: "pest-control",
    location: "Bayamón, PR",
    image: "/images/commercial-service.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Tratamiento de Termitas",
    description: "Tratamiento completo y prevención de termitas",
    category: "pest-control",
    location: "Carolina, PR",
    image: "/images/hero-pest-control.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Control de Cucarachas",
    description: "Eliminación efectiva de cucarachas en cocina comercial",
    category: "commercial",
    location: "Condado, PR",
    image: "/images/team.jpg",
    featured: true
  },
  // Jardinería
  {
    id: 5,
    title: "Mantenimiento de Jardín",
    description: "Corte de grama y mantenimiento semanal de jardín residencial",
    category: "landscaping",
    location: "Guaynabo, PR",
    image: "/images/hero-landscaping.jpg",
    featured: true
  },
  {
    id: 6,
    title: "Poda de Árboles",
    description: "Poda profesional de árboles y arbustos para propiedad comercial",
    category: "landscaping",
    location: "Caguas, PR",
    image: "/images/hero-landscaping.jpg",
    featured: true
  },
  {
    id: 7,
    title: "Diseño Paisajístico",
    description: "Diseño e instalación completa de jardín para residencia",
    category: "landscaping",
    location: "Isla Verde, PR",
    image: "/images/hero-landscaping.jpg",
    featured: true
  },
  {
    id: 8,
    title: "Mantenimiento Comercial",
    description: "Mantenimiento de áreas verdes para complejo comercial",
    category: "commercial",
    location: "Ponce, PR",
    image: "/images/commercial-service.jpg",
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
