import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import Section from '../shared/Section';
import Card from '../shared/Card';

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" subtitle="Real-world products and technical case studies highlighting engineering impact.">
      <div className="space-y-24">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >
            {/* Project Image/Visual */}
            <div className="flex-1 w-full">
              <Card className="group relative aspect-video overflow-hidden border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <div className="flex gap-4">
                     <a href={project.links.demo} className="p-3 bg-white text-dark rounded-full hover:bg-primary hover:text-white transition-all">
                       <ExternalLink size={20} />
                     </a>
                     <a href={project.links.github} className="p-3 bg-dark-accent text-white rounded-full hover:bg-primary transition-all">
                       <FaGithub size={20} />
                     </a>
                   </div>
                </div>
              </Card>
            </div>

            {/* Project Info */}
            <div className="flex-1 space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-display">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-semibold uppercase tracking-wider text-primary">{t}</span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Problem</h4>
                  <p className="text-slate-400">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Solution</h4>
                  <p className="text-slate-400">{project.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Key Impact</h4>
                  <div className="flex items-center gap-3 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                    <CheckCircle2 className="text-primary shrink-0" size={24} />
                    <p className="font-medium text-white">{project.impact}</p>
                  </div>
                </div>
              </div>

              <ul className="grid grid-cols-2 gap-3">
                {project.features.map(feature => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
