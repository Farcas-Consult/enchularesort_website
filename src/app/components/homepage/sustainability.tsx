"use client";

import React from "react";
import { Zap, Trash2, Droplets, Leaf, Sun, Recycle, Heart, TreePine } from "lucide-react";

export default function Sustainability() {
  const sustainabilityData = [
    {
      title: "Solar Energy",
      description:
        "100% of our resort is powered by renewable solar energy, reducing carbon emissions and embracing clean technology for a greener future.",
      icon: <Sun size={48} className="text-amber-400" />,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    },
    {
      title: "Water Conservation",
      description:
        "Advanced rainwater harvesting and greywater recycling systems reduce water consumption by 60% while maintaining luxury standards.",
      icon: <Droplets size={48} className="text-blue-400" />,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    },
    {
      title: "Zero Waste Initiative",
      description:
        "Our comprehensive recycling program and composting systems divert 95% of waste from landfills, creating a circular economy.",
      icon: <Recycle size={48} className="text-emerald-400" />,
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&q=80",
    },
    {
      title: "Organic Gardens",
      description:
        "Farm-to-table dining featuring ingredients from our organic gardens, eliminating pesticides and supporting local biodiversity.",
      icon: <Leaf size={48} className="text-green-400" />,
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    },
    {
      title: "Native Reforestation",
      description:
        "We plant 10 native trees for every guest stay, actively restoring local ecosystems and offsetting your carbon footprint.",
      icon: <TreePine size={48} className="text-teal-400" />,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    },
    {
      title: "Community Impact",
      description:
        "Supporting local artisans and conservation projects, ensuring your stay creates positive social and environmental change.",
      icon: <Heart size={48} className="text-rose-400" />,
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
    },
  ];

  return (
    <section 
      id="sustainability" 
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-6 py-2 bg-emerald-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
            <span className="text-emerald-300 font-semibold tracking-wide text-sm uppercase">Our Commitment</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Luxury Meets
            <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Sustainability
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experience guilt-free indulgence. Every moment at Enchula Resort actively contributes 
            to environmental preservation and community empowerment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sustainabilityData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 border border-white/20 hover:border-emerald-400/50 shadow-2xl"
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
              <div className="relative z-10 p-8">
                {/* Icon */}
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {item.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">Renewable Energy</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">60%</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">Water Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">Waste Diverted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">10,000+</div>
            <div className="text-gray-300 text-sm uppercase tracking-wide">Trees Planted</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105"
          >
            <Leaf size={20} />
            Book Your Sustainable Escape
          </a>
        </div>
      </div>
    </section>
  );
}