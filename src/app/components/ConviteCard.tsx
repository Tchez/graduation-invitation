'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ButtonPosition {
  x: number;
  y: number;
}

const ConviteCard = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [buttonPos, setButtonPos] = useState<ButtonPosition>({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.innerWidth <= 768;

      setButtonPos({
        x: isMobile ? window.innerWidth / 2 + 35 : window.innerWidth / 2 + 45,
        y: isMobile ? window.innerHeight / 2 + 227 : window.innerHeight / 2 + 217,
      });

      const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setButtonPos(prev => {
          const buttonCenterX = prev.x + 60;
          const buttonCenterY = prev.y + 20;

          const distX = mouseX - buttonCenterX;
          const distY = mouseY - buttonCenterY;
          const distance = Math.sqrt(distX ** 2 + distY ** 2);

          if (distance < 80) {
            const newX = prev.x + (distX > 0 ? -100 : 100);
            const newY = prev.y + (distY > 0 ? -100 : 100);

            return {
              x: Math.max(0, Math.min(newX, window.innerWidth - 120)),
              y: Math.max(0, Math.min(newY, window.innerHeight - 40)),
            };
          }

          return prev;
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  const handleConfirmClick = () => {
    window.open(
      "https://wa.me/5563984999013?text=Confirmo%20minha%20presen%C3%A7a%20na%20sua%20formatura!",
      "_blank"
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8 text-center z-10 mx-2 sm:mx-4 backdrop-blur-lg backdrop-brightness-95 border border-blue-200">
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 text-blue-600">
          <i className="fas fa-balance-scale fa-2x sm:fa-3x"></i>
        </div>

        <div className="relative">
          <i className="fas fa-graduation-cap text-4xl sm:text-5xl text-blue-400 absolute -top-8 sm:-top-10 left-1/2 transform -translate-x-1/2"></i>
          <div className="mt-4 sm:mt-6">
            <Image
              src="https://github.com/tchez.png"
              alt="Foto do Formando (Marco Antônio)"
              width={90}
              height={90}
              className="sm:rounded-full sm:border-4 sm:border-blue-600 mx-auto shadow-lg"
            />
          </div>
        </div>

        <div className="mt-4 sm:mt-6">
          <h2 className="text-sm sm:text-lg font-semibold text-gray-600 tracking-wider">
            FORMATURA DE
          </h2>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-blue-700 mt-1 sm:mt-2">
            MARCO ANTÔNIO
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4 leading-relaxed">
            Tenho a alegria de convidá-lo(a) para minha formatura. A sua amizade e
            apoio foram fundamentais durante essa jornada. Venha comemorar comigo!
          </p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap justify-around items-center mt-4 sm:mt-6 text-blue-600 gap-2">
          <div className="text-center">
            <i className="fas fa-calendar-alt text-xl"></i>
            <p className="text-sm sm:text-lg font-bold mt-1 sm:mt-2">SAB</p>
          </div>
          <div className="text-center">
            <p className="text-sm sm:text-lg font-extrabold text-blue-700">8 FEV</p>
          </div>
          <div className="text-center">
            <i className="fas fa-clock text-xl"></i>
            <p className="text-sm sm:text-lg font-bold mt-1 sm:mt-2">20H</p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-4">Chácara Brisa do Lago</p>
        <a
          href="https://google.com/maps?q=-10.2600225,-48.5031338"
          target="_blank"
          className="text-blue-600 underline mt-1 sm:mt-2 block text-xs sm:text-sm"
        >
          <i className="fas fa-map-marker-alt mr-2"></i> Como chegar?
        </a>

        <div className="mt-6 sm:mt-8">
          <p className="text-sm sm:text-lg font-semibold text-gray-700 mb-2 sm:mb-4">
            Confirmar presença:
          </p>
          <button
            onClick={handleConfirmClick}
            className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-200 mb-2 sm:mb-4 text-sm sm:text-base"
          >
            Irei!
          </button>
        </div>
      </div>

      <button
        className="bg-blue-600 text-white px-3 py-2 rounded-lg fixed transition duration-200 z-50"
        style={{
          top: `${buttonPos.y}px`,
          left: `${buttonPos.x}px`,
        }}
      >
        Não consigo :/
      </button>

      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{ visibility: "hidden" }}
      ></canvas>
    </div>
  );
};

export default ConviteCard;
