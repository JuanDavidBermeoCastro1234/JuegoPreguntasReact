"use client"

/**
 * Interfaz que define las propiedades que recibe el componente ProgressBar
 * @property {number} currentQuestion - Número de la pregunta actual
 * @property {number} totalQuestions - Número total de preguntas en el juego
 */
interface ProgressBarProps {
  currentQuestion: number
  totalQuestions: number
}

/**
 * Componente que muestra una barra de progreso para indicar el avance en el juego
 *
 * @param {ProgressBarProps} props - Propiedades del componente
 * @returns {JSX.Element} - Elemento JSX que representa la barra de progreso
 */
export default function ProgressBar({ currentQuestion, totalQuestions }: ProgressBarProps) {
  // Calculamos el porcentaje de progreso basado en la pregunta actual y el total
  const progressPercentage = (currentQuestion / totalQuestions) * 100

  return (
    <div className="cont-barra-progreso">
      {/* Información textual sobre el progreso */}
      <div className="info-progreso">
        <span>
          Pregunta {currentQuestion} de {totalQuestions}
        </span>
        <span>{Math.round(progressPercentage)}%</span>
      </div>
      {/* Contenedor de la barra de progreso */}
      <div className="barra-base">
        {/* Barra de progreso que se llena según el porcentaje calculado */}
        <div
          className="barra-avance"
          style={{
            width: `${progressPercentage}%`,
            height: "10px",
            backgroundColor: "#2563eb",
            borderRadius: "9999px",
            transition: "width 0.3s ease-in-out", // Animación suave al cambiar de pregunta
          }}
        ></div>
      </div>
    </div>
  )
}
