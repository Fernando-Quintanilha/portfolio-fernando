import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-900 border-t border-white/10 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">

                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white mb-4">
                            <Terminal className="text-emerald-400" size={24} />
                            <span>Fernando<span className="text-emerald-400">.dev</span></span>
                        </div>
                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Engenheiro de Software Full Stack. Transformo ideias em sistemas escaláveis, do banco de dados à interface de usuário.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Navegação</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>
                                <a href="#home" className="hover:text-emerald-400 transition-colors">Início</a>
                            </li>
                            <li>
                                <a href="#servicos" className="hover:text-emerald-400 transition-colors">Soluções</a>
                            </li>
                            <li>
                                <a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre</a>
                            </li>
                            <li>
                                <a href="#projetos" className="hover:text-emerald-400 transition-colors">Portfólio</a>
                            </li>
                            <li>
                                <a href="#depoimentos" className="hover:text-emerald-400 transition-colors">Depoimentos</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Contato Direto</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="mailto:fernando@quintanilha.dev"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <Mail size={18} />
                                    fehdacostaquintanilhafilho@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/5562984048425"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <FaWhatsapp size={18} />
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com/in/fernando-quintanilha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <Linkedin size={18} />
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Fernando-Quintanilha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
                                >
                                    <Github size={18} />
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © {currentYear} Fernando Quintanilha. Todos os direitos reservados.
                    </p>

                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        Feito com <span className="text-emerald-400 font-bold">React</span>
                    </p>
                </div>

            </div>
        </footer>
    );
}