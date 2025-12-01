import Navbar from "@/components/Navbar";
import { Check, Code2, Terminal, Users } from "lucide-react";

export default function Join() {
  return (
    <>
    <Navbar />
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
             <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-bold text-slate-300 mb-6 backdrop-blur-md">
                Spring 2026 Applications Closed
             </div>
             <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">
                Build the <span className="text-bits-bright-orange">Future</span>.
             </h1>
             <p className="text-xl text-slate-400 leading-relaxed">
                BITS is a selective student organization. We look for builders, designers, and leaders who want to ship code that matters.
             </p>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
            <RoleCard 
                title="Developer" 
                icon={<Code2 className="w-8 h-8 text-bits-orange" />}
                desc="Write production-ready code in React, Python, or Swift. Work closely with designers to bring interfaces to life."
                commitment="4-6 hours/week"
            />
            <RoleCard 
                title="Project Manager" 
                icon={<Users className="w-8 h-8 text-purple-500" />}
                desc="Lead agile sprints, manage client requirements, and ensure project velocity. Great for leadership experience."
                commitment="2-4 hours/week"
            />
             <RoleCard 
                title="Project Lead" 
                icon={<Terminal className="w-8 h-8 text-green-500" />}
                desc="Architect the technical stack and guide the team through complex engineering challenges."
                commitment="6-12 hours/week"
            />
        </div>

        {/* Timeline */}
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Recruitment Timeline</h2>
            <div className="grid md:grid-cols-4 gap-4 text-center">
                 <TimelineStep step="1" title="Application" desc="Submit your resume and portfolio online." />
                 <TimelineStep step="2" title="Behavioral" desc="Chat with the board about your goals." />
                 <TimelineStep step="3" title="Technical" desc="Whiteboard or take-home challenge." />
                 <TimelineStep step="4" title="Decision" desc="Welcome to the team." isLast />
            </div>
        </div>

      </main>
    </>
  );
}

function RoleCard({ title, icon, desc, commitment }: { title: string, icon: any, desc: string, commitment: string }) {
    return (
        <div className="bg-slate-900/40 border border-white/10 p-8 rounded-3xl hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1">
            <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm h-20">
                {desc}
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                <div className="w-2 h-2 rounded-full bg-bits-bright-orange animate-pulse"></div>
                {commitment}
            </div>
        </div>
    )
}

function TimelineStep({ step, title, desc, isLast }: { step: string, title: string, desc: string, isLast?: boolean }) {
    return (
        <div className="relative">
            {!isLast && <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-white/10 -z-10"></div>}
            <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/20 text-white font-bold flex items-center justify-center mx-auto mb-4 z-10 relative">
                {step}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-sm text-slate-500">{desc}</p>
        </div>
    )
}