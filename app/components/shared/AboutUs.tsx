import Image from "next/image";


type Props = {
    title: string;
    message: string;
    image_src: string
}

const presentation: Props[] = [
    {
        title: "Quiénes Somos",
        message: "En The Glam, somos un equipo apasionado por la estética y el bienestar, dedicado a ofrecer tratamientos innovadores y personalizados que realzan tu belleza natural. Con un enfoque integral, combinamos tecnología de vanguardia con técnicas avanzadas para transformar tu rostro, cuerpo y piel, brindándote resultados excepcionales y una experiencia única.",
        image_src: "/images/aboutus.1.webp"
    },
    {
        title: "Nuestra Misión",
        message: "En The Glam, nuestra misión es realzar la belleza natural de cada persona a través de tratamientos estéticos innovadores y personalizados. Nos comprometemos a brindar una experiencia excepcional, combinando tecnología avanzada con un enfoque integral para transformar el rostro, cuerpo y piel de nuestros clientes, ayudándolos a sentirse radiantes y seguros en su propia piel.",
        image_src: "/images/aboutus.2.webp"
    }
]

function Presentation({ title, message, image_src }: Props){
    return (
        <section className="w-full bg-black/90 px-6 py-20 flex flex-row items-center text-center">

            <div className="max-w-4xl mx-auto flex flex-col items-center text-center text-white px-2 py-8">
                <div className="items-center justify-center">
                    <h2 className="text-4xl font-bold font-ooohbaby md:text-5xl tracking-[1rem]">{title}</h2>
                    <p className="text-gray-200 mt-6 max-w-2xl">
                        {message}
                    </p>
                </div>
            </div>

            <div className="max-w-8xl mx-auto flex flex-col items-center text-center text-white px-2 py-8">
                <Image
                    src={image_src}
                    alt="Sobre Nosotros"
                    width={600}
                    height={800}
                    className="rounded-lg mt-12 object-cover object-center"
                />
            </div>

        </section>
    );
}

export default function AboutUs(){
    return (
        <>
            {presentation.map((props, index)=> (
                <Presentation key={index} {...props} />
            ))}
        </>
    );
}
