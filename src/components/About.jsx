const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">Crafting Digital Experiences</h3>
              <p className="text-blue-100 leading-relaxed mb-4">
                I'm a passionate frontend developer with 2+ years of experience creating 
                modern web applications. I love turning complex problems into simple, 
                beautiful designs that users love.
              </p>
              <p className="text-blue-100 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['React', 'JavaScript', 'TypeScript', 'Tailwind', 'Node.js', 'UI/UX'].map((tech) => (
                <span 
                  key={tech}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Quick Facts</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🎯", label: "Experience", value: "3+ Years" },
                { icon: "🚀", label: "Projects", value: "50+" },
                { icon: "📍", label: "Location", value: "Remote" },
                { icon: "💼", label: "Availability", value: "Open to Work" }
              ].map((fact) => (
                <div key={fact.label} className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-2xl mb-2">{fact.icon}</div>
                  <div className="text-sm text-gray-600 mb-1">{fact.label}</div>
                  <div className="font-bold text-gray-800">{fact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About