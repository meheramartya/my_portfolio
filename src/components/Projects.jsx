const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI and seamless user experience.",
      image: "🛒",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Productivity app with drag-and-drop functionality and real-time updates.",
      image: "📋",
      tags: ["React", "TypeScript", "Firebase", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Beautiful weather application with forecasts and interactive maps.",
      image: "🌤️",
      tags: ["React", "API", "Chart.js", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio built with modern technologies and smooth animations.",
      image: "💼",
      tags: ["React", "Tailwind", "Framer Motion", "Vite"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:-translate-y-2"
            >
              <div className="p-8">
                {/* Project Icon */}
                <div className="text-6xl text-center mb-6">
                  {project.image}
                </div>
                
                {/* Project Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {project.title}
                </h3>
                
                {/* Project Description */}
                <p className="text-gray-600 mb-6 text-center leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Buttons */}
                <div className="flex gap-4 justify-center">
                  <a
                    href={project.liveUrl}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-md"
                  >
                    Live Demo
                  </a>
                  
                  <a
                    href={project.githubUrl}
                    className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects