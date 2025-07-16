import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PreAssessment from './components/PreAssessment';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <PreAssessment />
      <Features />
      <About />
      <Footer />
    </div>
  );
}

export default App;