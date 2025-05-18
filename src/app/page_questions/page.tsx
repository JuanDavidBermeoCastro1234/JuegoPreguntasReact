"use client";

import Image from "next/image";
import preguntasData from "./preguntas.json";
import { useState, useEffect } from "react";

interface Pregunta {
  id: number;
  categoria: string;
  titulo: string;
  enunciado: string;
  pregunta: string;
  opciones: string[];
  respuesta: string;
}

interface HistorialItem {
  nombre: string;
  puntaje: number;
}

export default function Home() {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [preguntaActual, setPreguntaActual] = useState<Pregunta | null>(null);
  const [puntaje, setPuntaje] = useState(0);
  const [seleccion, setSeleccion] = useState<string | null>(null);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState<boolean | null>(null);
  const [contadorPreguntas, setContadorPreguntas] = useState(0);
  const [estadoJuego, setEstadoJuego] = useState<"inicio" | "jugando" | "ganaste" | "perdiste">("inicio");

  // Nuevos estados
  const [nombreJugador, setNombreJugador] = useState<string>("");
  const [mostrarModal, setMostrarModal] = useState(false);
  const [usado5050, setUsado5050] = useState(false);
  const [usadoMostrar, setUsadoMostrar] = useState(false);
  const [opcionesReducidas, setOpcionesReducidas] = useState<string[] | null>(null);
  const [mostrarRespuestaPoder, setMostrarRespuestaPoder] = useState(false);
  const [historial, setHistorial] = useState<HistorialItem[]>([]);
  const [mostrarHistorial, setMostrarHistorial] = useState(false);

  useEffect(() => {
    setPreguntas(preguntasData);
    const historialGuardado = localStorage.getItem("historial");
    if (historialGuardado) {
      setHistorial(JSON.parse(historialGuardado));
    }
  }, []);

  const cargarPreguntaAleatoria = (lista: Pregunta[]) => {
    const aleatoria = lista[Math.floor(Math.random() * lista.length)];
    setPreguntaActual(aleatoria);
    setSeleccion(null);
    setRespuestaCorrecta(null);
    setOpcionesReducidas(null);
    setMostrarRespuestaPoder(false);
  };

  const iniciarJuego = () => {
    if (nombreJugador.trim() === "") return;
    setEstadoJuego("jugando");
    setPuntaje(0);
    setContadorPreguntas(0);
    cargarPreguntaAleatoria(preguntas);
  };

  const reiniciarJuego = () => {
    setPuntaje(0);
    setContadorPreguntas(0);
    setEstadoJuego("jugando");
    setUsado5050(false);
    setUsadoMostrar(false);
    setMostrarModal(false);
    cargarPreguntaAleatoria(preguntas);
  };

  const manejarRespuesta = (opcion: string) => {
    if (seleccion || estadoJuego !== "jugando") return;

    const esCorrecta = opcion === preguntaActual?.respuesta;
    setSeleccion(opcion);
    setRespuestaCorrecta(esCorrecta);
    const nuevasBuenas = puntaje + (esCorrecta ? 1 : 0);
    const nuevasContador = contadorPreguntas + 1;

    setPuntaje(nuevasBuenas);
    setContadorPreguntas(nuevasContador);

    setTimeout(() => {
      if (nuevasBuenas >= 10) {
        finalizarJuego("ganaste", nuevasBuenas);
      } else if (nuevasContador >= 15) {
        finalizarJuego("perdiste", nuevasBuenas);
      } else {
        cargarPreguntaAleatoria(preguntas);
      }
    }, 1000);
  };

  const finalizarJuego = (estado: "ganaste" | "perdiste", puntos: number) => {
    setEstadoJuego(estado);
    const nuevoHistorial = [...historial, { nombre: nombreJugador, puntaje: puntos }];
    setHistorial(nuevoHistorial);
    localStorage.setItem("historial", JSON.stringify(nuevoHistorial));
  };

  const activar5050 = () => {
    if (!preguntaActual || usado5050 || seleccion) return;
    const incorrectas = preguntaActual.opciones.filter((op) => op !== preguntaActual.respuesta);
    const eliminadas = incorrectas.sort(() => 0.5 - Math.random()).slice(0, 2);
    const restantes = preguntaActual.opciones.filter((op) => !eliminadas.includes(op));
    setOpcionesReducidas(restantes);
    setUsado5050(true);
    setMostrarModal(false);
  };

  const activarMostrarRespuesta = () => {
    if (!preguntaActual || usadoMostrar || seleccion) return;
    setMostrarRespuestaPoder(true);
    setUsadoMostrar(true);
    setMostrarModal(false);
  };

  const obtenerOpcionesAMostrar = () => {
    if (opcionesReducidas) return opcionesReducidas;
    return preguntaActual?.opciones || [];
  };

  const borrarHistorial = () => {
    localStorage.removeItem("historial");
    setHistorial([]);
  };

  return (
    <main className="caja-principal">
      <Image className="logo" src="/programing.png" width={200} height={200} priority alt="logo banco de preguntas" />

      {/* Pantalla de inicio */}
      {estadoJuego === "inicio" && (
        <div className="inicio">
          <h2>Bienvenido al Banco de Preguntas</h2>
          <input
            type="text"
            placeholder="Escribe tu nombre..."
            value={nombreJugador}
            onChange={(e) => setNombreJugador(e.target.value)}
            className="input-nombre"
          />
          <button className="btn-jugar" onClick={iniciarJuego}>
            Comenzar Juego
          </button>
          {historial.length > 0 && (
            <>
              <button className="btn-historial" onClick={() => setMostrarHistorial(!mostrarHistorial)}>
                {mostrarHistorial ? "Ocultar historial" : "Ver historial"}
              </button>
              {mostrarHistorial && (
                <div className="historial">
                  <h3>Historial de jugadores</h3>
                  <ul>
                    {historial.map((item, idx) => (
                      <li key={idx}>
                        {item.nombre} - {item.puntaje} puntos
                      </li>
                    ))}
                  </ul>
                  <button className="btn-borrar" onClick={borrarHistorial}>
                    Borrar historial
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Modal de poderes */}
      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
            <h3>Escoge un poder</h3>
            <button onClick={activar5050} disabled={usado5050} className={usado5050 ? "btn-poder usado" : "btn-poder"}>
              50/50 (elimina dos incorrectas)
            </button>
            <button onClick={activarMostrarRespuesta} disabled={usadoMostrar} className={usadoMostrar ? "btn-poder usado" : "btn-poder"}>
              Mostrar respuesta correcta
            </button>
            <button onClick={() => setMostrarModal(false)} className="btn-cerrar">
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Resultado final */}
     {estadoJuego !== "jugando" && estadoJuego !== "inicio" && (
  <div className="mensaje-final">
    <h2 className={estadoJuego === "ganaste" ? "correcta" : "incorrecta"}>
      {estadoJuego === "ganaste"
        ? `🎉 ¡${nombreJugador}, ganaste con ${puntaje} respuestas correctas!`
        : `😢 ${nombreJugador}, perdiste. Solo obtuviste ${puntaje} respuestas correctas.`}
    </h2>
    <button className="btn-reiniciar" onClick={reiniciarJuego}>
      Volver a jugar
    </button>
    <button className="btn-inicio" onClick={() => setEstadoJuego("inicio")}>
      Volver al inicio
    </button>
    <button className="btn-historial" onClick={() => setMostrarHistorial(!mostrarHistorial)}>
      {mostrarHistorial ? "Ocultar historial" : "Ver historial"}
    </button>

    {/*  Esto es lo que faltaba: que muesra el historial */}
    {mostrarHistorial && (
      <div className="historial">
        <h3>Historial de jugadores</h3>
        <ul>
          {historial.map((item, idx) => (
            <li key={idx}>
              {item.nombre} - {item.puntaje} puntos
            </li>
          ))}
        </ul>
        <button className="btn-borrar" onClick={borrarHistorial}>
          Borrar historial
        </button>
      </div>
    )}
  </div>
)}


      {/* Pregunta actual */}
      {preguntaActual && estadoJuego === "jugando" && (
        <div className="contenedor_div">
          <section className="section">
            <h2>{preguntaActual.titulo}</h2>
            <div className="enunciado">
              <p>{preguntaActual.enunciado}</p>
              <p className="pregunta-texto">{preguntaActual.pregunta}</p>
            </div>
          </section>

          <section className="contenedor-respuestas">
            {obtenerOpcionesAMostrar().map((opcion, index) => {
              const letra = String.fromCharCode(65 + index);
              let clase = "respuestas";
              if (seleccion) {
                if (opcion === seleccion) {
                  clase += opcion === preguntaActual.respuesta ? " correcta" : " incorrecta";
                } else if (opcion === preguntaActual.respuesta) {
                  clase += " correcta";
                }
              } else if (mostrarRespuestaPoder && opcion === preguntaActual.respuesta) {
                clase += " correcta";
              }

              return (
                <article key={opcion} className={clase} onClick={() => manejarRespuesta(opcion)}>
                  <span className="letra">{letra}.</span> {opcion}
                </article>
              );
            })}
          </section>

          <section className="progreso">
            <h2>Puntaje actual: {puntaje}</h2>
            <p>Pregunta: {contadorPreguntas} / 15</p>
            <button className="btn-poderes" onClick={() => setMostrarModal(true)}>
              Poderes / Comodines
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
