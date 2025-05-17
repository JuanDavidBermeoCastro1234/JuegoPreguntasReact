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
    <div
      className="cont-fin-juego"
      style={{
        backgroundColor: "white",
        padding: "32px",
        borderRadius: "8px",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        maxWidth: "28rem",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Título de la pantalla de fin de juego */}
      <h2 className="titulo-fin" style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
        ¡Juego Terminado!
      </h2>

      {/* Sección que muestra la puntuación final */}
      <div className="seccion-puntos" style={{ marginBottom: "24px" }}>
        <p className="etq-final" style={{ fontSize: "1.125rem", marginBottom: "8px" }}>
          Puntuación final:
        </p>
        <p className="val-final" style={{ fontSize: "1.875rem", fontWeight: "bold", color: "#2563eb" }}>
          {finalScore} puntos
        </p>
      </div>

      {/* Sección que muestra estadísticas adicionales */}
      <div className="seccion-stats" style={{ marginBottom: "24px" }}>
        <p className="etq-stats" style={{ fontSize: "1.125rem", marginBottom: "8px" }}>
          Estadísticas:
        </p>
        <p>
          Respondiste correctamente {correctAnswers} de {totalQuestions} preguntas
        </p>
        {/* Cálculo del porcentaje de acierto */}
        <p>Porcentaje de acierto: {Math.round((correctAnswers / totalQuestions) * 100)}%</p>
      </div>

      {/* Botón para reiniciar el juego */}
      <button
        onClick={onRestart} // Ejecuta la función de reinicio al hacer clic
        className="btn-reiniciar"
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          padding: "8px 24px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
      >
        Jugar de nuevo
      </button>
    </div>
  )
}
