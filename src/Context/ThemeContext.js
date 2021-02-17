import { createContext,useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

  const [activeTheme, setActiveTheme] = useState(false);

  const theme = {
      backgroundColor : activeTheme ? 'black' :' white',
      color: activeTheme ? 'white' :'black'
  }

  return (
    <ThemeContext.Provider value={{ theme ,activeTheme, setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
