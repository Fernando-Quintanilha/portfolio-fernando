import { Github, ExternalLink } from 'lucide-react';
import fortunedash from "../../assets/dashfortune.png";
import catalogoWeb from "../../assets/catalogoTh.png";
import hsSign from "../../assets/hsSign.png";
import industrialM from "../../assets/dashfortune.png";
export function Projects() {

    const projects = [
        {
            title: "DocSign V1 - HoleriteSign MVP",
            description: "Plataforma full-stack para assinatura digital de contracheques. Eliminou processo manual de impressão e envio de documentos. Arquitetura escalável com C# + Entity Framework no back-end, Redis para cache e Hangfire para processamento async de 10k+ assinaturas/mês.",
            image: hsSign,
            tech: ["C#", "Entity Framework", "TypeScript", "React", "Docker"],
            github: "https://github.com/Fernando-Quintanilha/DocSign-V1",
            demo: "https://github.com/Fernando-Quintanilha/DocSign-V1",
            context: "Problema: Processo manual e lento de assinatura. Solução: Plataforma automatizada com WebHooks e integrações."
        },
        {
            title: "Fortuna.io - Gestor Financeiro",
            description: "Aplicação PWA para gerenciamento de investimentos com sincronização offline. Mode privacidade protege dados sensíveis. Desenvolvida com React + Vite (load time < 2s) e Tailwind para design responsivo. 5 star rating em tests de usabilidade.",
            image: fortunedash,
            tech: ["React", "Vite", "TypeScript", "Tailwind", "PWA"],
            github: "https://github.com/Fernando-Quintanilha/fortuna-io",
            demo: "https://fortuna-io.vercel.app",
            context: "Problema: Usuários querem acompanhar investimentos offline. Solução: PWA com sincronização inteligente."
        },
        {
            title: "Catálogo StakeHolder",
            description: "Sistema de catálogo digital que automatiza conversão de planilhas Excel em vitrine interativa. Pipeline Python (Pandas) processa dados brutos → JSON otimizado. Frontend React renderiza 2000+ produtos com busca <100ms. Checkout via WhatsApp aumentou conversão em 40%.",
            image: catalogoWeb,
            tech: ["React", "Python", "Pandas", "TypeScript", "Tailwind"],
            github: "https://github.com/Fernando-Quintanilha/Catalogo-StakeHolder",
            demo: "https://catalogo-stake-holder.vercel.app",
            context: "Problema: Catálogo estático em PDF não converte. Solução: Web interativa com carrinho + WhatsApp."
        },
        {
            title: "Sistemas de Preços - Scrapper - (EM DESENVOLVIMENTO)",
            description: "Plataforma de monitoramento de preços com web scraping inteligente. 8+ fontes de dados coletadas com Selenium em tempo real. Pipeline Python processa dados, backend em TypeScript armazena em SQL. Dashboard mostra variações de preço com alertas automáticos.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tech: ["TypeScript", "Python", "Selenium", "React", "SQL"],
            github: "https://github.com/Fernando-Quintanilha/sistemas-precos",
            demo: "https://github.com/Fernando-Quintanilha/sistemas-precos",
            context: "Problema: Monitorar 8+ concorrentes manualmente. Solução: Automação com alertas e análise de tendências."
        },
        {
            title: "Industrial Design Monitor",
            description: "Plataforma desenvolvida para pegar os dados do banco de dados SUPABASE",
            image: industrialM,
            tech: ["TypeScript", "SUPABASE", "React", "SQL", "Tailwind", "Vite", "Docker"],
            github: "https://github.com/Fernando-Quintanilha/sistemas-precos",
            demo: "https://github.com/Fernando-Quintanilha/sistemas-precos",
            context: "Problema: Tratamento dos dados vindo de sensores de uma industria. Solução: SUPABASE como banco para armazenar os dados e ligação com dashboard profissiona."

        }
    ];

    return (
        <section id="projetos" className="py-20 bg-dark-900">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                        Portfólio
                    </h2>
                    <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        Projetos em destaque
                    </h3>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-dark-800 transition-all hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10">

                            <div className="relative h-48 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-emerald-400/10 opacity-0 transition-opacity group-hover:opacity-100 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <h4 className="mb-2 text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    {project.title}
                                </h4>

                                {project.context && (
                                    <p className="mb-3 text-xs text-emerald-400/80 font-semibold">
                                        {project.context}
                                    </p>
                                )}

                                <p className="mb-6 text-sm text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6 flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="rounded-full bg-dark-900 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-400/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-white/5">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github size={16} />
                                        Código
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors ml-auto"
                                    >
                                        Ver Projeto
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}