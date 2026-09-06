import type { ReactNode } from 'react'
import { Swords } from 'lucide-react'
import { cn } from '@/lib/utils'
import { waLink } from '@/lib/site'
import { WhatsAppIcon } from '@/components/icons'

export function WhatsAppButton({
  message,
  children,
  size = 'md',
  variant = 'solid',
  className,
}: {
  message?: string
  children: ReactNode
  size?: 'md' | 'lg'
  variant?: 'solid' | 'outline'
  className?: string
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide transition-all duration-300',
        size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm',
        variant === 'solid'
          ? 'bg-gradient-to-b from-gold-light to-gold-dark text-ink shadow-[0_10px_30px_-8px_rgba(201,169,97,0.6)] hover:shadow-[0_14px_40px_-6px_rgba(201,169,97,0.8)] hover:-translate-y-0.5'
          : 'border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold',
        className,
      )}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      <span>{children}</span>
    </a>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
      <span className="h-px w-6 bg-gold/60" />
      {children}
      <span className="h-px w-6 bg-gold/60" />
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'center' | 'left'
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            'max-w-2xl text-pretty text-base leading-relaxed text-white/60 sm:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  )
}

export function Crest({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center justify-center gap-3', className)}>
      <span className="h-px w-16 gold-divider sm:w-24" />
      <Swords className="size-5 text-gold" aria-hidden="true" />
      <span className="h-px w-16 gold-divider sm:w-24" />
    </div>
  )
}
