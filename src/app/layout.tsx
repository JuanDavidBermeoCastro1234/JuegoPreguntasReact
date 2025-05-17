import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Juego de Preguntas POO",
  description: "Juego de preguntas sobre Programación Orientada a Objetos",
}

/**
 * Componente de layout raíz para toda la aplicación
 * Define la estructura HTML básica y los metadatos
 *
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Componentes hijos a renderizar dentro del layout
 * @returns {JSX.Element} - Elemento JSX que representa el layout raíz
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
