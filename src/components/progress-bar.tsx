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
    <div className="mb-4">
      {/* Información textual sobre el progreso */}
      <div className="flex justify-between mb-1">
        <span>
          Pregunta {currentQuestion} de {totalQuestions}
        </span>
        <span>{Math.round(progressPercentage)}%</span>
      </div>
      {/* Contenedor de la barra de progreso */}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        {/* Barra de progreso que se llena según el porcentaje calculado */}
        <div
          className="bg-primary h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  )
}
