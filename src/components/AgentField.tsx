const citationNodes = [
  { cx: 176, cy: 258, color: '#235789' },
  { cx: 536, cy: 364, color: '#2f6f4e' },
  { cx: 916, cy: 292, color: '#235789' },
  { cx: 1334, cy: 420, color: '#9a4d2e' },
  { cx: 516, cy: 596, color: '#9a4d2e' },
  { cx: 884, cy: 550, color: '#2f6f4e' },
  { cx: 1198, cy: 240, color: '#235789' },
]

export function AgentField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#f8faf7]" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,87,137,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,87,137,0.026)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,255,255,0.96),transparent_32%),radial-gradient(circle_at_82%_28%,rgba(219,232,238,0.34),transparent_31%),radial-gradient(circle_at_68%_88%,rgba(239,231,221,0.42),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,247,0.72),rgba(248,250,247,0.97)_72%)]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-45"
        viewBox="0 0 1440 920"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="research-dots" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.1" fill="#235789" opacity="0.1" />
          </pattern>
          <linearGradient id="research-line" x1="172" y1="205" x2="1188" y2="672">
            <stop stopColor="#235789" stopOpacity="0.08" />
            <stop offset="0.52" stopColor="#2f6f4e" stopOpacity="0.16" />
            <stop offset="1" stopColor="#9a4d2e" stopOpacity="0.11" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="1440" height="920" fill="url(#research-dots)" />

        <g stroke="url(#research-line)" strokeWidth="1.1">
          <path d="M112 612C279 458 364 279 536 364C694 442 758 230 916 292C1082 357 1134 558 1334 420" />
          <path d="M72 694C230 638 363 674 516 596C682 512 740 626 884 550C1050 462 1145 510 1348 606" />
          <path d="M176 258C364 350 436 226 608 280C756 326 810 426 972 374C1112 330 1198 240 1366 292" />
        </g>

        <g stroke="#235789" strokeOpacity="0.13">
          <path d="M168 286H476M168 346H444M168 406H508M168 466H390" />
          <path d="M1010 226V528M1070 284V528M1130 336V528M1190 260V528M1250 384V528" />
          <path d="M990 528H1286" />
        </g>

        <g fill="#f8faf7" strokeWidth="1.4">
          {citationNodes.map(({ cx, cy, color }, index) => (
            <circle key={index} cx={cx} cy={cy} r="8" fill="#f8faf7" stroke={color} opacity="0.46" />
          ))}
        </g>

        <g fill="#235789" opacity="0.09">
          <rect x="1008" y="402" width="36" height="126" rx="4" />
          <rect x="1068" y="356" width="36" height="172" rx="4" />
          <rect x="1128" y="308" width="36" height="220" rx="4" />
          <rect x="1188" y="244" width="36" height="284" rx="4" />
          <rect x="1248" y="348" width="36" height="180" rx="4" />
        </g>
      </svg>

      <div className="absolute left-[6vw] top-[18vh] hidden h-64 w-[32rem] border-l border-t border-[#235789]/10 md:block" />
      <div className="absolute right-[7vw] top-[24vh] hidden h-80 w-[22rem] border-b border-r border-[#9a4d2e]/10 md:block" />
    </div>
  )
}
