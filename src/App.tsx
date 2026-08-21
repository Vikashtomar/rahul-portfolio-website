import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-20 md:ml-64 overflow-x-hidden">
        <Hero />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 px-8 md:px-16 bg-secondary text-white border-t border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Rahul Sharma. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs uppercase tracking-widest font-bold hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
