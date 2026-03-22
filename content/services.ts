// Services Data - Edit these values to customize your services
export const services = {
  // Main Service Categories
  categories: [
    {
      id: "pest-control",
      name: "Pest Control",
      shortDescription: "Complete pest elimination and prevention for homes and businesses.",
      description: "Our comprehensive pest control services protect your property from unwanted pests. From common household invaders to complex infestations, our certified technicians deliver effective, long-lasting solutions.",
      href: "/services/pest-control",
      icon: "bug",
      featured: true
    },
    {
      id: "termite-control",
      name: "Termite Control",
      shortDescription: "Protect your property from destructive termite damage.",
      description: "Termites cause billions in property damage annually. Our specialized termite treatments protect your investment with proven elimination and prevention methods.",
      href: "/services/pest-control",
      icon: "home",
      featured: true
    },
    {
      id: "rodent-control",
      name: "Rodent Control",
      shortDescription: "Effective rodent removal and exclusion services.",
      description: "Keep rats and mice out of your property with our comprehensive rodent control program including removal, exclusion, and ongoing monitoring.",
      href: "/services/pest-control",
      icon: "shield",
      featured: true
    },
    {
      id: "mosquito-control",
      name: "Mosquito Control",
      shortDescription: "Reclaim your outdoor spaces from mosquitoes.",
      description: "Enjoy your yard again with our mosquito reduction programs designed for Puerto Rico's tropical climate.",
      href: "/services/pest-control",
      icon: "spray",
      featured: false
    }
  ],
  
  // Service Types (Residential vs Commercial)
  serviceTypes: {
    residential: {
      title: "Residential Services",
      description: "Protect your home and family from pests with our residential pest control programs. We offer flexible scheduling, family-safe treatments, and satisfaction guaranteed.",
      benefits: [
        "Family and pet-safe treatments",
        "Flexible scheduling around your life",
        "Interior and exterior protection",
        "Preventive maintenance plans",
        "Free re-treatments if pests return"
      ],
      href: "/services/residential-pest-control"
    },
    commercial: {
      title: "Commercial Services",
      description: "Keep your business pest-free with customized commercial pest management programs. We understand the unique needs of businesses and provide discreet, effective service.",
      benefits: [
        "Industry-specific solutions",
        "Compliance documentation",
        "Flexible service schedules",
        "Discreet service vehicles",
        "24/7 emergency response"
      ],
      href: "/services/commercial-pest-control",
      industries: [
        "Restaurants & Food Service",
        "Hotels & Hospitality",
        "Healthcare Facilities",
        "Retail & Shopping Centers",
        "Offices & Commercial Buildings",
        "Warehouses & Distribution",
        "Schools & Educational Facilities",
        "Property Management"
      ]
    }
  },
  
  // Pest Control Specific Services
  pestControlServices: [
    {
      name: "General Pest Control",
      description: "Comprehensive treatment for common household pests including ants, cockroaches, spiders, and more.",
      pests: ["Ants", "Cockroaches", "Spiders", "Silverfish", "Earwigs"]
    },
    {
      name: "Termite Treatment",
      description: "Complete termite elimination and prevention including liquid treatments, baiting systems, and wood treatment.",
      pests: ["Subterranean Termites", "Drywood Termites", "Dampwood Termites"]
    },
    {
      name: "Rodent Control",
      description: "Removal, exclusion, and prevention services for rats and mice.",
      pests: ["Roof Rats", "Norway Rats", "House Mice"]
    },
    {
      name: "Mosquito Reduction",
      description: "Targeted treatments to reduce mosquito populations and breeding sites.",
      pests: ["Aedes Mosquitoes", "Culex Mosquitoes"]
    },
    {
      name: "Bed Bug Treatment",
      description: "Thorough bed bug elimination using heat treatment and targeted applications.",
      pests: ["Bed Bugs"]
    },
    {
      name: "Wildlife Control",
      description: "Humane removal and exclusion of wildlife including birds, bats, and small mammals.",
      pests: ["Birds", "Bats", "Iguanas"]
    }
  ]
} as const

export type Services = typeof services
