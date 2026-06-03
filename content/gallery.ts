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
    location: "Bayamon, PR",
    image: "/images/gallery/pest-commercial-1.jpg",
    featured: true
  },
  // Jardineria
  {
    id: 3,
    title: "Mantenimiento de Jardin",
    titleEn: "Garden Maintenance",
    description: "Corte de grama y mantenimiento de areas verdes",
    descriptionEn: "Lawn mowing and green area maintenance",
    category: "landscaping",
    location: "Guaynabo, PR",
    image: "/images/hero-landscaping.jpg",
    featured: true
  },
  {
    id: 4,
    title: "Poda de Arboles",
    titleEn: "Tree Pruning",
    description: "Poda profesional de arboles y arbustos",
    descriptionEn: "Professional tree and shrub pruning",
    category: "landscaping",
    location: "Caguas, PR",
    image: "/images/landscaping/pruning.jpg",
    featured: true
  },
  // Window Cleaning
  {
    id: 5,
    title: "Limpieza de Ventanas",
    titleEn: "Window Cleaning",
    description: "Limpieza de ventanas y cristales residenciales",
    descriptionEn: "Residential window and glass cleaning",
    category: "window-cleaning",
    location: "Condado, PR",
    image: "/images/window-cleaning.png",
    featured: true
  },
  // Screen Cleaning
  {
    id: 6,
    title: "Limpieza de Mallas",
    titleEn: "Screen Cleaning",
    description: "Remocion de polvo y salitre en mallas de ventanas",
    descriptionEn: "Dust and salt removal from window screens",
    category: "screen-cleaning",
    location: "Carolina, PR",
    image: "/images/services/screen-cleaning-new.png",
    featured: true
  },
  // Pressure Wash
  {
    id: 7,
    title: "Lavado a Presion",
    titleEn: "Pressure Washing",
    description: "Limpieza de aceras y superficies exteriores",
    descriptionEn: "Sidewalk and exterior surface cleaning",
    category: "pressure-wash",
    location: "San Juan, PR",
    image: "/images/pressure-wash.png",
    featured: true
  },
  // Soft Wash
  {
    id: 8,
    title: "Lavado Suave",
    titleEn: "Soft Washing",
    description: "Limpieza suave de fachadas y superficies delicadas",
    descriptionEn: "Gentle cleaning of facades and delicate surfaces",
    category: "soft-wash",
    location: "Dorado, PR",
    image: "/images/services/soft-wash-1.png",
    featured: true
  },
  {
    id: 9,
    title: "Lavado Suave Residencial",
    titleEn: "Residential Soft Wash",
    description: "Tratamiento de paredes exteriores con cuidado",
    descriptionEn: "Exterior wall treatment with care",
    category: "soft-wash",
    location: "Guaynabo, PR",
    image: "/images/services/soft-wash-2.png",
    featured: true
  },
  // Solar Panel Cleaning
  {
    id: 10,
    title: "Limpieza de Paneles Solares",
    titleEn: "Solar Panel Cleaning",
    description: "Remocion de polvo y suciedad en paneles solares",
    descriptionEn: "Dust and dirt removal from solar panels",
    category: "solar-panel",
    location: "Isla Verde, PR",
    image: "/images/solar-panel-cleaning.png",
    featured: true
  },
  // Christmas Lights
  {
    id: 11,
    title: "Luces Navidenas Residenciales",
    titleEn: "Residential Christmas Lights",
    description: "Instalacion de luces navidenas para hogares",
    descriptionEn: "Christmas lights installation for homes",
    category: "christmas-lights",
    location: "Condado, PR",
    image: "/images/christmas-lights.png",
    featured: true
  },
  // Cleaning
  {
    id: 12,
    title: "Limpieza Residencial",
    titleEn: "Residential Cleaning",
    description: "Limpieza profunda de espacios residenciales",
    descriptionEn: "Deep cleaning of residential spaces",
    category: "cleaning",
    location: "San Juan, PR",
    image: "/images/hero-cleaning.jpg",
    featured: true
  }
] as const

export const galleryCategories = [
  { id: "all", nameEs: "Todos", nameEn: "All" },
  { id: "pest-control", nameEs: "Control de Plagas", nameEn: "Pest Control" },
  { id: "landscaping", nameEs: "Jardineria", nameEn: "Landscaping" },
  { id: "window-cleaning", nameEs: "Limpieza de Ventanas", nameEn: "Window Cleaning" },
  { id: "screen-cleaning", nameEs: "Limpieza de Mallas", nameEn: "Screen Cleaning" },
  { id: "pressure-wash", nameEs: "Lavado a Presion", nameEn: "Pressure Wash" },
  { id: "soft-wash", nameEs: "Lavado Suave", nameEn: "Soft Wash" },
  { id: "solar-panel", nameEs: "Paneles Solares", nameEn: "Solar Panels" },
  { id: "christmas-lights", nameEs: "Luces Navidenas", nameEn: "Christmas Lights" },
  { id: "cleaning", nameEs: "Limpieza", nameEn: "Cleaning" }
] as const

export type GalleryItem = (typeof galleryItems)[number]
export type GalleryCategory = (typeof galleryCategories)[number]
