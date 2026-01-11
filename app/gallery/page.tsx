"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { useState } from "react"

interface GalleryImage {
  id: string
  category: "hair-growth" | "hair-transplant" | "skin"
  before: string
  after: string
  title: string
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    category: "hair-growth",
    before: "/hair-loss-before.jpg",
    after: "/hair-growth-after.jpg",
    title: "Hair Growth - 3 Months",
  },
  {
    id: "2",
    category: "hair-growth",
    before: "/hair-thinning-before.jpg",
    after: "/hair-regrowth-after.jpg",
    title: "Hair Regrowth - 6 Months",
  },
  {
    id: "3",
    category: "hair-transplant",
    before: "/baldness-before.jpg",
    after: "/hair-transplant-after.jpg",
    title: "Hair Transplant - 6 Months",
  },
  {
    id: "4",
    category: "hair-transplant",
    before: "/hairline-loss-before.jpg",
    after: "/hairline-restored-after.jpg",
    title: "Hairline Restoration",
  },
  {
    id: "5",
    category: "skin",
    before: "/acne-scars-before.jpg",
    after: "/clear-skin-after.jpg",
    title: "Acne Scar Treatment",
  },
  {
    id: "6",
    category: "skin",
    before: "/pigmentation-before.jpg",
    after: "/even-skin-tone-after.jpg",
    title: "Pigmentation Treatment",
  },
  {
    id: "7",
    category: "skin",
    before: "/dark-circles-before.jpg",
    after: "/bright-eyes-after.jpg",
    title: "Under Eye Treatment",
  },
  {
    id: "8",
    category: "skin",
    before: "/wrinkles-before.jpg",
    after: "/placeholder.svg?height=400&width=300",
    title: "Anti-Aging Treatment",
  },
]

function BeforeAfterSlider({ before, after, title }: { before: string; after: string; title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percentage)))
  }

  return (
    <div
      className="relative w-full aspect-square overflow-hidden rounded-xl bg-muted cursor-col-resize"
      onMouseMove={handleMouseMove}
    >
      {/* After Image */}
      <img src={after || "/placeholder.svg"} alt={`${title} after`} className="w-full h-full object-cover" />

      {/* Before Image */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <img src={before || "/placeholder.svg"} alt={`${title} before`} className="w-screen h-full object-cover" />
      </div>

      {/* Slider Line */}
      <div className="absolute top-0 h-full w-1 bg-white shadow-lg" style={{ left: `${sliderPosition}%` }} />

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
        After
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    { id: "all", label: "All Results" },
    { id: "hair-growth", label: "Hair Growth Results" },
    { id: "hair-transplant", label: "Hair Transplant" },
    { id: "skin", label: "Skin Treatments" },
  ]

  const filteredImages =
    selectedCategory && selectedCategory !== "all"
      ? galleryImages.filter((img) => img.category === selectedCategory)
      : galleryImages

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Before & After Gallery</h1>
            <p className="text-xl text-foreground/70">Real Results from Ventura Clinic</p>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id === "all" ? null : category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    (!selectedCategory && category.id === "all") || selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredImages.map((image) => (
                <div key={image.id} className="space-y-4">
                  <BeforeAfterSlider before={image.before} after={image.after} title={image.title} />
                  <h3 className="text-lg font-semibold text-foreground text-center">{image.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Transform?</h2>
            <p className="text-lg text-foreground/70 mb-8">Schedule your consultation with our expert team today</p>
            <a href="/contact#appointment">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold">
                Book Your Appointment
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
