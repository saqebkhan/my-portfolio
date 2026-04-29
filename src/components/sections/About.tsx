import { motion } from 'framer-motion';
import Section from '../shared/Section';
import Card from '../shared/Card';

export default function About() {
  const highlights = [
    { label: 'Experience', value: '5+ Years' },
    { label: 'Projects', value: '15+ Delivered' },
    { label: 'Tech Stack', value: 'React & Vue' },
    { label: 'Focus', value: 'Performance' },
  ];

  return (
    <Section id="about" title="About Me" subtitle="Engineering robust frontend solutions with a product-focused mindset.">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl mb-6">A developer who bridges the gap between design and engineering.</h3>
          <p className="text-lg leading-relaxed mb-6">
            With over 5 years of experience, I specialize in building scalable web applications that don't just work, but excel in performance and user experience. My expertise lies in <span className="text-white">React.js</span> and <span className="text-white">Vue.js</span>, where I've lead micro-frontend transitions and complex data-driven dashboards.
          </p>
          <p className="text-lg leading-relaxed">
            I believe in clean code, modular architecture, and the power of collaboration. My goal is always to deliver production-grade applications that solve real-world problems while maintaining high standards of engineering excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <Card key={item.label} delay={index * 0.1} className="p-6 text-center">
              <p className="text-3xl font-display font-bold text-primary mb-1">{item.value}</p>
              <p className="text-sm uppercase tracking-wider text-slate-500 font-medium">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
