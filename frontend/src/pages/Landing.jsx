import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-serif selection:bg-emerald-500 selection:text-slate-950">
      {/* Top Municipal Navigation Bar */}
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-xl shadow-md">
              🏛️
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-white uppercase block leading-none">
                Fix My Ward
              </span>
              <span className="text-[10px] tracking-widest text-emerald-400 uppercase font-semibold">
                Civic Grievance Redressal Portal
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#workflow" className="hover:text-emerald-400 transition-colors">
              Workflow
            </a>
            <a href="#categories" className="hover:text-emerald-400 transition-colors">
              Civic Categories
            </a>
            <a href="#portals" className="hover:text-emerald-400 transition-colors">
              Access Portals
            </a>
            <Link to="/map" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
              <span>🗺️</span> Ward GIS Map
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 rounded-lg transition-all"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-sm bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-sm hover:shadow-emerald-500/20 transition-all"
            >
              Citizen Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden border-b border-slate-900">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Integrated Municipal Operations & Resident Reporting
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Empowering Citizens. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Transforming Local Wards.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            A centralized civic infrastructure reporting system. Capture road defects, water supply breakdowns, garbage overflow, and streetlight outages with GPS precision, and track administrative resolution in real time.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/report"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-lg shadow-emerald-900/30 transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
            >
              <span>📢</span> Report a Civic Issue
            </Link>
            <Link
              to="/map"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-base transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
            >
              <span>📍</span> Explore Ward GIS Map
            </Link>
            <Link
              to="/admin/login"
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-slate-950/80 border border-amber-500/40 text-amber-300 hover:bg-amber-950/40 font-semibold text-base transition-all text-center flex items-center justify-center gap-2"
            >
              <span>🛡️</span> Admin Portal
            </Link>
          </div>

          {/* Key Metric Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-xl bg-slate-900/70 border border-slate-800 text-left">
            <div className="border-r border-slate-800/80 pr-4">
              <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 block font-mono">100%</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Ward Coverage</span>
            </div>
            <div className="md:border-r border-slate-800/80 pr-4">
              <span className="text-2xl md:text-3xl font-extrabold text-cyan-400 block font-mono">GPS</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Geo-Tagged Accuracy</span>
            </div>
            <div className="border-r border-slate-800/80 pr-4">
              <span className="text-2xl md:text-3xl font-extrabold text-amber-400 block font-mono">Multi-Dept</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Automatic Routing</span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 block font-mono">Auditable</span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">Lifecycle Tracking</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Structured Workflow Section */}
      <section id="workflow" className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              Structured Grievance Lifecycle
            </h2>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              From Citizen Report to Field Resolution
            </h3>
            <p className="text-slate-400 text-sm mt-3">
              Every issue progresses through a transparent 4-stage pipeline governed by ward administrators and municipal field engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 relative">
              <div className="w-10 h-10 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-mono font-bold flex items-center justify-center mb-4">
                01
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Citizen Submission</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Resident uploads photograph, assigns category, adds description, and tags exact GPS location on the interactive map.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 relative">
              <div className="w-10 h-10 rounded-lg bg-teal-950 border border-teal-500/40 text-teal-300 font-mono font-bold flex items-center justify-center mb-4">
                02
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Ward GIS Pinning</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                The report appears publicly on the Ward GIS Map, enabling neighborhood upvoting and preventing duplicate submissions.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 relative">
              <div className="w-10 h-10 rounded-lg bg-amber-950 border border-amber-500/40 text-amber-300 font-mono font-bold flex items-center justify-center mb-4">
                03
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Admin Routing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Municipal officers inspect evidence, assign priority (Critical, High, Medium, Low), and route to the responsible department.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 relative">
              <div className="w-10 h-10 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono font-bold flex items-center justify-center mb-4">
                04
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Action & Audit</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Field teams resolve the physical defect. Resolution proof is recorded, updating status to Resolved with public visibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Civic Categories Grid */}
      <section id="categories" className="py-20 bg-slate-900/30 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              Comprehensive Civic Scope
            </h2>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Supported Municipal Infrastructure Categories
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
              <div className="text-3xl p-2 rounded-lg bg-slate-800">🛣️</div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Roads & Footpaths</h4>
                <p className="text-xs text-slate-400">Potholes, surface erosion, damaged speed breakers, and obstructed sidewalks.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
              <div className="text-3xl p-2 rounded-lg bg-slate-800">🚰</div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Water Supply</h4>
                <p className="text-xs text-slate-400">Pipeline leakage, low pressure, contamination, and damaged valve controls.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
              <div className="text-3xl p-2 rounded-lg bg-slate-800">🗑️</div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Sanitation & Garbage</h4>
                <p className="text-xs text-slate-400">Overflowing community bins, uncollected waste, and illegal debris dumping.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
              <div className="text-3xl p-2 rounded-lg bg-slate-800">💡</div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Electricity & Lights</h4>
                <p className="text-xs text-slate-400">Non-functional streetlights, exposed wiring, and leaning utility poles.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
              <div className="text-3xl p-2 rounded-lg bg-slate-800">🌊</div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Stormwater Drains</h4>
                <p className="text-xs text-slate-400">Clogged culverts, missing drain concrete slabs, and flood risk channels.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
              <div className="text-3xl p-2 rounded-lg bg-slate-800">🌳</div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Public Amenities</h4>
                <p className="text-xs text-slate-400">Park maintenance, dangerous tree branches, and public sanitation blocks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Portal Section */}
      <section id="portals" className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
              Role-Based Authentication
            </h2>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Access Your Operating Portal
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Citizen Portal Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/30 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase mb-4">
                  For Residents & Community
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Citizen Reporting Portal</h4>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Report grievances from your smartphone or PC. Track status updates, upvote neighborhood complaints, and earn civic engagement contributor badges.
                </p>
                <ul className="text-xs text-slate-400 space-y-2 mb-8">
                  <li className="flex items-center gap-2">✓ Photo evidence upload and automatic GPS coordinates</li>
                  <li className="flex items-center gap-2">✓ Personal dashboard to follow ticket resolution progress</li>
                  <li className="flex items-center gap-2">✓ Community upvote mechanism for urgent civic hazards</li>
                </ul>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/login"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-center rounded-lg text-sm transition-colors"
                >
                  Citizen Login
                </Link>
                <Link
                  to="/register"
                  className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-center rounded-lg text-sm transition-colors border border-slate-700"
                >
                  Create Account
                </Link>
              </div>
            </div>

            {/* Admin Portal Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase mb-4">
                  For Municipal Officers
                </div>
                <h4 className="text-2xl font-bold text-white mb-3">Administration Command</h4>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Authorized dashboard for ward engineers and administrative officers. Verify incoming reports, set severity priorities, and dispatch to field departments.
                </p>
                <ul className="text-xs text-slate-400 space-y-2 mb-8">
                  <li className="flex items-center gap-2">✓ Ward-by-ward GIS heatmap and workload analytics</li>
                  <li className="flex items-center gap-2">✓ Department routing (Roads, Water, Sanitation, Electrical)</li>
                  <li className="flex items-center gap-2">✓ Status lifecycle management (Pending, In Progress, Resolved)</li>
                </ul>
              </div>
              <div>
                <Link
                  to="/admin/login"
                  className="block w-full py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-center rounded-lg text-sm transition-colors"
                >
                  Access Administration Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">🏛️</span>
            <div>
              <p className="font-bold text-white text-sm uppercase">Fix My Ward</p>
              <p className="text-slate-400">Integrated Civic Grievance & Infrastructure Redressal System</p>
            </div>
          </div>

          <div className="flex gap-6">
            <Link to="/map" className="hover:text-emerald-400 transition-colors">GIS Map</Link>
            <Link to="/login" className="hover:text-emerald-400 transition-colors">Citizen Portal</Link>
            <Link to="/admin/login" className="hover:text-amber-400 transition-colors">Admin Command</Link>
            <Link to="/loading" className="hover:text-teal-400 transition-colors">Diagnostics</Link>
          </div>

          <div className="text-slate-400 text-center sm:text-right font-mono">
            Times New Roman • UI/UX Pro Max Edition
          </div>
        </div>
      </footer>
    </div>
  );
}
