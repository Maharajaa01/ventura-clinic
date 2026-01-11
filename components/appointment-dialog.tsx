"use client"

import type React from "react"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

interface AppointmentDialogProps {
  triggerText?: string
  triggerClassName?: string
}

export function AppointmentDialog({ triggerText = "Book Appointment", triggerClassName = "" }: AppointmentDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    concerns: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log("Appointment booked:", formData)
    setSubmitted(true)

    // Reset after 2 seconds and close dialog
    setTimeout(() => {
      setFormData({ firstName: "", lastName: "", phone: "", email: "", service: "", preferredDate: "", concerns: "" })
      setSubmitted(false)
      setIsOpen(false)
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className={`bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 ${triggerClassName}`}>
          <Calendar className="w-4 h-4 mr-2" />
          {triggerText}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book Your Appointment</DialogTitle>
          <DialogDescription>Tell us about yourself and what service you're interested in</DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 text-center py-8">
            <p className="text-foreground text-lg font-semibold">Appointment Booked Successfully!</p>
            <p className="text-foreground/70 mt-2 text-sm">
              We'll contact you soon to confirm your appointment details.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-foreground font-medium text-sm mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-white text-foreground placeholder:text-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-foreground font-medium text-sm mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-white text-foreground placeholder:text-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-foreground font-medium text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-white text-foreground placeholder:text-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-foreground font-medium text-sm mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-white text-foreground placeholder:text-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-foreground font-medium text-sm mb-1">Service Interested In</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
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
              <label className="block text-foreground font-medium text-sm mb-1">Preferred Date</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-input rounded-lg bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Concerns / Notes */}
            <div>
              <label className="block text-foreground font-medium text-sm mb-1">Your Concerns</label>
              <textarea
                name="concerns"
                value={formData.concerns}
                onChange={handleChange}
                placeholder="Tell us about your concerns and goals..."
                rows={3}
                className="w-full px-3 py-2 border border-input rounded-lg bg-white text-foreground placeholder:text-foreground/50 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-lg font-semibold transition-colors duration-300 text-sm"
            >
              Confirm Booking
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
