import { motion } from 'motion/react';
import { Palette, Camera, Monitor, Award, Users, Video, Star } from 'lucide-react';

const skills = [
  { icon: Palette, title: 'Print Design', desc: 'High-quality layouts for magazines, posters, and brand identities.' },
  { icon: Monitor, title: 'Web Design', desc: 'Modern, responsive interfaces that focus on user experience.' },
  { icon: Camera, title: 'Photography', desc: 'Professional editorial and commercial photography services.' },
];

const stats = [
  { label: 'Years Experience', value: '01+', icon: Award },
  { label: 'Projects Done', value: '40', icon: Briefcase },
  { label: 'Won Awards', value: '3', icon: Star },
  { label: 'Happy Clients', value: '50+', icon: Users },
];

import { Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-full md:w-1/3">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary z-0" />
              <img 
                src="/stuff/rahul.jpeg" 
                alt="Rahul Sharma" 
                className="relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl md:text-5xl mb-6 flex items-center">
              <span className="w-12 h-1 bg-primary mr-4" />
              About Me
            </h2>
            <h3 className="text-2xl font-display text-accent mb-4">I'm Rahul Sharma, Graphic Designer </h3>
            <p className="text-zinc-600 leading-relaxed mb-8 text-lg">
              Creative and detail-oriented Individual currently pursuing DFM at MAAC Ghaziabad. With a strong foundation in Computer Basics and a year of teaching experience at NCSM, I am passionate about visual storytelling. Skilled in Photoshop, Premiere Pro, and After Effects, I aim to leverage my technical and pedagogical skills in a professional creative environment.

                </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="p-6 bg-surface border-l-4 border-primary">
                  <skill.icon className="text-primary mb-4" size={32} />
                  <h4 className="text-lg mb-2">{skill.title}</h4>
                  <p className="text-sm text-zinc-500">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-secondary p-8 text-center text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full transition-all group-hover:w-20 group-hover:h-20" />
              <stat.icon className="mx-auto text-primary mb-4" size={32} />
              <div className="text-4xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
