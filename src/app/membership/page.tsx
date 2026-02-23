// app/membership/page.tsx
export default function MembershipPage() {
  const plans = [
    { name: "Monthly", price: "Flexible", features: ["Resource Library", "Community Access"] },
    { name: "Quarterly", price: "Popular", features: ["Resource Library", "Priority Registration", "3 Workshops"] },
    { name: "Annual", price: "Best Value", features: ["All Features", "Mentor Access", "Summit Tickets", "Business Visibility"] },
  ];

  return (
    <div className="bg-purple-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Become a SheConnect Member</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`p-8 rounded-3xl bg-white shadow-xl ${plan.name === 'Annual' ? 'ring-4 ring-rose-500 scale-105' : ''}`}>
              <h3 className="text-2xl font-bold text-purple-900">{plan.name}</h3>
              <p className="text-rose-500 font-semibold mb-6">{plan.price}</p>
              <ul className="text-left space-y-4 mb-8">
                {plan.features.map(f => <li key={f} className="text-gray-600">✓ {f}</li>)}
              </ul>
              <button className="w-full py-3 bg-purple-900 text-white rounded-xl font-bold hover:bg-purple-800 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}