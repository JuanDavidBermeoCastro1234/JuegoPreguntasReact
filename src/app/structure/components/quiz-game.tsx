"use client"

// Importamos useState para manejar el estado del componente

import { useState } from "react"
// Importamos los componentes necesarios
import Question from "./question"
import Option from "./option"

// Datos de ejemplo para una pregunta
// Incluye el texto de la pregunta, las opciones (A, B, C, D) y la respuesta correcta
const sampleQuestion = {
  text: "¿Cuál es la respuesta a la pregunta ?",
  options: [
    { id: "A", text: "Opcion A" },
    { id: "B", text: "Opcion B" },
    { id: "C", text: "Opcion C" },
    { id: "D", text: "Opcion D" },
  ],

  correctAnswer: "B", // respuesta correcta del ejemplo, puede ser A, B, C o D
    // Se pueden cargar las respuestas desde un archivo JSON o una API
}

// Componente principal del juego
// Este componente maneja el estado del juego y la lógica de selección de opciones
export default function QuizGame() {
  // Estado para almacenar la opción seleccionada por el usuario (A, B, C o D)
  // Inicialmente es null porque ninguna opción está seleccionada
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  // Estado para almacenar la pregunta actual
  // Inicialmente usamos la pregunta de ejemplo definida arriba
  const [currentQuestion, setCurrentQuestion] = useState(sampleQuestion)

  // Función que se ejecuta cuando el usuario selecciona una opción
  // Actualiza el estado con la opción seleccionada (A, B, C o D)
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
  }

  return (
    <div className="quiz-game">
      {/* Criterio 1: La pantalla debe mostrar una pregunta en un recuadro central */}
      {/* Renderizamos el componente Question pasándole el texto de la pregunta actual */}
      <Question text={currentQuestion.text} />

      {/* Criterio 2: Deben aparecer cuatro opciones identificadas como A, B, C y D */}
      <div className="options-container">
        {/* Mapeamos las opciones de la pregunta actual para crear un componente Option por cada una */}
        {currentQuestion.options.map((option) => (
          <Option
            key={option.id} // Key para React (necesario en listas)
            id={option.id} // ID de la opción (A, B, C o D)
            text={option.text} // Texto de la opción
            isSelected={selectedOption === option.id} // Booleano que indica si esta opción está seleccionada
            onSelect={handleOptionSelect} // Función que se ejecuta al hacer clic en la opción
          />
        ))}
      </div>
    </div>
  )
}
