import { Section } from '../Section';
import { about, links, robotics } from '../../content';

const big = [
  { label: 'e-mail', href: `mailto:${links.email}`, text: 'Mandar um e-mail' },
  { label: 'linkedin', href: links.linkedin, text: 'LinkedIn' },
  { label: 'github', href: links.github, text: 'GitHub' },
];

export function Contact() {
  return (
    <Section id="contato" index="04" label="contato" title="Procuro vaga de back-end ou full-stack.">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
        <div data-reveal className="space-y-4 text-lg leading-relaxed">
          <figure className="mb-8 max-w-[16rem]">
            <img
              src={robotics.photo}
              alt="Fernando Quintanilha com o robô da equipe no torneio nacional FTC"
              loading="lazy"
              className="aspect-[4/5] w-full border border-ink object-cover"
            />
            <figcaption className="mt-2 font-mono text-[12px] text-ink-soft">torneio nacional FTC</figcaption>
          </figure>
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p className="font-mono text-[13px] text-ink-soft">Remoto ou presencial em Goiânia.</p>
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
            <a href={links.curriculo} target="_blank" rel="noreferrer" className="link-line">
              currículo ↗
            </a>
            <span className="font-mono text-[13px] text-ink-soft">{links.email}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
