import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function CTA() {
    return (
        <section id="contato" className="py-20 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 border-y border-emerald-500/20">
            <div className="mx-auto max-w-4xl px-6 text-center">

                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                    Pronto para começar?
                </h2>

                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Vamos conversar sobre seu projeto. Sou rápido para responder e sempre pronto para entender suas necessidades.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <a
                        href="https://wa.me/5562984048425"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 rounded-full bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 shadow-lg shadow-emerald-600/30"
                    >
                        <FaWhatsapp size={24} />
                        Conversar no WhatsApp
                    </a>

                    <a
                        href="mailto:fernando@quintanilha.dev"
                        className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-emerald-500 hover:bg-emerald-500/10 px-8 py-4 text-lg font-bold text-emerald-400 transition-all hover:scale-105"
                    >
                        <Mail size={24} />
                        Enviar Email
                    </a>
                </div>

                <p className="text-gray-400 mt-8 text-sm">
                    Respondo dentro de 24h • Sem compromisso • Análise gratuita do seu projeto
                </p>

            </div>
        </section>
    );
}
