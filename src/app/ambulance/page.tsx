"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { 
  Activity, 
  Truck, 
  MapPin, 
  Navigation, 
  Signal, 
  Wifi, 
  LogOut,
  AlertCircle,
  Clock,
  Heart,
  Wind,
  ArrowRight
} from "lucide-react";
import React from "react";

// Dynamic import for Leaflet map to avoid SSR errors
const MapView = dynamic(() => import("@/components/MapView"), { 
    ssr: false,
    loading: () => <div className="h-full w-full bg-white/5 animate-pulse rounded-3xl" />
});

export default function AmbulanceDashboard() {
  const [vitals, setVitals] = useState({ hr: 88, spo2: 94 });

  useEffect(() => {
    const interval = setInterval(() => {
      setVitals({
        hr: Math.floor(85 + Math.random() * 10),
        spo2: Math.floor(92 + Math.random() * 4),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-10 flex flex-col gap-10">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                <Truck className="text-white w-7 h-7" />
            </div>
            <div>
                <h1 className="text-2xl font-black tracking-tighter uppercase">Ambulance V-102</h1>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Alpha Team • Active Mission</p>
            </div>
        </div>

        <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end">
                <p className="text-xs font-bold text-white/40 uppercase">Assigned Hospital</p>
                <p className="font-bold text-white">City Hospital ER</p>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <button className="px-6 py-3 bg-accent/20 border border-accent/30 text-accent rounded-xl text-xs font-black uppercase tracking-widest hover:bg-accent/30 transition-all">
                End Mission
            </button>
        </div>
      </header>

      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="lg:col-span-2 relative min-h-[500px]">
              <MapView />
              
              {/* Mission Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4 z-10">
                  <div className="glass px-6 py-4 rounded-2xl flex-1 min-w-[200px] flex items-center gap-4 border-white/10">
                    <div className="p-3 bg-primary/20 rounded-xl">
                        <Navigation className="text-primary w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Current ETA</p>
                        <p className="text-xl font-black">12 MINS</p>
                    </div>
                  </div>
                  <div className="glass px-6 py-4 rounded-2xl flex-1 min-w-[200px] flex items-center gap-4 border-white/10">
                    <div className="p-3 bg-yellow-500/20 rounded-xl">
                        <Clock className="text-yellow-500 w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Traffic Delay</p>
                        <p className="text-xl font-black">+4 MINS</p>
                    </div>
                  </div>
              </div>
          </div>

          {/* Patient Vitals Side Panel */}
          <div className="space-y-8">
              <div className="glass rounded-[2rem] p-8 border-white/5 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[80px]" />
                  
                  <div className="flex items-center justify-between relative z-10">
                      <h2 className="text-xl font-bold flex items-center gap-3">
                          <Activity className="text-primary" />
                          Live Patient Feed
                      </h2>
                      <span className="px-2 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-lg border border-accent/20">
                          Critical
                      </span>
                  </div>

                  <div className="space-y-4 pt-4">
                      {/* Live Vitals Cards */}
                      <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 glass-card rounded-2xl space-y-2">
                              <Heart className="w-5 h-5 text-accent" />
                              <p className="text-[10px] font-bold text-white/30 uppercase">Heart Rate</p>
                              <p className="text-2xl font-black">{vitals.hr} <span className="text-[10px] text-white/20">BPM</span></p>
                          </div>
                          <div className="p-4 glass-card rounded-2xl space-y-2">
                              <Wind className="w-5 h-5 text-primary" />
                              <p className="text-[10px] font-bold text-white/30 uppercase">SpO2</p>
                              <p className="text-2xl font-black">{vitals.spo2} <span className="text-[10px] text-white/20">%</span></p>
                          </div>
                      </div>

                      {/* AI Summary */}
                      <div className="p-6 bg-white/5 rounded-3xl border border-white/10 space-y-3">
                          <div className="flex items-center gap-2">
                              <AlertCircle className="text-yellow-500 w-4 h-4" />
                              <p className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">AI Assessment</p>
                          </div>
                          <p className="text-sm text-white/70 leading-relaxed italic">
                              &quot;Patient showing signs of tachycardia. SpO2 dipping slightly below 95%. Automated oxygen flow adjusted to 2L. Continuous monitoring advised.&quot;
                          </p>
                      </div>
                  </div>
                  
                  <button className="w-full py-4 glass rounded-[1.5rem] font-bold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 group">
                      View Detailed History
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>

              {/* Hospital Contact */}
              <div className="glass rounded-[2rem] p-8 border-white/5 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center">
                    <Navigation className="text-emerald-400 w-8 h-8" />
                  </div>
                  <div className="flex-1">
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Next Destination</p>
                      <h3 className="text-lg font-bold">City Hospital ER</h3>
                      <p className="text-xs text-emerald-400 font-bold">Priority Access Granted</p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
