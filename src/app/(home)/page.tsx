import { CrayonHeart } from '@/components/crayon-heart';
import { ChildlikeArt } from '@/components/childlike-art';
import { InvitationButtons } from '@/components/invitation-buttons';

// Página do convite — uma tela só, sem nav.
// Estrutura em camadas via posicionamento absoluto + z-index:
//
//   z-0 (fundo):  cream/off-white neutro (sem rosa pesado)
//   z-0 (centro): coração de giz, vermelho, atrás do texto — único ponto colorido grande
//   z-10 (frente): texto + desenho do casal em tons quentes neutros
export default function HomePage() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[radial-gradient(ellipse_at_center,_#fdf6f4_0%,_#faf8f5_75%)] text-stone-800">
      {/* Coração de giz no fundo. Aumentei pra 100vmin (e max 900px) — agora é
          o protagonista visual. Cor passou de rose-400 (rosado) pra red-400
          (vermelho mais quente), opacidade um pouco mais alta pra dar peso. */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden
      >
        <CrayonHeart className="w-[min(140vmin,1300px)] text-red-400/60 animate-[heart-breathe_6s_ease-in-out_infinite]" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-svh flex-col items-center justify-center px-6 py-12 text-center">
        <p className="text-2xl tracking-wide opacity-70">oi,</p>

        <h1 className="my-2 leading-none text-[clamp(3.5rem,14vw,7rem)]">
          Isadora
        </h1>

        <p className="mt-4 text-[clamp(1.5rem,4vw,2.25rem)]">
          quer jantar comigo
          <br />
          nesse dia dos namorados?
        </p>

        <div className="mt-10 space-y-1 text-2xl">
          <p>· comida italiana ·</p>
          <p>te busco às 19:10</p>
        </div>

        <InvitationButtons />

        {/* Desenho do casal em stone (cinza quente) em vez de rose-950 (lilás) */}
        <ChildlikeArt className="mt-12 w-80 max-w-full text-stone-700" />

        <p className="mt-6 text-xl opacity-70">— Luís</p>
      </div>
    </main>
  );
}
