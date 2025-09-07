import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Led development of enterprise web applications serving 100k+ users. Architected scalable microservices and mentored junior developers.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Led a team of 5 developers on major platform redesign",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      location: "New York, NY",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated with UX team to create intuitive user interfaces for various client projects.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Increased user engagement by 35% through UI improvements",
        "Established component library used across 10+ projects"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Figma", "Git"]
    },
    {
      title: "Web Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Built and maintained company website and internal tools. Worked closely with marketing team to implement growth-driven development strategies.",
      achievements: [
        "Increased website conversion rate by 25%",
        "Developed internal CRM system saving 10+ hours/week",
        "Migrated legacy PHP application to modern React stack"
      ],
      technologies: ["JavaScript", "PHP", "MySQL", "WordPress", "Bootstrap"]
    },
    {
      title: "Junior Developer",
      company: "WebStudio Pro",
      location: "Remote",
      period: "2018 - 2019",
      type: "Contract",
      description: "Created custom WordPress themes and plugins for various clients. Gained experience in responsive design and cross-browser compatibility.",
      achievements: [
        "Completed 20+ WordPress projects successfully",
        "Achieved 98% client satisfaction rating",
        "Learned modern JavaScript frameworks"
      ],
      technologies: ["WordPress", "PHP", "JavaScript", "CSS", "jQuery"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023"
    },
    {
      name: "React Professional Developer",
      issuer: "Meta",
      year: "2022"
    },
    {
      name: "Google UX Design Certificate",
      issuer: "Google",
      year: "2021"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            My professional journey showcases a progression of increasing responsibilities 
            and technical expertise across various industries and project scales.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>
                )}
                
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Timeline Dot */}
                    <div className="hidden md:flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                          <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                        </div>
                        <div className="flex flex-col lg:text-right mt-2 lg:mt-0">
                          <div className="flex items-center gap-2 text-gray-600 mb-1">
                            <Calendar size={16} />
                            <span className="font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
                          <TrendingUp size={18} className="text-green-600" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start gap-2 text-gray-600">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">
              Certifications & Awards
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg mb-4">
                    <Award size={24} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-gray-600 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-blue-600 font-medium">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;