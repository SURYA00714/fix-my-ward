import React from "react";

export default function CivicLoader({ message = "Connecting to Municipal Civic Mesh..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#070D1E] text-slate-100 p-6 select-none font-serif">
      {/* Radial Civic Glow */}
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-md text-center">
        {/* Animated Municipal Seal Outer Ring */}
        <div className="relative flex items-center justify-center mb-7">
          <div className="w-24 h-24 rounded-full border-4 border-emerald-500/30 border-t-emerald-400 animate-spin"></div>
          <div className="absolute w-16 h-16 rounded-full border-2 border-teal-500/40 border-b-teal-300 animate-spin-slow"></div>
          <div className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-[#0E1A38] border-2 border-[#283E70] shadow-xl">
            <span className="text-2xl">🏛️</span>
          </div>
        </div>

        {/* Civic Identification */}
        <h2 className="text-3xl font-bold tracking-wide text-white uppercase mb-2">
          Fix My Ward
        </h2>
        <p className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-7">
          Municipal Operations Command
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-2.5 bg-[#0E1A38] rounded-full overflow-hidden mb-4 border-2 border-[#283E70]">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full animate-pulse w-3/4"></div>
        </div>

        {/* Telemetry Message */}
        <p className="text-base text-slate-200 italic font-medium">
          {message}
        </p>
      </div>
    </div>
  );
}
