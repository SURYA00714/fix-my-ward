import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const steps = [
    "Establishing Secure Handshake with Municipal Servers...",
    "Calibrating Ward Geographical Information System (GIS)...",
    "Fetching Active Public Grievance Records...",
    "Synchronizing Municipal Department Workloads...",
    "Civic Network Synchronized. Entering Portal..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            navigate("/landing");
          }, 800);
          return prev;
        }
      });
    }, 900);

    return () => clearInterval(timer);
  }, [navigate, steps.length]);

  const progressPercent = Math.min(100, Math.round(((step + 1) / steps.length) * 100));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-slate-100 p-6 select-none font-serif relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-md w-full text-center">
        {/* Emblem */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="w-24 h-24 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 animate-spin"></div>
          <div className="absolute w-16 h-16 rounded-full border border-teal-500/30 border-b-teal-400 animate-spin-slow"></div>
          <div className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 border border-slate-700 shadow-xl">
            <span className="text-2xl">🏛️</span>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold tracking-wider text-white uppercase mb-1">
          Fix My Ward
        </h1>
        <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-8">
          Tamil Nadu Civic Grievance & Ward Management Network
        </p>

        {/* Dynamic Status Text */}
        <div className="h-10 mb-4 flex items-center justify-center px-4">
          <p className="text-sm font-medium text-slate-300 italic transition-all duration-300">
            {steps[step]}
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900 rounded-full h-2.5 p-0.5 border border-slate-800 shadow-inner mb-3">
          <div 
            className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 h-1.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <div className="flex justify-between w-full text-xs text-slate-400 px-1 font-mono">
          <span>PORTAL READY</span>
          <span>{progressPercent}%</span>
        </div>

        {/* Skip button */}
        <button
          onClick={() => navigate("/landing")}
          className="mt-8 text-xs text-slate-400 hover:text-emerald-400 underline underline-offset-4 transition-colors"
        >
          Skip to Portal Homepage →
        </button>
      </div>
    </div>
  );
}
