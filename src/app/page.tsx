"use client";

import Image from "next/image";

export default function Home() {
  return (
<main className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 w-full min-h-screen transition-all duration-500 m-0 p-0 box-border overflow-hidden">      
        <Image
        className="block mx-auto mt-10 rounded-full  "
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
      <section className="respuestas">
        <article><p className="text-orange-400 text-lg font-bold">A:</p></article>
        <article><p className="text-orange-400 text-lg font-bold">B:</p></article>
        <article><p className="text-orange-400 text-lg font-bold">C:</p></article>
        <article><p className="text-orange-400 text-lg font-bold">D:</p></article>

      </section>
      <section>
        <h2>el puntaje ACTUAL</h2>
      </section>
      </div>
    </main>
  );
}
