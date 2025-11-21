import { ArrowRight, Code2, Github, Linkedin } from 'lucide-react';

export function Hero() {
    const isAvailable = false;

    return (
        <section id="/home" className="relative flex min-h-screen items-center justify-center pt-20 overflow-hidden">

            {/* Background Glow (Mantido) */}
            <div className={`absolute top-20 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[100px] ${isAvailable ? 'bg-primary/20' : 'bg-red-500/20'
                }`} />

            <div className="mx-auto max-w-7xl px-6 text-center">

                {/* BADGE DE DISPONIBILIDADE */}
                <div className={`mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${isAvailable
                        ? 'border-primary/30 bg-primary/10 text-primary'
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

                {/* Headline Nova: Foco em Desenvolvimento e Solidez */}
                <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
                    Transformo ideias em <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                        experiências digitais.
                    </span>
                </h1>

                {/* Sub-headline: Foco em qualidade e stack moderna */}
                <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 sm:text-xl">
                    Desenvolvedor Front-end especializado em criar aplicações web modernas, responsivas e de alta performance usando o melhor da tecnologia atual.
                </p>

                {/* Botões CTA - Focados em contato direto */}
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="#contato"
                        className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition-all hover:bg-emerald-600 hover:scale-105 shadow-xl shadow-emerald-500/20"
                    >
                        <Code2 size={20} className="fill-white/20" />
                        Solicitar Orçamento
                    </a>

                    <a
                        href="#projetos"
                        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10"
                    >
                        Ver meus trabalhos
                        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                    </a>
                </div>

                {/* Tech Stack - Isso é vital no Upwork/Workana para mostrar que você não é amador */}
                <div className="mt-16 pt-8 border-t border-white/5">
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider">Tecnologias que domino</p>
                    <div className="flex flex-wrap justify-center gap-8 text-gray-400">
                        {/* Aqui o cliente técnico vê valor */}
                        <span className="hover:text-white transition-colors cursor-default">React.js</span>
                        <span className="hover:text-primary transition-colors cursor-default">TypeScript</span>
                        <span className="hover:text-cyan-400 transition-colors cursor-default">Tailwind CSS</span>
                        <span className="hover:text-yellow-400 transition-colors cursor-default">JavaScript</span>
                        <span className="hover:text-purple-400 transition-colors cursor-default">Figma</span>
                    </div>
                </div>

            </div>
        </section>
    );
}