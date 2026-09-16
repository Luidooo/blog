'use client';

import { useState } from 'react';

// Botão que joga o PNG direto no clipboard como imagem (não como URL), pra
// colar no Bitbucket/Slack sem baixar o arquivo antes.
//
// A Clipboard API só aceita image/png em ClipboardItem — como as imagens já são
// PNG, dá pra passar o blob do fetch sem conversão. Exige contexto seguro
// (https), o que é o caso via Cloudflare.
export function CopyImageButton({ src }: { src: string }) {
  const [state, setState] = useState<'idle' | 'ok' | 'erro'>('idle');

  async function copiar() {
    try {
      const blob = await fetch(src).then((r) => r.blob());
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ]);
      setState('ok');
    } catch {
      // Firefox sem dom.events.asyncClipboard.clipboardItem cai aqui — o
      // fallback é o botão "abrir" ao lado, com Ctrl+C na imagem.
      setState('erro');
    }
    setTimeout(() => setState('idle'), 2000);
  }

  return (
    <button
      onClick={copiar}
      className="rounded-md border border-stone-300 px-2 py-1 text-xs text-stone-700 transition-colors hover:bg-stone-100"
    >
      {state === 'ok' ? 'copiado' : state === 'erro' ? 'falhou' : 'copiar'}
    </button>
  );
}
