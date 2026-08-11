import React from 'react';
import { motion } from 'framer-motion';
import { educationData, certificationsList } from '../data/config';
import { GraduationCap, Award, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Education Column */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
                <span>// ACADEMIC FOUNDATION</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-100">
                Education
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-5 relative overflow-hidden">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800/80">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold">
                    <GraduationCap className="w-4 h-4" />
                    <span>{educationData.degree}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {educationData.specialization}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {educationData.institution}
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-950 border border-slate-800 text-emerald-400 font-mono text-xs flex-shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Expected {educationData.expectedGraduation}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400 uppercase">ACADEMIC CGPA:</span>
                  <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-300 font-mono font-extrabold text-base">
                    {educationData.cgpa} / 10.0
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Cyber Security Specialization
                </span>
              </div>
            </div>
          </motion.div>

          {/* Certifications Column */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
                <span>// INDUSTRY CREDENTIALS</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-100">
                Certifications
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
            </div>

            <div className="space-y-3">
              {certificationsList.map((cert) => (
                <div
                  key={cert.title}
                  className="glass-card glass-card-hover rounded-xl p-4 border border-slate-800 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-dark-950 border border-slate-800 text-cyan-400 group-hover:text-emerald-400 transition-colors flex-shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="space-y-0.5 text-left">
                      <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
