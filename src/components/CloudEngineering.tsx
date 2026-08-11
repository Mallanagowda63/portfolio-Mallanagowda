import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Database, Rocket, ArrowRight, ShieldCheck, Cpu, Terminal, GitBranch } from 'lucide-react';

export const CloudEngineering: React.FC = () => {
  const cloudCards = [
    {
      title: "AWS Infrastructure",
      icon: Cloud,
      color: "text-amber-400",
      skills: ["AWS EC2", "Cloud Deployment", "Infrastructure Fundamentals"]
    },
    {
      title: "Docker & Containerization",
      icon: Server,
      color: "text-cyan-400",
      skills: ["Containerization", "Docker Compose", "Application Environments"]
    },
    {
      title: "Cloud Databases & Caching",
      icon: Database,
      color: "text-emerald-400",
      skills: ["MongoDB Atlas", "Redis", "Database Integration"]
    },
    {
      title: "Deployment Platforms",
      icon: Rocket,
      color: "text-indigo-400",
      skills: ["Vercel", "Netlify", "Railway", "Google Cloud Run"]
    }
  ];

  const pipelineSteps = [
    { label: "Code", sub: "Local Workspace", icon: Terminal, color: "border-cyan-500/40 text-cyan-400" },
    { label: "Git", sub: "Version Control", icon: GitBranch, color: "border-indigo-500/40 text-indigo-400" },
    { label: "Docker", sub: "Container Build", icon: Server, color: "border-blue-500/40 text-blue-400" },
    { label: "CI/CD", sub: "Automated Testing", icon: Cpu, color: "border-amber-500/40 text-amber-400" },
    { label: "Cloud", sub: "AWS / Cloud Host", icon: Cloud, color: "border-emerald-500/40 text-emerald-400" },
    { label: "Production", sub: "Live Infrastructure", icon: Rocket, color: "border-teal-500/40 text-teal-400" }
  ];

  return (
    <section id="cloud" className="py-20 relative bg-dark-900/40">
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
            <span>// INFRASTRUCTURE & DEPLOYMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Cloud & Engineering
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl font-medium">
            "I don't only build applications — I also work with the infrastructure required to deploy and run them."
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cloudCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.title}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl bg-dark-950 border border-slate-800 ${card.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                    {card.skills.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Pipeline Box */}
        <motion.div
          className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 space-y-6"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                END-TO-END DEPLOYMENT LIFECYCLE
              </span>
              <h3 className="text-xl font-bold text-slate-100">
                Production Cloud Pipeline
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
              CI/CD & Container Orchestration
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center justify-center pt-2">
            {pipelineSteps.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <React.Fragment key={step.label}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className={`flex flex-col items-center text-center p-4 rounded-xl bg-dark-950 border ${step.color} shadow-lg relative group cursor-default`}
                  >
                    <div className="p-2.5 rounded-lg bg-dark-900 border border-slate-800 mb-2 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all duration-200">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">{step.label}</span>
                    <span className="text-[10px] text-slate-400 font-mono mt-0.5">{step.sub}</span>
                  </motion.div>
                  {sIdx < pipelineSteps.length - 1 && (
                    <div className="hidden md:flex justify-center">
                      <ArrowRight className="w-4 h-4 text-cyan-400 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
