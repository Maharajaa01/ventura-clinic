import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Zap } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest standard of care with advanced technology",
    },
    {
      icon: Users,
      title: "Patient-Centric",
      description: "Your comfort and satisfaction are our top priorities",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously adopting latest treatments and techniques",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description: "Honest communication and transparent pricing always",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Ventura Clinic</h1>
              <p className="text-xl text-foreground/70">
                Pioneering advanced hair restoration and skin care solutions with a commitment to natural results and
                patient satisfaction
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who We Are</h2>

                <p className="text-lg text-foreground/70 leading-relaxed">
                  Ventura Clinic specializes in advanced hair restoration and skin care solutions. We combine modern
                  medical technology with personalized treatment plans to deliver exceptional results.
                </p>

                <p className="text-lg text-foreground/70 leading-relaxed">
                  Our team of experienced professionals is dedicated to helping you achieve natural, beautiful results
                  with the highest standards of safety and hygiene.
                </p>

                <div className="space-y-3 pt-4">
                  {["15+ years of combined experience", "1000+ satisfied clients", "Latest dermatology technology"].map(
                    (item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <img src="/clinic-about.jpg" alt="Ventura Clinic" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-primary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    To provide world-class hair and skin treatments using cutting-edge technology and compassionate
                    care, empowering individuals to feel confident in their appearance.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-accent">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    To be the leading dermatology clinic recognized for innovation, patient satisfaction, and natural
                    results in hair restoration and skin care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-foreground/70">Core principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <Card key={idx} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-foreground/70 text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Expert Team</h2>
              <p className="text-lg text-foreground/70">Highly qualified professionals dedicated to your care</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Dr. Arun Kumar", title: "Lead Dermatologist", experience: "15+ years" },
                { name: "Dr. Priya Sharma", title: "Hair Specialist", experience: "12+ years" },
                { name: "Dr. Rahul Patel", title: "Skin Specialist", experience: "10+ years" },
              ].map((member, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20" />
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-2">{member.title}</p>
                    <p className="text-foreground/70 text-sm">{member.experience} experience</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Trusted by Thousands</h2>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Join our family of satisfied clients who have transformed their appearance and confidence with our
              treatments.
            </p>
            <a href="/contact#appointment">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold">
                Schedule a Consultation
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
