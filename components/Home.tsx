import handleScroll from "@/utils/handleScroll";
import { motion } from "motion/react";

function Home() {
    return (
        <section id="home" className="scroll-mt-28">
            <div className="p-12 text-white">
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl font-[Noto_Serif]"
                >
                    Hi, I’m{" "}
                    <motion.span
                        className="relative "
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 8 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.6, ease: "easeOut" },
                            },
                        }}
                    >
                        Justin Kahrs

                    </motion.span>
                    .
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                    className="mt-4 text-4xl text-white "
                >
                    I'm a senior software engineer.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                    className="mt-6 max-w-prose text-pretty text-white "
                >
                    I specialize in frontend development while building seamlessly across the stack.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                    className="mt-8 flex flex-wrap gap-3"
                >
                    <button
                        className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                        onClick={() => handleScroll("#experience")}
                        type="button"
                    >
                        View Experience
                    </button>
                    <button
                        onClick={() => handleScroll("#contact")}
                        className="rounded-full border border-zinc-300 bg-transparent px-5 py-2.5 text-sm font-medium text-white  transition hover:bg-zinc-800 dark:border-zinc-700 dark:bg-transparent dark:hover:bg-zinc-300"
                    >
                        Get in Touch
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
export default Home;
