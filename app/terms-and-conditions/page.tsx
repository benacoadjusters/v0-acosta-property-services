"use client"

import Link from "next/link"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

export default function TermsAndConditionsPage() {
  const { language } = useLanguage()
  const es = language === "es"

  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Legal
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
              {es ? "Términos y Condiciones" : "Terms and Conditions"}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground text-pretty">
              {es
                ? "Términos aplicables al uso de este sitio web, sus formularios y las solicitudes de servicios realizadas a través de la plataforma."
                : "Terms governing the use of this website, its forms, and service requests submitted through the platform."}
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              {es ? "Última actualización:" : "Last updated:"} {es ? "14 de abril de 2026" : "April 14, 2026"}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 md:space-y-10">

              {/* 1 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "1. Aceptación" : "1. Acceptance"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Al acceder, navegar o utilizar este sitio web, así como al completar cualquier formulario de contacto, cotización, consulta o solicitud de servicio, usted acepta estos Términos y Condiciones y la Política de Privacidad de ${company.name}. Si no está de acuerdo con alguno de estos términos, no utilice este sitio web ni envíe información a través de sus formularios.`
                    : `By accessing, browsing, or using this website, and by completing any contact, quote, inquiry, or service request form, you agree to these Terms and Conditions and the Privacy Policy of ${company.name}. If you do not agree with any of these terms, do not use this website or submit information through its forms.`}
                </p>
              </div>

              {/* 2 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "2. Objeto del Sitio" : "2. Purpose of the Website"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Este sitio web tiene fines informativos, comerciales y de generación de consultas sobre los servicios ofrecidos por ${company.name}, incluyendo control de plagas, plomería, electricidad, jardinería y limpieza para propiedades residenciales y comerciales en Puerto Rico. El sitio también puede presentar servicios en desarrollo o próximamente disponibles, como mitigación de daños por agua, reparaciones handyman, sellado de techos y mitigación de plomo y asbesto. La información publicada en el sitio tiene carácter general y puede actualizarse, corregirse o modificarse sin previo aviso.`
                    : `This website is intended for informational, commercial, and lead-generation purposes regarding the services offered by ${company.name}, including pest control, plumbing, electrical, landscaping and cleaning for residential and commercial properties in Puerto Rico. The site may also present services in development or coming soon, such as water damage mitigation, handyman repairs, roof sealing and lead and asbestos mitigation. Information published on the site is general in nature and may be updated, corrected, or modified without prior notice.`}
                </p>
              </div>

              {/* 3 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "3. No Formación Automática de Contrato" : "3. No Automatic Contract Formation"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `El uso del sitio web, el envío de formularios, el intercambio de correos electrónicos, mensajes o llamadas, o la recepción de una respuesta inicial por parte de ${company.name} no crea por sí solo una relación contractual, profesional, fiduciaria, de cliente o de representación de ningún tipo. Ningún trabajo, proyecto, tratamiento, visita técnica, inspección o servicio se considerará aceptado u obligado hasta que exista confirmación expresa por escrito por parte de ${company.name} y, cuando aplique, una propuesta, orden de trabajo, estimado o acuerdo firmado.`
                    : `Use of the website, submission of forms, exchange of emails, messages, or calls, or receipt of an initial response from ${company.name} does not by itself create a contractual, professional, fiduciary, client, or representation relationship of any kind. No work, project, treatment, site visit, inspection, or service shall be deemed accepted or binding unless expressly confirmed in writing by ${company.name} and, when applicable, through a proposal, work order, estimate, or signed agreement.`}
                </p>
              </div>

              {/* 4 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "4. Información de Servicios, Estimados y Disponibilidad" : "4. Service Information, Estimates, and Availability"}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  {es
                    ? `Toda descripción de servicios, tiempos estimados, proyecciones, disponibilidad, alcance preliminar, cotizaciones orientativas, fotografías, ejemplos o referencias publicadas en el sitio se presentan únicamente con fines informativos o ilustrativos. Cualquier precio, plazo, disponibilidad de materiales, tiempo de respuesta o resultado esperado es preliminar y no vinculante hasta ser confirmado por escrito por ${company.name} luego de la evaluación correspondiente.`
                    : `All service descriptions, estimated timelines, projections, availability statements, preliminary scopes, indicative quotes, photographs, examples, or references published on the site are provided for informational or illustrative purposes only. Any pricing, timeline, material availability, response time, or expected result is preliminary and non-binding unless confirmed in writing by ${company.name} after the appropriate evaluation.`}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? "La disponibilidad de servicios puede depender, entre otros factores, de ubicación geográfica, inspección del sitio, acceso a la propiedad, condiciones existentes, inventario, disponibilidad de personal, requisitos regulatorios, condiciones estructurales, clima y otras variables operacionales o técnicas."
                    : "Service availability may depend on factors including, without limitation, geographic location, site inspection, property access, existing conditions, inventory, staffing availability, regulatory requirements, structural conditions, weather, and other operational or technical variables."}
                </p>
              </div>

              {/* 5 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "5. Obligaciones del Usuario" : "5. User Obligations"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? "Usted acepta proporcionar información verdadera, exacta, actual y completa al utilizar el sitio web o cualquier formulario. También acepta no enviar contenido falso, fraudulento, difamatorio, ilegal o técnicamente dañino. Usted es responsable de asegurar que cuenta con autorización suficiente para compartir la información, datos de la propiedad o datos de contacto que nos remita."
                    : "You agree to provide true, accurate, current, and complete information when using the website or any form. You also agree not to submit false, fraudulent, defamatory, unlawful, or technically harmful content. You are responsible for ensuring that you have sufficient authority to share any information, property details, or contact information you submit to us."}
                </p>
              </div>

              {/* 6 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "6. Uso del Formulario y Comunicaciones" : "6. Form Use and Communications"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Cuando usted envía un formulario a través del sitio, autoriza a ${company.name} a comunicarse con usted utilizando la información de contacto provista para responder a su consulta, evaluar su solicitud, coordinar visitas, emitir propuestas, dar seguimiento operativo o prestar servicios relacionados con su solicitud. Este consentimiento operacional o transaccional no implica por sí solo consentimiento para comunicaciones promocionales. Cualquier comunicación promocional deberá manejarse conforme al consentimiento aplicable que usted haya otorgado.`
                    : `When you submit a form through the site, you authorize ${company.name} to contact you using the contact information provided in order to respond to your inquiry, evaluate your request, coordinate visits, issue proposals, conduct operational follow-up, or provide services related to your request. This operational or transactional consent does not by itself constitute consent for promotional communications. Any promotional communication must be handled in accordance with the applicable consent you have provided.`}
                </p>
              </div>

              {/* 7 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "7. Datos Sensibles" : "7. Sensitive Information"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Salvo que ${company.name} se lo solicite expresamente por un canal seguro, no envíe a través del sitio web información altamente sensible, incluyendo números de seguro social, datos bancarios completos, datos de tarjetas de pago, credenciales de acceso, información médica, información tributaria u otra información confidencial que no sea razonablemente necesaria para atender su solicitud inicial.`
                    : `Unless ${company.name} expressly requests it through a secure channel, do not submit highly sensitive information through the website, including Social Security numbers, full bank details, payment card data, login credentials, medical information, tax information, or other confidential information not reasonably necessary to process your initial request.`}
                </p>
              </div>

              {/* 8 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "8. Propiedad Intelectual" : "8. Intellectual Property"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Todo el contenido del sitio, incluyendo diseño, estructura, textos, fotografías, gráficos, íconos, marcas, logotipos, nombres comerciales y demás materiales, es propiedad de ${company.name} o de sus respectivos titulares y se encuentra protegido por las leyes aplicables. No se autoriza su reproducción, distribución, modificación o uso comercial sin autorización previa por escrito, salvo lo permitido por ley.`
                    : `All website content, including design, structure, text, photographs, graphics, icons, trademarks, logos, trade names, and other materials, is the property of ${company.name} or its respective owners and is protected by applicable law. No reproduction, distribution, modification, or commercial use is permitted without prior written authorization, except as allowed by law.`}
                </p>
              </div>

              {/* 9 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "9. Usos Prohibidos" : "9. Prohibited Uses"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? "Usted acepta no utilizar el sitio para: interferir con su seguridad o funcionamiento; intentar acceso no autorizado; recopilar datos masivamente; enviar spam; introducir malware; suplantar identidades; infringir derechos de terceros; o realizar actos contrarios a ley, reglamento o buenas prácticas comerciales."
                    : "You agree not to use the site to: interfere with its security or operation; attempt unauthorized access; scrape data at scale; send spam; introduce malware; impersonate others; infringe third-party rights; or engage in acts contrary to law, regulation, or fair commercial practices."}
                </p>
              </div>

              {/* 10 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "10. Terceros, Subcontratistas y Proveedores" : "10. Third Parties, Subcontractors, and Providers"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `${company.name} podrá utilizar suplidores, subcontratistas, plataformas de software, servicios de hosting, servicios de analítica u otros terceros para operar el sitio o prestar parte de los servicios. La participación de terceros no implica renuncia de derechos ni crea responsabilidad adicional más allá de lo establecido por ley o por acuerdos escritos aplicables.`
                    : `${company.name} may use suppliers, subcontractors, software platforms, hosting services, analytics services, or other related third parties to operate the site or provide part of the services. The involvement of third parties does not imply a waiver of rights or create additional liability beyond what is required by law or by applicable written agreements.`}
                </p>
              </div>

              {/* 11 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "11. Garantías y Descargos" : "11. Warranties and Disclaimers"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Salvo que ${company.name} establezca por escrito una garantía específica, el sitio web y su contenido se ofrecen "tal cual" y "según disponibilidad". En la máxima medida permitida por ley, ${company.name} excluye garantías implícitas de exactitud absoluta, disponibilidad ininterrumpida, comerciabilidad y adecuación para un propósito particular respecto del sitio web. Cualquier garantía aplicable a trabajos o materiales será la que conste en el documento contractual correspondiente.`
                    : `Unless ${company.name} provides a specific written warranty, the website and its content are provided "as is" and "as available." To the maximum extent permitted by law, ${company.name} disclaims implied warranties of absolute accuracy, uninterrupted availability, merchantability, and fitness for a particular purpose with respect to the website. Any warranty applicable to work or materials shall be only as stated in the relevant written contract.`}
                </p>
              </div>

              {/* 12 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "12. Limitación de Responsabilidad" : "12. Limitation of Liability"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `En la máxima medida permitida por ley, ${company.name} no será responsable por daños indirectos, incidentales, especiales, punitivos o consecuenciales, ni por lucro cesante, pérdida de ingresos, pérdida de datos, interrupción de negocio o daños derivados del uso o imposibilidad de uso del sitio web, del contenido del sitio, de formularios enviados, de demoras en respuesta o de la confianza depositada en información preliminar del sitio.`
                    : `To the maximum extent permitted by law, ${company.name} shall not be liable for indirect, incidental, special, punitive, or consequential damages, or for lost profits, lost revenue, loss of data, business interruption, or damages arising from the use of or inability to use the website, website content, submitted forms, response delays, or reliance on preliminary information on the site.`}
                </p>
              </div>

              {/* 13 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "13. Indemnización" : "13. Indemnification"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `Usted acepta defender, indemnizar y mantener indemne a ${company.name} frente a reclamaciones, pérdidas, daños, responsabilidades, costos y gastos razonables, incluyendo honorarios legales, que resulten de su uso indebido del sitio, incumplimiento de estos términos, infracción de derechos de terceros o envío de información falsa, ilícita o no autorizada.`
                    : `You agree to defend, indemnify, and hold harmless ${company.name} from claims, losses, damages, liabilities, costs, and reasonable expenses, including attorneys' fees, arising from your misuse of the website, breach of these terms, infringement of third-party rights, or submission of false, unlawful, or unauthorized information.`}
                </p>
              </div>

              {/* 14 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "14. Cambios a estos Términos" : "14. Changes to These Terms"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? `${company.name} podrá modificar estos Términos y Condiciones en cualquier momento. La versión vigente será la publicada en esta página con su fecha de última actualización. El uso continuado del sitio luego de cambios publicados constituye aceptación de la versión revisada.`
                    : `${company.name} may modify these Terms and Conditions at any time. The current version will be the one published on this page with its last updated date. Continued use of the site after posted changes constitutes acceptance of the revised version.`}
                </p>
              </div>

              {/* 15 */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "15. Ley Aplicable y Foro" : "15. Governing Law and Venue"}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {es
                    ? "Estos Términos y Condiciones se regirán e interpretarán de conformidad con las leyes del Estado Libre Asociado de Puerto Rico y las leyes federales de los Estados Unidos aplicables. Salvo disposición legal obligatoria en contrario, cualquier controversia relacionada con el sitio o estos términos deberá presentarse ante los tribunales competentes de Puerto Rico."
                    : "These Terms and Conditions shall be governed by and construed in accordance with the laws of the Commonwealth of Puerto Rico and applicable federal laws of the United States. Unless mandatory law requires otherwise, any dispute related to the site or these terms shall be brought before the competent courts of Puerto Rico."}
                </p>
              </div>

              {/* 16 Contact */}
              <div className="bg-secondary rounded-xl p-6">
                <h2 className="text-xl font-bold text-foreground mb-3">
                  {es ? "16. Contacto" : "16. Contact"}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {es
                    ? "Para preguntas sobre estos Términos y Condiciones, comuníquese con:"
                    : "For questions about these Terms and Conditions, contact:"}
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
