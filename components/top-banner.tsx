import { Sparkles } from 'lucide-react'

export function TopBanner() {
  const text = 'Cupos limitados para Promos y 15 años · Reserva tu fecha ya'
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-ink">
      <div className="flex whitespace-nowrap py-2">
        <div className="animate-marquee flex shrink-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-6 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm"
            >
              <Sparkles className="size-3.5" aria-hidden="true" />
              {text}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-6 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm"
            >
              <Sparkles className="size-3.5" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
