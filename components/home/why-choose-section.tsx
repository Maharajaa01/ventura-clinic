import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const reasons = [
  { title: "Experienced Professionals", description: "Expert dermatologists with years of experience" },
  { title: "Advanced Technology", description: "Latest equipment and proven treatment methods" },
  { title: "Affordable Pricing", description: "Premium care at competitive rates" },
  { title: "Safe & Hygienic", description: "Certified facilities with highest standards" },
  { title: "Proven Results", description: "Thousands of satisfied clients" },
  { title: "Personalized Care", description: "Customized treatment plans for each client" },
]

export function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Ventura Clinic</h2>
          <p className="text-lg text-foreground/70">Excellence in every aspect of patient care</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                    <p className="text-foreground/70">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
