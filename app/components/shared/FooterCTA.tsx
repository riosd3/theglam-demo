import Link from "next/link"

export default function FooterCTA(){
    return (
        <section className="w-full flex flex-col align-center justify-center items-center bg-black/90 px-6 py-20">
            <h2 className="text-white text-3xl font-bold">¿Listo para comenzar tu transformación?</h2>

            <p className="text-gray-200 mt-6 max-w-md text-center">
                Contáctanos hoy mismo para agendar tu cita y descubrir cómo nuestros servicios pueden ayudarte a alcanzar tu máximo potencial de belleza.
            </p>
            <button className="mt-8 bg-amber-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-amber-300 transition hover:cursor-pointer duration-70 ease-in-out animate-bouncer">
                <Link href="/contact ">
                    Contactanos
                </Link>
            </button>
        </section>
    )
}