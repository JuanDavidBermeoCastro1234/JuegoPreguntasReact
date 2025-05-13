"use client"

// Definimos la interfaz para las props que recibe este componente
interface QuestionProps {
  text: string // El texto de la pregunta
}

// Componente que muestra la pregunta en un recuadro
export default function Question({ text }: QuestionProps) {

  // Criterio 1: La pantalla debe mostrar una pregunta en un recuadro central
  
  return (
    // Div que actúa como el recuadro para la pregunta
    // Aplicamos estilos inline para crear un borde visible (recuadro)
    <div className="question-box" style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      {/* Mostramos el texto de la pregunta */}
      <h2>{text}</h2>
    </div>
  )
}
