import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Combining aesthetic appeal with functional user experience design."
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimizing applications for speed and exceptional user experience."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams to deliver results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              With over 5 years of experience in web development, I specialize in creating 
              exceptional digital experiences that combine beautiful design with robust functionality. 
              I'm passionate about staying current with emerging technologies and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                My journey in tech began with a curiosity about how websites work. 
                That curiosity evolved into a passion for creating digital solutions 
                that make a real difference in people's lives.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                I believe in the power of good design and clean code to solve complex 
                problems. Every project is an opportunity to learn something new and 
                push the boundaries of what's possible.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Frontend Development</span>
                  <span className="text-blue-600 font-semibold">95%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Backend Development</span>
                  <span className="text-blue-600 font-semibold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">UI/UX Design</span>
                  <span className="text-blue-600 font-semibold">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 font-medium">Project Management</span>
                  <span className="text-blue-600 font-semibold">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg mb-4">
                  <highlight.icon size={24} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;