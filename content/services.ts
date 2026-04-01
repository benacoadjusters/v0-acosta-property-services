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

  // Pests We Control - with descriptions and images
  pests: [
    {
      id: "cockroaches",
      nameEs: "Cucarachas",
      nameEn: "Cockroaches",
      icon: "cockroach",
      image: "/images/pests/cockroach.jpg",
      methods: ["fumigation"],
      descriptionEs: "Las cucarachas son insectos de cuerpo aplanado que pueden medir de 1 a 5 cm. Son nocturnas y se esconden en grietas, detrás de electrodomésticos y en áreas húmedas. Transmiten enfermedades como salmonela, E. coli y pueden causar alergias y asma, especialmente en niños.",
      descriptionEn: "Cockroaches are flat-bodied insects that can measure 1 to 5 cm. They are nocturnal and hide in cracks, behind appliances and in humid areas. They transmit diseases such as salmonella, E. coli and can cause allergies and asthma, especially in children."
    },
    {
      id: "ants",
      nameEs: "Hormigas",
      nameEn: "Ants",
      icon: "ant",
      image: "/images/pests/ant.jpg",
      methods: ["fumigation"],
      descriptionEs: "Las hormigas viven en colonias que pueden contener miles de individuos. En Puerto Rico son comunes las hormigas de fuego, hormigas carpinteras y hormigas locas. Invaden cocinas en busca de alimentos y algunas especies pueden causar daños estructurales o picaduras dolorosas.",
      descriptionEn: "Ants live in colonies that can contain thousands of individuals. In Puerto Rico, fire ants, carpenter ants and crazy ants are common. They invade kitchens looking for food and some species can cause structural damage or painful stings."
    },
    {
      id: "termites",
      nameEs: "Comején / Termitas",
      nameEn: "Termites",
      icon: "termite",
      image: "/images/pests/termite.jpg",
      methods: ["fumigation"],
      descriptionEs: "El comején o termitas son insectos que se alimentan de madera y pueden causar daños estructurales severos a propiedades. Viven en colonias subterráneas y trabajan silenciosamente, por lo que muchas veces el daño es descubierto cuando ya es considerable. Una inspección regular es esencial.",
      descriptionEn: "Termites are insects that feed on wood and can cause severe structural damage to properties. They live in underground colonies and work silently, so damage is often discovered when it is already considerable. Regular inspection is essential."
    },
    {
      id: "rodents",
      nameEs: "Roedores (Ratas y Ratones)",
      nameEn: "Rodents (Rats and Mice)",
      icon: "rat",
      image: "/images/pests/rodent.jpg",
      methods: ["traps", "fumigation"],
      descriptionEs: "Los roedores como ratas y ratones son peligrosos portadores de enfermedades como leptospirosis, hantavirus y salmonelosis. Contaminan alimentos con su orina y heces, roen cables eléctricos causando riesgo de incendio, y se reproducen rápidamente. Es crucial actuar al primer indicio de su presencia.",
      descriptionEn: "Rodents such as rats and mice are dangerous carriers of diseases like leptospirosis, hantavirus and salmonellosis. They contaminate food with their urine and feces, gnaw electrical cables causing fire risk, and reproduce quickly. It is crucial to act at the first sign of their presence."
    },
    {
      id: "mosquitoes",
      nameEs: "Mosquitos",
      nameEn: "Mosquitoes",
      icon: "mosquito",
      image: "/images/pests/mosquito.jpg",
      methods: ["fumigation"],
      descriptionEs: "Los mosquitos son vectores de enfermedades graves como dengue, chikungunya, zika y fiebre del Nilo Occidental. En Puerto Rico son un problema constante debido al clima tropical. Se reproducen en agua estancada y son más activos al amanecer y atardecer.",
      descriptionEn: "Mosquitoes are vectors of serious diseases such as dengue, chikungunya, zika and West Nile fever. In Puerto Rico they are a constant problem due to the tropical climate. They breed in standing water and are most active at dawn and dusk."
    },
    {
      id: "spiders",
      nameEs: "Arañas",
      nameEn: "Spiders",
      icon: "spider",
      image: "/images/pests/spider.jpg",
      methods: ["fumigation"],
      descriptionEs: "La mayoría de las arañas son inofensivas y ayudan a controlar otros insectos. Sin embargo, algunas especies como la viuda negra o la reclusa parda pueden ser peligrosas. Se encuentran en rincones oscuros, garajes, áticos y áreas exteriores. Su presencia a menudo indica otras plagas.",
      descriptionEn: "Most spiders are harmless and help control other insects. However, some species like the black widow or brown recluse can be dangerous. They are found in dark corners, garages, attics and outdoor areas. Their presence often indicates other pests."
    },
    {
      id: "bedbugs",
      nameEs: "Chinches de Cama",
      nameEn: "Bed Bugs",
      icon: "bedbug",
      image: "/images/pests/bedbug.jpg",
      methods: ["fumigation"],
      descriptionEs: "Los chinches de cama son pequeños insectos de color marrón rojizo que se alimentan de sangre humana durante la noche. Se esconden en colchones, muebles, grietas y equipaje. Sus picaduras causan ronchas con picazón intensa. Son difíciles de eliminar y requieren tratamiento profesional.",
      descriptionEn: "Bed bugs are small reddish-brown insects that feed on human blood at night. They hide in mattresses, furniture, cracks and luggage. Their bites cause welts with intense itching. They are difficult to eliminate and require professional treatment."
    },
    {
      id: "flies",
      nameEs: "Moscas",
      nameEn: "Flies",
      icon: "fly",
      image: "/images/pests/fly.jpg",
      methods: ["fumigation", "traps"],
      descriptionEs: "Las moscas domésticas son portadoras de más de 100 patógenos diferentes incluyendo salmonela, E. coli y cólera. Se posan en basura y materia fecal, luego contaminan alimentos y superficies. Se reproducen rápidamente en materia orgánica en descomposición.",
      descriptionEn: "House flies carry more than 100 different pathogens including salmonella, E. coli and cholera. They land on garbage and fecal matter, then contaminate food and surfaces. They reproduce quickly in decomposing organic matter."
    },
    {
      id: "wasps",
      nameEs: "Avispas y Abejas",
      nameEn: "Wasps and Bees",
      icon: "wasp",
      image: "/images/pests/wasp.jpg",
      methods: ["fumigation"],
      descriptionEs: "Las avispas y abejas construyen sus nidos en aleros, árboles, paredes y áticos. Sus picaduras son dolorosas y pueden ser mortales para personas alérgicas. A diferencia de las abejas, las avispas pueden picar múltiples veces. La remoción de nidos debe ser realizada por profesionales.",
      descriptionEn: "Wasps and bees build their nests in eaves, trees, walls and attics. Their stings are painful and can be fatal for allergic people. Unlike bees, wasps can sting multiple times. Nest removal should be done by professionals."
    },
    {
      id: "scorpions",
      nameEs: "Alacranes / Escorpiones",
      nameEn: "Scorpions",
      icon: "scorpion",
      image: "/images/pests/scorpion.jpg",
      methods: ["fumigation"],
      descriptionEs: "Los alacranes o escorpiones son arácnidos con una cola segmentada terminada en aguijón venenoso. En Puerto Rico hay varias especies. Prefieren áreas secas y oscuras, entran a las casas buscando agua y presas. Sus picaduras son dolorosas y pueden requerir atención médica.",
      descriptionEn: "Scorpions are arachnids with a segmented tail ending in a venomous stinger. In Puerto Rico there are several species. They prefer dry and dark areas, entering homes looking for water and prey. Their stings are painful and may require medical attention."
    },
    // NEW: Lawn and Ornamental Pests (Certificate 4)
    {
      id: "moths",
      nameEs: "Polillas",
      nameEn: "Moths",
      icon: "moth",
      image: "/images/pests/moth.jpg",
      methods: ["fumigation"],
      category: "lawn",
      descriptionEs: "Las polillas pueden ser plagas de césped o de ropa. Las polillas del césped (gusano soldado, gusano telarañas) dañan el pasto durante su etapa larval. Las polillas de ropa destruyen telas naturales como lana, seda y algodón. Ambas requieren tratamientos específicos.",
      descriptionEn: "Moths can be lawn or clothing pests. Lawn moths (armyworms, sod webworms) damage grass during their larval stage. Clothing moths destroy natural fabrics like wool, silk and cotton. Both require specific treatments."
    },
    {
      id: "aphids",
      nameEs: "Áfidos / Pulgones",
      nameEn: "Aphids",
      icon: "aphid",
      image: "/images/pests/aphid.jpg",
      methods: ["fumigation"],
      category: "ornamental",
      descriptionEs: "Los áfidos o pulgones son pequeños insectos de cuerpo blando que se alimentan de la savia de las plantas. Se agrupan en colonias en hojas y tallos nuevos, causando deformación, amarillamiento y debilitamiento de las plantas. También transmiten virus vegetales.",
      descriptionEn: "Aphids are small soft-bodied insects that feed on plant sap. They cluster in colonies on new leaves and stems, causing deformation, yellowing and plant weakening. They also transmit plant viruses."
    },
    {
      id: "whiteflies",
      nameEs: "Moscas Blancas",
      nameEn: "Whiteflies",
      icon: "whitefly",
      image: "/images/pests/whitefly.jpg",
      methods: ["fumigation"],
      category: "ornamental",
      descriptionEs: "Las moscas blancas son pequeños insectos alados que se alimentan del envés de las hojas. Producen una sustancia pegajosa llamada melaza que promueve el crecimiento de hongos negros. Debilitan las plantas y pueden transmitir virus.",
      descriptionEn: "Whiteflies are small winged insects that feed on the underside of leaves. They produce a sticky substance called honeydew that promotes black fungus growth. They weaken plants and can transmit viruses."
    },
    {
      id: "mealybugs",
      nameEs: "Cochinillas Algodonosas",
      nameEn: "Mealybugs",
      icon: "mealybug",
      image: "/images/pests/mealybug.jpg",
      methods: ["fumigation"],
      category: "ornamental",
      descriptionEs: "Las cochinillas algodonosas son insectos cubiertos de una capa cerosa blanca que parece algodón. Se adhieren a tallos, hojas y raíces de plantas ornamentales, succionando su savia. Causan amarillamiento, caída de hojas y debilitamiento general de la planta.",
      descriptionEn: "Mealybugs are insects covered with a white waxy layer that looks like cotton. They attach to stems, leaves and roots of ornamental plants, sucking their sap. They cause yellowing, leaf drop and general plant weakening."
    },
    {
      id: "grubs",
      nameEs: "Gusanos Blancos del Césped",
      nameEn: "Lawn Grubs",
      icon: "grub",
      image: "/images/pests/grub.jpg",
      methods: ["fumigation"],
      category: "lawn",
      descriptionEs: "Los gusanos blancos son larvas de escarabajos que viven bajo el suelo y se alimentan de las raíces del césped. Causan manchas marrones irregulares que se pueden levantar fácilmente porque las raíces están destruidas. Son más activos en verano y otoño.",
      descriptionEn: "White grubs are beetle larvae that live underground and feed on grass roots. They cause irregular brown patches that can be easily lifted because roots are destroyed. They are most active in summer and fall."
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
    },
    lawnOrnamental: {
      titleEs: "Césped y Ornamentales",
      titleEn: "Lawn and Ornamentals",
      descriptionEs: "Contamos con el Certificado 4 de CESPET para el tratamiento profesional de plagas en césped, jardines y plantas ornamentales. Protegemos tus áreas verdes de plagas que dañan el paisaje.",
      descriptionEn: "We hold Certificate 4 from CESPET for professional pest treatment in lawns, gardens and ornamental plants. We protect your green areas from pests that damage landscaping.",
      image: "/images/mosquito-treatment.jpg",
      benefits: {
        es: [
          "Certificado 4 de CESPET",
          "Tratamiento de césped y jardines",
          "Control de plagas en plantas ornamentales",
          "Productos seguros para el ambiente",
          "Mantenimiento preventivo"
        ],
        en: [
          "CESPET Certificate 4",
          "Lawn and garden treatment",
          "Pest control in ornamental plants",
          "Environmentally safe products",
          "Preventive maintenance"
        ]
      }
    }
  }
} as const

export type Services = typeof services
