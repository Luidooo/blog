'use client';

import { useMemo } from 'react';

// Quantidade de corações na tela ao mesmo tempo. Mais que isso = laggy
// em telas fracas (cada um é um elemento DOM com animação CSS).
const HEART_COUNT = 40;

// SVG simples, preenchido. Tamanho vem do `fontSize` do pai (`width="1em"`).
function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      aria-hidden
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

export function HeartConfetti() {
  // useMemo com deps [] gera o array UMA VEZ. Sem isso, cada re-render sortearia
  // novas posições e os corações "teletransportariam" a cada update do React.
  // Math.random() roda só no client (esse arquivo é 'use client') — sem
  // risco de mismatch de hidratação SSR.
  const hearts = useMemo(
    () =>
      Array.from({ length: HEART_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100, // % horizontal
        delay: Math.random() * 3, // s — escalona o início, evita "onda"
        duration: 4 + Math.random() * 4, // 4..8s pra subir até o topo
        size: 16 + Math.random() * 32, // 16..48px
        drift: (Math.random() - 0.5) * 240, // -120..120px de deriva lateral
      })),
    [],
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      aria-hidden
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          style={
            {
              left: `${h.left}%`,
              fontSize: `${h.size}px`,
              // Animação inline: a keyframe `heart-rise` está em global.css.
              // Compõe: nome, duração, easing, delay, modo (infinite).
              animation: `heart-rise ${h.duration}s ease-out ${h.delay}s infinite`,
              // CSS custom property — usada pela keyframe pra cada coração
              // ter sua própria deriva lateral sem precisar de N keyframes.
              '--drift': `${h.drift}px`,
            } as React.CSSProperties
          }
          className="absolute -bottom-16 text-red-500"
        >
          <HeartIcon />
        </span>
      ))}
    </div>
  );
}
