// app/programs/page.tsx
import { BookOpen, Users, Calendar, Award, Building } from 'lucide-react';

const programs = [
  { title: "Live Workshops", desc: "Interactive sessions on communication and leadership.", icon: <Calendar /> },
  { title: "21-Day Transformation", desc: "Structured accountability-based learning journeys.", icon: <BookOpen /> },
  { title: "Certification Courses", desc: "Skill-based programs for real-world application.", icon: <Award /> },
  { title: "Mentorship Circles", desc: "Small-group guidance with expert partners.", icon: <Users /> },
  { title: "Corporate Modules", desc: "DEI-focused workshops for organizations.", icon: <Building /> },
];

export default function ProgramsPage() {
  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-900 mb-4 text-center">Our Offerings</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Tailored growth paths designed to elevate your professional and personal life.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={i} className="p-8 border rounded-2xl hover:border-rose-400 transition-all group">
              <div className="text-rose-500 mb-4 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-900">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}