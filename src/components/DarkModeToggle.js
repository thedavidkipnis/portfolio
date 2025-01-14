import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, [isDarkMode]);
  
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };
  
    return (
      <button onClick={toggleDarkMode} className="DarkModeButton">
        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </button>
    );
  }
  
  export default DarkModeToggle;