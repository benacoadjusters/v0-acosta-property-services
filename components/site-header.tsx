"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Clock, Globe, Bug, TreePine, Wrench, SprayCan, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

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
        <div className="container mx-auto flex h-24 items-center justify-between px-4">
          {/* Logo - Bigger */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Acosta Property Services"
              width={280}
              height={100}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              href="/" 
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              {t.nav.home}
            </Link>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted">
                  {t.nav.services}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                <DropdownMenuItem asChild>
                  <Link href="/services" className="flex flex-col items-start gap-1 p-3">
                    <span className="font-medium">{language === "es" ? "Todos los Servicios" : "All Services"}</span>
                    <span className="text-xs text-muted-foreground">
                      {language === "es" ? "Ver todas las categorías" : "View all categories"}
                    </span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* 1. Control de Plagas */}
                <DropdownMenuItem asChild>
                  <Link href="/services/pest-control" className="flex items-center gap-3 p-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Bug className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-medium">{language === "es" ? "Control de Plagas" : "Pest Control"}</span>
                      <p className="text-xs text-muted-foreground">{language === "es" ? "Fumigación y trampas" : "Fumigation & traps"}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                {/* 2. Plomería */}
                <DropdownMenuItem asChild>
                  <Link href="/services/plumbing" className="flex items-center gap-3 p-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-cyan-500/10">
                      <Wrench className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div>
                      <span className="font-medium">{language === "es" ? "Plomería" : "Plumbing"}</span>
                      <p className="text-xs text-muted-foreground">{language === "es" ? "Reparaciones y destapes" : "Repairs & unclogging"}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                {/* 3. Electricidad */}
                <DropdownMenuItem asChild>
                  <Link href="/services/electrical" className="flex items-center gap-3 p-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-yellow-500/10">
                      <Zap className="h-4 w-4 text-yellow-600" />
                    </div>
                    <div>
                      <span className="font-medium">{language === "es" ? "Electricidad" : "Electrical"}</span>
                      <p className="text-xs text-muted-foreground">{language === "es" ? "Instalaciones y reparaciones" : "Installations & repairs"}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                {/* 4. Jardinería */}
                <DropdownMenuItem asChild>
                  <Link href="/services/landscaping" className="flex items-center gap-3 p-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-green-500/10">
                      <TreePine className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <span className="font-medium">{language === "es" ? "Jardinería" : "Landscaping"}</span>
                      <p className="text-xs text-muted-foreground">{language === "es" ? "Corte y poda" : "Mowing & pruning"}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
                {/* 5. Limpieza */}
                <DropdownMenuItem asChild>
                  <Link href="/services/cleaning" className="flex items-center gap-3 p-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-500/10">
                      <SprayCan className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <span className="font-medium">{language === "es" ? "Limpieza" : "Cleaning"}</span>
                      <p className="text-xs text-muted-foreground">{language === "es" ? "Limpieza profesional" : "Professional cleaning"}</p>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link 
              href="/about" 
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              {t.nav.about}
            </Link>
            <Link 
              href="/gallery" 
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              {t.nav.gallery}
            </Link>
            <Link 
              href="/faq" 
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
            >
              {t.nav.faq}
            </Link>
          </nav>

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
                      <div className="py-2">
                        <Link 
                          href="/services" 
                          className="block text-lg font-medium hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {t.nav.services}
                        </Link>
                        <div className="mt-2 ml-4 space-y-1 border-l-2 border-muted pl-3">
                          {/* 1. Control de Plagas */}
                          <Link 
                            href="/services/pest-control" 
                            className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Bug className="h-4 w-4 text-primary" />
                            {language === "es" ? "Control de Plagas" : "Pest Control"}
                          </Link>
                          {/* 2. Plomería */}
                          <Link 
                            href="/services/plumbing" 
                            className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-cyan-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Wrench className="h-4 w-4 text-cyan-600" />
                            {language === "es" ? "Plomería" : "Plumbing"}
                          </Link>
                          {/* 3. Electricidad */}
                          <Link 
                            href="/services/electrical" 
                            className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-yellow-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <Zap className="h-4 w-4 text-yellow-600" />
                            {language === "es" ? "Electricidad" : "Electrical"}
                          </Link>
                          {/* 4. Jardinería */}
                          <Link 
                            href="/services/landscaping" 
                            className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-green-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <TreePine className="h-4 w-4 text-green-600" />
                            {language === "es" ? "Jardinería" : "Landscaping"}
                          </Link>
                          {/* 5. Limpieza */}
                          <Link 
                            href="/services/cleaning" 
                            className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            <SprayCan className="h-4 w-4 text-blue-600" />
                            {language === "es" ? "Limpieza" : "Cleaning"}
                          </Link>
                        </div>
                      </div>
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


