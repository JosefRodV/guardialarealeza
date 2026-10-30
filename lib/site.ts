export const site = {
  name: 'Guardia La Realeza',
  years: 16,
  phoneDisplay: '983 510 106',
  phoneIntl: '51983510106',
  instagram: 'https://www.instagram.com/guardialarealeza',
  tiktok: 'https://www.tiktok.com/@guardialarealeza',
  facebook: 'https://www.facebook.com/share/1CtzW4yZer/',
}

/** Build a WhatsApp click-to-chat link with an optional prefilled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${site.phoneIntl}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
