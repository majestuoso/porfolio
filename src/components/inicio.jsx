import React, { useState, useEffect, useCallback } from "react";
import "./inicio.css";

// --- CONSTANTES DEL TETRIS ---
const COLUMNAS = 14;
const FILAS = 22;
const PIEZAS = {
  I: { shape: [[1, 1, 1, 1]], color: "#00f0f0" },
  J: { shape: [[1, 0, 0], [1, 1, 1]], color: "#0000f0" },
  L: { shape: [[0, 0, 1], [1, 1, 1]], color: "#f0a000" },
  O: { shape: [[1, 1], [1, 1]], color: "#f0f000" },
  S: { shape: [[0, 1, 1], [1, 1, 0]], color: "#00f000" },
  T: { shape: [[0, 1, 0], [1, 1, 1]], color: "#a000f0" },
  Z: { shape: [[1, 1, 0], [0, 1, 1]], color: "#f00000" },
};

export default function Inicio({ luzEncendida, alternarLuz }) {
  // --- ESTADOS DEL JUEGO ---
  const [grid, setGrid] = useState(Array(FILAS).fill(Array(COLUMNAS).fill(0)));
  const [piezaActiva, setPiezaActiva] = useState(null);
  const [pos, setPos] = useState({ x: 5, y: 0 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const nuevaPieza = useCallback(() => {
    const llaves = Object.keys(PIEZAS);
    const tipo = llaves[Math.floor(Math.random() * llaves.length)];
    const p = PIEZAS[tipo];
    const xInicial = Math.floor(COLUMNAS / 2) - Math.floor(p.shape[0].length / 2);
    setPiezaActiva(p);
    setPos({ x: xInicial, y: 0 });
    if (chequearColision(xInicial, 0, p.shape)) {
      setGameOver(true);
    }
  }, [grid]);

  const chequearColision = (nx, ny, shape = piezaActiva?.shape) => {
    if (!shape) return false;
    for (let r = 0; r < shape.length; r++) {
      for (let c = 0; c < shape[r].length; c++) {
        if (shape[r][c] !== 0) {
          let newX = nx + c;
          let newY = ny + r;
          if (newX < 0 || newX >= COLUMNAS || newY >= FILAS || (newY >= 0 && grid[newY][newX] !== 0)) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const rotar = () => {
    if (!piezaActiva) return;
    const nuevaForma = piezaActiva.shape[0].map((_, i) =>
      piezaActiva.shape.map((row) => row[i]).reverse()
    );
    if (!chequearColision(pos.x, pos.y, nuevaForma)) {
      setPiezaActiva({ ...piezaActiva, shape: nuevaForma });
    }
  };

  const fijarPieza = () => {
    const nuevoGrid = grid.map((row) => [...row]);
    piezaActiva.shape.forEach((row, r) => {
      row.forEach((value, c) => {
        if (value !== 0 && pos.y + r >= 0) {
          nuevoGrid[pos.y + r][pos.x + c] = piezaActiva.color;
        }
      });
    });

    let lineasBorradas = 0;
    const gridFinal = nuevoGrid.filter((row) => {
      if (row.every((cell) => cell !== 0)) {
        lineasBorradas++;
        return false;
      }
      return true;
    });

    while (gridFinal.length < FILAS) {
      gridFinal.unshift(Array(COLUMNAS).fill(0));
    }

    setGrid(gridFinal);
    setScore((prev) => prev + lineasBorradas * 100);
    nuevaPieza();
  };

  const bajar = useCallback(() => {
    if (gameOver || !luzEncendida) return;
    if (!chequearColision(pos.x, pos.y + 1)) {
      setPos((prev) => ({ ...prev, y: prev.y + 1 }));
    } else {
      fijarPieza();
    }
  }, [pos, piezaActiva, grid, gameOver, luzEncendida]);

  // Manejo de clicks en botones táctiles (celular)
  const manejarBotonTactil = (e, accion) => {
    e.stopPropagation(); // Evita que se apague la lámpara
    if (!luzEncendida || gameOver) return;
    
    if (accion === "izq" && !chequearColision(pos.x - 1, pos.y)) setPos((p) => ({ ...p, x: p.x - 1 }));
    if (accion === "der" && !chequearColision(pos.x + 1, pos.y)) setPos((p) => ({ ...p, x: p.x + 1 }));
    if (accion === "abajo") bajar();
    if (accion === "rotar") rotar();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!luzEncendida || gameOver) return;
      if (e.key === "ArrowLeft" && !chequearColision(pos.x - 1, pos.y)) setPos((p) => ({ ...p, x: p.x - 1 }));
      if (e.key === "ArrowRight" && !chequearColision(pos.x + 1, pos.y)) setPos((p) => ({ ...p, x: p.x + 1 }));
      if (e.key === "ArrowDown") bajar();
      if (e.key === "ArrowUp") rotar();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [pos, piezaActiva, grid, luzEncendida, gameOver]);

  useEffect(() => {
    if (luzEncendida && !gameOver) {
      if (!piezaActiva) nuevaPieza();
      const interval = setInterval(bajar, 800);
      return () => clearInterval(interval);
    }
  }, [luzEncendida, gameOver, bajar, piezaActiva, nuevaPieza]);

  const reiniciar = (e) => {
    e.stopPropagation();
    setGrid(Array(FILAS).fill(Array(COLUMNAS).fill(0)));
    setScore(0);
    setGameOver(false);
    nuevaPieza();
  };

  return (
    <section id="inicio" className={`inicio ${luzEncendida ? "light-on" : "light-off"}`}>
      <div className="foto-fondo-decorativa">
        <img src="/porfolio/assets/perfil.jpg" alt="David Balbi" />
      </div>

      <div className="contenedor-principal-inicio">
        <div className="escena-contenedor">
          <div className="cable-lampara"></div>
          <div className="lampara-cabeza" onClick={alternarLuz} title="Haz clic para luz">
            <div className="foco-adentro"></div>
          </div>
          <div className="cono-luz"></div>

          {/* Computadora iMac */}
          <div className="computadora-imac">
            <div className="pantalla-marco">
              <div className="pantalla-contenido">
                {!luzEncendida ? (
                  <div className="terminal-codigo">
                    <span className="prompt">&gt;_</span>
                  </div>
                ) : (
                  <div className="tetris-container">
                    {gameOver ? (
                      <div className="tetris-gameover">
                        <p>GAME OVER</p>
                        <button onClick={reiniciar}>REINTENTAR</button>
                      </div>
                    ) : (
                      <>
                        <div className="tetris-grid">
                          {grid.map((row, y) =>
                            row.map((cell, x) => (
                              <div key={`${x}-${y}`} className="cell" style={{ backgroundColor: cell || "transparent" }} />
                            ))
                          )}
                          {piezaActiva &&
                            piezaActiva.shape.map((row, y) =>
                              row.map((value, x) =>
                                value !== 0 && (
                                  <div
                                    key={`p-${x}-${y}`}
                                    className="cell active"
                                    style={{
                                      backgroundColor: piezaActiva.color,
                                      left: `${((pos.x + x) / COLUMNAS) * 100}%`,
                                      top: `${((pos.y + y) / FILAS) * 100}%`,
                                    }}
                                  />
                                )
                              )
                            )}
                        </div>
                        <div className="tetris-score">PTS: {score}</div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="pie-computadora"></div>
            <div className="base-computadora"></div>
          </div>
          
          {/* CONTROL REMOTO TÁCTIL (Abajo de la PC) */}
          <div className="instrucciones-juego">
            {!luzEncendida ? (
              <span className="texto-ayuda">💡 Enciende la lámpara para jugar</span>
            ) : (
              <div className="controles-tactiles">
                <button className="btn-retro" onClick={(e) => manejarBotonTactil(e, "izq")}>⬅️</button>
                <button className="btn-retro" onClick={(e) => manejarBotonTactil(e, "rotar")}>🔄</button>
                <button className="btn-retro" onClick={(e) => manejarBotonTactil(e, "abajo")}>⬇️</button>
                <button className="btn-retro" onClick={(e) => manejarBotonTactil(e, "der")}>➡️</button>
              </div>
            )}
          </div>

          <div className="tabla-escritorio"></div>
        </div>

        {/* Texto de Bienvenida */}
        <div className="content">
          <div className="saludo">Hola, soy David Balbi</div>
          <h1>Me gusta crear cosas <span>divertidas</span> e <span>interactivas</span> con código.</h1>
          <p>Desarrollador Web Full Stack apasionado por las soluciones digitales.</p>
          <div className="switch-wrapper">
            <label className="switch">
              <input type="checkbox" checked={luzEncendida} onChange={alternarLuz} />
              <span className="slider round"></span>
            </label>
            <span className="switch-label">{luzEncendida ? "Apagar" : "Encender"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}