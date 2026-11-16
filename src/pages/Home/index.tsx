import { useEffect, useRef, useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Hero } from '../../components/Hero';
import { Work } from '../../components/Work';
import { Projects } from '../../components/Projects';
import { Robotics } from '../../components/Robotics';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { Dino } from '../../components/Dino';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { createSecretMatcher } from '../../lib/secretWord';
import { robotics } from '../../content';
import type { Vec } from '../../lib/robot';

const TAPS_NEEDED = 5;
const TAP_WINDOW_MS = 2000;

export function Home() {
  useSmoothScroll();
  const [walking, setWalking] = useState(false);
  const [dinoPos, setDinoPos] = useState<Vec | null>(null);
  const taps = useRef<number[]>([]);

  useEffect(() => {
    const match = createSecretMatcher('rawr');
    const onKey = (e: KeyboardEvent) => {
      if (match(e.key)) setWalking(true);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const onLogoTap = () => {
    const now = Date.now();
    taps.current = [...taps.current.filter((t) => now - t < TAP_WINDOW_MS), now];
    if (taps.current.length >= TAPS_NEEDED) {
      taps.current = [];
      setWalking(true);
    }
  };

  return (
    <>
      <Navbar onLogoTap={onLogoTap} />
      <main>
        <Hero obstacle={dinoPos} spriteUrl={robotics.spriteUrl ?? undefined}>
          <Dino walking={walking} onDone={() => setWalking(false)} onPosition={setDinoPos} />
        </Hero>
        <Work />
        <Projects />
        <Robotics />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
