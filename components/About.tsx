import { motion } from "motion/react";
import TechCard from "./TechCard";
function About() {

    return (
        <section id="about" className="scroll-mt-28">
            <div className="rounded-3xl border border-zinc-200/60 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl font-semibold"
                >
                    About
                </motion.h2>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                    I build modern, accessible interfaces and dependable services. I
                    love crisp UX, clean abstractions, and shipping fast without
                    sacrificing quality.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <TechCard
                        title="Frontend"
                        items={["React", "Next.js", "Tailwind CSS", "Framer Motion"]}
                    />
                    <TechCard
                        title="Backend"
                        items={["Python", "Django", "REST", "PostgreSQL"]}
                    />
                    <TechCard
                        title="Systems"
                        items={["Rust", "CLI tooling", "Perf-minded code"]}
                    />
                </div>
            </div>
        </section>
    )
}
export default About