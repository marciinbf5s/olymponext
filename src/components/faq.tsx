'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  pergunta: string;
  resposta: string;
}

interface ItemFAQProps {
  pergunta: string;
  resposta: string;
  estaAberto: boolean;
  aoClicar: () => void;
}

// Componente para cada item do FAQ
const ItemFAQ: React.FC<ItemFAQProps> = ({ pergunta, resposta, estaAberto, aoClicar }) => {
  return (
    <div className="border-b border-gray-800 pb-4">
      <button
        className="flex justify-between items-center w-full text-left py-4 focus:outline-none group"
        onClick={aoClicar}
      >
        <span className="text-lg font-medium text-white group-hover:text-yellow-500 transition-colors">
          {pergunta}
        </span>
        {estaAberto ? (
          <ChevronUpIcon className="h-5 w-5 text-yellow-500" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 text-gray-500 group-hover:text-yellow-500 transition-colors" />
        )}
      </button>
      {estaAberto && (
        <div className="pb-4 text-gray-400 animate-fadeIn">
          <p>{resposta}</p>
        </div>
      )}
    </div>
  );
};

// Componente principal do FAQ
const FAQ: React.FC = () => {
  const [indiceAberto, setIndiceAberto] = useState<number | null>(null);

  const alternarFAQ = (indice: number) => {
    setIndiceAberto(indiceAberto === indice ? null : indice);
  };

  const perguntasFrequentes: FAQItem[] = [
    {
      pergunta: "Quanto tempo leva para desenvolver um site?",
      resposta:
        "O prazo varia conforme a complexidade do projeto, mas sites institucionais geralmente ficam prontos em 4-6 semanas. Desenvolvemos um cronograma personalizado para cada projeto.",
    },
    {
      pergunta: "Vocês oferecem suporte após o lançamento?",
      resposta:
        "Sim, oferecemos pacotes de manutenção mensal que incluem atualizações, backups e suporte técnico para garantir que seu site continue funcionando perfeitamente.",
    },
    {
      pergunta: "Posso atualizar o conteúdo do site sozinho?",
      resposta:
        "Claro! Desenvolvemos todos os sites em plataformas de fácil gerenciamento e oferecemos treinamento para que você possa fazer atualizações sempre que precisar.",
    },
    {
      pergunta: "Quais são as formas de pagamento aceitas?",
      resposta:
        "Aceitamos diversas formas de pagamento, incluindo cartões de crédito, PIX, boleto bancário e transferência bancária. Oferecemos condições especiais para pagamento à vista.",
    },
    {
      pergunta: "Meu site ficará otimizado para celulares?",
      resposta:
        "Sim, todos os nossos sites são desenvolvidos com design responsivo, garantindo uma ótima experiência em qualquer dispositivo, seja desktop, tablet ou smartphone.",
    },
  ];

  return (
    <section
      className="py-20 px-6 sm:px-10 lg:px-24 relative overflow-hidden"
      style={{ backgroundColor: '#0e1015' }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-center mb-12">
          Dúvidas <span className="text-yellow-500">Frequentes</span>
        </h2>
        <div className="space-y-4">
          {perguntasFrequentes.map((faq, index) => (
            <ItemFAQ
              key={index}
              pergunta={faq.pergunta}
              resposta={faq.resposta}
              estaAberto={indiceAberto === index}
              aoClicar={() => alternarFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
