import "./proyectos.css";
import ProyectoCard from "./ProyectoCard";
import styles from "./ProyectoCard.module.css"; // Importamos tus estilos originales de tarjeta

const MIS_PROYECTOS = [
  {
    id: 1,
    titulo: "Sistema de Inventario Maniquíes",
    descripcion: "Desarrollo de base de datos relacional y sistema de gestión de stock para fábrica de figuras humanas y animales.",
    tecnologias: ["PHP", "MySQL", "Ubuntu"],
    link: "https://github.com/majestuoso/Gestion_BD_Tecda3.git"
  },
  {
    id: 2,
    titulo: "Estación Meteorológica IoT",
    descripcion: "Proyecto pedagógico con ESP32 y sensores (DHT22, BMP180) conectado a la nube para visualización en tiempo real.",
    tecnologias: ["C++", "Arduino", "IoT Cloud"],
    link: "https://github.com/majestuoso/Estacion_Meteorologica.git"
  },
  {
    id: 3,
    titulo: "no country - simulation",
    descripcion: "Simulacion de un Sistema de testimonial-cms",
    tecnologias: ["Node.js", "Express", "PostgreSQL"],
    link: "https://github.com/No-Country-simulation/S03-26-Equipo-18-Web-App-Development.git"
  },
  {
    id: 4,
    titulo: "Labor Docente - NTICx",
    descripcion: "Instructor en nivel secundario enfocado en nuevas tecnologías.",
    tecnologias: ["Docencia", "TICs"],
    link: "https://www.0223.com.ar/nota/2026-3-13-16-17-0-kicillof-concreto-la-historica-inauguracion-de-una-escuela-rural-en-tandil-nos-enorgullece",
    fotoUrl: "/assets/escuela.jpeg",
    esDocencia: true
  }
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <h2>Mis Proyectos</h2>
      <div className="proyectos-grid">
        
        {/* 1. Tus 4 proyectos originales mediante el map */}
        {MIS_PROYECTOS.map((proyecto) => (
          <ProyectoCard key={proyecto.id} proyecto={proyecto} />
        ))}

        {/* 2. Cuadrado manual: Aplicación del Clima */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3 className={styles.projectName}>Aplicación del Clima</h3>
            <p className={styles.description}>
              Interfaz dinámica para consultar el estado del tiempo en tiempo real consumiendo APIs climáticas.
            </p>
            
            <div className={styles.techList}>
              <span className={styles.techTag}>HTML5</span>
              <span className={styles.techTag}>CSS3</span>
              <span className={styles.techTag}>JavaScript</span>
            </div>

            <a 
              href="https://majestuoso.github.io/clima/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              🚀 Ver proyecto en vivo →
            </a>
          </div>
        </div>

        {/* 3. NUEVO CUADRADO: E-Commerce Joyería (WordPress) */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h3 className={styles.projectName}>E-Commerce Joyería Rodríguez</h3>
            <p className={styles.description}>
              Sitio web de comercio electrónico autoadministrable desarrollado a medida, con pasarela de pagos integrada y optimización de catálogo.
            </p>
            
            <div className={styles.techList}>
              <span className={styles.techTag}>WordPress</span>
              <span className={styles.techTag}>WooCommerce</span>
              <span className={styles.techTag}>Railway</span>
            </div>

            <a 
              href="https://joyeria-rodriguez-desarrollo.up.railway.app//" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              🛍️ Ver tienda en vivo →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}