import React from "react";

function CTA() {
  return (
    <section id="get-started" className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to send money smarter?</h2>
        <p className="mt-3 text-slate-300">Join thousands of customers saving on international transfers every day.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition">Create free account</button>
          <button className="px-5 py-3 rounded-lg border border-white/20 text-white/90 hover:text-white hover:border-white/40 transition">Compare rates</button>
        </div>
        <p className="mt-4 text-xs text-slate-400">Demo UI only. This does not initiate real transactions.</p>
      </div>
    </section>
  );
}

export default CTA;
