import { Section } from '../Section';
import { assets, links } from '../../content';
import { useLang } from '../../i18n';

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const big = [
    { label: 'e-mail', href: `mailto:${links.email}`, text: c.email },
    { label: 'linkedin', href: links.linkedin, text: 'LinkedIn' },
    { label: 'github', href: links.github, text: 'GitHub' },
  ];
  return (
    <Section id="contato" index="04" label={c.label} title={c.title}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
        <div data-reveal className="space-y-4 text-lg leading-relaxed">
          <figure className="mb-8 max-w-[16rem]">
            <img
              src={assets.photo}
              alt={c.photoAlt}
              loading="lazy"
              className="aspect-[4/5] w-full border border-ink object-cover"
            />
            <figcaption className="mt-2 font-mono text-[12px] text-ink-soft">{c.photoCaption}</figcaption>
          </figure>
          {c.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="font-mono text-[13px] text-ink-soft">{c.where}</p>
        </div>

        <div>
          <ul className="border-b border-ink">
            {big.map((b) => (
              <li data-reveal key={b.label} className="border-t border-ink">
                <a
                  href={b.href}
                  target={b.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="group flex items-baseline justify-between gap-4 py-5"
                >
                  <span className="font-display text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-none tracking-tightest transition-colors group-hover:text-signal-text">
                    {b.text}
                  </span>
                  <span className="font-mono text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            <a href={links.whatsapp} target="_blank" rel="noreferrer" className="link-line">
              whatsapp ↗
            </a>
            <a href={t.resumeUrl} target="_blank" rel="noreferrer" className="link-line">
              {t.nav.resume} ↗
            </a>
            <span className="font-mono text-[13px] text-ink-soft">{links.email}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
