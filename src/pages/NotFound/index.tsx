import { Link } from 'react-router-dom';
import { DinoDrawing } from '../../components/Dino';

export function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-start justify-end px-4 pb-10 sm:px-8">
      <DinoDrawing className="w-40 sm:w-56" />
      <p className="label mt-8">erro 404</p>
      <h1 className="mt-3 font-display text-[clamp(3rem,10vw,8rem)] font-extrabold leading-[0.9] tracking-tightest">
        Essa rota não existe.
      </h1>
      <Link to="/" className="link-line mt-8">
        voltar ao início
      </Link>
    </main>
  );
}
