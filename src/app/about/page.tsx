import Navbar from "@/components/Navbar";
import Image from "next/image";

import ryanlee from '../../../public/LeadershipProfiles/ryanlee.jpeg'
import jaydonbingham from '../../../public/LeadershipProfiles/jaydonbingham.jpeg'
import joeychen from '../../../public/LeadershipProfiles/joeychen.jpeg'
import yashvasinsana from '../../../public/LeadershipProfiles/yashvasinsana.jpeg'
import farhanuddin from '../../../public/LeadershipProfiles/farhanuddin.jpeg'
import lillyterziyska from '../../../public/LeadershipProfiles/lillyterziyska.jpeg'
import aashritayeligireddy from '../../../public/LeadershipProfiles/AashritaYeligireddy.jpeg'
import shaymaaA from '../../../public/LeadershipProfiles/shaymaaA.jpeg'


const leadership = [
  { name: "Jaydon Bingham", role: "President", src: jaydonbingham  },
  { name: "Joey Chen", role: "External VP", src: joeychen },
  { name: "Ryan Lee", role: "Internal VP", src: ryanlee },
  { name: "Yashvasin Sana", role: "Internal Board", src: yashvasinsana},
  { name: "Aashrita Yeligreddy", role: "Internal Board", src: aashritayeligireddy},
  { name: "Shaymaa", role: "Lead Project Manager", src: shaymaaA},
  { name: "Farhan Uddin", role: "Treasurer", src: farhanuddin },
  { name: "Lilly Terziyska", role: "Social Media", src: lillyterziyska },
];

const workflow = [
    { title: "Ideation", desc: "Identifying real-world problems and brainstorming impactful tech solutions.", step: "01" },
    { title: "Wireframing", desc: "Mapping user flows and low-fidelity structures to nail the UX early.", step: "02" },
    { title: "Prototyping", desc: "Building high-fidelity mockups and functional MVPs to test core logic.", step: "03" },
    { title: "Weekly Sprints", desc: "Iterative development cycles with small, manageable tasks for rapid shipping.", step: "04" },
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
         <div className="max-w-4xl mb-10">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8">
              Building the <span className="text-bits-bright-orange">Standard</span>.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed">
                Building Impactful Tech with Students (BITS) is a student organization at Virginia Tech. 
                We aim to advance software development skills, cultivate leadership, and build impactful projects 
                in a collaborative environment. We follow agile methodologies to ensure efficient project management.
            </p>
         </div>

         <div className="border-t border-white/10 pt-16 mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <h2 className="text-4xl font-bold text-white">Our <span className = "text-bits-bright-orange">Agile</span> Workflow.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workflow.map((item, i) => (
                    <div key={i} className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:cursor-default transition-colors">
                        <span className="text-md font-mono text-bits-orange/60 mb-4 block">{item.step}</span>
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
         </div>


         <div className="border-t border-white/10 pt-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center lg:text-left ">Executive Board</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {leadership.map((person, i) => (
                    <div key={i} className="flex flex-col gap-4 items-center m-20 sm:items-start md:m-15 lg:m-0 duration-250 pb-3 rounded-3xl hover:bg-white/5">
                        {person.src && (
                            <Image
                             src = {person.src}
                             alt = {person.name}
                             className="w-full bg-slate-800 border border-white/10"
                             />
                        )}
                        <div>
                            <h3 className="ml-3 text-xl font-bold text-white">{person.name}</h3>
                            <p className="ml-3 text-bits-orange text-md font-medium">{person.role}</p>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </main>
    </>
  );
}