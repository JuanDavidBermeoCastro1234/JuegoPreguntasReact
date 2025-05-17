"use client"

import { useState, useEffect } from "react"

/**
 * Interfaz que define las propiedades que recibe el componente ProgrammerConsultation
 * @property {Function} onClose - Función que se ejecuta al cerrar el modal
 */
interface ProgrammerConsultationProps {
  onClose: () => void
}

/**
 * Componente que muestra un modal con un contador para consultar a un programador físicamente
 * Permite al usuario tener un tiempo definido para consultar a alguien en persona
 *
 * @param {ProgrammerConsultationProps} props - Propiedades del componente
 * @returns {JSX.Element} - Elemento JSX que representa el modal con el contador
 */
export default function ProgrammerConsultation({ onClose }: ProgrammerConsultationProps) {
  // Estado para el contador en segundos (30 segundos = medio minuto)
  const [timeLeft, setTimeLeft] = useState(30)

  // Efecto para manejar el contador
  useEffect(() => {
    // Si el tiempo llega a cero, cerrar automáticamente
    if (timeLeft <= 0) {
      onClose()
      return
    }

    // Configurar un intervalo para decrementar el contador cada segundo
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    // Limpiar el intervalo cuando el componente se desmonte o el tiempo cambie
    return () => clearInterval(timerId)
  }, [timeLeft, onClose])

  // Formatear el tiempo restante en formato MM:SS
  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60)
    const seconds = timeLeft % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    // Fondo oscuro que cubre toda la pantalla (modal backdrop)
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Contenido del modal */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
        {/* Título del modal */}
        <h3 className="text-xl font-bold mb-4">Consulta a un Programador</h3>

        {/* Instrucciones */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 text-left">
          <p className="mb-2">
            Tienes <strong>{formatTime()}</strong> para consultar a un programador físicamente.
          </p>
          <p>Aprovecha este tiempo para hacer tu pregunta a alguien que pueda ayudarte.</p>
        </div>

        {/* Contador grande */}
        <div className={`text-5xl font-bold my-6 ${timeLeft <= 10 ? "text-danger" : "text-primary"}`}>
          {formatTime()}
        </div>

        {/* Contenedor del botón de cierre */}
        <div>
          <button
            onClick={onClose} // Ejecuta la función de cierre al hacer clic
            className="w-full btn-primary hover:bg-blue-700 transition-colors"
          >
            Terminar consulta
          </button>
        </div>
      </div>
    </div>
  )
}
