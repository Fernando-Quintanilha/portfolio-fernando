import { Layout, Smartphone, Code2, Rocket, Database, LineChart } from 'lucide-react';

export function Services() {

    // Lista de serviços (Fica mais fácil de editar depois)
    const services = [
        {
            icon: <Layout size={32} />,
            title: "Landing Pages",
            description: "Páginas focadas em venda e conversão. Design moderno que guia o visitante até o botão de compra ou contato."
        },
        {
            icon: <Smartphone size={32} />,
            title: "Sites Responsivos",
            description: "Seu site perfeito em qualquer tela. Garanto que a experiência no celular seja tão boa quanto no computador."
        },
        {
            icon: <Code2 size={32} />,
            title: "Desenvolvimento Web",
            description: "Sites institucionais e blogs usando React. Tecnologia de ponta para quem cansou da lentidão do Wordpress."
        },
        {
            icon: <Database size={32} />,
            title: "Integrações & API",
            description: "Conecto seu site com planilhas, sistemas de pagamento ou CRM. Automatize processos manuais."
        },
        {
            icon: <Rocket size={32} />,
            title: "Performance",
            description: "Otimização de velocidade. O Google ama sites rápidos, e seus clientes também."
        },
        {
            icon: <LineChart size={32} />,
            title: "Dashboards",
            description: "Painéis administrativos para visualizar dados do seu negócio de forma clara e interativa."
        }
    ];

    return (
        <section id="servicos" className="bg-dark-800 py-20">
            <div className="mx-auto max-w-7xl px-6">

                {/* Cabeçalho da Seção */}
                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                        O que eu faço
                    </h2>
                    <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                        Soluções sob medida para o seu negócio
                    </h3>
                </div>

                {/* O GRID MÁGICO (Responsivo) */}
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="group rounded-xl border border-white/5 bg-dark-900 p-8 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                        >
                            {/* Ícone com fundo colorido */}
                            <div className="mb-6 inline-block rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
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