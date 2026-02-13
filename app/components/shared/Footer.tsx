import Link from "next/link";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "../ui/icons/social";

export default function Footer() {
  return (

    <footer className="w-full text-white bg-black/90 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="font-paris text-2xl font-bold mb-4">The Glam Aesthetic & Wellness</h2>
            <p className="text-gray-200">
              Quererte es cuidarte. En The Glam Aesthetic & Wellness, combinamos tecnología avanzada con tratamientos personalizados para realzar tu belleza natural
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-amber-400 transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-amber-400 transition">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-amber-400 transition">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-amber-400 transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-200">
              <li>+52-663-438-6821</li>
              <li>Av. Andres Quintana Roo 1737 Zonaeste, Tijuana, Mexico, 22000</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-t-white mt-8 pt-8">
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm">
              © {new Date().getFullYear()} The Glam Aesthetic & Wellness. Todos los derechos reservados.
            </p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="https://wa.me/+526634386821">
                <WhatsAppIcon color="#075E54" size={50}></WhatsAppIcon>
              </Link>
              <Link href="https://www.instagram.com/theglamtijuana/">
                <InstagramIcon color="#DD2A7B" size={50}></InstagramIcon>
              </Link>
              <Link href="https://www.facebook.com/theglamtijuana/">
                <FacebookIcon color="#1877F2" size={50} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}