// Service Areas Data - Puerto Rico Municipalities
export const serviceAreas = {
  // Main Service Regions
  regions: [
    {
      name: "Metro San Juan",
      municipalities: [
        "San Juan",
        "Bayamón",
        "Carolina",
        "Cataño",
        "Guaynabo",
        "Trujillo Alto",
        "Toa Baja",
        "Toa Alta"
      ],
      featured: true
    },
    {
      name: "North Region",
      municipalities: [
        "Arecibo",
        "Barceloneta",
        "Camuy",
        "Ciales",
        "Dorado",
        "Florida",
        "Hatillo",
        "Manatí",
        "Morovis",
        "Quebradillas",
        "Vega Alta",
        "Vega Baja"
      ],
      featured: true
    },
    {
      name: "East Region",
      municipalities: [
        "Canóvanas",
        "Ceiba",
        "Culebra",
        "Fajardo",
        "Humacao",
        "Juncos",
        "Las Piedras",
        "Loíza",
        "Luquillo",
        "Naguabo",
        "Río Grande",
        "Vieques",
        "Yabucoa"
      ],
      featured: false
    },
    {
      name: "South Region",
      municipalities: [
        "Arroyo",
        "Coamo",
        "Guayama",
        "Guayanilla",
        "Juana Díaz",
        "Patillas",
        "Peñuelas",
        "Ponce",
        "Salinas",
        "Santa Isabel",
        "Villalba",
        "Yauco"
      ],
      featured: true
    },
    {
      name: "West Region",
      municipalities: [
        "Aguada",
        "Aguadilla",
        "Añasco",
        "Cabo Rojo",
        "Hormigueros",
        "Isabela",
        "Lajas",
        "Las Marías",
        "Mayagüez",
        "Moca",
        "Rincón",
        "Sabana Grande",
        "San Germán",
        "San Sebastián"
      ],
      featured: false
    },
    {
      name: "Central Mountain Region",
      municipalities: [
        "Adjuntas",
        "Aguas Buenas",
        "Aibonito",
        "Barranquitas",
        "Cayey",
        "Cidra",
        "Comerío",
        "Corozal",
        "Gurabo",
        "Jayuya",
        "Lares",
        "Naranjito",
        "Orocovis",
        "San Lorenzo",
        "Utuado"
      ],
      featured: false
    }
  ],
  
  // Featured municipalities for homepage
  featuredMunicipalities: [
    "San Juan",
    "Bayamón",
    "Carolina",
    "Ponce",
    "Caguas",
    "Guaynabo",
    "Mayagüez",
    "Arecibo"
  ],
  
  // Service area description
  description: "Acosta Property Services proudly serves communities across Puerto Rico. From the metro San Juan area to municipalities across the island, our certified technicians are ready to protect your property.",
  
  // Coverage message
  coverageMessage: "Not sure if we service your area? Give us a call and we'll let you know!"
} as const

export type ServiceAreas = typeof serviceAreas
