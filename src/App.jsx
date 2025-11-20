import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="py-10 border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} GlobalRemit. All rights reserved.</p>
          <div className="text-sm text-slate-400">Demo site — not a financial service.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
