'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, Calendar, Globe } from 'lucide-react';
import Image from "next/image";
import Luxury from '@/assets/Exterior1.webp';
const Contact: React.FC = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
  });

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Success message state
  const [success, setSuccess] = useState(false);

  // Handle field changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" })); // clear error as user types
  };

  // Validate inputs before submission
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email address is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }

    console.log("Form submitted:", formData);
    setSuccess(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '',
      message: '',
    });

    // Hide success message after 3s
    setTimeout(() => setSuccess(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-10 h-10" />,
      title: "24/7 For Reservations Call",
      primary: "+254 (727) 000-027",
      secondary: "WhatsApp Available",
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400",
    },
    {
      icon: <Mail className="w-10 h-10" />,
      title: "Email Us",
      primary: "stay@enchularesort.com",
      secondary: "Response in 30 minutes",
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400",
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "Visit Us",
      primary: "Nairobi-Namanga Rd,Kajiado",
      secondary: "Oceanfront Paradise",
      color: "from-emerald-500 to-teal-500",
      iconColor: "text-emerald-400",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Operating Hours",
      primary: "Check-in: 3:00 PM",
      secondary: "Check-out: 11:00 AM",
      color: "from-amber-500 to-orange-500",
      iconColor: "text-amber-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 via-indigo-900/90 to-slate-900/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-indigo-500/20 backdrop-blur-sm rounded-full border border-indigo-400/30">
            <span className="text-indigo-300 font-semibold tracking-wide text-sm uppercase">Let&apos;s Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Start Your
            <span className="block bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Journey With Us
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Your perfect escape is just a message away. Our dedicated team is ready to craft
            your personalized luxury experience.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className={`${item.iconColor} mb-4 transform group-hover:scale-110 transition-transform duration-500`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 font-semibold mb-1">{item.primary}</p>
                <p className="text-gray-400 text-sm">{item.secondary}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Images */}
          <div className="space-y-6">
            <div className="relative group overflow-hidden rounded-3xl">
              <Image
                src={Luxury}
                alt="Reception"
                width={600}
                height={400}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">Luxury Awaits</h3>
                <p className="text-gray-200">World-Class Service</p>
              </div>
            </div>
          </div>
<form
  onSubmit={handleSubmit}
  className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-2xl space-y-5"
>
  <div className="flex items-center gap-3 mb-6">
    <MessageCircle className="w-8 h-8 text-emerald-400" />
    <h3 className="text-2xl font-bold text-white">Send Us a Message</h3>
  </div>

  {/* Full Name */}
  <div>
    <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-emerald-400"
      placeholder="John Doe"
    />
    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
  </div>

  {/* Email & Phone */}
  <div className="grid sm:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-semibold text-white mb-2">Email Address *</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-emerald-400"
        placeholder="john@email.com"
      />
      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
    </div>
    <div>
      <label className="block text-sm font-semibold text-white mb-2">Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-emerald-400"
        placeholder="+254 712 345 678"
      />
    </div>
  </div>

  {/* Check-In/Out */}
  <div className="grid sm:grid-cols-2 gap-4">
    <div>
      <label className="block text-sm font-semibold text-white mb-2">Check-In Date</label>
      <input
        type="date"
        name="checkIn"
        aria-label="Check in date"
        value={formData.checkIn}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-400"
      />
    </div>
    <div>
      <label className="block text-sm font-semibold text-white mb-2">Check-Out Date</label>
      <input
        type="date"
        name="checkOut"
        aria-label="Check out date"
        value={formData.checkOut}
        onChange={handleChange}
        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-400"
      />
    </div>
  </div>

  {/* Guests */}
  <div>
    <label className="block text-sm font-semibold text-white mb-2">Number of Guests</label>
    <select
      name="guests"
      aria-label="Number of Guests"
      value={formData.guests}
      onChange={handleChange}
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-400"
    >
      <option value="">Select guests</option>
      <option value="1">1 Guest</option>
      <option value="2">2 Guests</option>
      <option value="3">3 Guests</option>
      <option value="4">4 Guests</option>
      <option value="5+">5+ Guests</option>
    </select>
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-semibold text-white mb-2">Your Message *</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows={4}
      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-emerald-400 resize-none"
      placeholder="Tell us about your dream getaway..."
    />
    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
  </div>

  {/* Success message */}
  {success && (
    <p className="text-emerald-400 text-center text-sm">✅ Message sent successfully!</p>
  )}

  {/* Submit */}
  <button
    type="submit"
    className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500 text-white rounded-xl hover:from-emerald-600 hover:via-green-600 hover:to-lime-600 transition-all duration-300 font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-green-500/40 transform hover:scale-105"
  >
    <Send className="w-5 h-5" />
    Send Your Inquiry
  </button>
</form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
