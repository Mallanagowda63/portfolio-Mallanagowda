import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, ArrowRight, CheckCircle2, Download, Star } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 relative">
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
            <span>// FEATURED PORTFOLIO WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Selected projects demonstrating my experience in full-stack development, cloud infrastructure, and production deployment.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border flex flex-col justify-between group relative overflow-hidden ${
                project.highlight
                  ? 'md:col-span-2 border-violet-500/40 shadow-lg shadow-violet-500/10'
                  : 'border-slate-800'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-cyan-500/10 via-emerald-500/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-cyan-500/20 transition-all duration-300" />

              <div>
                {/* Number & Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-extrabold text-cyan-400 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                      PROJECT {project.number}
                    </span>
                    {project.highlight && (
                      <span className="px-2.5 py-0.5 rounded-full bg-violet-500/15 border border-violet-500/40 text-violet-300 text-[10px] font-mono font-bold tracking-wider flex items-center gap-1">
                        <Star className="w-3 h-3 fill-violet-300" />
                        HIGHLIGHT
                      </span>
                    )}
                    {project.statusBadge && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold tracking-wider animate-pulse flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        {project.statusBadge}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{project.category ?? 'FULL-STACK & CLOUD'}</span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mb-3 mt-0.5">
                  {project.subtitle}
                </p>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  "{project.description}"
                </p>

                {/* App Screenshots */}
                {project.screenshots && (
                  <div className="flex gap-3 overflow-x-auto pb-3 mb-5 -mx-1 px-1 snap-x">
                    {project.screenshots.map((shot) => (
                      <figure key={shot.caption} className="flex-shrink-0 snap-start text-center">
                        <img
                          src={shot.src}
                          alt={`${project.title} – ${shot.caption}`}
                          loading="lazy"
                          className="h-64 sm:h-72 w-auto rounded-xl border border-slate-800 bg-dark-950 object-contain"
                        />
                        <figcaption className="text-[10px] font-mono text-slate-500 mt-1.5">{shot.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-dark-950 border border-slate-800 text-slate-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 6 && (
                    <span className="px-2 py-1 rounded-md bg-dark-950 border border-slate-800 text-slate-400 text-[11px] font-mono">
                      +{project.techStack.length - 6} more
                    </span>
                  )}
                </div>

                {/* Key Features (3-5 items) */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/60">
                  <span className="text-[11px] font-mono text-slate-400 block uppercase tracking-wider">Key Highlights:</span>
                  {project.features.slice(0, 4).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-slate-300">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 border border-slate-700 hover:border-cyan-500/50 text-xs font-bold transition-all group/btn"
                >
                  <span>View Details & Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.apkUrl && (
                    <a
                      href={project.apkUrl}
                      download
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-400 hover:to-fuchsia-400 text-white text-xs font-bold shadow-md shadow-violet-500/20 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      <span>Download APK</span>
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 text-xs font-semibold transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-colors"
                    >
                      <Github className="w-3 h-3 text-cyan-400" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
