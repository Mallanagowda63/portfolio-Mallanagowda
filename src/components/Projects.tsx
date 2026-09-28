import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, ArrowRight, CheckCircle2, Download, Star, Ambulance, Siren, MapPin, Clock, HeartPulse } from 'lucide-react';

const ComingSoonCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => (
  <motion.div
    className="md:col-span-2 relative overflow-hidden rounded-2xl border border-rose-500/40 bg-gradient-to-br from-rose-950/60 via-dark-900 to-dark-950 p-6 sm:p-8 shadow-lg shadow-rose-500/10"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {/* Ambient glows */}
    <div className="absolute -top-24 -right-24 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-extrabold text-rose-300 px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/30">
              PROJECT {project.number}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-rose-500/15 border border-rose-500/50 text-rose-300 text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-rose-400 opacity-75 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-rose-400" />
              </span>
              {project.statusBadge}
            </span>
          </div>
          {project.category && (
            <span className="text-[11px] font-mono text-slate-500">{project.category}</span>
          )}
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 flex items-center gap-3">
          {project.title}
          <Siren className="w-6 h-6 text-rose-400 animate-pulse" />
        </h3>
        <p className="text-xs font-mono text-rose-300 mb-3 mt-1">{project.subtitle}</p>
        <p className="text-sm text-slate-300 leading-relaxed mb-6 max-w-2xl">{project.description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {project.features.map((feat, i) => {
            const Icon = [Ambulance, MapPin, Clock, HeartPulse][i % 4];
            return (
              <div key={feat} className="flex items-center gap-3 p-3 rounded-xl bg-dark-950/60 border border-rose-500/15">
                <div className="p-1.5 rounded-lg bg-rose-500/10 border border-rose-500/20 flex-shrink-0">
                  <Icon className="w-4 h-4 text-rose-400" />
                </div>
                <span className="text-xs text-slate-200">{feat}</span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span
            aria-disabled="true"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 text-white text-xs font-bold shadow-md shadow-rose-500/25 cursor-default"
          >
            <Clock className="w-3.5 h-3.5" />
            Launching Soon
          </span>
          <span className="text-[11px] font-mono text-slate-500">Currently in development</span>
        </div>
      </div>

      {/* Radar / ambulance visual */}
      <div className="hidden lg:flex relative w-56 h-56 items-center justify-center mx-auto" aria-hidden="true">
        <span className="absolute inset-0 rounded-full border border-rose-500/30 animate-ping [animation-duration:3s]" />
        <span className="absolute inset-6 rounded-full border border-rose-500/30" />
        <span className="absolute inset-14 rounded-full border border-rose-500/40" />
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-500/10 to-transparent" />
        <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-rose-500 to-red-700 flex items-center justify-center shadow-xl shadow-rose-600/40">
          <Ambulance className="w-12 h-12 text-white" />
        </div>
        <MapPin className="absolute top-6 right-8 w-5 h-5 text-rose-300 animate-bounce" />
        <HeartPulse className="absolute bottom-8 left-6 w-5 h-5 text-rose-300/80" />
      </div>
    </div>
  </motion.div>
);

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
          {projectsData.map((project, index) => project.comingSoon ? (
            <ComingSoonCard key={project.id} project={project} index={index} />
          ) : (
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
