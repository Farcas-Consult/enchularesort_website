"use client";

import React from "react";
import { Hand, UserCheck, Droplet, Shield, Sparkles, Wind, Thermometer, Stethoscope } from "lucide-react";

const healthSafetyData = [
  {
    title: "Contactless Technology",
    description: "Seamless digital check-in/out and mobile room keys ensure zero-contact convenience throughout your entire stay.",
    icon: <UserCheck size={48} className="text-blue-400" />,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "Medical-Grade Sanitization",
    description: "Hospital-level disinfection protocols using EPA-approved products ensure every surface meets the highest hygiene standards.",
    icon: <Droplet size={48} className="text-cyan-400" />,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
  },
  {
    title: "Advanced Air Purification",
    description: "HEPA filtration systems continuously circulate and purify air, removing 99.97% of airborne particles and allergens.",
    icon: <Wind size={48} className="text-teal-400" />,
    image: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?w=800&q=80",
  },
  {
    title: "Certified Safety Protocols",
    description: "Our staff undergo rigorous training and follow WHO-endorsed health protocols to ensure your complete protection.",
    icon: <Shield size={48} className="text-emerald-400" />,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
  {
    title: "Wellness Monitoring",
    description: "24/7 health support with temperature screening and on-call medical professionals for your peace of mind.",
    icon: <Thermometer size={48} className="text-rose-400" />,
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
  },
  {
    title: "Hygiene Stations",
    description: "Premium hand sanitizer and hygiene stations strategically placed throughout the resort for instant access.",
    icon: <Hand size={48} className="text-violet-400" />,
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&q=80",
  },
  {
    title: "On-Site Medical Care",
    description: "Fully equipped medical facility with licensed healthcare professionals available around the clock for any concerns.",
    icon: <Stethoscope size={48} className="text-indigo-400" />,
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
  },
  {
    title: "Ultra-Clean Guarantee",
    description: "Every room receives a deep-clean certification before your arrival, with sealed door tags confirming sanitation.",
    icon: <Sparkles size={48} className="text-amber-400" />,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
  },
];

export default function Health_Sanity() {
  return (
    <section
      id="health-safety"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/85 to-slate-900/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
            <span className="text-blue-300 font-semibold tracking-wide text-sm uppercase">Your Wellbeing First</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Health &
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              Safety Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Your wellness is our priority. Experience world-class hospitality backed by 
            comprehensive health protocols and cutting-edge safety technology.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthSafetyData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 border border-white/20 hover:border-blue-400/50 shadow-2xl"
            >
              {/* Image Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6">
                {/* Icon */}
                <div className="mb-5 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20 bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Certified & Trusted By Leading Health Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">WHO</div>
              <div className="text-gray-300 text-xs uppercase tracking-wide">Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">ISO 9001</div>
              <div className="text-gray-300 text-xs uppercase tracking-wide">Certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">EPA</div>
              <div className="text-gray-300 text-xs uppercase tracking-wide">Approved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">5-Star</div>
              <div className="text-gray-300 text-xs uppercase tracking-wide">Safety Rating</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">Sanitization Rate</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Medical Support</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-teal-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">Contactless</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-emerald-400 mb-2">HEPA</div>
            <div className="text-gray-300 text-sm">Air Filtration</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
          >
            <Shield size={20} />
            Book With Confidence
          </a>
        </div>
      </div>
    </section>
  );
}