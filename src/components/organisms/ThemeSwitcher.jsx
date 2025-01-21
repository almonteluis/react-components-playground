"use client";
import { useState } from "react";
// Challenge 2: Toggle Theme
/**
 * Challenge: Create a theme switcher with these features
 * ✅ Initialize state for `isDarkMode` as a boolean
 * ✅ Toggle between light/dark theme when button is clicked
 * ✅ Change background and text colors based on theme
 * ✅ Button text should change based on current theme
 * - Add smooth transitions between themes
 */
export default function ThemeSwitcher() {
  const [isDarkMode, setDarkMode] = useState(false);
  function themeToggler() {
    setDarkMode((prevTheme) => !prevTheme);
  }
  return (
    <div className={`theme-container ${isDarkMode ? "dark" : "light"}`}>
      <h1 className={`theme-title ${isDarkMode ? "Dark" : "Light"}`}>
        Current Theme: {isDarkMode ? "Dark" : "Light"}
      </h1>
      <button
        className={`theme-btn ${isDarkMode ? "dark" : "light"}`}
        onClick={themeToggler}
      >
        Switch Theme
      </button>
    </div>
  );
}
