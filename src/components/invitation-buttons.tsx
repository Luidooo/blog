'use client';

import { useState } from 'react';
import { HeartConfetti } from './heart-confetti';

export function InvitationButtons() {
  // noPos: deslocamento (x, y) RELATIVO à posição original do botão "não".
  // Aplicado via `transform: translate(...)`, não muda o layout — então
  // os botões em volta não pulam quando o "não" foge.
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  // yes: depois de clicado, troca a UI por mensagem de confirmação + chuva.
  const [yes, setYes] = useState(false);

  // Sorteia uma nova posição em ±220px X e ±110px Y. Range escolhido pra
  // o botão sumir visualmente da rota do mouse sem voar pra fora da tela
  // na maioria das viewports.
  const dodge = () => {
    const x = (Math.random() - 0.5) * 440;
    const y = (Math.random() - 0.5) * 220;
    setNoPos({ x, y });
  };

  // Early-return: depois do "sim" não renderiza mais os botões — vira mensagem
  // + confetes de coração. Padrão comum quando UI tem 2 estados bem distintos.
  if (yes) {
    return (
      <>
        <p className="mt-10 text-3xl text-red-600">
          ❤ vejo você às 19:10
        </p>
        <HeartConfetti />
      </>
    );
  }

  return (
    <div className="mt-10 flex items-center justify-center gap-6">
      <button
        type="button"
        onClick={() => setYes(true)}
        className="rounded-full bg-red-500 px-10 py-3 text-3xl text-stone-50 shadow-lg shadow-red-300/40 transition hover:scale-105 hover:bg-red-600 active:scale-95"
      >
        sim
      </button>
      <button
        type="button"
        // 3 eventos cobrindo as formas de "chegar perto":
        //   mouseEnter — desktop, ao passar o mouse por cima
        //   focus      — teclado (Tab), pra não dar pra tabular e clicar
        //   touchStart — mobile, ao tocar foge antes do click registrar
        onMouseEnter={dodge}
        onFocus={dodge}
        onTouchStart={dodge}
        style={{ transform: `translate(${noPos.x}px, ${noPos.y}px)` }}
        className="rounded-full border-2 border-stone-300 bg-stone-50 px-10 py-3 text-3xl text-stone-600 transition-transform duration-300 ease-out"
      >
        não
      </button>
    </div>
  );
}
