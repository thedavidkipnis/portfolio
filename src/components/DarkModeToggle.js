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
      <button onClick={toggleDarkMode} className="DarkModeButton"
      style={{height: '3vh', width: '3vh', marginRight: '0.5vh', marginTop: '0.5vh'}}>
        X
      </button>
    );
  }
  
  export default DarkModeToggle;