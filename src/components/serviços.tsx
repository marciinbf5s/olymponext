import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { PlayButton } from "./button";

// Tipos para os blocos de serviço
interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceBlock {
  title: string;
  subtitle: React.ReactNode;
  description: string;
  items: ServiceItem[];
}

const serviceBlocks: ServiceBlock[] = [
  {
    title: "Soluções Web",
    subtitle: (
      <>
        Conquiste o topo do <span style={{ color: '#efb254' }}>mundo digital.</span>
      </>
    ),
    description:
      "Entre em contato agora e descubra como podemos ajudar seu negócio a crescer online. Solicite uma proposta gratuita!",
    items: [
      {
        title: "Sites Institucionais",
        description:
          "Sites profissionais e personalizados para empresas que desejam ter uma presença online sólida e confiável.",
      },
      {
        title: "Landing Pages Otimizadas",
        description:
          "Páginas de alta conversão para campanhas e capturas de leads, projetadas para impulsionar resultados.",
      },
      {
        title: "Lojas Virtuais (E-commerce)",
        description:
          "Plataformas completas para venda online, com funcionalidades modernas e uma experiência de compra incrível.",
      },
      {
        title: "Sistemas Personalizados",
        description:
          "Soluções sob medida para atender às necessidades específicas do seu negócio, com eficiência e inovação.",
      },
      {
        title: "Aplicativos",
        description:
          "Desenvolvimento de aplicativos modernos e funcionais para Android e iOS, projetados para engajar seus usuários.",
      },
      {
        title: "Tráfego Pago",
        description:
          "Estratégias de anúncios online para atrair clientes e aumentar a visibilidade da sua marca rapidamente.",
      },
      {
        title: "Blog Corporativo",
        description:
          "Criação de blogs profissionais para compartilhar conteúdo relevante e engajar sua audiência.",
      },
      {
        title: "SEO e CRO",
        description:
          "Otimização para mecanismos de busca e conversão para levar seu site ao topo e maximizar resultados.",
      },
    ],
  },
];

const Serviços: React.FC = () => {
  return (
    <section
      className="py-20 px-6 sm:px-10 lg:px-24 relative overflow-hidden"
      style={{ backgroundColor: '#0e1015' }}
    >
      {/* Sombra dourada alinhada à esquerda */}
      <div
        className="absolute top-1/2 left-0 -z-10 pointer-events-none"
        style={{
          width: '600px',
          height: '800px',
          background: 'radial-gradient(ellipse at left, rgba(239,178,84,0.25) 0%, transparent 80%)',
          filter: 'blur(90px)',
          transform: 'translateY(-50%)',
        }}
      />

      {/* Estrela decorativa fixa à direita */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none" style={{ overflow: 'hidden' }}>
        <div className="relative h-full w-full flex items-center justify-center">
          <img
            src="/2.svg"
            alt="Decoração"
            className="h-full w-auto max-w-none"
            style={{
              minHeight: '1000px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>
      </div>

      {/* Conteúdo */}
      {serviceBlocks.map((block, blockIndex) => (
        <div key={blockIndex} className="max-w-7xl mx-auto mb-24">
          {/* Subtítulo e descrição */}
          {block.subtitle && (
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
                {block.subtitle}
              </h2>
              {block.description && (
                <p className="mt-4 text-gray-400 text-sm sm:text-base">
                  {block.description}
                </p>
              )}
            </div>
          )}

          {/* Lista de serviços */}
          <div className="space-y-12">
            {block.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start group transition-all duration-300 hover:opacity-100 hover:translate-x-1"
              >
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-wide text-gray-100">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base text-gray-400 max-w-3xl">
                    {item.description}
                  </p>
                </div>
                <div className="ml-4 shrink-0 pt-2">
                  <ArrowUpRightIcon
                    className="h-6 w-6 group-hover:scale-110 transition"
                    style={{ color: '#efb254' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Botão de CTA */}
      <div className="flex justify-center mt-12">
        <PlayButton />
      </div>
    </section>
  );
};

export default Serviços;
