// src/app/page.js
import ProyectoCard from '@/components/ProyectoCard';
import { MIS_PROYECTOS } from '@/constants/proyectos';
import styles from './page.module.css'; // Importamos el objeto de estilos

// Componente local para las habilidades
function SkillsLocal() {
  const skills = [
    "PHP", "Laravel", "Node.js", "MySQL", 
    "PostgreSQL", "Linux (Ubuntu)", "Arduino/ESP32", "React"
  ];

  return (
    <div className={styles.skillsContainer}>
      {skills.map(s => (
        <span key={s} className={styles.skillBadge}>
          {s}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      
      {/* Encabezado */}
      <header className={styles.header}>
        <img 
          src="/perfil.jpg" 
          alt="Foto de David" 
          className={styles.profileImg} 
        />
        <h1 className={styles.title}>
          David | Full Stack Developer
        </h1>
        <p className={styles.subtitle}>
          Instructor de NTICx y Desarrollador de Aplicaciones. 
          Especializado en arquitecturas backend y proyectos IoT.
        </p>
        
        <SkillsLocal />
      </header>

      {/* Sección Sobre Mí */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Sobre mí</h2>
        <p className={styles.aboutText}>
          Soy un desarrollador apasionado por el backend y la arquitectura de sistemas. 
          Combino mi trabajo profesional con la docencia técnica en secundaria, 
          formando a los futuros profesionales en nuevas tecnologías.
        </p>
      </section>

      {/* Listado de Proyectos */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
        <div className={styles.projectsGrid}>
          {MIS_PROYECTOS.map(proy => (
            <ProyectoCard key={proy.id} proyecto={proy} />
          ))}
        </div>
      </section>

      {/* Pie de página */}
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} - David - Full Stack Developer & Instructor</p>
      </footer>
      
    </main>
  );
}