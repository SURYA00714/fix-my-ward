import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon, PublicIcon } from "../components/SvgIcon";
import { Spinner } from "../components/LoadingSkeleton";
import { useTheme } from "../hooks/useTheme";
import { apiUrl } from "../config/api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useTheme();

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
    <div 
      className="min-h-screen flex items-center justify-center bg-[#070D1E] text-slate-100 relative overflow-hidden px-4 font-serif"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="bg-[#0E1A38] border-2 border-[#283E70] p-8 sm:p-11 rounded-3xl shadow-2xl w-full max-w-lg z-10 transition duration-300">
        
        {/* Branding Badge */}
        <div className="flex flex-col items-center mb-7">
          <Link to="/" className="w-16 h-16 bg-[#14244B] text-emerald-400 rounded-2xl flex items-center justify-center mb-3.5 border-2 border-emerald-500/40 shadow-lg text-3xl">
            🏛️
          </Link>
          <span className="text-xs uppercase font-bold tracking-[0.2em] text-emerald-400">Fix My Ward</span>
          <h2 className="text-3xl font-bold text-white tracking-tight mt-1.5">Citizen Portal Login</h2>
          <p className="text-slate-300 mt-1 text-sm">Sign in to report and track your neighborhood grievances</p>
        </div>

        {/* Quick Demo Fill Helper */}
        <div className="mb-6 p-3.5 rounded-xl bg-[#14244B] border border-[#283E70] flex items-center justify-between gap-3 text-xs">
          <span className="text-slate-200">
            Evaluating the app? Click to auto-fill:
          </span>
          <button
            type="button"
            onClick={handleFillDemo}
            className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded shadow transition-colors cursor-pointer"
          >
            Fill Demo Citizen
          </button>
        </div>

        {error && (
          <div className="bg-red-500/15 border-2 border-red-500/30 text-red-200 px-4 py-3 rounded-xl mb-6 text-sm text-center font-bold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-200 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="e.g. citizen@fixmyward.gov.in"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-xl bg-[#070D1E] border-2 border-[#283E70] text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all font-serif text-base"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-200 uppercase tracking-wider mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-[#070D1E] border-2 border-[#283E70] text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all font-serif text-base"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-white transition-colors"
                title={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOffIcon className="w-5 h-5" />
                ) : (
                  <EyeIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-bold text-white text-lg transition-all transform hover:-translate-y-0.5 mt-8 flex items-center justify-center gap-2 cursor-pointer ${
              loading 
                ? "bg-emerald-600/50 cursor-not-allowed" 
                : "bg-emerald-600 hover:bg-emerald-500 shadow-xl shadow-emerald-950/60"
            }`}
          >
            {loading && <Spinner className="w-5 h-5 text-white" />}
            {loading ? "Verifying Credentials..." : "Sign In to Citizen Account"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#283E70] flex flex-col items-center gap-3 text-sm">
          <p className="text-slate-300">
            Don't have an account?{" "}
            <Link to="/register" className="text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-4 transition">
              Create an account
            </Link>
          </p>

          <Link to="/admin/login" className="text-amber-300 hover:text-amber-200 font-semibold text-xs transition">
            Municipal Officer? Access Administration Portal →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
