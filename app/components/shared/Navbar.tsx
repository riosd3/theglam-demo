"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled
          ? "shadow-lg py-3"
          : "bg-black/30 backdrop-blur-md py-5"}
      `}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        <ul className="hidden md:flex gap-8 text-white text-sm font-medium">
          <li className="font-bold hover:text-amber-400 transition hover:cursor-pointer hover:border-b p-2 hover:border-b-amber-300">Inicio</li>
          <li className="font-bold hover:text-amber-400 transition hover:cursor-pointer hover:border-b p-2 hover:border-b-amber-300">Servicios</li>
          <li className="font-bold hover:text-amber-400 transition hover:cursor-pointer hover:border-b p-2 hover:border-b-amber-300">Sobre nosotros</li>
        </ul>

        <button className="bg-amber-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-amber-300 transition hover:cursor-pointer">
          Contactanos
        </button>
      </div>
    </nav>
  );
}
