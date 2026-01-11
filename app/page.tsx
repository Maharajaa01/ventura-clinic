import { Header } from "@/components/header"
import { HeroSection } from "@/components/home/hero-section"
import { OffersSection } from "@/components/home/offers-section"
import { ServicesPreviewSection } from "@/components/home/services-preview"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { InstagramSection } from "@/components/home/instagram-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <OffersSection />
        <ServicesPreviewSection />
        <WhyChooseSection />
        <InstagramSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
