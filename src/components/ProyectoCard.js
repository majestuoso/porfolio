// src/components/ProyectoCard.js
import styles from './ProyectoCard.module.css';

export default function ProyectoCard({ proyecto }) {
  if (!proyecto) return null;

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <h3 className={styles.projectName}>{proyecto.titulo}</h3>
        <p className={styles.description}>{proyecto.descripcion}</p>
        
        <div className={styles.techList}>
          {proyecto.tecnologias.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        {/* Enlace 1: Noticia (para Docencia) o GitHub (para el resto) */}
        <a 
          href={proyecto.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.link}
        >
          {proyecto.esDocencia ? "📰 Leer noticia de la inauguración →" : "💻 Ver código en GitHub →"}
        </a>

        {/* Enlace 2: Solo aparece en Docencia para ver la foto específica */}
        {proyecto.esDocencia && proyecto.fotoUrl && (
          <a 
            href={proyecto.fotoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.link}
            style={{ marginTop: '12px', color: '#38bdf8', borderTop: '1px solid #1e293b', paddingTop: '12px' }}
          >
            📸 Ver foto del establecimiento →
          </a>
        )}
      </div>
    </div>
  );
}