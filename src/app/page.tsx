"use client";
import Hero from "./components/homepage/hero";
import About from "./components/homepage/about";
import Amenities from "./components/homepage/amenities";
import Health_Safety from "./components/homepage/health_safety";
import Sustainability from "./components/homepage/sustainability";
import Gallery from  "./components/homepage/gallary";
import Rooms from  "./components/homepage/rooms";
import Contact from  "./components/homepage/contact";

export default function Home() {
  return (
    <div>
      {/*-- Hero Section --*/}
      <Hero />
{/*-- About Section --*/}
      <About />
      {/*-- Amenities Section --*/}
      <Amenities />
      {/*-- Health & Safety Section --*/}
      <Health_Safety />
      {/*-- Sustainability Section --*/}
      <Sustainability />
      {/*-- Gallery Section --*/}
      <Gallery />
      {/*-- Rooms Section --*/}
      <Rooms />
      {/*-- Contact Section --*/}
      <Contact />
    </div>
    
  );
}