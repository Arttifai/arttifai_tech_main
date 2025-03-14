import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Mail, Phone, MapPin, ChevronRight, Briefcase, Clock, Award, Building, Globe, Code, Database, Cpu, PenTool, LineChart, Shield, Brain, IndianRupee } from 'lucide-react';
import logo from '/logo.png';

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
              <img src={logo} alt="Logo" className="h-20" />
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
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Redefining The Future of Innovation
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Join Arttifai Tech's internship program in collaboration with Google and Microsoft.
              </p>
              <motion.div>
                <a
                  href="#internships"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg shadow-glow hover:shadow-glow-lg transition-all duration-300"
                >
                  Explore Internships
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="py-20 bg-gradient-to-b from-white via-secondary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 className="text-3xl font-bold text-center gradient-text mb-12" {...fadeInUp}>
            Available Internships
          </motion.h2>
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="initial" animate="animate">
            {[
              { title: "Full Stack Development", icon: Code },
              { title: "Deep Learning", icon: Database },
              { title: "Machine Learning", icon: Brain },
              { title: "UI/UX Design", icon: PenTool },
              { title: "Data Science", icon: LineChart },
              { title: "Game Development", icon: Shield }
            ].map((internship, index) => {
              const IconComponent = internship.icon;
              return (
                <motion.div key={index} className="glass-card p-6 rounded-lg" variants={fadeInUp} whileHover={cardHover}>
                  <IconComponent className="h-10 w-10 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{internship.title}</h3>
                  <motion.a 
                    href="https://forms.gle/N7oTjujhxetADGn38"
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <p>&copy; {new Date().getFullYear()} Arttifai Tech. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;
