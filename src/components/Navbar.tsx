"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Community", href: "/community" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-white/90 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-purple-900 tracking-tighter">
          SHE<span className="text-rose-500">CONNECT</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-purple-900 transition">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden p-2 text-purple-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer (Overlay) */}
      {/* We use z-[200] here to ensure it is higher than the Navbar (z-100) 
          and any other page content. 
      */}
      <div className={`fixed inset-0 z-[200] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden`}>
        
        {/* Backdrop: Darkened area to cover page content */}
        <div 
          className="absolute inset-0 bg-purple-950/60 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer Panel: Solid White background to ensure legibility */}
        <div className={`absolute right-0 top-0 bottom-0 w-[80%] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}>
          
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
            <span className="font-bold text-purple-900 uppercase tracking-widest text-sm">Menu</span>
            <button onClick={() => setIsOpen(false)} className="text-purple-900 p-2">
              <X size={28} />
            </button>
          </div>

          {/* Nav Links: High contrast dark text on solid white */}
          <div className="flex flex-col p-6 bg-white flex-grow">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-purple-950 hover:text-rose-600 py-4 border-b border-purple-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA at Bottom */}
          <div className="p-6 bg-purple-50 border-t border-purple-100">
             <Link 
              href="/membership" 
              onClick={() => setIsOpen(false)}
              className="w-full bg-purple-900 text-white text-center py-4 rounded-xl font-bold block shadow-md shadow-purple-200 active:scale-95 transition-transform"
             >
               Join $heConnect
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}