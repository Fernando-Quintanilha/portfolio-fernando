import { Section } from '../Section';
import { Counter } from '../Counter';
import { useLang } from '../../i18n';

export function Work() {
  const { t } = useLang();
  const work = t.work;
  return (
    <Section id="trabalho" index="01" label={work.label} title={work.title}>
      <div data-reveal className="grid gap-y-2 border-y border-ink/20 py-4 font-mono text-[13px] sm:grid-cols-4">
        <p className="font-medium">{work.company}</p>
        <p>{work.role}</p>
        <p>{work.period}</p>
        <p className="text-ink-soft sm:text-right">{work.city}</p>
      </div>

      <p data-reveal className="mt-8 max-w-2xl text-lg leading-relaxed">
        {work.intro}
      </p>

      <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-5">
        {work.stats.map((s) => (
          <div data-reveal key={s.label} className="border-t border-ink pt-3">
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold leading-none tracking-tightest text-signal">
              {s.value !== undefined ? <Counter value={s.value} /> : s.text}
            </dd>
            <dd className="mt-3 font-mono text-[12px] leading-snug text-ink" aria-hidden="true">
              {s.label}
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-20">
        {work.systems.map((s) => (
          <li
            data-reveal
            key={s.name}
            className="grid gap-2 border-t border-ink/20 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-8"
          >
            <h3 className="font-display text-2xl font-extrabold tracking-tight">{s.name}</h3>
            <div>
              <p className="leading-relaxed">{s.what}</p>
              <p className="mt-2 font-mono text-[12px] text-ink-soft">{s.stack}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
