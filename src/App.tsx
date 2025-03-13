import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Mail, Phone, MapPin, ChevronRight, Briefcase, Clock, Award, Building, Globe, Code, Database, Cpu, PenTool, LineChart, Shield, Brain } from 'lucide-react';
import logo from '/logo.png';
import { IndianRupee } from "lucide-react";


function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardHover = {
    scale: 1.03,
    transition: { duration: 0.2 }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-card fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
                        <img src={logo} alt="Logo" className="h-20"  />
                        <span className="text-xl font-bold">Arttifai Tech</span>  
            </motion.div>
            <motion.div 
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="#home" className="text-gray-700 hover:text-primary-500 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary-500 transition-colors">About</a>
              <a href="#internships" className="text-gray-700 hover:text-primary-500 transition-colors">Internships</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-500 transition-colors">Contact</a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-b from-primary-50 via-white to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Redefining The Future of Innovation
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Join Arttifai Tech's internship program in collaboration with Google and Microsoft.
                Gain real-world experience through our 100% remote internship opportunities.
              </p>
              <motion.a 
                href="https://forms.gle/N7oTjujhxetADGn38"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Internships
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.a>
            </motion.div>
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration" 
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-white via-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center gradient-text mb-12"
            {...fadeInUp}
          >
            About Arttifai Tech
          </motion.h2>
          
          {/* Company Overview */}
          <motion.div 
            className="mb-16"
            {...fadeInUp}
          >
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Arttifai Tech is a leading technology education platform, proudly collaborating with industry giants like Google and Microsoft
              to provide cutting-edge internship opportunities. Our mission is to bridge the gap between academic learning and industry requirements
              through practical, hands-on experience.
            </p>
          </motion.div>

          {/* Partners Section */}
          <motion.div 
            className="mb-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">Our Strategic Partners</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="glass-card p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={cardHover}
              >
                <Building className="h-12 w-12 text-primary-500 mb-4 mx-auto" />
                <h4 className="text-xl font-semibold text-center mb-3">Google</h4>
                <p className="text-gray-600 text-center">
                  Access to Google's advanced technologies and mentorship from Google engineers.
                </p>
              </motion.div>
              <motion.div 
                className="glass-card p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={cardHover}
              >
                <Globe className="h-12 w-12 text-primary-500 mb-4 mx-auto" />
                <h4 className="text-xl font-semibold text-center mb-3">Microsoft</h4>
                <p className="text-gray-600 text-center">
                  Learn cloud computing and enterprise solutions with Microsoft's expertise.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <h3 className="text-2xl font-semibold text-center mb-8">Why Choose Arttifai Tech?</h3>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                icon: Users,
                title: "Expert Mentorship",
                description: "Learn directly from industry professionals at Google, Microsoft, and other tech leaders."
              },
              {
                icon: Briefcase,
                title: "Real Projects",
                description: "Work on actual projects used by millions of users worldwide."
              },
              {
                icon: Award,
                title: "Certification",
                description: "Receive industry-recognized certificates from Google and Microsoft."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 rounded-lg"
                variants={fadeInUp}
                whileHover={cardHover}
              >
                <item.icon className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 bg-gradient-to-b from-white via-secondary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center gradient-text mb-12"
            {...fadeInUp}
          >
            Available Internships
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                title: "Full Stack Development",
                duration: "1 week",
                type: "Remote",
                icon: Code,
                price: "₹6.99",
                formLink: "https://forms.gle/N7oTjujhxetADGn38"
              },
              {
                title: "Cloud Computing",
                duration: "1 week",
                type: "Remote",
                icon: Database,
                price: "₹6.99",
                formLink: "https://forms.gle/N7oTjujhxetADGn38"
              },
              {
                title: "Machine Learning",
                duration: "1 week",
                type: "Remote",
                icon: Brain,
                price: "₹6.99",
                formLink: "https://forms.gle/N7oTjujhxetADGn38"
              },
              {
                title: "UI/UX Design",
                duration: "1 week",
                type: "Remote",
                icon: PenTool,
                price: "₹6.99",
                formLink: "https://forms.gle/N7oTjujhxetADGn38"
              },
              {
                title: "Data Science",
                duration: "1 week",
                type: "Remote",
                icon: LineChart,
                price: "₹6.99",
                formLink: "https://forms.gle/N7oTjujhxetADGn38"
              },
              {
                title: "Cybersecurity",
                duration: "1 week",
                type: "Remote",
                icon: Shield,
                price: "₹6.99",
                formLink: "https://forms.gle/N7oTjujhxetADGn38"
              }
            ].map((internship, index) => {
              const IconComponent = internship.icon;
              return (
                <motion.div 
                  key={index} 
                  className="glass-card p-6 rounded-lg"
                  variants={fadeInUp}
                  whileHover={cardHover}
                >
                  <IconComponent className="h-10 w-10 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{internship.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{internship.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{internship.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <IndianRupee className="h-4 w-4 mr-2" />
                    <span>Price: {internship.price}</span>
                  </div>
                  <motion.a 
                    href={internship.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded hover:shadow-glow transition-all duration-300 inline-block text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center gradient-text mb-12"
            {...fadeInUp}
          >
            Get in Touch
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-primary-500 mr-3" />
                  <span>+91 6385874623</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-primary-500 mr-3" />
                  <span>support@arttifai.tech</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-lg"
            >
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/50" rows={4}></textarea>
                </div>
                <motion.button 
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={logo} alt="Logo"/>
              <p className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" />
              <p className="text-gray-400">
                Redefining The Future of Innovation through quality internships and practical learning experiences.
                In proud collaboration with Google and Microsoft.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors">Home</a></li>
                  <li><a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About</a></li>
                  <li><a href="#internships" className="text-gray-400 hover:text-primary-400 transition-colors">Internships</a></li>
                  <li><a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</a></li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">LinkedIn</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Twitter</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">Instagram</a></li>
                </ul>
              </motion.div>
            </div>
          </div>
          <motion.div 
            className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p>&copy; {new Date().getFullYear()} Arttifai Tech. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
