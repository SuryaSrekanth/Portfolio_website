import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 flex items-center min-h-screen relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Surya Srekanth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full-Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              I craft exceptional digital experiences with modern technologies, 
              turning innovative ideas into beautiful, functional applications that users love.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg font-medium">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 font-medium flex items-center justify-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;