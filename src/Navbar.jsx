import {useState, useEffect} from "react";
import "./Navbar.css";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="navbar">
      <div className="logo">📝 Todo App</div>

      <div className="nav-links">
        <a href="/tasks">📝 Tasks</a>
        <a href="/history">📜 History</a>
        <a href="/login">🔐 Login</a>
        <a href="/register">🆕 Register</a>
        <a href="/profile">👤 Profile</a>
      </div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? "☀ Light" : "🌙 Dark"}
      </button>
    </div>
  );
};

export default Navbar;
