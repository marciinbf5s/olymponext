import React from "react";

const Sobre: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-10 lg:px-24" style={{ backgroundColor: '#0e1015' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Imagem do fundador ou da empresa */}
        <div className="relative w-full h-full">
          <img
            src="/1.svg"
            alt="Equipe Olympo Digital"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Texto descritivo */}
        <div>
          <p className="text-sm text-white/60 mb-2">Sobre nós</p>
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-snug mb-6">
            O QUE É O <span style={{ color: '#efb254' }}>OLYMPO DIGITAL</span>?
          </h2>

          <p className="text-gray-300 text-base leading-relaxed mb-6">
            A <strong>Olympo Digital</strong> é uma agência digital que nasceu com a missão de
            transformar ideias em soluções digitais de alto impacto. Com uma equipe jovem e
            apaixonada por tecnologia, criamos experiências únicas através de sites modernos,
            responsivos e totalmente personalizados.
          </p>

          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Desde sua fundação, a Olympo Digital tem se destacado por oferecer estratégias eficazes
            e resultados reais, atendendo empresas de diversos segmentos com excelência e inovação.
            Acreditamos que cada projeto é uma oportunidade de elevar marcas a um novo nível.
          </p>

          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Hoje, somos referência na criação de sites, landing pages e soluções web, mostrando que
            com trabalho duro e criatividade, é possível alcançar o topo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
