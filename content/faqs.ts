// FAQs Data - Frequently Asked Questions
export const faqs = {
  // General FAQs
  general: [
    {
      question: "How quickly can you come out for service?",
      answer: "We offer same-day service for emergency situations and typically can schedule routine appointments within 24-48 hours. Our team understands that pest problems can't wait."
    },
    {
      question: "Are your treatments safe for children and pets?",
      answer: "Yes, we prioritize the safety of your family and pets. We use EPA-approved products and offer eco-friendly treatment options. Our technicians will always advise you on any precautions needed."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Absolutely! We provide free inspections and estimates for all our services. A technician will assess your property and provide a detailed quote with no obligation."
    },
    {
      question: "What areas do you service?",
      answer: "We proudly serve communities across Puerto Rico, including the San Juan metro area, Ponce, Mayagüez, and surrounding municipalities. Contact us to confirm service in your area."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "Yes, we stand behind our work with a satisfaction guarantee. If pests return between scheduled treatments, we'll come back at no additional cost to address the issue."
    }
  ],
  
  // Pest Control Specific FAQs
  pestControl: [
    {
      question: "How often should I have pest control service?",
      answer: "For most homes in Puerto Rico, we recommend quarterly treatments to maintain protection year-round. However, the frequency may vary based on your specific pest pressures and property type."
    },
    {
      question: "What should I do to prepare for treatment?",
      answer: "We'll provide specific preparation instructions before your appointment. Generally, this includes clearing items from under sinks, ensuring access to walls and baseboards, and covering or storing food items."
    },
    {
      question: "How long does a typical treatment take?",
      answer: "Most residential treatments take 30-60 minutes depending on the size of your home and the type of treatment. Commercial services may take longer based on the facility size."
    },
    {
      question: "Do I need to leave my home during treatment?",
      answer: "For most treatments, you can remain home. However, for certain services like fumigation, you'll need to vacate the property. Your technician will advise you based on the specific treatment."
    },
    {
      question: "What if I see pests after treatment?",
      answer: "It's normal to see some pest activity for a few days after treatment as pests come into contact with the product. If activity persists beyond 2 weeks, contact us for a free follow-up visit."
    }
  ],
  
  // Termite FAQs
  termite: [
    {
      question: "How do I know if I have termites?",
      answer: "Common signs include mud tubes on walls or foundations, hollow-sounding wood, discarded wings near windows or doors, and small piles of what looks like sawdust. If you notice any of these signs, contact us for a free inspection."
    },
    {
      question: "How long does termite treatment take?",
      answer: "Treatment time depends on the method used and the size of your property. Liquid treatments typically take one day, while baiting systems are installed over 1-2 days with ongoing monitoring."
    },
    {
      question: "Are termite treatments covered by homeowner's insurance?",
      answer: "Unfortunately, most homeowner's insurance policies do not cover termite damage or treatment. This is why preventive treatment is so important to protect your investment."
    }
  ],
  
  // Commercial FAQs
  commercial: [
    {
      question: "Do you offer after-hours service for businesses?",
      answer: "Yes, we understand that many businesses need service outside of normal operating hours. We offer flexible scheduling including evenings, weekends, and holidays to minimize disruption to your operations."
    },
    {
      question: "Can you help us meet health department requirements?",
      answer: "Absolutely. We provide detailed documentation of all services performed, which can be used for health inspections and compliance records. We're familiar with food service and healthcare industry requirements."
    },
    {
      question: "Do you offer maintenance contracts?",
      answer: "Yes, we offer customized maintenance programs for businesses of all sizes. These provide regular preventive treatments, priority scheduling, and often include cost savings compared to individual service calls."
    }
  ],
  
  // Pricing FAQs
  pricing: [
    {
      question: "How much does pest control cost?",
      answer: "Pricing varies based on the type of service, size of your property, and severity of the infestation. We provide free estimates so you know exactly what to expect with no surprises."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment options including monthly billing for maintenance programs. Contact us to discuss the options that work best for your budget."
    },
    {
      question: "Are there any hidden fees?",
      answer: "Never. We believe in transparent pricing. The quote you receive includes all costs, and we'll never charge extra without your approval."
    }
  ]
} as const

export type FAQCategory = keyof typeof faqs
export type FAQ = { question: string; answer: string }
