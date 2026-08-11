import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Cloud, Cpu } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      number: "01",
      title: "Full-Stack Development",
      description: "Frontend, backend, APIs, authentication and databases.",
      icon: Layers,
      color: "from-cyan-500 to-blue-500",
      accent: "text-cyan-400"
    },
    {
      number: "02",
      title: "Cloud Engineering",
      description: "AWS, Docker, deployment, infrastructure and production systems.",
      icon: Cloud,
      color: "from-emerald-500 to-teal-500",
      accent: "text-emerald-400"
    },
    {
      number: "03",
      title: "Problem Solving",
      description: "Turning real-world requirements into practical technical solutions.",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500",
      accent: "text-indigo-400"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="space-y-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <span>// PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Text Content */}
          <motion.div
            className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed font-normal"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800/90 text-slate-200">
              I am a <strong className="text-slate-100 font-semibold">Computer Science and Engineering student</strong> specializing in <span className="text-cyan-400 font-medium">Cyber Security</span>, with a strong interest in <span className="text-emerald-400 font-medium">Full-Stack Development</span> and <span className="text-cyan-400 font-medium">Cloud Engineering</span>.
            </p>

            <p>
              I enjoy building practical software products and understanding the infrastructure behind them. My experience covers frontend development, backend APIs, databases, authentication, containerization, cloud deployment, and application architecture.
            </p>

            <p>
              I focus on writing maintainable code, designing scalable systems, and turning real-world ideas into working products.
            </p>

            <div className="pt-2 text-cyan-400 font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Currently looking for opportunities where I can contribute as a Full-Stack Developer or Cloud Engineer.</span>
            </div>
          </motion.div>

          {/* 3 Professional Highlight Cards */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((card) => {
              const IconComp = card.icon;
              return (
                <div
                  key={card.number}
                  className="glass-card glass-card-hover rounded-xl p-5 border border-slate-800 flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0">
                    <span className="font-mono text-xs font-bold text-slate-500 block mb-1">
                      {card.number}
                    </span>
                    <div className={`p-2.5 rounded-lg bg-dark-950 border border-slate-800 ${card.accent}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-normal">
                      "{card.description}"
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
