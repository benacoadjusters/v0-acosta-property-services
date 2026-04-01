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
      descriptionEs: "Nuestro servicio de fumigación utiliza productos de última generación, seguros para su familia y mascotas cuando se siguen las instrucciones. Aplicamos tratamientos en interiores y exteriores para garantizar la eliminación completa de plagas.",
      descriptionEn: "Our fumigation service uses state-of-the-art products, safe for your family and pets when instructions are followed. We apply treatments indoors and outdoors to ensure complete pest elimination.",
      icon: "spray",
      image: "/images/mosquito-treatment.jpg",
      benefits: {
        es: [
          "Eliminación rápida y efectiva",
          "Productos registrados por EPA",
          "Cobertura interior y exterior",
          "Efecto residual de protección",
          "Garantía condicionada de servicio"
        ],
        en: [
          "Fast and effective elimination",
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

  // All Pests We Control - 15 total in one unified list
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
      methods: ["fumigation"],
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
        { src: "/images/pests/termite.jpg", labelEs: "Daño de Termitas", labelEn: "Termite Damage" }
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
      descriptionEs: "En Puerto Rico encontramos tres roedores principales. La rata noruega (Rattus norvegicus) es grande (hasta 500g), de color marrón, prefiere niveles bajos como sótanos y alcantarillas, excava madrigueras y es excelente nadadora. La rata de techo (Rattus rattus) es más pequeña y ágil, de color negro o gris oscuro con cola larga, trepa fácilmente y habita en áticos, techos y árboles frutales. El ratón doméstico (Mus musculus) es pequeño (15-20g), gris, se reproduce rápidamente (hasta 10 camadas al año) y puede entrar por huecos de solo 6mm. Todos transmiten enfermedades graves: leptospirosis (común en Puerto Rico después de inundaciones), hantavirus, salmonelosis y peste. Contaminan alimentos con orina, heces y pelo, roen cables eléctricos causando incendios, y dañan estructuras. Una rata puede producir hasta 25,000 excrementos al año.",
      descriptionEn: "In Puerto Rico we find three main rodents. The Norway rat (Rattus norvegicus) is large (up to 500g), brown colored, prefers low levels like basements and sewers, digs burrows and is an excellent swimmer. The roof rat (Rattus rattus) is smaller and agile, black or dark gray with a long tail, climbs easily and inhabits attics, roofs and fruit trees. The house mouse (Mus musculus) is small (15-20g), gray, reproduces quickly (up to 10 litters per year) and can enter through holes only 6mm wide. All transmit serious diseases: leptospirosis (common in Puerto Rico after floods), hantavirus, salmonellosis and plague. They contaminate food with urine, feces and hair, gnaw electrical wires causing fires, and damage structures. A rat can produce up to 25,000 droppings per year."
    },
    {
      id: "mosquitoes",
      nameEs: "Mosquitos",
      nameEn: "Mosquitoes",
      icon: "mosquito",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/mosquito-aedes.jpg", labelEs: "Aedes aegypti", labelEn: "Aedes aegypti" },
        { src: "/images/pests/mosquito.jpg", labelEs: "Mosquito Común", labelEn: "Common Mosquito" }
      ],
      descriptionEs: "Puerto Rico enfrenta amenazas constantes de mosquitos debido al clima tropical. El Aedes aegypti es el vector principal de dengue, chikungunya, zika y fiebre amarilla; es negro con marcas blancas en patas y cuerpo, pica principalmente de día y se reproduce en cualquier recipiente con agua estancada (tapas de botellas, platos de macetas, neumáticos). El Aedes albopictus (mosquito tigre asiático) también transmite estas enfermedades. El Culex quinquefasciatus transmite el virus del Nilo Occidental y filariasis, pica al anochecer y durante la noche. Los mosquitos hembra necesitan sangre para producir huevos y pueden poner hasta 300 huevos cada vez. El control efectivo requiere eliminar criaderos de agua estancada, aplicar tratamientos larvicidas y adulticidas, y protección personal.",
      descriptionEn: "Puerto Rico faces constant mosquito threats due to the tropical climate. Aedes aegypti is the main vector for dengue, chikungunya, zika and yellow fever; it's black with white markings on legs and body, bites mainly during the day and breeds in any container with standing water (bottle caps, plant saucers, tires). Aedes albopictus (Asian tiger mosquito) also transmits these diseases. Culex quinquefasciatus transmits West Nile virus and filariasis, bites at dusk and during the night. Female mosquitoes need blood to produce eggs and can lay up to 300 eggs at a time. Effective control requires eliminating standing water breeding sites, applying larvicides and adulticides, and personal protection."
    },
    {
      id: "spiders",
      nameEs: "Arañas",
      nameEn: "Spiders",
      icon: "spider",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/spider-brownwidow.jpg", labelEs: "Viuda Marrón", labelEn: "Brown Widow" },
        { src: "/images/pests/spider.jpg", labelEs: "Araña Común", labelEn: "Common Spider" }
      ],
      descriptionEs: "La mayoría de arañas en Puerto Rico son inofensivas y beneficiosas al controlar otros insectos. Sin embargo, algunas requieren precaución. La viuda marrón (Latrodectus geometricus) tiene una marca de reloj de arena naranja en el abdomen, su mordedura es dolorosa y puede causar síntomas sistémicos que requieren atención médica. La reclusa parda (Loxosceles spp.), aunque rara en la isla, puede causar necrosis en el sitio de la mordedura. Las arañas de jardín y las tarántulas locales generalmente no son peligrosas para humanos. Las arañas se encuentran en rincones oscuros, detrás de muebles, en garajes, áticos, bajo rocas y en vegetación. Su presencia abundante a menudo indica otras plagas de las que se alimentan. El control incluye reducir refugios, sellar entradas y tratamiento perimetral.",
      descriptionEn: "Most spiders in Puerto Rico are harmless and beneficial by controlling other insects. However, some require caution. The brown widow (Latrodectus geometricus) has an orange hourglass mark on the abdomen, its bite is painful and can cause systemic symptoms requiring medical attention. The brown recluse (Loxosceles spp.), though rare on the island, can cause necrosis at the bite site. Garden spiders and local tarantulas are generally not dangerous to humans. Spiders are found in dark corners, behind furniture, in garages, attics, under rocks and in vegetation. Their abundant presence often indicates other pests they feed on. Control includes reducing harborage, sealing entries and perimeter treatment."
    },
    {
      id: "bedbugs",
      nameEs: "Chinches de Cama",
      nameEn: "Bed Bugs",
      icon: "bedbug",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/bedbug.jpg", labelEs: "Chinche de Cama", labelEn: "Bed Bug" }
      ],
      descriptionEs: "Los chinches de cama (Cimex lectularius) son pequeños insectos de 5-7mm, ovalados y aplanados, de color marrón rojizo que se oscurece después de alimentarse. Se alimentan exclusivamente de sangre, principalmente humana, durante la noche mientras dormimos. Sus picaduras causan ronchas rojas con picazón intensa que aparecen en líneas o grupos. Se esconden en costuras de colchones, marcos de cama, muebles, grietas de paredes, detrás de cuadros y tomacorrientes. Son excelentes viajeros: se propagan a través de equipaje, muebles usados, ropa y visitantes. Una hembra puede poner 200-500 huevos en su vida. Son extremadamente difíciles de eliminar sin tratamiento profesional debido a su capacidad de sobrevivir meses sin alimentarse y resistencia a muchos pesticidas. El tratamiento requiere preparación exhaustiva del área y posiblemente múltiples aplicaciones.",
      descriptionEn: "Bed bugs (Cimex lectularius) are small insects 5-7mm, oval and flat, reddish-brown that darkens after feeding. They feed exclusively on blood, mainly human, at night while we sleep. Their bites cause red welts with intense itching that appear in lines or clusters. They hide in mattress seams, bed frames, furniture, wall cracks, behind pictures and outlets. They're excellent travelers: spread through luggage, used furniture, clothing and visitors. A female can lay 200-500 eggs in her lifetime. They're extremely difficult to eliminate without professional treatment due to their ability to survive months without feeding and resistance to many pesticides. Treatment requires thorough area preparation and possibly multiple applications."
    },
    {
      id: "flies",
      nameEs: "Moscas",
      nameEn: "Flies",
      icon: "fly",
      methods: ["fumigation", "traps"],
      images: [
        { src: "/images/pests/fly.jpg", labelEs: "Mosca Doméstica", labelEn: "House Fly" }
      ],
      descriptionEs: "La mosca doméstica (Musca domestica) es una de las plagas más comunes y peligrosas para la salud. Miden 6-7mm, son grises con cuatro franjas oscuras en el tórax. Se posan en basura, excremento, carne en descomposición y cualquier materia orgánica putrefacta, luego contaminan alimentos y superficies. Transmiten más de 100 patógenos incluyendo salmonela, E. coli, cólera, disentería, tuberculosis y parásitos intestinales. No pueden masticar, así que vomitan enzimas digestivas sobre los alimentos antes de absorberlos. Una mosca puede transportar hasta 6 millones de bacterias. Se reproducen rápidamente: una hembra pone hasta 500 huevos en su vida de 30 días, y el ciclo de huevo a adulto toma solo 7-10 días en clima cálido. El control requiere eliminar fuentes de reproducción, manejo adecuado de basura, y tratamientos con cebos y residuales.",
      descriptionEn: "The house fly (Musca domestica) is one of the most common and dangerous health pests. They measure 6-7mm, are gray with four dark stripes on the thorax. They land on garbage, excrement, decomposing meat and any putrid organic matter, then contaminate food and surfaces. They transmit over 100 pathogens including salmonella, E. coli, cholera, dysentery, tuberculosis and intestinal parasites. They cannot chew, so they vomit digestive enzymes on food before absorbing it. A fly can carry up to 6 million bacteria. They reproduce quickly: a female lays up to 500 eggs in her 30-day life, and the egg-to-adult cycle takes only 7-10 days in warm weather. Control requires eliminating breeding sources, proper garbage management, and bait and residual treatments."
    },
    {
      id: "wasps",
      nameEs: "Avispas y Abejas",
      nameEn: "Wasps and Bees",
      icon: "wasp",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/wasp.jpg", labelEs: "Avispa", labelEn: "Wasp" }
      ],
      descriptionEs: "Las avispas y abejas son insectos sociales que construyen nidos en aleros, árboles, paredes huecas, áticos y bajo tierra. Las avispas comunes en Puerto Rico incluyen la avispa papelera, el avispón y la avispa amarilla (yellow jacket). A diferencia de las abejas que mueren después de picar, las avispas pueden picar múltiples veces y son más agresivas, especialmente cuando se sienten amenazadas o se acerca alguien a su nido. Las picaduras causan dolor intenso, hinchazón y enrojecimiento; para personas alérgicas pueden provocar anafilaxis potencialmente mortal. Las abejas africanizadas, presentes en la isla, son particularmente agresivas y pueden perseguir a personas por largas distancias. La remoción de nidos debe ser realizada únicamente por profesionales con equipo de protección adecuado, preferiblemente al anochecer cuando los insectos están menos activos.",
      descriptionEn: "Wasps and bees are social insects that build nests in eaves, trees, hollow walls, attics and underground. Common wasps in Puerto Rico include paper wasps, hornets and yellow jackets. Unlike bees that die after stinging, wasps can sting multiple times and are more aggressive, especially when threatened or when someone approaches their nest. Stings cause intense pain, swelling and redness; for allergic people they can cause potentially fatal anaphylaxis. Africanized bees, present on the island, are particularly aggressive and can chase people for long distances. Nest removal should only be done by professionals with proper protective equipment, preferably at dusk when insects are less active."
    },
    {
      id: "scorpions",
      nameEs: "Alacranes / Escorpiones",
      nameEn: "Scorpions",
      icon: "scorpion",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/scorpion.jpg", labelEs: "Alacrán", labelEn: "Scorpion" }
      ],
      descriptionEs: "Los alacranes o escorpiones son arácnidos con pinzas frontales y una cola segmentada terminada en aguijón venenoso. En Puerto Rico hay varias especies nativas, siendo las más comunes de color marrón a negro y de 5-10 cm. Son nocturnos y se esconden durante el día bajo rocas, troncos, escombros, en grietas y dentro de zapatos o ropa dejada en el suelo. Entran a las casas buscando agua, refugio o siguiendo a sus presas (insectos). Su picadura causa dolor intenso similar a una quemadura, hinchazón y en algunos casos síntomas sistémicos que requieren atención médica, especialmente en niños, ancianos o personas sensibles. Para prevenir encuentros: sacudir zapatos y ropa antes de usarlos, sellar grietas, mantener el perímetro de la casa libre de escombros, y usar luz negra (UV) para detectarlos de noche ya que brillan fluorescentes.",
      descriptionEn: "Scorpions are arachnids with front pincers and a segmented tail ending in a venomous stinger. In Puerto Rico there are several native species, the most common being brown to black and 5-10 cm. They are nocturnal and hide during the day under rocks, logs, debris, in cracks and inside shoes or clothing left on the ground. They enter homes looking for water, shelter or following their prey (insects). Their sting causes intense burning-like pain, swelling and in some cases systemic symptoms requiring medical attention, especially in children, elderly or sensitive people. To prevent encounters: shake shoes and clothing before wearing, seal cracks, keep the home perimeter free of debris, and use black light (UV) to detect them at night as they glow fluorescent."
    },
    {
      id: "centipedes",
      nameEs: "Ciempiés",
      nameEn: "Centipedes",
      icon: "centipede",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/centipede.jpg", labelEs: "Ciempiés Tropical", labelEn: "Tropical Centipede" }
      ],
      descriptionEs: "Los ciempiés son artrópodos depredadores con cuerpos largos y segmentados, cada segmento con un par de patas. En Puerto Rico encontramos el ciempiés gigante tropical (Scolopendra spp.) que puede alcanzar hasta 20 cm de largo. Son de color rojizo, marrón o negro, con patas amarillentas. Son nocturnos y se esconden en lugares oscuros y húmedos: bajo rocas, troncos, hojas, en sótanos, baños y áreas con humedad. Tienen colmillos venenosos (forcípulas) que usan para paralizar presas. Su mordedura en humanos causa dolor intenso, hinchazón, enrojecimiento y en casos raros síntomas sistémicos. Aunque no son agresivos, muerden en defensa propia si se sienten amenazados o atrapados. El control incluye reducir humedad, eliminar refugios alrededor de la casa, sellar entradas y tratamiento perimetral.",
      descriptionEn: "Centipedes are predatory arthropods with long, segmented bodies, each segment with a pair of legs. In Puerto Rico we find the tropical giant centipede (Scolopendra spp.) that can reach up to 20 cm long. They are reddish, brown or black colored, with yellowish legs. They are nocturnal and hide in dark, humid places: under rocks, logs, leaves, in basements, bathrooms and humid areas. They have venomous fangs (forcipules) used to paralyze prey. Their bite in humans causes intense pain, swelling, redness and in rare cases systemic symptoms. Although not aggressive, they bite in self-defense if threatened or trapped. Control includes reducing humidity, eliminating harborage around the home, sealing entries and perimeter treatment."
    },
    {
      id: "ticks",
      nameEs: "Garrapatas",
      nameEn: "Ticks",
      icon: "tick",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/tick.jpg", labelEs: "Garrapata", labelEn: "Tick" }
      ],
      descriptionEs: "Las garrapatas son arácnidos parásitos que se alimentan de sangre de mamíferos, aves y reptiles. En Puerto Rico son comunes la garrapata marrón del perro (Rhipicephalus sanguineus) y la garrapata tropical (Amblyomma spp.). Esperan en vegetación alta hasta detectar un huésped por el calor corporal y CO2. Una vez adheridas, pueden alimentarse por días e hincharse hasta 100 veces su tamaño. Transmiten enfermedades graves como ehrlichiosis, anaplasmosis y fiebre manchada. La garrapata debe ser removida con pinzas lo más cerca de la piel posible, tirando firmemente sin girar. El control requiere tratar mascotas regularmente, mantener el césped corto, eliminar hojas y escombros, y aplicar tratamientos en áreas de vegetación alta.",
      descriptionEn: "Ticks are parasitic arachnids that feed on blood from mammals, birds and reptiles. In Puerto Rico the brown dog tick (Rhipicephalus sanguineus) and tropical tick (Amblyomma spp.) are common. They wait on tall vegetation until detecting a host by body heat and CO2. Once attached, they can feed for days and swell to 100 times their size. They transmit serious diseases like ehrlichiosis, anaplasmosis and spotted fever. The tick should be removed with tweezers as close to the skin as possible, pulling firmly without twisting. Control requires treating pets regularly, keeping grass short, eliminating leaves and debris, and applying treatments in tall vegetation areas."
    },
    {
      id: "fleas",
      nameEs: "Pulgas",
      nameEn: "Fleas",
      icon: "flea",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/flea.jpg", labelEs: "Pulga", labelEn: "Flea" }
      ],
      descriptionEs: "Las pulgas son pequeños insectos sin alas (2-3mm) de color marrón oscuro con cuerpo aplanado lateralmente que les permite moverse entre el pelo de sus huéspedes. Tienen patas traseras adaptadas para saltar hasta 150 veces su longitud corporal. La pulga del gato (Ctenocephalides felis) es la más común y afecta tanto a perros como gatos y humanos. Sus picaduras causan ronchas rojas con picazón intensa, generalmente en tobillos y piernas. Pueden transmitir enfermedades como tifus murino y tenias. Las pulgas adultas viven en el huésped, pero los huevos caen al ambiente (alfombras, camas de mascotas, muebles) donde larvas y pupas pueden sobrevivir meses esperando vibraciones que indiquen un huésped. El control efectivo requiere tratar simultáneamente mascotas, interiores y exteriores, además de lavar ropa de cama a alta temperatura.",
      descriptionEn: "Fleas are small wingless insects (2-3mm) dark brown with laterally flattened bodies that allow them to move between their hosts' hair. They have hind legs adapted to jump up to 150 times their body length. The cat flea (Ctenocephalides felis) is most common and affects both dogs, cats and humans. Their bites cause red welts with intense itching, usually on ankles and legs. They can transmit diseases like murine typhus and tapeworms. Adult fleas live on the host, but eggs fall into the environment (carpets, pet beds, furniture) where larvae and pupae can survive months waiting for vibrations indicating a host. Effective control requires simultaneously treating pets, indoors and outdoors, plus washing bedding at high temperature."
    },
    {
      id: "moths",
      nameEs: "Polillas",
      nameEn: "Moths",
      icon: "moth",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/moth.jpg", labelEs: "Polilla", labelEn: "Moth" }
      ],
      descriptionEs: "Las polillas incluyen varias especies problemáticas. La polilla de la ropa (Tineola bisselliella) es pequeña (6-8mm), dorada, y sus larvas destruyen telas de fibras naturales como lana, seda, algodón y plumas, especialmente si están sucias con sudor o manchas de alimentos. La polilla de despensa (Plodia interpunctella) infesta productos almacenados como cereales, harinas, frutos secos y chocolate, dejando telarañas sedosas. Las polillas del césped (gusano soldado, gusano cogollero) causan daño durante su etapa larval, alimentándose de las hojas y raíces del pasto, causando manchas marrones. Los adultos son atraídos por la luz nocturna. El control de polillas de ropa incluye limpieza regular, almacenamiento hermético y tratamiento de armarios. Para despensa, descartar productos infestados y limpiar profundamente. Para césped, tratamiento con insecticidas específicos.",
      descriptionEn: "Moths include several problematic species. The clothes moth (Tineola bisselliella) is small (6-8mm), golden, and its larvae destroy natural fiber fabrics like wool, silk, cotton and feathers, especially if dirty with sweat or food stains. The pantry moth (Plodia interpunctella) infests stored products like cereals, flour, dried fruits and chocolate, leaving silky webs. Lawn moths (armyworm, fall armyworm) cause damage during larval stage, feeding on grass leaves and roots, causing brown patches. Adults are attracted to night lights. Clothes moth control includes regular cleaning, airtight storage and closet treatment. For pantry, discard infested products and deep clean. For lawn, treatment with specific insecticides."
    },
    {
      id: "aphids",
      nameEs: "Áfidos / Pulgones",
      nameEn: "Aphids",
      icon: "aphid",
      methods: ["fumigation"],
      images: [
        { src: "/images/pests/aphid.jpg", labelEs: "Áfidos", labelEn: "Aphids" }
      ],
      descriptionEs: "Los áfidos o pulgones son pequeños insectos de cuerpo blando (1-3mm) que pueden ser verdes, amarillos, negros, marrones o rosados según la especie. Se alimentan succionando la savia de plantas a través de un estilete. Se agrupan en colonias densas en hojas nuevas, brotes tiernos, tallos y botones florales. Causan deformación de hojas, amarillamiento, marchitez y debilitamiento general de la planta. Excretan una sustancia azucarada llamada melaza que promueve el crecimiento de hongos negros (fumagina) y atrae hormigas. Son vectores de numerosos virus vegetales. Se reproducen extremadamente rápido: las hembras pueden parir crías vivas sin necesidad de machos (partenogénesis), produciendo varias generaciones en pocas semanas. El control incluye lavado con agua a presión, jabón insecticida, aceites hortícolas y tratamientos sistémicos para plantas ornamentales.",
      descriptionEn: "Aphids are small soft-bodied insects (1-3mm) that can be green, yellow, black, brown or pink depending on species. They feed by sucking plant sap through a stylet. They cluster in dense colonies on new leaves, tender shoots, stems and flower buds. They cause leaf deformation, yellowing, wilting and general plant weakening. They excrete a sugary substance called honeydew that promotes black sooty mold growth and attracts ants. They are vectors of numerous plant viruses. They reproduce extremely fast: females can give live birth without males (parthenogenesis), producing several generations in a few weeks. Control includes pressure water washing, insecticidal soap, horticultural oils and systemic treatments for ornamental plants."
    }
  ],

  // Service Types (Residential vs Commercial)
  serviceTypes: {
    residential: {
      titleEs: "Servicio Residencial",
      titleEn: "Residential Service",
      descriptionEs: "Protegemos su hogar y familia con tratamientos seguros y efectivos. Ofrecemos planes de mantenimiento para mantener su casa libre de plagas todo el año.",
      descriptionEn: "We protect your home and family with safe and effective treatments. We offer maintenance plans to keep your home pest-free all year round.",
      image: "/images/residential-service.jpg",
      benefits: {
        es: [
          "Tratamientos seguros cuando se siguen las instrucciones",
          "Horarios flexibles",
          "Protección interior y exterior",
          "Planes de mantenimiento mensual",
          "Garantía condicionada de servicio"
        ],
        en: [
          "Treatments safe when instructions are followed",
          "Flexible scheduling",
          "Indoor and outdoor protection",
          "Monthly maintenance plans",
          "Conditional service guarantee"
        ]
      }
    },
    commercial: {
      titleEs: "Servicio Comercial",
      titleEn: "Commercial Service",
      descriptionEs: "Mantenemos su negocio libre de plagas cumpliendo con todas las regulaciones sanitarias. Servicio discreto y profesional para no interrumpir sus operaciones.",
      descriptionEn: "We keep your business pest-free while complying with all health regulations. Discreet and professional service to not interrupt your operations.",
      image: "/images/commercial-service.jpg",
      benefits: {
        es: [
          "Documentación para inspecciones",
          "Horarios fuera de operación",
          "Servicio discreto",
          "Respuesta rápida"
        ],
        en: [
          "Documentation for inspections",
          "After-hours service",
          "Discreet service",
          "Quick response"
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
