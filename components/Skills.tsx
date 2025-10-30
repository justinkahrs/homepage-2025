import { motion } from "motion/react";
import TechCard from "./TechCard";
import { Gloock } from "next/font/google";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });
function Skills() {
    return (
        <section id="skills" className="scroll-mt-28">
            <div className="p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex flex-col">
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5 }}
                            className={`${gloock.className} tracking-wider text-8xl font-semibold text-left text-green-300`}
                        >
                            Skills
                        </motion.h2>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5 }}
                            className="text-5xl text-left text-gray-300 italic tracking-tight"
                        >
                            &amp; Technology
                        </motion.h2>
                    </div>
                    <div className="sm:max-w-sm sm:text-left">
                        <p className="text-2xl text-white">
                            I design for humans and code for scale. Dependable, accessible -
                            services are fueled by the fucks I give.
                        </p>
                    </div>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2">
                    <TechCard
                        title="Frontend"
                        items={["React", "Next.js", "Tailwind/DaisyUI", "Framer Motion"]}
                    />
                    <TechCard
                        title="Backend"
                        items={["Python", "Django", "REST", "PostgreSQL"]}
                    />
                    <TechCard
                        title="Systems"
                        items={[
                            "Rust",
                            "CLI tooling",
                            "Perf-minded code",
                            "Github Actions",
                        ]}
                    />
                    <TechCard
                        title="Systems"
                        items={[
                            "Rust",
                            "CLI tooling",
                            "Perf-minded code",
                            "Github Actions",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
export default Skills;
