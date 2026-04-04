import { Layout, Code2, Rocket, Database, GitBranch, Zap } from 'lucide-react';

export function Services() {

    const services = [
        {
            icon: <Code2 size={32} />,
            title: "Desenvolvimento Web Full Stack",
            description: "Plataformas completas do back-end ao front-end. Node.js, C#, React e bancos de dados escaláveis para sistemas internos e SaaS."
        },
        {
            icon: <Database size={32} />,
            title: "Arquitetura Back-end & Banco de Dados",
            description: "Design de arquiteturas robustas com Entity Framework, SQL Server, migrations, índices e otimização de queries. APIs RESTful e padrões SOLID."
        },
        {
            icon: <Zap size={32} />,
            title: "Automação e Web Scraping",
            description: "Scripts Python com Selenium e BeautifulSoup para coleta de dados, integrações e automação de processos repetitivos. Pipelines de ETL eficientes."
        },
        {
            icon: <Layout size={32} />,
            title: "Landing Pages de Conversão",
            description: "Páginas otimizadas para vendas com design moderno, copywriting persuasivo e rastreamento de conversões."
        },
        {
            icon: <Rocket size={32} />,
            title: "Performance & Otimização",
            description: "Auditorias completas de velocidade, otimização de assets, caching, CDN e Core Web Vitals. Google adora e seus clientes também."
        },
        {
            icon: <GitBranch size={32} />,
            title: "DevOps & Deployment",
            description: "Containerização com Docker, CI/CD pipelines, deploy automatizado e monitoramento. Infraestrutura pronta para produção."
        }
    ];

    return (
        <section id="servicos" className="bg-dark-800 py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400">
                        Especialidades
                    </h2>
                    <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        Soluções técnicas completas para seu negócio
                    </h3>
                    <p className="mt-4 mx-auto max-w-2xl text-gray-400">
                        Não apenas código — construo arquiteturas escaláveis, sistemas que crescem com seu negócio e processos que se automatizam.
                    </p>
                </div>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-xl border border-white/5 bg-dark-900 p-8 transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10"
                        >
                            <div className="mb-6 inline-block rounded-lg bg-emerald-500/10 p-3 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                                {item.icon}
                            </div>

                            <h4 className="mb-3 text-xl font-bold text-white">
                                {item.title}
                            </h4>

                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}