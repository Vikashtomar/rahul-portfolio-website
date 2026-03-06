import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  MessageSquare, 
  Mail,
  Github,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-secondary text-white flex flex-col z-50">
      {/* Profile Section */}
      <div className="p-6 md:p-8 flex flex-col items-center border-b border-white/10">
        <div className="w-12 h-12 md:w-24 md:h-24 rounded-full border-4 border-primary overflow-hidden mb-4">
          <img 
            src="/stuff/profile.jpeg" 
            alt="Rahul Sharma" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <h2 className="hidden md:block text-xl font-display text-center">Rahul Sharma</h2>
        <p className="hidden md:block text-xs text-primary font-medium uppercase tracking-widest mt-1">Creative Designer</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-8">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`flex items-center px-6 py-3 transition-all duration-200 group ${
                  activeSection === item.id 
                    ? 'text-primary border-r-4 border-primary bg-white/5' 
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={20} className={activeSection === item.id ? 'text-primary' : 'group-hover:text-primary'} />
                <span className="hidden md:block ml-4 font-display uppercase text-sm tracking-wider font-semibold">
                  {item.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="p-6 flex justify-center space-x-4 border-t border-white/10">
        <a href="#" className="text-zinc-400 hover:text-primary transition-colors"><Instagram size={18} /></a>
        <a href="#" className="text-zinc-400 hover:text-primary transition-colors"><Twitter size={18} /></a>
        <a href="#" className="text-zinc-400 hover:text-primary transition-colors"><Linkedin size={18} /></a>
      </div>
    </aside>
  );
}
