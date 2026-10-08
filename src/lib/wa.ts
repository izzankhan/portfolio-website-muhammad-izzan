import { WHATSAPP_URL, SITE } from "./site";

export const waLink = WHATSAPP_URL;

export function waLinkWith(message: string) {
  const number = import.meta.env.VITE_WA_NUMBER ?? SITE.whatsappNumber;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
