"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2, Camera, Hotel, UtensilsCrossed, Waves, Bed, Sparkles } from "lucide-react";
import Image from "next/image";
import Outside from '@/assets/Exterior1.webp';
import Inside from '@/assets/Exterior3.jpg';
import Exterior from '@/assets/Exterior4.jpg';
import Room1 from '@/assets/room3.webp';
import Room2 from '@/assets/twinroom.webp';
import Room3 from '@/assets/room2.jpg';
import Birthroom1 from '@/assets/bathroom1.jpg';
import Birthroom2 from '@/assets/bathroom2.jpg';
import Birthroom3 from '@/assets/bathroom3.jpg';
import Gym from '@/assets/gym.jpeg';
import Spa from '@/assets/spa.jpeg';
import Swimmingpool from '@/assets/swimmingpool.jpeg';
import Table from '@/assets/table.jpg';
import Breakfast from '@/assets/breakfast.jpg';
import Food from '@/assets/food.jpg';
import { StaticImageData } from "next/image";


interface GalleryImage {
  src: string | StaticImageData;
  alt: string;
  category: string;
}

export default function Gallery() {
  const galleryImages: GalleryImage[] = [
    { src: Outside, alt: "Luxury Resort Exterior", category: "Exterior" },
    { src: Room1, alt: "Premium Bedroom Suite", category: "Rooms" },
    { src: Birthroom1, alt: "Modern Bathroom", category: "Bathrooms" },
    { src: Swimmingpool, alt: "Infinity Pool", category: "Amenities" },
    { src: Breakfast, alt: "Gourmet Cuisine", category: "Dining" },
    { src: Inside, alt: "Beachfront View", category: "Exterior" },
    { src: Room2, alt: "Ocean View Suite", category: "Rooms" },
    { src: Birthroom2, alt: "Spa Bathroom", category: "Bathrooms" },
    { src: Gym, alt: "Beach Cabana", category: "Amenities" },
    { src: Table, alt: "Fine Dining", category: "Dining" },
    { src: Exterior, alt: "Resort Architecture", category: "Exterior" },
    { src: Room3, alt: "Presidential Suite", category: "Rooms" },
    { src: Birthroom3, alt: "Luxury Bathroom", category: "Bathrooms" },
    { src: Spa, alt: "Wellness Spa", category: "Amenities" },
    { src: Food, alt: "Chef's Special", category: "Dining" },
  ];

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Exterior", "Rooms", "Bathrooms", "Amenities", "Dining"];
  
 const categoryIcons: { [key: string]: React.ReactNode } = {
  All: <Camera className="w-5 h-5" />,
  Exterior: <Hotel className="w-5 h-5" />,
  Rooms: <Bed className="w-5 h-5" />,
  Bathrooms: <Sparkles className="w-5 h-5" />,
  Amenities: <Waves className="w-5 h-5" />,
  Dining: <UtensilsCrossed className="w-5 h-5" />,
};

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const handlePrevious = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.src === selectedImage.src);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <section 
      id="gallery" 
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-slate-900/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30">
            <span className="text-purple-300 font-semibold tracking-wide text-sm uppercase">Visual Journey</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Explore Our
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Stunning Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in the beauty of Enchula Resort through our curated collection 
            of breathtaking spaces and unforgettable moments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20"
              }`}
            >
              {categoryIcons[category]}
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 aspect-square"
              onClick={() => setSelectedImage(image)}
            >
             <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority
          />
              
              {/* Overlay with category */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white mb-2">
                    {categoryIcons[image.category]}
                    <span className="text-xs font-semibold uppercase">{image.category}</span>
                  </div>
                  <p className="text-sm text-gray-200">{image.alt}</p>
                </div>
              </div>

              {/* Zoom icon */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Image Count */}
        <div className="text-center mt-12">
          <p className="text-gray-300 text-lg">
            Showing <span className="font-bold text-purple-400">{filteredImages.length}</span> of {galleryImages.length} images
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-300 text-sm">Gallery Images</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-pink-400 mb-2">6</div>
            <div className="text-gray-300 text-sm">Categories</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-rose-400 mb-2">100+</div>
            <div className="text-gray-300 text-sm">Photo Shoots</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-orange-400 mb-2">4K</div>
            <div className="text-gray-300 text-sm">HD Quality</div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/20"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/20"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/20"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          {/* Image Container */}
          <div className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="object-contain w-full h-full rounded-2xl shadow-2xl"
            />
            
            {/* Image Info */}
            <div className="mt-6 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
              <div className="flex items-center gap-3 text-white">
                {categoryIcons[selectedImage.category]}
                <span className="font-semibold">{selectedImage.category}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300">{selectedImage.alt}</span>
              </div>
            </div>

            {/* Navigation Indicators */}
            <div className="mt-4 flex gap-2">
              {filteredImages.map((img, idx) => (
                <button
                  key={idx}
                  aria-label={`View image ${idx + 1}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    img.src === selectedImage.src
                      ? "bg-purple-400 w-8"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}