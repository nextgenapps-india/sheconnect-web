import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-purple-950 text-purple-100 py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-white">SHECONNECT</h3>
              <p className="max-w-sm text-purple-300">
                Building a powerful ecosystem of confident, financially aware,
                and leadership-ready women.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/corporate">Partnerships</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <p className="text-sm">info@sheconnectplatform.org</p>
              <div className="mt-4 flex gap-4">
                {/* Social icons would go here */}
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-purple-800 text-center text-xs flex justify-between items-center">
            <p>© 2026 SheConnect Platform. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with{" "}
              <Heart size={12} className="fill-rose-500 text-rose-500" /> for
              women leaders.
            </p>
          </div>
        </footer>
    );
}