"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, HeartPulse, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-5xl w-full text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border-primary/20"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-xs font-bold text-accent uppercase tracking-widest">Samsung Innovation Program</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white leading-tight"
        >
          Saving Lives through <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            AI-Powered Response
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto"
        >
          The next generation of emergency medical coordination. Real-time AI triage, 
          live ambulance streaming, and hospital resource mesh for zero-delay intervention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/patient">
            <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 group transition-all hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] active:scale-95">
              Trigger Emergency SOS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <button className="px-8 py-4 glass text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-white/5 transition-all">
            <Play className="w-5 h-5 fill-white" />
            Watch Demo
          </button>
        </motion.div>
      </div>

      {/* Featured Image Group */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 40 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative w-full max-w-6xl mt-12 aspect-[16/9] rounded-3xl overflow-hidden glass border-white/10 shadow-2xl"
      >
        <Image 
          src="/hero-viz.png" 
          alt="VitalNet Dashboard Visualization" 
          fill
          className="object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        
        {/* Floating Stat Cards */}
        <div className="absolute bottom-8 left-8 right-8 flex flex-wrap justify-center gap-6">
            {[
                { label: "AI Response Time", value: "< 2s", icon: Zap, color: "text-yellow-400" },
                { label: "Resource Efficiency", value: "40% ↑", icon: ShieldAlert, color: "text-blue-400" },
                { label: "Dispatch Precision", value: "99.9%", icon: HeartPulse, color: "text-accent" },
            ].map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i*0.1 }}
                    className="px-6 py-4 glass-card rounded-2xl flex items-center gap-4 min-w-[200px]"
                >
                    <div className={cn("p-3 rounded-xl bg-white/5", stat.color)}>
                        <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs text-white/40 font-bold uppercase tracking-wider">{stat.label}</p>
                        <p className="text-2xl font-bold text-white tracking-tight">{stat.value}</p>
                    </div>
                </motion.div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
