// 'use client' marca como Client Component (roda no browser, pode usar hooks
// e event handlers). Sem isso, o Next trata como Server Component (default).
'use client';

import dynamic from 'next/dynamic';

// dynamic() = import preguiçoso. { ssr: false } evita rodar no servidor —
// necessário porque o shader usa WebGL (browser-only).
const Dithering = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.Dithering),
  { ssr: false },
);

// Os shapes aceitos pelo shader Dithering da lib @paper-design/shaders-react.
type DitheringShape = 'warp' | 'sphere' | 'simplex' | 'dots' | 'wave' | 'ripple';

// Props todas opcionais (`?`). Os defaults abaixo preservam o visual antigo
// (warp azul cobrindo a tela com máscara em gradient) — então qualquer uso
// antigo `<DitheringBackground />` continua funcionando igualzinho.
interface DitheringBackgroundProps {
  colorBack?: string;
  colorFront?: string;
  shape?: DitheringShape;
  speed?: number;
  // className do wrapper: deixa o pai controlar posição/máscara sem reescrever.
  className?: string;
}

export function DitheringBackground({
  colorBack = '#00000000', // RGBA hex de 8 dígitos; últimos 2 = alpha (00 = transparente).
  colorFront = '#001969',
  shape = 'warp',
  speed = 0.4,
  className = 'absolute inset-0 -z-1 mask-[linear-gradient(to_top,white_30%,transparent_calc(100%-120px))]',
}: DitheringBackgroundProps) {
  return (
    <div className={className}>
      <Dithering
        colorBack={colorBack}
        colorFront={colorFront}
        shape={shape}
        type="4x4"
        speed={speed}
        className="size-full"
        minPixelRatio={1}
      />
    </div>
  );
}
