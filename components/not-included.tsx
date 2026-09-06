import { X } from 'lucide-react'
import { SectionHeading } from '@/components/primitives'

const items = [
  'Alquiler de local, sonido, luces o decoración',
  'Fotografías y videos del evento',
  'Seguridad del evento o de los invitados',
  'Alimentos y bebidas para el personal',
  'Traslados fuera de Lima sin previa coordinación de viáticos',
]

export function NotIncluded() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Transparencia"
          title="Lo que no incluimos"
          intro="Para mantener la calidad de nuestro servicio, no nos hacemos cargo de:"
        />

        <ul className="mt-12 space-y-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/50">
                <X className="size-4" aria-hidden="true" />
              </span>
              <span className="text-sm leading-relaxed text-white/70 sm:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
