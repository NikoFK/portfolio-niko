import React from 'react';
import './Header.css';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li>
            <a 
              href="https://sites.google.com/view/fksprojects" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              FKS Projects
            </a>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button 
        className={`theme-toggle ${darkMode ? 'dark' : 'light'}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

export default Header;