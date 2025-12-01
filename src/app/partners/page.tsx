import Navbar from "@/components/Navbar";
import { CheckCircle2, TrendingUp, Users, Zap } from "lucide-react";

export default function Partners() {
  return (
    <>
      <Navbar />
      
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-bits-orange/10 rounded-full blur-[100px] animate-blob mix-blend-screen" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Pitch */}
            <div>
                <h1 className="text-5xl font-semibold tracking-tighter text-white mb-6">
                    Hire the Next Generation of <span className="text-bits-orange">Engineers</span>.
                </h1>
                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                    Partner with BITS to access a pool of motivated, pre-vetted developers and leaders at Virginia Tech. We offer direct recruiting pipelines and project partnerships.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                     <StatCard icon={<Users />} number="40+" label="Active Members" />
                     <StatCard icon={<Zap />} number="10+" label="Shipped Projects" />
                </div>

                <div className="space-y-4">
                    <BenefitRow text="Access to exclusive Resume Book" />
                    <BenefitRow text="Host Tech Talks & Workshops" />
                    <BenefitRow text="Sponsor Hackathons & Sprints" />
                    <BenefitRow text="Direct Project Commissioning" />
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Start a Conversation</h3>
                <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-5">
                        <InputGroup label="First Name" placeholder="Jane" />
                        <InputGroup label="Last Name" placeholder="Doe" />
                    </div>
                    <InputGroup label="Work Email" placeholder="jane@company.com" type="email" />
                    <InputGroup label="Company / Organization" placeholder="Tech Corp" />
                    
                    <div>
                        <label className="block text-sm font-bold text-slate-400 mb-2">Interest</label>
                        <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bits-orange focus:ring-1 focus:ring-bits-orange transition-all appearance-none">
                            <option>Recruiting Partnership</option>
                            <option>Project Commission (Dev Shop)</option>
                            <option>Event Sponsorship</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div>
                         <label className="block text-sm font-bold text-slate-400 mb-2">Message</label>
                         <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bits-orange focus:ring-1 focus:ring-bits-orange transition-all" placeholder="Tell us about your needs..."></textarea>
                    </div>

                    <button className="w-full bg-bits-orange text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all">
                        Send Message
                    </button>
                </form>
            </div>
        </div>

      </main>
    </>
  );
}

function StatCard({ icon, number, label }: { icon: any, number: string, label: string }) {
    return (
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-bits-bright-orange">{icon}</div>
            <div>
                <div className="text-2xl font-bold text-white">{number}</div>
                <div className="text-sm text-slate-400">{label}</div>
            </div>
        </div>
    )
}

function BenefitRow({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 text-slate-300">
            <CheckCircle2 className="text-bits-orange w-5 h-5" />
            <span>{text}</span>
        </div>
    )
}

function InputGroup({ label, placeholder, type="text" }: { label: string, placeholder: string, type?: string }) {
    return (
        <div>
            <label className="block text-sm font-bold text-slate-400 mb-2">{label}</label>
            <input type={type} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bits-orange focus:ring-1 focus:ring-bits-orange transition-all placeholder:text-slate-600" placeholder={placeholder} />
        </div>
    )
}