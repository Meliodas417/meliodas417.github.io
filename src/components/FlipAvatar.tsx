import { useState } from 'react'
import { PixelatedCanvas } from '@/components/ui/pixelated-canvas'
import { cn } from '@/lib/utils'

const avatarSrc = `${import.meta.env.BASE_URL}images/jun-ren.jpg`

export function FlipAvatar() {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      type="button"
      aria-label="Flip Jun Ren portrait"
      aria-pressed={flipped}
      onClick={() => setFlipped((value) => !value)}
      className="group/avatar block w-full cursor-pointer [perspective:1200px]"
    >
      <span
        className={cn(
          'relative block aspect-[4/5] w-full rounded-xl border border-neutral-800/80 bg-neutral-950 p-1 text-left shadow-[0_24px_70px_-38px_rgba(0,0,0,0.72)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d] group-hover/avatar:[transform:rotateY(180deg)] group-focus-visible/avatar:[transform:rotateY(180deg)]',
          flipped && '[transform:rotateY(180deg)]',
        )}
      >
        <span className="absolute inset-1 block overflow-hidden rounded-lg [backface-visibility:hidden]">
          <img
            className="h-full w-full object-cover"
            src={avatarSrc}
            alt="Jun Ren portrait"
          />
        </span>

        <span className="absolute inset-1 block overflow-hidden rounded-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <PixelatedCanvas
            src={avatarSrc}
            width={280}
            height={350}
            cellSize={4}
            dotScale={0.92}
            shape="square"
            backgroundColor="#020617"
            dropoutStrength={0.24}
            interactive
            distortionStrength={2.1}
            distortionRadius={70}
            distortionMode="swirl"
            followSpeed={0.16}
            jitterStrength={2.4}
            jitterSpeed={2}
            sampleAverage
            tintColor="#d9f4ff"
            tintStrength={0.1}
            className="block h-full w-full rounded-lg"
          />
        </span>
      </span>
    </button>
  )
}
