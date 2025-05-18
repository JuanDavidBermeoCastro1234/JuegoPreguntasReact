This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# 🎮 Juego de Preguntas - App de Trivia en Next.js

Este es un juego interactivo de preguntas tipo test desarrollado con **Next.js** y **React**, orientado a reforzar conocimientos en programación y otras categorías. El jugador debe responder correctamente al menos 10 de 15 preguntas para ganar.

---

## 🚀 Funcionalidades

- ✅ Preguntas aleatorias cargadas desde un archivo JSON.
- 🧠 El jugador debe ingresar su nombre antes de jugar.
- 🧩 Incluye dos comodines:
  - **50/50**: elimina dos respuestas incorrectas.
  - **Mostrar respuesta correcta**: muestra la respuesta correcta una vez por partida.
- 🎯 Retroalimentación visual inmediata (verde si es correcta, rojo si es incorrecta).
- 🧾 Historial de partidas guardado con `localStorage`, con nombre y puntaje.
- 🔄 Botones para volver al inicio, jugar de nuevo o ver/borrar historial.
- 📱 Interfaz responsive para móviles y escritorio.

---

## 🛠️ Tecnologías usadas

- **Next.js**
- **React**
- **TypeScript**
- **CSS puro**
- **LocalStorage**

---

## 📦 Instalación y uso

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/juego-preguntas.git
cd juego-preguntas
