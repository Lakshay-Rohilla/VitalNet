"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="w-full max-w-7xl glass rounded-full px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">VitalNet</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Solutions", "Impact", "Team"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link href="/patient">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)]"
          >
            Launch System
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}
