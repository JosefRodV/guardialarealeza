import { Mic2, CalendarCheck, Users, Store } from 'lucide-react'
import { SectionHeading } from '@/components/primitives'

const clients = [
  { icon: Mic2, title: 'Maestros de Ceremonia' },
  { icon: CalendarCheck, title: 'Organizadores de Eventos' },
  { icon: Users, title: 'Papás directo' },
  { icon: Store, title: 'Dueños de Locales' },
]

export function WhoHires() {
  return (
    <section className="bg-grain border-y border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Confían en nosotros"
          title="¿Quiénes nos contratan?"
          intro="Trabajamos con los mejores del rubro."
        />

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c.title}
              className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition-all duration-300 hover:border-gold/50 hover:-translate-y-1"
            >
              <span className="inline-flex size-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                <c.icon className="size-8" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-base font-bold text-white sm:text-lg">
                {c.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
