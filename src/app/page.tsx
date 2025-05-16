"use client";

import Image from "next/image";

export default function Home() {
  return (
<main className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 w-full min-h-screen transition-all duration-500 m-0 p-0 box-border overflow-hidden">      <Image
        className="block mx-auto mt-10"
        src="/programing.png"
        width={200}
        height={200}
        priority
        alt="logo banco de preguntas"
      />
      <div className="h-screen flex justify-center items-center border border-white/10 bg-black/35 m-20 ">
      <section className="section">

      </section>
      </div>
    </main>
  );
}
