"use client"

/**
 * Interfaz que define las propiedades que recibe el componente Lifelines
 * @property {boolean} fiftyFiftyUsed - Indica si la ayuda 50/50 ya ha sido utilizada
 * @property {boolean} askProgrammerUsed - Indica si la ayuda "Consultar a un programador" ya ha sido utilizada
 * @property {Function} onUseFiftyFifty - Función que se ejecuta al usar la ayuda 50/50
 * @property {Function} onUseAskProgrammer - Función que se ejecuta al usar la ayuda "Consultar a un programador"
 */
interface LifelinesProps {
  fiftyFiftyUsed: boolean
  askProgrammerUsed: boolean
  onUseFiftyFifty: () => void
  onUseAskProgrammer: () => void
}

/**
 * Componente que muestra las ayudas disponibles para el jugador
 * Implementa dos tipos de ayudas: 50/50 y Consultar a un programador
 *
 * @param {LifelinesProps} props - Propiedades del componente
 * @returns {JSX.Element} - Elemento JSX que representa las ayudas disponibles
 */
export default function Lifelines({
  fiftyFiftyUsed,
  askProgrammerUsed,
  onUseFiftyFifty,
  onUseAskProgrammer,
}: LifelinesProps) {
  return (
    <div className="cont-ayudas" style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
      {/* Botón para la ayuda 50/50 */}
      <button
        onClick={onUseFiftyFifty} // Ejecuta la función al hacer clic
        disabled={fiftyFiftyUsed} // Deshabilita el botón si ya se usó la ayuda
        className={fiftyFiftyUsed ? "btn-ayuda-usada" : "btn-ayuda"}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: fiftyFiftyUsed ? "#d1d5db" : "#2563eb", // Cambia el color si está usada
          color: fiftyFiftyUsed ? "#6b7280" : "white",
          opacity: fiftyFiftyUsed ? 0.5 : 1, // Reduce la opacidad si está usada
          cursor: fiftyFiftyUsed ? "not-allowed" : "pointer",
          border: "none",
        }}
      >
        <span className="txt-negrita" style={{ fontWeight: "bold" }}>
          50:50
        </span>
        {/* Muestra un indicador si la ayuda ya fue utilizada */}
        {fiftyFiftyUsed && (
          <span className="indicador-usado" style={{ marginLeft: "8px", fontSize: "12px" }}>
            (Usado)
          </span>
        )}
      </button>

      {/* Botón para la ayuda "Consultar a un programador" */}
      <button
        onClick={onUseAskProgrammer} // Ejecuta la función al hacer clic
        disabled={askProgrammerUsed} // Deshabilita el botón si ya se usó la ayuda
        className={askProgrammerUsed ? "btn-ayuda-usada" : "btn-ayuda-prog"}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: askProgrammerUsed ? "#d1d5db" : "#16a34a", // Verde para esta ayuda
          color: askProgrammerUsed ? "#6b7280" : "white",
          opacity: askProgrammerUsed ? 0.5 : 1, // Reduce la opacidad si está usada
          cursor: askProgrammerUsed ? "not-allowed" : "pointer",
          border: "none",
        }}
      >
        <span>Consultar Programador</span>
        {/* Muestra un indicador si la ayuda ya fue utilizada */}
        {askProgrammerUsed && (
          <span className="indicador-usado" style={{ marginLeft: "8px", fontSize: "12px" }}>
            (Usado)
          </span>
        )}
      </button>
    </div>
  )
}
