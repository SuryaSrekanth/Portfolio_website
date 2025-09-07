import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web App",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A full-featured e-commerce platform built with React and Node.js, featuring payment integration and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      category: "Mobile App",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A cross-platform mobile app for team collaboration and task management with real-time updates.",
      technologies: ["React Native", "Firebase", "TypeScript"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "AI Dashboard",
      category: "Web App",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "An AI-powered analytics dashboard with data visualization and machine learning insights.",
      technologies: ["Next.js", "Python", "TensorFlow", "D3.js"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A responsive portfolio website with modern design and smooth animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Fitness Tracker",
      category: "Mobile App",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A comprehensive fitness tracking app with workout plans and progress monitoring.",
      technologies: ["Flutter", "Dart", "SQLite", "Charts"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Brand Identity",
      category: "Design",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete brand identity design including logo, colors, typography, and guidelines.",
      technologies: ["Figma", "Illustrator", "Photoshop"],
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const categories = ['All', 'Web App', 'Mobile App', 'Design'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring web applications, mobile apps, and design projects 
            that demonstrate my skills and creativity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Filter size={16} />
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${
                project.featured ? 'ring-2 ring-blue-500/20' : ''
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 absolute z-10 rounded-br-lg">
                  Featured
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-medium"
          >
            Let's Work Together
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;