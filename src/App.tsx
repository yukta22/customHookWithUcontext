import { useContext, useState } from "react";
import { ThemeContext, useTheme } from "./hooks/use-theme";

function App() {
  const { theme, toggleTheme, colors } = useTheme();

  return (
    <>
      <div
        style={{
          backgroundColor: colors.background,
          color: colors.text,
          border: colors.border,
          textAlign: "center",
          height: "30rem",
          margin: "1rem",
          paddingTop: "12rem",
        }}
      >
        <h1>Changing Theme</h1>
        <h4>Current Theme : {theme}</h4>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}

export default App;
