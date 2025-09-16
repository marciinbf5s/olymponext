"use client";

import Image from 'next/image';
import { PlayButton } from "./button";

function Hero() {
  return (
    <div className="relative min-h-screen font-sans overflow-hidden" style={{ backgroundColor: '#0e1015' }}>

      {/* Imagem de fundo para mobile */}
      <div className="sm:hidden w-full absolute top-0 left-0 h-[70vh] z-10">
        <Image
          src="/fundomobile.svg"
          alt="Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-[#0e1015] opacity-40" />
      </div>

      {/* Container principal */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col sm:block">

        {/* Espaço no topo para o conteúdo (apenas mobile) */}
        <div className="sm:hidden pt-[80vh]" />  {/* Alterado aqui */}

        {/* Background para desktop */}
        <div className="hidden sm:block absolute inset-0 w-full h-full z-0">
          <Image
            src="/fundo.svg"
            alt="Background"
            fill
            priority
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Fundo fixo para mobile (garante fundo sólido) */}
        <div className="sm:hidden absolute inset-0 w-full h-full -z-10 bg-[#0e1015]" />

        {/* Conteúdo */}
        <div className="w-full max-w-7xl mx-auto py-8 sm:py-20 lg:py-24 xl:py-28">
          <div className="relative w-full z-10">

            {/* Decoração superior */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#efb254] to-[#d49a30] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>

            {/* Espaço no topo para o conteúdo (apenas mobile) */}
            <div className="sm:hidden pt-[80vh]" />

            {/* Bloco principal */}
            <div className="min-h-[30vh] sm:min-h-[calc(100vh-14rem)] flex items-start sm:items-center justify-center sm:justify-start pb-8 sm:pb-12 lg:pb-16 mt-96 sm:mt-0">
              <div className="text-left max-w-2xl w-full relative isolate">

                {/* Banner topo - apenas desktop */}
                <div className="hidden sm:flex sm:justify-start mb-8">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-100 ring-1 ring-yellow-300 hover:ring-yellow-500
                            max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
                    O primeiro passo para o Olympo Digital está a um clique de distância <a href="https://wa.me/5538998648842" className="font-bold text-yellow-300 relative whitespace-nowrap">
                      Ver mais<span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Texto com grid */}
                <div
                  className="w-full "
                  style={{
                    backgroundImage: "url('/grid.svg')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    fontFamily: '"Orbitron", sans-serif'
                  }}
                >
                  <h1
                    className="hero-title text-4xl md:text-6xl font-bold text-white mb-6"
                    style={{
                      lineHeight: "1.5",
                      fontFamily: '"Orbitron", sans-serif',
                      fontWeight: 700
                    }}
                  >
                    <span className="block">
                      Transforme <span style={{ color: '#efb254' }}>cliques</span> e
                    </span>
                    <span className="block">acessos em</span>
                    <span className="relative inline-block pb-4">
                      clientes
                      <svg
                        className="absolute -bottom-1 left-0 w-full h-6"
                        viewBox="0 0 200 30"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,20 Q100,0 200,20"
                          fill="none"
                          stroke="#efb254"
                          strokeWidth="12"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
                    Somos a ponte entre a sua ideia e o sucesso online
                    <br className="hidden sm:block" />
                    Design, tecnologia e estratégia para marcas que querem ir além.
                  </p>

                  <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6 justify-start">
                    <PlayButton />
                  </div>
                </div>
              </div>
            </div>

            {/* Decoração inferior */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#efb254] to-[#d49a30] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a] to-transparent -z-10 pointer-events-none" />
    </div>
  );
}

export default Hero;
