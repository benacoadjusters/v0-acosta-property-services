"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Phone, Clock, ChevronDown, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { company } from "@/content/company"
import { navigation } from "@/content/navigation"

export function SiteHeader() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false)

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
              <span>{company.hours.weekdays}</span>
            </div>
          </div>
          <div className="flex w-full items-center justify-between md:w-auto md:justify-end">
            <a href={`tel:${company.phoneClean}`} className="flex items-center gap-2 md:hidden">
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">{company.phone}</span>
            </a>
            <Button 
              asChild 
              size="sm" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight text-foreground">Acosta</span>
              <span className="text-xs text-muted-foreground leading-tight">Property Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {navigation.mainNav
                      .find((item) => item.name === "Services")
                      ?.children?.map((item) => (
                        <ListItem key={item.href} href={item.href} title={item.name}>
                          {item.description}
                        </ListItem>
                      ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/service-areas" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Service Areas
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Gallery
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/reviews" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Reviews
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/faq" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b p-4">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                      A
                    </div>
                    <span className="font-bold">Acosta Property Services</span>
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
                        Home
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="flex w-full items-center justify-between py-2 text-lg font-medium hover:text-primary transition-colors"
                      >
                        Services
                        <ChevronDown className={cn("h-5 w-5 transition-transform", mobileServicesOpen && "rotate-180")} />
                      </button>
                      {mobileServicesOpen && (
                        <ul className="ml-4 mt-2 space-y-2 border-l-2 border-muted pl-4">
                          {navigation.mainNav
                            .find((item) => item.name === "Services")
                            ?.children?.map((item) => (
                              <li key={item.href}>
                                <Link 
                                  href={item.href}
                                  className="block py-1 text-muted-foreground hover:text-primary transition-colors"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                    <li>
                      <Link 
                        href="/service-areas" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Service Areas
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/about" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/gallery" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/reviews" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Reviews
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/faq" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="/contact" 
                        className="block py-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="border-t p-4 space-y-3">
                  <a 
                    href={`tel:${company.phoneClean}`} 
                    className="flex items-center gap-2 text-primary font-medium"
                  >
                    <Phone className="h-5 w-5" />
                    {company.phone}
                  </a>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Get Free Estimate
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href || "#"}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
