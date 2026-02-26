"use client";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      interest: formData.get("interest"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) setStatus("success");
    else setStatus("error");
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        
        {/* Left: Contact Info */}
        <div>
          <h1 className="text-5xl font-bold text-purple-950 mb-6">Let’s Connect.</h1>
          <p className="text-lg text-gray-600 mb-10">
            Have questions about our programs or want to collaborate? We'd love to hear from you.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-rose-100 p-3 rounded-lg text-rose-600"><Mail /></div>
              <div>
                <h4 className="font-bold text-purple-900">Email Us</h4>
                <p className="text-gray-600">info@sheconnectplatform.org</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-purple-100 p-3 rounded-lg text-purple-600"><MapPin /></div>
              <div>
                <h4 className="font-bold text-purple-900">Location</h4>
                <p className="text-gray-600">Hybrid Model / Pan-India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-purple-50 p-8 md:p-12 rounded-3xl shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-purple-900">Full Name</label>
                <input name="name" required className="p-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-rose-500 outline-none" placeholder="Jane Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-purple-900">Email Address</label>
                <input name="email" type="email" required className="p-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-rose-500 outline-none" placeholder="jane@example.com" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-purple-900">Area of Interest</label>
              <select name="interest" className="p-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-rose-500 outline-none bg-white">
                <option>General Inquiry</option>
                <option>21-Day Transformation</option>
                <option>Corporate Partnership</option>
                <option>Membership</option>
                <option>SheConnect Summit</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-purple-900">Message</label>
              <textarea name="message" rows={4} required className="p-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-rose-500 outline-none" placeholder="How can we help you rise?"></textarea>
            </div>

            <button 
              disabled={status === "sending"}
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : <><Send size={18} /> Send Message</>}
            </button>

            {status === "error" && <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </main>
  );
}
