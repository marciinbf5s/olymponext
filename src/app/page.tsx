"use client";

import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar';
import WhatsappButton from '@/components/whatsappbutton';

const Hero = dynamic(() => import('@/components/hero'), { ssr: true });
const Motivos = dynamic(() => import('@/components/motivos'), { ssr: true });
const Sobre = dynamic(() => import('@/components/sobre'), { ssr: true });
const Serviços = dynamic(() => import('@/components/serviços'), { ssr: true });
const FAQ = dynamic(() => import('@/components/faq'), { ssr: true });
const Footer = dynamic(() => import('@/components/footer'), { ssr: true });
const LocomotiveScrollWrapper = dynamic(() => import('@/components/locomotivescroll'), { ssr: false });

export default function Home() {
  return (
    <>
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
      <Navbar />
      <WhatsappButton />
    </>
  );
}
