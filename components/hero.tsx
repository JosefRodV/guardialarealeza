import Image from 'next/image'
import { Star } from 'lucide-react'
import { site } from '@/lib/site'
import { WhatsAppButton, Crest } from '@/components/primitives'

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="Guardia de honor marchando de noche con espadas en alto"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/75 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(10,9,8,0.75)_100%)]" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <Star className="size-3.5 fill-gold text-gold" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {site.years} años de experiencia
          </span>
        </div>

        <h1 className="font-serif text-4xl font-black uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl md:text-7xl">
          <span className="block text-white">Guardia</span>
          <span className="text-gradient-gold block">La Realeza</span>
        </h1>

        <p className="mt-6 max-w-2xl font-serif text-lg text-white/90 sm:text-2xl">
          {site.years} años de experiencia dando honor a tu evento
        </p>

        <Crest className="my-7" />

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
          15 años, promociones escolares, bodas y todo tipo de eventos sociales
          en todo Lima.
        </p>
        <p className="mt-3 font-serif text-lg italic text-gold/90">
          Honor y elegancia al alcance de tu evento
        </p>

        <div className="mt-9">
          <WhatsAppButton
            size="lg"
            message={`Hola Guardia La Realeza, quiero una cotización para mi evento. Mi WhatsApp es el ${site.phoneDisplay}.`}
          >
            Cotiza por WhatsApp {site.phoneDisplay}
          </WhatsAppButton>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
    </section>
  )
}
