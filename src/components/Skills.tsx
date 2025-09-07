import React from 'react';
import { 
  Code2, 
  Palette, 
  Database, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Settings,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js", "JavaScript"]
    },
    {
      title: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      title: "Mobile",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo", "Firebase"]
    },
    {
      title: "Design",
      icon: Palette,
      color: "from-orange-500 to-red-500",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch", "Principle"]
    },
    {
      title: "Cloud",
      icon: Cloud,
      color: "from-indigo-500 to-blue-500",
      skills: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "Serverless"]
    },
    {
      title: "DevOps",
      icon: GitBranch,
      color: "from-gray-600 to-gray-800",
      skills: ["Git", "GitHub Actions", "Jenkins", "Terraform", "Ansible", "Linux"]
    },
    {
      title: "Tools",
      icon: Settings,
      color: "from-teal-500 to-green-500",
      skills: ["VS Code", "Webpack", "Vite", "ESLint", "Prettier", "Jest"]
    },
    {
      title: "Web Tech",
      icon: Globe,
      color: "from-rose-500 to-pink-500",
      skills: ["REST APIs", "WebSockets", "PWA", "SEO", "Performance", "Security"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks that I use to build 
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${category.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span>{skill}</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Years Experience" },
            { number: "30+", label: "Happy Clients" },
            { number: "15+", label: "Technologies" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;