import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

const offers = [
  {
    title: "GFC Hair Treatment",
    price: "₹1999",
    icon: "💇‍♂️",
  },
  {
    title: "PRP Hair Treatment",
    price: "₹999",
    icon: "✨",
  },
  {
    title: "Exosomes Hair Growth Therapy",
    price: "Book Now",
    icon: "🚀",
    highlight: true,
  },
]

export function OffersSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Highlight Offers</h2>
          <p className="text-lg text-foreground/70">Special pricing on our most popular treatments</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                offer.highlight ? "border-2 border-accent md:scale-105" : ""
              }`}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{offer.icon}</span>
                  {offer.highlight && <Sparkles className="w-5 h-5 text-accent" />}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{offer.title}</h3>
                <p className={`text-2xl font-bold ${offer.highlight ? "text-accent" : "text-primary"}`}>
                  {offer.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
