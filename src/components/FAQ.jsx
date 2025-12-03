import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    { q: "Como funciona o agendamento?", a: "O agendamento é feito diretamente pelo WhatsApp. Verificamos a disponibilidade da data e reservamos mediante contrato." },
    { q: "Vocês atendem ensaios individuais?", a: "Sim! Temos pacotes exclusivos para ensaios individuais externos ou em estúdio." },
    { q: "Quanto tempo leva para entregar as fotos?", a: "Nosso prazo médio é de 15 a 20 dias úteis após a seleção das fotos." },
    { q: "Vocês fazem cobertura da colação e baile?", a: "Com certeza! Cobrimos todos os eventos relacionados à sua formatura." },
    { q: "Como funciona o pagamento?", a: "Aceitamos PIX, cartão de crédito em até 12x e boleto bancário." },
    { q: "Posso contratar só o ensaio individual?", a: "Sim, você pode montar o pacote de acordo com a sua necessidade." },
    { q: "Fazem eventos fora da cidade?", a: "Sim, atendemos em toda a região e também em outros estados (consulte taxas de deslocamento)." }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" className="section bg-[var(--color-bg)]">
            <div className="container max-w-3xl">
                <h2 className="text-3xl md:text-5xl text-center mb-12">Perguntas <span className="highlight">Frequentes</span></h2>

                <div className="space-y-4">
                    {faqs.map((item, index) => (
                        <div key={index} className="border border-[var(--color-border)] rounded-lg overflow-hidden bg-[var(--color-surface)]">
                            <button
                                className="w-full flex justify-between items-center p-6 text-left hover:bg-[var(--color-border)] transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="font-bold text-lg">{item.q}</span>
                                {openIndex === index ? <ChevronUp className="text-[var(--color-primary)]" /> : <ChevronDown className="text-[var(--color-text-muted)]" />}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 p-6 pt-0' : 'max-h-0'}`}
                            >
                                <p className="text-[var(--color-text-muted)]">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
