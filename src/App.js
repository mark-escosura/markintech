import React from 'react';
// components
import Header from './components/Header';
import Hero from './components/Hero';
import SocialComponents from './sub-components/SocialComponents';
// import Education from './components/Education';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// styles
import './App.css';
import './styles/index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      {/* <Education />
      <Projects />
      <Contact />
    <Footer /> */}
      <SocialComponents />
    </div>
  );
}

export default App;
