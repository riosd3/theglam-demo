import Link from "next/link";
export default function Hero() {

  return (
    <section className="relative h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091012184-7c1d5b06c6d0')",
        }}
      />

      <div className="absolute inset-0 bg-black/90" />
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="font-genos flex flex-col items-start leading-none">
            <span className="text-2xl md:text-3xl font-light tracking-widest">
                THE
            </span>
            <span className="text-6xl md:text-8xl font-bold tracking-[0.4em]">
                GL<span className="text-amber-400">A</span>M
            </span>
            <span className="text-center text-sm md:text-base tracking-[0.6em] mt-2">
                AESTHETIC & WELLNESS
            </span>
        </h1>

        <p className="max-w-xl text-lg text-gray-200 pt-12">
          Combinamos lo último en tecnología estética para transformar rostro, cuerpo y piel de forma integral.
        </p>

        <Link href="/contact" className="mt-8 bg-amber-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-amber-300 transition hover:cursor-pointer duration-70 ease-in-out animate-bouncer">
          Contactanos
        </Link>
      </div>
    </section>
  );
}
