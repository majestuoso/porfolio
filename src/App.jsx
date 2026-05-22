import React, { useState } from "react"; // Sumamos el estado de React
import Header from "./components/header";
import Inicio from "./components/inicio";
import Sobre from "./components/sobre";
import Proyectos from "./components/proyectos";
import Contacto from "./components/contacto";
import Footer from "./components/footer";
import "./App.css";

function App() {
  // Estado para controlar si la lámpara está encendida o apagada
  const [luzEncendida, setLuzEncendida] = useState(false);

  const alternarLuz = () => {
    setLuzEncendida(!luzEncendida);
  };

  return (
    // Reemplazamos el fragmento <> por este div que cambia de clase según la luz
    <div className={`portfolio-contenedor ${luzEncendida ? "luz-alta" : "luz-baja"}`}>
      <Header />
      <main>
        {/* Le pasamos el estado y la función a tu componente Inicio */}
        <Inicio luzEncendida={luzEncendida} alternarLuz={alternarLuz} />
        <Sobre />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;