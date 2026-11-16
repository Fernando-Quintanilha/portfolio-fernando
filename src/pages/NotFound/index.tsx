import { Link } from 'react-router-dom';
import { DinoDrawing } from '../../components/Dino';
import { useLang } from '../../i18n';

export function NotFound() {
  const { t } = useLang();
  return (
    <main className="flex min-h-[100svh] flex-col items-start justify-end px-4 pb-10 sm:px-8">
      <DinoDrawing className="w-40 sm:w-56" />
      <p className="label mt-8">{t.notFound.code}</p>
      <h1 className="mt-3 font-display text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[0.9] tracking-tightest">
        {t.notFound.title}
      </h1>
      <Link to="/" className="link-line mt-8">
        {t.notFound.back}
      </Link>
    </main>
  );
}
