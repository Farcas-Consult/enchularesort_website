"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link"; // Make sure this is at the top of your file

type Section = {
  heading?: string;
  text: string;
  image?: string;
};

type Post = {
  id: number;
  title: string;
  category: string;
  emoji: string;
  date: string;
  author: string;
  sections: Section[];
};

const posts: Post[] = [
  {
    id: 1,
    title: "Top 5 Things to Do Near Enchula",
    category: "Local Experiences",
    emoji: "🎯",
    date: "November 5, 2025",
    author: "Admin",
    sections: [
      {
        heading: "Lake Vimba Kayak Adventure",
        text:
          "Start your morning with a tranquil kayak session on Lake Vimba. The calm waters reflect the golden sunrise, creating picture-perfect moments for photographers and nature enthusiasts alike. Join guided eco-tours to learn about native birds, aquatic plants, and local ecosystems. For thrill-seekers, some tours include light paddling challenges, exploration of hidden coves, and small rapids that add an element of adventure. Kayaking also provides a meditative experience, as the gentle sound of water and the surrounding greenery promote relaxation and mindfulness. Don’t forget to bring binoculars for birdwatching and a waterproof camera to capture those unforgettable lake moments.",
        image:
          "https://images.unsplash.com/photo-1518173946687-a4c8892d985a?w=1400&q=80",
      },
      {
        heading: "Enchula Cultural Village",
        text:
          "Located just 15 minutes from the resort, the cultural village immerses visitors in the rich traditions of the local community. Participate in hands-on pottery workshops, watch traditional dance performances, or savor authentic local meals cooked in clay pots. Families can enjoy craft activities with children, while culture enthusiasts can attend storytelling sessions led by village elders, sharing myths, history, and folklore. Weekly drum circles provide a lively opportunity to experience music and rhythm, creating an engaging and interactive cultural encounter. The village also hosts seasonal festivals, where visitors can observe ceremonial attire, taste festive foods, and even join in traditional dances, deepening their connection to the region’s heritage.",
        image:
          "https://images.unsplash.com/photo-1590004448324-879d7ea9e954?w=1400&q=80",
      },
      {
        heading: "Savannah Hike Trail",
        text:
          "This scenic trail features gently rolling hills, panoramic valley views, and abundant wildlife. Hikers may encounter deer, monkeys, exotic birds, and colorful butterflies along the path. Several picnic zones are scattered throughout the trail, perfect for a midday rest or scenic snack. Golden hour hikes are especially rewarding, offering warm light that enhances the landscape’s natural beauty. Guided nature walks provide insights into local flora and fauna, while photography enthusiasts can capture sweeping vistas and intimate close-ups of flora and fauna. Trail difficulty varies, allowing both beginners and experienced hikers to enjoy the landscape safely while embracing the tranquility of the savannah.",
        image:
          "https://images.unsplash.com/photo-1607497266800-66da2aa8d4ac?w=1400&q=80",
      },
      {
        heading: "Farm-to-Table Saturday Market",
        text:
          "Every Saturday, local farmers and artisans gather to sell fresh produce, handmade crafts, and traditional snacks. Visitors can sample roasted maize, herbal teas, fresh cheeses, and seasonal fruits, all sourced sustainably from nearby farms. This market provides an authentic glimpse into local agricultural practices and fosters direct engagement with the community. Guests can also participate in cooking demonstrations, learn about organic farming techniques, and purchase artisanal products to support local businesses. The vibrant colors, aromas, and sounds of the market create a lively and immersive sensory experience, perfect for families and solo travelers alike.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=80",
      },
      {
        heading: "Hot Springs & Spa Retreat",
        text:
          "End your day with a rejuvenating soak in the natural mineral springs near the resort. The warm water relaxes muscles, relieves stress, and improves skin health. Pair your soak with a massage, clay facial, or aromatherapy session at the resort spa to enhance your sense of relaxation. Evening sessions under the stars create a magical, serene atmosphere, allowing guests to unwind fully and connect with nature. Guided yoga sessions near the springs offer an added wellness component, combining gentle exercise with the calming sounds of flowing water. This holistic retreat experience ensures both body and mind leave refreshed, making it a perfect way to conclude your day of adventure.",
        image:
          "https://images.unsplash.com/photo-1544213456-b0e78b2b5f4a?w=1400&q=80",
      },
      {
        heading: "Insider Tips",
        text:
          "Rent bicycles from the resort to explore hidden paths that might be missed on foot. Mornings and late afternoons offer cooler temperatures and softer lighting, ideal for photography and comfortable hiking. Always carry water, light snacks, and a small first-aid kit for outdoor excursions. Binoculars are highly recommended for birdwatching along the trails, and guests should respect wildlife by maintaining a safe distance. Local guides can provide insider knowledge on secret viewpoints, lesser-known trails, and tips for capturing the best photos. Following these tips ensures a memorable, safe, and immersive adventure around Enchula.",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1400&q=80",
      },
    ],
  },

  {
    id: 2,
    title: "First Timer's Guide to Weekend GateAways",
    category: "Travel Tips",
    emoji: "✈️",
    date: "October 28, 2025",
    author: "Admin",
    sections: [
      {
        heading: "Packing Smart",
        text:
          "Packing efficiently is key for a stress-free weekend getaway. Light layers are essential, as weather conditions can change quickly, especially near lakes or open plains. Bring swimwear for relaxing dips or spa sessions, comfortable walking shoes for excursions and hikes, and a light jacket for cooler evenings. Accessories like hats and sunglasses protect against the sun, while sunscreen keeps skin safe during outdoor activities. Don’t forget a power bank to keep your devices charged for capturing memories and staying connected. Additionally, packing a small backpack for daily adventures allows you to carry water, snacks, and essentials without being weighed down. Thoughtful packing ensures that every moment of your getaway is enjoyable without last-minute worries.",
        image:
          "https://images.unsplash.com/photo-1564429097587-f3f368c10b00?w=1400&q=80",
      },
      {
        heading: "Suggested Itinerary",
        text:
          "A well-structured itinerary can help first-timers make the most of their short stay. On Day 1, check into your accommodation and enjoy a lakeside welcome drink as you take in the serene surroundings. Explore local craft shops, stroll along scenic paths, and end the day with a cozy dinner by the firepit under the stars. Day 2 can begin with a sunrise hike to capture breathtaking views, followed by a spa or hot spring session to relax tired muscles. Enjoy a kayaking adventure on calm waters, and finish the day with live acoustic music and storytelling sessions featuring local artists. This suggested itinerary balances adventure, relaxation, and cultural immersion, ensuring a fulfilling experience for all visitors.",
        image:
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=80",
      },
      {
        heading: "Local Experiences",
        text:
          "Engaging with the local community adds depth to any weekend getaway. Participate in clay pottery workshops, where you can create your own souvenirs while learning traditional techniques. Join cooking classes to explore authentic local recipes, or embark on guided nature walks led by knowledgeable guides who highlight flora, fauna, and hidden scenic spots. Short but immersive cultural activities allow travelers to connect with the region’s heritage, fostering appreciation and understanding. Even small experiences, such as chatting with local artisans or sampling regional delicacies, create lasting memories and a more meaningful getaway experience.",
        image:
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1400&q=80",
      },
      {
        heading: "Pro Tips",
        text:
          "To maximize enjoyment, consider a few insider tips. Book spa treatments in advance to avoid last-minute disappointments, and aim for early morning excursions to enjoy quieter paths and soft morning light perfect for photography. Carry small cash for local markets and vendors, as some may not accept cards. Keep a notebook or camera handy to record observations, sketch scenic views, or capture photographs. Additionally, always check weather conditions for outdoor activities and plan accordingly. Staying flexible while following these tips allows first-time visitors to navigate their weekend getaway smoothly, ensuring a balance of relaxation, exploration, and cultural enrichment.",
        image:
          "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=80",
      },
    ],
  },

  {
    id: 3,
    title: "Why Families Love Enchula Resort",
    category: "Family Travel",
    emoji: "👨‍👩‍👧‍👦",
    date: "October 20, 2025",
    author: "Admin",
    sections: [
      {
        heading: "Kid-Friendly Activities",
        text:
          "Enchula Resort ensures that children of all ages are entertained and engaged throughout their stay. Nature treasure hunts allow kids to explore the outdoors while learning about local plants and wildlife. Mini cooking classes provide hands-on experience, letting children create simple dishes with fresh, local ingredients. Treehouse play zones and art workshops encourage creativity and physical activity, keeping energy levels high while fostering imagination. The resort also organizes interactive storytelling sessions and nature scavenger hunts, ensuring that children not only have fun but also learn about the environment and local culture. Families can rest easy knowing their kids are safe while fully enjoying themselves.",
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400&q=80",
      },
      {
        heading: "Parent Perks",
        text:
          "While children are entertained, parents can relax and recharge. Spacious cottages with kitchenettes allow families to maintain comfort and flexibility during meals. Quiet reading decks, spa treatments, and scenic walking paths offer adults opportunities for leisure and reflection. Evening storytelling sessions and acoustic music performances provide relaxing entertainment for the entire family, creating shared experiences without the stress of planning activities. Parents can also enjoy guided nature walks, photography tours, and wellness sessions designed to rejuvenate the mind and body, making the stay both enjoyable and restorative.",
        image:
          "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1400&q=80",
      },
      {
        heading: "Family Services",
        text:
          "Safety and convenience are top priorities at Enchula Resort. All swimming pools are supervised by trained lifeguards, ensuring a secure environment for children. Babysitting services are available on request, allowing parents some time for private relaxation or activities. The resort offers organized family photo sessions at sunset to capture lasting memories, ensuring each visit is preserved in beautiful imagery. Additionally, staff are available around the clock to assist with any needs, whether it’s arranging excursions, providing guidance on kid-friendly activities, or ensuring safety protocols are followed on resort grounds.",
        image:
          "https://images.unsplash.com/photo-1590502593749-43f4e92664b8?w=1400&q=80",
      },
      {
        heading: "Dining Options for All Ages",
        text:
          "The resort’s dining experience caters to both children and adults. Kid-friendly menus feature nutritious and appealing meals, while flexible dining times accommodate family schedules. Cooking sessions allow children to learn and participate in preparing meals alongside professional chefs, fostering culinary curiosity and confidence. Parents can enjoy locally-sourced, gourmet dishes paired with fine wines or artisanal beverages. Communal dining areas encourage social interaction between families, enhancing the sense of community and creating a fun, inclusive atmosphere during meal times.",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80",
      },
      {
        heading: "Safety & Comfort",
        text:
          "Enchula Resort is committed to providing a safe and comfortable environment for families. Secure cottages, well-marked trails, and evening lighting ensure peace of mind when exploring the property. Staff-guided paths allow for safe nighttime walks, while 24/7 assistance ensures any issues or concerns are promptly addressed. The resort’s design considers both accessibility and comfort, providing amenities such as stroller-friendly paths, family-sized accommodations, and easy access to pools and activity zones. This dedication allows parents to relax and enjoy their vacation fully, knowing their children are safe and well-cared for.",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1400&q=80",
      },
    ],
  },

  {
    id: 4,
    title: "Sustainable Tourism; Protecting our Land",
    category: "Sustainability",
    emoji: "🌱",
    date: "October 10, 2025",
    author: "Admin",
    sections: [
      {
        heading: "The Importance of Sustainability",
        text:
          "Sustainable tourism preserves ecosystems and supports local communities. Making small eco-conscious choices, such as avoiding single-use plastics, conserving water, and respecting wildlife, has a significant impact. By traveling responsibly, visitors help protect endangered species, maintain clean waterways, and minimize carbon footprints. Beyond environmental benefits, sustainable tourism fosters cultural preservation by supporting traditional practices, local artisans, and indigenous knowledge. Each thoughtful choice, from selecting eco-friendly accommodations to engaging in low-impact activities, contributes to the long-term health and beauty of Enchula.",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1400&q=80",
      },
      {
        heading: "Resort Initiatives",
        text:
          "Enchula Resort actively engages in conservation efforts. Staff are trained in eco-friendly practices, including waste reduction, recycling, and sustainable food sourcing. The resort supports reforestation projects, planting native trees to restore degraded areas and provide habitats for local wildlife. Guests are encouraged to participate in eco-educational workshops, garden tours, and tree planting activities, learning firsthand the value of environmental stewardship. Additionally, water-saving technologies, energy-efficient lighting, and composting systems ensure that the resort operates with minimal environmental impact while offering a comfortable and luxurious stay.",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80",
      },
      {
        heading: "Community Engagement",
        text:
          "Sustainable tourism extends beyond the resort into the surrounding community. Visitors are invited to collaborate with local artisans, buy handcrafted goods, and learn about traditional techniques that protect the environment. Cooking demonstrations, pottery workshops, and guided village tours not only provide memorable cultural experiences but also generate income for local families. Engaging with the community encourages responsible tourism practices, ensures economic sustainability, and strengthens relationships between guests and the people who call Enchula home. The cultural exchange fosters respect, awareness, and appreciation for the region’s heritage.",
        image:
          "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1400&q=80",
      },
      {
        heading: "Eco-Friendly Tips",
        text:
          "Guests can take simple actions to reduce their environmental footprint. Bring reusable water bottles and shopping bags, walk or bike when possible, and avoid disturbing wildlife or picking plants. Participate in guided eco-tours that highlight the local flora and fauna without damaging habitats. When dining, opt for locally-sourced meals, and properly dispose of any waste. Photography enthusiasts should follow “leave no trace” principles when exploring hidden trails or waterfalls. Every small action contributes to preserving the natural beauty of Enchula for future generations, ensuring that the resort remains a thriving haven for both people and nature.",
        image:
          "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1400&q=80",
      },
    ],
  },

  {
    id: 5,
    title: "Best Photography Spots at the Resort",
    category: "Photography",
    emoji: "📸",
    date: "October 11, 2025",
    author: "Admin",
    sections: [
      {
        heading: "Sunrise Lake Views",
        text:
          "Capture misty reflections on the lake at dawn. Soft light creates perfect landscape and portrait shots. Early mornings are the best time to avoid crowds. Take advantage of the mirror-like water in calm weather to photograph stunning reflections of surrounding hills and trees. Experiment with long exposures to capture morning mist drifting across the water or the gentle ripple patterns. Bring a tripod for stability and a lens cloth for dew-covered surfaces. Don’t forget to include local wildlife, like birds taking flight or deer grazing near the lake, for a dynamic shot.",
        image:
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=80",
      },
      {
        heading: "Savannah Overlooks",
        text:
          "Wide valley vantage points capture sweeping panoramas. Visit during golden hour for warm tones and depth. Ideal for drone shots and wide-angle photography. The rolling hills, dotted with acacia trees, provide endless compositions. Try capturing silhouettes of lone trees against vibrant skies or the interplay of sunlight and shadow across the grasslands. If you’re adventurous, hike to less-traveled vantage points for a unique perspective or use a telephoto lens to zoom in on distant wildlife. Sunset here is magical—perfect for landscape and time-lapse photography.",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1400&q=80",
      },
      {
        heading: "Cultural Village Portraits",
        text:
          "Document artisans at work and traditional performances. Ask for permission before photographing people. Close-ups of pottery, weaving, and handmade crafts offer detailed shots. Capture candid moments of dancers, musicians, and storytellers for authentic cultural portraits. Play with natural lighting indoors, or use shallow depth-of-field to highlight textures like clay, fabric, or wood. Bring a small reflector or lens filter to control shadows or glare. Consider photographing seasonal events or village festivals to add vibrant cultural context.",
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1400&q=80",
      },
      {
        heading: "Hidden Trails & Waterfalls",
        text:
          "Small paths lead to scenic waterfalls, natural pools, and unique rock formations. Ideal for adventurous photography and intimate landscape captures. Capture cascading water using slow shutter speeds to create silky-smooth effects or frozen-action shots of splashing streams. The surrounding foliage, mossy rocks, and sunlight filtering through the canopy create natural frames for your subject. Use wide-angle lenses for immersive perspectives or macro lenses to highlight textures like dew-covered leaves and intricate rock patterns. Early morning or late afternoon light enhances the mood and colors.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=80",
      },
    ],
  },

  {
    id: 6,
    title: "Culinary Journey; Farm-to-table Dining",
    category: "Food",
    emoji: "🍽️",
    date: "September 25, 2025",
    author: "Admin",
    sections: [
      {
        heading: "Local Ingredients",
        text:
          "Fresh produce, dairy, and herbs are sourced from nearby farms, ensuring seasonal flavors in every dish. Guests can tour these farms and interact with farmers, learning how crops are cultivated, harvested, and prepared. The farmers often share their stories, teaching about traditional cultivation methods that have been passed down for generations. Seasonal ingredients, like heirloom tomatoes, wild herbs, and organic honey, are highlighted in daily menus, giving guests a taste of the local terroir. Experiencing the ingredient journey firsthand deepens appreciation for each dish’s origin and care.",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&q=80",
      },
      {
        heading: "Signature Dishes",
        text:
          "Enjoy roasted root vegetables, herb-marinated grilled fish, and traditional stews prepared with local recipes. Seasonal specials highlight the best of the region, like pumpkin risotto in autumn or fresh berry tarts in summer. Each dish tells a story of local culture, agricultural practices, and culinary heritage. Guests often find that flavors are more vivid and aromatic than supermarket produce, emphasizing the importance of freshness and seasonality. Pairing these dishes with local wines or herbal infusions elevates the sensory experience.",
        image:
          "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1400&q=80",
      },
      {
        heading: "Dining Experiences",
        text:
          "From lakeside dinners to communal cooking nights, guests can learn to prepare local dishes and dine under the stars. Wine pairings and tasting menus elevate the culinary journey. Guests can participate in themed dinners, like “Spice of the Savannah” or “Harvest Celebration,” where each course is inspired by ingredients grown just steps away. The communal dining experience encourages conversation, cultural exchange, and bonding among visitors, turning each meal into a memorable social event. Personalized chef recommendations and guided tasting tours make dining both educational and indulgent.",
        image:
          "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=1400&q=80",
      },
      {
        heading: "Chef Interactions",
        text:
          "Professional chefs offer classes and demonstrations, giving guests hands-on experience in local cuisine. Perfect for food enthusiasts and families alike. Sessions include learning plating techniques, flavor pairing, knife skills, and traditional cooking methods such as clay pot stews or open-fire grilling. Children can join “junior chef” sessions to create simple, fun dishes alongside their parents. Guests often leave with new skills, recipes, and a deeper understanding of the balance between fresh ingredients, seasonality, and traditional culinary techniques. The chefs also share stories about local food culture, sustainable practices, and the history behind classic recipes, making it a full gastronomic education.",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1400&q=80",
      },
    ],
  },
];

// Function to estimate reading time
function estimateReadTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111] text-white">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold mb-4">Blog Not Found</h2>
          <p className="mb-6">We couldn't locate that article.</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push("/blog")}
              className="px-5 py-2 bg-[#800000] rounded-full text-white hover:bg-[#A04040] transition"
            >
              Go to Blog List
            </button>
            <button
              onClick={() => router.back()}
              className="px-5 py-2 border border-[#D7BFA8] rounded-full text-[#D7BFA8] hover:bg-white/5 transition"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const combinedText = post.sections.map((s) => `${s.heading ?? ""} ${s.text}`).join(" ");
  const readTime = estimateReadTime(combinedText);

  return (
    <main
      className="min-h-screen py-16 px-6 text-[#FAF5F0] relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=1600&q=60')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#2E1A15]/90 pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Back Button */}
        <Link href="/#blog"
        className="text-[#D7BFA8] hover:text-white flex items-center gap-2 mb-6">
          ← Back to Blogs
          </Link>



        <header className="mb-8 mt-10 text-center">
          <div className="text-6xl mb-4">{post.emoji}</div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">{post.title}</h1>
          <div className="flex justify-center items-center gap-3 text-[#D7BFA8] text-sm">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{readTime}</span>
          </div>
        </header>

        <section className="space-y-16">
          {post.sections.map((section, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                <div className={`${isEven ? "order-1" : "order-2"} rounded-lg overflow-hidden shadow-lg`}>
                  <img
                    src={section.image}
                    alt={section.heading ?? `${post.title} image ${idx + 1}`}
                    className="w-full h-72 md:h-96 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className={`${isEven ? "order-2" : "order-1"} prose prose-lg max-w-none text-[#FAF5F0]`}>
                  {section.heading && <h3 className="text-2xl font-bold mb-3">{section.heading}</h3>}
                  <p className="leading-relaxed">{section.text}</p>
                </div>
              </div>
            );
          })}
        </section>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-4 text-[#D7BFA8]">Inspired to visit Enchula?</h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => router.push("/booking")}
              className="px-8 py-3 bg-[#800000] text-white rounded-full font-semibold hover:bg-[#A04040] transition"
            >
              Book Your Stay
            </button>
            <button
              onClick={() => router.push("/blog")}
              className="px-6 py-3 border border-[#D7BFA8] rounded-full text-[#D7BFA8] hover:bg-white/5 transition"
            >
              Back to All Posts
            </button>
          </div>
        </div>

        <div className="h-24" />
      </div>
    </main>
  );
}
