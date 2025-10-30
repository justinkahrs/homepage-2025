import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import handleScroll from "@/utils/handleScroll";
type NavItem = {
  label: string;
  href: string;
};
const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
interface NavProps {
  active: string;
  setActive: (href: string) => void;
  setPendingTarget: (href: string | null) => void;
}
function Nav({ active, setActive, setPendingTarget }: NavProps) {
  // Opacity for the edge labels (1 at top → 0 after ~300px)
  const [edgeOpacity, setEdgeOpacity] = useState(1);
  useEffect(() => {
    const handleScrollY = () => {
      const y = typeof window !== "undefined" ? window.scrollY : 0;
      const next = Math.max(0, Math.min(1, 1 - y / 300)); // fade over 300px
      setEdgeOpacity(next);
    };
    handleScrollY(); // initialize on mount
    window.addEventListener("scroll", handleScrollY, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 mx-auto mt-6 flex w-full max-w-4xl items-center justify-center px-4">
      <div className="flex w-full items-center justify-between  border border-zinc-200/50 bg-white/70 px-3 py-2 backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/60">
        <div
          className="hidden pl-2 text-lg font-bold tracking-tight text-zinc-900 transition-opacity duration-300 dark:text-zinc-300 sm:block font-[Noto_Serif]"
          style={{ opacity: edgeOpacity }}
        >
          Justin Kahrs
        </div>
        <ul className="flex w-full items-center justify-between gap-1 sm:w-auto">
          {NAV.map((item) => (
            <li key={item.href}>
              <button
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition ${
                  active === item.href
                    ? "text-white dark:text-black"
                    : "text-zinc-700 hover:bg-zinc-200/50 dark:text-zinc-300 dark:hover:bg-zinc-800/80"
                }`}
                onClick={() => {
                  const id = item.href.replace("#", "");
                  const el =
                    typeof document !== "undefined"
                      ? document.getElementById(id)
                      : null;
                  if (el) {
                    setPendingTarget(item.href);
                  }
                  setActive(item.href);
                  handleScroll(item.href);
                }}
              >
                {active === item.href && (
                  <motion.span
                    layoutId="navActive"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: "orange" }}
                    transition={{
                      type: "tween",
                      stiffness: 500,
                      damping: 30,
                      mass: 1,
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="hidden pr-2 sm:block" style={{ opacity: edgeOpacity }}>
          <div className="w-[150px]" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
