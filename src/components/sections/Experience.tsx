import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolio';
import Section from '../shared/Section';

export default function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="A timeline of professional growth and engineering contributions.">
      <div className="max-w-4xl mx-auto space-y-8">
        {portfolioData.experience.map((job, index) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 pb-12 border-l border-slate-800 last:pb-0"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-dark" />
            
            <div className="space-y-4">
              <div>
                <span className="text-sm font-bold text-primary uppercase tracking-wider">{job.period}</span>
                <h3 className="text-2xl mt-1">{job.role}</h3>
                <p className="text-lg text-white/80">{job.company}</p>
              </div>
              
              <p className="text-slate-400">{job.description}</p>
              
              <ul className="space-y-3">
                {job.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex gap-3 text-slate-300">
                    <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                    {highlight}
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
