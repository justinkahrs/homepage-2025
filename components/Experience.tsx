import { motion } from "motion/react";
import { Gloock } from "next/font/google";
import Quote from "./Quote";
const gloock = Gloock({ subsets: ["latin"], weight: "400" });
function Experience() {
  const jobs = [
    {
      role: "Creator / Solo-Developer",
      company: "o11n (AI-augmented IDE)",
      period: "April 2025 — Present",
      blurb:
        "Designed and built o11n, an AI-augmented IDE that speeds up development using a custom prompting interface and LLM integrations.",
      link: "https://o11n.life",
    },
    {
      role: "Senior Full-Stack Engineer",
      company: "Amastay AI",
      period: "March 2025 — June 2025",
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
      period: "January 2018 — October 2024",
      blurb:
        "Shipped next-generation shared-mobility solutions and maintained fleet-automation, booking, and operations products for a Fortune Global 500 client.",
      link: "https://www.ridecell.com",
    },
    {
      role: "Senior Frontend Engineer",
      company: "Indiana University",
      period: "July 2015 — January 2018",
      blurb:
        "Built internal data tools and dashboards, integrated Tableau/Denodo, and followed HIPAA/FERPA-compliant practices.",
      link: "https://www.iu.edu",
    },
    {
      role: "Server Support Technician",
      company: "Grand Valley State University",
      period: "August 2010 — July 2015",
      blurb:
        "Provisioned and maintained physical servers and wrote automation scripts for routine maintenance.",
      link: "https://www.gvsu.edu",
    },
  ];
  return (
    <section id="experience" className="scroll-mt-28 w-full">
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border border-zinc-200/60 bg-white py-40 mb-30 ">
        <div className="mx-auto max-w-4xl px-6 sm:px-12">
          <div className="pb-9">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-left text-gray-300 italic tracking-tight uppercase"
            >
              Professional
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className={`${gloock.className} tracking-wider text-5xl font-semibold text-left text-green-900 uppercase`}
            >
              Experience
            </motion.h2>
          </div>
          <a
            className="text-center p-2 text-sm"
            download
            href="/Justin_Kahrs_resume.pdf"
            type="button"

          >
            Download Resume (PDF)
          </a>
          <div className="flex flex-col items-center lg:flex-row lg:justify-end">
            <ol className="relative mt-11 w-full space-y-11 border-l border-green-300 lg:w-1/2">
              {jobs.map((job, i) => (
                <li key={i} className="ml-2 relative">
                  <span className="absolute -left-[7px] translate-y-2.5 -translate-x-1.5 h-2 w-2 rounded-full border border-green-900 bg-green-900" />
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
                          <span className="text-zinc-500 text-1xl">— {job.company}</span>
                        </a>
                      </h3>
                      <span className="text-sm text-zinc-500">
                        {job.period}
                      </span>
                    </div>
                    <p className="mt-2 text-zinc-600">{job.blurb}</p>
                  </motion.div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <Quote />
    </section>
  );
}
export default Experience;
