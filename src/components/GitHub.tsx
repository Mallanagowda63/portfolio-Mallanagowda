import React from 'react';
import { motion } from 'framer-motion';
import { personalConfig } from '../data/config';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

export const GitHubSection: React.FC = () => {
  const featuredRepos = [
    {
      name: "Hackercit (DevOrbit)",
      desc: "Full-Stack Online Coding Practice & Assessment Platform with Docker isolation.",
      lang: "TypeScript",
      langColor: "bg-blue-500",
      url: "https://github.com/Mallanagowda63/Hackercit"
    },
    {
      name: "aws-cloud-security-monitoring",
      desc: "Cloud infrastructure security auditing, log monitoring, and automated threat detection.",
      lang: "Python",
      langColor: "bg-amber-500",
      url: "https://github.com/Mallanagowda63/aws-cloud-security-monitoring"
    },
    {
      name: "Dhannya",
      desc: "Freelance organic & custom masala e-commerce platform deployed on Render.",
      lang: "TypeScript",
      langColor: "bg-cyan-500",
      url: "https://github.com/Mallanagowda63/Dhannya"
    },
    {
      name: "influencer",
      desc: "Micro-Influencer Collaboration & Campaign Management Platform with Firebase & REST APIs.",
      lang: "JavaScript",
      langColor: "bg-emerald-500",
      url: "https://github.com/Mallanagowda63/influencer"
    }
  ];

  return (
    <section id="github" className="py-20 relative bg-dark-900/40">
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
            <span>// VERSION CONTROL & REPOSITORIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            GitHub & Open Source
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl">
            "I use Git and GitHub to manage projects, collaborate, and maintain development workflows."
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left CTA Card */}
          <motion.div
            className="lg:col-span-4 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-14 h-14 rounded-2xl bg-dark-950 border border-slate-800 flex items-center justify-center text-cyan-400 mx-auto lg:mx-0">
              <Github className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-100">Explore GitHub Repositories</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Check out full repository histories, pull requests, Docker configurations, and source code.
              </p>
            </div>

            <a
              href={personalConfig.githubProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-dark-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-transform"
            >
              <Github className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </motion.div>

          {/* Right Repositories Showcase */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {featuredRepos.map((repo, rIdx) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover rounded-xl p-5 border border-slate-800 flex flex-col justify-between space-y-4 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: rIdx * 0.1 }}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <FolderGit2 className="w-4 h-4 text-cyan-400" />
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h4 className="font-bold text-slate-100 text-sm group-hover:text-cyan-300 transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {repo.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                    <span>{repo.lang}</span>
                  </div>
                  <span className="text-slate-500">Public</span>
                </div>
              </motion.a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
