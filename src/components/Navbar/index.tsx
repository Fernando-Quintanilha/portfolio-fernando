import { Terminal, Github, Linkedin } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-dark-900/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo / Marca */}
                <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">
                    <Terminal className="text-primary" size={24} />
                    <span> <a href="#home">Fernando Quintanilha</a><span className="text-primary">.dev</span></span>
                </div>

                {/* Links de Navegação (Desktop) */}
                <div className="hidden items-center gap-8 md:flex">
                    <a href="#servicos" className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">
                        Solução
                    </a>
                    <a href="#sobre" className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">
                        Sobre
                    </a>
                    <a href="#projetos" className="text-sm font-medium text-gray-400 hover:text-primary transition-colors">
                        Projetos
                    </a>
                </div>

                {/* Botão de Ação + Sociais */}
                <div className="flex items-center gap-4">
                    <div className="hidden gap-3 sm:flex">
                        {/* Correção de Segurança e Acessibilidade aqui */}
                        <a
                            href="https://github.com/Fernando-Quintanilha"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Ver perfil no Github"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/fernando-quintanilha-b548242ba/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Ver perfil no LinkedIn"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <button className="rounded bg-primary px-5 py-2 text-sm font-bold text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                        Falar Comigo
                    </button>
                </div>

            </div>
        </nav>
    );
}