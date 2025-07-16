import './Footer.css';

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
          <a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Features</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
        </div>
        <p className="copyright">&copy; 2025 Empowerment Technology. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;