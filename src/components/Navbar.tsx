"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" }
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-md border-b border-white/10 supports-[backdrop-filter]:bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative">
                 {/* Make sure your logo PNG is white/transparent or it might look odd on black */}
                 <Image 
                   src="/logo.png" 
                   alt="BITS Logo" 
                   width={180} 
                   height={120} 
                   className="object-contain" // Added invert since original logo was likely black
                 />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-slate-400 hover:text-bits-orange transition-colors uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              href="/join"
              className="px-6 py-2.5 rounded-full bg-bits-orange text-white text-sm font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 transition-all duration-200"
            >
              Join the Team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-slate-800 absolute w-full left-0 top-20 shadow-2xl p-6">
            <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-bold text-slate-200"
                    onClick={() => setIsOpen(false)}
                >
                    {link.name}
                </Link>
                ))}
                <div className="h-px bg-slate-800 my-2" />
                <Link
                href="/join"
                className="block w-full text-center bg-bits-orange text-white px-4 py-3 rounded-xl text-lg font-bold"
                onClick={() => setIsOpen(false)}
                >
                Join the Team
                </Link>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;