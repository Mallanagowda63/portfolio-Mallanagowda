import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/experience';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative bg-dark-900/40">
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
            <span>// PROFESSIONAL WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Hands-on professional software engineering experience in frontend optimization, API integration, and collaborative Agile workflows.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
        </motion.div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800 relative overflow-hidden"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Highlight ribbon */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/10 via-emerald-500/5 to-transparent rounded-bl-full pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/80">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.role}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {exp.company}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-dark-950 border border-slate-800 text-slate-300 text-xs font-mono self-start md:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{exp.date}</span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-3 mb-6">
                {exp.description.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                      {point.includes('30%') ? (
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      )}
                    </div>
                    <p className={`text-sm sm:text-base leading-relaxed ${point.includes('30%') ? 'text-slate-100 font-medium' : 'text-slate-300'}`}>
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-4 border-t border-slate-800/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider mr-2">TECHNOLOGIES:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-mono font-medium"
                  >
                    {tech}
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
