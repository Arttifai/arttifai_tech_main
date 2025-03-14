// InternshipsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, PenTool, LineChart, Shield, Clock, MapPin } from 'lucide-react';
import { IndianRupee } from "lucide-react";
import { Link } from 'react-router-dom';

const internships = [
  { title: "Full Stack Development", duration: "1 week", type: "Remote", icon: Code, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "Cloud Computing", duration: "1 week", type: "Remote", icon: Database, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "Machine Learning", duration: "1 week", type: "Remote", icon: Brain, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "UI/UX Design", duration: "1 week", type: "Remote", icon: PenTool, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "Data Science", duration: "1 week", type: "Remote", icon: LineChart, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "Cybersecurity", duration: "1 week", type: "Remote", icon: Shield, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "Blockchain Development", duration: "1 week", type: "Remote", icon: Code, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "Artificial Intelligence", duration: "1 week", type: "Remote", icon: Brain, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "Game Development", duration: "1 week", type: "Remote", icon: Code, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "Embedded Systems", duration: "1 week", type: "Remote", icon: Database, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "Internet of Things (IoT)", duration: "1 week", type: "Remote", icon: Shield, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "DevOps", duration: "1 week", type: "Remote", icon: Code, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "Mobile App Development", duration: "1 week", type: "Remote", icon: Code, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" },
  { title: "Software Testing & QA", duration: "1 week", type: "Remote", icon: Shield, price: "6.99", formLink: "https://forms.gle/N7oTjujhxetADGn38" }
];


const InternshipsPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center gradient-text mb-12">Available Internships</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internships.map((internship, index) => {
            const IconComponent = internship.icon;
            return (
              <motion.div key={index} className="glass-card p-6 rounded-lg">
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
                >
                  Apply Now
                </motion.a>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link to="/" className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternshipsPage;
