import { useEffect, useState, useRef } from 'react';

// Define um tipo parcial para a instância do Locomotive Scroll (parcial, pois não temos acesso completo ao tipo)
interface LocomotiveScrollInstance {
  on?: (event: string, callback: () => void) => void;
  off?: (event: string, callback: () => void) => void;
  scroll?: {
    y: number;
    limit: {
      y: number;
    };
  };
}

const ScrollProgress: React.FC = () => {
  const [width, setWidth] = useState<number>(0);
  const locoScrollRef = useRef<LocomotiveScrollInstance | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Tenta acessar o elemento com Locomotive
      const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement & {
        _locomotive?: LocomotiveScrollInstance;
      };

      const locoScroll = scrollContainer?._locomotive;

      if (locoScroll) {
        locoScrollRef.current = locoScroll;

        const updateProgress = () => {
          const scrollY = locoScroll.scroll?.y ?? 0;
          const maxY = locoScroll.scroll?.limit?.y ?? 1;
          const progress = (scrollY / maxY) * 100;
          setWidth(progress);
        };

        locoScroll.on?.('scroll', updateProgress);

        return () => {
          locoScroll.off?.('scroll', updateProgress);
        };
      } else {
        // Fallback para scroll nativo
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const scrollHeight =
            document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (scrollPosition / scrollHeight) * 100;
          setWidth(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="h-1 fixed top-0 left-0 z-[9999] transition-all duration-300 ease-out pointer-events-none"
      style={{
        width: `${width}%`,
        background: 'linear-gradient(90deg, #efb254, #d49a30)',
        boxShadow: '0 0 10px rgba(239, 178, 84, 0.5)',
      }}
    />
  );
};

export default ScrollProgress;
