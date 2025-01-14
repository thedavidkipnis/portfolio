import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isExpanded, expandButton] = useState(false);

    const expandedStyle = {width: '8vw'}
    const nonExpanded = {width: '4vw'}
  
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
      style={isExpanded ? expandedStyle : nonExpanded}
      onMouseEnter={() => expandButton(!isExpanded)}
      onMouseLeave={() => expandButton(!isExpanded)}
      >
        <span>{isExpanded ? isDarkMode ? 'Light Mode' : 'Dark Mode' : '>>'}</span>
      </button>
    );
  }
  
  export default DarkModeToggle;