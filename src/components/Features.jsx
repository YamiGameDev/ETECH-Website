import { useEffect, useRef } from 'react';
import './Features.css';

const Features = () => {
  const featuresRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = '0s';
          entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
      });
    }, observerOptions);

    const featureCards = featuresRef.current?.querySelectorAll('.feature-card');
    featureCards?.forEach(card => {
      card.style.opacity = '0';
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '💻',
      title: 'Digital Literacy',
      description: 'Master essential digital skills including productivity software, internet safety, and digital communication tools that are fundamental in today\'s technology-driven world.'
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Learn to create dynamic websites and web applications using modern technologies like HTML5, CSS3, JavaScript, and popular frameworks.'
    },
    {
      icon: '📱',
      title: 'Mobile Technology',
      description: 'Explore mobile app development, responsive design principles, and understand how mobile technology shapes our daily interactions.'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity',
      description: 'Understand digital security principles, privacy protection, and learn how to safeguard personal and organizational data in the digital age.'
    },
    {
      icon: '🎨',
      title: 'Digital Content Creation',
      description: 'Master multimedia content creation including graphics design, video editing, and digital storytelling for effective communication.'
    },
    {
      icon: '🤖',
      title: 'Emerging Technologies',
      description: 'Explore cutting-edge technologies like artificial intelligence, IoT, blockchain, and understand their impact on society and future careers.'
    }
  ];

  return (
    <section className="features" id="features" ref={featuresRef}>
      <div className="container">
        <h2 className="section-title">Core Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;