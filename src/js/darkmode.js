import React, { useState, useEffect } from 'react';

function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the theme from localStorage on component mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-theme') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // Toggle dark theme class on the body
    document.body.classList.toggle('dark-theme', isDarkMode);

    // Update local storage based on theme toggle
    localStorage.setItem('theme', isDarkMode ? 'dark-theme' : 'light-theme');
  }, [isDarkMode]);

  return (
    <div className="theme-toggler" onClick={toggleTheme}>
      {/* Material icons for light and dark modes */}
      <span className={`material-icons-sharp ${isDarkMode ? '' : 'active'}`}>light_mode</span>
      <span className={`material-icons-sharp ${isDarkMode ? 'active' : ''}`}>dark_mode</span>
    </div>
  );
}

export default ThemeToggler;
