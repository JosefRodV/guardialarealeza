import { Crown } from 'lucide-react'
import { site, waLink } from '@/lib/site'
import {
  WhatsAppIcon,
  InstagramIcon,
  TikTokIcon,
  FacebookIcon,
} from '@/components/icons'

const socials = [
  { href: site.instagram, Icon: InstagramIcon, label: 'Instagram' },
  { href: site.tiktok, Icon: TikTokIcon, label: 'TikTok' },
  { href: site.facebook, Icon: FacebookIcon, label: 'Facebook' },
  { href: waLink(), Icon: WhatsAppIcon, label: 'WhatsApp' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
            <Crown className="size-6 text-gold" aria-hidden="true" />
          </span>
          <div className="text-left">
            <div className="font-serif text-lg font-bold leading-none">
              Guardia La Realeza
            </div>
            <div className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">
              {site.years} años de experiencia
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex size-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold/60 hover:text-gold"
            >
              <s.Icon className="size-5" />
            </a>
          ))}
        </div>

        <div className="h-px w-full max-w-xs gold-divider" />

        <p className="text-sm text-white/50">
          Llegamos a todo Lima · © 2026 Guardia La Realeza
        </p>
      </div>
    </footer>
  )
}
