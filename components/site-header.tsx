import { site } from '@/lib/site'
import { WhatsAppButton } from '@/components/primitives'

const nav = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Protocolo', href: '#protocolo' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-icon-vr3X1nAYJZsrAV82wqeqr0eTHKc6QN.png"
            alt="Guardia La Realeza"
            className="size-10 object-contain"
          />
          <span className="font-serif text-base font-bold leading-none tracking-wide sm:text-lg">
            Guardia
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold sm:text-[0.65rem]">
              La Realeza
            </span>
          </span>
        </a>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 lg:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <WhatsAppButton
          message={`Hola Guardia La Realeza, quiero cotizar. Mi WhatsApp es el ${site.phoneDisplay}.`}
          className="shrink-0"
        >
          <span className="hidden sm:inline">Cotizar</span>
          <span className="sm:hidden">WhatsApp</span>
        </WhatsAppButton>
      </div>
    </header>
  )
}
