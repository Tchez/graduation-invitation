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

      const card = document.querySelector(".my-card");
      const cardRect = card?.getBoundingClientRect();

      if (cardRect) {
        const button = document.querySelector("button.fixed");
        const buttonWidth = button ? button.getBoundingClientRect().width : 2;

        setButtonPos({
          x: cardRect.left + cardRect.width / 2 - buttonWidth / 2,
          y: cardRect.bottom - 25,
        });
      } else {
        setButtonPos({
          x: isMobile ? window.innerWidth / 2 : window.innerWidth / 2 - 80,
          y: isMobile ? window.innerHeight / 2 + 227 : window.innerHeight / 2 + 227,
        });
      }

      const handleMouseMove = (e: MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        setButtonPos((prev) => {
          const buttonCenterX = prev.x + 60;
          const buttonCenterY = prev.y + 20;

          const distX = mouseX - buttonCenterX;
          const distY = mouseY - buttonCenterY;
          const distance = Math.sqrt(distX ** 2 + distY ** 2);

          if (distance < 80) {
            const newX = prev.x + (distX > 0 ? -120 : 120);
            const newY = prev.y + (distY > 0 ? -120 : 120);

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
      <div className="my-card relative w-11/12 sm:w-full max-w-md bg-white rounded-3xl shadow-xl p-6 sm:p-8 text-center z-10 mx-2 sm:mx-4 backdrop-blur-lg backdrop-brightness-95 border border-blue-200">
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
              className="rounded-full border-4 border-blue-600 mx-auto shadow-lg"
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
          <p className="text-sm text-gray-500 mt-3 sm:mt-4 leading-relaxed">
            Tenho a alegria de convidá-lo(a) para minha formatura. A sua amizade e
            apoio foram fundamentais durante essa jornada. Venha comemorar comigo!
          </p>
        </div>

        <div className="flex flex-wrap justify-around items-center mt-4 sm:mt-6 text-blue-600 gap-2">
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

        <p className="text-base text-gray-500 mt-3 sm:mt-4">Chácara Brisa do Lago</p>
        <a
          href="https://www.google.com/maps/place/Ch%C3%A1cara+Brisa+do+Lago/@-9.9102858,-48.3480517,20.32z/data=!4m12!1m5!3m4!2zOcKwNTQnMzcuNyJTIDQ4wrAyMCc1Mi44Ilc!8m2!3d-9.910468!4d-48.347999!3m5!1s0x9324ebbd49ff9bb1:0xf49b80d54b53d980!8m2!3d-9.9105154!4d-48.3479512!16s%2Fg%2F11l2thm7hp?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2 mt-3 sm:mt-4 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 21c-4.418 0-8-3.582-8-8 0-3.866 2.686-7.16 6.32-7.876a1 1 0 01.68 1.876C7.82 7.5 6 10.11 6 13c0 3.314 2.686 6 6 6s6-2.686 6-6c0-2.89-1.82-5.5-4.32-6.124a1 1 0 01.68-1.876C17.314 5.84 20 9.134 20 13c0 4.418-3.582 8-8 8z"
            />
          </svg>
          Como chegar?
        </a>

        <div className="mt-6 sm:mt-8 flex flex-col items-center">
          <p className="text-lg font-semibold text-gray-700 mb-1 sm:mb-0">
            Confirmar presença:
          </p>
          <button
            type="button"
            onClick={handleConfirmClick}
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2 text-center hover:text-white border border-blue-700 hover:bg-blue-800 w-full sm:mt-4 mb-6 sm:mb-10 me-2 transition-transform duration-200">
            Irei!
          </button>
        </div>
      </div>

      <button
        className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-red-700 mb-2 sm:mb-4 text-sm sm:text-base fixed transition duration-200 z-50"
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
