import { UserPlus } from 'lucide-react'
import { site } from '@/lib/site'
import { WhatsAppButton, Eyebrow } from '@/components/primitives'

export function Recruitment() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-14">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="inline-flex size-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
              <UserPlus className="size-8" aria-hidden="true" />
            </span>
            <Eyebrow>Reclutamiento</Eyebrow>
            <h2 className="font-serif text-3xl font-bold text-balance sm:text-4xl">
              ¿Quieres ser parte de La Realeza?
            </h2>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/70">
              Con {site.years} años formando profesionales, buscamos cadetes
              responsables, con buena presencia y disciplina. Gana experiencia
              en los mejores eventos de Lima.
            </p>
            <WhatsAppButton
              size="lg"
              message="Hola Guardia La Realeza, quiero postular como cadete. ¿Qué requisitos necesito?"
            >
              Postula por WhatsApp {site.phoneDisplay}
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  )
}
