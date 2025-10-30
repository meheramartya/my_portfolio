import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white" style={{ margin: 0, padding: 0 }}>
      <Header />
      
      <main style={{ width: '100%', margin: 0, padding: 0 }}>
        {/* Hero Section */}
        <section id="home" style={{ width: '100%', margin: 0, padding: '5rem 1rem' }} className="min-h-screen flex items-center justify-center bg-gray-50">
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }} className="w-full">
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ width: '8rem', height: '8rem', background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', borderRadius: '50%', margin: '0 auto 1.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid white', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
                <span style={{ fontSize: '2.5rem', color: 'white' }}>👨‍💻</span>
              </div>
            </div>
            
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem', lineHeight: '1.2' }} className="text-4xl sm:text-5xl md:text-6xl">
              Hi, I'm <span style={{ background: 'linear-gradient(to right, #2563eb, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Amartya Meher</span>
            </h1>
            
            <p style={{ fontSize: '1.5rem', color: '#4b5563', marginBottom: '2rem' }} className="text-xl md:text-2xl">
              Frontend Developer & UI/UX Designer
            </p>
            
            <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '3rem', maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.7' }} className="text-lg">
              I create beautiful, responsive web applications with modern technologies. 
              Passionate about clean code, great user experiences, and bringing ideas to life.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }} className="sm:flex-row">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: 'linear-gradient(to right, #2563eb, #7c3aed)', color: 'white', padding: '0.75rem 2rem', borderRadius: '0.75rem', fontWeight: '600', border: 'none', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #1d4ed8, #6d28d9)';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'linear-gradient(to right, #2563eb, #7c3aed)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                }}
              >
                🚀 View My Work
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ border: '2px solid #d1d5db', color: '#374151', padding: '0.75rem 2rem', borderRadius: '0.75rem', fontWeight: '600', cursor: 'pointer', background: 'transparent', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.color = '#2563eb';
                }}
                onMouseOut={(e) => {
                  e.target.style.borderColor = '#d1d5db';
                  e.target.style.color = '#374151';
                }}
              >
                📧 Get In Touch
              </button>
            </div>
          </div>
        </section>

        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App