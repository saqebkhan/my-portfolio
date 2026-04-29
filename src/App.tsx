import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Skeleton from './components/shared/Skeleton';

// Lazy load sections
const Hero = lazy(() => import('./components/sections/Hero'));
const About = lazy(() => import('./components/sections/About'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Contact = lazy(() => import('./components/sections/Contact'));

function SectionSkeleton() {
  return (
    <div className="section-padding container-custom space-y-8">
      <Skeleton className="h-10 w-48 mx-auto" />
      <Skeleton className="h-4 w-96 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><Skeleton className="h-12 w-48" /></div>}>
          <Hero />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
