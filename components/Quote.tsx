import { Gloock } from "next/font/google";
import { motion } from "framer-motion";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });
export default function Quote() {
  return (
    <section
      className="relative right-[50%] left-[50%] -mt-32 -mr-[50vw] -ml-[50vw]
        w-screen bg-green-300 px-6 py-40 text-black sm:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <div
          className="flex flex-col gap-4 sm:flex-row sm:items-center
            sm:justify-between"
        >
          <div className="flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className={`${gloock.className} text-left text-4xl font-semibold
                tracking-wider lg:text-5xl`}
            >
              Automating{" "}
              <em>
                <motion.span
                  className="bg-[linear-gradient(-35deg,#4ade80,#05240D)]
                    bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "100% 200%",
                    backgroundPosition: "0% 0%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "0% 50%", "0% 0%"],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  output
                </motion.span>
              </em>
              .
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className={`${gloock.className} mt-4 text-left text-4xl
                font-semibold tracking-wider lg:text-5xl`}
            >
              Building{" "}
              <em>
                <motion.span
                  className="bg-[linear-gradient(-35deg,#4ade80,#05240D)]
                    bg-clip-text text-transparent"
                  style={{
                    backgroundSize: "100% 200%",
                    backgroundPosition: "0% 0%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "0% 50%", "0% 0%"],
                  }}
                  transition={{
                    duration: 4,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  outcomes
                </motion.span>
              </em>
              .
            </motion.h2>
          </div>
          <div className="sm:max-w-sm sm:text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8 }}
              className="text-2xl text-black"
            >
              <span className="text-2xl font-extrabold">62%</span> of developers
              are frustrated by technical debt.
              <sup>
                <a
                  href="https://stackoverflow.blog/2025/01/01/developers-want-more-more-more-the-2024-results-from-stack-overflow-s-annual-developer-survey/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  [1]
                </a>
              </sup>{" "}
              I'm one of them. That’s why I build systems with clean
              abstractions and predictable patterns, so we move fast and
              sustainably.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
