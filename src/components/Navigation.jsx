import { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">EmpowerTech</div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#assessment" onClick={(e) => handleNavClick(e, '#assessment')}>Assessment</a></li>
          <li><a href="#orientation" onClick={(e) => handleNavClick(e, '#orientation')}>Subject Info</a></li>
          <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Features</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
        <div 
          className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;