"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";

function ResultadoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const estado = searchParams.get("estado");
  const buenas = searchParams.get("buenas");
  const malas = searchParams.get("malas");

  useEffect(() => {
    // Reiniciar automáticamente después de 5 segundos
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <main className="caja-principal">
      <div className="contenedor_div">
        <h1 className={estado === "ganaste" ? "ganaste" : "perdiste"}>
          {estado === "ganaste" ? "🎉 ¡Felicidades! Has ganado" : "😢 Has perdido, vuelve a intentarlo"}
        </h1>
        <p>✔️ Respuestas correctas: {buenas}</p>
        <p>❌ Respuestas incorrectas: {malas}</p>
        <p>🔄 Reiniciando en 5 segundos...</p>
      </div>
    </main>
  );
}

export default function Resultado() {
  return (
    <Suspense fallback={null}>
      <ResultadoContent />
    </Suspense>
  );
}



// "use client";

// import { useSearchParams } from "next/navigation";

// export default function Resultado() {
//   const searchParams = useSearchParams();
//   const estado = searchParams.get("estado");
//   const buenas = searchParams.get("buenas");
//   const malas = searchParams.get("malas");

//   return (
//     <div>
//       <h1>{estado === "ganaste" ? "🎉 Felicidades, ganaste!" : "😢 Perdiste, vuelve a intentarlo."}</h1>
//       <p>Preguntas correctas: {buenas}</p>
//       <p>Preguntas incorrectas: {malas}</p>
//     </div>
//   );
// }
