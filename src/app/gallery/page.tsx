"use client";
import { useState } from "react";
import { ImageIcon, Filter } from "lucide-react";

// In a real app, this data could come from a JSON file or a CMS
const EVENTS_DATA = [
  { id: 1, category: "Workshops", title: "Digital Skills 101", fileId: "YOUR_ID_1" },
  { id: 2, category: "Summits", title: "SheConnect Annual 2025", fileId: "YOUR_ID_2" },
  { id: 3, category: "Community", title: "Mumbai Circle Meetup", fileId: "YOUR_ID_3" },
  { id: 4, category: "Workshops", title: "Financial Literacy", fileId: "YOUR_ID_4" },
  // Add more as your events grow
];

const categories = ["All", "Workshops", "Summits", "Community"];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredImages = activeTab === "All" 
    ? EVENTS_DATA 
    : EVENTS_DATA.filter(img => img.category === activeTab);

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Header */}
      <section className="bg-purple-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Gallery</h1>
        <p className="text-purple-200">Capturing moments of growth, connection, and empowerment.</p>
      </section>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-12 mb-8 flex flex-wrap gap-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              activeTab === cat 
                ? "bg-rose-500 text-white shadow-lg" 
                : "bg-purple-50 text-purple-900 hover:bg-purple-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dynamic Grid */}
      <div className="max-w-7xl mx-auto px-6">
        {filteredImages.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((item) => (
              <div key={item.id} className="relative group break-inside-avoid rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <img
                  src={`https://lh3.googleusercontent.com/d/${item.fileId}`}
                  alt={item.title}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs font-bold uppercase tracking-widest text-rose-400">{item.category}</p>
                  <p className="font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-gray-400">
            <ImageIcon className="mx-auto mb-4 opacity-20" size={48} />
            <p>No images found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}