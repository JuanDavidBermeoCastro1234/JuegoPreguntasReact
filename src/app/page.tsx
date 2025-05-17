"use client";

import Image from "next/image";

export default function Home() {
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
      <div className="contenedor_div">
      <section className="section">
      <h2>pregunta</h2>
      </section>
      <section className="contenedor-respuestas">
        <article className="respuestas"><span className="letra">A.</span></article>
        <article className="respuestas"><span className="letra">B.</span></article>
        <article className="respuestas"><span className="letra">C.</span></article>
        <article  className="respuestas"><span className="letra">D.</span></article>
      </section>
      <section className="progreso">
        <h2>el puntaje ACTUAL :</h2>
      </section>
      </div>
    </main>
  );
}
