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
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen border border-zinc-200/60 bg-white py-40 mb-30">
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
              className={`${gloock.className} tracking-wider text-5xl font-semibold text-left text-green-300 uppercase`}
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

          <ul className="timeline timeline-vertical timeline-compact mt-20">
            {jobs.map((job, i) => (
              <li key={i}>
                {i !== 0 && <hr />}
                <div className="timeline-start text-sm text-zinc-500">
                  {job.period}
                </div>
                <div className="timeline-middle text-green-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 120 150"
                    x="0px"
                    y="0px"
                    className="h-5 w-5"
                  >
                    <circle cx="60" cy="60" r="60" fill="currentColor" />
                    <polygon
                      points="32.06 37.95 17.65 52.36 10 60.01 17.65 67.64 32.06 82.05 39.71 74.42 25.3 60.01 39.71 45.6 32.06 37.95"
                      fill="#ffffff"
                    />
                    <polygon
                      points="102.35 52.36 87.94 37.95 80.29 45.6 94.7 60.01 80.29 74.42 87.94 82.05 102.35 67.64 110 60.01 102.35 52.36"
                      fill="#ffffff"
                    />
                    <rect
                      x="27.91"
                      y="54.59"
                      width="64.19"
                      height="10.81"
                      transform="translate(-13.48 102.43) rotate(-75)"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
                <div className="timeline-end">
                  <h3 className="text-lg font-medium leading-snug">
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {job.role}{" "}
                      <span className="text-zinc-500 text-1xl">
                        — {job.company}
                      </span>
                    </a>
                  </h3>
                  <div className="mt-2 text-zinc-600 text-sm">{job.blurb}</div>
                </div>
                {i !== jobs.length - 1 && <hr />}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Quote />
    </section>
  );
}

export default Experience;
