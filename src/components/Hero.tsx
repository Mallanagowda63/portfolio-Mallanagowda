import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Github, Linkedin, Mail, Phone, Server, Code2, Cloud, Terminal } from 'lucide-react';
import { personalConfig } from '../data/config';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Animated Glowing Orbs & Background Pattern */}
      <div className="absolute inset-0 bg-hero-grid bg-center opacity-30 pointer-events-none" />
      <div className="animated-glow-orb top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-tr from-cyan-500/20 via-emerald-500/15 to-indigo-500/20" />
      <div className="animated-glow-orb bottom-10 right-10 w-80 h-80 bg-cyan-500/10" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wide shadow-sm shadow-emerald-500/10 hover:border-emerald-400/60 transition-colors">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalConfig.availabilityBadge}</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100">
                {personalConfig.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-gradient-cyan tracking-tight">
                {personalConfig.primaryTitle}
              </p>
            </div>

            {/* Supporting & Longer Description */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              "{personalConfig.supportingText}"
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-light">
              {personalConfig.professionalSummary}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-dark-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalConfig.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700 hover:border-cyan-500/50 shadow-md transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social & Contact Links */}
            <div className="pt-4 flex flex-wrap items-center gap-5 border-t border-slate-800/80 text-xs text-slate-400">
              <span className="font-mono text-slate-500">CONNECT:</span>
              <a
                href={`tel:${personalConfig.phone}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalConfig.phone}</span>
              </a>
              <a
                href={personalConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalConfig.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo + Code & Architecture Mock Widget */}
          <motion.div
            className="lg:col-span-5 relative space-y-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Profile Photo Header Card */}
            <div className="glass-card rounded-2xl p-4 border border-slate-800/80 shadow-xl flex items-center gap-4 relative overflow-hidden group">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-[2px] bg-gradient-to-br from-cyan-500 via-emerald-400 to-indigo-500 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={personalConfig.profileImage}
                    alt={personalConfig.name}
                    className="w-full h-full object-cover object-center rounded-[14px]"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-dark-950 border-2 border-dark-950 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-extrabold text-slate-100 font-sans tracking-tight">
                  {personalConfig.name}
                </h3>
                <p className="text-xs font-mono text-cyan-400 font-semibold">
                  FULL-STACK & CLOUD ENGINEER
                </p>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Bangalore, India</span>
                </div>
              </div>
            </div>

            {/* Interactive Code Snippet Window */}
            <div className="glass-card rounded-2xl p-5 border border-slate-800/80 shadow-2xl relative overflow-hidden group">
              {/* Code window top bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>engineer.config.ts</span>
                </div>
              </div>

              {/* Interactive Code snippet preview */}
              <div className="font-mono text-xs space-y-2 leading-relaxed text-slate-300">
                <div>
                  <span className="text-purple-400">interface</span>{' '}
                  <span className="text-yellow-300">EngineerProfile</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">developer</span>: <span className="text-emerald-300">"Mallanagowda P"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">roles</span>: [<span className="text-emerald-300">"Full-Stack"</span>, <span className="text-emerald-300">"Cloud"</span>, <span className="text-emerald-300">"DevOps"</span>];
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300">stack</span>: &#123;
                </div>
                <div className="pl-8 text-slate-400">
                  frontend: [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"TypeScript"</span>, <span className="text-cyan-300">"Tailwind"</span>],
                </div>
                <div className="pl-8 text-slate-400">
                  backend: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express"</span>, <span className="text-emerald-300">"REST APIs"</span>],
                </div>
                <div className="pl-8 text-slate-400">
                  cloud: [<span className="text-yellow-300">"AWS EC2"</span>, <span className="text-cyan-300">"Docker"</span>, <span className="text-emerald-300">"MongoDB Atlas"</span>]
                </div>
                <div className="pl-4">&#125;;</div>
                <div className="pl-4">
                  <span className="text-purple-400">status</span>: <span className="text-emerald-400">"READY_TO_DEPLOY"</span>;
                </div>
                <div>&#125;</div>
              </div>

              {/* Floating badges */}
              <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2">
                <div className="bg-slate-900/90 rounded-lg p-2 text-center border border-slate-800">
                  <Code2 className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                  <span className="text-[10px] font-mono text-slate-300 block">Full-Stack</span>
                </div>
                <div className="bg-slate-900/90 rounded-lg p-2 text-center border border-slate-800">
                  <Cloud className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                  <span className="text-[10px] font-mono text-slate-300 block">Cloud Ready</span>
                </div>
                <div className="bg-slate-900/90 rounded-lg p-2 text-center border border-slate-800">
                  <Server className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                  <span className="text-[10px] font-mono text-slate-300 block">DevOps</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
