"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

const footerLinks = {
  es: {
    services: [
      { name: "Todos los Servicios", href: "/services" },
      { name: "Fumigación", href: "/services#fumigation" },
      { name: "Exterminación por Trampas", href: "/services#traps" },
      { name: "Control Biológico", href: "/services#biological" },
    ],
    company: [
      { name: "Nosotros", href: "/about" },
      { name: "Galería", href: "/gallery" },
      { name: "Preguntas Frecuentes", href: "/faq" },
      { name: "Contacto", href: "/contact" },
    ],
    legal: [
      { name: "Términos y Condiciones", href: "/terms-and-conditions" },
      { name: "Política de Privacidad", href: "/privacy-policy" },
    ],
  },
  en: {
    services: [
      { name: "All Services", href: "/services" },
      { name: "Fumigation", href: "/services#fumigation" },
      { name: "Trap Extermination", href: "/services#traps" },
      { name: "Biological Control", href: "/services#biological" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Gallery", href: "/gallery" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Terms and Conditions", href: "/terms-and-conditions" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
}

export function SiteFooter() {
  const { language, t } = useLanguage()
  const links = footerLinks[language]

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4 bg-background/95 rounded-lg p-2">
              <Image
                src="/images/logo.png"
                alt="Acosta Property Services"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-background/70 mb-6 text-sm text-pretty">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href={company.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href={company.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.contact.infoTitle}</h3>
            <div className="space-y-3 text-sm">
              <a href={`tel:${company.phoneClean}`} className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                <Phone className="h-4 w-4 text-accent" />
                <span>{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                <span>{company.email}</span>
              </a>
              <div className="flex items-start gap-3 text-background/80">
                <Clock className="h-4 w-4 text-accent mt-0.5" />
                <div>
                  <p>{t.contact.weekdays}: 8AM-6PM</p>
                  <p>{t.contact.saturday}: 9AM-2PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>{company.address.full}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2 text-sm">
              {links.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.footer.companyTitle}</h3>
            <ul className="space-y-2 text-sm">
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-lg mt-6 mb-4">{t.footer.legalTitle}</h3>
            <ul className="space-y-2 text-sm">
              {links.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} {company.name}. {t.footer.copyright}</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-background transition-colors">
                {t.footer.privacy}
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-background transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
