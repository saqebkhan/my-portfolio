import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import { cn } from '../../lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 glass border-b border-white/5" : "py-6 bg-transparent"
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold text-white tracking-tight">
          S<span className="text-primary">K</span>.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === link.href.substring(1) ? "text-primary" : "text-slate-400"
              )}
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-white/10 mx-2" />
          <div className="flex items-center gap-4">
            <a href={portfolioData.profile.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium py-2",
                    activeSection === link.href.substring(1) ? "text-primary" : "text-slate-400"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4 pt-4 border-t border-white/5">
                <a href={portfolioData.profile.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                  <FaGithub size={24} />
                </a>
                <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                  <FaLinkedin size={24} />
                </a>
                <a href={`mailto:${portfolioData.profile.email}`} className="text-slate-400 hover:text-white">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
