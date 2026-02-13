import { WhatsAppIcon } from "./icons/social";
export function WhatsAppButton() {
  return (
    <button className="bg-amber-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-amber-300 transition hover:cursor-pointer flex felx-row justify-around">
        <WhatsAppIcon size={24} color="#000000" />
        <span className="pr-10">Contactanos</span>
    </button>
  );
}