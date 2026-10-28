"use client";

import { motion } from "framer-motion";
import { Database, Globe, Server, Cpu } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Globe className="w-6 h-6 text-violet-400" />,
      items: [
        "React.js",
        "HTML5",
        "CSS3",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5/CSS3",
        "Material UI",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Backend & APIs",
      icon: <Server className="w-6 h-6 text-pink-400" />,
      items: ["Node.js", "Express.js", "RESTful APIs"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      items: ["MongoDB"],
    },
    {
      category: "Tools & Concepts",
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      items: [
        "Git/GitHub",
        "Postman",
        "VS Code",
        "Performance Optimization",
        "Scalable Architecture",
      ],
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Faizan Khan"
      className="py-20 bg-slate-900/30 relative"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            I am a{" "}
            <span className="text-violet-400 font-semibold">
              Frontend Engineer
            </span>{" "}
            specializing in React and Next.js, with strong expertise in
            JavaScript and problem-solving. Experienced in designing and
            developing user-friendly, responsive web applications with a focus
            on performance and cross-browser compatibility. Proven ability to
            collaborate with cross-functional teams, including designers and
            backend developers, to deliver seamless user experiences. Skilled in
            implementing best practices to optimize application performance and
            enhance usability. Strong team player with leadership capabilities
            to drive successful project outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-violet-500/50 transition-colors group"
            >
              <div className="mb-4 bg-slate-900/50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-slate-200">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm px-2 py-1 bg-slate-700/50 text-slate-300 rounded hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
