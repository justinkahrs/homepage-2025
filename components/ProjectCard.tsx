import React from "react";
import { motion } from "motion/react";
type Props = {
  href: string;
  title: string;
  subtitle: string;
  src: string;
};
export default function ProjectCard({ href, title, src, subtitle }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="text-gray-300"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-2xl border-2 border-white/10
          bg-black/50 backdrop-blur-sm transition transform hover:-translate-y-1 hover:shadow-md
          focus:outline-none focus:ring-2 focus:ring-white/20"
      >
        <div className="relative h-40 w-full bg-white/5 border-b border-white/10">
          <img src={src} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl uppercase font-extrabold">{title}</h3>
          <p className="mt-1 text-sm text-white/80">{subtitle}</p>
        </div>
      </a>
    </motion.div>
  );
}
