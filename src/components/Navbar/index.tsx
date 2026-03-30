import { Terminal, Github, Linkedin } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-dark-900/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">
                    <Terminal className="text-emerald-400" size={24} />
                    <span> <a href="#home">Fernando Quintanilha</a><span className="text-emerald-400">.dev</span></span>
                </div>

                <div className="hidden items-center gap-8 md:flex">
                    <a href="#servicos" className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors">
                        Soluções
                    </a>
                    <a href="#sobre" className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors">
                        Sobre
                    </a>
                    <a href="#projetos" className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors">
                        Projetos
                    </a>
                    {/* <a href="#depoimentos" className="text-sm font-medium text-gray-400 hover:text-emerald-400 transition-colors">
                        Depoimentos
                    </a> */}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden gap-3 sm:flex">
                        <a
                            href="https://github.com/Fernando-Quintanilha"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Ver perfil no Github"
                            className="text-gray-400 hover:text-emerald-400 transition-colors"
                        >
                            <Github size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/fernando-quintanilha-b548242ba/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Ver perfil no LinkedIn"
                            className="text-gray-400 hover:text-emerald-400 transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <a
                        href="#contato"
                        className="rounded bg-emerald-600 hover:bg-emerald-700 px-5 py-2 text-sm font-bold text-white transition-all shadow-lg shadow-emerald-600/20"
                    >
                        Falar Comigo
                    </a>
                </div>

            </div>
        </nav>
    );
}