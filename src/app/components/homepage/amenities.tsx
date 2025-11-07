import React, { useState } from "react";
import { Wifi, Coffee, Car, Utensils, Bed, Bath, Briefcase, Baby, CreditCard, Bus, Building2, ConciergeBell, X, ChevronRight, Sparkles, Clock, CheckCircle, Star } from "lucide-react";
import Image from "next/image";

const amenitiesData = [
  {
    category: "Popular Amenities",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    description: "Our most sought-after facilities designed for your ultimate comfort and convenience.",
    detailImages: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    ],
    items: [
      { name: "Free Parking", icon: <Car className="w-5 h-5" />, detail: "Secure parking available 24/7 for all guests" },
      { name: "Free Breakfast", icon: <Coffee className="w-5 h-5" />, detail: "Complimentary buffet breakfast daily 7AM-10AM" },
      { name: "Free Wi-Fi", icon: <Wifi className="w-5 h-5" />, detail: "High-speed internet throughout the resort" },
      { name: "Restaurant", icon: <Utensils className="w-5 h-5" />, detail: "Fine dining with international and local cuisine" },
    ],
  },
  {
    category: "Internet",
    image: "https://images.unsplash.com/photo-1588004965885-6639b07d8439?w=800&q=80",
    description: "Stay connected with blazing-fast internet throughout your stay.",
    detailImages: [
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&q=80",
    ],
    items: [
      { name: "High-Speed Wi-Fi", icon: <Wifi className="w-5 h-5" />, detail: "Fiber optic connection in all areas" },
      { name: "Business Center", icon: <Briefcase className="w-5 h-5" />, detail: "Workstations with printing facilities" },
    ],
  },
  {
    category: "Food & Drinks",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    description: "Indulge in exquisite culinary experiences from morning till night.",
    detailImages: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    ],
    items: [
      { name: "Fine Dining Restaurant", icon: <Utensils className="w-5 h-5" />, detail: "Award-winning chefs and seasonal menus" },
      { name: "Rooftop Bar", icon: <Coffee className="w-5 h-5" />, detail: "Cocktails with panoramic sunset views" },
      { name: "Buffet Dinner", icon: <Utensils className="w-5 h-5" />, detail: "International buffet every evening 6PM-10PM" },
      { name: "24/7 Room Service", icon: <ConciergeBell className="w-5 h-5" />, detail: "Full menu available around the clock" },
      { name: "Free Breakfast", icon: <Coffee className="w-5 h-5" />, detail: "Continental and local breakfast options" },
    ],
  },
  {
    category: "Services",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    description: "Personalized services to make your stay effortless and memorable.",
    detailImages: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    ],
    items: [
      { name: "24/7 Front Desk", icon: <ConciergeBell className="w-5 h-5" />, detail: "Multilingual staff always at your service" },
      { name: "Laundry Service", icon: <Building2 className="w-5 h-5" />, detail: "Same-day dry cleaning and pressing" },
      { name: "Daily Housekeeping", icon: <Bed className="w-5 h-5" />, detail: "Twice-daily cleaning service" },
      { name: "Turndown Service", icon: <Bed className="w-5 h-5" />, detail: "Evening preparation with treats" },
    ],
  },
  {
    category: "Payment Options",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    description: "Flexible payment methods for your convenience.",
    detailImages: [
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    ],
    items: [
      { name: "All Major Cards", icon: <CreditCard className="w-5 h-5" />, detail: "Visa, Mastercard, Amex accepted" },
      { name: "Mobile Money", icon: <CreditCard className="w-5 h-5" />, detail: "M-Pesa and other mobile payments" },
      { name: "Bank Transfer", icon: <CreditCard className="w-5 h-5" />, detail: "Direct bank transfers accepted" },
    ],
  },
  {
    category: "Family Friendly",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
    description: "Safe and fun environment for the whole family.",
    detailImages: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    ],
    items: [
      { name: "Kids Club", icon: <Baby className="w-5 h-5" />, detail: "Supervised activities for ages 4-12" },
      { name: "Children's Pool", icon: <Baby className="w-5 h-5" />, detail: "Shallow pool with water features" },
      { name: "Family Suites", icon: <Baby className="w-5 h-5" />, detail: "Spacious rooms with connecting doors" },
    ],
  },
  {
    category: "Recreation",
    image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&q=80",
    description: "Relax and rejuvenate with our premium wellness facilities.",
    detailImages: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80",
    ],
    items: [
      { name: "Infinity Pool", icon: <Bath className="w-5 h-5" />, detail: "Heated pool with ocean views" },
      { name: "Fitness Center", icon: <Bath className="w-5 h-5" />, detail: "State-of-the-art gym equipment 24/7" },
      { name: "Spa & Wellness", icon: <Bath className="w-5 h-5" />, detail: "Massage, sauna, and beauty treatments" },
    ],
  },
  {
    category: "Transportation",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    description: "Easy access and convenient transport options.",
    detailImages: [
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80",
    ],
    items: [
      { name: "Free Parking", icon: <Car className="w-5 h-5" />, detail: "Covered and open parking available" },
      { name: "Airport Shuttle", icon: <Bus className="w-5 h-5" />, detail: "Complimentary airport transfers" },
      { name: "Car Rental Desk", icon: <Car className="w-5 h-5" />, detail: "On-site vehicle rental service" },
    ],
  },
  {
    category: "Business & Events",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    description: "Professional facilities for meetings and special events.",
    detailImages: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f29da8c796?w=800&q=80",
    ],
    items: [
      { name: "Conference Rooms", icon: <Briefcase className="w-5 h-5" />, detail: "Capacity up to 200 people" },
      { name: "Business Center", icon: <Briefcase className="w-5 h-5" />, detail: "Printing, scanning, and office services" },
      { name: "Event Planning", icon: <Briefcase className="w-5 h-5" />, detail: "Dedicated event coordinator" },
    ],
  },
  {
    category: "Room Features",
    image: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?w=800&q=80",
    description: "Luxurious amenities in every room for your comfort.",
    detailImages: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80",
    ],
    items: [
      { name: "Rainfall Shower", icon: <Bath className="w-5 h-5" />, detail: "Premium bathrooms with luxury fixtures" },
      { name: "Soaking Tubs", icon: <Bath className="w-5 h-5" />, detail: "Available in premium suites" },
      { name: "Smart TV", icon: <Bath className="w-5 h-5" />, detail: "65-inch 4K with streaming services" },
      { name: "Climate Control", icon: <Bath className="w-5 h-5" />, detail: "Individual temperature control" },
    ],
  },
];

const Amenities = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof amenitiesData[0] | null>(null);
  const [showGuide, setShowGuide] = useState(true);

  return (
    <section 
      id="amenities" 
      className="relative py-24 px-4 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
            <span className="text-blue-300 font-semibold tracking-wide text-sm uppercase">World-Class Facilities</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Premium
            <span className="block bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Amenities & Services
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Click any category below to explore our comprehensive range of luxury facilities and services
          </p>
        </div>

        {/* Interactive Guide */}
        {showGuide && (
          <div className="mb-8 bg-linear-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-6 border border-blue-400/30 animate-pulse">
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-blue-400 flex-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">How to Explore</h3>
                <p className="text-gray-200 mb-3">
                  Click on any amenity category card below to view detailed information, images, and full descriptions of our facilities.
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <ChevronRight className="w-4 h-4" />
                  <span>Interactive cards • Detailed views • High-quality images</span>
                </div>
              </div>
              <button
              type="button"
                onClick={() => setShowGuide(false)}
                aria-label="Close guide"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {amenitiesData.map((group, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(group)}
              className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:border-blue-400/50 transition-all duration-500 hover:scale-105 cursor-pointer shadow-2xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={group.image}
                  alt={group.category}
                  fill
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />
                <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white z-10">
                  {group.category}
                </h3>
                
                {/* Click indicator */}
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  <span>Click to Explore</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-200 text-sm mb-4">{group.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-400 font-semibold">{group.items.length} Features</span>
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Count Badge */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-800 font-bold shadow-lg">
                {group.items.length}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-300 text-sm">Premium Amenities</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">Services Available</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-teal-400 mb-2">4-Star</div>
            <div className="text-gray-300 text-sm">Luxury Standard</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-gray-300 text-sm">Guest Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-5xl mx-auto">
              {/* Close Button */}
              <button
       type="button"
         onClick={() => setSelectedCategory(null)}
        aria-label="Close category view"
         className="fixed top-6 right-6 text-white p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/20 z-50"
         >
        <X size={28} />
        </button>


              {/* Content */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 overflow-hidden">
                {/* Header Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={selectedCategory.image}
                    alt={selectedCategory.category}
                    fill
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                      <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                      <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                      <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                      <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-2">{selectedCategory.category}</h2>
                    <p className="text-xl text-gray-200">{selectedCategory.description}</p>
                  </div>
                </div>

                {/* Detail Images Gallery */}
                {selectedCategory.detailImages && selectedCategory.detailImages.length > 0 && (
                  <div className="p-8 border-b border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-4">Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedCategory.detailImages.map((img, idx) => (
                        <div key={idx} className="relative h-48 rounded-2xl overflow-hidden group">
                          <Image
                            src={img}
                            alt={`${selectedCategory.category} ${idx + 1}`}
                            fill
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features List */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <CheckCircle className="w-7 h-7 text-green-400" />
                    Available Features
                  </h3>
                  <div className="grid gap-4">
                    {selectedCategory.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white flex-0">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                            <p className="text-gray-300 leading-relaxed">{item.detail}</p>
                          </div>
                          <CheckCircle className="w-6 h-6 text-green-400 flex-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="p-8 bg-blue-500/10 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-blue-400" />
                      <span className="text-white font-semibold">Available 24/7</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        const contact = document.getElementById("contact");
                        if (contact) contact.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:scale-105"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Amenities;