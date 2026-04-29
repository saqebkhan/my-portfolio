import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolio';
import Section from '../shared/Section';
import Card from '../shared/Card';
import Button from '../shared/Button';

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Ready to discuss your next project or potential collaboration?">
      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <h3 className="text-3xl">Let's build something <span className="text-gradient">exceptional</span> together.</h3>
          <p className="text-lg text-slate-400">
            I'm currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-4">
            <a href={`mailto:${portfolioData.profile.email}`} className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/50 transition-colors group">
              <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email Me</p>
                <p className="text-white">{portfolioData.profile.email}</p>
              </div>
            </a>
            
            <div className="flex gap-4">
              <a href={portfolioData.profile.linkedin} target="_blank" rel="noreferrer" className="flex-1 flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/50 transition-colors group">
                <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaLinkedin size={24} />
                </div>
                <p className="text-white font-medium">LinkedIn</p>
              </a>
              <a href={portfolioData.profile.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/50 transition-colors group">
                <div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  <FaGithub size={24} />
                </div>
                <p className="text-white font-medium">GitHub</p>
              </a>
            </div>
          </div>
        </div>

        <Card className="p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Your Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can I help you?" />
            </div>
            <Button className="w-full">
              Send Message <Send className="ml-2" size={18} />
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
}
