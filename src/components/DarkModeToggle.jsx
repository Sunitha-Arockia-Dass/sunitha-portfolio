// DarkModeToggle.jsx
import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'enabled');

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkmode');
      localStorage.setItem('darkMode', 'enabled');
    } else {
      document.body.classList.remove('darkmode');
      localStorage.setItem('darkMode', 'disabled');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className={`dark-mode-toggle ${darkMode ? 'dark' : 'light'}`} // Add dark/light class based on mode
      onClick={toggleDarkMode}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
