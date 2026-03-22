// Gallery Data - Project Images
export const galleryItems = [
  {
    id: 1,
    title: "Residential Pest Control",
    description: "Complete interior and exterior treatment for a family home in San Juan",
    category: "residential",
    location: "San Juan, PR",
    featured: true
  },
  {
    id: 2,
    title: "Restaurant Pest Management",
    description: "Comprehensive commercial pest control program for a busy restaurant",
    category: "commercial",
    location: "Bayamón, PR",
    featured: true
  },
  {
    id: 3,
    title: "Termite Treatment",
    description: "Full termite treatment and prevention for a residential property",
    category: "termite",
    location: "Carolina, PR",
    featured: true
  },
  {
    id: 4,
    title: "Hotel Pest Control",
    description: "Ongoing pest management program for a boutique hotel",
    category: "commercial",
    location: "Condado, PR",
    featured: true
  },
  {
    id: 5,
    title: "Mosquito Reduction Program",
    description: "Yard treatment and breeding site elimination",
    category: "mosquito",
    location: "Guaynabo, PR",
    featured: false
  },
  {
    id: 6,
    title: "Warehouse Rodent Control",
    description: "Rodent exclusion and monitoring for distribution facility",
    category: "commercial",
    location: "Caguas, PR",
    featured: false
  },
  {
    id: 7,
    title: "Condo Complex Treatment",
    description: "Multi-unit residential pest control program",
    category: "residential",
    location: "Isla Verde, PR",
    featured: true
  },
  {
    id: 8,
    title: "Healthcare Facility",
    description: "Sensitive environment pest management for medical office",
    category: "commercial",
    location: "Ponce, PR",
    featured: false
  }
] as const

export const galleryCategories = [
  { id: "all", name: "All Projects" },
  { id: "residential", name: "Residential" },
  { id: "commercial", name: "Commercial" },
  { id: "termite", name: "Termite" },
  { id: "mosquito", name: "Mosquito" }
] as const

export type GalleryItem = (typeof galleryItems)[number]
export type GalleryCategory = (typeof galleryCategories)[number]
