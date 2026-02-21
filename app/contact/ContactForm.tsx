"use client";

import { useState } from "react";

export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);

        await fetch("/api/contact", {
            method: "POST",
            body: formData,
        });

        setLoading(false);
        setSent(true);
    }

    if (sent) {
        return (
            <p className="text-green-300 text-center">
                Mensaje enviado correctamente.
            </p>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                name="name"
                placeholder="Nombre"
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70"
            />

            <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70"
            />

            <textarea
                name="message"
                placeholder="Mensaje"
                required
                rows={4}
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70"
            />

            <input
                type="text"
                name="company"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
            />

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
            >
                {loading ? "Enviando..." : "Enviar mensaje"}
            </button>
        </form>
    );
}