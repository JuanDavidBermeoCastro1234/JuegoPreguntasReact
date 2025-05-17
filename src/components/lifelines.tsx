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
    <div className="flex gap-4 mb-6">
      {/* Botón para la ayuda 50/50 */}
      <button
        onClick={onUseFiftyFifty} // Ejecuta la función al hacer clic
        disabled={fiftyFiftyUsed} // Deshabilita el botón si ya se usó la ayuda
        className={`flex items-center justify-center px-4 py-2 rounded-lg border-none ${
          fiftyFiftyUsed
            ? "bg-gray-300 text-gray-500 opacity-50 cursor-not-allowed"
            : "bg-primary text-white cursor-pointer"
        }`}
      >
        <span className="font-bold">50:50</span>
        {/* Muestra un indicador si la ayuda ya fue utilizada */}
        {fiftyFiftyUsed && <span className="ml-2 text-xs">(Usado)</span>}
      </button>

      {/* Botón para la ayuda "Consultar a un programador" */}
      <button
        onClick={onUseAskProgrammer} // Ejecuta la función al hacer clic
        disabled={askProgrammerUsed} // Deshabilita el botón si ya se usó la ayuda
        className={`flex items-center justify-center px-4 py-2 rounded-lg border-none ${
          askProgrammerUsed
            ? "bg-gray-300 text-gray-500 opacity-50 cursor-not-allowed"
            : "bg-green-600 text-white cursor-pointer"
        }`}
      >
        <span>Consultar Programador</span>
        {/* Muestra un indicador si la ayuda ya fue utilizada */}
        {askProgrammerUsed && <span className="ml-2 text-xs">(Usado)</span>}
      </button>
    </div>
  )
}
