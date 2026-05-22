// src/components/contacto.jsx
import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import "./contacto.css";

export default function Contacto() {
  const [isOpen, setIsOpen] = useState(false);
  
  // ✅ Vinculado con tu ID de Formspree
  const [state, handleSubmit] = useForm("mqejbbpk");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="contacto" className="contacto">
      <h2>Contacto</h2>
      
      <button 
        className={`contacto-trigger ${isOpen ? "active" : ""}`} 
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        <span>¿Tenés un proyecto en mente o una propuesta laboral?</span>
        <span className="arrow-icon">{isOpen ? "▲" : "▼"}</span>
      </button>

      <div className={`contacto-dropdown ${isOpen ? "show" : ""}`}>
        <div className="contacto-content">
          
          {state.succeeded ? (
            <div className="form-success-message">
              <h3>¡Mensaje enviado con éxito! 📬</h3>
              <p>Gracias por comunicarte. Te voy a estar respondiendo a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contacto-form">
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="name" required placeholder="Tu nombre" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required placeholder="tu@email.com" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea id="mensaje" name="message" rows="4" required placeholder="Escribí tu mensaje acá..."></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button 
                type="submit" 
                className="btn-submit" 
                disabled={state.submitting}
              >
                {state.submitting ? "Enviando... ⏳" : "Enviar Mensaje 🚀"}
              </button>
            </form>
          )}

          <div className="contacto-directo">
            <p>O si lo preferís, podés enviarme un correo directamente a:</p>
            <a href="mailto:davidbalbi@live.com" className="email-link">
              📧 davidbalbi@live.com
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}