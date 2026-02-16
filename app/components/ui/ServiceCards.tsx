import Image from "next/image";


type Props = {
    title: string;
    description: string;
    includes: string[];
    price: number;
}

export function ServiceCardTwoColumns({ title, description, includes, price }: Props) {
    return (
        <div className="card lg:card-side bg-base-100 shadow-sm">
            <figure>
                <Image
                src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                alt="Servicio" 
                width={400}
                height={500}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <p>
                    {includes.map((item, index) => <span className="font-bold" key={index}>{item}{ includes.length - 1 === index ? "" : " + "}</span>)}
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Reservar</button>
                </div>
            </div>
        </div>
    )
}

