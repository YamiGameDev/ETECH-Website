import './Hero.css';

const Hero = () => {
  const handleCTAClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#assessment');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="particle" style={{top: '20%', left: '10%'}}></div>
      <div className="particle" style={{top: '80%', left: '20%'}}></div>
      <div className="particle" style={{top: '30%', left: '80%'}}></div>
      <div className="particle" style={{top: '70%', left: '90%'}}></div>
      <div className="particle" style={{top: '50%', left: '50%'}}></div>
      
      <div className="hero-content">
        <h1>Empowerment Technologies</h1>
        <p>Transform your digital skills and unlock the power of technology to shape the future. Learn, create, and innovate with cutting-edge tools and methodologies.</p>
        <a href="#assessment" className="cta-button" onClick={handleCTAClick}>
          Test Your Knowledge
        </a>
      </div>
    </section>
  );
};

export default Hero;