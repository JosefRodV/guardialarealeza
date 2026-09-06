import { Crown, GraduationCap, Heart, PartyPopper, Church, Building2 } from 'lucide-react'
import { SectionHeading } from '@/components/primitives'

const services = [
  {
    icon: Crown,
    title: '15 Años',
    desc: 'Cruce de espadas y protocolo completo para la entrada soñada de la quinceañera.',
  },
  {
    icon: GraduationCap,
    title: 'Promociones Escolares',
    desc: 'Damos honor y presencia a la promoción en su noche más esperada.',
  },
  {
    icon: Heart,
    title: 'Bodas',
    desc: 'Recibimos a los novios con elegancia y un imponente cruce de espadas.',
  },
  {
    icon: PartyPopper,
    title: 'Aniversarios',
    desc: 'Celebra tu fecha especial con una guardia de honor a la altura.',
  },
  {
    icon: Church,
    title: 'Bautizos',
    desc: 'Ceremonias solemnes acompañadas de nuestra guardia profesional.',
  },
  {
    icon: Building2,
    title: 'Eventos Corporativos',
    desc: 'Presencia impecable para inauguraciones y eventos de empresa.',
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Servicios"
          title="Llevamos el honor a tu evento"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-gold/50 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-x-0 top-0 h-px gold-divider opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="mb-5 inline-flex size-14 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                <s.icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
