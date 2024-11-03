import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div id="home"><Profile /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;