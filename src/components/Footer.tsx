import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 pt-16 pb-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="font-extrabold text-2xl text-white tracking-tighter">BITS<span className="text-bits-orange">.</span></span>
          <p className="text-sm text-slate-500 mt-2">Building Impactful Tech with Students</p>
        </div>
        
        <div className="flex space-x-8">
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={20} /></a>
        </div>
      </div>
      <div className="mt-12 text-center text-xs text-slate-600 font-medium">
        &copy; {new Date().getFullYear()} BITS VT. Made in Blacksburg.
      </div>
    </footer>
  );
}