export default function BlogPage() {
  const posts = [
    { title: "Women & Financial Independence", tag: "Finance", date: "Oct 12, 2026" },
    { title: "Career Growth Strategies for 2026", tag: "Career", date: "Oct 10, 2026" },
    { title: "Understanding Hormonal Health", tag: "Wellness", date: "Oct 05, 2026" },
  ];

  return (
    <main className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-purple-950 mb-12">Insights & Stories</h1>
      <div className="grid gap-12">
        {posts.map((post, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-64 h-48 bg-gray-200 rounded-2xl group-hover:opacity-80 transition" />
              <div>
                <span className="text-rose-500 font-bold text-sm uppercase tracking-widest">{post.tag}</span>
                <h2 className="text-2xl font-bold text-purple-900 mt-2 group-hover:text-rose-600 transition">{post.title}</h2>
                <p className="text-gray-500 mt-2">{post.date}</p>
                <p className="text-gray-600 mt-4 leading-relaxed line-clamp-2">
                  Discover practical steps and expert insights to navigate your journey in today's landscape...
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}