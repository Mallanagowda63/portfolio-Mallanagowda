import React from 'react';
import { motion } from 'framer-motion';
import { Target, Layers, Cloud, Server } from 'lucide-react';

export const CareerFocus: React.FC = () => {
  const roles = [
    { title: "Full-Stack Development", icon: Layers, color: "text-cyan-400" },
    { title: "Cloud Engineering", icon: Cloud, color: "text-emerald-400" },
    { title: "Cloud/DevOps Engineering", icon: Server, color: "text-indigo-400" }
  ];

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="glass-card rounded-2xl p-6 sm:p-10 border border-slate-800 relative overflow-hidden bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle Ambient Radial */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase font-semibold">
                <Target className="w-3.5 h-3.5" />
                <span>CAREER OBJECTIVE & ALIGNMENT</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                What I'm Looking For
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                "I'm looking for an environment where I can work on real-world products, contribute to scalable systems, learn from experienced engineers, and grow as a software and cloud engineer."
              </p>
            </div>

            <div className="lg:col-span-6 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">TARGET FULL-TIME & INTERNSHIP ROLES:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {roles.map((r) => {
                  const RoleIcon = r.icon;
                  return (
                    <div
                      key={r.title}
                      className="bg-dark-950/90 rounded-xl p-4 border border-slate-800 flex flex-col items-center text-center space-y-2 group hover:border-cyan-500/40 transition-colors"
                    >
                      <div className={`p-2 rounded-lg bg-dark-900 border border-slate-800 ${r.color}`}>
                        <RoleIcon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-300">
                        {r.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
