"use client";

import { motion } from "framer-motion";
import { User, Truck, Building2 } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "AI Patient Triage",
    description: "Instant symptom analysis and priority categorization using medical-grade NLP models.",
    icon: User,
    image: "/hero-viz.png",
    color: "from-blue-500/20 to-cyan-500/20",
    tags: ["AI Powered", "Instant"]
  },
  {
    title: "Smart Ambulance Dispatch",
    description: "Real-time navigation with live patient vitals streaming directly to the ER en route.",
    icon: Truck,
    image: "/ambulance-ui.png",
    color: "from-red-500/20 to-orange-500/20",
    tags: ["Live Sync", "Optimal Route"]
  },
  {
    title: "Hospital Resource Mesh",
    description: "Dynamic tracking of bed occupancy, blood bank levels, and surgical team availability.",
    icon: Building2,
    image: "/hospital-ui.png",
    color: "from-emerald-500/20 to-teal-500/20",
    tags: ["Real-time", "Resource Mgmt"]
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Unified Emergency Ecosystem
        </h2>
        <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
          Connecting every stakeholder in the critical care chain with zero-latency data synchronization.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group relative flex flex-col glass-card rounded-[2.5rem] overflow-hidden border-white/5 hover:border-white/20 transition-all"
          >
            <div className={`aspect-[4/3] relative overflow-hidden bg-gradient-to-br ${feature.color}`}>
              <Image 
                src={feature.image} 
                alt={feature.title} 
                fill 
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] via-transparent to-transparent" />
              
              <div className="absolute top-6 left-6 flex gap-2">
                {feature.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-8 space-y-4 flex-1">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20`} />
                <feature.icon className="w-6 h-6 text-white relative z-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
              <p className="text-foreground/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
            
            <div className="p-8 pt-0 mt-auto">
                <button className="w-full py-4 glass rounded-2xl text-sm font-bold text-white/80 hover:bg-white/5 hover:text-white transition-all">
                    Learn More
                </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
