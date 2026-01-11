import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  { title: "Hair Treatments", icon: "💇", color: "from-primary/20 to-primary/5" },
  { title: "Skin Treatments", icon: "✨", color: "from-accent/20 to-accent/5" },
  { title: "Advanced Laser", icon: "🔬", color: "from-primary/10 to-accent/10" },
  { title: "Hair Transplant", icon: "🌱", color: "from-accent/20 to-primary/5" },
]

export function ServicesPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-foreground/70">Comprehensive solutions for hair and skin care</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <CardContent className={`p-8 bg-gradient-to-br ${service.color}`}>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
