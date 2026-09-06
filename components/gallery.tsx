import Image from 'next/image'
import { Play } from 'lucide-react'
import { site } from '@/lib/site'
import { SectionHeading } from '@/components/primitives'
import { InstagramIcon, TikTokIcon } from '@/components/icons'

const photos = Array.from({ length: 12 }, (_, i) => `/images/gallery-${(i % 6) + 1}.png`)

const videos = [
  { platform: 'tiktok' as const, thumb: '/images/gallery-1.png', href: site.tiktok },
  { platform: 'tiktok' as const, thumb: '/images/gallery-4.png', href: site.tiktok },
  { platform: 'tiktok' as const, thumb: '/images/gallery-6.png', href: site.tiktok },
  { platform: 'instagram' as const, thumb: '/images/gallery-2.png', href: site.instagram },
  { platform: 'instagram' as const, thumb: '/images/gallery-5.png', href: site.instagram },
  { platform: 'instagram' as const, thumb: '/images/gallery-3.png', href: site.instagram },
]

export function Gallery() {
  return (
    <section id="galeria" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Galería" title="Mira nuestra presencia" />

        {/* Featured video */}
        <a
          href={site.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-14 block overflow-hidden rounded-3xl border border-gold/25"
        >
          <div className="relative aspect-video w-full">
            <Image
              src="/images/video-thumb.png"
              alt="Protocolo completo de 15 años de la Guardia La Realeza"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
            <span className="flex size-20 items-center justify-center rounded-full bg-gold/90 text-ink shadow-[0_0_40px_rgba(201,169,97,0.5)] transition-transform duration-300 group-hover:scale-110">
              <Play className="ml-1 size-9 fill-ink" aria-hidden="true" />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 text-center sm:p-8">
            <h3 className="font-serif text-xl font-bold text-white sm:text-2xl">
              Mira un protocolo completo de 15 años
            </h3>
            <p className="mt-1 text-sm text-white/70">
              Así se ve un servicio completo de principio a fin
            </p>
          </div>
        </a>

        {/* Photo grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((src, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-xl border border-white/10"
            >
              <Image
                src={src || '/placeholder.svg'}
                alt={`Presentación de la Guardia La Realeza ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Social videos */}
        <div className="mt-16">
          <h3 className="text-center font-serif text-2xl font-bold sm:text-3xl">
            Nuestros videos
          </h3>
          <p className="mt-2 text-center text-sm text-white/60">
            Síguenos en TikTok e Instagram y mira nuestras entradas en video
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v, i) => (
              <a
                key={i}
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[9/12] overflow-hidden rounded-2xl border border-white/10"
              >
                <Image
                  src={v.thumb || '/placeholder.svg'}
                  alt={`Video de la Guardia La Realeza en ${v.platform === 'tiktok' ? 'TikTok' : 'Instagram'}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {v.platform === 'tiktok' ? (
                    <TikTokIcon className="size-3.5" />
                  ) : (
                    <InstagramIcon className="size-3.5" />
                  )}
                  {v.platform === 'tiktok' ? 'TikTok' : 'Instagram'}
                </span>
                <span className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Play className="ml-0.5 size-6 fill-white text-white" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
