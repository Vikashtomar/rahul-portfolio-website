import { motion } from 'motion/react';
import { Quote } from 'lucide-react';



const testimonials = [
  {
    name: 'Vikash Tomar',
    role: 'Marketing Head, UrbanKart',
    text: 'Rahul did an amazing job with our website redesign. His attention to detail and modern design approach really elevated our brand.',
    img: 'https://picsum.photos/seed/ind1/100/100'
  },
  {
    name: 'Amit Patel',
    role: 'CEO, Patel Exports',
    text: 'Working with Rahul was a great experience. He understood our requirements perfectly and delivered the project on time with excellent quality.',
    img: 'https://picsum.photos/seed/ind2/100/100'
  },
  {
    name: 'Neha Gupta',
    role: 'Creative Director, BrightAds',
    text: 'Rahul is extremely talented and professional. His design sense and development skills helped us launch our campaign website smoothly.',
    img: 'https://picsum.photos/seed/ind3/100/100'
  },
  {
    name: 'Arjun Mehta',
    role: 'Founder, Mehta Studios',
    text: 'Rahul created a stunning portfolio website for our studio. His creativity and clean coding style really impressed our team.',
    img: 'https://picsum.photos/seed/ind4/100/100'
  },
  {
    name: 'Kavita Singh',
    role: 'Director, Singh Creations',
    text: 'Professional, reliable, and highly skilled. Rahul always delivers beyond expectations and is a pleasure to work with.',
    img: 'https://picsum.photos/seed/ind5/100/100'
  },
  {
    name: 'Rohit Agarwal',
    role: 'Founder, NextGen Solutions',
    text: 'Rahul helped us build a fast and responsive website that our clients love. Highly recommended for any modern web project.',
    img: 'https://picsum.photos/seed/ind6/100/100'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-8 md:px-16 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 flex items-center">
          <span className="w-12 h-1 bg-primary mr-4" />
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 relative shadow-sm border-b-4 border-primary"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={48} />
              <p className="text-zinc-600 italic mb-8 leading-relaxed relative z-10">
                "{t.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={t.img} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full mr-4 border-2 border-primary p-1"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-display text-lg leading-tight">{t.name}</h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
