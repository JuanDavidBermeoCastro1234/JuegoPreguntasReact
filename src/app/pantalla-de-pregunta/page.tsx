"use client"

// Importamos el componente principal del juego
import QuizGame from "@/components/quiz-game"

// Componente principal de la página
export default function Home() {
  return (
    // Contenedor principal que alberga todo el juego
    <main className="quiz-container">
      {/* Renderizamos el componente del juego */}
      <QuizGame />
    </main>
  )
}
