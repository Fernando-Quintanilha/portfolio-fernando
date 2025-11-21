import { Terminal, Github, Linkedin, Mail, Instagram } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">

                    {/* Coluna 1: Marca e Bio */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white mb-4">
                            <Terminal className="text-primary" size={24} />
                            <span>Fernando<span className="text-primary">.dev</span></span>
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Desenvolvedor focado em criar experiências digitais de alto impacto.
                            Transformando ideias complexas em interfaces simples e performáticas.
                        </p>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Navegação</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <a href="#home" className="hover:text-primary transition-colors">Início</a>
                            </li>
                            <li>
                                <a href="#servicos" className="hover:text-primary transition-colors">Soluções</a>
                            </li>
                            <li>
                                <a href="#projetos" className="hover:text-primary transition-colors">Portfólio</a>
                            </li>
                            <li>
                                <a href="/links" className="hover:text-primary transition-colors">Meus Links</a>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div>
                        <h3 className="text-white font-bold mb-4">Contato</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:seuemail@exemplo.com"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Mail size={18} />
                                    seuemail@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Linkedin size={18} />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Github size={18} />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                >
                                    <Instagram size={18} />
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Rodapé do Rodapé (Copyright) */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © {currentYear} Fernando Quintanilha. Todos os direitos reservados.
                    </p>

                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        Feito com <span className="text-red-500">❤</span> e <span className="text-primary font-bold">React</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}