import { Github, ExternalLink } from 'lucide-react';

export function Projects() {

    const projects = [
        {
            title: "Team Robotics Portal",
            description: "Portal desenvolvido para uma equipe de robótica FTC, com galeria de fotos, sistema de blog para os diários de engenharia e área de patrocinadores.",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800", // Foto de Robô
            tech: ["React", "TypeScript", "Vite", "Framer Motion"],
            github: "https://github.com",
            demo: "https://vercel.com"
        },
        {
            title: "Dashboard Financeiro",
            description: "Painel administrativo para visualização de dados financeiros. Gráficos interativos, modo escuro e exportação de relatórios em PDF.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", // Foto de Gráficos
            tech: ["React", "Tailwind", "Chart.js", "API"],
            github: "https://github.com",
            demo: "https://vercel.com"
        },
        {
            title: "Landing Page SaaS",
            description: "Página de alta conversão para uma startup de tecnologia. Focada em performance (Score 98 no PageSpeed) e SEO técnico.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", // Foto de Site
            tech: ["React", "Tailwind", "SEO", "Analytics"],
            github: "https://github.com",
            demo: "https://vercel.com"
        }
    ];

    return (
        <section id="projetos" className="py-20 bg-dark-900">
            <div className="mx-auto max-w-7xl px-6">

                {/* Cabeçalho */}
                <div className="mb-16">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                        Portfólio
                    </h2>
                    <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        Projetos em destaque
                    </h3>
                </div>

                {/* Grid de Projetos */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-dark-800 transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">

                            {/* Imagem com efeito de Zoom no Hover */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Conteúdo do Card */}
                            <div className="flex flex-1 flex-col p-6">
                                <h4 className="mb-2 text-xl font-bold text-white group-hover:text-primary transition-colors">
                                    {project.title}
                                </h4>

                                <p className="mb-6 text-sm text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags de Tecnologia */}
                                <div className="mb-6 flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="rounded-full bg-dark-900 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Botões de Link */}
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
                                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-emerald-400 transition-colors ml-auto"
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