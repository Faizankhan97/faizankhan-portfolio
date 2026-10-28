"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First item expanded by default

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const jobs = [
    {
      role: "Senior Frontend Developer",
      company: "Gateso",
      period: "Dec 2025 - Present",
      tech: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Material UI",
        "Socket.io",
        "Next.js",
        "Tailwind CSS",
      ],
      points: [
        "Built and optimized user interfaces for a fintech trading platform, focusing on performance, scalability, and real-time data presentation.",
        "Developed and maintained responsive web applications using Next.js, React.js, HTML5, and CSS3, ensuring cross-browser and cross-device compatibility.",
        "Worked closely with UI/UX designers and product teams to translate design requirements into high-quality, user-focused web interfaces",
      ],
    },
    {
      role: "Assistant Manager, Frontend Engineer",
      company: "Meri Sehat",
      period: "Dec 2023 - Dec 2025",
      tech: [
        "React.js",
        "Next.js",
        "Bootstrap",
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
      ],
      points: [
        "Engineered responsive, user-focused front-end solutions using core technologies including HTML, CSS, and ReactJS, ensuring compatibility across modern browsers and devices.",
        "Collaborated closely with UI/UX designers and backend developers to integrate features and ensure seamless functionality",
        "Built a web application for doctors, clinics, and medication management, focusing on intuitive navigation and accessibility to enhance user experience for medical professionals and patients.",
      ],
    },
    {
      role: "Senior UI/UX Developer",
      company: "Legendesk",
      period: "April 2023 - Dec 2023",
      tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
      points: [
        "Lead the design and development of UI/UX strategies, wireframes prototypes, and high-fidelity visual designs.",
        "Collaborate with product managers, developers, and other stakeholders to understand user needs and deliver elegant solutions",
        "My role is to translate creative software design concepts and ideas into reality using frontend technology. I have created multiple websites",
      ],
    },
    {
      role: "Assistant Software Engineer",
      company: "Cubix",
      period: "May 2021 - Mar 2023",
      tech: ["React.js", "HTML5", "CSS3", "Bootstrap", "WordPress"],
      points: [
        "Create UI using HTML and CSS. Making a WordPress website. Also creating functions using JavaScript, and working with frameworks like React.js",
        "Dominos: It is a gaming website where users can play the domino game with their domi coin, and it is created on ReactJS.",
        "PropChain: The website is for real estate where user can purchase and sell their home, and it’s created on Angular.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-20 relative"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
        </motion.div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-8">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-violet-500 z-10" />

              <div
                className="bg-slate-800/20 rounded-xl border border-slate-700/50 p-6 cursor-pointer hover:bg-slate-800/40 transition-colors"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {job.role}
                    </h3>
                    <p className="text-violet-400 font-medium text-lg">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-full whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    {job.period}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full border border-slate-700 bg-slate-900/30 text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Always visible brief or first item? No, let's just toggle the list */}
                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mt-2">
                  {expandedIndex === index ? (
                    <>
                      Hide Responsibilities <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      View Responsibilities <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </div>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-3 pt-4 border-t border-slate-700/50">
                        {job.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
