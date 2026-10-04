 import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Palette,
  Award,
  Users,
  Star,
  Briefcase,
  Video,
  X,
  ArrowRight,
} from 'lucide-react';

const skills = [
  {
    icon: Video,
    title: 'Video Editing',
    desc: 'Engaging video edits using Premiere Pro and After Effects.',
    tools: ['Premiere Pro', 'After Effects'],
    details:
      'Reels, promos, YouTube videos, and motion graphics with clean cuts, color grading, and sound.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    desc: 'Creative designs for posters, social media, branding, and visual content.',
    tools: ['Photoshop', 'Illustrator'],
    details:
      'Posters, social media posts, logos, and branding that make your business stand out.',
  },
];

const stats = [
  { label: 'Years Experience', value: '01+', icon: Award },
  { label: 'Projects Done', value: '40', icon: Briefcase },
  { label: 'Won Awards', value: '3', icon: Star },
  { label: 'Happy Clients', value: '50+', icon: Users },
];

export default function About() {
  const [active, setActive] = useState<(typeof skills)[number] | null>(null);

  const goToPortfolio = () => {
    setActive(null);
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          {/* Image */}
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

          {/* About Content */}
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl md:text-5xl mb-6 flex items-center">
              <span className="w-12 h-1 bg-primary mr-4" />
              About Me
            </h2>

            {/* Fixed: one heading instead of two */}
            <h3 className="text-2xl font-display text-accent mb-4">
              I'm Rahul Sharma, Video Editor & Graphic Designer
            </h3>

            <p className="text-zinc-600 leading-relaxed mb-8 text-lg">
              Creative and detail-oriented individual currently pursuing DFM
              at MAAC Ghaziabad. With a strong foundation in computer basics
              and a year of teaching experience at NCSM, I am passionate about
              visual storytelling. Skilled in Photoshop, Premiere Pro, and
              After Effects, I aim to leverage my technical and pedagogical
              skills in a professional creative environment.
            </p>

            {/* App-style clickable skill tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.button
                    key={skill.title}
                    onClick={() => setActive(skill)}
                    whileHover={{ y: -6, scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-left p-6 bg-surface border-l-4 border-primary rounded-2xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <h4 className="text-lg mb-2">{skill.title}</h4>
                    <p className="text-sm text-zinc-500 mb-3">{skill.desc}</p>
                    <span className="text-xs font-semibold text-primary flex items-center gap-1">
                      Open <ArrowRight size={14} />
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="bg-secondary p-8 text-center text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full transition-all group-hover:w-20 group-hover:h-20" />
                <Icon className="mx-auto text-primary mb-4" size={32} />
                <div className="text-4xl font-display font-bold mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Popup window */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <active.icon className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-display mb-3">{active.title}</h3>
              <p className="text-zinc-600 mb-4">{active.details}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {active.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={goToPortfolio}
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
              >
                View My Work
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}