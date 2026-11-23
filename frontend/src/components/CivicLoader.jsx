export default function CivicLoader({ message = "Connecting to Municipal Civic Mesh..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 p-6 select-none font-sans relative overflow-hidden transition-colors duration-200">
      {/* Ambient Lighting */}
      <div className="absolute w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none opacity-40 dark:opacity-100"></div>

      <div className="relative z-10 flex flex-col items-center max-w-md text-center">
        {/* Animated Modern Seal Outer Ring */}
        <div className="relative flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full border-2 border-emerald-500/20 border-t-emerald-500 animate-spin"></div>
          <div className="absolute w-14 h-14 rounded-full border border-teal-500/30 border-b-teal-400 animate-spin-slow"></div>
          <div className="absolute flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-700 shadow-xl text-xl">
            🏛️
          </div>
        </div>

        {/* Civic Identification */}
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-1">
          Fix My Ward
        </h2>
        <p className="text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold mb-6">
          Municipal Operations Command
        </p>

        {/* Progress Bar */}
        <div className="w-60 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden mb-4 border border-slate-300 dark:border-slate-700/50">
          <div className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full animate-pulse w-3/4"></div>
        </div>

        {/* Telemetry Message */}
        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
          {message}
        </p>
      </div>
    </div>
  );
}
