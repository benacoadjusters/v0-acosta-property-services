"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { company } from "@/content/company"
import { useLanguage } from "@/lib/language-context"

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="hidden items-center gap-6 md:flex">
            <a href={`tel:${company.phoneClean}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="h-4 w-4" />
              <span>{company.phone}</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{language === "es" ? "Lun-Vie: 8AM-6PM" : "Mon-Fri: 8AM-6PM"}</span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-2 md:w-auto md:justify-end md:gap-4">
            <a href={`tel:${company.phoneClean}`} className="flex items-center gap-1.5 md:hidden">
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span className="text-xs font-medium truncate">{company.phone}</span>
            </a>
            
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="text-primary-foreground hover:bg-primary-foreground/10 gap-1 font-semibold px-2 md:px-3 md:gap-1.5"
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Globe className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="uppercase text-xs md:text-sm">{language === "es" ? "ES" : "EN"}</span>
            </Button>
            
            <Button 
              asChild 
              size="sm" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-xs px-2 md:text-sm md:px-3"
            >
              <Link href="/contact">{t.ui.getQuote}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="Acosta Property Services"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex flex-1 justify-center">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/">{t.nav.home}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/services">{t.nav.services}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">{t.nav.about}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/gallery">{t.nav.gallery}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/faq">{t.nav.faq}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/contact">{t.nav.contact}</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t.ui.openMenu}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Navigation menu</SheetDescription>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b p-4">
                  <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <Image
                      src="/images/logo.png"
                      alt="Acosta Property Services"
                      width={160}
                      height={55}
                      className="h-12 w-auto"
                    />
                  </Link>
                </div>
                <nav className="flex-1 overflow-y-auto p-4">
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        href="/" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t.nav.home}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/services" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t.nav.services}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/about" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t.nav.about}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/gallery" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t.nav.gallery}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/faq" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t.nav.faq}
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {t.nav.contact}
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="border-t p-4 space-y-3">
                  {/* Mobile Language Toggle */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2"
                    onClick={() => setLanguage(language === "es" ? "en" : "es")}
                  >
                    <Globe className="h-4 w-4" />
                    {language === "es" ? "Switch to English" : "Cambiar a Español"}
                  </Button>
                  <a 
                    href={`tel:${company.phoneClean}`} 
                    className="flex items-center gap-2 text-primary font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    {company.phone}
                  </a>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      {t.ui.getQuote}
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


