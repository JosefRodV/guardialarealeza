import { Clock3, CalendarCheck2, Package } from 'lucide-react'
import { SectionHeading } from '@/components/primitives'

const policies = [
  {
    icon: Clock3,
    title: 'Puntualidad',
    desc: 'Llegamos a la hora coordinada para el armado. El inicio del protocolo depende de la hora que nos indique el maestro de ceremonia o el cliente.',
  },
  {
    icon: CalendarCheck2,
    title: 'Reserva',
    desc: 'Separa tu fecha con una seña. Coordina el monto por WhatsApp.',
  },
  {
    icon: Package,
    title: 'Indumentaria',
    desc: 'Nosotros llevamos todo el equipo: espadas, uniformes y accesorios.',
  },
]

export function Policies() {
  return (
    <section className="bg-grain border-y border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Políticas de servicio"
          title="Trabajamos con reglas claras"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {policies.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <span className="mb-5 inline-flex size-14 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                <p.icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-bold text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
