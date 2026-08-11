import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Code, Layout, Server, Database, Cloud, Wrench, CheckCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ReactNode> = {
    programming: <Code className="w-4 h-4 text-cyan-400" />,
    frontend: <Layout className="w-4 h-4 text-emerald-400" />,
    backend: <Server className="w-4 h-4 text-indigo-400" />,
    database: <Database className="w-4 h-4 text-amber-400" />,
    'cloud-devops': <Cloud className="w-4 h-4 text-sky-400" />,
    tools: <Wrench className="w-4 h-4 text-purple-400" />
  };

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="space-y-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <span>// TECH STACK CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A comprehensive set of modern technologies, frameworks, databases, and cloud engineering tools used to build end-to-end applications.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-dark-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-dark-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            All Categories
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-dark-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {categoryIcons[cat.id]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800/80">
                  <div className="p-2 rounded-lg bg-dark-950 border border-slate-800">
                    {categoryIcons[cat.id]}
                  </div>
                  <h3 className="font-bold text-slate-100 text-base">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-950/90 border border-slate-800 text-slate-200 hover:text-cyan-300 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 text-xs font-mono transition-all duration-200 cursor-default group"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
