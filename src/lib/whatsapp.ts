import { site } from '../config/site';

/** wa.me link with a localized pre-filled message. */
export function whatsappUrl(prefill: string): string {
  const number = site.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(prefill)}`;
}
