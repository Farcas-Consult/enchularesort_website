"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/Enchula_Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define your sections with their IDs
  const navLinks = [
  { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Amenities", id: "amenities" },
    { name: "Rooms", id: "rooms" },
    { name: "Sustainability", id: "sustainability" },
    { name: "Gallery", id: "gallery" },
  { name: "Health & Safety", id: "health-safety" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg py-4" : "bg-white/95 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
          <Image
            src={Logo}
            alt="Enchula Resort Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="ml-2 text-2xl md:text-3xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Enchula Resort
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-600 hover:text-emerald-600 transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[500px] mt-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col space-y-3 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 text-left font-medium"
            >
              {link.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
