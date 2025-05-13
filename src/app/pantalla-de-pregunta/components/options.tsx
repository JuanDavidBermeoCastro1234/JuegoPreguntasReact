"use client"

// Definimos la interfaz para las props que recibe este componente
interface OptionProps {
  id: string // El identificador de la opción (A, B, C o D)
  text: string // El texto de la opción
  isSelected: boolean // Indica si esta opción está seleccionada
  onSelect: (id: string) => void // Función que se ejecuta al seleccionar esta opción
}

// Componente que representa una opción seleccionable
export default function Option({ id, text, isSelected, onSelect }: OptionProps) {

  // Criterio 3: Las opciones deben ser seleccionables
  // Criterio 4: Solo se puede seleccionar una opción por pregunta (manejado por el estado en quiz-game.tsx)
  // Criterio 5: Al seleccionar una opción, debe resaltarse visualmente
  
  return (
    // Botón que representa la opción
    <button
      className="option-button"
      // Al hacer clic, llamamos a la función onSelect con el id de esta opción
      onClick={() => onSelect(id)}
      // Aplicamos estilos inline para dar formato al botón
      // Cambiamos el color de fondo si la opción está seleccionada (resaltado visual)
      style={{
        display: "block",
        margin: "5px 0",
        padding: "10px",
        width: "100%",
        textAlign: "left",
        backgroundColor: isSelected ? "#e0e0e0" : "transparent", // Cambia el color si está seleccionada
        border: "1px solid black",
      }}
    >
      {/* Mostramos el identificador de la opción (A, B, C o D) seguido del texto */}
      <span className="option-id">{id}:</span> {text}
    </button>
  )
}
