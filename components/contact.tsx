import { site, waLink } from '@/lib/site'
import { SectionHeading } from '@/components/primitives'
import {
  WhatsAppIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
} from '@/components/icons'

const channels = [
  {
    label: 'WhatsApp',
    value: site.phoneDisplay,
    href: waLink('Hola Guardia La Realeza, quiero más información.'),
    Icon: WhatsAppIcon,
  },
  {
    label: 'Instagram',
    value: '@guardialarealeza',
    href: site.instagram,
    Icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    value: '@guardialarealeza',
    href: site.tiktok,
    Icon: TikTokIcon,
  },
  {
    label: 'Facebook',
    value: 'Guardia La Realeza',
    href: site.facebook,
    Icon: FacebookIcon,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contacto y redes"
          title="Hablemos de tu evento"
          intro="Respuesta inmediata 24/7."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all duration-300 hover:border-gold/50 hover:-translate-y-1"
            >
              <span className="inline-flex size-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                <c.Icon className="size-8" />
              </span>
              <div>
                <div className="font-serif text-lg font-bold text-white">
                  {c.label}
                </div>
                <div className="mt-1 text-sm text-gold">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
