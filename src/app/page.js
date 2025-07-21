"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import PersonScore from "@/components/PersonScore";
import AsideInfo from "@/components/AsideInfo";

export default function RankingPage() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const snapshot = await getDocs(collection(db, "highscores"));
      const todos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const ordenado = todos.sort((a, b) => b.pontuacao - a.pontuacao);
      setDados(ordenado);
    }

    fetchData();
  }, []);

  return (
    <main className="flex flex-col md:flex-row items-start justify-center min-h-screen py-20 px-6 gap-10 bg-gray-100">
      {/* Coluna do Ranking */}
      <div className="flex-1 max-w-xl w-full">
        <h1 className="text-4xl font-bold mb-15 text-center md:text-left">🏆 Ranking de Pontuação</h1>
        <div className="w-full bg-white rounded-lg shadow-lg divide-y">
          {dados.map((item, index) => (
            <PersonScore
              key={item.id}
              id={item.id}
              name={item.nome}
              score={item.pontuacao}
              rounds={item.rounds}
              position={index + 1}
            />
          ))}
        </div>
      </div>

      {/* Aside com informações do jogo */}
      <AsideInfo
        gameName="Plataformania"
        imageUrl="/nisson.png"
        description="Desafie seus limites e veja até onde você consegue ir!"
        itchUrl="https://nicenisson.itch.io/plataformania"
      />
    </main>
  );
}
