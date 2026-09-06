import { Star, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/primitives'

const reviews = [
  {
    quote: 'La entrada de mi hija fue épica. Todos quedaron impactados con el cruce de espadas.',
    name: 'Sra. María',
    role: 'Promo 2025',
  },
  {
    quote: 'Llegaron puntuales y se vieron increíbles. Un nivel de presencia impecable.',
    name: 'Prof. Juan',
    role: 'Maestro de ceremonia',
  },
  {
    quote: 'El mejor show de la noche. La emoción que transmitieron fue inolvidable.',
    name: 'Sra. Rosa',
    role: '15 años',
  },
]

export function Testimonials() {
  return (
    <section className="bg-grain border-y border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <Quote className="size-8 text-gold/70" aria-hidden="true" />
              <blockquote className="flex-1 text-pretty text-base leading-relaxed text-white/80">
                “{r.quote}”
              </blockquote>
              <div className="flex gap-0.5" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-gold text-gold" aria-hidden="true" />
                ))}
              </div>
              <figcaption>
                <div className="font-serif text-base font-bold text-white">
                  {r.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-gold">
                  {r.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
