import {
  ArrowRight,
  MapPin,
  Target,
  Award,
  Users,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-purple-950 text-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="text-rose-400 font-bold tracking-widest uppercase text-sm mb-4 block">
              Where Indian Women Rise Together
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-300">
                $heConnect
              </span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-lg">
              A powerful community where women grow, rise, and succeed together.
              Bridging the gap between potential and platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">Explore & Experience</button>
              <button className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-purple-950">
                View Impact
              </button>
            </div>
          </div>
          <div className="relative h-[500px] hidden md:block">
            {/* Placeholder for Hero Image from Brochure Page 1 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-800 to-rose-500 rounded-3xl rotate-3 opacity-20"></div>
            <div className="absolute inset-0 border-2 border-rose-400/30 rounded-3xl -rotate-3"></div>
            <div className="relative h-[500px] hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-800 to-rose-500 rounded-3xl rotate-3 opacity-20"></div>
              <div className="absolute inset-0 border-2 border-rose-400/30 rounded-3xl -rotate-3"></div>
              <div className="relative z-10 w-full h-full rounded-3xl shadow-2xl overflow-hidden bg-purple-100">
                <Image
                  src="/images/impact.png"
                  alt="SheConnect Community Impact"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SHECONNECT EXISTS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-950 mb-6">
            "Because when Women rise together, Communities Transform"
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            $heConnect is a powerful women-led community designed to help Indian
            women Start, Grow, and Scale with Confidence.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <ValueCard
            icon={<Target />}
            title="Our Mission"
            desc="Education, Skill Development, Business Exposure, Mentorship, and Financial Freedom."
          />
          <ValueCard
            icon={<ShieldCheck />}
            title="Our Values"
            desc="Ambition, Support, Relationships, Networking, and Recognition."
          />
          <div className="bg-purple-900 text-white p-8 rounded-3xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Expanding Across India</h3>
            <ul className="grid grid-cols-2 gap-2 text-purple-200 text-sm">
              <li>• Ludhiana</li>
              <li>• Jalandhar</li>
              <li>• Chandigarh</li>
              <li>• Delhi NCR</li>
              <li>• Mumbai</li>
              <li>• Patiala</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CO-FOUNDERS SECTION */}
      <section className="py-24 px-6 bg-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-950 mb-16">
            Meet Our Visionaries
          </h2>
          {/* 2. CO-FOUNDERS SECTION */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Er. Shilpa Miglani */}
            <div className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-3xl shadow-sm border-b-4 border-rose-500 hover:shadow-md transition">
              <div className="w-40 h-40 relative rounded-2xl flex-shrink-0 overflow-hidden bg-gray-100">
                <Image
                  src="/images/shilpa.png" // Ensure this exists in public/images/
                  alt="Er. Shilpa Miglani"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-900">
                  Er. Shilpa Miglani
                </h3>
                <p className="text-rose-600 font-medium mb-4">Co-founder</p>
                <p className="text-gray-600 italic leading-relaxed text-sm">
                  Soft Skills & Employability Coach. Dedicated to empowering
                  women through actionable skill-building.
                </p>
              </div>
            </div>

            {/* Ms. Eshu Madaan */}
            <div className="flex flex-col md:flex-row gap-8 bg-white p-8 rounded-3xl shadow-sm border-b-4 border-purple-900 hover:shadow-md transition">
              <div className="w-40 h-40 relative rounded-2xl flex-shrink-0 overflow-hidden bg-gray-100">
                <Image
                  src="/images/eshu.png" // Ensure this exists in public/images/
                  alt="Ms. Eshu Madaan"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-purple-900">
                  Ms. Eshu Madaan
                </h3>
                <p className="text-purple-600 font-medium mb-4">Co-founder</p>
                <p className="text-gray-600 italic leading-relaxed text-sm">
                  Edupreneur & Founder of Skillsphere. Focused on scaling
                  educational potential into professional success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITIES (Page 4 of Brochure) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <h2 className="text-4xl font-bold text-purple-950 max-w-md">
              What You Get Inside $heConnect
            </h2>
            <p className="text-gray-500 max-w-sm">
              Strategic networking, brand visibility, and real connections—not
              just content.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <BenefitItem title="Strategic Networking" />
            <BenefitItem title="Brand Visibility" />
            <BenefitItem title="Business Exhibitions" />
            <BenefitItem title="Leadership Panels" />
          </div>

          {/* Signature Opportunity Highlight */}
          <div className="mt-12 p-8 bg-gradient-to-r from-purple-900 to-rose-600 rounded-3xl text-white flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="text-rose-300 font-bold uppercase tracking-widest text-sm mb-2">
                Signature Opportunity
              </h4>
              <h3 className="text-3xl font-bold">
                Punjab Women Entrepreneurial Award
              </h3>
            </div>
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-purple-900 rounded-full font-bold hover:bg-rose-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ValueCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-10 bg-white border border-purple-100 rounded-3xl hover:shadow-xl transition-shadow">
      <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-purple-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function BenefitItem({ title }: { title: string }) {
  return (
    <div className="p-6 bg-purple-50 rounded-2xl border border-transparent hover:border-rose-300 transition-colors">
      <Award className="text-rose-500 mb-3" size={24} />
      <span className="font-bold text-purple-900">{title}</span>
    </div>
  );
}
