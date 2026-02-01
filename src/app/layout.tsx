import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BITS | Building Impactful Tech with Students",
  description:
    "Professional-grade software solutions built by Virginia Tech engineering talent.",
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
        <div className="relative min-h-screen bg-black text-white font-sans selection:bg-bits-orange selection:text-white">
          {/* --- BACKGROUND LAYERS --- */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* 1. Grain Texture (White noise on black) */}
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay"></div>

            {/* 2. The Tech Grid (Inverted to faint white lines) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            {/* 3. The Energy Blobs (Updated blend mode for Dark Theme) */}
            {/* Note: mix-blend-screen is required for colors to show up on black */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-bits-orange/16 rounded-full blur-[100px] animate-blob mix-blend-screen" />
            <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-yellow-700/17 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen" />
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
