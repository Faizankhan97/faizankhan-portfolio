"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Tag, X } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tags: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Investiya",
      desc: "Trade Forex, CFDs, stocks, commodities and more with Investiya. Access advanced trading tools, competitive spreads and a secure trading environment.",
      tags: ["React.js", "Material UI", "Next.js", "Socket.io", "REST APIs"],
    },
    {
      title: "Oxaar",
      desc: "Oxaar is an enterprise-grade fintech and brokerage infrastructure platform designed for forex, crypto, and multi-asset trading businesses",
      tags: ["React.js", "Material UI", "Next.js"],
    },
    {
      title: "Green Clinic",
      desc: "Green Clinic most commonly refers to the digital electronic medical record (EMR) and telemedicine platform launched in Pakistan by Getz Pharma in collaboration with Augment Care",
      tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    },
    {
      title: "MS Pro",
      desc: "Developed a website for online video calls with a doctor to do online consultations and take appointments.",
      tags: ["HTML5", "CSS3", "React.js", "Bootstrap", "JavaScript"],
    },
    {
      title: "Dominos",
      desc: "Developed and implemented for online gaming using Bitcoin.",
      tags: ["HTML5", "Bootstrap", "React"],
    },
  ];

  return (
    <section
      id="projects"
      aria-label="Featured Software Projects"
      className="py-20 bg-slate-900/30"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A selection of complex enterprise applications and systems I've
            engineered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/40 rounded-xl overflow-hidden border border-slate-700/50 hover:border-violet-500/50 group transition-all flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-8 group-hover:from-slate-800 group-hover:to-violet-900/20 transition-colors">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-200 mb-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-1 text-xs px-2 py-1 bg-slate-900 text-slate-300 rounded border border-slate-700"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
