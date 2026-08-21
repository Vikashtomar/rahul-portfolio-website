
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const phoneNumber = "918126567858"; // your number (country code + number)

    const text = `New Contact Form Message

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // clear form after submit
    e.target.reset();
  };

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
            <h3 className="text-2xl font-display mb-6">
              Feel free to contact me!
            </h3>

            <p className="text-zinc-600 mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities.
            </p>

            <div className="space-y-8">

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-surface flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div className="ml-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">
                    Email
                  </p>
                  <p className="text-lg">
                    rahulsharma8923990@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-surface flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div className="ml-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">
                    Phone
                  </p>
                  <p className="text-lg">
                    +91 8126567858
                  </p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 bg-surface flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div className="ml-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-400 font-bold mb-1">
                    Location
                  </p>
                  <p className="text-lg">
                    Nagla Bar Farah, Mathura 281122
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-surface p-8 md:p-12">
            <form className="space-y-6" onSubmit={handleWhatsApp}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input 
                  name="name"
                  type="text" 
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white border-b-2 focus:border-primary outline-none"
                />

                <input 
                  name="email"
                  type="email" 
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white border-b-2 focus:border-primary outline-none"
                />
              </div>

              <input 
                name="subject"
                type="text" 
                placeholder="Subject"
                required
                className="w-full px-4 py-3 bg-white border-b-2 focus:border-primary outline-none"
              />

              <textarea 
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 bg-white border-b-2 focus:border-primary outline-none resize-none"
              />

              <button 
                type="submit"
                className="w-full py-4 bg-secondary text-white uppercase tracking-widest hover:bg-primary transition-all flex items-center justify-center"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
