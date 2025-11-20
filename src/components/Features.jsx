import React from "react";

const features = [
  {
    title: "Great exchange rates",
    desc: "Transparent rates with no hidden markups. What you see is what you pay.",
  },
  {
    title: "Fast delivery",
    desc: "Most transfers arrive within minutes. Track progress in real-time.",
  },
  {
    title: "Global coverage",
    desc: "Send to 70+ countries and counting, directly to bank accounts or wallets.",
  },
  {
    title: "Bank-grade security",
    desc: "Your money and data are protected with industry-leading security.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Built for fast, secure transfers
        </h2>
        <p className="mt-3 text-slate-300 text-center max-w-2xl mx-auto">
          Everything you need to move money across borders with confidence.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
