import Navbar from "@/components/Navbar";
import { Calendar, Clock, MapPin } from "lucide-react";

const events = [
  { date: "NOV 23", title: "General Body Meeting", time: "6:00 PM", location: "McBryde 100" },
  { date: "DEC 01", title: "Project Presentations", time: "5:30 PM", location: "Goodwin Hall" },
  { date: "DEC 05", title: "End of Semester Social", time: "7:00 PM", location: "TBD" },
];

export default function Events() {
  return (
    <>
      <Navbar />
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <h1 className="text-4xl font-semibold tracking-tighter text-white mb-12">Upcoming Events</h1>
        
        <div className="space-y-4">
            {events.map((event, i) => (
                <div key={i} className="flex flex-col sm:flex-row bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden hover:bg-slate-900/60 transition-colors group">
                    <div className="bg-white/5 p-6 sm:w-32 flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-white/10 group-hover:bg-bits-orange group-hover:text-white transition-colors">
                        <span className="text-xs font-bold uppercase tracking-wider opacity-80">{event.date.split(' ')[0]}</span>
                        <span className="text-3xl font-semibold">{event.date.split(' ')[1]}</span>
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                        <div className="flex items-center gap-6 text-sm text-slate-400">
                            <span className="flex items-center gap-2"><Clock size={14} /> {event.time}</span>
                            <span className="flex items-center gap-2"><MapPin size={14} /> {event.location}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </main>
    </>
  );
}