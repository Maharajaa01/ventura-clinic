import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export function InstagramSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Follow Us on Instagram</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Stay updated with our latest treatments, client results, and expert tips
          </p>

          <div className="flex justify-center">
            <Link href="https://www.instagram.com/ventura_clinic/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Instagram className="w-5 h-5" />
                Follow Us
              </Button>
            </Link>
          </div>

          {/* Instagram Feed Preview */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
