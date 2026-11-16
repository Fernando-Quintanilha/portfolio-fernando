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
import { assets } from '../../content';
import { useLang } from '../../i18n';
import type { Vec } from '../../lib/robot';

const TAPS_NEEDED = 5;
const TAP_WINDOW_MS = 2000;

export function Home() {
  useSmoothScroll();
  const { lang } = useLang();
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
      {/* key={lang}: o SplitText mexe no DOM dos títulos; trocar de idioma remonta a página em vez de atualizar por cima. */}
      <div key={lang} className="mx-auto max-w-[1240px] xl:border-x xl:border-ink/15">
        <main>
          <Hero obstacle={dinoPos} spriteUrl={assets.spriteUrl ?? undefined}>
            <Dino walking={walking} onDone={() => setWalking(false)} onPosition={setDinoPos} />
          </Hero>
          <Work />
          <Projects />
          <Robotics />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
