import React from "react";

function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 sm:pt-28 sm:pb-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Send money worldwide in seconds
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              GlobalRemit makes international transfers fast, secure, and affordable. Great rates, low fees, and instant notifications.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-lg px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">
                Get started
              </a>
              <a href="#how" className="inline-flex items-center justify-center rounded-lg px-5 py-3 border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition">
                How it works
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">70+</div>
                <div className="text-xs text-slate-300">countries</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">0-2%</div>
                <div className="text-xs text-slate-300">low fees</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">Real-time</div>
                <div className="text-xs text-slate-300">tracking</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-bold text-white">Bank-grade</div>
                <div className="text-xs text-slate-300">security</div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-400/10 pointer-events-none" />

              <form className="relative grid gap-4">
                <div>
                  <label className="block text-sm text-slate-300 mb-1">You send</label>
                  <div className="flex gap-2">
                    <input type="number" placeholder="1,000" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                    <select className="rounded-lg bg-slate-900/60 border border-white/10 px-3 text-white focus:outline-none">
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-slate-300 mb-1">Recipient gets</label>
                  <div className="flex gap-2">
                    <input disabled value="≈ 910" className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-3 text-white/80 placeholder:text-slate-500 focus:outline-none" />
                    <select className="rounded-lg bg-slate-900/60 border border-white/10 px-3 text-white focus:outline-none">
                      <option>EUR</option>
                      <option>USD</option>
                      <option>GBP</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Fee</span>
                  <span>$4.50</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span>Rate</span>
                  <span>1 USD = 0.92 EUR</span>
                </div>

                <button type="button" className="mt-2 inline-flex items-center justify-center rounded-lg px-5 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">
                  Calculate
                </button>
                <p className="text-xs text-slate-400">For demo purposes only. No real transactions are processed.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
