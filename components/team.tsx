import Image from 'next/image'
import { Check, Shirt, Plus } from 'lucide-react'
import { SectionHeading, WhatsAppButton } from '@/components/primitives'

const packages = [
  {
    tag: 'Paquete estándar · 15 Años',
    img: '/images/package-15.png',
    alt: 'Seis cadetes de traje negro con dorado y un chambelán de traje blanco con dorado',
    items: [
      '6 Cadetes traje NEGRO con dorado',
      '1 Chambelán traje BLANCO con dorado',
    ],
    featured: true,
  },
  {
    tag: 'Paquete estándar · Promociones',
    img: '/images/package-promo.png',
    alt: 'Seis cadetes y un chambelán con capa, todos de uniforme blanco con dorado y pantalón negro',
    items: [
      '6 Cadetes traje BLANCO con dorado',
      '1 Chambelán traje BLANCO con dorado',
    ],
    featured: false,
  },
]

const variations = [
  'Todos los cadetes de BLANCO con dorado',
  'Todos de BLANCO menos el Chambelán',
  'Cadetes mitad BLANCO arriba y NEGRO abajo',
  'Los 7 de BLANCO con dorado (6 cadetes y chambelán)',
  'Versión de 4 cadetes en lugar de 6',
  'Otras combinaciones a pedido, consúltalas por WhatsApp',
]

const extras = [
  'CAPAS elegantes para todos',
  'CAPI / GORRO en 2 versiones, incluido modelo BLANCO',
]

export function Team() {
  return (
    <section id="equipo" className="bg-grain border-y border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Equipo y vestimenta"
          title="Personalizamos cada detalle"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {packages.map((p) => (
            <article
              key={p.tag}
              className={`overflow-hidden rounded-3xl border ${
                p.featured ? 'border-gold/50 bg-gold/[0.05]' : 'border-white/10 bg-white/[0.03]'
              }`}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={p.img || '/placeholder.svg'}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {p.tag}
                </span>
                <ul className="mt-4 space-y-3">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <Check className="size-5 shrink-0 text-gold" aria-hidden="true" />
                      <span className="text-sm sm:text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-white">
              <Shirt className="size-5 text-gold" aria-hidden="true" />
              Variaciones disponibles
            </h3>
            <ul className="mt-4 space-y-3">
              {variations.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <h3 className="flex items-center gap-2 font-serif text-lg font-bold text-white">
              <Plus className="size-5 text-gold" aria-hidden="true" />
              Adicionales
            </h3>
            <ul className="mt-4 space-y-3">
              {extras.map((e) => (
                <li key={e} className="flex items-start gap-3 text-sm text-white/70">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" />
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 rounded-3xl border border-gold/25 bg-gradient-to-br from-white/[0.06] to-transparent p-8 text-center">
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/80">
            ¿Quieres más presencia? Podemos armar equipos más grandes. Cotiza tu
            número de cadetes por WhatsApp.
          </p>
          <WhatsAppButton
            variant="outline"
            message="Hola, quiero cotizar un equipo personalizado de cadetes para mi evento."
          >
            Cotizar mi equipo
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
