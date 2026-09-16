import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

// Tirei o <DitheringBackground /> daqui — antes ele era global e aparecia
// em TODA página. Agora cada rota decide o próprio fundo:
//   - home (convite): renderiza um background rosa + coração próprio
//   - docs (se ainda usar): pode importar o componente onde precisar
export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen relative">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
