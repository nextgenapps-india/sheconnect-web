// app/about/page.tsx
import { Target, Eye, Quote } from 'lucide-react';

export default function AboutPage() {
  return (
    <main>
      {/* Vision & Mission Hero */}
      <section className="bg-purple-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-950 mb-8">Our Purpose</h1>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border-b-4 border-rose-500">
              <Eye className="mx-auto mb-4 text-rose-500" size={40} />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To build a powerful ecosystem of confident, financially aware, emotionally resilient, and leadership-ready women who drive change in families, workplaces, and society.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border-b-4 border-purple-900">
              <Target className="mx-auto mb-4 text-purple-900" size={40} />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <ul className="text-gray-600 text-left space-y-3">
                <li>• Practical, real-world skill development</li>
                <li>• Financial literacy & independence</li>
                <li>• Leadership confidence building</li>
                <li>• Safe, collaborative growth community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <Quote className="mx-auto mb-6 text-purple-200" size={60} />
        <h2 className="text-3xl md:text-4xl font-light italic text-purple-900 leading-snug">
          "Growth happens faster in community. <br />
          <span className="font-bold not-italic">When women connect, they elevate each other.</span>"
        </h2>
        <div className="mt-12 h-1 w-24 bg-rose-500 mx-auto"></div>
      </section>

      {/* Impact Stats */}
      <section className="bg-purple-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-4xl font-bold text-rose-400">10k+</div>
            <div className="text-sm uppercase tracking-widest mt-2">Women Impacted</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-rose-400">1k+</div>
            <div className="text-sm uppercase tracking-widest mt-2">Financially Empowered</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-rose-400">500+</div>
            <div className="text-sm uppercase tracking-widest mt-2">Entrepreneurs</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-rose-400">100+</div>
            <div className="text-sm uppercase tracking-widest mt-2">Leadership Stories</div>
          </div>
        </div>
      </section>
    </main>
  );
}