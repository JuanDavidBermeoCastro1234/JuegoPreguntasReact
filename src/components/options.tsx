"use client"

/**
 * Interfaz que define las propiedades que recibe el componente Option
 * @property {string} id - Identificador de la opción (A, B, C o D)
 * @property {string} text - Texto de la opción
 * @property {boolean} isSelected - Indica si esta opción está seleccionada
 * @property {boolean} isHidden - Indica si esta opción está oculta (para el 50/50)
 * @property {Function} onSelect - Función que se ejecuta al seleccionar esta opción
 * @property {boolean|null} isCorrect - Indica si la opción es correcta (para mostrar feedback)
 * @property {boolean} isAnswerSubmitted - Indica si ya se ha enviado la respuesta
 */
interface OptionProps {
  id: string // El identificador de la opción (A, B, C o D)
  text: string // El texto de la opción
  isSelected: boolean // Indica si esta opción está seleccionada
  isHidden: boolean // Indica si esta opción está oculta (para el 50/50)
  onSelect: (id: string) => void // Función que se ejecuta al seleccionar esta opción
  isCorrect?: boolean | null // Indica si la opción es correcta (para mostrar feedback)
  isAnswerSubmitted: boolean // Indica si ya se ha enviado la respuesta
}

/**
 * Componente que representa una opción seleccionable para responder a la pregunta
 *
 * @param {OptionProps} props - Propiedades del componente
 * @returns {JSX.Element} - Elemento JSX que representa una opción de respuesta
 */
export default function Option({
  id,
  text,
  isSelected,
  isHidden,
  onSelect,
  isCorrect,
  isAnswerSubmitted,
}: OptionProps) {
  /**
   * Determina la clase CSS basada en el estado de la opción
   * @returns {string} - Clases de Tailwind CSS
   */
  const getOptionClasses = () => {
    const classes = "w-full text-left my-2 py-3 px-4 border rounded transition-all duration-200"

    // Si está oculta (50/50)
    if (isHidden) {
      return `${classes} opacity-0 pointer-events-none`
    }

    // Si no se ha enviado la respuesta
    if (!isAnswerSubmitted) {
      return `${classes} ${isSelected ? "border-primary bg-gray-200" : "border-gray-300 bg-transparent"}`
    }

    // Si se ha enviado la respuesta
    if (isCorrect === true) {
      return `${classes} bg-success text-white border-success`
    }

    if (isSelected && isCorrect === false) {
      return `${classes} bg-danger text-white border-danger`
    }

    return `${classes} border-gray-300 bg-transparent`
  }

  return (
    // Botón que representa la opción
    <button
      className={getOptionClasses()}
      // Solo permite seleccionar si no se ha enviado la respuesta y la opción no está oculta
      onClick={() => !isAnswerSubmitted && !isHidden && onSelect(id)}
      disabled={isAnswerSubmitted || isHidden}
    >
      {/* Identificador de la opción (A, B, C o D) seguido del texto */}
      <span className="font-bold mr-2">{id}:</span> {text}
    </button>
  )
}
