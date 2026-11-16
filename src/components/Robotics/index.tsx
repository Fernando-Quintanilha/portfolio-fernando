import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Section } from '../Section';
import { assets, links } from '../../content';
import { useLang } from '../../i18n';
import { ViewerBoundary } from './ViewerBoundary';

const RobotViewer = lazy(() => import('./RobotViewer'));

function Corners() {
  const c = 'absolute h-4 w-4 border-ink';
  return (
    <>
      <span className={`${c} -left-2 -top-2 border-l-2 border-t-2`} />
      <span className={`${c} -right-2 -top-2 border-r-2 border-t-2`} />
      <span className={`${c} -bottom-2 -left-2 border-b-2 border-l-2`} />
      <span className={`${c} -bottom-2 -right-2 border-b-2 border-r-2`} />
    </>
  );
}

export function Robotics() {
  const frame = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);
  const [failed, setFailed] = useState(false);
  const { t } = useLang();
  const robotics = t.robotics;
  const url = assets.robotModelUrl;
  const use3d = Boolean(url) && !failed;

  useEffect(() => {
    if (!use3d || !frame.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: '100% 0px' },
    );
    io.observe(frame.current);
    return () => io.disconnect();
  }, [use3d]);

  const photo = (
    <img
      src={assets.photo}
      alt={robotics.photoAlt}
      loading="lazy"
      className="aspect-[4/5] w-full object-cover"
    />
  );

  return (
    <Section id="robotica" index="03" label={robotics.label} title={robotics.title}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <figure data-reveal>
          <div ref={frame} className="relative border border-ink/20 bg-paper">
            <Corners />
            {use3d && url ? (
              <div className="aspect-square w-full">
                {near && (
                  <ViewerBoundary onError={() => setFailed(true)}>
                    <Suspense fallback={null}>
                      <RobotViewer url={url} onError={() => setFailed(true)} />
                    </Suspense>
                  </ViewerBoundary>
                )}
              </div>
            ) : (
              photo
            )}
          </div>
          <figcaption className="mt-4 flex justify-between font-mono text-[12px] text-ink-soft">
            <span>{robotics.season}</span>
            <span>{use3d ? robotics.caption3d : robotics.captionPhoto}</span>
          </figcaption>
        </figure>

        <div>
          <p data-reveal className="text-lg leading-relaxed">
            {robotics.intro}
          </p>
          <a data-reveal href={links.robotCode} target="_blank" rel="noreferrer" className="link-line mt-4">
            {robotics.code} ↗
          </a>

          <ul className="mt-12">
            {robotics.awards.map((a) => (
              <li
                data-reveal
                key={a.text}
                className="grid grid-cols-[4rem_minmax(0,1fr)] gap-4 border-t border-ink/20 py-4"
              >
                <span className="font-mono text-[13px] text-signal-text">{a.year}</span>
                <span className="leading-snug">{a.text}</span>
              </li>
            ))}
          </ul>

          <p data-reveal className="mt-10 border-t border-ink pt-4 font-mono text-[13px] leading-relaxed">
            {robotics.atlas}
          </p>
        </div>
      </div>
    </Section>
  );
}
