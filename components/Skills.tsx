import { motion } from "motion/react";
import TechCard from "./TechCard";
import { Gloock } from "next/font/google";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });
const SKILL_SECTIONS = [
    {
        title: "Frontend",
        items: ["React", "Next.js", "Tailwind/DaisyUI", "Framer Motion"],
    },
    {
        title: "Backend",
        items: ["Python", "Django", "REST", "PostgreSQL"],
    },
    {
        title: "Systems",
        items: ["Rust", "CLI tooling", "Perf-minded code", "Github Actions"],
    },
    {
        title: "Testing & Ops",
        items: [
            "Cypress/Jest",
            "CI/CD",
            "Performance budgets",
            "Accessibility as baseline",
        ],
    },
];
function Skills() {
    return (
        <section id="skills" className="scroll-mt-28">
            <div className="p-8 py-40 pb-11">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5 }}
                            className={`${gloock.className} tracking-wider text-5xl font-semibold text-left text-green-300 uppercase`}
                        >
                            Skills
                        </motion.h2>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl text-left text-gray-300 italic tracking-tight uppercase"
                        >
                            &amp; Technology
                        </motion.h2>
                    </div>
                    <div className="sm:max-w-sm sm:text-left">
                        <p className="text-2xl text-white">
                            I design for humans and code for scale. My services are accessible and dependable because I give a <span
                                className="relative inline-block cursor-pointer select-none group"
                                tabIndex={0}
                            >
                                <span className="relative z-10">shit</span>
                                <span className="absolute inset-0 z-20 rounded-sm bg-white/20 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-0 group-focus:opacity-0" />
                            </span>.
                        </p>
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2">
                    {SKILL_SECTIONS.map((section) => (
                        <TechCard
                            key={section.title}
                            title={section.title}
                            items={section.items}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Skills;
