import { Sparkles } from 'lucide-react'
import { site } from '@/lib/site'
import { WhatsAppButton, Eyebrow } from '@/components/primitives'

export function CustomCeremony() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-white/[0.06] to-transparent p-8 text-center sm:p-14">
          <Sparkles
            className="mx-auto mb-6 size-10 text-gold"
            aria-hidden="true"
          />
          <div className="mb-4 flex justify-center">
            <Eyebrow>Diseñamos tu ceremonia ideal</Eyebrow>
          </div>
          <h2 className="font-serif text-3xl font-bold text-balance sm:text-4xl">
            Tu evento, como siempre lo soñaste
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
            Cuéntanos cómo imaginas la entrada perfecta. Nos adaptamos a tu
            tiempo, música y protocolo. Si está en nuestras manos, lo hacemos
            realidad. Iniciamos a la hora exacta.
          </p>
          <div className="mt-9">
            <WhatsAppButton
              size="lg"
              message="Hola Guardia La Realeza, quiero contarles cómo imagino la entrada perfecta para mi evento."
            >
              Cuéntame tu idea por WhatsApp {site.phoneDisplay}
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  )
}
