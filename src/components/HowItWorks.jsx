import React from "react";

const steps = [
  { step: 1, title: "Create your transfer", text: "Enter the amount, choose currencies, and add your recipient." },
  { step: 2, title: "Pay securely", text: "Use your card or bank transfer. We keep fees low and transparent." },
  { step: 3, title: "Track in real-time", text: "Follow progress from your dashboard and notify your recipient." },
];

function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">How it works</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center font-bold">
                {s.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
