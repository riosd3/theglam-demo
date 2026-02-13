import Image from "next/image";
import { ReactNode } from "react";

export default function Polaroid({
  image,
  alt,
  children,
  side = "right",
}: {
  image: string;
  alt: string;
  children: ReactNode;
  side?: "left" | "right";
}) {
  return (
    <div
      className={`relative my-6 w-64 bg-white p-4 pb-12 shadow-xl transition-all duration-300 hover:scale-105 hover:rotate-0 cursor-pointer ${
        side === "left" ? "-rotate-3" : "rotate-3"
      }`}
    >
      {/* Tape */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-yellow-200 rotate-2 shadow-md z-20 opacity-90" />

      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>

      {/* Should have a curive font?  */}
      <div className="mt-4 text-center text-sm font-semibold text-gray-800">
        {children}
      </div>
    </div>
  );
}
