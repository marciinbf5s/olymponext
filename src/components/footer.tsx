'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="relative py-20 px-6 sm:px-10 lg:px-24 overflow-hidden"
      style={{ backgroundColor: '#0e1015' }}
    >
      {/* Background decorativo */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{ backgroundImage: "url('/grid.svg')" }}
      />

      {/* Texto principal */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase">
          <span className="text-white">Onde sua marca</span>{' '}
          <span className="text-[#efb254]">alcança o Olympo</span>{' '}
          <span className="text-white">da Internet</span>
        </h2>
        <p className="mt-4 text-gray-400 text-sm sm:text-base">
          Transformamos sua presença digital em resultados extraordinários.
          Deixe-nos guiar sua marca até o topo.
        </p>

        {/* Botão CTA */}
        <div className="mt-10">
          <a
            href="#orcamento"
            className="inline-block px-8 py-4 font-bold rounded-lg cursor-pointer relative overflow-hidden bg-[#efb254] text-white border-2 border-[#efb254] transition-all duration-300 shadow-none hover:bg-[#d49a30] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.7)] active:scale-95 active:shadow-[0_0_30px_10px_rgba(255,255,255,0.7)]"
          >
            <span className="relative z-10">FAZER ORÇAMENTO GRATUITO</span>
          </a>
        </div>
      </div>

      {/* Linha e direitos autorais */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        Olympo Digital &copy; {new Date().getFullYear()} Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
