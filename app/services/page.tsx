import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

interface Service {
  id: string
  title: string
  price: string
  description: string
  benefits: string[]
  icon: string
  category: "hair" | "skin"
}

const services: Service[] = [
  {
    id: "gfc",
    title: "GFC Hair Treatment",
    price: "₹1,999",
    description: "Growth Factor Concentrate therapy for natural hair regrowth without surgery.",
    benefits: [
      "Stimulates hair follicles",
      "100% natural growth factors",
      "No downtime",
      "Visible results in 3-4 months",
    ],
    icon: "💇‍♂️",
    category: "hair",
  },
  {
    id: "prp",
    title: "PRP Hair Treatment",
    price: "₹999",
    description: "Platelet-Rich Plasma therapy to revitalize dormant hair follicles.",
    benefits: ["Increases hair density", "Improves hair quality", "Minimal discomfort", "Safe procedure"],
    icon: "✨",
    category: "hair",
  },
  {
    id: "exosomes",
    title: "Exosomes Hair Growth Therapy",
    price: "Book Now",
    description: "Cutting-edge exosome therapy for advanced hair restoration and growth.",
    benefits: ["Advanced regenerative medicine", "Superior results", "Latest technology", "Long-lasting effects"],
    icon: "🚀",
    category: "hair",
  },
  {
    id: "smp",
    title: "Scalp Micropigmentation",
    price: "₹2,500+",
    description: "Cosmetic tattooing to create the appearance of fuller, thicker hair.",
    benefits: ["Immediate visual results", "Permanent solution", "No maintenance", "Natural appearance"],
    icon: "🎯",
    category: "hair",
  },
  {
    id: "microneedling",
    title: "Microneedling",
    price: "₹1,500",
    description: "Collagen induction therapy for hair and scalp rejuvenation.",
    benefits: ["Increases scalp circulation", "Improves absorption", "Safe and effective", "Minimal side effects"],
    icon: "🔧",
    category: "hair",
  },
  {
    id: "transplant",
    title: "Hair Transplant",
    price: "₹6,500+",
    description: "Advanced FUE/DHI hair transplantation for permanent hair restoration.",
    benefits: ["Permanent solution", "Natural results", "Expert surgeons", "Quick recovery"],
    icon: "🌱",
    category: "hair",
  },
  {
    id: "glutathione",
    title: "Glutathione Treatment",
    price: "₹1,499 / session",
    description: "IV glutathione for skin brightening and detoxification.",
    benefits: ["Brightens skin", "Reduces pigmentation", "Detoxifies body", "Boosts immunity"],
    icon: "💎",
    category: "skin",
  },
  {
    id: "eyepeel",
    title: "Under Eye Peels for Dark Circles",
    price: "₹1,999",
    description: "Specialized chemical peel to eliminate dark circles and under-eye bags.",
    benefits: ["Brightens eye area", "Reduces puffiness", "Improves texture", "Quick results"],
    icon: "👁️",
    category: "skin",
  },
  {
    id: "facepeel",
    title: "Ultimate Solution Face Chemical Peel",
    price: "₹2,000",
    description: "Deep chemical peel for complete facial rejuvenation and brightening.",
    benefits: ["Removes dead skin", "Brightens complexion", "Reduces scars", "Anti-aging effects"],
    icon: "🧴",
    category: "skin",
  },
  {
    id: "co2laser",
    title: "CO₂ Laser Treatment",
    price: "₹3,000",
    description: "Advanced laser therapy for skin resurfacing and scar removal.",
    benefits: ["Removes scars", "Tightens skin", "Reduces wrinkles", "Long-lasting results"],
    icon: "✨",
    category: "skin",
  },
]

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border p-8">
      <div className="flex items-start justify-between mb-4">
        <span className="text-5xl">{service.icon}</span>
      </div>

      <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>

      <p className="text-primary font-semibold text-lg mb-4">{service.price}</p>

      <p className="text-foreground/70 text-base leading-relaxed mb-6">{service.description}</p>

      <div className="space-y-2">
        <p className="text-sm font-semibold text-foreground">Benefits:</p>
        <ul className="space-y-2">
          {service.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-2 text-foreground/70 text-sm">
              <span className="text-primary mt-1">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const hairServices = services.filter((s) => s.category === "hair")
  const skinServices = services.filter((s) => s.category === "skin")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h1>
            <p className="text-xl text-foreground/70">Comprehensive hair and skin treatments using latest technology</p>
          </div>
        </section>

        {/* Hair Treatments */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hair Treatments</h2>
              <p className="text-lg text-foreground/70">Advanced solutions for hair restoration and growth</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hairServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Skin Treatments */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skin Treatments</h2>
              <p className="text-lg text-foreground/70">Professional skin care solutions for all concerns</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skinServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
