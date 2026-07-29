"use client"

import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

// FAQ data directly in the component for easier maintenance
const faqData = {
  es: {
    general: [
      {
        question: "¿Qué servicios ofrecen actualmente?",
        answer: "Actualmente ofrecemos 3 servicios activos: control de plagas, lavado a presión y limpieza de paneles solares para hogares, negocios y propiedades comerciales en Puerto Rico. Próximamente añadiremos jardinería, limpieza, limpieza de ventanas, limpieza de mallas, luces navideñas y lavado suave."
      },
      {
        question: "¿Ofrecen cotizaciones gratis?",
        answer: "Sí. Puedes solicitar una cotización y te orientamos según el servicio que necesitas, el tipo de propiedad y la ubicación."
      },
      {
        question: "¿Qué áreas cubren?",
        answer: "Ofrecemos servicio en Puerto Rico y trabajamos con propiedades residenciales y comerciales en distintos municipios de la isla."
      },
      {
        question: "¿Atienden hogares y negocios?",
        answer: "Sí. Atendemos propiedades residenciales, oficinas, comercios y otros espacios comerciales según el servicio solicitado."
      },
      {
        question: "¿Cómo puedo coordinar un servicio?",
        answer: "Puedes llamar al (787) 403-9980 o usar la opción de cotización para indicar el servicio que necesitas."
      }
    ],
    pestControl: [
      {
        question: "¿Qué plagas atienden?",
        answer: "Atendemos plagas comunes como cucarachas, hormigas, roedores, comején, mosquitos, chinches, arañas y otras plagas según la evaluación."
      },
      {
        question: "¿Cada cuánto debo hacer control de plagas?",
        answer: "Depende del tipo de propiedad, la actividad de plagas y el nivel de prevención que busques. Podemos orientarte según tu caso."
      },
      {
        question: "¿Tengo que salir de la propiedad durante el tratamiento?",
        answer: "Depende del tratamiento aplicado. Antes del servicio te indicamos las instrucciones de preparación y seguridad correspondientes."
      },
      {
        question: "¿Qué hago si vuelvo a ver plagas después del servicio?",
        answer: "Comunícate con nosotros para revisar la situación y orientarte sobre el próximo paso según el tipo de tratamiento realizado."
      }
    ],
    landscaping: [
      {
        question: "¿Qué incluye el servicio de jardinería?",
        answer: "Incluye servicios como corte de grama, poda, mantenimiento de jardines, limpieza de áreas verdes y mejoras exteriores."
      },
      {
        question: "¿Puedo coordinar mantenimiento recurrente?",
        answer: "Sí. Podemos orientarte sobre mantenimiento regular según el tamaño de la propiedad y la frecuencia que necesites."
      },
      {
        question: "¿Atienden propiedades comerciales?",
        answer: "Sí. Trabajamos áreas verdes de hogares, negocios, oficinas, condominios y otras propiedades comerciales."
      }
    ],
    cleaning: [
      {
        question: "¿Qué tipos de limpieza ofrecen?",
        answer: "Ofrecemos limpieza residencial, comercial, profunda, mantenimiento regular y limpieza post-construcción."
      },
      {
        question: "¿Hacen limpieza de oficinas?",
        answer: "Sí. Podemos coordinar limpieza para oficinas y espacios comerciales según el tamaño y la frecuencia necesaria."
      },
      {
        question: "¿Hacen limpieza post-construcción?",
        answer: "Sí. Atendemos limpieza después de construcción o remodelación para dejar el espacio listo para usarse."
      }
    ],
    windowCleaning: [
      {
        question: "¿Qué incluye el servicio de limpieza de ventanas y cristales (window cleaning)?",
        answer: "Incluye limpieza profesional de ventanas interiores y exteriores, marcos, tracks y cristales de diferentes tipos."
      },
      {
        question: "¿Limpian ventanas en edificios altos?",
        answer: "Dependiendo del acceso y altura, podemos orientarte sobre las opciones disponibles para tu propiedad."
      },
      {
        question: "¿Con qué frecuencia debo limpiar las ventanas?",
        answer: "Recomendamos limpieza cada 3-6 meses dependiendo de la ubicación y exposición de tu propiedad."
      }
    ],
    screenCleaning: [
      {
        question: "¿Qué incluye el servicio de limpieza de mallas para ventanas (screen cleaning)?",
        answer: "Incluye limpieza de mallas de ventanas y puertas para remover polvo, suciedad y residuos acumulados."
      },
      {
        question: "¿Pueden reparar mallas dañadas?",
        answer: "El servicio se enfoca en limpieza. Para reparaciones podemos orientarte según la condición de la malla."
      }
    ],
    christmasLights: [
      {
        question: "¿Qué incluye el servicio de instalación de luces navideñas (Christmas lights)?",
        answer: "Incluye instalación profesional de luces navideñas, diseño de iluminación, retiro después de temporada y almacenamiento si lo necesitas."
      },
      {
        question: "¿Cuándo debo coordinar la instalación?",
        answer: "Recomendamos coordinar en octubre o noviembre para asegurar disponibilidad antes de la temporada."
      },
      {
        question: "¿Proveen las luces o uso las mías?",
        answer: "Podemos trabajar con tus luces existentes o ayudarte a seleccionar opciones según el diseño que desees."
      }
    ],
    pressureWash: [
      {
        question: "¿Qué superficies pueden limpiar con lavado a presión (pressure wash)?",
        answer: "Limpiamos concreto, aceras, entradas de auto, patios, paredes exteriores, cercas y otras superficies resistentes."
      },
      {
        question: "¿Puede dañar mi propiedad el lavado a presión?",
        answer: "Usamos la presión adecuada para cada superficie. Para materiales delicados recomendamos lavado suave (soft wash)."
      },
      {
        question: "¿Cada cuánto debo hacer lavado a presión?",
        answer: "Depende de la exposición y condiciones de tu propiedad. Generalmente 1-2 veces al año mantiene las superficies limpias."
      }
    ],
    softWash: [
      {
        question: "¿Qué es el lavado suave (soft wash) y cuándo se usa?",
        answer: "Lavado suave es una técnica de limpieza a baja presión con soluciones especializadas, ideal para techos, siding, estuco y superficies delicadas."
      },
      {
        question: "¿Por qué lavado suave en lugar de lavado a presión?",
        answer: "Lavado suave es más seguro para materiales que pueden dañarse con alta presión, como tejas, madera y pintura."
      },
      {
        question: "¿El lavado suave remueve moho y hongos?",
        answer: "Sí. Las soluciones especializadas eliminan moho, hongos, algas y otros contaminantes orgánicos."
      }
    ],
    solarPanelCleaning: [
      {
        question: "¿Por qué debo limpiar mis paneles solares?",
        answer: "La suciedad, polvo y residuos reducen la eficiencia de los paneles. Limpieza regular mantiene su producción óptima."
      },
      {
        question: "¿Cada cuánto debo limpiar los paneles solares?",
        answer: "Recomendamos limpieza cada 6-12 meses dependiendo de la exposición a polvo, hojas y otros residuos."
      },
      {
        question: "¿Es seguro limpiar paneles solares?",
        answer: "Sí. Usamos técnicas y equipos seguros que no dañan los paneles ni afectan su garantía."
      }
    ],
    screenCleaning: [
      {
        question: "¿Qué incluye el servicio de screen cleaning?",
        answer: "Incluye limpieza de screens, mosquiteros y mallas de ventanas para remover polvo, suciedad y residuos acumulados."
      },
      {
        question: "¿Pueden reparar screens dañados?",
        answer: "El servicio se enfoca en limpieza. Para reparaciones podemos orientarte según la condición del screen."
      }
    ],
    christmasLights: [
      {
        question: "¿Qué incluye el servicio de Christmas lights?",
        answer: "Incluye instalación profesional de luces navideñas, diseño de iluminación, retiro después de temporada y almacenamiento si lo necesitas."
      },
      {
        question: "¿Cuándo debo coordinar la instalación?",
        answer: "Recomendamos coordinar en octubre o noviembre para asegurar disponibilidad antes de la temporada."
      },
      {
        question: "¿Proveen las luces o uso las mías?",
        answer: "Podemos trabajar con tus luces existentes o ayudarte a seleccionar opciones según el diseño que desees."
      }
    ],
    pressureWash: [
      {
        question: "¿Qué superficies pueden limpiar con lavado a presión?",
        answer: "Limpiamos concreto, aceras, entradas de auto, patios, paredes exteriores, cercas y otras superficies resistentes."
      },
      {
        question: "¿Puede dañar mi propiedad el lavado a presión?",
        answer: "Usamos la presión adecuada para cada superficie. Para materiales delicados recomendamos lavado suave."
      },
      {
        question: "¿Cada cuánto debo hacer lavado a presión?",
        answer: "Depende de la exposición y condiciones de tu propiedad. Generalmente 1-2 veces al año mantiene las superficies limpias."
      }
    ],
    softWash: [
      {
        question: "¿Qué es soft wash y cuándo se usa?",
        answer: "Soft wash es una técnica de limpieza a baja presión con soluciones especializadas, ideal para techos, siding, estuco y superficies delicadas."
      },
      {
        question: "¿Por qué lavado suave en lugar de lavado a presión?",
        answer: "El lavado suave es más seguro para materiales que pueden dañarse con alta presión, como tejas, madera y pintura."
      },
      {
        question: "¿El soft wash remueve moho y hongos?",
        answer: "Sí. Las soluciones especializadas eliminan moho, hongos, algas y otros contaminantes orgánicos."
      }
    ],
    solarPanelCleaning: [
      {
        question: "¿Por qué debo limpiar mis paneles solares?",
        answer: "La suciedad, polvo y residuos reducen la eficiencia de los paneles. Limpieza regular mantiene su producción óptima."
      },
      {
        question: "¿Cada cuánto debo limpiar los paneles?",
        answer: "Recomendamos limpieza cada 6-12 meses dependiendo de la exposición a polvo, hojas y otros residuos."
      },
      {
        question: "¿Es seguro limpiar paneles solares?",
        answer: "Sí. Usamos técnicas y equipos seguros que no dañan los paneles ni afectan su garantía."
      }
    ],
    comingSoon: [
      {
        question: "¿Qué servicios estarán disponibles próximamente?",
        answer: "Próximamente estaremos activando jardinería, limpieza, limpieza de ventanas, limpieza de mallas, luces navideñas y lavado suave. También trabajamos en servicios de plomería, electricidad, mitigación de daños por agua, reparaciones y mantenimiento general, sellado de techos y mitigación de plomo y asbesto."
      },
      {
        question: "¿Puedo pedir información sobre un servicio próximamente?",
        answer: "Sí. Puedes contactarnos para dejar tu información y recibir orientación cuando el servicio esté disponible."
      }
    ]
  },
  en: {
    general: [
      {
        question: "What services do you currently offer?",
        answer: "We currently offer 3 active services: pest control, pressure wash and solar panel cleaning for homes, businesses and commercial properties in Puerto Rico. Coming soon we'll add landscaping, cleaning, window cleaning, screen cleaning, Christmas lights and soft wash."
      },
      {
        question: "Do you offer free quotes?",
        answer: "Yes. You can request a quote and we'll guide you based on the service you need, property type and location."
      },
      {
        question: "What areas do you cover?",
        answer: "We offer service in Puerto Rico and work with residential and commercial properties in different municipalities across the island."
      },
      {
        question: "Do you serve homes and businesses?",
        answer: "Yes. We serve residential properties, offices, businesses and other commercial spaces depending on the service requested."
      },
      {
        question: "How can I schedule a service?",
        answer: "You can call (787) 403-9980 or use the quote option to indicate the service you need."
      }
    ],
    pestControl: [
      {
        question: "What pests do you handle?",
        answer: "We handle common pests such as cockroaches, ants, rodents, termites, mosquitoes, bed bugs, spiders and other pests based on evaluation."
      },
      {
        question: "How often should I have pest control?",
        answer: "It depends on the property type, pest activity and the level of prevention you're looking for. We can guide you based on your case."
      },
      {
        question: "Do I need to leave the property during treatment?",
        answer: "It depends on the treatment applied. Before the service, we'll provide you with the corresponding preparation and safety instructions."
      },
      {
        question: "What if I see pests again after treatment?",
        answer: "Contact us to review the situation and guide you on the next step based on the type of treatment performed."
      }
    ],
    landscaping: [
      {
        question: "What does the landscaping service include?",
        answer: "It includes services like lawn mowing, pruning, garden maintenance, green area cleaning and exterior improvements."
      },
      {
        question: "Can I schedule recurring maintenance?",
        answer: "Yes. We can guide you on regular maintenance based on property size and the frequency you need."
      },
      {
        question: "Do you serve commercial properties?",
        answer: "Yes. We work on green areas of homes, businesses, offices, condominiums and other commercial properties."
      }
    ],
    cleaning: [
      {
        question: "What types of cleaning do you offer?",
        answer: "We offer residential, commercial, deep cleaning, regular maintenance and post-construction cleaning."
      },
      {
        question: "Do you do office cleaning?",
        answer: "Yes. We can coordinate cleaning for offices and commercial spaces based on size and frequency needed."
      },
      {
        question: "Do you do post-construction cleaning?",
        answer: "Yes. We handle cleaning after construction or remodeling to leave the space ready for use."
      }
    ],
    windowCleaning: [
      {
        question: "What does window cleaning service include?",
        answer: "It includes professional cleaning of interior and exterior windows, frames, tracks and various types of glass."
      },
      {
        question: "Do you clean windows on tall buildings?",
        answer: "Depending on access and height, we can guide you on available options for your property."
      },
      {
        question: "How often should I clean windows?",
        answer: "We recommend cleaning every 3-6 months depending on your property's location and exposure."
      }
    ],
    screenCleaning: [
      {
        question: "What does screen cleaning service include?",
        answer: "It includes cleaning of screens, mosquito nets and window meshes to remove dust, dirt and accumulated residue."
      },
      {
        question: "Can you repair damaged screens?",
        answer: "The service focuses on cleaning. For repairs we can guide you based on the screen condition."
      }
    ],
    christmasLights: [
      {
        question: "What does Christmas lights service include?",
        answer: "It includes professional installation of Christmas lights, lighting design, removal after the season and storage if needed."
      },
      {
        question: "When should I schedule installation?",
        answer: "We recommend scheduling in October or November to ensure availability before the season."
      },
      {
        question: "Do you provide the lights or do I use mine?",
        answer: "We can work with your existing lights or help you select options based on your desired design."
      }
    ],
    pressureWash: [
      {
        question: "What surfaces can you clean with pressure wash?",
        answer: "We clean concrete, sidewalks, driveways, patios, exterior walls, fences and other resistant surfaces."
      },
      {
        question: "Can pressure wash damage my property?",
        answer: "We use appropriate pressure for each surface. For delicate materials we recommend soft wash."
      },
      {
        question: "How often should I pressure wash?",
        answer: "It depends on exposure and conditions of your property. Generally 1-2 times per year keeps surfaces clean."
      }
    ],
    softWash: [
      {
        question: "What is soft wash and when is it used?",
        answer: "Soft wash is a low-pressure cleaning technique with specialized solutions, ideal for roofs, siding, stucco and delicate surfaces."
      },
      {
        question: "Why soft wash instead of pressure wash?",
        answer: "Soft wash is safer for materials that can be damaged by high pressure, like shingles, wood and paint."
      },
      {
        question: "Does soft wash remove mold and mildew?",
        answer: "Yes. Specialized solutions eliminate mold, mildew, algae and other organic contaminants."
      }
    ],
    solarPanelCleaning: [
      {
        question: "Why should I clean my solar panels?",
        answer: "Dirt, dust and debris reduce panel efficiency. Regular cleaning maintains their optimal production."
      },
      {
        question: "How often should I clean the panels?",
        answer: "We recommend cleaning every 6-12 months depending on exposure to dust, leaves and other debris."
      },
      {
        question: "Is it safe to clean solar panels?",
        answer: "Yes. We use safe techniques and equipment that don't damage panels or affect their warranty."
      }
    ],
    comingSoon: [
      {
        question: "What services will be available soon?",
        answer: "Coming soon we'll activate landscaping, cleaning, window cleaning, screen cleaning, Christmas lights and soft wash. We're also working on plumbing, electrical, water damage mitigation, handyman repairs, roof sealing and lead & asbestos mitigation services."
      },
      {
        question: "Can I request information about a coming soon service?",
        answer: "Yes. You can contact us to leave your information and receive guidance when the service becomes available."
      }
    ]
  }
}

export default function FAQPage() {
  const { language, t } = useLanguage()

  const currentFaqs = faqData[language]
  
  const faqCategories = language === "es" ? [
    { id: "general", title: "Preguntas generales", data: currentFaqs.general },
    { id: "pestControl", title: "Control de Plagas", data: currentFaqs.pestControl },
    { id: "pressureWash", title: "Lavado a presión", data: currentFaqs.pressureWash },
    { id: "solarPanelCleaning", title: "Limpieza de paneles solares", data: currentFaqs.solarPanelCleaning },
    { id: "comingSoon", title: "Servicios próximamente", data: currentFaqs.comingSoon },
  ] : [
    { id: "general", title: "General Questions", data: currentFaqs.general },
    { id: "pestControl", title: "Pest Control", data: currentFaqs.pestControl },
    { id: "pressureWash", title: "Pressure Wash", data: currentFaqs.pressureWash },
    { id: "solarPanelCleaning", title: "Solar Panel Cleaning", data: currentFaqs.solarPanelCleaning },
    { id: "comingSoon", title: "Coming Soon Services", data: currentFaqs.comingSoon },
  ]

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {language === "es" ? "Soporte" : "Support"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              {language === "es" ? "Preguntas frecuentes" : "Frequently Asked Questions"}
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              {language === "es" 
                ? "Respuestas claras sobre nuestros 3 servicios activos, cobertura y cotizaciones en Puerto Rico."
                : "Clear answers about our 3 active services, coverage and quotes in Puerto Rico."}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.id} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.data.map((faq, i) => (
                    <AccordionItem 
                      key={i} 
                      value={`${category.id}-${i}`} 
                      className="bg-card border rounded-lg mb-3 px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="font-medium text-foreground">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {language === "es" ? "¿Todavía tienes preguntas?" : "Still have questions?"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {language === "es" 
                ? "Llámanos o solicita una cotización y te orientamos según el servicio que necesita tu propiedad."
                : "Call us or request a quote and we'll guide you based on the service your property needs."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">{t.ui.getQuote}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${company.phoneClean}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  {t.ui.callNow}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
