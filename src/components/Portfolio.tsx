 import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import { Plus, X } from 'lucide-react';

const categories = ['All', 'Poster Design', 'After-Before', 'Image manipulation', 'Video'];

const projects = [
  { id: 1, title: 'Nike Poster', category: 'Poster Design', img: '/stuff/shoe.jpeg' },
  { id: 2, title: 'Image restolation', category: 'After-Before', img: '/stuff/beforegirl.jpg' },
  { id: 3, title: 'Wire-less Buds', category: 'Poster Design', img: '/stuff/buds.jpeg' },
  { id: 4, title: 'Image manipulation', category: 'Image manipulation', img: '/stuff/god.jpeg' },
  { id: 5, title: 'abhi bus', category: 'Poster Design', img: '/stuff/sale.jpeg' },
  { id: 6, title: 'Image manipulation', category: 'Image manipulation', img: '/stuff/dslr.jpg' },
  { id: 9, title: 'Image restolation', category: 'After-Before', img: '/stuff/aftergirl.jpg' },
  { id: 10, title: 'Image restolation', category: 'After-Before', img: '/stuff/beforeboy.jpg' },
  { id: 11, title: 'Image restolation', category: 'After-Before', img: '/stuff/afterboy.jpg' },
  { id: 12, title: 'Day to night', category: 'After-Before', img: '/stuff/day.jpg' },
  { id: 13, title: 'Day to night', category: 'After-Before', img: '/stuff/night.jpg' },

  // { id: 7, title: 'My Creative Reel', category: 'Video', video: '/videos/vrindavan.mp4', type: 'video' },
  // { id: 8, title: 'The three trains', category: 'Video', video: '/videos/trains.mp4', type: 'video' },

  // { id: 14, title: 'My Cinematic shots on track', category: 'Video', video: '/videos/mystationvid.mp4', type: 'video' },
  
  
  // { id: 15, title: 'Meetup', category: 'Video', video: '/videos/meetup.mp4', type: 'video' },
  
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
          <h2 className="text-4xl md:text-5xl flex items-center font-bold">
            <span className="w-12 h-1 bg-black mr-4" />
            Portfolio
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                  filter === cat
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative aspect-square overflow-hidden bg-black cursor-pointer"
              >
                {project.type === 'video' ? (
                  <video
                    src={project.video}
                    className="w-full h-full object-contain"
                    muted
                    autoPlay
                    loop
                  />
                ) : (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                  />
                )}

                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
                    <Plus className="text-black" />
                  </div>
                  <h4 className="text-white text-xl">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FULLSCREEN MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              {/* <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-white"
              >
                <X size={32} />

              </button> */}

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl"
              >
                {selectedProject.type === 'video' ? (
                  <video
                    src={selectedProject.video}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[90vh] rounded-lg"
                  />
                ) : (
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full rounded-lg"
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}