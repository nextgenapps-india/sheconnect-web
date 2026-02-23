import { Users2, Star, Zap, Globe } from "lucide-react";

export default function CommunityPage() {
  const benefits = [
    { title: "Monthly Growth Challenges", icon: <Zap /> },
    { title: "Networking Events", icon: <Globe /> },
    { title: "Peer Accountability", icon: <Users2 /> },
    { title: "Mentor Access", icon: <Star /> },
  ];

  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-white to-rose-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-rose-500 font-bold tracking-widest uppercase text-sm">SheConnect Circles</span>
          <h1 className="text-4xl md:text-6xl font-bold text-purple-950 mt-4 mb-6">Success is stronger when shared.</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Our accountability groups are designed to ensure you don't just learn—you implement and grow alongside like-minded women.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-rose-100">
                <div className="text-rose-500 mb-4 flex justify-center">{b.icon}</div>
                <h3 className="font-bold text-purple-900">{b.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to find your circle?</h2>
          <p className="mb-8 text-purple-200">Join thousands of women who are already redefining their leadership journey.</p>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-full font-bold text-lg transition">
            Apply to Join a Circle
          </button>
        </div>
      </section>
    </main>
  );
}