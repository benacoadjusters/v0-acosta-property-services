// Services Data - Servicios reales de Acosta Property Services
export const services = {
  // Main Service Methods
  methods: [
    {
      id: "fumigation",
      nameEs: "Tratamiento profesional",
      nameEn: "Professional treatment",
      shortDescEs: "Tratamiento profesional para el control de plagas mediante productos registrados en la EPA.",
      shortDescEn: "Professional pest control treatment using EPA-registered products.",
      descriptionEs: "Nuestro servicio utiliza productos de última generación registrados en la EPA. Antes de cada tratamiento, proporcionamos instrucciones detalladas de preparación y precaución para garantizar la protección adecuada de tu familia y mascotas. Aplicamos tratamientos interiores y exteriores para el control y reducción de la población de plagas mediante tratamientos seleccionados según la inspección, el tipo de plaga y las condiciones de la propiedad.",
      descriptionEn: "Our service uses state-of-the-art EPA-registered products. Before each treatment, we provide detailed preparation and precautionary instructions to ensure proper protection for your family and pets. We apply indoor and outdoor treatments for the control and reduction of pest populations through treatments selected based on the inspection, pest type, and property conditions.",
      icon: "spray",
      image: "/images/pest-control/fumigation.jpg",
      benefits: {
        es: [
          "Control efectivo de plagas",
          "Productos registrados en la EPA",
          "Cobertura interior y exterior",
          "Efecto residual de protección",
          "Garantía condicionada de servicio"
        ],
        en: [
          "Effective pest control",
          "EPA registered products",
          "Indoor and outdoor coverage",
          "Residual protection effect",
          "Conditional service guarantee"
        ]
      }
    },
    {
      id: "traps",
      nameEs: "Exterminación por Trampas",
      nameEn: "Trap Extermination",
      shortDescEs: "Sistema de trampas profesionales para roedores y plagas específicas.",
      shortDescEn: "Professional trap systems for rodents and specific pests.",
      descriptionEs: "Utilizamos sistemas de trampas profesionales para el control de roedores y otras plagas. Este método es ideal para áreas donde se prefiere evitar productos químicos o como complemento al tratamiento profesional.",
      descriptionEn: "We use professional trap systems for rodent and pest control. This method is ideal for areas where chemical products should be avoided or as a complement to professional treatment.",
      icon: "target",
      image: "/images/pest-control/trapping.jpg",
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
    },
    {
      id: "biological",
      nameEs: "Control Biológico",
      nameEn: "Biological Control",
      shortDescEs: "Estrategia sostenible usando enemigos naturales de las plagas.",
      shortDescEn: "Sustainable strategy using natural pest enemies.",
      descriptionEs: "El control biológico es una estrategia sostenible y eficiente que utiliza enemigos naturales como depredadores, parasitoides y microorganismos para combatir plagas, reduciendo la dependencia de productos químicos. Ideal para jardines, invernaderos, césped y áreas verdes donde se busca mantener la calidad estética sin dañar el medio ambiente. Utilizamos agentes como mariquitas, crisopas, avispas parasitoides, ácaros depredadores, nematodos entomopatógenos y bacterias como Bacillus thuringiensis según el tipo de plaga.",
      descriptionEn: "Biological control is a sustainable and efficient strategy that uses natural enemies such as predators, parasitoids and microorganisms to combat pests, reducing dependence on chemicals. Ideal for gardens, greenhouses, lawns and green areas where aesthetic quality is sought without harming the environment. We use agents such as ladybugs, lacewings, parasitoid wasps, predatory mites, entomopathogenic nematodes and bacteria like Bacillus thuringiensis depending on the pest type.",
      icon: "leaf",
      image: "/images/pest-control/biological.jpg",
      benefits: {
        es: [
          "Ecológico y sostenible",
          "Sin residuos químicos",
          "Seguro para plantas y animales",
          "Control a largo plazo",
          "Ideal para césped y ornamentales"
        ],
        en: [
          "Ecological and sustainable",
          "No chemical residues",
          "Safe for plants and animals",
          "Long-term control",
          "Ideal for lawns and ornamentals"
        ]
      }
    }
  ],

  // All Pests We Control - 15 total in unified grid (3 rows of 5)
  pests: [
    {
      id: "cockroaches",
      nameEs: "Cucarachas",
      nameEn: "Cockroaches",
      icon: "cockroach",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/cockroach-american.jpg", labelEs: "Cucaracha Americana", labelEn: "American Cockroach" },
        { src: "/images/pests/cockroach-german.jpg", labelEs: "Cucaracha Alemana", labelEn: "German Cockroach" },
        { src: "/images/pests/cockroach-asian.jpg", labelEs: "Cucaracha Asiática", labelEn: "Asian Cockroach" }
      ],
      descriptionEs: "En Puerto Rico encontramos principalmente tres tipos de cucarachas. La cucaracha americana (Periplaneta americana) es la más grande, de color marrón rojizo con una banda amarilla detrás de la cabeza, mide hasta 5 cm y prefiere áreas húmedas como sótanos y alcantarillas. La cucaracha alemana (Blattella germanica) es más pequeña (1-1.5 cm), de color marrón claro con dos franjas oscuras en el tórax, es la más común en cocinas y baños. La cucaracha asiática (Blattella asahinai) es similar a la alemana pero puede volar y se encuentra más en exteriores. Todas transmiten enfermedades como salmonela, E. coli, disentería y pueden desencadenar alergias y asma, especialmente en niños. Se reproducen rápidamente: una cucaracha alemana puede producir hasta 400 descendientes en un año.",
      descriptionEn: "In Puerto Rico we mainly find three types of cockroaches. The American cockroach (Periplaneta americana) is the largest, reddish-brown with a yellowish band behind the head, measuring up to 5 cm and preferring humid areas like basements and sewers. The German cockroach (Blattella germanica) is smaller (1-1.5 cm), light brown with two dark stripes on the thorax, most common in kitchens and bathrooms. The Asian cockroach (Blattella asahinai) is similar to the German but can fly and is found more outdoors. All transmit diseases such as salmonella, E. coli, dysentery and can trigger allergies and asthma, especially in children. They reproduce quickly: a German cockroach can produce up to 400 offspring in a year."
    },
    {
      id: "ants",
      nameEs: "Hormigas",
      nameEn: "Ants",
      icon: "ant",
      methods: ["fumigation", "biological"],
      images: [
        { src: "/images/pests/ant-fire.jpg", labelEs: "Hormiga de Fuego", labelEn: "Fire Ant" },
        { src: "/images/pests/ant-carpenter.jpg", labelEs: "Hormiga Carpintera", labelEn: "Carpenter Ant" },
        { src: "/images/pests/ant.jpg", labelEs: "Hormiga Común", labelEn: "Common Ant" }
      ],
      descriptionEs: "Puerto Rico alberga varias especies de hormigas problemáticas. La hormiga de fuego (Solenopsis invicta) es agresiva, de color rojizo, construye montículos y sus picaduras causan dolor intenso, ampollas y pueden provocar reacciones alérgicas graves. La hormiga carpintera (Camponotus spp.) es grande (6-13 mm), negra o bicolor, no come madera pero excava galerías en ella para sus nidos, causando daños estructurales significativos. La hormiga loca (Paratrechina longicornis) se mueve erráticamente, invade en grandes números y es atraída por equipos electrónicos. Las hormigas viven en colonias con miles de individuos y una reina que puede vivir hasta 30 años, por lo que el control debe enfocarse en eliminar la colonia completa, no solo las obreras visibles.",
      descriptionEn: "Puerto Rico hosts several problematic ant species. The fire ant (Solenopsis invicta) is aggressive, reddish in color, builds mounds and its stings cause intense pain, blisters and can cause severe allergic reactions. The carpenter ant (Camponotus spp.) is large (6-13 mm), black or bicolored, doesn't eat wood but excavates galleries in it for nests, causing significant structural damage. The crazy ant (Paratrechina longicornis) moves erratically, invades in large numbers and is attracted to electronic equipment. Ants live in colonies with thousands of individuals and a queen that can live up to 30 years, so control must focus on eliminating the entire colony, not just visible workers."
    },
    {
      id: "termites",
      nameEs: "Comején / Termitas",
      nameEn: "Termites",
      icon: "termite",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/termite-subterranean.jpg", labelEs: "Termita Subterránea", labelEn: "Subterranean Termite" },
        { src: "/images/pests/termite-drywood.jpg", labelEs: "Termita de Madera Seca", labelEn: "Drywood Termite" },
        { src: "/images/pests/termite.jpg", labelEs: "Daño por Termitas", labelEn: "Termite Damage" }
      ],
      descriptionEs: "El comején es la plaga más destructiva en Puerto Rico. La termita subterránea (Coptotermes spp.) vive en el suelo y construye túneles de barro para llegar a la madera, una colonia puede consumir hasta 5 kg de madera por año. La termita de madera seca (Cryptotermes brevis) no necesita contacto con el suelo, infesta directamente muebles, marcos y vigas, dejando pequeños montículos de excremento granular. Los enjambres de termitas aladas (reproductores) ocurren generalmente después de lluvias, indicando colonias maduras cercanas. El daño a menudo no es visible hasta que es severo, ya que las termitas comen la madera desde adentro. Una inspección profesional anual es esencial para detectar infestaciones tempranas y prevenir daños estructurales que pueden costar miles de dólares en reparaciones.",
      descriptionEn: "Termites are the most destructive pest in Puerto Rico. The subterranean termite (Coptotermes spp.) lives in soil and builds mud tubes to reach wood, a colony can consume up to 5 kg of wood per year. The drywood termite (Cryptotermes brevis) doesn't need soil contact, directly infests furniture, frames and beams, leaving small mounds of granular excrement. Swarms of winged termites (reproductives) generally occur after rains, indicating nearby mature colonies. Damage is often not visible until severe, as termites eat wood from inside. An annual professional inspection is essential to detect early infestations and prevent structural damage that can cost thousands of dollars in repairs."
    },
    {
      id: "rodents",
      nameEs: "Roedores",
      nameEn: "Rodents",
      icon: "rat",
      methods: ["traps", "fumigation"],
      images: [
        { src: "/images/pests/rat-norway.jpg", labelEs: "Rata Noruega", labelEn: "Norway Rat" },
        { src: "/images/pests/rat-roof.jpg", labelEs: "Rata de Techo", labelEn: "Roof Rat" },
        { src: "/images/pests/mouse.jpg", labelEs: "Ratón Doméstico", labelEn: "House Mouse" }
      ],
      descriptionEs: "En Puerto Rico encontramos tres roedores principales. La rata noruega (Rattus norvegicus) es grande (hasta 500g), de color marrón, prefiere niveles bajos como sótanos y alcantarillas, excava madrigueras y es excelente nadadora. La rata de techo (Rattus rattus) es más pequeña y ágil, de color negro o gris oscuro con cola larga, trepa fácilmente y habita en áticos, techos y árboles frutales. El ratón doméstico (Mus musculus) es pequeño (15-20g), gris, se reproduce rápidamente (hasta 10 camadas al año) y puede entrar por huecos de solo 6mm. Todos transmiten enfermedades graves: leptospirosis (común en Puerto Rico después de inundaciones), hantavirus, salmonelosis y peste. Contaminan alimentos con orina, heces y pelo, roen cables eléctricos causando incendios, y dañan estructuras.",
      descriptionEn: "In Puerto Rico we find three main rodents. The Norway rat (Rattus norvegicus) is large (up to 500g), brown colored, prefers low levels like basements and sewers, digs burrows and is an excellent swimmer. The roof rat (Rattus rattus) is smaller and agile, black or dark gray with a long tail, climbs easily and inhabits attics, roofs and fruit trees. The house mouse (Mus musculus) is small (15-20g), gray, reproduces quickly (up to 10 litters per year) and can enter through holes only 6mm wide. All transmit serious diseases: leptospirosis (common in Puerto Rico after floods), hantavirus, salmonellosis and plague. They contaminate food with urine, feces and hair, gnaw electrical wires causing fires, and damage structures."
    },
    {
      id: "mosquitoes",
      nameEs: "Mosquitos",
      nameEn: "Mosquitoes",
      icon: "mosquito",
      methods: ["fumigation", "biological"],
      images: [
        { src: "/images/pests/mosquito-aedes.jpg", labelEs: "Mosquito Aedes aegypti", labelEn: "Aedes aegypti Mosquito" },
        { src: "/images/pests/mosquito.jpg", labelEs: "Mosquito Común", labelEn: "Common Mosquito" }
      ],
      descriptionEs: "Puerto Rico enfrenta amenazas constantes de mosquitos debido al clima tropical. El Aedes aegypti es el vector principal de dengue, chikungunya, zika y fiebre amarilla; es negro con marcas blancas en patas y cuerpo, pica principalmente de día y se reproduce en cualquier recipiente con agua estancada (tapas de botellas, platos de macetas, neumáticos). El Aedes albopictus (mosquito tigre asiático) también transmite estas enfermedades. El Culex quinquefasciatus transmite el virus del Nilo Occidental y filariasis, pica al anochecer y durante la noche. Los mosquitos hembra necesitan sangre para producir huevos y pueden poner hasta 300 huevos cada vez. El control efectivo requiere eliminar criaderos de agua estancada, aplicar tratamientos larvicidas y adulticidas.",
      descriptionEn: "Puerto Rico faces constant mosquito threats due to the tropical climate. Aedes aegypti is the main vector for dengue, chikungunya, zika and yellow fever; it's black with white markings on legs and body, bites mainly during the day and breeds in any container with standing water (bottle caps, plant saucers, tires). Aedes albopictus (Asian tiger mosquito) also transmits these diseases. Culex quinquefasciatus transmits West Nile virus and filariasis, bites at dusk and during the night. Female mosquitoes need blood to produce eggs and can lay up to 300 eggs at a time. Effective control requires eliminating standing water breeding sites, applying larvicides and adulticides."
    },
    {
      id: "spiders",
      nameEs: "Arañas",
      nameEn: "Spiders",
      icon: "spider",
      methods: ["fumigation", "biological"],
      images: [
        { src: "/images/pests/spider-brownwidow.jpg", labelEs: "Viuda Marrón", labelEn: "Brown Widow Spider" },
        { src: "/images/pests/spider.jpg", labelEs: "Araña de Casa", labelEn: "House Spider" }
      ],
      descriptionEs: "La mayoría de arañas en Puerto Rico son inofensivas y beneficiosas al controlar otros insectos. Sin embargo, algunas requieren precaución. La viuda marrón (Latrodectus geometricus) tiene una marca de reloj de arena naranja en el abdomen, su mordedura es dolorosa y puede causar síntomas sistémicos que requieren atención médica. La reclusa parda (Loxosceles spp.), aunque rara en la isla, puede causar necrosis en el sitio de la mordedura. Las arañas de jardín y las tarántulas locales generalmente no son peligrosas para humanos. Las arañas se encuentran en rincones oscuros, detrás de muebles, en garajes, áticos, bajo rocas y en vegetación. Su presencia abundante a menudo indica otras plagas de las que se alimentan.",
      descriptionEn: "Most spiders in Puerto Rico are harmless and beneficial by controlling other insects. However, some require caution. The brown widow (Latrodectus geometricus) has an orange hourglass mark on the abdomen, its bite is painful and can cause systemic symptoms requiring medical attention. The brown recluse (Loxosceles spp.), though rare on the island, can cause necrosis at the bite site. Garden spiders and local tarantulas are generally not dangerous to humans. Spiders are found in dark corners, behind furniture, in garages, attics, under rocks and in vegetation. Their abundant presence often indicates other pests they feed on."
    },
    {
      id: "bedbugs",
      nameEs: "Chinches de Cama",
      nameEn: "Bed Bugs",
      icon: "bedbug",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/bedbug-adult.jpg", labelEs: "Chinche Adulto", labelEn: "Adult Bed Bug" },
        { src: "/images/pests/bedbug-bites.jpg", labelEs: "Picaduras de Chinche", labelEn: "Bed Bug Bites" }
      ],
      descriptionEs: "Los chinches de cama (Cimex lectularius) son pequeños insectos de 5-7mm, ovalados y aplanados, de color marrón rojizo que se oscurece después de alimentarse. Se alimentan exclusivamente de sangre, principalmente humana, durante la noche mientras dormimos. Sus picaduras causan ronchas rojas con picazón intensa que aparecen en líneas o grupos. Se esconden en costuras de colchones, marcos de cama, muebles, grietas de paredes, detrás de cuadros y tomacorrientes. Son excelentes viajeros: se propagan a través de equipaje, muebles usados, ropa y visitantes. Una hembra puede poner 200-500 huevos en su vida. Son extremadamente difíciles de eliminar sin tratamiento profesional debido a su capacidad de sobrevivir meses sin alimentarse.",
      descriptionEn: "Bed bugs (Cimex lectularius) are small insects 5-7mm, oval and flat, reddish-brown that darkens after feeding. They feed exclusively on blood, mainly human, at night while we sleep. Their bites cause red welts with intense itching that appear in lines or clusters. They hide in mattress seams, bed frames, furniture, wall cracks, behind pictures and outlets. They're excellent travelers: spread through luggage, used furniture, clothing and visitors. A female can lay 200-500 eggs in her lifetime. They're extremely difficult to eliminate without professional treatment due to their ability to survive months without feeding."
    },
    {
      id: "flies",
      nameEs: "Moscas",
      nameEn: "Flies",
      icon: "fly",
      methods: ["fumigation", "traps"],
      images: [
        { src: "/images/pests/fly-house.jpg", labelEs: "Mosca Doméstica", labelEn: "House Fly" },
        { src: "/images/pests/fly-fruit.jpg", labelEs: "Mosca de la Fruta", labelEn: "Fruit Fly" }
      ],
      descriptionEs: "La mosca doméstica (Musca domestica) es una de las plagas más comunes y peligrosas para la salud. Miden 6-7mm, son grises con cuatro franjas oscuras en el tórax. Se posan en basura, excremento, carne en descomposición y cualquier materia orgánica putrefacta, luego contaminan alimentos y superficies. Transmiten más de 100 patógenos incluyendo salmonela, E. coli, cólera, disentería y parásitos intestinales. La mosca de la fruta (Drosophila) es más pequeña, de ojos rojos, se reproduce en frutas maduras y vegetales en descomposición. Una mosca doméstica puede transportar hasta 6 millones de bacterias y puede poner hasta 500 huevos en su vida de 30 días.",
      descriptionEn: "The house fly (Musca domestica) is one of the most common and dangerous health pests. They measure 6-7mm, are gray with four dark stripes on the thorax. They land on garbage, excrement, decomposing meat and any putrid organic matter, then contaminate food and surfaces. They transmit over 100 pathogens including salmonella, E. coli, cholera, dysentery and intestinal parasites. The fruit fly (Drosophila) is smaller, with red eyes, breeds in ripe fruits and decomposing vegetables. A house fly can carry up to 6 million bacteria and can lay up to 500 eggs in her 30-day life."
    },
    {
      id: "wasps",
      nameEs: "Avispas y Abejas",
      nameEn: "Wasps and Bees",
      icon: "wasp",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/wasp-paper.jpg", labelEs: "Avispa Papelera", labelEn: "Paper Wasp" },
        { src: "/images/pests/wasp-yellowjacket.jpg", labelEs: "Avispa Amarilla", labelEn: "Yellow Jacket" },
        { src: "/images/pests/bee-africanized.jpg", labelEs: "Abeja Africanizada", labelEn: "Africanized Bee" }
      ],
      descriptionEs: "Las avispas y abejas son insectos sociales que construyen nidos en aleros, árboles, paredes huecas, áticos y bajo tierra. La avispa papelera construye nidos de papel en forma de paraguas. La avispa amarilla (yellow jacket) es más agresiva y anida en el suelo o cavidades. A diferencia de las abejas que mueren después de picar, las avispas pueden picar múltiples veces. Las abejas africanizadas, presentes en Puerto Rico, son particularmente agresivas y pueden perseguir a personas por largas distancias. Las picaduras causan dolor intenso, hinchazón y para personas alérgicas pueden provocar anafilaxis potencialmente mortal. La remoción de nidos debe ser realizada únicamente por profesionales.",
      descriptionEn: "Wasps and bees are social insects that build nests in eaves, trees, hollow walls, attics and underground. Paper wasps build umbrella-shaped paper nests. Yellow jackets are more aggressive and nest in the ground or cavities. Unlike bees that die after stinging, wasps can sting multiple times. Africanized bees, present in Puerto Rico, are particularly aggressive and can chase people for long distances. Stings cause intense pain, swelling and for allergic people can cause potentially fatal anaphylaxis. Nest removal should only be done by professionals."
    },
    {
      id: "scorpions",
      nameEs: "Alacranes",
      nameEn: "Scorpions",
      icon: "scorpion",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/scorpion-pr.jpg", labelEs: "Alacrán de Puerto Rico", labelEn: "Puerto Rico Scorpion" },
        { src: "/images/pests/scorpion.jpg", labelEs: "Alacrán Común", labelEn: "Common Scorpion" }
      ],
      descriptionEs: "En Puerto Rico encontramos principalmente el alacrán común (Tityus obtusus) y otras especies menores. Son arácnidos nocturnos de 3-7 cm con pinzas frontales y cola curvada terminada en aguijón venenoso. Aunque sus picaduras raramente son mortales para adultos sanos, causan dolor intenso, hinchazón, entumecimiento y en casos severos pueden provocar náuseas, dificultad respiratoria y taquicardia, especialmente peligroso para niños, ancianos y personas con condiciones médicas. Se refugian en lugares oscuros y húmedos: debajo de piedras, troncos, escombros, en zapatos, ropa en el suelo y grietas de paredes. Entran a las casas buscando agua y presas (insectos). El control incluye sellar entradas, eliminar refugios exteriores y tratamiento perimetral.",
      descriptionEn: "In Puerto Rico we mainly find the common scorpion (Tityus obtusus) and other minor species. They are nocturnal arachnids 3-7 cm with front pincers and curved tail ending in a venomous stinger. Although their stings are rarely fatal for healthy adults, they cause intense pain, swelling, numbness and in severe cases can cause nausea, breathing difficulty and tachycardia, especially dangerous for children, elderly and people with medical conditions. They shelter in dark, humid places: under stones, logs, debris, in shoes, clothing on the floor and wall cracks. They enter houses seeking water and prey (insects). Control includes sealing entries, eliminating exterior harborage and perimeter treatment."
    },
    {
      id: "centipedes",
      nameEs: "Ciempiés",
      nameEn: "Centipedes",
      icon: "centipede",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/centipede-giant.jpg", labelEs: "Ciempiés Gigante Tropical", labelEn: "Tropical Giant Centipede" },
        { src: "/images/pests/centipede-house.jpg", labelEs: "Ciempiés Doméstico", labelEn: "House Centipede" }
      ],
      descriptionEs: "Puerto Rico alberga varias especies de ciempiés, incluyendo el ciempiés gigante tropical (Scolopendra spp.) que puede alcanzar hasta 20 cm de longitud. Son depredadores nocturnos con cuerpo segmentado y un par de patas por segmento (no tienen realmente 100 patas). Poseen forcípulas venenosas que usan para capturar presas y defenderse. Su mordedura es extremadamente dolorosa, causando hinchazón intensa, enrojecimiento y en algunos casos fiebre y náuseas; para personas alérgicas puede ser peligrosa. El ciempiés doméstico tiene patas muy largas y se alimenta de otros insectos. Se encuentran en áreas húmedas y oscuras: bajo piedras, hojarasca, troncos, macetas, sótanos y baños.",
      descriptionEn: "Puerto Rico hosts several centipede species, including the tropical giant centipede (Scolopendra spp.) that can reach up to 20 cm in length. They are nocturnal predators with segmented bodies and one pair of legs per segment (they don't actually have 100 legs). They have venomous forcipules used to capture prey and defend themselves. Their bite is extremely painful, causing intense swelling, redness and in some cases fever and nausea; for allergic people it can be dangerous. The house centipede has very long legs and feeds on other insects. They are found in humid, dark areas: under stones, leaf litter, logs, flower pots, basements and bathrooms."
    },
    {
      id: "ticks",
      nameEs: "Garrapatas",
      nameEn: "Ticks",
      icon: "tick",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/tick-dog.jpg", labelEs: "Garrapata Marrón del Perro", labelEn: "Brown Dog Tick" },
        { src: "/images/pests/tick-engorged.jpg", labelEs: "Garrapata Alimentada", labelEn: "Engorged Tick" }
      ],
      descriptionEs: "Las garrapatas son arácnidos parásitos que se alimentan de sangre de animales y humanos. La garrapata marrón del perro (Rhipicephalus sanguineus) es la más común en Puerto Rico, infesta principalmente perros pero puede picar humanos. Son pequeñas (3mm) cuando ayunan y se hinchan hasta 11mm después de alimentarse durante días. Transmiten enfermedades graves como ehrlichiosis, babesiosis, anaplasmosis y en otras regiones enfermedad de Lyme. Se adhieren firmemente a la piel con su aparato bucal, por lo que deben removerse con pinzas de punta fina, tirando firmemente sin torcer. Se encuentran en mascotas, áreas con vegetación alta, perreras y grietas de paredes. El control requiere tratar mascotas, su ambiente y áreas exteriores simultáneamente.",
      descriptionEn: "Ticks are parasitic arachnids that feed on blood from animals and humans. The brown dog tick (Rhipicephalus sanguineus) is most common in Puerto Rico, mainly infests dogs but can bite humans. They are small (3mm) when fasting and swell up to 11mm after feeding for days. They transmit serious diseases like ehrlichiosis, babesiosis, anaplasmosis and in other regions Lyme disease. They attach firmly to skin with their mouthparts, so they must be removed with fine-tipped tweezers, pulling firmly without twisting. Found on pets, areas with tall vegetation, kennels and wall cracks. Control requires treating pets, their environment and outdoor areas simultaneously."
    },
    {
      id: "fleas",
      nameEs: "Pulgas",
      nameEn: "Fleas",
      icon: "flea",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/flea-cat.jpg", labelEs: "Pulga de Gato", labelEn: "Cat Flea" },
        { src: "/images/pests/flea-fur.jpg", labelEs: "Pulgas en Pelaje", labelEn: "Fleas in Fur" }
      ],
      descriptionEs: "La pulga del gato (Ctenocephalides felis) es la especie más común en Puerto Rico, infestando tanto gatos como perros y picando humanos. Son insectos pequeños (1-3mm), sin alas, de cuerpo aplanado lateralmente y patas traseras poderosas que les permiten saltar hasta 150 veces su longitud. Sus picaduras causan ronchas rojas muy pruriginosas, y en infestaciones severas pueden causar anemia en mascotas. Transmiten la tenia (Dipylidium caninum) a mascotas y humanos, y pueden portar la bacteria de la peste. Una hembra puede poner 50 huevos diarios; los huevos, larvas y pupas se desarrollan en alfombras, muebles y grietas. El tratamiento efectivo requiere tratar mascotas, el interior del hogar y áreas exteriores.",
      descriptionEn: "The cat flea (Ctenocephalides felis) is the most common species in Puerto Rico, infesting both cats and dogs and biting humans. They are small insects (1-3mm), wingless, with laterally flattened bodies and powerful hind legs that allow them to jump up to 150 times their length. Their bites cause very itchy red welts, and in severe infestations can cause anemia in pets. They transmit tapeworm (Dipylidium caninum) to pets and humans, and can carry plague bacteria. A female can lay 50 eggs daily; eggs, larvae and pupae develop in carpets, furniture and cracks. Effective treatment requires treating pets, home interior and outdoor areas."
    },
    {
      id: "moths",
      nameEs: "Polillas",
      nameEn: "Moths",
      icon: "moth",
      methods: ["biological", "fumigation"],
      images: [
        { src: "/images/pests/moth-clothes.jpg", labelEs: "Polilla de la Ropa", labelEn: "Clothes Moth" },
        { src: "/images/pests/moth-pantry.jpg", labelEs: "Polilla de Despensa", labelEn: "Pantry Moth" }
      ],
      descriptionEs: "En Puerto Rico encontramos principalmente dos tipos problemáticos de polillas. La polilla de la ropa (Tineola bisselliella) es pequeña, dorada, y sus larvas se alimentan de fibras naturales como lana, seda, cuero, plumas y pieles, causando agujeros en ropa y tapicería almacenada. La polilla india de la harina (Plodia interpunctella) o polilla de despensa tiene alas bicolores (crema y cobre), y sus larvas infestan productos almacenados: cereales, harinas, frutos secos, especias, chocolate y alimentos para mascotas, dejando telarañas y excrementos. El control incluye limpieza profunda, almacenamiento hermético de alimentos y ropa, y tratamiento de áreas infestadas.",
      descriptionEn: "In Puerto Rico we mainly find two problematic types of moths. The clothes moth (Tineola bisselliella) is small, golden, and its larvae feed on natural fibers like wool, silk, leather, feathers and furs, causing holes in stored clothing and upholstery. The Indian meal moth (Plodia interpunctella) or pantry moth has two-toned wings (cream and copper), and its larvae infest stored products: cereals, flours, dried fruits, spices, chocolate and pet food, leaving webbing and droppings. Control includes deep cleaning, airtight storage of food and clothing, and treatment of infested areas."
    },
    {
      id: "aphids",
      nameEs: "Áfidos / Pulgones",
      nameEn: "Aphids",
      icon: "aphid",
      methods: ["biological", "fumigation"],
      images: [
        { src: "/images/pests/aphid-green.jpg", labelEs: "Áfido Verde", labelEn: "Green Aphid" },
        { src: "/images/pests/aphid-black.jpg", labelEs: "Áfido Negro", labelEn: "Black Aphid" }
      ],
      descriptionEs: "Los áfidos o pulgones son pequeños insectos de cuerpo blando (1-3mm) que se alimentan succionando la savia de las plantas. Se encuentran en colonias densas en brotes tiernos, hojas y tallos. Pueden ser verdes, negros, amarillos, rojos o marrones según la especie. Causan daño directo al debilitar las plantas y deformar hojas y brotes nuevos. Además, excretan una sustancia azucarada llamada melaza que atrae hormigas y promueve el crecimiento de fumagina (hongo negro). También transmiten virus de plantas que pueden matar cultivos. Se reproducen extremadamente rápido: una hembra puede producir 80 crías en una semana sin necesidad de macho. El tratamiento incluye productos específicos para jardín y control de las hormigas que los protegen.",
      descriptionEn: "Aphids are small soft-bodied insects (1-3mm) that feed by sucking plant sap. They are found in dense colonies on tender shoots, leaves and stems. They can be green, black, yellow, red or brown depending on the species. They cause direct damage by weakening plants and deforming leaves and new shoots. Additionally, they excrete a sugary substance called honeydew that attracts ants and promotes sooty mold growth (black fungus). They also transmit plant viruses that can kill crops. They reproduce extremely fast: a female can produce 80 offspring in a week without needing a male. Treatment includes specific garden products and control of the ants that protect them."
    }
  ],

  // Service types by customer
  customerTypes: [
    {
      id: "residential",
      nameEs: "Residencial",
      nameEn: "Residential",
      descriptionEs: "Protección completa para tu hogar y familia contra todo tipo de plagas.",
      descriptionEn: "Complete protection for your home and family against all types of pests.",
      icon: "home",
      features: {
        es: [
          "Inspección gratuita del hogar",
          "Tratamiento interior y exterior",
          "Productos seguros para familias",
          "Programas de mantenimiento",
          "Garantía condicionada"
        ],
        en: [
          "Free home inspection",
          "Interior and exterior treatment",
          "Family-safe products",
          "Maintenance programs",
          "Conditional guarantee"
        ]
      }
    },
    {
      id: "commercial",
      nameEs: "Comercial",
      nameEn: "Commercial",
      descriptionEs: "Servicios especializados para negocios cumpliendo regulaciones sanitarias.",
      descriptionEn: "Specialized services for businesses meeting health regulations.",
      icon: "building",
      features: {
        es: [
          "Cumplimiento HACCP y sanitario",
          "Documentación para inspecciones",
          "Servicio discreto y flexible",
          "Contratos de mantenimiento",
          "Respuesta de emergencia"
        ],
        en: [
          "HACCP and health compliance",
          "Documentation for inspections",
          "Discreet and flexible service",
          "Maintenance contracts",
          "Emergency response"
        ]
      }
    }
  ]
}
