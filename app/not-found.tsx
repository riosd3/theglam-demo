"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
            <button onClick={() => router.back()} className="mt-6 bg-amber-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-amber-300 transition hover:cursor-pointer">
                Regresar a la página anterior
            </button>
        </div>
    );
}  