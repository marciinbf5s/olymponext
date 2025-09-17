"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import WhatsappButton from '@/components/whatsappbutton';

// Import components with SSR disabled to avoid hydration issues
const Hero = dynamic(() => import('@/components/hero'), { ssr: false });
const Motivos = dynamic(() => import('@/components/motivos'), { ssr: false });
const Sobre = dynamic(() => import('@/components/sobre'), { ssr: false });
const Serviços = dynamic(() => import('@/components/serviços'), { ssr: false });
const FAQ = dynamic(() => import('@/components/faq'), { ssr: false });
const Footer = dynamic(() => import('@/components/footer'), { ssr: false });
const LocomotiveScrollWrapper = dynamic(
  () => import('@/components/locomotivescroll'), 
  { ssr: false }
);

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state to true when component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render anything until mounted to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <main>
      <Navbar />
      <LocomotiveScrollWrapper>
        <div className="relative">
          <Hero />
          <Motivos />
          <Sobre />
          <Serviços />
          <FAQ />
          <Footer />
        </div>
      </LocomotiveScrollWrapper>
      <WhatsappButton />
    </main>
  );
}
