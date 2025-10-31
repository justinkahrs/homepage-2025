import handleScroll from "@/utils/handleScroll";
import { motion } from "motion/react";
import { Gloock } from "next/font/google";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });

function Home() {
    return (
        <section id="home" className="scroll-mt-28">
            <div className="flex justify-center">
                <div className="p-10 text-white text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`text-balance text-4xl font-semibold tracking-tight sm:text-5xl`}
                    >
                        Hi, I’m{" "}
                        <motion.span
                            className={`relative ${gloock.className} text-green-300`}
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
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                        className="mt-4 text-4xl text-gray-300 italic tracking-tight "
                    >
                        I'm a senior software engineer.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                        className="mt-8 flex flex-wrap gap-3 justify-center"
                    >
                        <button
                            className="w-60 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800"
                            onClick={() => handleScroll("#experience")}
                            type="button"
                        >
                            View Experience
                        </button>
                        <button
                            // type="button"
                            onClick={() => handleScroll("#contact")}
                            className="w-60 border font-bold border-zinc-300 bg-transparent px-5 py-2.5 text-sm text-white transition hover:bg-zinc-800"
                        >
                            CONTACT
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
export default Home;
