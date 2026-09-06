import { Info } from 'lucide-react'
import { SectionHeading } from '@/components/primitives'

const steps = [
  'Ingreso del cruce de espadas “La Realeza”',
  'Cruce de espadas a la quinceañera',
  'Formación de la corona',
  'Invitación de los padres y padrinos',
  'Cambio de zapatos',
  'Palabras de presentación oficial',
  'Brindis de honor',
  'Baile de honor: papá / padrino / cercanos a la quinceañera',
  'Baile con el chambelán',
  'Fotos y baile: sesión con la quinceañera y las personas que se encuentran al frente en el bufet',
  'Retirada del cruce de espadas',
]

export function Protocol() {
  return (
    <section
      id="protocolo"
      className="bg-grain relative border-y border-white/10 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Protocolo de 15 años"
          title="Un protocolo que emociona"
          intro="Nuestro protocolo es referencial de 45 a 60 minutos y nos adaptamos a lo que el cliente programe."
        />

        <ol className="mt-14 grid gap-4 sm:grid-cols-2">
          {steps.map((step, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-gold/40"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-serif text-base font-bold text-gold">
                {i + 1}
              </span>
              <p className="pt-1 text-sm leading-relaxed text-white/75">
                {step}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-gold/30 bg-gold/[0.06] p-6">
          <Info className="mt-0.5 size-6 shrink-0 text-gold" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-white/75">
            <strong className="font-semibold text-gold">Nota importante:</strong>{' '}
            Nuestro servicio está diseñado para durar 45 a 60 minutos. Las fotos
            y bailes se realizan con las personas que están al frente para
            mantener el tiempo del evento. Si el evento se extiende, coordinamos
            previamente tiempo adicional.
          </p>
        </div>
      </div>
    </section>
  )
}
