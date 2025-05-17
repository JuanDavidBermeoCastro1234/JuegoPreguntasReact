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
    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
      {/* Texto de la pregunta centrado y con estilo destacado */}
      <h2 className="text-xl font-bold text-center">{text}</h2>
    </div>
  )
}
