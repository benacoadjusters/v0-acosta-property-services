import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company } from "@/content/company"
import { navigation } from "@/content/navigation"
import { serviceAreas } from "@/content/service-areas"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-balance max-w-2xl">
              Ready to Protect Your Property?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl text-pretty">
              Get a free, no-obligation estimate today. Our expert technicians are ready to help you enjoy a pest-free home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <a href={`tel:${company.phoneClean}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call {company.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                A
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Acosta</span>
                <span className="text-xs text-background/60 leading-tight">Property Services</span>
              </div>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm text-pretty">
              {company.description}
            </p>
            <div className="space-y-3">
              <a href={`tel:${company.phoneClean}`} className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                <Phone className="h-5 w-5 text-primary" />
                <span>{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-background/80 hover:text-background transition-colors">
                <Mail className="h-5 w-5 text-primary" />
                <span>{company.email}</span>
              </a>
              <div className="flex items-start gap-3 text-background/80">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span>{company.address.full}</span>
              </div>
              <div className="flex items-start gap-3 text-background/80">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p>{company.hours.weekdays}</p>
                  <p>{company.hours.saturday}</p>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
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

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{navigation.footerNav.services.title}</h3>
            <ul className="space-y-3">
              {navigation.footerNav.services.links.map((link) => (
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

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{navigation.footerNav.company.title}</h3>
            <ul className="space-y-3">
              {navigation.footerNav.company.links.map((link) => (
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

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.featuredMunicipalities.slice(0, 6).map((area) => (
                <li key={area}>
                  <Link 
                    href="/service-areas" 
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/service-areas" 
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              {navigation.footerNav.legal.links.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="hover:text-background transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-center md:text-right">
              {company.licenses[0]} | {company.licenses[1]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
