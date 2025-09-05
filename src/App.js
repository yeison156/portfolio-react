import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

//importaciones (agregando .js):
import Inicio from "./paginas/inicio.js";
import About from "./paginas/about.js";
import Contact from "./paginas/contact.js";
import Footer from "./componentes/Footer.js";

// Estilos globales
import "./index.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  // 🌙 Nuevo estado para el tema
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 🔄 Función para cambiar tema
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // 🔄 Función para cambiar menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 💾 useEffect para aplicar el tema al DOM y guardarlo en localStorage
  useEffect(() => {
    // Aplicar tema al documento
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // 💾 useEffect para cargar tema guardado al iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <Router>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">Mi Web</div>

        {/* Botón hamburguesa */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/" onClick={toggleMenu}>Inicio</Link>
          <Link to="/about" onClick={toggleMenu}>Sobre mí</Link>
          <Link to="/contact" onClick={toggleMenu}>Contacto</Link>
          
          {/* 🌙 Botón para cambiar tema */}
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </header>

      {/* Contenido principal */}
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;