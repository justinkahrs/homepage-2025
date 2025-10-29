"use client";
import { useEffect, useState } from "react";

import About from "@/components/About";
import Experience from "@/components/Experience";
import Home from "@/components/Home";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default function App() {
  const [active, setActive] = useState<string>("#home");
  // When navigating via clicks, hold the intended target until it's in view.
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);
  // Safety: if the target element doesn't exist or never intersects, clear the lock.
  useEffect(() => {
    if (!pendingTarget) return;
    const id = pendingTarget.replace("#", "");
    const el =
      typeof document !== "undefined" ? document.getElementById(id) : null;
    // If the element isn't in the DOM, drop the pending lock so observer can work normally.
    if (!el) {
      setPendingTarget(null);
      return;
    }
    // Failsafe: clear after 2s in case intersection never triggers (e.g., layout/height edge cases).
    const timeout = window.setTimeout(() => setPendingTarget(null), 2000);
    return () => window.clearTimeout(timeout);
  }, [pendingTarget]);
  // Keep nav in sync with scroll position using IntersectionObserver.
  useEffect(() => {
    const ids = ["home", "about", "experience", "contact"] as const;
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (els.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        // If we're in a click-initiated scroll, only react to that target.
        if (pendingTarget) {
          const targetId = pendingTarget.replace("#", "");
          const hit = entries.find(
            (e) => e.target.id === targetId && e.isIntersecting,
          );
          if (hit) {
            setActive(`#${hit.target.id}`);
            setPendingTarget(null);
          }
          // While pending, ignore other intersections to avoid flicker.
          return;
        }
        // Normal behavior: choose the most visible section.
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const top = visible[0];
          setActive(`#${top.target.id}`);
        } else {
          // Fallback: pick the section closest to the viewport top.
          const closest = entries
            .slice()
            .sort(
              (a, b) =>
                Math.abs(a.boundingClientRect.top) -
                Math.abs(b.boundingClientRect.top),
            )[0];
          if (closest) setActive(`#${closest.target.id}`);
        }
      },
      {
        // Focus on the middle band of the viewport to avoid early switches.
        root: null,
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.25, 0.5, 0.75],
      },
    );
    els.forEach((el) => observer.observe(el));
    const onScrollBottomCheck = () => {
      if (pendingTarget) return;
      const doc = document.documentElement;
      const atBottom =
        Math.ceil(window.innerHeight + window.scrollY) >= doc.scrollHeight;
      if (atBottom) {
        setActive("#contact");
      }
    };
    window.addEventListener("scroll", onScrollBottomCheck, { passive: true });
    onScrollBottomCheck();

    return () => {
      window.removeEventListener("scroll", onScrollBottomCheck);
      observer.disconnect();
    };
  }, [pendingTarget]);
  return (
    <div className="bg-zinc-50 text-zinc-900 antialiased dark:bg-black dark:text-zinc-100">
      <Nav
        active={active}
        setActive={setActive}
        setPendingTarget={setPendingTarget}
      />
      <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-32 px-6 pb-24 pt-36 sm:pt-40">
        <Home />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
