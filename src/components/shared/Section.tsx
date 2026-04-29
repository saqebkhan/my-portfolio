import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, subtitle, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="container-custom">
        {(title || subtitle) && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-16 text-center"
          >
            {title && <h2 className="text-3xl lg:text-4xl mb-4">{title}</h2>}
            {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
            <div className="h-1 w-20 bg-primary mx-auto mt-6 rounded-full" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
