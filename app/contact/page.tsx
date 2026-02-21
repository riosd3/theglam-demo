import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <main className="relative min-h-screen flex items-center justify-center bg-linear-to-r from-black to-yellow-500">
            
            <div className="absolute w-64 h-64 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-rose-200 to-rose-500 blur-2xl opacity-40" />

            <section className="relative z-10 w-full max-w-xl bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20">
                <h1 className="text-3xl font-bold text-white mb-6 text-center">
                    Contáctanos
                </h1>

                <ContactForm />
            </section>
        </main>
    );
}