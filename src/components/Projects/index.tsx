import { Section } from '../Section';
import type { Project } from '../../content';
import { useLang } from '../../i18n';

// O print fica fixo embaixo do nome. Antes ele seguia o mouse e cobria o texto do projeto.
function Row({ p, i, shotLabel }: { p: Project; i: number; shotLabel: string }) {
  return (
    <li
      data-reveal
      className="grid gap-4 border-t border-ink py-8 md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1.4fr)] md:gap-8"
    >
      <p className="font-mono text-[13px] text-ink-soft">{String(i + 1).padStart(2, '0')}</p>
      <div>
        <h3 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-none tracking-tightest">
          {p.name}
        </h3>
        {p.image && (
          <img
            src={p.image}
            alt={`${shotLabel} ${p.name}`}
            loading="lazy"
            className="mt-6 aspect-[16/10] w-full max-w-md border border-ink object-cover object-top"
          />
        )}
      </div>
      <div>
        <p className="leading-relaxed">{p.summary}</p>
        <p className="mt-3 font-mono text-[12px] text-ink-soft">{p.stack.join(' · ')}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          {p.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="link-line">
              {l.label} ↗
            </a>
          ))}
          {p.note && <span className="font-mono text-[12px] text-ink-soft">{p.note}</span>}
        </div>
      </div>
    </li>
  );
}

export function Projects() {
  const { t } = useLang();
  return (
    <Section id="projetos" index="02" label={t.projects.label} title={t.projects.title}>
      <ul className="border-b border-ink">
        {t.projects.items.map((p, i) => (
          <Row key={p.name} p={p} i={i} shotLabel={t.projects.screenshotOf} />
        ))}
      </ul>
    </Section>
  );
}
