import { useLang } from '../../i18n';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="flex flex-col gap-2 border-t border-ink/20 px-4 py-6 font-mono text-[12px] text-ink-soft sm:flex-row sm:justify-between sm:px-8">
      <span>© {new Date().getFullYear()} Fernando Quintanilha</span>
      <span>{t.footer.made}</span>
      <span>{t.footer.hint}</span>
    </footer>
  );
}
