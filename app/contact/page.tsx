"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AppointmentDialog } from "@/components/appointment-dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", phone: "", email: "", service: "", preferredDate: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/5 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-xl text-foreground/70">Get in touch or book your appointment today</p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Address */}
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-foreground/70">
                    21, Madurai Perumal Koil St,
                    <br />
                    Bhuvaneshwari Nagar,
                    <br />
                    Valasaravakkam, Chennai – 600087
                  </p>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-foreground/70">
                    <a href="tel:+918610801397" className="hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                    <br />
                    <span className="text-sm text-foreground/60">Mon - Sat, 9 AM - 7 PM</span>
                  </p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-foreground/70">
                    <a href="mailto:info@venturaclinic.com" className="hover:text-primary transition-colors">
                      info@venturaclinic.com
                    </a>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden h-96 border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9001938464576!2d80.17161519999999!3d13.0420245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267002ca75fd3%3A0x30809858566b214b!2sVentura%20clinic!5e0!3m2!1sen!2sin!4v1768123491598!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Quick Appointment CTA */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Transform?</h2>
            <p className="text-foreground/70 mb-8">Schedule your consultation today</p>
            <AppointmentDialog triggerText="Book Appointment Now" triggerClassName="text-lg px-8 py-3" />
          </div>
        </section>

        {/* Appointment Form */}
        <section id="appointment" className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-md border border-border">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">Book Your Appointment</h2>
              <p className="text-foreground/70 text-center mb-8">Fill out the form and we'll get back to you shortly</p>

              {submitted ? (
                <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center">
                  <p className="text-foreground text-lg font-semibold">Thank you for your submission!</p>
                  <p className="text-foreground/70 mt-2">We'll contact you soon to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <label className="block text-foreground font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-foreground font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-foreground font-medium mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-foreground font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Service */}
                    <div>
                      <label className="block text-foreground font-medium mb-2">Service</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="">Select a service</option>
                        <option value="gfc">GFC Hair Treatment</option>
                        <option value="prp">PRP Hair Treatment</option>
                        <option value="exosomes">Exosomes Hair Growth</option>
                        <option value="smp">Scalp Micropigmentation</option>
                        <option value="microneedling">Microneedling</option>
                        <option value="transplant">Hair Transplant</option>
                        <option value="glutathione">Glutathione Treatment</option>
                        <option value="eyepeel">Under Eye Peel</option>
                        <option value="facepeel">Chemical Face Peel</option>
                        <option value="co2laser">CO₂ Laser</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-foreground font-medium mb-2">Preferred Date</label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-foreground font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your concerns and goals"
                      rows={5}
                      className="w-full px-4 py-3 border border-input rounded-lg bg-white text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Book Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
