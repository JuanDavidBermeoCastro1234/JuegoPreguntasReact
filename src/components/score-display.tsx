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
    <div
      className="cont-puntos"
      style={{
        backgroundColor: "#fef9c3", // Fondo amarillo claro
        border: "1px solid #facc15", // Borde amarillo
        color: "#854d0e", // Texto marrón
        padding: "8px 16px",
        borderRadius: "8px",
        marginBottom: "16px",
      }}
    >
      {/* Contenedor flexible para alinear la etiqueta y el valor */}
      <div className="info-puntos" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Etiqueta de puntuación */}
        <span className="etq-puntos" style={{ fontWeight: 600 }}>
          Puntuación actual:
        </span>
        {/* Valor de la puntuación */}
        <span className="val-puntos" style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
          {currentScore} puntos
        </span>
      </div>
    </div>
  )
}
