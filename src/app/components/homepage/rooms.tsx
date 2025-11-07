"use client";

import React, { useState } from "react";
import { Bed, Users, Wifi, Coffee, Tv, Wind, Sparkles, ChevronRight, Star, ArrowRight } from 'lucide-react';
import Image from "next/image";
import TwinRoom from '@/assets/twinroom.webp';
import DoubleRoom from '@/assets/doubleroom.webp';

export default function Rooms() {
  const [activeRoom, setActiveRoom] = useState(0);

  const rooms = [
    {
      id: 1,
      name: "Standard Double Room",
      category: "Comfort",
      price: "$19",
      image: DoubleRoom,
      guests: "2 Guests",
      size: "30m²",
      description: "Designed for comfort and simplicity, the Standard Double Room features a cozy double bed, modern bathroom, and all essential amenities for a relaxing stay.",
      amenities: ["Double Bed", "Air Conditioning", "Private Bathroom", "WiFi", "Flat-Screen TV", "Tea/Coffee Maker"],
      color: "from-sky-500 to-blue-500",
    },
    {
      id: 2,
      name: "Twin Room",
      category: "Standard",
      price: "$21",
      image: TwinRoom,
      guests: "2 Guests",
      size: "26m²",
      description: "A warm and inviting twin room with two single beds, ideal for friends or colleagues. Enjoy modern amenities and comfort.",
      amenities: [
        "Two Single Beds",
        "Free WiFi",
        "Private Bathroom",
        "Smart TV",
        "Desk Area",
        "Air Conditioning",
      ],
      color: "from-emerald-500 to-teal-400",
    },
  ];

  const featuredAmenities = [
    { icon: <Wifi className="w-6 h-6" />, name: "High-Speed WiFi" },
    { icon: <Coffee className="w-6 h-6" />, name: "Premium Coffee" },
    { icon: <Tv className="w-6 h-6" />, name: "Smart TV" },
    { icon: <Wind className="w-6 h-6" />, name: "Climate Control" },
    { icon: <Sparkles className="w-6 h-6" />, name: "Daily Housekeeping" },
    { icon: <Bed className="w-6 h-6" />, name: "Luxury Bedding" },
  ];

  return (
    <section
      id="rooms"
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-slate-900/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-400/30">
            <span className="text-amber-300 font-semibold tracking-wide text-sm uppercase">Luxury Accommodations</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Discover Your
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Perfect Sanctuary
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Each room is a masterpiece of design and comfort, crafted to exceed your highest expectations
            and create unforgettable memories.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {rooms.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setActiveRoom(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeRoom === index
                  ? `bg-gradient-to-r ${room.color} text-white shadow-lg scale-105`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative group overflow-hidden rounded-3xl h-[500px]">
            <Image
              src={rooms[activeRoom].image}
              alt={rooms[activeRoom].name}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            <div className={`absolute top-6 right-6 px-6 py-3 bg-gradient-to-r ${rooms[activeRoom].color} rounded-full backdrop-blur-sm shadow-lg`}>
              <div className="text-white text-center">
                <div className="text-2xl font-bold">{rooms[activeRoom].price}</div>
                <div className="text-xs">per night</div>
              </div>
            </div>

            <div className="absolute top-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-white text-sm font-semibold">{rooms[activeRoom].category}</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8">
            <h3 className="text-3xl font-bold text-white mb-4">{rooms[activeRoom].name}</h3>

            <div className="flex gap-6 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5 text-amber-400" />
                <span>{rooms[activeRoom].guests}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Bed className="w-5 h-5 text-amber-400" />
                <span>{rooms[activeRoom].size}</span>
              </div>
            </div>

            <p className="text-gray-200 text-lg leading-relaxed mb-8">
              {rooms[activeRoom].description}
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Room Amenities</h4>
              <div className="grid grid-cols-2 gap-3">
                {rooms[activeRoom].amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-gray-300 bg-white/5 rounded-lg px-3 py-2 border border-white/10"
                  >
                    <ChevronRight className="w-4 h-4 text-amber-400" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className={`flex-1 px-6 py-4 bg-gradient-to-r ${rooms[activeRoom].color} text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105`}>
                Book Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">All Room Categories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rooms.map((room, index) => (
              <div
                key={room.id}
                onClick={() => setActiveRoom(index)}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${room.color} rounded-full text-white text-sm font-bold`}>
                    {room.price}/night
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2">{room.name}</h4>
                  <div className="flex items-center justify-between text-gray-300 text-sm">
                    <span>{room.guests}</span>
                    <span>{room.size}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/20 p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Standard in Every Room
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredAmenities.map((amenity, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {amenity.icon}
                </div>
                <p className="text-gray-300 text-sm font-semibold">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-amber-400 mb-2">45+</div>
            <div className="text-gray-300 text-sm">Luxury Rooms</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-orange-400 mb-2">5-Star</div>
            <div className="text-gray-300 text-sm">Rating</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-rose-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Room Service</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">Satisfaction</div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
