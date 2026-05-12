'use client';


import Link from 'next/link';
import {useRef} from 'react';
import dynamic from 'next/dynamic';


const Dithering = dynamic(
  () => import('@paper-design/shaders-react').then((mod) => mod.Dithering),
  {
    ssr: false,
  },
);

function DitheringBackground() {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <div
      ref={ref}
      className="absolute inset-0 -z-1 mask-[linear-gradient(to_top,white_30%,transparent_calc(100%-120px))]"
    >
      <Dithering
        colorBack='#00000000'
        //colorFront='#c6bb58'
        colorFront='#001969'
        shape="warp"
        type="4x4"
        speed={0.4}
        className="size-full"
        minPixelRatio={1}
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">bro oi</h1>
      <DitheringBackground />
      <p>
        You can open{' '}
        <Link href="/docs" className="font-medium underline">
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </div>
  );
}
