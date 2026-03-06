import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-8 md:px-16 bg-surface relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 transform translate-x-1/2" />
      
      <div className="max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 bg-primary text-secondary font-display font-bold text-sm uppercase tracking-widest mb-6">
            Hi There!
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl leading-none mb-6">
            I'M <span className="text-primary">RAHUL</span>
          </h1>
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="text-xl md:text-2xl font-display text-accent border-b-2 border-primary pb-1">
              GRAPHIC DESIGNER
            </span>
            <span className="text-xl md:text-2xl font-display text-accent border-b-2 border-primary pb-1">
              PHOTOGRAPHER
            </span>
          </div>
          
          <p className="text-lg text-accent max-w-xl mb-10 leading-relaxed">
            Crafting visual stories through bold design and authentic photography. 
            I help brands stand out with a minimal yet striking aesthetic.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-secondary text-white font-display uppercase tracking-widest hover:bg-primary hover:text-secondary transition-all duration-300 flex items-center group"
            >
              View My Work
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-secondary text-secondary font-display uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Image for Desktop */}
      <motion.div 
        className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border-[16px] border-white shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img 
          src="/stuff/profile.jpeg" 
          alt="Rahul Sharma" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
