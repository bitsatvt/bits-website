import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BITS | Building Impactful Tech with Students",
  description: "Professional-grade software solutions built by Virginia Tech engineering talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* We apply the font variable here so Tailwind can see it */}

      <body className={`${inter.variable} antialiased bg-white text-slate-900`}>
        <div className="relative min-h-screen bg-white text-slate-900 font-sans selection:bg-bits-orange selection:text-white">

          {/* --- BACKGROUND LAYERS --- */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* 1. Grain Texture */}
            <div className="absolute inset-0 bg-noise opacity-10 mix-blend-multiply"></div>

            {/* 2. The Tech Grid (Faint dark lines on light) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            {/* 3. The Energy Blobs (Blend mode for Light Theme) */}
            <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] 
              bg-bits-orange/20 rounded-full blur-[50px] mix-blend-multiply
              animate-[drift_50s_infinite_linear]" 
            />

            <div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] 
              bg-violet-700/10 rounded-full blur-[50px] mix-blend-multiply
              animate-[drift_40s_infinite_linera]" 
            />

            <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] 
              bg-cyan-600/20 rounded-full blur-[50px] mix-blend-multiply
              animate-[drift_60s_infinite_linear]" 
            />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
