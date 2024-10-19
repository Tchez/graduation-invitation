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
      setButtonPos({
        x: window.innerWidth / 2 + 35,
        y: window.innerHeight / 2 + 227,
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
            const newX = prev.x + (distX > 0 ? -20 : 20);
            const newY = prev.y + (distY > 0 ? -20 : 20);

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
      "https://wa.me/5563984999999?text=Confirmo%20minha%20presen%C3%A7a%20na%20sua%20formatura!",
      "_blank"
    );
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-96 bg-white rounded-2xl shadow-lg p-6 text-center z-10">
        <div className="absolute top-4 left-4 text-blue-600">
          <i className="fas fa-balance-scale fa-2x"></i>
        </div>

        <div className="relative">
          <i className="fas fa-graduation-cap text-4xl text-gray-600 absolute -top-8 left-1/2 transform -translate-x-1/2"></i>
          <div className="mt-6">
            <Image
              src="https://github.com/tchez.png"
              alt="Foto do Formando (Marco Antônio)"
              width={120}
              height={120}
              className="rounded-full border-4 border-blue-600 mx-auto"
            />
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-700 tracking-wider">
            FORMATURA DE
          </h2>
          <h1 className="text-3xl font-bold text-blue-600 mt-2">
            MARCO ANTÔNIO
          </h1>
          <p className="text-sm text-gray-600 mt-4 leading-relaxed">
            Tenho a alegria de convidá-lo(a) para minha formatura. A sua amizade e
            apoio foram fundamentais durante essa jornada e seria maravilhoso
            ter você comigo para comemorar.
          </p>
        </div>

        <div className="flex justify-around items-center mt-6 text-blue-600">
          <div className="text-center">
            <i className="fas fa-calendar-alt text-xl"></i>
            <p className="text-lg mt-2">SAB</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">8 FEV</p>
          </div>
          <div className="text-center">
            <i className="fas fa-clock text-xl"></i>
            <p className="text-lg mt-2">20H</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4">Chácara a definir</p>

        <div className="mt-6 text-blue-600">
          <i className="fas fa-scroll fa-3x"></i>
        </div>

        <div className="mt-8">
          <p className="text-lg font-semibold text-gray-700 mb-4">
            Confirmar presença?
          </p>
          <button
            onClick={handleConfirmClick}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 mb-4"
          >
            Irei!
          </button>
        </div>
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg fixed transition duration-200 z-50"
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
