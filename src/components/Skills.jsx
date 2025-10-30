const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600", icon: "⚡" },
    { name: "React", level: 85, color: "from-cyan-400 to-blue-600", icon: "⚛️" },
    { name: "TypeScript", level: 80, color: "from-blue-500 to-blue-700", icon: "📘" },
    { name: "HTML/CSS", level: 95, color: "from-orange-400 to-orange-600", icon: "🎨" },
    { name: "Tailwind CSS", level: 88, color: "from-teal-400 to-cyan-500", icon: "💨" },
    { name: "Node.js", level: 75, color: "from-green-500 to-green-600", icon: "🟢" },
    { name: "Git/GitHub", level: 85, color: "from-gray-600 to-gray-700", icon: "📚" },
    { name: "UI/UX Design", level: 80, color: "from-purple-500 to-pink-600", icon: "🎯" }
  ]

  const tools = [
    { name: "VS Code", icon: "💻", description: "Code Editor" },
    { name: "Figma", icon: "🎨", description: "Design Tool" },
    { name: "Git", icon: "📊", description: "Version Control" },
    { name: "Chrome DevTools", icon: "🔧", description: "Debugging" },
    { name: "Postman", icon: "📬", description: "API Testing" },
    { name: "Vite", icon: "⚡", description: "Build Tool" },
    { name: "Rolldown", icon: "🚀", description: "Fast Bundler" },
    { name: "Netlify", icon: "☁️", description: "Deployment" }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Skills & Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="bg-gray-50 rounded-xl p-4 shadow-md">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} shadow-inner`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {tools.map((tool) => (
                <div key={tool.name} className="bg-white border border-gray-200 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <div className="font-semibold text-gray-800 text-sm">{tool.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{tool.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills