'use client';

import Image from 'next/image';
import React from 'react';

const Motivos: React.FC = () => {
  return (
    <section
      className="relative py-20 px-6 sm:px-10 lg:px-24 overflow-hidden"
      style={{ backgroundColor: '#0e1015' }}
    >
      {/* Linha curva pontilhada de fundo */}
      <div className="absolute -bottom-32 left-0 w-full z-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          className="w-full h-96 lg:h-[500px]"
        >
          <path
            d="M-100,-80 C-50,400 150,80 500,300 C700,500 900,100 1540,200"
            fill="none"
            stroke="#efb254"
            strokeWidth={3}
            strokeDasharray="20, 10"
            opacity={0.8}
          />
        </svg>
      </div>

      {/* Estilo da animação flutuante */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Texto (lado esquerdo) */}
        <div className="w-full lg:w-1/2">
          <p className="text-sm text-white/60 mb-2">Oferta especial</p>

          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug mb-6">
            POR QUE TER UM <span className="text-[#efb254]">SITE?</span>
          </h2>

          <p className="text-gray-400 mb-8 max-w-md">
            Ter um site bem feito vai além de estar online. Ele é essencial
            para o sucesso da sua estratégia digital. Aqui estão os principais
            benefícios:
          </p>

          <ul className="space-y-5 text-white text-base">
            <li>
              ✅ <strong>Visibilidade 24/7</strong>
              <br />
              <span className="text-gray-400">
                Seu negócio disponível o tempo todo, acessível de qualquer lugar.
              </span>
            </li>
            <li>
              ✅ <strong>Credibilidade e Confiança</strong>
              <br />
              <span className="text-gray-400">
                Sites profissionais geram mais confiança e destacam sua marca.
              </span>
            </li>
            <li>
              ✅ <strong>Alcance Global</strong>
              <br />
              <span className="text-gray-400">
                Expanda sua audiência além das fronteiras físicas.
              </span>
            </li>
            <li>
              ✅ <strong>Facilidade de Comunicação</strong>
              <br />
              <span className="text-gray-400">
                Ofereça canais de contato direto com seus clientes.
              </span>
            </li>
            <li>
              ✅ <strong>Oportunidade de Vendas</strong>
              <br />
              <span className="text-gray-400">
                Converta visitantes em clientes com um site otimizado.
              </span>
            </li>
          </ul>
        </div>

        {/* Imagem (lado direito) */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-sm lg:max-w-md">
            <Image
              src="/mockup.svg"
              alt="Mockup de site"
              width={500}
              height={500}
              className="w-full h-auto floating drop-shadow-xl rounded-2xl"
              priority
            />
            {/* Efeito de brilho opcional */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl -z-10 blur-xl opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Motivos;
