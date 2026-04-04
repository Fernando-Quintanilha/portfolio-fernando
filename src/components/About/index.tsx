import { Code2, Lightbulb, Award, Zap } from 'lucide-react';
<<<<<<< HEAD
import fernandoAI from "../../assets/fernandoRobo.jpg";
=======
import fernandoAI from "../../assets/fernandoAI.png";
>>>>>>> c70843a4eb893df9ed9e14f3feb2a396525b4333

export function About() {
    return (
        <section id="sobre" className="py-20 bg-dark-900">
            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-16 lg:grid-cols-2 items-start">

<<<<<<< HEAD
=======
                    {/* Esquerda - Foto com Glassmorphism */}
>>>>>>> c70843a4eb893df9ed9e14f3feb2a396525b4333
                    <div className="flex flex-col items-center justify-center order-2 lg:order-1">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                                Engenheiro de Software
                            </span>
                        </div>

                        <div className="relative w-full max-w-sm">
<<<<<<< HEAD
                            <div className="absolute inset-0 rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl -z-10 scale-105"></div>

=======
                            {/* Glassmorphism background */}
                            <div className="absolute inset-0 rounded-2xl backdrop-blur-2xl bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-2xl -z-10 scale-105"></div>

                            {/* Imagem com borda verde */}
>>>>>>> c70843a4eb893df9ed9e14f3feb2a396525b4333
                            <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-400/50 shadow-2xl">
                                <img
                                    src={fernandoAI}
                                    alt="Fernando Quintanilha - Engenheiro de Software"
                                    className="w-full h-auto object-cover"
                                />
<<<<<<< HEAD
=======
                                {/* Overlay subtle */}
>>>>>>> c70843a4eb893df9ed9e14f3feb2a396525b4333
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>

<<<<<<< HEAD
=======
                    {/* Direita - Texto e Estatísticas */}
>>>>>>> c70843a4eb893df9ed9e14f3feb2a396525b4333
                    <div className="order-1 lg:order-2">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4">
                            Quem sou eu
                        </h2>

                        <h3 className="text-5xl lg:text-6xl font-extrabold text-white mb-2 leading-tight">
                            Fernando Quintanilha
                        </h3>

                        <p className="text-xl text-emerald-400 font-semibold mb-6">
                            Engenheiro de Software Full Stack & Co-fundador
                        </p>

                        <p className="text-lg text-gray-400 mb-4 leading-relaxed">
                            Não sou apenas um desenvolvedor — sou um engenheiro que entende tanto código quanto lógica de negócio.
                            Estou cursando <strong className="text-white">Engenharia de Software</strong> e coloco isso em prática todos os dias.
                        </p>

                        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                            <strong className="text-white">Co-fundei a Atlas Education</strong>, onde aprendi que bons sistemas não nascem do nada. 
                            Eles vêm de entender o problema, arquitetar a solução certa e executar sem compromissos.
                        </p>

<<<<<<< HEAD
=======
                        {/* Métricas como tags sleek */}
>>>>>>> c70843a4eb893df9ed9e14f3feb2a396525b4333
                        <div className="flex flex-wrap gap-3 mb-10">
                            <div className="px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-400 font-bold text-sm">
                                4+ Projetos Full Stack
                            </div>
                            <div className="px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-400 font-bold text-sm">
                                10k+ Transações
                            </div>
                            <div className="px-4 py-2 rounded-full bg-purple-500/15 border border-purple-400/40 text-purple-400 font-bold text-sm">
                                7 Tecnologias
                            </div>
                            <div className="px-4 py-2 rounded-full bg-pink-500/15 border border-pink-400/40 text-pink-400 font-bold text-sm">
                                100% Foco
                            </div>
                        </div>

<<<<<<< HEAD
=======
                        {/* Skills com ícones */}
>>>>>>> c70843a4eb893df9ed9e14f3feb2a396525b4333
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <Code2 className="text-emerald-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Full Stack & Arquitetura</h4>
                                    <p className="text-gray-400 text-sm">
                                        Domino o stack completo: React/TypeScript no front-end, C#/.NET + Python no back-end, SQL Server e automação com Selenium.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <Lightbulb className="text-emerald-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Robótica & Arduino</h4>
                                    <p className="text-gray-400 text-sm">
                                        Experiência real com lógica digital, microcontroladores e sistemas embarcados diferencia meu pensamento em soluções.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <Zap className="text-emerald-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Visão de Negócio</h4>
                                    <p className="text-gray-400 text-sm">
                                        Não construo por construir. Cada linha de código resolve um problema real e gera impacto medível para o negócio.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 mt-1">
                                    <Award className="text-emerald-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Compromisso com Qualidade</h4>
                                    <p className="text-gray-400 text-sm">
                                        Código limpo, documentação clara, testes automatizados e infraestrutura pronta para produção. Sem atalhos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
