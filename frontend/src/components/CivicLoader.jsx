import React from "react";

export default function CivicLoader({ message = "Connecting to Municipal Civic Mesh..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-100 p-6 select-none font-serif">
      {/* Radial Civic Glow */}
      <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-sm text-center">
        {/* Animated Municipal Seal Outer Ring */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full border-2 border-emerald-500/30 border-t-emerald-400 animate-spin"></div>
          <div className="absolute w-14 h-14 rounded-full border border-teal-500/40 border-b-teal-300 animate-spin-slow"></div>
          <div className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border border-slate-700 shadow-inner">
            <span className="text-xl">🏛️</span>
          </div>
        </div>

        {/* Civic Identification */}
        <h2 className="text-2xl font-bold tracking-wide text-white uppercase mb-2">
          Fix My Ward
        </h2>
        <p className="text-xs uppercase tracking-widest text-emerald-400/90 font-medium mb-6">
          Municipal Operations Command
        </p>

        {/* Progress Bar */}
        <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden mb-4 border border-slate-700/50">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 rounded-full animate-pulse w-3/4"></div>
        </div>

        {/* Telemetry Message */}
        <p className="text-sm text-slate-400 italic">
          {message}
        </p>
      </div>
    </div>
  );
}
