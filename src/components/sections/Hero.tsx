import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolio';
import Button from '../shared/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="container-custom">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20">
              Available for new opportunities
            </span>
            <h1 className="text-5xl lg:text-7xl mb-6 leading-tight">
              Crafting <span className="text-gradient">High-Performance</span> Digital Experiences.
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
              I'm <span className="text-white font-medium">{portfolioData.profile.name}</span>, a Senior Frontend Developer specializing in React and Vue. Focused on micro-frontends, scalability, and premium UI engineering.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                View Projects <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="secondary" size="lg" onClick={() => window.open(portfolioData.profile.resumeUrl)}>
                Download Resume <Download className="ml-2" size={20} />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
