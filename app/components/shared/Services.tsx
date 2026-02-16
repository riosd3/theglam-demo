"use client";

import { useState } from "react";
import services_data from "@/public/results.20260213_235440_4c320932.json";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";


export default function Services(){
    const maxCards = 6;


    const [service_page, setServicePage] = useState(0);
    const [package_page, setPackagePage] = useState(0);

    const services = services_data.filter((service) => service.type === "regular")
    const packages = services_data.filter((service) => service.type === "package_offer")

    const service_total_pages = Math.ceil(services.length / maxCards)
    const packages_total_pages = Math.ceil(packages.length / maxCards)


    const visiblePackages = packages.slice(package_page * maxCards, (package_page + 1) * maxCards);

    const visibleServices = services.slice(service_page * maxCards, (service_page + 1) * maxCards);



    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section id="services-section" className="w-full bg-black/90 px-6 md:px-20 py-20">
            <div className="mx-auto max-w-3xl text-center text-white">
                <h2 className="text-4xl font-semibold">
                    Contamos con una amplia gama de servicios
                </h2>
                <p className="text-gray-300 mt-4">
                    Ofrecemos una variedad de tratamientos especializados para satisfacer
                    tus necesidades de cuidado personal.
                </p>
            </div>

            <div className="mx-auto mt-16 w-full max-w-6xl">
                
                <div className="flex gap-6 text-2xl text-white border-b border-gray-700 pb-2">
                    <button
                        onClick={() => setTabIndex(0)}
                        className={`pb-2 transition-all duration-300 hover:cursor-pointer ${
                        tabIndex === 0
                            ? "text-yellow-200 border-b-2 border-yellow-200"
                            : "text-white hover:text-yellow-100"
                        }`}
                    >
                        Servicios
                    </button>

                    <button
                        onClick={() => setTabIndex(1)}
                        className={`pb-2 transition-all duration-300 hover:cursor-pointer ${
                        tabIndex === 1
                            ? "text-yellow-200 border-b-2 border-yellow-200"
                            : "text-white hover:text-yellow-100"
                        }`}
                    >
                        Tratamientos
                    </button>
                </div>

                <div className="relative mt-12 overflow-hidden px-10">
                    
                    {tabIndex === 0 && (
                    <div className="relative group">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {visibleServices.map((item, index) => (
                                <Image
                                key={index}
                                src={`/images/services/${item.file}`}
                                alt="Service Image"
                                width={400}
                                height={500}
                                className="rounded-2xl object-cover"
                                />
                            ))}
                        </div>
                        <ArrowRight
                        className="
                            absolute right-4 top-1/2 -translate-y-1/2
                            w-8 h-8 text-white cursor-pointer
                            opacity-0 translate-x-6
                            transition-all duration-300 ease-out
                            group-hover:opacity-100
                            group-hover:translate-x-0
                        "
                        onClick={() => {setServicePage(prev => {
                            if (prev + 1 >= service_total_pages) return prev;
                            return prev + 1;
                        })}}
                        />
                        <ArrowLeft
                        className="
                            absolute left-4 top-1/2 -translate-y-1/2
                            w-8 h-8 text-white cursor-pointer
                            opacity-0 -translate-x-6
                            transition-all duration-300 ease-out
                            group-hover:opacity-100
                            group-hover:translate-x-0
                        "
                        onClick={() => {setServicePage(prev => {
                            if (prev - 1 < 0) return prev;
                            return prev - 1;
                        })}}
                        />
                    </div>
                    )}
                        
                        
                    

                    {tabIndex === 1 && (
                        <div className="relative group">

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                            {visiblePackages.map((item, index) => (
                                <Image
                                key={index}
                                src={`/images/services/${item.file}`}
                                alt="Package Image"
                                width={400}
                                height={500}
                                className="rounded-2xl object-cover"
                                />
                            ))}
                            </div>

                            <ArrowRight
                            className="
                                absolute right-4 top-1/2 -translate-y-1/2
                                w-8 h-8 text-white cursor-pointer
                                opacity-0 translate-x-6
                                transition-all duration-300 ease-out
                                group-hover:opacity-100
                                group-hover:translate-x-0
                            "
                            onClick={() => { setPackagePage(prev => {
                                if (prev + 1 >= packages_total_pages) return prev;
                                return prev + 1
                            })}}
                            />

                            <ArrowLeft
                            className="
                                absolute left-4 top-1/2 -translate-y-1/2
                                w-8 h-8 text-white cursor-pointer
                                opacity-0 -translate-x-6
                                transition-all duration-300 ease-out
                                group-hover:opacity-100
                                group-hover:translate-x-0
                            "
                            onClick={() => {setPackagePage(prev => {
                                if (prev - 1 < 0) return prev;
                                return prev - 1;
                            })}}
                            />

                        </div>
                    )}
                    </div>
                </div>
            </section>

    );
}