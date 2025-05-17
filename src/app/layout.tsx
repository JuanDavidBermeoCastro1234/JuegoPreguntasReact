import type React from "react"

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
      <head>
        <title>Juego de Preguntas POO</title>
        <meta name="description" content="Juego de preguntas sobre Programación Orientada a Objetos" />
      </head>
      <body>{children}</body>
    </html>
  )
}
