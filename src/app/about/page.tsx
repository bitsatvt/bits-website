import Navbar from "@/components/Navbar";

const leadership = [
  { name: "Jaydon Bingham", role: "President" },
  { name: "Arda Dogan", role: "External VP" },
  { name: "Mallika Pamula", role: "Internal VP" },
  { name: "Alan Cai", role: "Treasurer & Media" },
  { name: "Peter Do", role: "Outreach Officer" },
  { name: "Kevin Xiong", role: "Professionalism Officer" },
];

export default function About() {
  return (
    <>
      <Navbar />
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
         <div className="max-w-4xl mb-20">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8">
                Building the <span className="text-bits-bright-orange">Standard</span>.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
                Building Impactful Tech with Students (BITS) is a student organization at Virginia Tech. 
                We aim to advance software development skills, cultivate leadership, and build impactful projects 
                in a collaborative environment.
            </p>
         </div>

         <div className="border-t border-white/10 pt-16">
            <h2 className="text-3xl font-bold text-white mb-12">Executive Board</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {leadership.map((person, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-900/40 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                        <div className="w-16 h-16 rounded-xl bg-slate-800 border border-white/10"></div>
                        <div>
                            <h3 className="text-lg font-bold text-white">{person.name}</h3>
                            <p className="text-bits-orange text-sm font-medium">{person.role}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </main>
    </>
  );
}