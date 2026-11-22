import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const [copiedKey, setCopiedKey] = useState(null);
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const copyToClipboard = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleReportClick = (e) => {
    if (!isLoggedIn) {
      // Direct gracefully to login with prompt
      navigate("/login");
    } else {
      navigate("/report");
    }
  };

  return (
    <div className="min-h-screen bg-[#070D1E] text-slate-100 font-serif selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Municipal Notification Banner for Instant Testing Credentials */}
      <div className="bg-[#0E1A38] border-b border-[#283E70] px-4 py-2.5 text-center text-sm font-sans flex flex-wrap items-center justify-center gap-3">
        <span className="font-semibold text-amber-300 flex items-center gap-1.5 text-sm">
          <span>🔑</span> Pre-seeded Demo Logins:
        </span>
        <button
          onClick={() => copyToClipboard("citizen@fixmyward.gov.in | password123", "citizen")}
          className="px-3 py-1 bg-[#14244B] hover:bg-[#1E3A8A] text-slate-200 text-xs rounded border border-[#283E70] transition-colors"
          title="Click to copy citizen credentials"
        >
          {copiedKey === "citizen" ? "✓ Copied Citizen!" : "Citizen: citizen@fixmyward.gov.in (password123)"}
        </button>
        <span className="text-slate-600 hidden sm:inline">|</span>
        <button
          onClick={() => copyToClipboard("admin@fixmyward.gov.in | adminpassword123", "admin")}
          className="px-3 py-1 bg-[#14244B] hover:bg-[#1E3A8A] text-amber-300 text-xs rounded border border-[#283E70] transition-colors"
          title="Click to copy admin credentials"
        >
          {copiedKey === "admin" ? "✓ Copied Admin!" : "Admin: admin@fixmyward.gov.in (adminpassword123)"}
        </button>
      </div>

      {/* Main Navigation Bar */}
      <header className="border-b border-[#283E70] bg-[#070D1E]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          {/* Logo & Civic Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-[#0E1A38] border-2 border-emerald-500/50 flex items-center justify-center text-2xl shadow-lg shadow-emerald-950/40 group-hover:border-emerald-400 transition-all">
              🏛️
            </div>
            <div>
              <span className="text-2xl font-bold tracking-wider text-white uppercase block leading-tight">
                Fix My Ward
              </span>
              <span className="text-xs tracking-widest text-emerald-400 uppercase font-bold block">
                Civic Grievance & Ward Management Network
              </span>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-bold text-slate-200">
            <a href="#workflow" className="hover:text-emerald-400 transition-colors">
              How It Works
            </a>
            <a href="#categories" className="hover:text-emerald-400 transition-colors">
              Civic Categories
            </a>
            <a href="#portals" className="hover:text-emerald-400 transition-colors">
              Portals & Access
            </a>
            <Link 
              to={isLoggedIn ? "/map" : "/login"} 
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <span>🗺️</span> Ward GIS Map
            </Link>
          </nav>

          {/* Action Header Buttons */}
          <div className="flex items-center gap-3.5">
            {isLoggedIn ? (
              <Link
                to="/dashboard"
                className="px-5 py-2.5 text-base bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-md transition-all flex items-center gap-2"
              >
                <span>📊</span> Go to Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-5 py-2.5 text-base text-slate-100 hover:text-white bg-[#0E1A38] hover:bg-[#14244B] border-2 border-[#283E70] hover:border-slate-400 rounded-lg font-bold transition-all"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-5 py-2.5 text-base bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow-lg shadow-emerald-950/50 hover:shadow-emerald-800/60 transition-all"
                >
                  Citizen Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden border-b border-[#283E70]">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E1A38] border-2 border-emerald-500/40 text-emerald-300 text-sm font-bold uppercase tracking-wider mb-8 shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Official Ward Grievance Resolution & Operations Platform
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
            Report Civic Defects. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Track Municipal Resolution.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
            A high-transparency platform connecting citizens directly with municipal operations. Report road potholes, water leaks, broken streetlights, and garbage dumps with real-time GPS mapping and verifiable progress tracking.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <button
              onClick={handleReportClick}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-lg shadow-xl shadow-emerald-950/60 transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-3 cursor-pointer"
            >
              <span className="text-2xl">📢</span> Report an Issue Now
            </button>
            <Link
              to={isLoggedIn ? "/map" : "/login"}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#0E1A38] border-2 border-[#283E70] hover:border-cyan-400 text-slate-100 hover:text-white font-bold text-lg transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-3 shadow-lg"
            >
              <span className="text-2xl">📍</span> View Ward GIS Map
            </Link>
            <Link
              to="/admin/login"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#0E1A38] border-2 border-amber-500/50 hover:border-amber-400 text-amber-300 hover:bg-amber-950/40 font-bold text-lg transition-all text-center flex items-center justify-center gap-3 shadow-lg"
            >
              <span className="text-2xl">🛡️</span> Admin Portal
            </Link>
          </div>

          {/* Key Metric Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-[#0E1A38]/90 border-2 border-[#283E70] text-left shadow-2xl">
            <div className="border-r border-[#283E70] pr-4">
              <span className="text-3xl md:text-5xl font-black text-emerald-400 block font-mono">100%</span>
              <span className="text-sm text-slate-200 font-bold uppercase tracking-wider mt-1 block">Ward Coverage</span>
              <span className="text-xs text-slate-400 mt-0.5 block">All municipal zones connected</span>
            </div>
            <div className="md:border-r border-[#283E70] pr-4">
              <span className="text-3xl md:text-5xl font-black text-cyan-400 block font-mono">GPS</span>
              <span className="text-sm text-slate-200 font-bold uppercase tracking-wider mt-1 block">Geo-Tagged Accuracy</span>
              <span className="text-xs text-slate-400 mt-0.5 block">Exact coordinates on map</span>
            </div>
            <div className="border-r border-[#283E70] pr-4">
              <span className="text-3xl md:text-5xl font-black text-amber-400 block font-mono">24-48h</span>
              <span className="text-sm text-slate-200 font-bold uppercase tracking-wider mt-1 block">Routing Dispatch</span>
              <span className="text-xs text-slate-400 mt-0.5 block">Automated department alerts</span>
            </div>
            <div>
              <span className="text-3xl md:text-5xl font-black text-emerald-400 block font-mono">Public</span>
              <span className="text-sm text-slate-200 font-bold uppercase tracking-wider mt-1 block">Auditable Lifecycle</span>
              <span className="text-xs text-slate-400 mt-0.5 block">Transparent status stages</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Structured Workflow Section */}
      <section id="workflow" className="py-24 bg-[#070D1E] border-b border-[#283E70]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-3">
              Standard Operating Procedure
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              From Citizen Report to Field Resolution
            </h3>
            <p className="text-slate-200 text-lg mt-4 leading-relaxed">
              Every civic complaint follows a rigorous 4-step governance cycle to eliminate delays, prevent duplicate requests, and ensure verifiable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-7 rounded-2xl bg-[#0E1A38] border-2 border-[#283E70] hover:border-emerald-500/60 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#14244B] border-2 border-emerald-500/50 text-emerald-300 font-mono font-black text-lg flex items-center justify-center mb-5">
                  01
                </div>
                <h4 className="text-xl font-bold text-white mb-2">1. Incident Capture</h4>
                <p className="text-base text-slate-300 leading-relaxed">
                  Citizen snaps a photo of the defect, assigns category (Roads, Water, Waste), and captures GPS location automatically.
                </p>
              </div>
              <button 
                onClick={handleReportClick}
                className="mt-6 text-sm font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 text-left"
              >
                Submit a Report →
              </button>
            </div>

            {/* Step 2 */}
            <div className="p-7 rounded-2xl bg-[#0E1A38] border-2 border-[#283E70] hover:border-cyan-500/60 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#14244B] border-2 border-cyan-500/50 text-cyan-300 font-mono font-black text-lg flex items-center justify-center mb-5">
                  02
                </div>
                <h4 className="text-xl font-bold text-white mb-2">2. GIS Mapping</h4>
                <p className="text-base text-slate-300 leading-relaxed">
                  The issue is plotted live on the Ward GIS Map. Fellow residents can upvote the issue to prioritize community urgency.
                </p>
              </div>
              <Link 
                to={isLoggedIn ? "/map" : "/login"}
                className="mt-6 text-sm font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                View Map Layer →
              </Link>
            </div>

            {/* Step 3 */}
            <div className="p-7 rounded-2xl bg-[#0E1A38] border-2 border-[#283E70] hover:border-amber-500/60 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#14244B] border-2 border-amber-500/50 text-amber-300 font-mono font-black text-lg flex items-center justify-center mb-5">
                  03
                </div>
                <h4 className="text-xl font-bold text-white mb-2">3. Admin Routing</h4>
                <p className="text-base text-slate-300 leading-relaxed">
                  Municipal Officers review evidence, assign severity (Critical to Low), and route the work order to the relevant department.
                </p>
              </div>
              <Link 
                to="/admin/login"
                className="mt-6 text-sm font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
              >
                Admin Verification →
              </Link>
            </div>

            {/* Step 4 */}
            <div className="p-7 rounded-2xl bg-[#0E1A38] border-2 border-[#283E70] hover:border-emerald-500/60 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#14244B] border-2 border-emerald-500/50 text-emerald-300 font-mono font-black text-lg flex items-center justify-center mb-5">
                  04
                </div>
                <h4 className="text-xl font-bold text-white mb-2">4. Resolution Audit</h4>
                <p className="text-base text-slate-300 leading-relaxed">
                  Field repair teams resolve the physical defect. Status is logged as Resolved with public verification for complete auditability.
                </p>
              </div>
              <Link 
                to={isLoggedIn ? "/public-reports" : "/login"}
                className="mt-6 text-sm font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
              >
                Audit Public Feed →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Civic Categories Grid */}
      <section id="categories" className="py-24 bg-[#0A1128] border-b border-[#283E70]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-3">
              Comprehensive Civic Coverage
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Supported Municipal Infrastructure Categories
            </h3>
            <p className="text-slate-200 text-lg mt-4 leading-relaxed">
              Fix My Ward covers all primary civic pain points across urban and suburban local bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#0E1A38] border-2 border-[#283E70] flex items-start gap-5 shadow-lg">
              <div className="text-4xl p-3 rounded-xl bg-[#14244B] border border-[#283E70]">🛣️</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1.5">Roads & Footpaths</h4>
                <p className="text-base text-slate-300">Potholes, surface erosion, damaged speed breakers, missing manhole covers, and blocked sidewalks.</p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#0E1A38] border-2 border-[#283E70] flex items-start gap-5 shadow-lg">
              <div className="text-4xl p-3 rounded-xl bg-[#14244B] border border-[#283E70]">🚰</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1.5">Water Supply</h4>
                <p className="text-base text-slate-300">Burst pipelines, potable water wastage, contaminated drinking water, and low distribution pressure.</p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#0E1A38] border-2 border-[#283E70] flex items-start gap-5 shadow-lg">
              <div className="text-4xl p-3 rounded-xl bg-[#14244B] border border-[#283E70]">🗑️</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1.5">Sanitation & Garbage</h4>
                <p className="text-base text-slate-300">Overflowing community dumpsters, skipped door-to-door collection, and hazardous waste accumulation.</p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#0E1A38] border-2 border-[#283E70] flex items-start gap-5 shadow-lg">
              <div className="text-4xl p-3 rounded-xl bg-[#14244B] border border-[#283E70]">💡</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1.5">Electricity & Lights</h4>
                <p className="text-base text-slate-300">Dark zones with non-working streetlights, hazardous low-hanging power cables, and damaged fuse boxes.</p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#0E1A38] border-2 border-[#283E70] flex items-start gap-5 shadow-lg">
              <div className="text-4xl p-3 rounded-xl bg-[#14244B] border border-[#283E70]">🌊</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1.5">Stormwater Drains</h4>
                <p className="text-base text-slate-300">Clogged drain channels, missing concrete slabs, rainwater flooding, and mosquito breeding spots.</p>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#0E1A38] border-2 border-[#283E70] flex items-start gap-5 shadow-lg">
              <div className="text-4xl p-3 rounded-xl bg-[#14244B] border border-[#283E70]">🌳</div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1.5">Public Amenities</h4>
                <p className="text-base text-slate-300">Fallen tree branches blocking traffic, damaged public park benches, and community sanitary block defects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Operating Portals Section */}
      <section id="portals" className="py-24 bg-[#070D1E] border-b border-[#283E70]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-3">
              Role-Based Portals
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Select Your Operating Portal
            </h3>
            <p className="text-slate-200 text-lg mt-4 leading-relaxed">
              Dedicated interfaces tailored for residents to report issues, and municipal officers to coordinate operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Citizen Portal Card */}
            <div className="p-9 rounded-2xl bg-[#0E1A38] border-2 border-emerald-500/50 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
                  Citizen Reporting Portal
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">For Residents & Neighborhoods</h4>
                <p className="text-slate-200 text-lg mb-6 leading-relaxed">
                  Submit grievances directly from your phone or PC, view nearby issues submitted by fellow residents, and upvote to accelerate action.
                </p>
                <div className="space-y-3 mb-8 text-base text-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 text-xl font-bold">✓</span> Photo upload & auto GPS geolocation tagging
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 text-xl font-bold">✓</span> Real-time ticket lifecycle tracking dashboard
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 text-xl font-bold">✓</span> Community upvote system to highlight critical issues
                  </div>
                </div>

                {/* Pre-seeded demo box */}
                <div className="p-4 rounded-xl bg-[#14244B] border border-[#283E70] mb-8 text-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Pre-seeded Citizen Account
                  </span>
                  <div className="text-slate-200 font-mono text-xs">
                    Email: <span className="text-white font-bold">citizen@fixmyward.gov.in</span> | Pass: <span className="text-white font-bold">password123</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/login"
                  className="flex-1 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center rounded-xl text-lg transition-colors shadow-lg"
                >
                  Citizen Login
                </Link>
                <Link
                  to="/register"
                  className="flex-1 py-4 bg-[#14244B] hover:bg-[#1E3A8A] text-slate-100 hover:text-white text-center rounded-xl text-lg transition-colors border-2 border-[#283E70]"
                >
                  Create Account
                </Link>
              </div>
            </div>

            {/* Administration Portal Card */}
            <div className="p-9 rounded-2xl bg-[#0E1A38] border-2 border-amber-500/50 flex flex-col justify-between shadow-2xl">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-amber-950 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5">
                  Administrative Command
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">For Municipal Officers & Engineers</h4>
                <p className="text-slate-200 text-lg mb-6 leading-relaxed">
                  Authoritative interface for ward superintendents. Inspect photographic evidence, assign priority levels, and route tickets to specialized field squads.
                </p>
                <div className="space-y-3 mb-8 text-base text-slate-200">
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 text-xl font-bold">✓</span> Ward-by-ward workload analysis & analytics dashboard
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 text-xl font-bold">✓</span> Priority adjustment & department routing (Roads, Water, Waste)
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber-400 text-xl font-bold">✓</span> Live inspection monitor & citizen directory management
                  </div>
                </div>

                {/* Pre-seeded demo box */}
                <div className="p-4 rounded-xl bg-[#14244B] border border-[#283E70] mb-8 text-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Pre-seeded Administrator Account
                  </span>
                  <div className="text-slate-200 font-mono text-xs">
                    Email: <span className="text-white font-bold">admin@fixmyward.gov.in</span> | Pass: <span className="text-white font-bold">adminpassword123</span>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  to="/admin/login"
                  className="block w-full py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-center rounded-xl text-lg transition-colors shadow-lg"
                >
                  Access Administration Command →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Municipal Footer */}
      <footer className="py-14 bg-[#050914] text-slate-300 text-base border-t border-[#283E70]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🏛️</span>
            <div>
              <p className="font-bold text-white text-lg uppercase leading-none">Fix My Ward</p>
              <p className="text-slate-400 text-sm mt-1">Tamil Nadu Municipal Grievance Redressal & Operations Network</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-7 text-sm font-bold text-slate-200">
            <Link to={isLoggedIn ? "/map" : "/login"} className="hover:text-emerald-400 transition-colors">
              GIS Map
            </Link>
            <Link to="/login" className="hover:text-emerald-400 transition-colors">
              Citizen Portal
            </Link>
            <Link to="/admin/login" className="hover:text-amber-400 transition-colors">
              Admin Command
            </Link>
            <Link to="/loading" className="hover:text-cyan-400 transition-colors">
              System Diagnostics
            </Link>
          </div>

          <div className="text-slate-400 text-center md:text-right text-xs font-mono">
            Times New Roman • High-Visibility Civic Design
          </div>
        </div>
      </footer>
    </div>
  );
}
