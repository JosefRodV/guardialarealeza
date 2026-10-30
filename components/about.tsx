import Image from 'next/image'
import { ShieldCheck, Award, Clock } from 'lucide-react'
import { site } from '@/lib/site'
import { Eyebrow } from '@/components/primitives'

const stats = [
  { icon: Award, value: `${site.years}`, label: 'Años de honor' },
  { icon: ShieldCheck, value: '+500', label: 'Eventos realizados' },
  { icon: Clock, value: '24/7', label: 'Respuesta inmediata' },
]

export function About() {
  return (
    <section id="nosotros" className="bg-grain relative py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-gold/30" />
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/about.png"
              alt="Dos cadetes de la Guardia La Realeza con traje negro y dorado en posición de firmes"
              width={720}
              height={860}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Eyebrow>Quiénes somos</Eyebrow>
          <h2 className="font-serif text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-5xl">
            Elegancia y honor desde hace {site.years} años
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-white/70">
            Somos una guardia profesional sin local. Llegamos a todo Lima con un
            equipo joven, disciplinado y con presencia. Brindamos emoción en
            cada entrada. {site.years} años respaldan nuestro trabajo en los
            eventos más importantes.
          </p>

          <div className="mt-2 grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center"
              >
                <s.icon
                  className="mx-auto mb-2 size-6 text-gold"
                  aria-hidden="true"
                />
                <div className="font-serif text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
