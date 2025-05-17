"use client";

import Image from "next/image";
import preguntasData from "./preguntas.json"; // ruta según ubicación real
import { useState,useEffect } from "react";


interface Pregunta {
  id: number
  categoria: string,
  titulo: string,
  enunciado:string,
  pregunta: string,
  opciones: string[]
  respuesta: string ;
}

export default function Home() {
  const [preguntas, setPreguntas]= useState<Pregunta[]>([]);
  const [preguntaActual, setPreguntaActual] = useState<Pregunta | null>(null);
  const [puntaje, setPuntaje] = useState(0);
const [seleccion, setSeleccion] = useState<string | null>(null);
const [respuestaCorrecta, setRespuestaCorrecta] = useState<boolean | null>(null);

  // Al cargar el componente
  useEffect(() => {
    setPreguntas(preguntasData);
    cargarPreguntaAleatoria(preguntasData);
  }, []);

// CREAcion de la constante que caraga la pregunta aleatoria
  const cargarPreguntaAleatoria = (lista: Pregunta[]) => {
    const aleatoria = lista[Math.floor(Math.random() * lista.length)];
    setPreguntaActual(aleatoria);
    setSeleccion(null);
    setRespuestaCorrecta(null);
  };
  
  // manejo de doble click
   const manejarRespuesta = (opcion: string) => {
    if (seleccion) return; // evitar doble click
  
// comparacion de si la pregunta es correcta
        const esCorrecta = opcion === preguntaActual?.respuesta;
    setSeleccion(opcion);
    setRespuestaCorrecta(esCorrecta);
    if (esCorrecta) setPuntaje(p => p + 1);

    // la recarga cada 1.5 segundos una nueva pregunta
    setTimeout(() => {
      cargarPreguntaAleatoria(preguntas);
    }, 1500);
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


      {preguntaActual && (
      <div className="contenedor_div">
      <section className="section">
      <h2>{preguntaActual.titulo}</h2>
      </section>
      <section className="contenedor-respuestas">

            {preguntaActual.opciones.map((opcion, index) => {
              const letra = String.fromCharCode(65 + index); // A, B, C, D
              let clase = "respuestas";
              if (seleccion) {
                if (opcion === seleccion) {
                  clase += opcion === preguntaActual.respuesta ? " correcta" : " incorrecta";
                } else if (opcion === preguntaActual.respuesta) {
                  clase += " correcta";
                }
              }
              return (
                <article key={opcion} className={clase} onClick={() => manejarRespuesta(opcion)}>
                  <span className="letra">{letra }.</span> {opcion}
                </article>
              );
            })}
          </section>



      <section className="progreso">
        <h2>el puntaje ACTUAL :  {puntaje}</h2>
    </section>
      </div>
      )}
    </main>
  );
}
