"use client"

import { useState } from "react"
import Question from "./question"
import Option from "./option"
import ProgressBar from "../../components/progress-bar"
import Lifelines from "../../components/lifelines"
import ScoreDisplay from "../../components/score-display"
import GameOver from "../../components/game-over"
import ProgrammerConsultation from "../../components/contador"

/**
 * Interfaz que define la estructura de una pregunta del juego
 * @property {number} id - Identificador único de la pregunta
 * @property {string} text - Texto de la pregunta
 * @property {Array} options - Array de opciones de respuesta
 * @property {string} correctAnswer - Identificador de la opción correcta (A, B, C o D)
 */
interface QuizQuestion {
  id: number
  text: string
  options: {
    id: string
    text: string
  }[]
  correctAnswer: string
}

/**
 * Datos de ejemplo para las preguntas del juego
 * En un caso real, estas preguntas se cargarían desde una API o base de datos
 */
const sampleQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "¿Qué es la encapsulación en POO?",
    options: [
      { id: "A", text: "Ocultar la implementación interna de un objeto" },
      { id: "B", text: "Crear múltiples instancias de una clase" },
      { id: "C", text: "Heredar propiedades de otra clase" },
      { id: "D", text: "Definir métodos abstractos" },
    ],
    correctAnswer: "A",
  },
  // Pregunta adicional para probar la navegación entre preguntas
  {
    id: 2,
    text: "¿Qué es la herencia en POO?",
    options: [
      { id: "A", text: "Crear múltiples instancias de una clase" },
      { id: "B", text: "Heredar propiedades y métodos de otra clase" },
      { id: "C", text: "Ocultar la implementación interna de un objeto" },
      { id: "D", text: "Definir interfaces para clases" },
    ],
    correctAnswer: "B",
  },
]

/**
 * Componente principal del juego que gestiona toda la lógica y estado
 *
 * @returns {JSX.Element} - Elemento JSX que representa el juego completo
 */
export default function QuizGame() {
  // Estado para el banco de preguntas (en un caso real, se cargarían de una API o archivo)
  const [questions, setQuestions] = useState<QuizQuestion[]>(sampleQuestions)

  // Estado para el índice de la pregunta actual (0-based)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  // Estado para la opción seleccionada por el usuario
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  // Estado para controlar si la respuesta ha sido enviada
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false)

  // Estado para el puntaje acumulado
  const [score, setScore] = useState(0)

  // Estado para las ayudas
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false)
  const [askProgrammerUsed, setAskProgrammerUsed] = useState(false)

  // Estado para las opciones ocultas (50/50)
  const [hiddenOptions, setHiddenOptions] = useState<string[]>([])

  // Estado para mostrar el contador de consulta al programador
  const [showProgrammerConsultation, setShowProgrammerConsultation] = useState(false)

  // Estado para controlar si el juego ha terminado
  const [gameOver, setGameOver] = useState(false)

  // Estado para contar respuestas correctas
  const [correctAnswers, setCorrectAnswers] = useState(0)

  // Obtener la pregunta actual
  const currentQuestion = questions[currentQuestionIndex]

  /**
   * Manejo de error cuando no hay preguntas disponibles
   * Muestra un mensaje de error y un botón para reiniciar
   */
  if (!currentQuestion) {
    return (
      <div className="cont-error">
        <h2>Error: No hay preguntas disponibles</h2>
        <button
          onClick={() => window.location.reload()}
          className="btn-reiniciar"
          style={{
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Reiniciar juego
        </button>
      </div>
    )
  }

  /**
   * Función para manejar la selección de una opción
   * @param {string} optionId - Identificador de la opción seleccionada (A, B, C o D)
   */
  const handleOptionSelect = (optionId: string) => {
    // Solo permite seleccionar si no se ha enviado la respuesta y la opción no está oculta
    if (!isAnswerSubmitted && !hiddenOptions.includes(optionId)) {
      setSelectedOption(optionId)
    }
  }

  /**
   * Función para verificar si la respuesta seleccionada es correcta
   * Actualiza el puntaje y prepara la transición a la siguiente pregunta
   */
  const checkAnswer = () => {
    // No hace nada si no hay opción seleccionada
    if (selectedOption === null) return

    // Marca la respuesta como enviada para mostrar feedback
    setIsAnswerSubmitted(true)

    // Verificar si la respuesta es correcta
    if (selectedOption === currentQuestion.correctAnswer) {
      // Sumar 100 puntos por respuesta correcta
      setScore((prevScore) => prevScore + 100)
      setCorrectAnswers((prev) => prev + 1)
    }

    // Esperar 2 segundos antes de pasar a la siguiente pregunta
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        // Pasar a la siguiente pregunta
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
        setSelectedOption(null)
        setIsAnswerSubmitted(false)
        setHiddenOptions([])
      } else {
        // Fin del juego si no hay más preguntas
        setGameOver(true)
      }
    }, 2000)
  }

  /**
   * Función para usar la ayuda 50/50
   * Elimina dos opciones incorrectas para facilitar la elección
   */
  const useFiftyFifty = () => {
    // No hace nada si la ayuda ya fue usada o si ya se envió la respuesta
    if (fiftyFiftyUsed || isAnswerSubmitted) return

    // Marcar la ayuda como usada
    setFiftyFiftyUsed(true)

    // Obtener las opciones incorrectas
    const incorrectOptions = currentQuestion.options
      .filter((option) => option.id !== currentQuestion.correctAnswer)
      .map((option) => option.id)

    // Manejo de caso especial: menos de 2 opciones incorrectas
    if (incorrectOptions.length < 2) {
      // Si hay menos de 2 opciones incorrectas, ocultar todas las que haya
      setHiddenOptions(incorrectOptions)
      return
    }

    // Seleccionar aleatoriamente 2 opciones incorrectas para ocultar
    const shuffled = [...incorrectOptions].sort(() => 0.5 - Math.random())
    const optionsToHide = shuffled.slice(0, 2)

    // Ocultar las opciones seleccionadas
    setHiddenOptions(optionsToHide)
  }

  /**
   * Función para usar la ayuda "Consultar a un programador"
   * Muestra un contador para permitir al usuario consultar a alguien físicamente
   */
  const useAskProgrammer = () => {
    // No hace nada si la ayuda ya fue usada o si ya se envió la respuesta
    if (askProgrammerUsed || isAnswerSubmitted) return

    // Marcar la ayuda como usada
    setAskProgrammerUsed(true)

    // Mostrar el contador de consulta al programador
    setShowProgrammerConsultation(true)
  }

  /**
   * Función para reiniciar el juego
   * Restablece todos los estados a sus valores iniciales
   */
  const restartGame = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswerSubmitted(false)
    setScore(0)
    setFiftyFiftyUsed(false)
    setAskProgrammerUsed(false)
    setHiddenOptions([])
    setGameOver(false)
    setCorrectAnswers(0)
  }

  // Renderizar el componente
  return (
    <div className="cont-juego" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* Condicional para mostrar el juego o la pantalla de fin de juego */}
      {!gameOver ? (
        <>
          {/* Mostrar el puntaje actual */}
          <ScoreDisplay currentScore={score} />

          {/* Barra de progreso */}
          <ProgressBar currentQuestion={currentQuestionIndex + 1} totalQuestions={questions.length} />

          {/* Ayudas (50/50 y Consultar a un programador) */}
          <Lifelines
            fiftyFiftyUsed={fiftyFiftyUsed}
            askProgrammerUsed={askProgrammerUsed}
            onUseFiftyFifty={useFiftyFifty}
            onUseAskProgrammer={useAskProgrammer}
          />

          {/* Pregunta actual */}
          <Question text={currentQuestion.text} />

          {/* Opciones de respuesta */}
          <div className="cont-opciones" style={{ marginBottom: "20px" }}>
            {/* Mapeo de las opciones de la pregunta actual */}
            {currentQuestion.options.map((option) => (
              <Option
                key={option.id}
                id={option.id}
                text={option.text}
                isSelected={selectedOption === option.id}
                isHidden={hiddenOptions.includes(option.id)}
                onSelect={handleOptionSelect}
                isCorrect={isAnswerSubmitted ? option.id === currentQuestion.correctAnswer : null}
                isAnswerSubmitted={isAnswerSubmitted}
              />
            ))}
          </div>

          {/* Botón para verificar respuesta */}
          <div className="cont-btn-confirmar" style={{ marginTop: "20px" }}>
            <button
              onClick={checkAnswer}
              disabled={selectedOption === null || isAnswerSubmitted}
              className={selectedOption === null || isAnswerSubmitted ? "btn-deshabilitado" : "btn-confirmar"}
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: selectedOption === null || isAnswerSubmitted ? "#d1d5db" : "#2563eb",
                color: selectedOption === null || isAnswerSubmitted ? "#6b7280" : "white",
                border: "none",
                borderRadius: "8px",
                cursor: selectedOption === null || isAnswerSubmitted ? "not-allowed" : "pointer",
                fontWeight: "bold",
              }}
            >
              {isAnswerSubmitted ? "Espera..." : "Confirmar Respuesta"}
            </button>
          </div>

          {/* Modal de consulta al programador con contador (condicional) */}
          {showProgrammerConsultation && (
            <ProgrammerConsultation onClose={() => setShowProgrammerConsultation(false)} />
          )}
        </>
      ) : (
        /* Pantalla de fin de juego */
        <GameOver
          finalScore={score}
          totalQuestions={questions.length}
          correctAnswers={correctAnswers}
          onRestart={restartGame}
        />
      )}
    </div>
  )
}
