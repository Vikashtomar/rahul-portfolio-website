import { motion } from 'motion/react';

const education = [
 { 
    year: '2021', 
    title: 'Secondary School (10th)', 
    school: 'CBSE Board', 
    desc: 'Completed secondary education with focus on core academic subjects.' 
  },
  { 
    year: '2023', 
    title: 'Senior Secondary (12th)', 
    school: 'CBSE Board', 
    desc: 'Completed higher secondary education under CBSE curriculum.' 
  },
  { 
    year: '2024 - Present', 
    title: 'Bachelor of Commerce (Vocational)', 
    school: 'Dr. Bhimrao Ambedkar University, Agra', 
    desc: 'Currently pursuing B.Com (Vocational) with focus on commerce and business studies.' 
  },
];

const experience = [
 { 
    year: '2023 - 2024', 
    title: 'Computer Instructor', 
    company: 'NCSM Farah, Mathura', 
    desc: 'Delivered training on basic computer operations and essential software. Managed classroom activities and helped students understand technical concepts easily.' 
  },
  { 
    year: '2025 - Present', 
    title: 'Digital Filmmaking Student (DFM)', 
    company: 'MAAC Institute, Ghaziabad', 
    desc: 'Currently learning Digital Filmmaking with practical training in video editing and motion graphics.' 
  },  
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-8 md:px-16 bg-surface">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 flex items-center">
          <span className="w-12 h-1 bg-primary mr-4" />
          Resume
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl mb-8 flex items-center text-accent">
              <span className="px-3 py-1 bg-primary text-secondary text-sm mr-4">01</span>
              Education
            </h3>
            <div className="space-y-8 border-l-2 border-zinc-200 ml-4 pl-8">
              {education.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-surface" />
                  <span className="text-sm font-bold text-primary uppercase tracking-widest mb-2 block">{item.year}</span>
                  <h4 className="text-xl mb-1">{item.title}</h4>
                  <p className="text-zinc-500 text-sm font-medium mb-3">{item.school}</p>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl mb-8 flex items-center text-accent">
              <span className="px-3 py-1 bg-primary text-secondary text-sm mr-4">02</span>
              Experience
            </h3>
            <div className="space-y-8 border-l-2 border-zinc-200 ml-4 pl-8">
              {experience.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-primary border-4 border-surface" />
                  <span className="text-sm font-bold text-primary uppercase tracking-widest mb-2 block">{item.year}</span>
                  <h4 className="text-xl mb-1">{item.title}</h4>
                  <p className="text-zinc-500 text-sm font-medium mb-3">{item.company}</p>
                  <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
