"use client";
import { useState } from "react";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function App() {
  const [active, setActive] = useState<string>("#home");

  return (
    <div className="bg-zinc-50 text-zinc-900 antialiased dark:bg-black dark:text-zinc-100">
      <Nav active={active} setActive={setActive} />
      <main
        className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-32 px-6 pb-24 pt-36 sm:pt-40"
        onScrollCapture={() => {
          // Update active section while scrolling
          const sections = [
            "#home",
            "#about",
            "#experience",
            "#contact",
          ] as const;
          const offsets = sections
            .map((href) => {
              const el = document.querySelector(href) as HTMLElement | null;
              if (!el) return { href, top: Infinity };
              const rect = el.getBoundingClientRect();
              return { href, top: Math.abs(rect.top) };
            })
            .sort((a, b) => a.top - b.top);
          if (offsets.length) setActive(offsets[0].href);
        }}
      >
        <Home />
        <About />
        <Experience />
        <Contact />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}



