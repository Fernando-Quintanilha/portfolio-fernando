import { Star } from 'lucide-react';

export function Testimonials() {
    const testimonials = [
        {
            name: "João Silva",
            role: "CEO, TH Chaves Distribuidora",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=João",
            content: "Fernando transformou nosso catálogo PDF estático em uma plataforma digital que triplicou as vendas. A integração com WhatsApp foi genial.",
            rating: 5
        },
        {
            name: "Maria Santos",
            role: "Diretora, Atlas Education",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
            content: "Trabalhei com Fernando na co-fundação da Atlas. Seu pensamento de engenheiro combinado com visão de negócio é raro. Entrega sempre acima da expectativa.",
            rating: 5
        },
        {
            name: "Carlos Oliveira",
            role: "CTO, Startup Fintech",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
            content: "Arquitetura robusta, código limpo e documentação impecável. Fernando é um engenheiro de software de verdade, não apenas um dev.",
            rating: 5
        }
    ];

    return (
        <section id="depoimentos" className="bg-dark-800 py-20">
            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4">
                        Depoimentos
                    </h2>
                    <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                        O que clientes e parceiros dizem
                    </h3>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-white/5 bg-dark-900 p-8 transition-all hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/5"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            {/* Conteúdo */}
                            <p className="text-gray-400 leading-relaxed mb-6 italic">
                                "{testimonial.content}"
                            </p>

                            {/* Autor */}
                            <div className="flex items-center gap-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <p className="font-bold text-white">{testimonial.name}</p>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
