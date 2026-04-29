import { portfolioData } from '../../data/portfolio';
import Section from '../shared/Section';
import Card from '../shared/Card';

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills" subtitle="A comprehensive toolkit built on years of professional engineering.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.skills.map((skillGroup, index) => (
          <Card key={skillGroup.category} delay={index * 0.1} className="p-8">
            <h3 className="text-xl mb-6 text-primary">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium text-slate-300 hover:border-primary/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
