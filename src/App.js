import React from 'react';

// components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// styles
import './App.css';
import './styles/index.css';

function App() {
  return (
    <div className='App'>
      <Header />
      {/* <Navigation /> */}
      {/* <Education />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
