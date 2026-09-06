import Image from 'next/image'
import { site } from '@/lib/site'
import { WhatsAppButton, Eyebrow, Crest } from '@/components/primitives'

export function QuoteCta() {
  return (
    <section id="cotizacion" className="relative isolate overflow-hidden py-24 sm:py-32">
      <Image
        src="/images/gallery-4.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(10,9,8,0.85)_100%)]" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <Eyebrow>Cotización</Eyebrow>
        <h2 className="font-serif text-4xl font-bold text-balance sm:text-5xl">
          ¿Cuánto cuesta?
        </h2>
        <Crest />
        <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
          Cada evento es diferente. Te damos la mejor propuesta con precios
          justos y claros. Dime fecha, lugar y número de cadetes y te cotizamos
          al instante por WhatsApp.
        </p>
        <div className="mt-4">
          <WhatsAppButton
            size="lg"
            message="Hola Guardia La Realeza, quiero una cotización. Fecha: , Lugar: , N° de cadetes: ."
          >
            Pedir cotización: {site.phoneDisplay}
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
