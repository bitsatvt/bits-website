import Navbar from "@/components/Navbar";

import ryanlee from '../../../public/LeadershipProfiles/ryanlee.jpeg'
import jaydonbingham from '../../../public/LeadershipProfiles/jaydonbingham.jpeg'
import joeychen from '../../../public/LeadershipProfiles/joeychen.jpeg'
import yashvasinsana from '../../../public/LeadershipProfiles/yashvasinsana.jpeg'
import farhanuddin from '../../../public/LeadershipProfiles/farhanuddin.jpeg'
import lillyterziyska from '../../../public/LeadershipProfiles/lillyterziyska.jpeg'
import aashritayeligireddy from '../../../public/LeadershipProfiles/AashritaYeligireddy.jpeg'
import shaymaaA from '../../../public/LeadershipProfiles/shaymaaA.jpeg'


import ideation from '../../../public/AboutImages/ideation.png'
import wireframe from '../../../public/AboutImages/wireframe2.png'
import prototype from '../../../public/AboutImages/prototype.png'
import group from '../../../public/AboutImages/groupPicture.png'

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
    { title: "Ideation", desc: "Identifying real-world problems and brainstorming impactful tech solutions. We believe everyone can contribute ideas that can turn a good project, into a great project.", step: "01", src: ideation },
    { title: "Wireframing", desc: "Mapping user flows and low-fidelity structures to nail the UX early. Our teams work directly with clients to ensure their needs are met before any development begins.", step: "02", src: wireframe},
    { title: "Prototyping", desc: "Building high-fidelity mockups and functional MVPs to test core logic. We take advantage of modern frameworks to scale quickly, using Git and Github to streamline version control and team collaboration.", step: "03", src: prototype },
    { title: "Weekly Sprints", desc: "Iterative development cycles with small, manageable tasks for rapid shipping. Meet with your team, project leads, and clients to share progress across different issues.", step: "04", src: group },
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
                <h2 className="text-6xl font-bold text-white">Our <span className = "text-bits-bright-orange">Agile</span> Workflow.</h2>
            </div>
            
            <div className="flex flex-col gap-16 md:gap-24">
            {workflow.map((item, i) => (
                <div 
                    key={i} 
                    className="flex flex-col md:flex-row items-center gap-12 group"
                >
                {/* Text Content */}
                <div className="flex-1 space-y-4">
                    <span className="text-md font-mono text-bits-orange/60 block">
                        {item.step}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">
                        {item.title}
                    </h3>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
                        {item.desc}
                    </p>
                </div>

                {/* Image Container */}
                <div className="flex-1 w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-800 aspect-video">
                        <img
                            src={item.src.src} 
                            alt={item.title}
                            className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
    ))}
    </div>
         </div>
         <div className="border-t border-white/10 pt-16">
            <h2 className="text-4xl font-bold text-white mb-12 text-center lg:text-left ">Executive Board</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {leadership.map((person, i) => (
                    <div key={i} className="flex flex-col gap-4 items-center m-10 sm:items-start md:m-15 lg:m-0 duration-250 pb-3 rounded-3xl hover:bg-white/10">
                        {person.src && (
                            <img
                             src = {person.src.src}
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