// Testimonials Data - Customer Reviews
export const testimonials = [
  {
    id: 1,
    name: "María González",
    location: "San Juan, PR",
    rating: 5,
    text: "Acosta Property Services solved our ant problem when no one else could. Their technician was professional, explained everything clearly, and the results were immediate. Highly recommend!",
    service: "Residential Pest Control",
    featured: true
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    location: "Bayamón, PR",
    rating: 5,
    text: "We've been using Acosta for our restaurant for over 3 years. They understand the food service industry and keep us compliant. Their flexible scheduling works perfectly with our business hours.",
    service: "Commercial Pest Control",
    featured: true
  },
  {
    id: 3,
    name: "Ana Martínez",
    location: "Carolina, PR",
    rating: 5,
    text: "After finding termites in our home, I was devastated. Acosta came out the same day, assessed the damage, and had a treatment plan in place within the week. They saved our home!",
    service: "Termite Control",
    featured: true
  },
  {
    id: 4,
    name: "Roberto Díaz",
    location: "Guaynabo, PR",
    rating: 5,
    text: "The mosquito reduction program changed our backyard. We can finally enjoy evenings outside without being eaten alive. Worth every penny.",
    service: "Mosquito Control",
    featured: true
  },
  {
    id: 5,
    name: "Laura Sánchez",
    location: "Ponce, PR",
    rating: 5,
    text: "Professional, punctual, and effective. The team at Acosta treats our property like their own. We've recommended them to all our neighbors.",
    service: "Residential Pest Control",
    featured: false
  },
  {
    id: 6,
    name: "Miguel Torres",
    location: "Caguas, PR",
    rating: 5,
    text: "As a property manager, I need reliable pest control for multiple units. Acosta handles everything efficiently and their reporting makes my job easier.",
    service: "Commercial Pest Control",
    featured: false
  },
  {
    id: 7,
    name: "Carmen Vega",
    location: "Mayagüez, PR",
    rating: 5,
    text: "I was hesitant about pest control around my kids and pets, but Acosta uses family-safe products and took the time to explain everything. Great experience!",
    service: "Residential Pest Control",
    featured: false
  },
  {
    id: 8,
    name: "José Rivera",
    location: "Arecibo, PR",
    rating: 5,
    text: "Quick response, fair pricing, and excellent results. The cockroach problem is gone and they set us up on a maintenance plan to keep it that way.",
    service: "Residential Pest Control",
    featured: false
  }
] as const

export const reviewStats = {
  averageRating: 4.9,
  totalReviews: 500,
  googleRating: 4.9,
  googleReviews: 312,
  yelpRating: 4.8,
  yelpReviews: 188,
  recommendationRate: 98
}

export type Testimonial = (typeof testimonials)[number]
export type ReviewStats = typeof reviewStats
