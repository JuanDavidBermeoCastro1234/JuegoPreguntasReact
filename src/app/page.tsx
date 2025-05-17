"use client"

// Importamos el componente principal del juego
import QuizGame from "../components/quiz-game"

/**
 * Componente principal de la página de preguntas
 * Actúa como contenedor para el juego
 *
 * @returns {JSX.Element} - Elemento JSX que representa la página completa
 */
export default function PantallaDePregunta() {
  return (
    // Contenedor principal que alberga todo el juego
    <main className="max-w-3xl mx-auto p-8">
      {/* Renderizamos el componente del juego */}
      <QuizGame />
    </main>
  )
}
