"use client"

// Importamos el componente principal del juego
import QuizGame from "./components/quiz-game"

/**
 * Componente principal de la página de preguntas
 * Actúa como contenedor para el juego
 *
 * @returns {JSX.Element} - Elemento JSX que representa la página completa
 */
export default function PantallaDePregunta() {
  return (
    // Contenedor principal que alberga todo el juego
    <main className="quiz-container" style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      {/* Renderizamos el componente del juego */}
      <QuizGame />
    </main>
  )
}
