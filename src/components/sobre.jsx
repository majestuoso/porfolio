import React, { useState } from "react";
import "./sobre.css";

export default function Sobre() {
  const [seccionAbierta, setSeccionAbierta] = useState(null);

  const alternarDesplegable = (seccion) => {
    setSeccionAbierta(seccionAbierta === seccion ? null : seccion);
  };

  return (
    <section id="sobre" className="sobre">
      <div className="sobre-contenedor">
        <h2 className="titulo-seccion">Sobre mí & Trayectoria</h2>
        <p className="subtitulo-seccion">Haz clic en cada sección para energizar las pistas de datos</p>

        <div className="acordeon-circuito">
          
          {/* --- SECCIÓN 1: EDUCACIÓN --- */}
          <div className={`nodo-circuito ${seccionAbierta === "educacion" ? "activo" : ""}`}>
            {/* Cables decorativos de fondo que se iluminan por CSS */}
            <div className="cable-izquierdo pista-uno"></div>
            <div className="cable-derecho pista-uno"></div>
            
            <div className="acordeon-item">
              <button className="acordeon-header" onClick={() => alternarDesplegable("educacion")}>
                <span>🎓 Educación, Licencias y Certificaciones</span>
                <span className="flecha">▼</span>
              </button>
              <div className="acordeon-content">
                <div className="bloque-contenido">
                  <h3>Educación Formal</h3>
                  <div className="item-trayectoria">
                    <h4>Análisis de Sistemas</h4>
                    <p className="lugar">ISFDT 166 | mar. 2026 – Actualidad</p>
                  </div>
                  <div className="item-trayectoria">
                    <h4>Técnico Superior en Análisis, Desarrollo y Programación de Aplicaciones</h4>
                    <p className="lugar">ISFDT 166 | mar. 2023 – Actualidad</p>
                  </div>
                  <hr className="separador-interno" />
                  <h3>Licencias y Certificaciones</h3>
                  <div className="item-trayectoria cert">
                    <h4>🏆 Liderazgo</h4>
                    <p className="lugar">Santander Open Academy • mar. 2026</p>
                  </div>
                  <div className="item-trayectoria cert">
                    <h4>🏆 Inmersión IA + Google Gemini</h4>
                    <p className="lugar">Alura • sept. 2025</p>
                    <span className="id-credencial">ID: 12abbdc2-6dbf-4df5-9d36-19cce7d73a88</span>
                  </div>
                  <div className="item-trayectoria cert">
                    <h4>🏆 Power BI</h4>
                    <p className="lugar">Santander Open Academy • feb. 2026</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- SECCIÓN 2: SKILLS --- */}
          <div className={`nodo-circuito ${seccionAbierta === "skills" ? "activo" : ""}`}>
            <div className="cable-izquierdo pista-dos"></div>
            <div className="cable-derecho pista-dos"></div>
            
            <div className="acordeon-item">
              <button className="acordeon-header" onClick={() => alternarDesplegable("skills")}>
                <span>⚡ Habilidades Técnicas (Skills)</span>
                <span className="flecha">▼</span>
              </button>
              <div className="acordeon-content">
                <div className="bloque-contenido skills-grid">
                  <div className="categoria-skill">
                    <h3>Frontend</h3>
                    <ul>
                      <li>HTML5 & CSS3</li>
                      <li>JavaScript</li>
                      <li>Bootstrap</li>
                      <li>Consumo de API REST</li>
                    </ul>
                  </div>
                  <div className="categoria-skill">
                    <h3>Backend</h3>
                    <ul>
                      <li>PHP</li>
                      <li>Laravel</li>
                      <li>MySQL</li>
                      <li>Programación Orientada a Objetos (POO)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- SECCIÓN 3: EXPERIENCIA --- */}
          <div className={`nodo-circuito ${seccionAbierta === "experiencia" ? "activo" : ""}`}>
            <div className="cable-izquierdo pista-tres"></div>
            <div className="cable-derecho pista-tres"></div>
            
            <div className="acordeon-item">
              <button className="acordeon-header" onClick={() => alternarDesplegable("experiencia")}>
                <span>💼 Experiencia Laboral</span>
                <span className="flecha">▼</span>
              </button>
              <div className="acordeon-content">
                <div className="bloque-contenido">
                  <div className="item-trayectoria">
                    <h4>Profesor Substituto</h4>
                    <p className="lugar">EES N13 • Contrato temporal | mar. 2026 - Actualidad</p>
                    <p className="descripcion">Docencia orientada a la educación secundaria.</p>
                  </div>
                  <div className="item-trayectoria">
                    <h4>Programación & Desarrollo Freelance</h4>
                    <p className="lugar">Profesional Independiente | ene. 2024 - mar. 2026</p>
                    <p className="descripcion">Diseño y desarrollo de páginas web y aplicaciones móviles a medida.</p>
                  </div>
                  <div className="item-trayectoria">
                    <h4>Prácticas Profesionales</h4>
                    <p className="lugar">No-Country Simulation</p>
                    <p className="descripcion">Desarrollo de proyectos en equipos multidisciplinarios bajo metodologías ágiles.</p>
                  </div>
                  <div className="item-trayectoria">
                    <h4>Técnico de Automatización</h4>
                    <p className="lugar">Profesional Independiente • Autónomo | ene. 2007 - ene. 2026</p>
                    <p className="descripcion">19 años de experiencia resolviendo e implementando soluciones lógicas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}