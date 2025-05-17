"use client"

/**
 * Interfaz que define las propiedades que recibe el componente Question
 * @property {string} text - Texto de la pregunta a mostrar
 */
interface QuestionProps {
  text: string // El texto de la pregunta
}

/**
 * Componente que muestra la pregunta actual en un recuadro destacado
 *
 * @param {QuestionProps} props - Propiedades del componente
 * @returns {JSX.Element} - Elemento JSX que representa el recuadro de la pregunta
 */
export default function Question({ text }: QuestionProps) {
  return (
    // Contenedor de la pregunta con estilo visual distintivo
    <div
      className="cont-pregunta"
      style={{
        backgroundColor: "#eff6ff", // Fondo azul claro
        border: "2px solid #bfdbfe", // Borde azul
        borderRadius: "8px",
        padding: "24px",
        marginBottom: "24px",
      }}
    >
      {/* Texto de la pregunta centrado y con estilo destacado */}
      <h2 className="txt-pregunta" style={{ fontSize: "1.25rem", fontWeight: "bold", textAlign: "center" }}>
        {text}
      </h2>
    </div>
  )
}
