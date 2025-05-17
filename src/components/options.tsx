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
   * Determina el color de fondo de la opción basado en su estado
   * @returns {string} - Color de fondo en formato hexadecimal
   */
  const getBackgroundColor = () => {
    if (isHidden) return "transparent" // Opción oculta por 50/50
    if (!isAnswerSubmitted) return isSelected ? "#e0e0e0" : "transparent" // No se ha enviado respuesta

    // Respuesta enviada, mostrar feedback
    if (isCorrect === true) return "#4ade80" // Verde para respuesta correcta
    if (isSelected && isCorrect === false) return "#f87171" // Rojo para respuesta incorrecta seleccionada
    return "transparent" // Otras opciones
  }

  /**
   * Determina la clase CSS basada en el estado de la opción
   * @returns {string} - Nombre de clase CSS
   */
  const getClassName = () => {
    const baseClass = "btn-opcion"
    if (isHidden) {
      return `${baseClass} opcion-oculta`
    }
    return baseClass
  }

  return (
    // Botón que representa la opción
    <button
      className={getClassName()}
      // Solo permite seleccionar si no se ha enviado la respuesta y la opción no está oculta
      onClick={() => !isAnswerSubmitted && !isHidden && onSelect(id)}
      disabled={isAnswerSubmitted || isHidden}
      style={{
        backgroundColor: getBackgroundColor(),
        borderColor: isSelected ? "#3b82f6" : "#d1d5db", // Borde azul si está seleccionada
        width: "100%",
        textAlign: "left",
        margin: "8px 0",
        padding: "12px",
        border: "1px solid",
        borderRadius: "4px",
        transition: "all 0.2s", // Transición suave para cambios de estado
        opacity: isHidden ? 0 : 1, // Invisible si está oculta (50/50)
        pointerEvents: isHidden ? "none" : "auto", // No interactuable si está oculta
      }}
    >
      {/* Identificador de la opción (A, B, C o D) seguido del texto */}
      <span className="id-opcion" style={{ fontWeight: "bold", marginRight: "8px" }}>
        {id}:
      </span>{" "}
      {text}
    </button>
  )
}
