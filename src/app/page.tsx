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

export default function Home() {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [preguntaActual, setPreguntaActual] = useState<Pregunta | null>(null);
  const [puntaje, setPuntaje] = useState(0);
  const [seleccion, setSeleccion] = useState<string | null>(null);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState<boolean | null>(null);
  const [contadorPreguntas, setContadorPreguntas] = useState(0);
  const [estadoJuego, setEstadoJuego] = useState<"jugando" | "ganaste" | "perdiste">("jugando");

  useEffect(() => {
    setPreguntas(preguntasData);
    cargarPreguntaAleatoria(preguntasData);
  }, []);

  const cargarPreguntaAleatoria = (lista: Pregunta[]) => {
    const aleatoria = lista[Math.floor(Math.random() * lista.length)];
    setPreguntaActual(aleatoria);
    setSeleccion(null);
    setRespuestaCorrecta(null);
  };

  const reiniciarJuego = () => {
    setPuntaje(0);
    setContadorPreguntas(0);
    setEstadoJuego("jugando");
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
        setEstadoJuego("ganaste");
      } else if (nuevasContador >= 15) {
        setEstadoJuego("perdiste");
      } else {
        cargarPreguntaAleatoria(preguntas);
      }
    }, 1000);
  };

  return (
    <main className="caja-principal">
      <Image
        className="logo"
        src="/programing.png"
        width={200}
        height={200}
        priority
        alt="logo banco de preguntas"
      />

      {estadoJuego !== "jugando" && (
        <div className="mensaje-final">
          <h2 className={estadoJuego === "ganaste" ? "correcta" : "incorrecta"}>
            {estadoJuego === "ganaste"
              ? `🎉 ¡Ganaste con ${puntaje} respuestas correctas!`
              : `😢 Perdiste. Solo obtuviste ${puntaje} respuestas correctas.`}
          </h2>
          <button className="btn-reiniciar" onClick={reiniciarJuego}>
            Vuelve y juega
          </button>
        </div>
      )}

      {preguntaActual && estadoJuego === "jugando" && (
        <div className="contenedor_div">
          <section className="section">
            <h2>{preguntaActual.titulo}</h2>
          </section>

          <section className="contenedor-respuestas">
            {preguntaActual.opciones.map((opcion, index) => {
              const letra = String.fromCharCode(65 + index);
              let clase = "respuestas";
              if (seleccion) {
                if (opcion === seleccion) {
                  clase += opcion === preguntaActual.respuesta ? " correcta" : " incorrecta";
                } else if (opcion === preguntaActual.respuesta) {
                  clase += " correcta";
                }
              }
              return (
                <article
                  key={opcion}
                  className={clase}
                  onClick={() => manejarRespuesta(opcion)}
                >
                  <span className="letra">{letra}.</span> {opcion}
                </article>
              );
            })}
          </section>

          <section className="progreso">
            <h2>Puntaje actual: {puntaje}</h2>
            <p>Pregunta: {contadorPreguntas} / 15</p>
          </section>
        </div>
      )}
    </main>
  );
}
