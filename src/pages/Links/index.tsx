import { Link } from 'react-router-dom';
import { links, profile } from '../../content';

const items = [
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'GitHub', href: links.github },
  { label: 'E-mail', href: `mailto:${links.email}` },
  { label: 'WhatsApp', href: links.whatsapp },
];

export function Links() {
  return (
    <main className="mx-auto flex min-h-[100svh] max-w-md flex-col justify-center px-4 py-16">
      <p className="label">FQ/ links</p>
      <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.9] tracking-tightest">
        {profile.first}
        <br />
        {profile.last}
      </h1>
      <p className="mt-4 font-mono text-[13px] leading-relaxed text-ink-soft">
        Desenvolvedor back-end. {profile.line}
      </p>

      <ul className="mt-10 border-b border-ink">
        <li className="border-t border-ink">
          <Link to="/" className="flex items-baseline justify-between py-4 font-display text-2xl font-extrabold">
            Portfólio <span className="font-mono text-base">→</span>
          </Link>
        </li>
        {items.map((it) => (
          <li key={it.label} className="border-t border-ink">
            <a
              href={it.href}
              target={it.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-baseline justify-between py-4 font-display text-2xl font-extrabold hover:text-signal-text"
            >
              {it.label} <span className="font-mono text-base">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
