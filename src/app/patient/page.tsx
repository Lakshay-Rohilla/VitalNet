"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Thermometer, 
  Wind, 
  Activity, 
  AlertCircle,
  BrainCircuit,
  PhoneCall,
  User,
  History,
  Settings,
  LogOut,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import React from "react";

// Sidebar Component
function Sidebar() {
  const items = [
    { icon: User, label: "Profile", active: true },
    { icon: Activity, label: "Health Hub", active: false },
    { icon: History, label: "History", active: false },
    { icon: BrainCircuit, label: "AI Wellness", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="w-24 md:w-64 h-screen glass border-r border-white/5 flex flex-col items-center py-8">
      <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-12">
        <Activity className="text-white w-7 h-7" />
      </div>
      
      <div className="flex-1 space-y-4 px-4 w-full">
        {items.map((item, i) => (
          <div 
            key={i} 
            className={cn(
              "p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all",
              item.active ? "bg-primary/20 text-primary border border-primary/20" : "text-white/40 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className="w-6 h-6 shrink-0" />
            <span className="hidden md:block font-bold text-sm tracking-tight">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="p-4 w-full">
        <div className="p-4 rounded-2xl text-white/40 hover:text-white hover:bg-white/5 flex items-center gap-4 cursor-pointer transition-all">
          <LogOut className="w-6 h-6 shrink-0" />
          <span className="hidden md:block font-bold text-sm tracking-tight">Logout</span>
        </div>
      </div>
    </div>
  );
}

// Vitals Card Component
interface VitalsCardProps {
    label: string;
    value: number;
    unit: string;
    icon: React.ElementType;
    color: string;
    trend: number;
}

function VitalsCard({ label, value, unit, icon: Icon, color, trend }: VitalsCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card rounded-3xl p-6 border-white/5 relative overflow-hidden group"
    >
      <div className={cn("absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 transition-opacity group-hover:opacity-40", color)} />
      
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
            <div className={cn("p-3 rounded-2xl bg-white/5", trend > 0 ? "text-accent" : "text-emerald-400")}>
                <Icon className="w-6 h-6" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 px-2 py-1 glass rounded-lg">
                Live
            </div>
        </div>
        
        <div>
            <p className="text-sm font-bold text-white/40 uppercase tracking-wider">{label}</p>
            <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">{value}</span>
                <span className="text-sm font-bold text-white/40">{unit}</span>
            </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PatientDashboard() {
  const [vitals, setVitals] = useState({
    hr: 72,
    spo2: 98,
    temp: 36.6,
  });

  const [triageStatus, setTriageStatus] = useState<"idle" | "analyzing" | "alert">("idle");

  useEffect(() => {
    const interval = setInterval(() => {
      setVitals({
        hr: Math.floor(70 + Math.random() * 5),
        spo2: Math.floor(97 + Math.random() * 3),
        temp: Number((36.5 + Math.random() * 0.3).toFixed(1)),
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex bg-background min-h-screen text-white overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black tracking-tight">Health Dashboard</h1>
                    <p className="text-white/40 font-medium">Welcome back, patient. All systems normal.</p>
                </div>
                
                <div className="flex items-center gap-4">
                    <button className="px-6 py-3 glass rounded-2xl flex items-center gap-2 hover:bg-white/5 transition-all text-sm font-bold">
                        <PhoneCall className="w-4 h-4 text-emerald-400" />
                        Call Local Clinic
                    </button>
                    <button 
                        onClick={() => setTriageStatus(triageStatus === "alert" ? "idle" : "alert")}
                        className={cn(
                            "px-8 py-3 rounded-2xl flex items-center gap-2 transition-all text-sm font-bold shadow-lg",
                            triageStatus === "alert" ? "bg-accent animate-sos" : "bg-primary hover:bg-primary/90"
                        )}
                    >
                        <AlertCircle className="w-5 h-5" />
                        {triageStatus === "alert" ? "SOS ACTIVE" : "EMERGENCY SOS"}
                    </button>
                </div>
            </div>

            {/* Vitals Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <VitalsCard 
                    label="Heart Rate" 
                    value={vitals.hr} 
                    unit="BPM" 
                    icon={Heart} 
                    color="bg-accent" 
                    trend={1}
                />
                <VitalsCard 
                    label="Oxygen (SpO2)" 
                    value={vitals.spo2} 
                    unit="%" 
                    icon={Wind} 
                    color="bg-primary" 
                    trend={-1}
                />
                <VitalsCard 
                    label="Temperature" 
                    value={vitals.temp} 
                    unit="°C" 
                    icon={Thermometer} 
                    color="bg-yellow-400" 
                    trend={0}
                />
            </div>

            {/* AI Triage & Analytics Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass rounded-[2.5rem] p-8 border-white/5 flex flex-col gap-6 h-[400px]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <BrainCircuit className="text-primary w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold">AI Triage Assistant</h2>
                        </div>
                        <div className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase rounded-full">
                            Operational
                        </div>
                    </div>
                    
                    <div className="flex-1 glass-card rounded-2xl p-6 text-white/40 text-sm overflow-hidden flex flex-col justify-end">
                        <div className="space-y-4">
                            <div className="bg-white/5 rounded-2xl p-4 w-4/5">
                                Hello! I&apos;m monitoring your vitals. How are you feeling today?
                            </div>
                            <div className="bg-primary/20 text-white rounded-2xl p-4 w-3/4 self-end ml-auto border border-primary/20">
                                I have a slight headache and feel dizzy.
                            </div>
                            <div className="bg-white/5 rounded-2xl p-4 w-4/5 animate-pulse">
                                Analyzing symptoms...
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Describe your symptoms..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-primary transition-all pr-12"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary p-1">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="glass rounded-[2.5rem] p-8 border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8">
                         <Activity className="w-20 h-20 text-white/5" />
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold">Recent Health Trends</h2>
                        <div className="space-y-4">
                            {[
                                { alert: "Anomaly Detected", desc: "Slight heart rate spike at 3:00 PM", time: "2h ago", color: "text-accent" },
                                { alert: "Daily Report", desc: "All vitals maintained within safe thresholds.", time: "6h ago", color: "text-emerald-400" },
                                { alert: "Medication", desc: "Scheduled dose taken successfully.", time: "10h ago", color: "text-primary" },
                            ].map((note, i) => (
                                <div key={i} className="flex gap-4 p-4 glass-card rounded-2xl">
                                    <div className={cn("w-1 h-10 rounded-full", note.color.replace('text', 'bg'))} />
                                    <div>
                                        <p className={cn("text-xs font-bold uppercase tracking-widest", note.color)}>{note.alert}</p>
                                        <p className="text-sm text-white font-medium">{note.desc}</p>
                                        <p className="text-[10px] text-white/20 mt-1">{note.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
