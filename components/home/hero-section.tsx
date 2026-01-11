import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Advanced Hair & Skin Treatments at <span className="text-primary">Ventura Clinic</span>
              </h1>
              <p className="text-xl text-foreground/80">New Hair Growth Treatment – Exosomes Therapy Now Available</p>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Experience cutting-edge dermatology treatments with proven results. Our expert team uses advanced
              technology for natural, safe outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact#appointment">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Book Appointment
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/5 w-full sm:w-auto bg-transparent"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-80 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <img
              src="/hair-treatment-clinic.jpg"
              alt="Hair treatment at Ventura Clinic"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
    </section>
  )
}
