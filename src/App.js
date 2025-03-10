import React, { useState } from "react";
import { withTitle } from "./withTitle";
import { ThemeContext, Theme } from "./ThemeContext";
import "./App.css"; // Import file CSS

const App = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {/* Tambahkan kelas CSS berdasarkan darkMode */}
      <div className={`App ${darkMode ? "dark" : ""}`}>
        <h1>Halaman: {props.title}</h1>
        <Theme />
      </div>
    </ThemeContext.Provider>
  );
};

export default withTitle(App);