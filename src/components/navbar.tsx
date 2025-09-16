'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Trocar cor do navbar ao rolar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha menu quando rota muda
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#efb254] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-20 md:h-24 font-orbitron">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/1.svg"
              alt="Olympo Digital"
              width={80}
              height={80}
              className="h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-10">
            <ul className="flex items-center gap-10 text-white font-semibold tracking-wider">
              {[
                { label: 'Marketing Digital', href: '#marketing' },
                { label: 'Desenvolvimento Web', href: '#desenvolvimento' },
                { label: 'SEO & Analytics', href: '#seo' },
                { label: 'Consultoria Estratégica', href: '#consultoria' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-yellow-300 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Desktop */}
            <a
              href="https://wa.me/5538998648842"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg text-white font-bold bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 flex items-center gap-2 border-2 border-white/30 hover:border-white/50 tracking-wider whitespace-nowrap"
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 0 20px 6px rgba(37, 211, 102, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = 'scale(0.97)';
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Zap size={18} />
              Fale Conosco
            </a>
          </div>

          {/* Botão Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-300 focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden bg-[#efb254] transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-4">
          <ul className="space-y-4">
            {[
              { label: 'Marketing Digital', href: '#marketing' },
              { label: 'Desenvolvimento Web', href: '#desenvolvimento' },
              { label: 'SEO & Analytics', href: '#seo' },
              { label: 'Consultoria Estratégica', href: '#consultoria' },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-white hover:text-yellow-300 px-3 py-2 rounded-md text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Mobile */}
          <a
            href="https://wa.me/5538998648842"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-3 rounded-lg text-white font-bold bg-[#25D366] hover:bg-[#128C7E] transition-all duration-300 border-2 border-white/30 hover:border-white/50 mt-4"
          >
            <Zap size={18} className="inline mr-2" />
            Fale Conosco
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
