// Services Data - Servicios reales de Acosta Property Services
export const services = {
  // Main Service Methods
  methods: [
    {
      id: "fumigation",
      nameEs: "Fumigación",
      nameEn: "Fumigation",
      shortDescEs: "Tratamiento químico profesional para eliminar plagas de manera efectiva.",
      shortDescEn: "Professional chemical treatment to effectively eliminate pests.",
      descriptionEs: "Nuestro servicio de fumigación utiliza productos de última generación, seguros para su familia y mascotas. Aplicamos tratamientos en interiores y exteriores para garantizar la eliminación completa de plagas.",
      descriptionEn: "Our fumigation service uses state-of-the-art products, safe for your family and pets. We apply treatments indoors and outdoors to ensure complete pest elimination.",
      icon: "spray",
      image: "/images/mosquito-treatment.jpg",
      benefits: {
        es: [
          "Eliminación rápida y efectiva",
          "Productos seguros para familia y mascotas",
          "Cobertura interior y exterior",
          "Efecto residual de protección",
          "Garantía de servicio"
        ],
        en: [
          "Fast and effective elimination",
          "Products safe for family and pets",
          "Indoor and outdoor coverage",
          "Residual protection effect",
          "Service guarantee"
        ]
      }
    },
    {
      id: "traps",
      nameEs: "Exterminación por Trampas",
      nameEn: "Trap Extermination",
      shortDescEs: "Sistema de trampas profesionales para roedores y plagas específicas.",
      shortDescEn: "Professional trap systems for rodents and specific pests.",
      descriptionEs: "Utilizamos sistemas de trampas profesionales para el control de roedores y otras plagas. Este método es ideal para áreas donde se prefiere evitar productos químicos o como complemento a la fumigación.",
      descriptionEn: "We use professional trap systems for rodent and pest control. This method is ideal for areas where chemical products should be avoided or as a complement to fumigation.",
      icon: "target",
      image: "/images/rodent-control.jpg",
      benefits: {
        es: [
          "Sin productos químicos",
          "Ideal para áreas sensibles",
          "Monitoreo continuo",
          "Captura y remoción segura",
          "Prevención de reinfestación"
        ],
        en: [
          "No chemical products",
          "Ideal for sensitive areas",
          "Continuous monitoring",
          "Safe capture and removal",
          "Reinfestation prevention"
        ]
      }
    }
  ],

  // Pests We Control
  pests: [
    {
      id: "cockroaches",
      nameEs: "Cucarachas",
      nameEn: "Cockroaches",
      icon: "bug",
      methods: ["fumigation"]
    },
    {
      id: "ants",
      nameEs: "Hormigas",
      nameEn: "Ants",
      icon: "bug",
      methods: ["fumigation"]
    },
    {
      id: "termites",
      nameEs: "Comején / Termitas",
      nameEn: "Termites",
      icon: "bug",
      methods: ["fumigation"]
    },
    {
      id: "rodents",
      nameEs: "Roedores (Ratas y Ratones)",
      nameEn: "Rodents (Rats and Mice)",
      icon: "rat",
      methods: ["traps", "fumigation"]
    },
    {
      id: "mosquitoes",
      nameEs: "Mosquitos",
      nameEn: "Mosquitoes",
      icon: "bug",
      methods: ["fumigation"]
    },
    {
      id: "spiders",
      nameEs: "Arañas",
      nameEn: "Spiders",
      icon: "bug",
      methods: ["fumigation"]
    },
    {
      id: "bedbugs",
      nameEs: "Chinches",
      nameEn: "Bed Bugs",
      icon: "bug",
      methods: ["fumigation"]
    },
    {
      id: "flies",
      nameEs: "Moscas",
      nameEn: "Flies",
      icon: "bug",
      methods: ["fumigation", "traps"]
    },
    {
      id: "wasps",
      nameEs: "Avispas y Abejas",
      nameEn: "Wasps and Bees",
      icon: "bug",
      methods: ["fumigation"]
    },
    {
      id: "scorpions",
      nameEs: "Alacranes",
      nameEn: "Scorpions",
      icon: "bug",
      methods: ["fumigation"]
    }
  ],

  // Service Types (Residential vs Commercial)
  serviceTypes: {
    residential: {
      titleEs: "Servicio Residencial",
      titleEn: "Residential Service",
      descriptionEs: "Protegemos tu hogar y familia con tratamientos seguros y efectivos. Ofrecemos planes de mantenimiento para mantener tu casa libre de plagas todo el año.",
      descriptionEn: "We protect your home and family with safe and effective treatments. We offer maintenance plans to keep your home pest-free all year round.",
      image: "/images/residential-service.jpg",
      benefits: {
        es: [
          "Tratamientos seguros para familia y mascotas",
          "Horarios flexibles",
          "Protección interior y exterior",
          "Planes de mantenimiento mensual",
          "Re-tratamiento gratis si regresan las plagas"
        ],
        en: [
          "Treatments safe for family and pets",
          "Flexible scheduling",
          "Indoor and outdoor protection",
          "Monthly maintenance plans",
          "Free re-treatment if pests return"
        ]
      }
    },
    commercial: {
      titleEs: "Servicio Comercial",
      titleEn: "Commercial Service",
      descriptionEs: "Mantenemos tu negocio libre de plagas cumpliendo con todas las regulaciones sanitarias. Servicio discreto y profesional para no interrumpir tus operaciones.",
      descriptionEn: "We keep your business pest-free while complying with all health regulations. Discreet and professional service to not interrupt your operations.",
      image: "/images/commercial-service.jpg",
      benefits: {
        es: [
          "Cumplimiento con regulaciones sanitarias",
          "Documentación para inspecciones",
          "Horarios fuera de operación",
          "Servicio discreto",
          "Respuesta de emergencia 24/7"
        ],
        en: [
          "Health regulation compliance",
          "Documentation for inspections",
          "After-hours service",
          "Discreet service",
          "24/7 emergency response"
        ]
      },
      industries: {
        es: [
          "Restaurantes y Servicios de Comida",
          "Hoteles y Hospedajes",
          "Facilidades de Salud",
          "Tiendas y Centros Comerciales",
          "Oficinas y Edificios Comerciales",
          "Almacenes y Distribución",
          "Escuelas e Instituciones Educativas",
          "Administración de Propiedades"
        ],
        en: [
          "Restaurants and Food Service",
          "Hotels and Lodging",
          "Healthcare Facilities",
          "Retail and Shopping Centers",
          "Offices and Commercial Buildings",
          "Warehouses and Distribution",
          "Schools and Educational Institutions",
          "Property Management"
        ]
      }
    }
  }
} as const

export type Services = typeof services
