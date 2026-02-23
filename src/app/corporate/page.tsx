import { Building2, Handshake, GraduationCap, Briefcase } from "lucide-react";

export default function CorporatePage() {
  const partners = [
    { name: "Schools & Colleges", icon: <GraduationCap /> },
    { name: "Corporates (DEI)", icon: <Building2 /> },
    { name: "NGOs", icon: <Handshake /> },
    { name: "Entrepreneur Networks", icon: <Briefcase /> },
  ];

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-purple-900 text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Partner With SheConnect</h1>
        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
          We collaborate with organizations to build inclusive, high-performing ecosystems.
        </p>
      </section>

      {/* Partnership Types */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {partners.map((p, i) => (
            <div key={i} className="p-8 bg-purple-50 rounded-2xl text-center hover:bg-rose-50 transition">
              <div className="text-purple-900 mb-4 flex justify-center scale-125">{p.icon}</div>
              <h3 className="font-bold text-purple-900">{p.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Opportunities Table */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200">
            <div className="grid grid-cols-2 p-6 border-b bg-purple-900 text-white font-bold">
              <div>Program</div>
              <div>Opportunity</div>
            </div>
            {[
              ["Workshops", "Sponsorship & Hosting"],
              ["Annual Summit", "Brand Visibility & Speaking"],
              ["Community", "Co-Branded Growth Modules"],
              ["Talent", "Diversity Hiring & Access"],
            ].map(([title, desc], i) => (
              <div key={i} className="grid grid-cols-2 p-6 border-b last:border-0 hover:bg-purple-50 transition">
                <div className="font-bold text-purple-900">{title}</div>
                <div className="text-gray-600">{desc}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
             <button className="btn-primary">Request a Partnership Deck</button>
          </div>
        </div>
      </section>
    </main>
  );
}