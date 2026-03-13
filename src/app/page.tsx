import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      
      {/* Samsung Innovation Program Banner */}
      <section id="impact" className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto glass rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-center">
            <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />
            
            <div className="relative z-10 space-y-6 md:space-y-8">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tighter leading-tight">
                    Built for Massive <br className="hidden sm:block" /> Social Impact
                </h2>
                <p className="text-base md:text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
                    VitalNet is a capstone initiative developed for the **Samsung Innovation Program**. 
                    Our mission is to reduce emergency response times by 40% using cutting-edge AI 
                    and a unified communication mesh.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-6 md:pt-10">
                    {[
                        { label: "Students", value: "6" },
                        { label: "Lines of Code", value: "2.5k+" },
                        { label: "Tech Stack", value: "TS / Next / AI" },
                        { label: "Goal", value: "Zero Delay" },
                    ].map((item, i) => (
                        <div key={i} className="space-y-1 p-4 glass-card rounded-2xl md:bg-transparent md:border-none">
                            <p className="text-xl md:text-3xl font-bold text-white">{item.value}</p>
                            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-bold">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <footer className="py-8 md:py-12 border-t border-white/5 text-center px-6">
        <p className="text-xs md:text-sm text-foreground/40 font-medium">
          &copy; 2026 VitalNet Team • Samsung Innovation Program Capstone
        </p>
      </footer>
    </main>
  );
}
