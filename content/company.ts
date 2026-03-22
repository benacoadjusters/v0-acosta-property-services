// Company Information - Edit these values to customize your site
export const company = {
  name: "Acosta Property Services",
  shortName: "Acosta",
  tagline: "Protecting What Matters Most",
  description: "Professional pest control and property services for homes and businesses across Puerto Rico. Trusted by thousands of customers since 2010.",
  
  // Contact Information
  phone: "(787) 555-0123",
  phoneClean: "7875550123",
  email: "info@acostapropertyservices.com",
  
  // Address
  address: {
    street: "123 Calle Principal",
    city: "San Juan",
    state: "PR",
    zip: "00901",
    full: "123 Calle Principal, San Juan, PR 00901"
  },
  
  // Business Hours
  hours: {
    weekdays: "Mon-Fri: 7:00 AM - 6:00 PM",
    saturday: "Sat: 8:00 AM - 2:00 PM",
    sunday: "Sun: Closed",
    emergency: "24/7 Emergency Service Available"
  },
  
  // Social Media Links
  social: {
    facebook: "https://facebook.com/acostapropertyservices",
    instagram: "https://instagram.com/acostapropertyservices",
    google: "https://g.page/acostapropertyservices",
    yelp: "https://yelp.com/biz/acosta-property-services"
  },
  
  // Licenses & Certifications
  licenses: [
    "Licensed & Insured",
    "EPA Certified",
    "Puerto Rico Pest Control License #12345"
  ],
  
  // Trust Points / Value Propositions
  trustPoints: [
    {
      title: "Licensed & Insured",
      description: "Fully licensed and insured for your peace of mind"
    },
    {
      title: "Same-Day Service",
      description: "Emergency and same-day appointments available"
    },
    {
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction guarantee on all services"
    },
    {
      title: "Eco-Friendly Options",
      description: "Safe treatments for families and pets"
    }
  ],
  
  // Guarantees
  guarantees: [
    "100% Satisfaction Guarantee",
    "Free Re-Treatment if Pests Return",
    "No Hidden Fees",
    "Licensed & Insured Technicians"
  ],
  
  // Stats / Achievements
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "10,000+", label: "Happy Customers" },
    { value: "50+", label: "Municipalities Served" },
    { value: "24/7", label: "Emergency Support" }
  ],
  
  // About Content
  about: {
    story: "Founded in 2010, Acosta Property Services began with a simple mission: to provide Puerto Rico with reliable, professional pest control services that families and businesses can trust. What started as a small family operation has grown into one of the island's most respected property service providers.",
    mission: "Our mission is to protect homes and businesses from pests while prioritizing the safety of families, pets, and the environment. We believe in delivering exceptional service with integrity, transparency, and a commitment to excellence.",
    values: [
      {
        title: "Integrity",
        description: "We do what's right, even when no one is watching."
      },
      {
        title: "Excellence",
        description: "We strive for the highest quality in every service."
      },
      {
        title: "Customer First",
        description: "Your satisfaction is our top priority."
      },
      {
        title: "Safety",
        description: "We use safe, effective treatments for your family."
      }
    ]
  },
  
  // Process Steps
  process: [
    {
      step: 1,
      title: "Free Inspection",
      description: "We thoroughly inspect your property to identify pest issues and entry points."
    },
    {
      step: 2,
      title: "Custom Plan",
      description: "We create a tailored treatment plan based on your specific needs and concerns."
    },
    {
      step: 3,
      title: "Expert Treatment",
      description: "Our certified technicians apply safe, effective treatments to eliminate pests."
    },
    {
      step: 4,
      title: "Ongoing Protection",
      description: "We provide follow-up visits and preventive care to keep pests away."
    }
  ]
} as const

export type Company = typeof company
