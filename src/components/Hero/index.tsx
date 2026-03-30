import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function Hero() {
    const isAvailable = true;

    return (
        <section className="relative flex min-h-screen items-center justify-center pt-20 overflow-hidden">

            <div className={`absolute top-20 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[100px] ${isAvailable ? 'bg-emerald-500/20' : 'bg-red-500/20'
                }`} />

            <div className="mx-auto max-w-7xl px-6 text-center">

                <div className={`mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${isAvailable
                        ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                        : 'border-red-500/30 bg-red-500/10 text-red-500'
                    }`}>
                    <span className="relative flex h-2 w-2">
                        <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${isAvailable ? 'bg-emerald-400' : 'bg-red-400'
                            }`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${isAvailable ? 'bg-emerald-500' : 'bg-red-500'
                            }`}></span>
                    </span>
                    {isAvailable ? "Disponível para novos projetos" : "Agenda fechada no momento"}
                </div>

                <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
                    Engenheiro de Software<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                        Full Stack
                    </span>
                </h1>

                <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl">
                    Construo sistemas completos do banco de dados à interface. Especializado em arquitetura escalável, automação de processos e aplicações web de alta performance.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="https://wa.me/5562984048425"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-700 hover:scale-105 shadow-xl shadow-emerald-500/20"
                    >
                        <FaWhatsapp size={20} />
                        Solicitar Orçamento
                    </a>

                    <a
                        href="#projetos"
                        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
                    >
                        Ver portfólio
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5">
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Stack Completo</p>
                    <div className="flex flex-wrap justify-center gap-8 text-gray-400">
                        <span className="hover:text-emerald-400 transition-colors cursor-default font-semibold">React.js</span>
                        <span className="hover:text-cyan-400 transition-colors cursor-default font-semibold">TypeScript</span>
                        <span className="hover:text-blue-400 transition-colors cursor-default font-semibold">C#</span>
                        <span className="hover:text-yellow-400 transition-colors cursor-default font-semibold">Python</span>
                        <span className="hover:text-orange-400 transition-colors cursor-default font-semibold">Docker</span>
                        <span className="hover:text-red-400 transition-colors cursor-default font-semibold">SQL</span>
                        <span className="hover:text-purple-400 transition-colors cursor-default font-semibold">Tailwind CSS</span>
                        <span className="hover:text-pink-600 transition-color cursor-default font-semibold">POO</span>
                        <span className="hover:text-lime-500 transition-colocr cursor-default font-semibold">Vite</span>
                    </div>
                </div>

            </div>
        </section>
    );
}