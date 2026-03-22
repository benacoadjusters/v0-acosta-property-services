// Gallery Data - Project Images
export const galleryItems = [
  {
    id: 1,
    title: "Control de Plagas Residencial",
    description: "Tratamiento completo interior y exterior para hogar familiar en San Juan",
    category: "residential",
    location: "San Juan, PR",
    image: "/images/residential-service.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Control de Plagas Comercial",
    description: "Programa integral de control de plagas para restaurante",
    category: "commercial",
    location: "Bayamón, PR",
    image: "/images/commercial-service.jpg",
    featured: true
  },
  {
    id: 3,
    title: "Tratamiento de Termitas",
    description: "Tratamiento completo y prevención de termitas en propiedad residencial",
    category: "termite",
    location: "Carolina, PR",
    image: "/images/termite-inspection.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Control de Cucarachas",
    description: "Eliminación efectiva de cucarachas en cocina comercial",
    category: "commercial",
    location: "Condado, PR",
    image: "/images/roach-treatment.jpg",
    featured: true
  },
  {
    id: 5,
    title: "Programa de Reducción de Mosquitos",
    description: "Tratamiento de patio y eliminación de criaderos",
    category: "mosquito",
    location: "Guaynabo, PR",
    image: "/images/mosquito-treatment.jpg",
    featured: true
  },
  {
    id: 6,
    title: "Control de Roedores",
    description: "Exclusión y monitoreo de roedores para almacén",
    category: "commercial",
    location: "Caguas, PR",
    image: "/images/rodent-control.jpg",
    featured: true
  },
  {
    id: 7,
    title: "Control de Hormigas",
    description: "Tratamiento especializado para eliminar colonias de hormigas",
    category: "residential",
    location: "Isla Verde, PR",
    image: "/images/ant-control.jpg",
    featured: true
  },
  {
    id: 8,
    title: "Resultado Final",
    description: "Cocina completamente libre de plagas después del tratamiento",
    category: "residential",
    location: "Ponce, PR",
    image: "/images/clean-kitchen.jpg",
    featured: true
  }
] as const

export const galleryCategories = [
  { id: "all", name: "Todos los Proyectos" },
  { id: "residential", name: "Residencial" },
  { id: "commercial", name: "Comercial" },
  { id: "termite", name: "Termitas" },
  { id: "mosquito", name: "Mosquitos" }
] as const

export type GalleryItem = (typeof galleryItems)[number]
export type GalleryCategory = (typeof galleryCategories)[number]
