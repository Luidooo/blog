import { Patrick_Hand } from 'next/font/google';

// next/font/google: baixa a fonte no build, gera CSS otimizado e evita
// "flash of unstyled text" (FOUT). Sem custo de rede em runtime.
// Patrick Hand é uma fonte do Google estilo letra de criança em caixa-alta-baixa.
const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
});

// Antes esse layout usava <HomeLayout> da fumadocs (que adiciona header e nav).
// Pra um convite/página única, não precisamos disso — só envelopamos os filhos
// com a className da fonte pra Patrick Hand virar a fonte default dessa rota.
export default function Layout({ children }: LayoutProps<'/'>) {
  return <div className={patrickHand.className}>{children}</div>;
}
