import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PreAssessment from './components/PreAssessment';
import SubjectOrientation from './components/SubjectOrientation';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <PreAssessment />
      <SubjectOrientation />
      <Features />
      <Footer />
    </div>
  );
}

export default App;