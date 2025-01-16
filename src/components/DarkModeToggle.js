import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const DarkModeToggle = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const [isDarkMode, setIsDarkMode] = useState(theme == 'light-mode');
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
        <span>{isExpanded ? isDarkMode ? 'light mode' : 'dark mode' : '>>'}</span>
      </button>
    );
  }
  
  export default DarkModeToggle;