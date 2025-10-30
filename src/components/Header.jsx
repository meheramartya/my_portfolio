import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.getElementById(href.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(8px)',
      zIndex: 50,
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 0'
        }}>
          <div 
            onClick={() => scrollToSection('#home')}
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1f2937',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.color = '#2563eb'}
            onMouseOut={(e) => e.target.style.color = '#1f2937'}
          >
            Portfolio
          </div>

          <div style={{ display: 'none', gap: '2rem' }} className="md:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                style={{
                  color: '#4b5563',
                  fontWeight: 500,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#2563eb'}
                onMouseOut={(e) => e.target.style.color = '#4b5563'}
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            style={{
              display: 'block',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div style={{
              width: '1.5rem',
              height: '2px',
              background: '#374151',
              marginBottom: '0.375rem',
              transition: 'transform 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none'
            }}></div>
            <div style={{
              width: '1.5rem',
              height: '2px',
              background: '#374151',
              marginBottom: '0.375rem',
              transition: 'opacity 0.3s ease',
              opacity: isMenuOpen ? 0 : 1
            }}></div>
            <div style={{
              width: '1.5rem',
              height: '2px',
              background: '#374151',
              transition: 'transform 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
            }}></div>
          </button>
        </nav>

        {isMenuOpen && (
          <div style={{
            display: 'block',
            background: 'white',
            borderRadius: '0.5rem',
            padding: '1rem',
            border: '1px solid #e5e7eb',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            marginTop: '0.5rem'
          }} className="md:hidden">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.75rem',
                  color: '#4b5563',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '0.375rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.color = '#2563eb';
                  e.target.style.background = '#f3f4f6';
                }}
                onMouseOut={(e) => {
                  e.target.style.color = '#4b5563';
                  e.target.style.background = 'transparent';
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header