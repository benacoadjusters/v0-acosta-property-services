// Pests Data - Common Pests Library
export const pests = [
  {
    id: "ants",
    name: "Ants",
    scientificName: "Formicidae",
    description: "Ants are social insects that live in colonies. They enter homes searching for food and water, and once they find a source, they leave scent trails for others to follow.",
    signs: [
      "Lines of ants marching to food sources",
      "Small piles of dirt or debris",
      "Rustling sounds in walls",
      "Winged ants appearing indoors"
    ],
    prevention: [
      "Keep food in sealed containers",
      "Clean up crumbs and spills immediately",
      "Seal entry points around windows and doors",
      "Trim vegetation away from your home"
    ],
    dangers: "While most ants are nuisance pests, carpenter ants can damage wood structures, and fire ants deliver painful stings.",
    commonTypes: ["Carpenter Ants", "Fire Ants", "Ghost Ants", "Crazy Ants"],
    featured: true
  },
  {
    id: "cockroaches",
    name: "Cockroaches",
    scientificName: "Blattodea",
    description: "Cockroaches are resilient pests that thrive in warm, humid environments like Puerto Rico. They can spread disease and trigger allergies and asthma.",
    signs: [
      "Live or dead roaches",
      "Droppings that look like black pepper",
      "Musty odor",
      "Egg cases (oothecae)",
      "Smear marks along walls"
    ],
    prevention: [
      "Eliminate food and water sources",
      "Fix leaky pipes and faucets",
      "Seal cracks and crevices",
      "Don't leave pet food out overnight",
      "Take out trash regularly"
    ],
    dangers: "Cockroaches can contaminate food, spread bacteria like Salmonella, and trigger allergic reactions and asthma attacks.",
    commonTypes: ["German Cockroach", "American Cockroach", "Brown-Banded Cockroach"],
    featured: true
  },
  {
    id: "termites",
    name: "Termites",
    scientificName: "Isoptera",
    description: "Termites are wood-destroying insects that cause billions of dollars in damage annually. They work silently, often going undetected until significant damage has occurred.",
    signs: [
      "Mud tubes on foundation or walls",
      "Hollow-sounding wood",
      "Discarded wings near windows",
      "Bubbling or peeling paint",
      "Frass (termite droppings)"
    ],
    prevention: [
      "Reduce wood-to-soil contact",
      "Fix moisture problems",
      "Remove dead trees and stumps",
      "Store firewood away from home",
      "Annual termite inspections"
    ],
    dangers: "Termites can cause severe structural damage to homes and buildings, often costing thousands of dollars to repair.",
    commonTypes: ["Subterranean Termites", "Drywood Termites", "Dampwood Termites"],
    featured: true
  },
  {
    id: "rodents",
    name: "Rodents",
    scientificName: "Rodentia",
    description: "Rats and mice are common household pests that contaminate food, damage property, and can spread diseases. They reproduce quickly and are most active at night.",
    signs: [
      "Droppings along walls or in cabinets",
      "Gnaw marks on food packages or structures",
      "Scratching sounds at night",
      "Nests made of shredded materials",
      "Greasy rub marks along walls"
    ],
    prevention: [
      "Seal holes larger than 1/4 inch",
      "Store food in rodent-proof containers",
      "Remove outdoor food sources",
      "Keep areas clean and clutter-free",
      "Trim tree branches away from roof"
    ],
    dangers: "Rodents can spread diseases like Hantavirus, contaminate food, damage wiring (fire hazard), and cause structural damage.",
    commonTypes: ["Roof Rats", "Norway Rats", "House Mice"],
    featured: true
  },
  {
    id: "mosquitoes",
    name: "Mosquitoes",
    scientificName: "Culicidae",
    description: "Mosquitoes are blood-feeding insects that thrive in Puerto Rico's tropical climate. They breed in standing water and are most active at dawn and dusk.",
    signs: [
      "Mosquito bites on skin",
      "Buzzing sounds near ears",
      "Standing water on property",
      "Larvae in water containers"
    ],
    prevention: [
      "Eliminate standing water",
      "Use screens on windows and doors",
      "Wear long sleeves at dawn and dusk",
      "Use EPA-registered repellents",
      "Keep gutters clean and flowing"
    ],
    dangers: "Mosquitoes can transmit serious diseases including Dengue, Zika, and Chikungunya, all present in Puerto Rico.",
    commonTypes: ["Aedes aegypti", "Aedes albopictus", "Culex mosquitoes"],
    featured: true
  },
  {
    id: "spiders",
    name: "Spiders",
    scientificName: "Araneae",
    description: "While most spiders are beneficial predators that eat other insects, some species can be dangerous, and many people prefer to keep them out of their homes.",
    signs: [
      "Spider webs in corners and crevices",
      "Live spiders",
      "Egg sacs",
      "Shed skins"
    ],
    prevention: [
      "Remove webs regularly",
      "Reduce clutter and hiding spots",
      "Seal entry points",
      "Control other insects (food source)",
      "Use outdoor lighting that doesn't attract insects"
    ],
    dangers: "While most spiders in Puerto Rico are harmless, bites can be painful and some people have allergic reactions.",
    commonTypes: ["Brown Recluse", "Wolf Spiders", "House Spiders", "Banana Spiders"],
    featured: true
  },
  {
    id: "bed-bugs",
    name: "Bed Bugs",
    scientificName: "Cimex lectularius",
    description: "Bed bugs are parasitic insects that feed on human blood, typically at night. They are excellent hitchhikers and can spread easily through luggage, furniture, and clothing.",
    signs: [
      "Bites in lines or clusters on skin",
      "Blood spots on sheets",
      "Dark spots (fecal matter) on mattresses",
      "Sweet, musty odor",
      "Shed skins or live bugs"
    ],
    prevention: [
      "Inspect hotel rooms when traveling",
      "Check secondhand furniture carefully",
      "Use mattress encasements",
      "Reduce clutter around beds",
      "Wash and dry clothes on high heat after travel"
    ],
    dangers: "While bed bugs don't transmit diseases, their bites cause itchy welts and can lead to secondary infections from scratching. Infestations cause significant stress and sleep loss.",
    commonTypes: ["Common Bed Bug"],
    featured: false
  },
  {
    id: "fleas",
    name: "Fleas",
    scientificName: "Siphonaptera",
    description: "Fleas are small, jumping parasites that feed on the blood of mammals and birds. They're commonly brought into homes by pets but can bite humans too.",
    signs: [
      "Pets scratching excessively",
      "Flea dirt on pet bedding",
      "Bites on ankles and legs",
      "Live fleas jumping on carpets or furniture"
    ],
    prevention: [
      "Use regular flea prevention on pets",
      "Vacuum frequently",
      "Wash pet bedding regularly",
      "Keep grass trimmed",
      "Treat yard areas where pets rest"
    ],
    dangers: "Fleas can transmit diseases and parasites like tapeworms. Heavy infestations can cause anemia in pets, and bites cause itchy, uncomfortable reactions in humans.",
    commonTypes: ["Cat Flea", "Dog Flea", "Human Flea"],
    featured: false
  },
  {
    id: "ticks",
    name: "Ticks",
    scientificName: "Ixodida",
    description: "Ticks are parasitic arachnids that attach to hosts to feed on blood. They're commonly found in grassy and wooded areas and can transmit various diseases.",
    signs: [
      "Ticks attached to skin or pets",
      "Rashes or irritation at bite site",
      "Pets scratching or showing discomfort"
    ],
    prevention: [
      "Use tick prevention on pets",
      "Check yourself and pets after outdoor activities",
      "Keep grass trimmed",
      "Create barriers between wooded areas and lawn",
      "Wear long pants in tick-prone areas"
    ],
    dangers: "Ticks can transmit serious diseases including Lyme disease, Rocky Mountain spotted fever, and other tick-borne illnesses.",
    commonTypes: ["Brown Dog Tick", "Lone Star Tick", "American Dog Tick"],
    featured: false
  },
  {
    id: "centipedes",
    name: "Centipedes",
    scientificName: "Chilopoda",
    description: "Centipedes are predatory arthropods with many legs. While they eat other pests like insects and spiders, their presence indicates moisture issues and can be unsettling.",
    signs: [
      "Live centipedes, usually in damp areas",
      "Presence in bathrooms, basements, and under sinks"
    ],
    prevention: [
      "Reduce moisture and humidity",
      "Fix leaks and improve ventilation",
      "Seal entry points",
      "Remove leaf litter and debris near foundation",
      "Control other insects (food source)"
    ],
    dangers: "Centipedes can deliver painful bites if handled, but they're generally not aggressive toward humans.",
    commonTypes: ["House Centipede", "Giant Centipede"],
    featured: false
  }
] as const

export type Pest = (typeof pests)[number]
