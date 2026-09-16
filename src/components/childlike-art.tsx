// Desenho em SVG inline no estilo "letra de criança":
// linhas finas, cantos arredondados (`strokeLinecap="round"`), formas
// um pouco tortas de propósito. Cores controladas via `currentColor`
// — quem usa só precisa setar `text-rose-900` (ou o que for) no pai.
//
// É um componente puro de apresentação (sem hooks, sem estado) então
// não precisa de 'use client'.
export function ChildlikeArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 160"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* === Pessoa 1 (esquerda) === */}
      <circle cx="80" cy="40" r="16" />
      {/* corpo */}
      <path d="M80 56 L80 105" />
      {/* braço esquerdo (pra fora) */}
      <path d="M80 72 Q66 80 60 92" />
      {/* braço direito (vai segurar a mão da outra pessoa) */}
      <path d="M80 72 Q98 78 112 84" />
      {/* pernas */}
      <path d="M80 105 Q72 122 64 138" />
      <path d="M80 105 Q88 122 96 138" />
      {/* rostinho: olhos + sorriso */}
      <circle cx="74" cy="37" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="86" cy="37" r="1.4" fill="currentColor" stroke="none" />
      <path d="M72 44 Q80 50 88 44" />

      {/* === Pessoa 2 (centro) === */}
      <circle cx="170" cy="40" r="16" />
      <path d="M170 56 L170 105" />
      {/* braço esquerdo (vai segurar a mão da pessoa 1) */}
      <path d="M170 72 Q152 78 138 84" />
      {/* braço direito (pra fora) */}
      <path d="M170 72 Q186 80 192 92" />
      <path d="M170 105 Q162 122 154 138" />
      <path d="M170 105 Q178 122 186 138" />
      <circle cx="164" cy="37" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="176" cy="37" r="1.4" fill="currentColor" stroke="none" />
      <path d="M162 44 Q170 50 178 44" />

      {/* === Coraçãozinho entre as mãos === */}
      <path
        d="M125 78 q-4 -6 -9 -2 q-2 4 1 8 q3 4 8 8 q5 -4 8 -8 q3 -4 1 -8 q-5 -4 -9 2 Z"
        fill="currentColor"
        stroke="none"
      />

      {/* === Gatinho (esquerda do casal) ===
          Em pose sentada (corpo vertical pera), cabeça redonda com 2 orelhas
          triangulares, olhinhos "^ ^" fechados de fofo, bigodes e rabo em S. */}
      <g transform="translate(-10 78)">
        {/* corpo (pera vertical, sentado) */}
        <ellipse cx="32" cy="48" rx="18" ry="20" />
        {/* cabeça */}
        <circle cx="32" cy="22" r="13" />
        {/* orelhas (triângulos pontudos) */}
        <path d="M23 14 L21 0 L30 9" />
        <path d="M41 14 L43 0 L34 9" />
        {/* olhinhos fechados cute */}
        <path d="M25 20 q3 -3 6 0" />
        <path d="M33 20 q3 -3 6 0" />
        {/* narizinho */}
        <path d="M30 26 L34 26 L32 28 Z" fill="currentColor" stroke="none" />
        {/* boca em w */}
        <path d="M32 28 Q 30 32 27 30" />
        <path d="M32 28 Q 34 32 37 30" />
        {/* bigodes */}
        <path d="M25 27 L15 26" strokeWidth="1.5" />
        <path d="M25 30 L15 31" strokeWidth="1.5" />
        <path d="M39 27 L49 26" strokeWidth="1.5" />
        <path d="M39 30 L49 31" strokeWidth="1.5" />
        {/* patinhas dianteiras */}
        <path d="M25 64 L23 72" />
        <path d="M39 64 L41 72" />
        {/* rabinho enrolado, sobe e curva pro lado */}
        <path d="M50 50 Q 64 48 62 32 Q 60 20 53 26" />
      </g>

      {/* === Cachorrinho (direita) === */}
      <g transform="translate(230 78)">
        {/* corpo */}
        <ellipse cx="46" cy="32" rx="36" ry="16" />
        {/* cabeça */}
        <ellipse cx="12" cy="22" rx="13" ry="11" />
        {/* orelha caída */}
        <path d="M3 14 Q1 6 9 4 L14 14" />
        {/* olho + focinho */}
        <circle cx="10" cy="22" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="3" cy="25" r="1.6" fill="currentColor" stroke="none" />
        {/* boquinha */}
        <path d="M3 27 Q5 30 8 28" />
        {/* 4 patas */}
        <path d="M22 47 L20 60" />
        <path d="M36 47 L34 60" />
        <path d="M54 47 L54 60" />
        <path d="M70 45 Q72 53 70 60" />
        {/* rabinho mexendo (curva pra cima) */}
        <path d="M80 25 Q92 18 90 32" />
      </g>
    </svg>
  );
}
