import Link from "next/link"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">V</span>
              </div>
              <span className="font-bold text-xl">Ventura Clinic</span>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Advanced hair restoration and skin care solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "About", href: "/about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-background/80 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a href="tel:+918610801397" className="text-background/80 hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a
                  href="mailto:info@venturaclinic.com"
                  className="text-background/80 hover:text-accent transition-colors"
                >
                  info@venturaclinic.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-background/80">
                  21, Madurai Perumal Koil St,
                  <br />
                  Valasaravakkam, Chennai – 600087
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/ventura_clinic/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent text-foreground rounded-lg flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-background/60 text-xs">Stay updated with our latest treatments and results</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/80">
          <p>&copy; {new Date().getFullYear()} Ventura Clinic. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
