"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Star, MapPin, Calendar, Users, Sparkles, Award } from "lucide-react";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const highlights = [
    { icon: <Star className="w-5 h-5" />, text: "4-Star Luxury" },
    { icon: <MapPin className="w-5 h-5" />, text: "Nairobi - Namanga Rd, Kajiado" },
    { icon: <Award className="w-5 h-5" />, text: "Award-Winning" },
  ];

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Enchula Resort ${idx + 1}`}
              fill
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/30 mb-8 animate-fadeIn">
          <Sparkles className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-semibold tracking-wide">LUXURY RESORT EXPERIENCE</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight animate-fadeInUp">
          Welcome to{" "}
          <span className="block mt-2 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            Enchula Resort
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
          Your gateway to serenity and sophistication. Experience the perfect harmony of 
          <span className="text-emerald-400 font-semibold"> luxury living</span>, breathtaking landscapes, 
          and authentic <span className="text-emerald-400 font-semibold">Kenyan hospitality</span>.
        </p>

        {/* Highlights Bar */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-12 animate-fadeInUp">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
            >
              <span className="text-emerald-400">{item.icon}</span>
              <span className="text-sm font-semibold">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 animate-fadeInUp">
          <button
            onClick={() => {
              const section = document.getElementById("contact");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-emerald-500/50 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Book Your Stay
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={() => {
              const section = document.getElementById("about");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-10 py-4 border-2 border-white/70 text-white text-lg font-semibold rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 flex items-center gap-2"
          >
            <Users className="w-5 h-5" />
            Discover More
          </button>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fadeInUp">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-emerald-400 mb-1">45+</div>
            <div className="text-sm text-gray-300">Luxury Rooms</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-teal-400 mb-1">10K+</div>
            <div className="text-sm text-gray-300">Happy Guests</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-1">24/7</div>
            <div className="text-sm text-gray-300">Concierge</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-1">5-Star</div>
            <div className="text-sm text-gray-300">Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white">
          <span className="text-sm font-semibold tracking-wide">SCROLL TO EXPLORE</span>
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scrollDot"></div>
          </div>
          <ChevronDown className="w-6 h-6 animate-pulse" />
        </div>
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === index
                ? "w-12 h-3 bg-emerald-400"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        .animate-scrollDot {
          animation: scrollDot 1.5s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}