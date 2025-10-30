import { motion } from "motion/react";
import { Gloock } from "next/font/google";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });
function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 w-full">
      <div className="border border-zinc-200/60 bg-white p-8 py-40 ">
        <div className="pb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-5xl text-left text-gray-300 italic tracking-tight"
          >
            Professional
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className={`${gloock.className} tracking-wider text-8xl font-semibold text-left text-green-300`}
          >
            Experience
          </motion.h2>
        </div>
        <a
          className="bg-zinc-900 sm:px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-zinc-800 my-6"
          download
          href="/Justin_Kahrs_resume.pdf"
          type="button"
        >
          Download Resume (PDF)
        </a>
        <div className="flex justify-end">
          <ol className="relative mt-6 space-y-8 border-l border-green-300 w-1/2">
            {[
              {
                role: "Creator / Solo-Developer",
                company: "o11n (AI-augmented IDE)",
                period: "Apr 2025 — Present",
                blurb:
                  "Designed and built o11n, an AI-augmented IDE that speeds up development using a custom prompting interface and LLM integrations.",
                link: "https://o11n.life",
              },
              {
                role: "Senior Full-Stack Engineer",
                company: "Amastay AI",
                period: "Mar 2025 — Jun 2025",
                blurb: (
                  <>
                    Built the product POC (
                    <a
                      href="https://demo.amastay.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      demo.amastay.ai
                    </a>
                    ) and the Next.js dashboard for hosts to manage properties.
                  </>
                ),
                link: "https://amastay.ai",
              },
              {
                role: "Senior Frontend Engineer",
                company: "Ridecell",
                period: "Jan 2018 — Oct 2024",
                blurb:
                  "Shipped next-generation shared-mobility solutions and maintained fleet-automation, booking, and operations products for a Fortune Global 500 client.",
                link: "https://www.ridecell.com",
              },
              {
                role: "Senior Frontend Engineer",
                company: "Indiana University",
                period: "Jul 2015 — Jan 2018",
                blurb:
                  "Built internal data tools and dashboards, integrated Tableau/Denodo, and followed HIPAA/FERPA-compliant practices.",
                link: "https://www.iu.edu",
              },
              {
                role: "Server Support Technician",
                company: "GVSU",
                period: "Aug 2010 — Jul 2015",
                blurb:
                  "Provisioned and maintained physical servers and wrote automation scripts for routine maintenance.",
                link: "https://www.gvsu.edu",
              },
            ].map((job, i) => (
              <li key={i} className="ml-2">
                <span className="absolute -left-[7px] mt-0 h-3 w-3 rounded-full border border-zinc-300 bg-white" />
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-lg font-medium">
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {job.role}{" "}
                        <span className="text-zinc-500">— {job.company}</span>
                      </a>
                    </h3>
                    <span className="text-sm text-zinc-500">{job.period}</span>
                  </div>
                  <p className="mt-2 text-zinc-600">{job.blurb}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
export default Experience;
