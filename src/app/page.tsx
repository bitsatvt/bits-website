import Navbar from "@/components/Navbar";
import Link from "next/link";
import { ArrowRight, Code2, Rocket, Users, Zap, Layers } from "lucide-react";

export default function Home() {
  return (
      <>
      <Navbar />
      


      <main className="relative z-10 flex flex-col items-center pt-32 md:pt-48 pb-20">
        
        {/* --- HERO SECTION --- */}
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pb-32 md:pb-48">
          
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-sm transition-transform hover:scale-105 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bits-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-bits-orange"></span>
            </span>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
              Recruiting for Spring 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.05]">
            Student Built. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bits-orange via-orange-400 to-yellow-400">
              Professional Grade.
            </span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-1xl text-slate-400 mb-10 leading-relaxed font-medium">
            We are <span className="text-white font-bold">BITS</span>. Virginia Tech's premier software development organization. We turn student talent into impactful tech for real clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto relative z-20">
            <Link
              href="/partners"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-300 bg-bits-orange backdrop-blur-sm border border-white/10 rounded-full hover:bg-bits-bright-orange hover:text-white hover:scale-105 transition-all duration-200 shadow-sm"
              >
              Partner with Us
            </Link>
            
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-300 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-full hover:bg-slate-900 hover:text-white hover:scale-105 transition-all duration-200 shadow-sm"
            >
              View Our Work
            </Link>
          </div>
        </section>

        {/* --- FEATURED PROJECT --- */}
        <section className="relative z-20 w-full max-w-7xl px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-32 mb-32">
             <div className="bg-slate-900/50 backdrop-blur-sm rounded-[2.5rem] p-2 border border-white/10 shadow-2xl shadow-black/50">
                <div className="bg-black rounded-[2rem] overflow-hidden relative min-h-[500px] flex md:flex-row flex-col group border border-white/5">
                    
                    {/* Abstract Background Grid inside the card */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.05]"></div>
                    
                    {/* Left Side: Content */}
                    <div className="relative z-10 p-8 md:p-14 flex flex-col justify-center md:w-1/2">
                        <div className="inline-flex items-center gap-2 text-bits-orange font-bold tracking-widest uppercase text-xs mb-6">
                            <Zap className="w-4 h-4" />
                            Featured Case Study
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                            Drone E-Commerce Configurator
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            We partnered with <span className="text-white font-semibold">Unmanned Industries</span> to build a bespoke 3D drone customization platform. Built with Next.js and PostgreSQL to handle complex inventory logic.
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <Badge text="Next.js" />
                            <Badge text="PostgreSQL" />
                            <Badge text="3D Modeling" />
                        </div>
                        <Link href="/projects" className="text-white font-bold hover:text-bits-orange flex items-center gap-2 group/link transition-colors">
                            Read the Case Study <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Side: Visual/Preview */}
                    <div className="relative md:w-1/2 bg-slate-900/50 min-h-[300px] md:min-h-full border-t md:border-t-0 md:border-l border-white/10 flex items-center justify-center overflow-hidden">
                        {/* Gradient Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-purple-600/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        {/* Center Icon/Preview */}
                        <div className="relative text-center p-8 transform group-hover:scale-105 transition-transform duration-500">
                           <div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-2xl">
                                <Layers className="text-bits-orange w-12 h-12" />
                           </div>
                           <p className="text-slate-500 font-medium text-sm tracking-wide uppercase">Project Preview</p>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* --- VALUES GRID --- */}
        <section className="w-full max-w-7xl mx-auto px-6 pb-20">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">More than just code.</h2>
                <p className="text-lg text-slate-500 mt-2">How we operate as a student organization.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                <ValueCard 
                    icon={<Users className="w-6 h-6 text-white" />}
                    color="bg-bits-orange"
                    title="Mentorship First"
                    desc="We pair underclassmen with experienced leads. You don't just build; you learn how to engineer."
                />
                <ValueCard 
                    icon={<Zap className="w-6 h-6 text-white" />}
                    color="bg-purple-600"
                    title="Real Impact"
                    desc="No throwaway assignments. We build software that real companies and users rely on daily."
                />
                <ValueCard 
                    icon={<Code2 className="w-6 h-6 text-white" />}
                    color="bg-slate-700"
                    title="Modern Stack"
                    desc="We ignore the curriculum. We use the tools the industry uses: Next.js, Swift, Go, and AWS."
                />
             </div>
        </section>

      </main>
    </>
  );
}

// --- SUBCOMPONENTS ---

function Badge({ text }: { text: string }) {
    return (
        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold backdrop-blur-md">
            {text}
        </span>
    )
}

function ValueCard({ title, desc, icon, color }: { title: string, desc: string, icon: React.ReactNode, color: string }) {
    return (
        <div className="group bg-slate-900/50 p-8 rounded-3xl border border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed font-medium">
                {desc}
            </p>
        </div>
    )
}