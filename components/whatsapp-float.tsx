import { waLink, site } from '@/lib/site'
import { WhatsAppIcon } from '@/components/icons'

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(
        `Hola Guardia La Realeza, quisiera cotizar el servicio de guardia de honor. Mi WhatsApp es el ${site.phoneDisplay}.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escríbenos por WhatsApp al ${site.phoneDisplay}`}
      className="animate-wa-pulse fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="size-7 shrink-0" />
      <span className="hidden text-sm font-semibold sm:inline">
        {site.phoneDisplay}
      </span>
    </a>
  )
}
