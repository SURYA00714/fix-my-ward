import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "../components/SvgIcon";
import { Spinner } from "../components/LoadingSkeleton";
import { apiUrl } from "../config/api";
import ThemeToggle from "../components/ThemeToggle";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Handle Returning User Flow (detect existing session)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFillDemo = () => {
    setForm({
      email: "citizen@fixmyward.gov.in",
      password: "password123",
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const loginUrl = apiUrl("/api/auth/login");
      const { data } = await axios.post(loginUrl, form);

      // 💾 Store token and role
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("name", data.name || "");
      localStorage.setItem("email", data.email || "");

      // 🔁 Redirect
      navigate("/dashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials or API connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-slate-100 relative overflow-hidden px-4 font-sans">
      {/* Top navigation helpers */}
      <div className="fixed top-6 left-6 z-50">
        <Link 
          to="/" 
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition shadow-sm"
        >
          <span>&larr;</span> Back to Home
        </Link>
      </div>

      {/* Top right theme toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle size="md" />
      </div>
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="bg-[#111827]/90 backdrop-blur-xl border border-slate-800 p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md z-10 transition duration-300">
        
        {/* Branding Badge */}
        <div className="flex flex-col items-center mb-5">
          <Link to="/" className="w-14 h-14 bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 rounded-2xl flex items-center justify-center mb-3 shadow-lg shadow-emerald-500/20">
            <div className="w-full h-full bg-[#0E1526] rounded-[14px] flex items-center justify-center text-2xl">
              🏛️
            </div>
          </Link>
          <span className="text-[11px] uppercase font-bold tracking-widest text-emerald-400">Fix My Ward</span>
          <h2 className="text-2xl font-extrabold text-white tracking-tight mt-1">Citizen Portal Login</h2>
          <p className="text-slate-400 mt-1 text-xs text-center">Sign in to report and track your neighborhood civic grievances</p>
        </div>

        {/* Quick Portal Switcher Tabs */}
        <div className="flex rounded-2xl bg-[#0B0F19] p-1 mb-5 border border-slate-800/80">
          <div className="flex-1 py-2 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 bg-emerald-500 text-slate-950 shadow-sm cursor-default">
            <span>🏛️</span> Citizen Portal
          </div>
          <Link
            to="/admin/login"
            className="flex-1 py-2 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 text-slate-400 hover:text-amber-300 hover:bg-slate-800/50 transition-all"
            title="Switch to Municipal Officer Login"
          >
            <span>🛡️</span> Admin Portal &rarr;
          </Link>
        </div>

        {/* Quick Demo Fill Helper */}
        <div className="mb-5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-2.5 text-xs">
          <span className="text-slate-300">
            Testing account?
          </span>
          <button
            type="button"
            onClick={handleFillDemo}
            className="px-2.5 py-1 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-lg shadow transition-colors cursor-pointer text-xs"
          >
            Auto-fill Demo Citizen
          </button>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-2.5 rounded-xl mb-5 text-xs text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g. citizen@fixmyward.gov.in"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#0B0F19] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-4 pr-11 py-3 rounded-xl bg-[#0B0F19] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-sm font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer p-1"
                title={showPassword ? "Password is shown (click to hide)" : "Password is hidden (click to show)"}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeIcon className="w-5 h-5 text-emerald-400" />
                ) : (
                  <EyeOffIcon className="w-5 h-5 text-slate-400" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3.5 rounded-xl font-bold text-slate-950 text-base transition-all transform hover:-translate-y-0.5 mt-6 flex items-center justify-center gap-2 cursor-pointer ${
              loading 
                ? "bg-emerald-500/50 cursor-not-allowed" 
                : "bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25"
            }`}
          >
            {loading && <Spinner className="w-4 h-4 text-slate-950" />}
            {loading ? "Verifying Credentials..." : "Sign In to Account"}
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col gap-3 text-xs">
          <p className="text-slate-400 text-center">
            Don't have an account?{" "}
            <Link to="/register" className="text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-4 transition">
              Create citizen account
            </Link>
          </p>

          <div className="pt-2 flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-slate-400 font-medium">Municipal Officer?</span>
            <Link 
              to="/admin/login" 
              className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/25 font-bold transition flex items-center gap-1.5"
            >
              <span>🛡️</span> Access Admin Portal &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
