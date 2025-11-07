"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Phone, Clock, CalendarDays, Award, Users, Sparkles, Heart, Globe, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=80",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const features = [
    { icon: <Award className="w-8 h-8" />, title: "4-Star Luxury", description: "Award-winning service" },
    { icon: <Users className="w-8 h-8" />, title: "Expert Team", description: "Dedicated hospitality" },
    { icon: <Sparkles className="w-8 h-8" />, title: "Premium Amenities", description: "World-class facilities" },
    { icon: <Heart className="w-8 h-8" />, title: "Warm Hospitality", description: "Kenyan excellence" },
  ];

  const highlights = [
    "Panoramic views of Kajiado plains",
    "Exquisite farm-to-table dining",
    "Infinity pool with sunset vistas",
    "Private event spaces available",
    "Wellness spa and fitness center",
    "Guided safari experiences",
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 px-4"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt="Enchula Resort"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-emerald-900/85 to-slate-900/90"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
            <span className="text-emerald-300 font-semibold tracking-wide text-sm uppercase">Discover Enchula</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Where Luxury Meets
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Kenyan Serenity
            </span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* About Story Box */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-10 h-10 text-emerald-400" />
              <h3 className="text-3xl font-bold text-emerald-400">Our Story</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-100 mb-6">
              Nestled in the breathtaking plains of <strong className="text-emerald-300">Kajiado County</strong>, 
              Enchula Resort is where the untamed beauty of Kenya meets contemporary luxury. Surrounded by 
              sweeping landscapes and golden sunsets, we offer an exclusive sanctuary for those seeking 
              refinement and tranquility.
            </p>
            <p className="text-lg leading-relaxed text-gray-100 mb-8">
              Experience world-class cuisine crafted from local ingredients, panoramic views that stretch 
              to the horizon, and the legendary warmth of Kenyan hospitality. Whether you&apos;re celebrating 
              romance, reconnecting with family, or seeking a private escape, Enchula Resort delivers 
              unforgettable moments wrapped in elegance.
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-emerald-400 flex justify-center mb-2">{feature.icon}</div>
                  <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Location Box */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-10 h-10 text-emerald-400" />
              <h3 className="text-2xl font-bold text-emerald-400">Visit Us</h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <MapPin className="text-emerald-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold mb-1">Location</p>
                  <p className="text-gray-300">Nairobi - Namanga Rd, Kajiado</p>
                  <p className="text-sm text-gray-400 mt-1">Scenic plains & wildlife</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <Phone className="text-emerald-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold mb-1"> For Reservations Call:</p>
                  <p className="text-gray-300">+254 727 000027</p>
                  <p className="text-sm text-gray-400 mt-1">Available 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <Clock className="text-emerald-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold mb-1">Check-In</p>
                  <p className="text-gray-300">12:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <CalendarDays className="text-emerald-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold mb-1">Check-Out</p>
                  <p className="text-gray-300">10:30 AM</p>
                </div>
              </div>

              <p className="text-sm text-gray-300 italic">
                Flexible booking and personalized service to match your schedule perfectly.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            What Makes Us <span className="text-emerald-400">Exceptional</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-gray-200">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-emerald-400 mb-2">2018</div>
            <div className="text-gray-300 text-sm">Established</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-teal-400 mb-2">10K+</div>
            <div className="text-gray-300 text-sm">Happy Guests</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-cyan-400 mb-2">45+</div>
            <div className="text-gray-300 text-sm">Luxury Rooms</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Concierge</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105"
          >
            <Heart className="w-5 h-5" />
            Plan Your Escape
          </a>
        </div>

        {/* Slideshow Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-emerald-400 w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}