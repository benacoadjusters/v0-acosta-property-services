// Navigation Data - Site Structure
export const navigation = {
  // Main Navigation Items
  mainNav: [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "Services",
      href: "/services",
      children: [
        {
          name: "All Services",
          href: "/services",
          description: "View all our property services"
        },
        {
          name: "Pest Control",
          href: "/services/pest-control",
          description: "Complete pest elimination and prevention"
        },
        {
          name: "Residential Pest Control",
          href: "/services/residential-pest-control",
          description: "Protect your home and family"
        },
        {
          name: "Commercial Pest Control",
          href: "/services/commercial-pest-control",
          description: "Keep your business pest-free"
        },
        {
          name: "Common Pests",
          href: "/pests",
          description: "Learn about common pests in Puerto Rico"
        }
      ]
    },
    {
      name: "Service Areas",
      href: "/service-areas"
    },
    {
      name: "About",
      href: "/about"
    },
    {
      name: "Gallery",
      href: "/gallery"
    },
    {
      name: "Reviews",
      href: "/reviews"
    },
    {
      name: "FAQ",
      href: "/faq"
    },
    {
      name: "Contact",
      href: "/contact"
    }
  ],
  
  // Footer Navigation Sections
  footerNav: {
    services: {
      title: "Services",
      links: [
        { name: "Pest Control", href: "/services/pest-control" },
        { name: "Residential", href: "/services/residential-pest-control" },
        { name: "Commercial", href: "/services/commercial-pest-control" },
        { name: "All Services", href: "/services" }
      ]
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Gallery", href: "/gallery" },
        { name: "Reviews", href: "/reviews" },
        { name: "FAQ", href: "/faq" },
        { name: "Contact", href: "/contact" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Common Pests", href: "/pests" },
        { name: "Service Areas", href: "/service-areas" },
        { name: "Free Estimate", href: "/contact" }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  }
} as const

export type Navigation = typeof navigation
