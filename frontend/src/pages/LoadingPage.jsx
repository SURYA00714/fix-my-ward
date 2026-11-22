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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#070D1E] text-slate-100 p-6 select-none font-serif relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-lg w-full text-center">
        {/* Emblem */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="w-28 h-28 rounded-full border-4 border-emerald-500/20 border-t-emerald-400 animate-spin"></div>
          <div className="absolute w-20 h-20 rounded-full border-2 border-teal-500/30 border-b-teal-400 animate-spin-slow"></div>
          <div className="absolute flex items-center justify-center w-14 h-14 rounded-full bg-[#0E1A38] border-2 border-[#283E70] shadow-xl">
            <span className="text-3xl">🏛️</span>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold tracking-wider text-white uppercase mb-2">
          Fix My Ward
        </h1>
        <p className="text-sm uppercase tracking-widest text-emerald-400 font-bold mb-9">
          Tamil Nadu Civic Grievance & Ward Management Network
        </p>

        {/* Dynamic Status Text */}
        <div className="h-12 mb-5 flex items-center justify-center px-4">
          <p className="text-lg font-medium text-slate-200 italic transition-all duration-300">
            {steps[step]}
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full bg-[#0E1A38] rounded-full h-3.5 p-0.5 border-2 border-[#283E70] shadow-inner mb-4">
          <div 
            className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <div className="flex justify-between w-full text-sm text-slate-300 px-1 font-mono font-bold">
          <span>PORTAL READY</span>
          <span>{progressPercent}%</span>
        </div>

        {/* Skip button */}
        <button
          onClick={() => navigate("/landing")}
          className="mt-10 px-6 py-2.5 rounded-lg bg-[#0E1A38] border border-[#283E70] hover:border-emerald-400 text-sm font-bold text-slate-200 hover:text-white transition-all cursor-pointer"
        >
          Skip to Portal Homepage →
        </button>
      </div>
    </div>
  );
}
