import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Oliver Hudson',
    role: 'CEO, TechFlow',
    text: 'Sarita transformed our brand identity into something truly remarkable. Her eye for minimalism and bold use of color is exactly what we needed.',
    img: 'https://picsum.photos/seed/t1/100/100'
  },
  {
    name: 'Janny Doe',
    role: 'Creative Director, Vision',
    text: 'Working with Sarita was a breeze. She understands the brief perfectly and delivers beyond expectations every single time.',
    img: 'https://picsum.photos/seed/t2/100/100'
  },
  {
    name: 'Luna Smith',
    role: 'Founder, EcoStyle',
    text: 'The photography series Sarita created for our launch was breathtaking. She has a way of capturing the essence of a product like no other.',
    img: 'https://picsum.photos/seed/t3/100/100'
  },
  {
    name: 'Marko Vane',
    role: 'Marketing Manager, GlobalCo',
    text: 'Professional, creative, and highly skilled. Sarita is our go-to designer for all our high-stakes print and digital projects.',
    img: 'https://picsum.photos/seed/t4/100/100'
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
