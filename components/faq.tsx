import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '@/components/primitives'

const faqs = [
  {
    q: '¿Van a todo Lima?',
    a: 'Sí, a todos los distritos. Lima provincias con previa coordinación.',
  },
  {
    q: '¿Cuánto dura el servicio?',
    a: 'Aproximadamente 45 a 60 minutos. Es importante iniciar a la hora programada.',
  },
  {
    q: '¿Se puede ensayar?',
    a: 'Sí, con previa coordinación. Consúltanos por WhatsApp.',
  },
  {
    q: '¿Hacen el baile de damitas?',
    a: 'Sí, con previa coordinación.',
  },
  {
    q: '¿Se pueden quedar en la fiesta?',
    a: 'Sí, con previa coordinación.',
  },
  {
    q: '¿Cuáles son las formas de pago?',
    a: 'Coordinamos por WhatsApp. Pedimos una seña para reservar tu fecha.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
        />

        <div className="mt-12 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] transition-colors open:border-gold/40 open:bg-white/[0.05]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-serif text-base font-semibold text-white sm:text-lg">
                {item.q}
                <ChevronDown
                  className="size-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-white/70">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
