import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

export default function Landing() {
  const navigate = useNavigate();
  const [copiedKey, setCopiedKey] = useState(null);
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleReportClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/report");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 relative overflow-hidden">
      {/* Background Decorative Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-emerald-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-[800px] left-[-200px] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-[1600px] right-[-200px] w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Top Demo Credentials Quick-Access Bar */}
      <div className="bg-[#111827]/90 border-b border-slate-800/80 px-4 py-2 text-center text-xs flex flex-wrap items-center justify-center gap-3 relative z-50">
        <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Quick Demo Credentials:
        </span>
        <button
          onClick={() => copyToClipboard("citizen@fixmyward.gov.in | password123", "citizen")}
          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded border border-slate-700 transition-all font-mono"
          title="Click to copy citizen credentials"
        >
          {copiedKey === "citizen" ? "✓ Copied Citizen Login!" : "Citizen: citizen@fixmyward.gov.in (password123)"}
        </button>
        <span className="text-slate-600 hidden sm:inline">•</span>
        <button
          onClick={() => copyToClipboard("admin@fixmyward.gov.in | adminpassword123", "admin")}
          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded border border-slate-700 transition-all font-mono"
          title="Click to copy admin credentials"
        >
          {copiedKey === "admin" ? "✓ Copied Admin Login!" : "Admin: admin@fixmyward.gov.in (adminpassword123)"}
        </button>
      </div>

      {/* Main GovTech Navigation Header */}
      <header className="border-b border-slate-800/60 bg-[#0B0F19]/85 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Civic Branding */}
          <Link to="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0E1526] rounded-[10px] flex items-center justify-center text-xl">
                🏛️
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight text-white block leading-tight">
                Fix My Ward
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-emerald-400 uppercase block">
                Civic Redressal Network
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#how-it-works" className="hover:text-emerald-400 transition-colors">
              How It Works
            </a>
            <a href="#categories" className="hover:text-emerald-400 transition-colors">
              Civic Categories
            </a>
            <a href="#portals" className="hover:text-emerald-400 transition-colors">
              Portals
            </a>
            <Link 
              to={isLoggedIn ? "/map" : "/login"} 
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-cyan-400/90"
            >
              <span>🗺️</span> Ward GIS Map
            </Link>
          </nav>

          {/* Action Header Buttons & Theme Toggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle size="md" />

            {isLoggedIn ? (
              <Link
                to="/dashboard"
                className="px-5 py-2.5 text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
              >
                <span>📊</span> Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-xl font-semibold transition-all"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all"
                >
                  Citizen Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Floating Pill Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold tracking-wide uppercase mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Integrated Municipal Grievance & Infrastructure Redressal
        </div>

        {/* Main Hero Header */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
          Report Civic Issues. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            Track Real-Time Resolution.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          A high-transparency platform connecting residents with municipal administration. Report potholes, water leaks, uncollected garbage, and broken streetlights with verified GPS precision.
        </p>

        {/* Action Buttons Group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-xl mx-auto">
          <button
            onClick={handleReportClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>📢</span> Report an Issue Now
          </button>
          <Link
            to={isLoggedIn ? "/map" : "/login"}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-100 hover:text-white font-semibold text-base transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2.5"
          >
            <span>📍</span> Explore Ward Map
          </Link>
          <Link
            to="/admin/login"
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-amber-500/30 hover:border-amber-400 text-amber-300 font-semibold text-base transition-all text-center flex items-center justify-center gap-2"
          >
            <span>🛡️</span> Admin Portal
          </Link>
        </div>

        {/* High-Impact Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          <div className="p-6 rounded-2xl bg-[#111827]/60 border border-slate-800 backdrop-blur-md hover:border-slate-700 transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono block">100%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1 block">Ward Coverage</span>
            <span className="text-xs text-slate-400 mt-0.5 block">Full municipal boundary scope</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#111827]/60 border border-slate-800 backdrop-blur-md hover:border-slate-700 transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono block">GPS</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1 block">Geo-Tagged Accuracy</span>
            <span className="text-xs text-slate-400 mt-0.5 block">Precise street-level coordinates</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#111827]/60 border border-slate-800 backdrop-blur-md hover:border-slate-700 transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono block">24-48h</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1 block">Department Dispatch</span>
            <span className="text-xs text-slate-400 mt-0.5 block">Direct field squad routing</span>
          </div>

          <div className="p-6 rounded-2xl bg-[#111827]/60 border border-slate-800 backdrop-blur-md hover:border-slate-700 transition-all">
            <span className="text-3xl sm:text-4xl font-extrabold text-teal-300 font-mono block">Audited</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-200 mt-1 block">Lifecycle Transparency</span>
            <span className="text-xs text-slate-400 mt-0.5 block">Citizen-verified resolution</span>
          </div>
        </div>
      </section>

      {/* 4-Step Resolution Pipeline Section */}
      <section id="how-it-works" className="py-20 bg-[#0E1526]/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2 block">
              Standard Operating Procedure
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              From Citizen Report to Field Resolution
            </h2>
            <p className="text-slate-400 text-base mt-3">
              A transparent 4-stage pipeline that eliminates bureaucratic friction and ensures accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#111827]/70 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center mb-4">
                  01
                </div>
                <h3 className="text-lg font-bold text-white mb-2">1. Snap & Geotag</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Citizen snaps a photo of the defect, selects the category, and the portal tags the exact GPS coordinates automatically.
                </p>
              </div>
              <button
                onClick={handleReportClick}
                className="mt-6 text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-left cursor-pointer"
              >
                Submit Report →
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[#111827]/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold flex items-center justify-center mb-4">
                  02
                </div>
                <h3 className="text-lg font-bold text-white mb-2">2. GIS Ward Mapping</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  The issue appears publicly on the Ward GIS Map. Neighborhood residents can upvote to highlight urgent hazards.
                </p>
              </div>
              <Link
                to={isLoggedIn ? "/map" : "/login"}
                className="mt-6 text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                View Map Layer →
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#111827]/70 border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold flex items-center justify-center mb-4">
                  03
                </div>
                <h3 className="text-lg font-bold text-white mb-2">3. Admin Dispatch</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Municipal Officers verify photographic proof, assign severity levels, and route work orders to the responsible department.
                </p>
              </div>
              <Link
                to="/admin/login"
                className="mt-6 text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                Admin Verification →
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-[#111827]/70 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center mb-4">
                  04
                </div>
                <h3 className="text-lg font-bold text-white mb-2">4. Resolution & Audit</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Field repair teams address the defect. Completion evidence is published with status marked Resolved for public audit.
                </p>
              </div>
              <Link
                to={isLoggedIn ? "/public-reports" : "/login"}
                className="mt-6 text-xs font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                Audit Public Feed →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Civic Categories Grid */}
      <section id="categories" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2 block">
            Comprehensive Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Supported Municipal Infrastructure Categories
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Covering all essential civic services across urban and suburban local bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#111827]/60 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
            <div className="text-3xl p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">🛣️</div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Roads & Footpaths</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Potholes, surface erosion, damaged speed breakers, missing manholes, and blocked sidewalks.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#111827]/60 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
            <div className="text-3xl p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">🚰</div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Water Supply</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Burst pipelines, potable water wastage, contaminated supply, and valve control failures.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#111827]/60 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
            <div className="text-3xl p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">🗑️</div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Sanitation & Garbage</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Overflowing dumpsters, skipped door-to-door collection, and hazardous waste accumulation.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#111827]/60 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
            <div className="text-3xl p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">💡</div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Electricity & Streetlights</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Non-functional streetlights, dark accident-prone zones, low-hanging cables, and rusted poles.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#111827]/60 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
            <div className="text-3xl p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">🌊</div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Stormwater Drains</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Clogged drainage trenches, missing concrete slabs, monsoon flood spots, and culvert blockages.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#111827]/60 border border-slate-800 hover:border-slate-700 transition-all flex items-start gap-4">
            <div className="text-3xl p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">🌳</div>
            <div>
              <h3 className="text-base font-bold text-white mb-1">Public Amenities</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Dangerous tree limbs obstructing traffic, park bench damages, and public sanitation blockages.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Portals Section */}
      <section id="portals" className="py-20 bg-[#0E1526]/50 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2 block">
              Authentication Gateways
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Access Your Operating Portal
            </h2>
            <p className="text-slate-400 text-base mt-3">
              Dedicated interfaces tailored for residents to report complaints, and municipal officers to dispatch work orders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Citizen Portal Card */}
            <div className="p-8 rounded-3xl bg-[#111827]/80 border border-emerald-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/20">
                  Citizen Portal
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">For Residents & Neighborhoods</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Submit grievances from your phone or PC, view nearby issues submitted by fellow residents, and upvote to accelerate action.
                </p>
                <div className="space-y-2.5 mb-8 text-sm text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span> Photo upload & automated GPS coordinates
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span> Real-time ticket lifecycle tracking dashboard
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span> Community upvote system for urgent civic hazards
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-6 text-xs">
                  <span className="text-slate-400 block mb-0.5 font-semibold">Pre-seeded Citizen Account:</span>
                  <span className="font-mono text-emerald-300">citizen@fixmyward.gov.in</span> • <span className="font-mono text-slate-300">password123</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/login"
                  className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-center rounded-xl text-sm transition-all shadow-md shadow-emerald-500/20"
                >
                  Citizen Login
                </Link>
                <Link
                  to="/register"
                  className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-center rounded-xl text-sm transition-all border border-slate-700 font-semibold"
                >
                  Create Account
                </Link>
              </div>
            </div>

            {/* Admin Command Portal Card */}
            <div className="p-8 rounded-3xl bg-[#111827]/80 border border-amber-500/30 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/5 rounded-full blur-2xl pointer-events-none"></div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-500/20">
                  Administrative Command
                </span>
                <h3 className="text-2xl font-bold text-white mb-3">For Municipal Officers & Engineers</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Authoritative interface for ward superintendents. Inspect photographic evidence, assign priority levels, and route tickets to specialized field squads.
                </p>
                <div className="space-y-2.5 mb-8 text-sm text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span> Ward-by-ward workload analysis & analytics dashboard
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span> Priority adjustment & department routing (Roads, Water, Waste)
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span> Live inspection monitor & citizen directory management
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 mb-6 text-xs">
                  <span className="text-slate-400 block mb-0.5 font-semibold">Pre-seeded Admin Account:</span>
                  <span className="font-mono text-amber-300">admin@fixmyward.gov.in</span> • <span className="font-mono text-slate-300">adminpassword123</span>
                </div>
              </div>

              <div>
                <Link
                  to="/admin/login"
                  className="block w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-center rounded-xl text-sm transition-all shadow-md shadow-amber-500/20"
                >
                  Access Administration Command →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#080C14] border-t border-slate-800/80 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏛️</span>
            <div>
              <p className="font-bold text-white text-sm">Fix My Ward</p>
              <p className="text-slate-400">Integrated Civic Grievance & Infrastructure Redressal System</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-semibold text-slate-300">
            <Link to={isLoggedIn ? "/map" : "/login"} className="hover:text-emerald-400 transition-colors">
              Ward GIS Map
            </Link>
            <Link to="/login" className="hover:text-emerald-400 transition-colors">
              Citizen Portal
            </Link>
            <Link to="/admin/login" className="hover:text-amber-400 transition-colors">
              Admin Command
            </Link>
            <Link to="/loading" className="hover:text-cyan-400 transition-colors">
              Diagnostics
            </Link>
          </div>

          <div className="text-slate-400 text-center md:text-right font-mono">
            GovTech Modern Edition
          </div>
        </div>
      </footer>
    </div>
  );
}
