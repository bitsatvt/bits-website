import Navbar from "@/components/Navbar";
import { ArrowUpRight, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "Drone E-Commerce",
    description: "A bespoke 3D drone customization platform built for Unmanned Industries. Handles complex inventory logic and real-time 3D rendering.",
    tags: ["Next.js", "PostgreSQL", "Three.js"],
    status: "Shipped",
    featured: true,
  },
  {
    title: "Odysseus Advisor",
    description: "Academic planning platform using official grade distribution and crowdsourced data to recommend courses for VT students.",
    tags: ["Next.js", "Python", "GCP"],
    status: "Active",
    featured: false,
  },
  {
    title: "Turing Note",
    description: "iOS application enabling programmers to take notes with code snippets, sketches, and syntax highlighting.",
    tags: ["SwiftUI", "iOS 18", "PencilKit"],
    status: "Active",
    featured: false,
  },
  {
    title: "StepFree",
    description: "Transit navigation app designed to allow mobility-impaired users to find accessible routes in major cities.",
    tags: ["React", "Mapbox", "Flask"],
    status: "Active",
    featured: false,
  },
  {
    title: "StudyGuido",
    description: "AI-powered study assistant using RAG to generate flashcards and quizzes from uploaded textbooks.",
    tags: ["React", "LLMs", "Python"],
    status: "In Development",
    featured: false,
  },
   {
    title: "MarketMoves",
    description: "Paper trading application with educational risk analysis and gamification features.",
    tags: ["React", "FastAPI", "MongoDB"],
    status: "In Development",
    featured: false,
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                Our <span className="text-bits-orange">Work</span>.
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
                Real products shipped by student teams. From customized e-commerce solutions to AI-powered educational tools.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
                <div key={i} className="group bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-bits-orange/50 hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-bits-orange group-hover:text-white transition-colors">
                            <Layers size={24} />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                            project.status === "Shipped" ? "bg-green-500/10 text-green-400 border-green-500/20" : 
                            "bg-slate-800 text-slate-400 border-white/5"
                        }`}>
                            {project.status}
                        </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-bits-bright-orange transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 text-xs font-medium text-slate-300 bg-white/5 rounded border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </main>
    </>
  );
}