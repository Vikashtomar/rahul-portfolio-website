import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-16 flex items-center">
          <span className="w-12 h-1 bg-primary mr-4" />
          Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-display mb-6">Feel free to contact me!</h3>
            <p className="text-zinc-600 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center group">
                <div className="w-12 h-12 bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div className="ml-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">Email Me</p>
                  <p className="text-lg font-display">rahulsharma8923990@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                  <Phone size={24} />
                </div>
                <div className="ml-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">Call Me</p>
                  <p className="text-lg font-display">+91 8126567858</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-surface flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div className="ml-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">Visit Me</p>
                  <p className="text-lg font-display">Farah, Mathura 281122</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-secondary text-white">
              <h4 className="text-xl font-display mb-4 text-primary">THANKS FOR PATIENCE!</h4>
              <p className="text-sm text-zinc-400">I usually respond within 24 hours. Looking forward to hearing from you!</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-zinc-500">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border-b-2 border-transparent focus:border-primary outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-zinc-500">Your Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white border-b-2 border-transparent focus:border-primary outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-zinc-500">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white border-b-2 border-transparent focus:border-primary outline-none transition-all"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-bold mb-2 text-zinc-500">Your Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-white border-b-2 border-transparent focus:border-primary outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-secondary text-white font-display uppercase tracking-widest hover:bg-primary hover:text-secondary transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
