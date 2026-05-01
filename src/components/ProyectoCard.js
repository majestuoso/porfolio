// src/components/ProyectoCard.js
import styles from './ProyectoCard.module.css';

export default function ProyectoCard({ proyecto }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.projectName}>{proyecto.nombre}</h3>
      <p className={styles.description}>{proyecto.descripcion}</p>
      
      <div className={styles.techList}>
        {proyecto.tecnologias.map(tech => (
          <span key={tech} className={styles.techTag}>
            {tech}
          </span>
        ))}
      </div>
      
      <a 
        href={proyecto.github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.link}
      >
        Ver código en GitHub →
      </a>
    </div>
  );
}