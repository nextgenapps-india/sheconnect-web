// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Menu, Heart } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SheConnect | Where Women Rise Together",
  description: "A transformative platform for women's empowerment and leadership.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-purple-900 tracking-tighter">
              SHE<span className="text-rose-500">CONNECT</span>
            </Link>
            
            <div className="hidden md:flex gap-8 font-medium text-gray-600">
              <Link href="/about" className="hover:text-purple-900 transition">About</Link>
              <Link href="/programs" className="hover:text-purple-900 transition">Programs</Link>
              <Link href="/community" className="hover:text-purple-900 transition">Community</Link>
              <Link href="/membership" className="hover:text-purple-900 transition">Membership</Link>
            </div>

            <Link href="/contact" className="hidden md:block bg-purple-900 text-white px-6 py-2 rounded-full hover:bg-rose-500 transition">
              Join Us
            </Link>
            
            <button className="md:hidden"><Menu /></button>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-purple-950 text-purple-100 py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">SHECONNECT</h3>
              <p className="max-w-sm text-purple-300">Building a powerful ecosystem of confident, financially aware, and leadership-ready women.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/corporate">Partnerships</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <p className="text-sm">info@sheconnect.in</p>
              <div className="mt-4 flex gap-4">
                {/* Social icons would go here */}
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-purple-800 text-center text-xs flex justify-between items-center">
            <p>© 2026 SheConnect Platform. All rights reserved.</p>
            <p className="flex items-center gap-1">Made with <Heart size={12} className="fill-rose-500 text-rose-500" /> for women leaders.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}