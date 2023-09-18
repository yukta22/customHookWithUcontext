import React, { ReactNode, createContext, useContext, useState } from "react";

type Theme = "light" | "dark";
type ThemeStyle = {
  text: string;
  background: string;
  border: string;
};

export type ThemeContext = {
  theme: Theme;
  colors: ThemeStyle;
  toggleTheme?: () => void;
};

const themes: { dark: ThemeStyle; light: ThemeStyle } = {
  dark: {
    text: "white",
    background: "black",
    border: "2px solid gray",
  },
  light: {
    text: "black",
    background: "white",
    border: "1px solid black",
  },
};

export const useTheme = () => {
  const context = useContext<ThemeContext>(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within an AuthProvider");
  }

  return context;
};

export const ThemeContext = createContext<ThemeContext>({
  theme: "light",
  colors: themes.light,
});
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const colors = theme === "light" ? themes.light : themes.dark;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
