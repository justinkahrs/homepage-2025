import handleScroll from "@/utils/handleScroll"
import { motion } from "motion/react"


function Home() {

    return (
        <section id="home" className="scroll-mt-28">
            <div className="relative overflow-hidden p-10">
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl"
                >
                    Hi, I’m{" "}
                    <span className="underline decoration-orange-300 dark:decoration-orange-700">
                        Justin
                    </span>
                    .
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    className="mt-4 text-lg text-zinc-600 dark:text-zinc-400"
                >
                    Senior Software Engineer crafting polished web experiences and
                    scalable systems.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    className="mt-6 max-w-prose text-pretty text-zinc-700 dark:text-zinc-300"
                >
                    I blend <strong>React/Next.js</strong> finesse with reliable
                    backend chops to ship fast, robust, and delightful products.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    className="mt-8 flex flex-wrap gap-3"
                >
                    <button
                        onClick={() => handleScroll("#experience")}
                        className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200"
                    >
                        View Experience
                    </button>
                    <button
                        onClick={() => handleScroll("#contact")}
                        className="rounded-full border border-zinc-300 bg-white/50 px-5 py-2.5 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:bg-zinc-800"
                    >
                        Get in Touch
                    </button>
                </motion.div>
            </div>
        </section>
    )
}
export default Home