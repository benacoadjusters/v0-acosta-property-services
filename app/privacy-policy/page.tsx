"use client"

import Link from "next/link"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

export default function PrivacyPolicyPage() {
  const { language } = useLanguage()
  const es = language === "es"

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {es ? "Legal" : "Legal"}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
              {es ? "Política de Privacidad" : "Privacy Policy"}
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              {es
                ? "Cómo recopilamos, usamos, compartimos y protegemos la información personal obtenida a través de este sitio web y sus formularios."
                : "How we collect, use, share, and protect personal information obtained through this website and its forms."}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              {es ? "Última actualización:" : "Last updated:"} {es ? "14 de abril de 2026" : "April 14, 2026"}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-10">

              {/* 1 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "1. Alcance" : "1. Scope"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Esta Política de Privacidad describe cómo ${company.name} recopila, usa, divulga, almacena y protege la información que usted nos proporciona o que se genera al utilizar acostapropertyservices.com, incluyendo formularios, comunicaciones y herramientas integradas en el sitio.`
                    : `This Privacy Policy explains how ${company.name} collects, uses, discloses, stores, and protects information you provide to us or that is generated when you use acostapropertyservices.com, including forms, communications, and tools integrated into the site.`}
                </p>
              </div>

              {/* 2 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "2. Información que Recopilamos" : "2. Information We Collect"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {es
                    ? "Podemos recopilar las siguientes categorías de información, según aplique al sitio y a su interacción con este:"
                    : "We may collect the following categories of information, as applicable to the site and your interaction with it:"}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {es ? "a) Información que usted nos proporciona directamente:" : "a) Information you provide directly:"}
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      <li>{es ? "Nombre completo" : "Full name"}</li>
                      <li>{es ? "Correo electrónico" : "Email address"}</li>
                      <li>{es ? "Número de teléfono" : "Phone number"}</li>
                      <li>{es ? "Tipo de propiedad (residencial o comercial)" : "Property type (residential or commercial)"}</li>
                      <li>{es ? "Municipio o área de la propiedad" : "Municipality or property area"}</li>
                      <li>{es ? "Tipo de servicio solicitado" : "Type of service requested"}</li>
                      <li>{es ? "Descripción del problema o consulta (campo de mensaje)" : "Description of the problem or inquiry (message field)"}</li>
                      <li>{es ? "Cualquier otra información que usted incluya voluntariamente en el formulario" : "Any other information you voluntarily include in the form"}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {es ? "b) Información recopilada automáticamente:" : "b) Information collected automatically:"}
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      <li>{es ? "Dirección IP" : "IP address"}</li>
                      <li>{es ? "Tipo de navegador y dispositivo" : "Browser type and device"}</li>
                      <li>{es ? "Sistema operativo" : "Operating system"}</li>
                      <li>{es ? "Páginas visitadas y tiempo de acceso" : "Pages visited and access time"}</li>
                      <li>{es ? "URL de referencia" : "Referring URL"}</li>
                      <li>{es ? "Cookies, identificadores persistentes y datos de analítica, si están habilitados" : "Cookies, persistent identifiers, and analytics data, if enabled"}</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {es ? "c) Información derivada de comunicaciones:" : "c) Information derived from communications:"}
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                      <li>{es ? "Historial de mensajes, correos o llamadas relacionados con su solicitud" : "History of messages, emails, or calls related to your request"}</li>
                      <li>{es ? "Estado de su consulta o servicio" : "Status of your inquiry or service"}</li>
                      <li>{es ? "Preferencias de contacto" : "Contact preferences"}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "3. Cómo Usamos la Información" : "3. How We Use Information"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {es ? "Podemos usar la información recopilada para:" : "We may use collected information to:"}
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                  <li>{es ? "Responder consultas y solicitudes" : "Respond to inquiries and requests"}</li>
                  <li>{es ? "Preparar estimados, propuestas o alcances preliminares" : "Prepare estimates, proposals, or preliminary scopes"}</li>
                  <li>{es ? "Coordinar llamadas, visitas, inspecciones, tratamientos o servicios" : "Coordinate calls, site visits, inspections, treatments, or services"}</li>
                  <li>{es ? "Verificar detalles del proyecto o de la propiedad" : "Verify project or property details"}</li>
                  <li>{es ? "Prestar, administrar y documentar servicios solicitados" : "Provide, administer, and document requested services"}</li>
                  <li>{es ? "Realizar seguimiento comercial u operacional" : "Conduct commercial or operational follow-up"}</li>
                  <li>{es ? "Mejorar el sitio, su seguridad y la experiencia del usuario" : "Improve the site, its security, and user experience"}</li>
                  <li>{es ? "Cumplir obligaciones legales, regulatorias o contractuales" : "Comply with legal, regulatory, or contractual obligations"}</li>
                  <li>{es ? "Detectar, prevenir o investigar fraude o uso indebido" : "Detect, prevent, or investigate fraud or misuse"}</li>
                  <li>{es ? "Mantener expedientes internos y respaldo operativo" : "Maintain internal records and operational backups"}</li>
                  <li>{es ? "Enviar comunicaciones transaccionales o de servicio" : "Send transactional or service-related communications"}</li>
                  <li>{es ? "Enviar comunicaciones promocionales solo cuando exista base válida conforme a la ley aplicable" : "Send promotional communications only where there is a valid legal basis under applicable law"}</li>
                </ul>
              </div>

              {/* 4 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "4. Cómo Podemos Compartir la Información" : "4. How We May Share Information"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {es
                    ? "Podemos compartir información, en la medida razonablemente necesaria, con:"
                    : "We may share information, to the extent reasonably necessary, with:"}
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                  <li>{es ? "Proveedores de hosting, seguridad, almacenamiento o soporte técnico" : "Hosting, security, storage, or technical support providers"}</li>
                  <li>{es ? "Proveedores de formularios, CRM, correo electrónico, telefonía, WhatsApp Business o calendarios" : "Form, CRM, email, telephony, WhatsApp Business, or calendar providers"}</li>
                  <li>{es ? "Proveedores de analítica o rendimiento del sitio" : "Analytics or site performance providers"}</li>
                  <li>{es ? "Técnicos, instaladores o personal autorizado que participen en la evaluación o ejecución de servicios" : "Technicians, installers, or authorized personnel involved in evaluating or performing services"}</li>
                  <li>{es ? "Distribuidores o suplidores de productos cuando sea necesario para cotizaciones o compatibilidad" : "Product distributors or suppliers when necessary for quotations or compatibility"}</li>
                  <li>{es ? "Asesores profesionales, auditores o representantes legales" : "Professional advisors, auditors, or legal representatives"}</li>
                  <li>{es ? "Autoridades gubernamentales, tribunales o reguladores cuando la ley lo requiera" : "Government authorities, courts, or regulators when required by law"}</li>
                </ul>
              </div>

              {/* 5 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "5. Venta de Información" : "5. Sale of Information"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `${company.name} no vende por dinero la información personal que usted envía a través de los formularios del sitio. No obstante, si el sitio utiliza herramientas de terceros para analítica, publicidad o integraciones, dichos terceros podrían recibir ciertos datos técnicos conforme a sus propias tecnologías y políticas.`
                    : `${company.name} does not sell for money the personal information you submit through the site's forms. However, if the site uses third-party tools for analytics, advertising, or integrations, those third parties may receive certain technical data pursuant to their own technologies and policies.`}
                </p>
              </div>

              {/* 6 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "6. Cookies y Tecnologías Similares" : "6. Cookies and Similar Technologies"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? "El sitio puede utilizar cookies y tecnologías similares para funciones esenciales, seguridad, preferencias, analítica, rendimiento o mejora del servicio. Usted puede configurar su navegador para bloquear o eliminar cookies; sin embargo, ciertas funciones del sitio podrían verse afectadas."
                    : "The site may use cookies and similar technologies for essential functions, security, preferences, analytics, performance, or service improvement. You may configure your browser to block or delete cookies; however, certain site functions may be affected."}
                </p>
              </div>

              {/* 7 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "7. Retención" : "7. Retention"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Conservaremos la información personal durante el tiempo razonablemente necesario para cumplir los fines descritos en esta Política, atender su consulta, mantener expedientes comerciales y operacionales, cumplir obligaciones contractuales o legales, resolver disputas y hacer valer nuestros acuerdos.`
                    : `We retain personal information for as long as reasonably necessary to fulfill the purposes described in this Policy, address your inquiry, maintain business and operational records, comply with contractual or legal obligations, resolve disputes, and enforce our agreements.`}
                </p>
              </div>

              {/* 8 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "8. Seguridad" : "8. Security"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `${company.name} adopta medidas administrativas, técnicas y organizativas razonables para proteger la información personal contra acceso no autorizado, pérdida, uso indebido, alteración o divulgación. Sin embargo, ningún sistema, sitio web o método de almacenamiento es completamente seguro, por lo que no podemos garantizar seguridad absoluta.`
                    : `${company.name} uses reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure. However, no system, website, or storage method is completely secure, and therefore absolute security cannot be guaranteed.`}
                </p>
              </div>

              {/* 9 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "9. Menores de Edad" : "9. Children"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Este sitio no está dirigido a menores de 13 años y ${company.name} no recopila intencionalmente información personal de menores de 13 años a través del sitio. Si usted entiende que un menor nos ha proporcionado información personal sin autorización adecuada, comuníquese con nosotros.`
                    : `This site is not directed to children under 13, and ${company.name} does not knowingly collect personal information from children under 13 through the site. If you believe that a child has provided us with personal information without appropriate authorization, please contact us.`}
                </p>
              </div>

              {/* 10 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "10. Sus Derechos y Opciones" : "10. Your Rights and Choices"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {es
                    ? "Usted puede solicitar, sujeto a la ley aplicable y a verificaciones razonables:"
                    : "Subject to applicable law and reasonable verification, you may request:"}
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                  <li>{es ? "Acceso a cierta información personal que tengamos sobre usted" : "Access to certain personal information we hold about you"}</li>
                  <li>{es ? "Corrección o actualización de información inexacta" : "Correction or updating of inaccurate information"}</li>
                  <li>{es ? "Eliminación de cierta información cuando proceda" : "Deletion of certain information where appropriate"}</li>
                  <li>{es ? "Retiro de consentimiento para comunicaciones promocionales futuras" : "Withdrawal of consent for future promotional communications"}</li>
                  <li>{es ? "Información adicional sobre cómo tratamos sus datos" : "Additional information about how we process your data"}</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
                  {es
                    ? `Para ejercer estas solicitudes, utilice la información de contacto indicada al final de esta Política. ${company.name} podrá requerir información razonable para verificar su identidad.`
                    : `To exercise these requests, use the contact information listed at the end of this Policy. ${company.name} may request reasonable information to verify your identity before processing certain requests.`}
                </p>
              </div>

              {/* 11 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "11. Marketing y Preferencias de Contacto" : "11. Marketing and Contact Preferences"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Usted puede optar por no recibir comunicaciones promocionales de ${company.name} siguiendo las instrucciones de cancelación incluidas en el mensaje aplicable o comunicándose con nosotros directamente. Aun cuando opte por no recibir mensajes promocionales, podremos seguir enviando comunicaciones transaccionales, operacionales, de servicio o de seguimiento relacionadas con solicitudes o servicios existentes.`
                    : `You may opt out of receiving promotional communications from ${company.name} by following the unsubscribe instructions included in the relevant message or by contacting us directly. Even if you opt out of promotional messages, we may continue to send transactional, operational, service-related, or follow-up communications related to existing requests or services.`}
                </p>
              </div>

              {/* 12 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "12. Transferencias y Proveedores Externos" : "12. External Providers and Transfers"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? "Su información puede ser procesada por proveedores tecnológicos o de servicio ubicados fuera de Puerto Rico, incluyendo dentro de otras jurisdicciones de los Estados Unidos, en la medida necesaria para operar el sitio, gestionar comunicaciones o apoyar la prestación de servicios. Al utilizar el sitio y enviarnos información, usted reconoce este tipo de procesamiento conforme a la presente Política."
                    : "Your information may be processed by technology or service providers located outside Puerto Rico, including in other jurisdictions within the United States, as necessary to operate the site, manage communications, or support service delivery. By using the site and submitting information to us, you acknowledge such processing under this Policy."}
                </p>
              </div>

              {/* 13 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "13. Incidentes de Seguridad" : "13. Security Incidents"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Si ${company.name} determina que ocurrió un incidente de seguridad que afecte información personal en una forma que requiera notificación bajo la ley aplicable, se realizarán las notificaciones correspondientes de conformidad con las obligaciones legales vigentes.`
                    : `If ${company.name} determines that a security incident has affected personal information in a manner requiring notice under applicable law, the required notifications will be made in accordance with then-applicable legal obligations.`}
                </p>
              </div>

              {/* 14 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "14. Cambios a esta Política" : "14. Changes to This Policy"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `${company.name} podrá actualizar esta Política de Privacidad ocasionalmente. La versión vigente será la publicada en esta página con la fecha de última actualización correspondiente. El uso continuado del sitio después de la publicación de cambios constituye aceptación de la versión revisada.`
                    : `${company.name} may update this Privacy Policy from time to time. The current version will be the one posted on this page with the corresponding last updated date. Continued use of the site after changes are posted constitutes acceptance of the revised version.`}
                </p>
              </div>

              {/* 15 Contact */}
              <div className="bg-secondary rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "15. Contacto" : "15. Contact"}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {es
                    ? "Si tiene preguntas sobre esta Política de Privacidad o desea ejercer una solicitud relacionada con sus datos, comuníquese con:"
                    : "If you have questions about this Privacy Policy or wish to make a data-related request, contact:"}
                </p>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">{company.name}</p>
                  <p>{company.address.full}</p>
                  <p>
                    <a href={`mailto:${company.email}`} className="text-primary hover:underline">{company.email}</a>
                  </p>
                  <p>
                    <a href={`tel:${company.phoneClean}`} className="text-primary hover:underline">{company.phone}</a>
                  </p>
                  <p>
                    <Link href="/" className="text-primary hover:underline">acostapropertyservices.com</Link>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
