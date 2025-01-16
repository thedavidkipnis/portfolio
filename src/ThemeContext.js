import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create the provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light-mode'); // Default theme

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    // Set the initial theme
    setTheme(prefersDarkMode.matches ? 'dark-mode' : 'light-mode');

    // Listen for changes in preference
    const handleChange = (event) => {
      setTheme(event.matches ? 'dark-mode' : 'light-mode');
    };
    prefersDarkMode.addEventListener('change', handleChange);

    // Cleanup event listener
    return () => prefersDarkMode.removeEventListener('change', handleChange);
  }, []);

  // Provide the theme and the ability to change it
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}