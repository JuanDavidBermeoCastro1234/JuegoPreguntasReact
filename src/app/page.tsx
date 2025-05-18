'use client';
import { useState } from 'react';

export default function HomePage() {
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div className="container">
      <img src="/img/img.png" alt="Logo Millonario" className="logo" />
      <h1 className="title">¿Quien quiere ser programador?</h1>
      <p className="subtitle">¡Pon a prueba tus conocimientos en programación y gana puntos!</p>

      <div className="section_botones">
        <button className="boton main">Jugar</button>
        <button className="boton" onClick={() => setMostrarModal(true)}>
          Instrucciones
        </button>
      </div>

      {mostrarModal && (
        <div className="modal">
          <div className="modal_contenido">
            <div className="modal_header">
              <h2 className="modal_titulo">Instrucciones del Juego</h2>
            </div>
            
            <div className="modal_scrollable">
              <div className="instrucciones_contenido">
                <p className="instrucciones_resumen">Demuestra tus conocimientos de programación en este emocionante desafío:</p>
                
                <div className="instrucciones_item">
                  <span className="instrucciones_icono">🎯</span>
                  <span className="instrucciones_texto"><strong>Objetivo:</strong> Acertar la mayor cantidad de preguntas sobre POO, Frameworks y Persistencia</span>
                </div>
                
                <div className="instrucciones_item">
                  <span className="instrucciones_icono">❓</span>
                  <span className="instrucciones_texto"><strong>Dinámica:</strong> 4 opciones por pregunta (solo 1 correcta)</span>
                </div>
                
                <div className="instrucciones_item">
                  <span className="instrucciones_icono">🃏</span>
                  <span className="instrucciones_texto"><strong>Comodín 50/50:</strong> Elimina 2 respuestas incorrectas (1 uso por partida)</span>
                </div>
                
                <div className="instrucciones_item">
                  <span className="instrucciones_icono">⏱️</span>
                  <span className="instrucciones_texto"><strong>Fin del juego:</strong> Al responder todo correctamente o alcanzar el límite de preguntas</span>
                </div>
                
                <p className="instrucciones_emoji">🚀 <span>¡Conviertete en un verdadero programador!</span></p>
              </div>
            </div>
            
            <div className="modal_footer">
              <button className="cerrar_modal" onClick={() => setMostrarModal(false)}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}