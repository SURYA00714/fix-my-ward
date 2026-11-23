import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "../../../hooks/useTheme";
import { useAdminAuth } from "../../context/AdminAuthContext";
import ThemeToggle from "../../../components/ThemeToggle";
import { EyeIcon, EyeOffIcon } from "../../../components/SvgIcon";

export default function Login() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const { login, isAuthenticated, error: authError, setError } = useAdminAuth();

  const [email, setEmail] = useState("admin@fixmyward.gov.in");
  const [password, setPassword] = useState("adminpassword123");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError("");
    if (setError) setError("");

    if (!email.trim() || !password.trim()) {
      setValidationError("Please enter both email and password.");
      return;
    }

    setLoading(true);
    const result = await login(email, password);
    setLoading(false);

    if (result.success) {
      navigate("/admin/dashboard", { replace: true });
    }
  };

  const displayError = validationError || authError;

  return (
    <div 
      className="min-h-screen bg-slate-50 dark:bg-gray-950 text-slate-800 dark:text-white flex flex-col justify-center items-center p-4 relative overflow-hidden transition-colors duration-200"
      style={{
        backgroundImage: theme === "dark" 
          ? "radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 0)" 
          : "radial-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 0)",
        backgroundSize: "24px 24px"
      }}
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/[0.03] dark:bg-emerald-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-teal-500/[0.03] dark:bg-teal-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Top navigation helpers */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition shadow-sm backdrop-blur-md"
        >
          <span>&larr;</span> Back to Home
        </Link>
      </div>

      {/* Floating Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle size="md" />
      </div>

      <div className="max-w-md w-full bg-white dark:bg-gray-900 border border-gray-250 dark:border-gray-800/80 rounded-3xl p-8 shadow-xl relative z-10">
        
        {/* Brand Logo */}
        <div className="flex flex-col items-center mb-5">
          <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 dark:text-emerald-450 rounded-2xl flex items-center justify-center border border-emerald-500/25 mb-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110 21a3.745 3.745 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>
          <span className="text-[12px] font-black tracking-[0.25em] text-slate-900 dark:text-white uppercase leading-none">FIXMYWARD</span>
          <span className="text-[10px] font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-450 border border-emerald-500/25 px-2.5 py-0.5 rounded-full mt-2">
            ADMIN PANEL
          </span>
        </div>

        {/* Quick Portal Switcher Tabs */}
        <div className="flex rounded-2xl bg-slate-100 dark:bg-gray-950 p-1 mb-5 border border-gray-200 dark:border-gray-800">
          <Link
            to="/login"
            className="flex-1 py-2 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-white dark:hover:bg-gray-900/60 transition-all"
            title="Switch to Citizen Portal Login"
          >
            <span>🏛️</span> Citizen Portal &rarr;
          </Link>
          <div className="flex-1 py-2 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 bg-emerald-500 text-slate-950 shadow-sm cursor-default">
            <span>🛡️</span> Admin Command
          </div>
        </div>

        {/* Quick Demo Fill Helper */}
        <div className="mb-5 p-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 flex items-center justify-between gap-2.5 text-xs">
          <span className="text-slate-600 dark:text-slate-400 font-medium">
            Demo officer?
          </span>
          <button
            type="button"
            onClick={() => {
              setEmail("admin@fixmyward.gov.in");
              setPassword("adminpassword123");
            }}
            className="px-2.5 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg shadow transition-colors cursor-pointer text-xs"
          >
            Auto-fill Admin
          </button>
        </div>

        <div className="mb-6 text-center">
          <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">Command Login</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-light">Access the municipal oversight dashboard</p>
        </div>

        {displayError && (
          <div className="bg-red-500/10 border border-red-500/25 text-red-600 dark:text-red-400 p-3 rounded-2xl mb-4 text-xs font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <span>{displayError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1.5">
              Secure Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 text-xs bg-slate-50 dark:bg-gray-950 border border-gray-250 dark:border-gray-800 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Access Token / Password
              </label>
              <a href="#" className="text-[10px] text-emerald-600 dark:text-emerald-450 hover:underline font-bold uppercase">
                Forgot Token?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-4 pr-11 py-2.5 text-xs bg-slate-50 dark:bg-gray-950 border border-gray-250 dark:border-gray-800 rounded-xl text-slate-800 dark:text-white focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer p-1"
                title={showPassword ? "Password is shown (click to hide)" : "Password is hidden (click to show)"}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeIcon className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                ) : (
                  <EyeOffIcon className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                )}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-gray-950 text-xs font-extrabold rounded-xl transition duration-150 shadow-lg shadow-emerald-500/10 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-gray-950 border-t-transparent rounded-full animate-spin"></div>
                  <span>Authorizing...</span>
                </>
              ) : (
                <span>Access Command Dashboard</span>
              )}
            </button>
          </div>
        </form>

        <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-800/80 flex items-center justify-between text-xs">
          <span className="text-gray-500 dark:text-gray-400 font-medium">Looking to report an issue?</span>
          <Link
            to="/login"
            className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 font-bold transition flex items-center gap-1.5"
          >
            <span>🏛️</span> Citizen Portal &rarr;
          </Link>
        </div>
      </div>

      <div className="mt-8 text-center text-[10px] text-gray-450 dark:text-gray-550 font-medium">
        <span>Fix My Ward Authority Management Portal &middot; Coimbatore Corporation</span>
      </div>
    </div>
  );
}
