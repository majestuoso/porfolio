// src/components/footer.jsx
import React from "react";
import "./footer.css"; // <- Corregido: Importamos tu CSS plano original

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} David. Todos los derechos reservados.</p>
      
      <div className="social-links">
        {/* GitHub corregido */}
        <a href="https://github.com/majestuoso" target="_blank" rel="noopener noreferrer" className="link">
          💻 GitHub
        </a>
        
        {/* LinkedIn corregido */}
        <a href="https://www.linkedin.com/in/david-balbi" target="_blank" rel="noopener noreferrer" className="link">
          💼 LinkedIn
        </a>
        
        {/* Instagram en lugar de Twitter */}
        <a href="https://www.instagram.com/davbalbi" target="_blank" rel="noopener noreferrer" className="link">
          📸 Instagram
        </a>
      </div>
    </footer>
  );
}