import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Check, ArrowRight, Server, Database, Cpu, Layers, ShieldCheck, AlertTriangle } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getStepIcon = (type: string) => {
    switch (type) {
      case 'client': return <Layers className="w-4 h-4 text-cyan-400" />;
      case 'api': return <Server className="w-4 h-4 text-emerald-400" />;
      case 'service': return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'db': return <Database className="w-4 h-4 text-purple-400" />;
      default: return <Server className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/80 backdrop-blur-md">
        
        {/* Backdrop click to close */}
        <motion.div
          className="fixed inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative bg-dark-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-8 space-y-8 text-left"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div>
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold mb-1">
                <span>PROJECT {project.number} DETAILED ARCHITECTURE</span>
                {project.statusBadge && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold tracking-wider animate-pulse flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {project.statusBadge}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
                {project.title}
              </h2>
              <p className="text-sm font-medium text-cyan-300 mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-dark-950 hover:bg-slate-800 text-slate-400 hover:text-slate-100 border border-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Links Row */}
          <div className="flex flex-wrap gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-dark-950 font-bold text-xs shadow-md"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 hover:border-cyan-500 text-slate-200 font-semibold text-xs transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>

          {/* Architecture Flow Diagram Box */}
          <div className="bg-dark-950 rounded-xl p-5 border border-slate-800/90 space-y-3">
            <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Server className="w-4 h-4" /> System Architecture & Execution Flow
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-3 overflow-x-auto pb-2">
              {project.architectureFlow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col items-center text-center p-3 rounded-lg bg-dark-900 border border-slate-800 min-w-[130px] w-full md:w-auto">
                    <div className="p-1.5 rounded-md bg-dark-950 mb-1.5 border border-slate-800">
                      {getStepIcon(step.type)}
                    </div>
                    <span className="text-xs font-bold text-slate-200">{step.label}</span>
                    {step.sublabel && (
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5">{step.sublabel}</span>
                    )}
                  </div>
                  {idx < project.architectureFlow.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-cyan-500 rotate-90 md:rotate-0 flex-shrink-0 opacity-70" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" /> The Problem
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-2">
              <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Technical Solution
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Contributions & Challenges */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-100">Key Engineering Contributions</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.contribution.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-100">Engineering Challenges & Outcomes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-2">
                <h4 className="font-mono text-xs font-bold text-cyan-400">CHALLENGES SOLVED</h4>
                <ul className="space-y-1.5 text-slate-400">
                  {project.challenges.map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 space-y-2">
                <h4 className="font-mono text-xs font-bold text-emerald-400">SYSTEM OUTCOME</h4>
                <ul className="space-y-1.5 text-slate-400">
                  {project.outcome.map((o, i) => (
                    <li key={i}>• {o}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Badges */}
          <div className="pt-4 border-t border-slate-800/80">
            <h4 className="text-xs font-mono text-slate-400 mb-2 uppercase">Complete Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-dark-950 border border-slate-800 text-cyan-300 text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
