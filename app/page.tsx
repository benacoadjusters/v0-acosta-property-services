import { HeroSection } from "@/components/sections/hero-section"
import { TrustBar } from "@/components/sections/trust-bar"
import { FeaturedServices } from "@/components/sections/featured-services"
import { ServiceTypesSection } from "@/components/sections/service-types-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { ProcessSection } from "@/components/sections/process-section"
import { PestsPreview } from "@/components/sections/pests-preview"
import { ServiceAreasPreview } from "@/components/sections/service-areas-preview"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { GalleryPreview } from "@/components/sections/gallery-preview"
import { FAQPreview } from "@/components/sections/faq-preview"
import { company } from "@/content/company"

// JSON-LD Schema for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PestControlService",
  "name": company.name,
  "description": company.description,
  "url": "https://acostapropertyservices.com",
  "telephone": company.phone,
  "email": company.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": company.address.street,
    "addressLocality": company.address.city,
    "addressRegion": company.address.state,
    "postalCode": company.address.zip,
    "addressCountry": "PR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.4655",
    "longitude": "-66.1057"
  },
  "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-14:00",
  "areaServed": {
    "@type": "State",
    "name": "Puerto Rico"
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  }
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <TrustBar />
      <FeaturedServices />
      <ServiceTypesSection />
      <WhyChooseUs />
      <ProcessSection />
      <PestsPreview />
      <ServiceAreasPreview />
      <TestimonialsSection />
      <GalleryPreview />
      <FAQPreview />
    </>
  )
}
