import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext({} as any);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  // Create reactive theme variable
  const [theme, setTheme] = useState("dark");

  // Get html element
  const htmlElement = document.querySelector("html");

  useEffect(() => {
    htmlElement!.style.colorScheme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
