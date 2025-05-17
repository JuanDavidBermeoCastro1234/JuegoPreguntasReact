"use client";

import { useEffect, useState } from "react" ;
import preguntas from './preguntas.json';
import Image from "next/image";

export default function Home() {  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * preguntas.length);
    setCurrentQuestion(preguntas[randomIndex]);
  }, []);

  const handleClick = (option: string) => {
    if (!selectedOption) {
      setSelectedOption(option);
    }
  };

  const getOptionClass = (option: string) => {
    if (!selectedOption) return "bg-white/10";
    if (option === currentQuestion.respuesta) return "bg-green-500 text-white";
    if (option === selectedOption) return "bg-red-500 text-white";
    return "bg-white/10";
  };

  if (!currentQuestion) return <div className="text-white">Cargando...</div>;

  return (
    <main className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 w-full min-h-screen text-white p-6">
      <Image
        className="block mx-auto mt-6"
        src="/programing.png"
        width={150}
        height={150}
        alt="logo"
        priority
      />
      <div className="max-w-3xl mx-auto mt-10">
        <h2 className="text-xl font-bold text-center mb-2 uppercase text-indigo-300">
          Categoría: {currentQuestion.categoria}
        </h2>
        <h3 className="text-lg italic text-center mb-4 text-indigo-100">
          {currentQuestion.titulo}
        </h3>
        <p className="text-base mb-6 text-center text-indigo-200">
          {currentQuestion.enunciado}
        </p>
        <h1 className="text-2xl font-semibold mb-6 text-center">
          {currentQuestion.pregunta}
        </h1>

        <section className="grid grid-cols-1 gap-4">
          {currentQuestion.opciones.map((op: string, index: number) => (
            <button
              key={index}
              className={`p-4 rounded-md text-left font-medium transition-all duration-300 border border-white ${getOptionClass(
                op
              )}`}
              onClick={() => handleClick(op)}
            >
              {String.fromCharCode(65 + index)}: {op}
            </button>
          ))}
        </section>

        <div className="mt-10 text-center text-lg font-semibold">
          {selectedOption ? (
            selectedOption === currentQuestion.respuesta ? (
              <span className="text-green-400">✅ ¡Correcto!</span>
            ) : (
              <span className="text-red-400">❌ Incorrecto</span>
            )
          ) : null}
        </div>
      </div>
    </main>
  );
}

