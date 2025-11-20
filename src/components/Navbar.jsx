import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold shadow-lg shadow-blue-500/20">GR</span>
          <span className="font-semibold tracking-tight">GlobalRemit</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#countries" className="hover:text-white transition">Countries</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 text-sm text-slate-300 hover:text-white transition">Sign in</button>
          <a href="#get-started" className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">Get started</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
