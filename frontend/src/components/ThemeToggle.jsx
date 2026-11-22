import { useTheme } from "../hooks/useTheme";

export function ThemeToggle({ className = "", showLabel = false, size = "md" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const sizeClasses = {
    sm: "w-10 h-10 min-h-[44px] min-w-[44px] text-xs p-2.5",
    md: "w-11 h-11 min-h-[44px] min-w-[44px] text-sm p-2.5",
    lg: "px-4 py-2.5 min-h-[44px] text-xs",
  }[size] || "w-11 h-11 min-h-[44px] min-w-[44px] text-sm p-2.5";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title={isDark ? "Switch to Day (Light) Theme" : "Switch to Night (Dark) Theme"}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className={`inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-200 cursor-pointer ${
        isDark
          ? "bg-[#131B2E] border border-slate-700/80 text-amber-400 hover:bg-[#1C2640] hover:border-amber-400/40 hover:text-amber-300 shadow-sm"
          : "bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 hover:border-slate-400 hover:text-indigo-600 shadow-sm"
      } ${sizeClasses} ${className}`}
    >
      {isDark ? (
        // Sun Icon
        <svg
          className="w-4 h-4 shrink-0 transition-transform hover:rotate-45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" strokeLinecap="round" />
        </svg>
      ) : (
        // Moon Icon
        <svg
          className="w-4 h-4 shrink-0 transition-transform hover:-rotate-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {showLabel && (
        <span className="font-bold tracking-tight">
          {isDark ? "Day Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}

export default ThemeToggle;
