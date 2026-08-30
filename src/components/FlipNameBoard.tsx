import { useState } from 'react'
import { TextFlippingBoard } from '@/components/ui/text-flipping-board'

export function FlipNameBoard() {
  const [replayKey, setReplayKey] = useState(0)

  function replay() {
    setReplayKey((key) => key + 1)
  }

  return (
    <div
      className="block w-full max-w-[25rem]"
      onMouseEnter={replay}
      onFocus={replay}
      tabIndex={0}
      aria-label="Replay profile board animation"
    >
      <TextFlippingBoard
        key={replayKey}
        rows={['JUN REN', 'COLUMBIA CS', 'AI AGENT SECURITY', 'TRUSTWORTHY AGENTS']}
        rowCount={4}
        colCount={18}
        duration={0.82}
        className="mx-0 mt-5 w-full max-w-[25rem] rounded-xl bg-neutral-100/90 p-2 shadow-[0_18px_52px_-32px_rgba(17,24,39,0.48)] ring-1 ring-neutral-300/80 md:p-3"
      />
    </div>
  )
}
