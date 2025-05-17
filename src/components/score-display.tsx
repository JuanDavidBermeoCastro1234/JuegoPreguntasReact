"use client"

/**
 * Interfaz que define las propiedades que recibe el componente ScoreDisplay
 * @property {number} currentScore - Puntuación actual del jugador
 */
interface ScoreDisplayProps {
  currentScore: number
}

/**
 * Componente que muestra la puntuación actual del jugador
 *
 * @param {ScoreDisplayProps} props - Propiedades del componente
 * @returns {JSX.Element} - Elemento JSX que representa el display de puntuación
 */
export default function ScoreDisplay({ currentScore }: ScoreDisplayProps) {
  return (
    <div className="bg-yellow-100 border border-warning text-amber-800 p-2 px-4 rounded-lg mb-4">
      {/* Contenedor flexible para alinear la etiqueta y el valor */}
      <div className="flex items-center justify-between">
        {/* Etiqueta de puntuación */}
        <span className="font-semibold">Puntuación actual:</span>
        {/* Valor de la puntuación */}
        <span className="text-xl font-bold">{currentScore} puntos</span>
      </div>
    </div>
  )
}
