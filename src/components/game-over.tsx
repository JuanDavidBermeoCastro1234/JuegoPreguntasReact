"use client"

/**
 * Interfaz que define las propiedades que recibe el componente GameOver
 * @property {number} finalScore - Puntuación final del jugador
 * @property {number} totalQuestions - Número total de preguntas en el juego
 * @property {number} correctAnswers - Número de respuestas correctas
 * @property {Function} onRestart - Función que se ejecuta al reiniciar el juego
 */
interface GameOverProps {
  finalScore: number
  totalQuestions: number
  correctAnswers: number
  onRestart: () => void
}

/**
 * Componente que muestra la pantalla de fin de juego con estadísticas
 *
 * @param {GameOverProps} props - Propiedades del componente
 * @returns {JSX.Element} - Elemento JSX que representa la pantalla de fin de juego
 */
export default function GameOver({ finalScore, totalQuestions, correctAnswers, onRestart }: GameOverProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
      {/* Título de la pantalla de fin de juego */}
      <h2 className="text-2xl font-bold mb-4">¡Juego Terminado!</h2>

      {/* Sección que muestra la puntuación final */}
      <div className="mb-6">
        <p className="text-lg mb-2">Puntuación final:</p>
        <p className="text-3xl font-bold text-primary">{finalScore} puntos</p>
      </div>

      {/* Sección que muestra estadísticas adicionales */}
      <div className="mb-6">
        <p className="text-lg mb-2">Estadísticas:</p>
        <p>
          Respondiste correctamente {correctAnswers} de {totalQuestions} preguntas
        </p>
        {/* Cálculo del porcentaje de acierto */}
        <p>Porcentaje de acierto: {Math.round((correctAnswers / totalQuestions) * 100)}%</p>
      </div>

      {/* Botón para reiniciar el juego */}
      <button
        onClick={onRestart} // Ejecuta la función de reinicio al hacer clic
        className="btn-primary hover:bg-blue-700 transition-colors"
      >
        Jugar de nuevo
      </button>
    </div>
  )
}
