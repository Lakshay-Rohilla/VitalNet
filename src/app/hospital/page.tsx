"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  Bed, 
  Droplet, 
  Users, 
  AlertTriangle, 
  CheckCircle2,
  Clock,
  Plus,
  Activity,
  ChevronRight,
  Search
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import React from "react";

// Stat Card for Hospital Resources
interface ResourceStatProps {
    label: string;
    value: number;
    total: number;
    icon: React.ElementType;
    color: string;
    detail: string;
}

function ResourceStat({ label, value, total, icon: Icon, color, detail }: ResourceStatProps) {
  const percentage = Math.round((value / total) * 100);
  
  return (
    <div className="glass-card rounded-3xl p-6 border-white/5 space-y-6 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className={cn("p-3 rounded-2xl bg-white/5", color)}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="text-right">
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{label}</p>
            <p className="text-2xl font-black text-white">{value}<span className="text-sm text-white/40 font-bold">/{total}</span></p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
            <span>Availability</span>
            <span>{percentage}%</span>
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                className={cn("h-full rounded-full", color.replace('text', 'bg'))} 
            />
        </div>
      </div>
      
      <p className="text-xs text-white/40 font-medium">{detail}</p>
    </div>
  );
}

export default function HospitalPortal() {
  const [activeTab, setActiveTab] = useState("DASHBOARD");

  const incomingPatients = [
    { id: "P-102", name: "John Doe", condition: "Trauma (P1)", eta: "12m", status: "EN_ROUTE", source: "Ambulance V-102" },
    { id: "P-105", name: "Jane Smith", condition: "Cardiac (P1)", eta: "4m", status: "ARRIVING", source: "Ambulance V-088" },
    { id: "P-109", name: "Rahul K.", condition: "Fracture (P3)", eta: "25m", status: "EN_ROUTE", source: "Private Vehicle" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white flex">
      {/* Sidebar */}
      <aside className="w-72 border-r border-white/5 p-8 flex flex-col gap-12 glass">
          <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                  <Building2 className="text-white w-6 h-6" />
              </div>
              <h1 className="text-xl font-black tracking-tight">City ER <span className="text-accent underline decoration-4">Hub</span></h1>
          </div>

          <nav className="flex-1 space-y-2">
              {[
                { label: "Dashboard", icon: Activity },
                { label: "Patient Intake", icon: Users },
                { label: "ER Inventory", icon: Droplet },
                { label: "Staff Rotas", icon: Clock },
              ].map((item) => (
                <div 
                    key={item.label}
                    onClick={() => setActiveTab(item.label.toUpperCase())}
                    className={cn(
                        "p-4 rounded-2xl flex items-center gap-4 cursor-pointer transition-all font-bold text-sm tracking-tight",
                        activeTab === item.label.toUpperCase() ? "bg-white/5 text-white border border-white/10" : "text-white/40 hover:text-white"
                    )}
                >
                    <item.icon className="w-5 h-5 shrink-0" />
                    {item.label}
                </div>
              ))}
          </nav>

          <div className="p-6 glass-card rounded-[2rem] border-white/5 space-y-4">
              <p className="text-[10px] font-black uppercase text-accent tracking-widest text-center animate-pulse">Critical Alert</p>
              <p className="text-xs text-center text-white/60 font-medium">Elevated trauma intake expected in the next 1h due to local congestion.</p>
          </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto space-y-12">
          {/* Header */}
          <header className="flex items-center justify-between">
              <div>
                  <h2 className="text-4xl font-black tracking-tighter">ER Command Center</h2>
                  <p className="text-white/40 font-medium">Real-time resource coordination mesh active.</p>
              </div>
              <div className="flex items-center gap-4">
                  <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                      <input 
                        type="text" 
                        placeholder="Search patient ID..." 
                        className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:ring-2 ring-primary/20 w-64"
                      />
                  </div>
                  <button className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,102,255,0.3)]">
                      <Plus className="text-white w-6 h-6" />
                  </button>
              </div>
          </header>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ResourceStat label="ER Beds" value={14} total={24} icon={Bed} color="text-primary" detail="4 ICU units available" />
              <ResourceStat label="Blood Bank" value={82} total={100} icon={Droplet} color="text-accent" detail="O+ critical supply (low)" />
              <ResourceStat label="Trauma Teams" value={3} total={5} icon={Users} color="text-yellow-400" detail="2 surgery suites active" />
              <ResourceStat label="Oxygen Mesh" value={98} total={100} icon={Activity} color="text-emerald-400" detail="Pressure normal" />
          </div>

          {/* Intake Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Incoming Patients */}
              <div className="space-y-6">
                  <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <AlertTriangle className="text-accent w-5 h-5" />
                        Incoming Emergencies
                      </h3>
                      <button className="text-xs font-bold text-primary hover:underline">View Dispatch Map</button>
                  </div>

                  <div className="space-y-4">
                      {incomingPatients.map((patient, i) => (
                        <motion.div 
                            key={patient.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card rounded-[2rem] p-6 border-white/5 flex items-center justify-between group hover:border-white/20 transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-6">
                                <div className={cn(
                                    "w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xs",
                                    patient.status === "ARRIVING" ? "bg-emerald-500/10 text-emerald-500" : "bg-primary/10 text-primary"
                                )}>
                                    {patient.eta}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white group-hover:text-primary transition-colors">{patient.name}</h4>
                                    <p className="text-xs text-white/40 font-medium">{patient.id} • {patient.condition}</p>
                                </div>
                            </div>
                            <div className="text-right flex items-center gap-4">
                                <div className="hidden md:block">
                                    <p className="text-[10px] font-black uppercase text-white/30 tracking-widest">Source</p>
                                    <p className="text-xs font-bold text-white/60">{patient.source}</p>
                                </div>
                                <ChevronRight className="text-white/20 group-hover:text-white transition-colors" />
                            </div>
                        </motion.div>
                      ))}
                  </div>
              </div>

              {/* Status Feed */}
              <div className="glass rounded-[3rem] p-10 border-white/5 space-y-8 relative overflow-hidden">
                  <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-accent/5 blur-[80px]" />
                  <h3 className="text-xl font-bold flex items-center gap-3 mt-4">
                    <CheckCircle2 className="text-emerald-400" />
                    Operational Feed
                  </h3>
                  <div className="space-y-6 relative z-10">
                      {[
                        { time: "09:42", log: "Bed #14 sterilized & prioritized for P-105.", type: "SYSTEM" },
                        { time: "09:35", log: "Ambulance V-102 transmitting telemetry for P-102.", type: "DATA" },
                        { time: "09:12", log: "Blood Bank O+ supply replenished +5 units.", type: "INVENTORY" },
                      ].map((log, i) => (
                        <div key={i} className="flex gap-6 items-start">
                            <span className="text-[10px] font-black text-white/20 pt-1">{log.time}</span>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black text-primary uppercase tracking-widest">{log.type}</p>
                                <p className="text-sm text-white/70 font-medium leading-relaxed">{log.log}</p>
                            </div>
                        </div>
                      ))}
                      <button className="w-full py-4 glass rounded-2xl text-xs font-black uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 transition-all">
                          Export Duty Report
                      </button>
                  </div>
              </div>
          </section>
      </main>
    </div>
  );
}
