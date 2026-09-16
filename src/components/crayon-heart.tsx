// Coração SVG no mesmo estilo "rabisco infantil" dos palitinhos.
// Não usa shaders, é só SVG + CSS. Cor via `currentColor` (controlada pelo pai).
//
// Truque pra dar textura de "giz de cera":
//   <feTurbulence> gera ruído procedural (tipo Perlin noise) e
//   <feDisplacementMap> empurra cada pixel do traço pelo valor do ruído.
//   Resultado: o stroke deixa de ser uma curva matemática perfeita e
//   ganha aquela ondulação irregular típica de risco à mão.
export function CrayonHeart({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 180"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <defs>
        <filter id="crayon-texture" x="-5%" y="-5%" width="110%" height="110%">
          {/* baseFrequency controla "tamanho" do ruído (menor = ondas largas) */}
          <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="2" seed="3" />
          {/* scale = intensidade do empurrão. Valores altos = mais wobbly */}
          <feDisplacementMap in="SourceGraphic" scale="4" />
        </filter>
      </defs>

      {/* Contorno principal — assimétrico de propósito (curvas não-espelhadas)
          pra parecer desenho à mão, não geometria perfeita. */}
      <path
        d="M100 158
           C 46 132, 12 96, 14 58
           C 16 34, 36 18, 60 20
           C 78 22, 92 32, 100 50
           C 108 32, 122 22, 142 20
           C 164 18, 186 34, 188 58
           C 190 96, 154 132, 100 158 Z"
        strokeWidth="5"
        filter="url(#crayon-texture)"
      />

      {/* Segundo traço por dentro, mais fino e com opacidade — efeito de
          "passou o giz duas vezes" que dá profundidade ao desenho. */}
      <path
        d="M100 150
           C 52 126, 24 96, 26 60
           C 28 42, 44 28, 62 30"
        strokeWidth="2.5"
        opacity="0.5"
        filter="url(#crayon-texture)"
      />

      {/* Riscos curtos de hachura interna — "preenchimento" estilo criança */}
      <g strokeWidth="2" opacity="0.35" filter="url(#crayon-texture)">
        <path d="M60 80 Q 72 88 84 82" />
        <path d="M118 88 Q 130 96 142 90" />
        <path d="M76 108 Q 92 116 110 108" />
      </g>
    </svg>
  );
}
