// =====================================================
// app/layout.tsx
// =====================================================

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { Particles } from "@/components/ui/particles"

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "Siyuan Qi / rhythm0",
  description: "Engineer, creative technologist, and artist"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="relative bg-black text-white antialiased">
        <Particles
          className="fixed inset-0 -z-10"
          quantity={300}  
          staticity={50}
          size={0.4}
          ease={50}
          color="#ffffff"
          refresh
        />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}