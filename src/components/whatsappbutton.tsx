import React from 'react';
import { FaWhatsapp } from "react-icons/fa";

function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5538998648842"
      target="_blank"
      rel="noopener noreferrer"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container" // ajuste esse ID conforme seu container de scroll
      className="fixed bottom-6 right-6 z-50 
                 bg-green-500 hover:bg-green-600 text-white 
                 p-6 rounded-full shadow-xl 
                 transition-all duration-300 
                 flex items-center justify-center"
      style={{
        width: '72px',
        height: '72px',
        animation: 'float 3s ease-in-out infinite',
      }}
    >
      <FaWhatsapp size={38} />

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </a>
  );
}

export default WhatsappButton;
