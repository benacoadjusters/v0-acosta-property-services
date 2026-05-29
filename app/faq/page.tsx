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
import { CTASection } from "@/components/sections/cta-section"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

// FAQ data directly in the component for easier maintenance
const faqData = {
  es: {
    general: [
      {
        question: "¿Qué servicios ofrecen actualmente?",
        answer: "Actualmente ofrecemos control de plagas, plomería, electricidad, jardinería y limpieza para hogares, negocios y propiedades comerciales en Puerto Rico."
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
    plumbing: [
      {
        question: "¿Qué problemas de plomería atienden?",
        answer: "Atendemos fugas, destapes, reparación de tuberías, calentadores de agua, grifos, inodoros y accesorios de plomería."
      },
      {
        question: "¿Atienden destapes?",
        answer: "Sí. Podemos ayudarte con destapes de desagües, inodoros, lavabos y líneas según la situación."
      },
      {
        question: "¿Trabajan calentadores de agua?",
        answer: "Sí. Atendemos instalación, reparación y mantenimiento de calentadores de agua según el tipo de equipo y condición."
      }
    ],
    electrical: [
      {
        question: "¿Qué servicios eléctricos ofrecen?",
        answer: "Ofrecemos servicios para paneles, breakers, tomacorrientes, switches, iluminación y abanicos de techo."
      },
      {
        question: "¿Pueden instalar abanicos de techo?",
        answer: "Sí. Podemos ayudarte con instalación de abanicos de techo y otros trabajos eléctricos relacionados."
      },
      {
        question: "¿Atienden propiedades comerciales?",
        answer: "Sí. Atendemos necesidades eléctricas en hogares, negocios y propiedades comerciales según el alcance del trabajo."
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
    comingSoon: [
      {
        question: "¿Qué servicios estarán disponibles próximamente?",
        answer: "Próximamente estaremos trabajando servicios de mitigación de daños por agua, reparaciones handyman, sellado de techos y mitigación de plomo y asbesto."
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
        answer: "We currently offer pest control, plumbing, electrical, landscaping and cleaning for homes, businesses and commercial properties in Puerto Rico."
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
    plumbing: [
      {
        question: "What plumbing problems do you handle?",
        answer: "We handle leaks, drain cleaning, pipe repair, water heaters, faucets, toilets and plumbing fixtures."
      },
      {
        question: "Do you handle drain cleaning?",
        answer: "Yes. We can help you with drain cleaning for drains, toilets, sinks and lines depending on the situation."
      },
      {
        question: "Do you work on water heaters?",
        answer: "Yes. We handle installation, repair and maintenance of water heaters depending on the type of equipment and condition."
      }
    ],
    electrical: [
      {
        question: "What electrical services do you offer?",
        answer: "We offer services for panels, breakers, outlets, switches, lighting and ceiling fans."
      },
      {
        question: "Can you install ceiling fans?",
        answer: "Yes. We can help you with ceiling fan installation and other related electrical work."
      },
      {
        question: "Do you serve commercial properties?",
        answer: "Yes. We handle electrical needs in homes, businesses and commercial properties depending on the scope of work."
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
    comingSoon: [
      {
        question: "What services will be available soon?",
        answer: "Coming soon we'll be working on water damage mitigation, handyman repairs, roof sealing and lead & asbestos mitigation services."
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
    { id: "plumbing", title: "Plomería", data: currentFaqs.plumbing },
    { id: "electrical", title: "Electricidad", data: currentFaqs.electrical },
    { id: "landscaping", title: "Jardinería", data: currentFaqs.landscaping },
    { id: "cleaning", title: "Limpieza", data: currentFaqs.cleaning },
    { id: "comingSoon", title: "Servicios próximamente", data: currentFaqs.comingSoon },
  ] : [
    { id: "general", title: "General Questions", data: currentFaqs.general },
    { id: "pestControl", title: "Pest Control", data: currentFaqs.pestControl },
    { id: "plumbing", title: "Plumbing", data: currentFaqs.plumbing },
    { id: "electrical", title: "Electrical", data: currentFaqs.electrical },
    { id: "landscaping", title: "Landscaping", data: currentFaqs.landscaping },
    { id: "cleaning", title: "Cleaning", data: currentFaqs.cleaning },
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
                ? "Respuestas claras sobre nuestros servicios, cobertura y cotizaciones en Puerto Rico."
                : "Clear answers about our services, coverage and quotes in Puerto Rico."}
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

      <CTASection />
    </>
  )
}
