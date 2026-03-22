import { Suspense } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { company } from "@/content/company"
import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact Us | Acosta Property Services",
  description: "Get a free pest control estimate. Contact Acosta Property Services for residential and commercial pest control in Puerto Rico.",
}

function ContactFormFallback() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Request a Free Estimate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 animate-pulse">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-10 bg-muted rounded" />
            <div className="h-10 bg-muted rounded" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="h-10 bg-muted rounded" />
            <div className="h-10 bg-muted rounded" />
          </div>
          <div className="h-32 bg-muted rounded" />
          <div className="h-12 bg-muted rounded" />
        </div>
      </CardContent>
    </Card>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Get Your Free Estimate
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Ready to protect your property? Fill out the form below and we'll contact you within 24 hours. For immediate assistance, give us a call.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Suspense fallback={<ContactFormFallback />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href={`tel:${company.phoneClean}`}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">{company.phone}</div>
                      <div className="text-sm text-muted-foreground">Call or text</div>
                    </div>
                  </a>
                  <a 
                    href={`mailto:${company.email}`}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">{company.email}</div>
                      <div className="text-sm text-muted-foreground">Email us anytime</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">{company.address.city}, {company.address.state}</div>
                      <div className="text-sm text-muted-foreground">{company.address.full}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div className="text-sm">
                      <div>{company.hours.weekdays}</div>
                      <div>{company.hours.saturday}</div>
                      <div className="text-muted-foreground">{company.hours.sunday}</div>
                    </div>
                  </div>
                  <div className="pt-3 border-t">
                    <div className="text-sm text-primary font-medium">
                      {company.hours.emergency}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Need Immediate Help?</h3>
                  <p className="opacity-80 text-sm mb-4">
                    For urgent pest problems, call us directly for same-day service.
                  </p>
                  <Button asChild variant="secondary" className="w-full">
                    <a href={`tel:${company.phoneClean}`}>
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-16">
          <div className="aspect-[21/9] bg-muted rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">Map placeholder - Add your Google Maps embed here</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
