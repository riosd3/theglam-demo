import Polaroid from "./PolaroidImage";

export default function Showcase() {
    const treatments_images: string[] = Array.from(
        { length: 8 },
        (_, i) => `/images/tratamientos.${i + 1}.webp`
        );
    
    
    return (
        <section className="w-full bg-black/90 px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 items-center justify-center">

            <div className="flex flex-col items-center text-center">
                <h2 className="font-bold text-white font-dancing-script text-4xl md:text-5xl">
                    Nuestros Servicios
                </h2>

                <p className="text-gray-200 mt-6 max-w-md">
                    Descubre una amplia gama de tratamientos especializados diseñados
                    para realzar tu belleza natural y mejorar tu bienestar general.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:justify-end">
                {treatments_images.map((src, index) => (
                    <Polaroid key={index} image={src} alt={`Tratamiento ${index + 1}`} side={index % 2 === 0 ? "left" : "right"}>
                        <span className="font-ooohbaby font-bold">Tratamiento {index + 1}</span>
                    </Polaroid>
                ))}
            </div>
        </div>
        </section>
    );
}
