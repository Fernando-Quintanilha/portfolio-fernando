import { Github, Linkedin, MessageCircle } from 'lucide-react';

export function Links() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-dark-900 p-4">

            <div className="h-24 w-24 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 p-[2px] mb-4">
                <img
                    src="https://github.com/fernandoquintanilha.png"
                    alt="Fernando"
                    className="h-full w-full rounded-full bg-dark-900 object-cover"
                />
            </div>

            <h1 className="text-xl font-bold text-white mb-2">Fernando Quintanilha</h1>
            <p className="text-gray-400 mb-8 text-sm">Desenvolvedor & Growth Engineer</p>

            <div className="flex w-full max-w-xs flex-col gap-4">

                <a href="/" className="flex items-center justify-center gap-2 rounded-lg bg-dark-800 p-4 font-medium text-white transition-all hover:bg-dark-800/50 hover:scale-105 border border-white/5">
                    💻 Ver Portfólio Oficial
                </a>

                <a href="https://wa.me/5562984048425" className="flex items-center justify-center gap-2 rounded-lg bg-primary p-4 font-bold text-white transition-all hover:bg-emerald-600 hover:scale-105 shadow-lg shadow-emerald-500/20">
                    <MessageCircle size={20} />
                    Chamar no WhatsApp
                </a>

                <a href="https://linkedin.com" className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 p-4 font-medium text-white transition-all hover:bg-blue-700 hover:scale-105">
                    <Linkedin size={20} />
                    LinkedIn
                </a>

                <a href="https://github.com" className="flex items-center justify-center gap-2 rounded-lg bg-gray-800 p-4 font-medium text-white transition-all hover:bg-gray-700 hover:scale-105">
                    <Github size={20} />
                    GitHub
                </a>

            </div>
        </div>
    );
}