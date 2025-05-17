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
    <div
      className="modal-fondo"
      style={{
        position: "fixed",
        inset: 0, // Equivalente a top: 0, right: 0, bottom: 0, left: 0
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Fondo semi-transparente
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 50, // Asegura que esté por encima de otros elementos
      }}
    >
      {/* Contenido del modal */}
      <div
        className="modal-contenido"
        style={{
          backgroundColor: "white",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          maxWidth: "28rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Título del modal */}
        <h3 className="modal-titulo" style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px" }}>
          Consulta a un Programador
        </h3>

        {/* Instrucciones */}
        <div
          className="cont-instrucciones"
          style={{
            backgroundColor: "#f3f4f6",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "16px",
            textAlign: "left",
          }}
        >
          <p style={{ marginBottom: "8px" }}>
            Tienes <strong>{formatTime()}</strong> para consultar a un programador físicamente.
          </p>
          <p>Aprovecha este tiempo para hacer tu pregunta a alguien que pueda ayudarte.</p>
        </div>

        {/* Contador grande */}
        <div
          className="cont-contador"
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            margin: "24px 0",
            color: timeLeft <= 10 ? "#ef4444" : "#2563eb", // Rojo cuando queda poco tiempo
          }}
        >
          {formatTime()}
        </div>

        {/* Contenedor del botón de cierre */}
        <div className="cont-btn-cerrar">
          <button
            onClick={onClose} // Ejecuta la función de cierre al hacer clic
            className="btn-cerrar"
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Terminar consulta
          </button>
        </div>
      </div>
    </div>
  )
}
