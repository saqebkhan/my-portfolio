import { portfolioData } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 glass">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <p className="text-white font-display font-bold text-xl mb-2">
            Saqeb<span className="text-primary">Khan</span>
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a href={portfolioData.profile.linkedin} className="text-sm text-slate-400 hover:text-primary transition-colors">LinkedIn</a>
          <a href={portfolioData.profile.github} className="text-sm text-slate-400 hover:text-primary transition-colors">GitHub</a>
          <a href={`mailto:${portfolioData.profile.email}`} className="text-sm text-slate-400 hover:text-primary transition-colors">Email</a>
        </div>
        
        <p className="text-sm text-slate-500">
          Built with <span className="text-white">React</span> & <span className="text-white">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
