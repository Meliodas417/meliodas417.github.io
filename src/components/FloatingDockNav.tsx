import {
  IconArticle,
  IconAtom2,
  IconBrandLinkedin,
  IconBriefcase2,
  IconHome,
  IconMail,
  IconTrophy,
} from '@tabler/icons-react'
import { FloatingDock } from '@/components/ui/floating-dock'

const iconClassName = 'h-full w-full text-neutral-500'

const links = [
  {
    title: 'Home',
    icon: <IconHome className={iconClassName} />,
    href: '#about',
  },
  {
    title: 'Research',
    icon: <IconAtom2 className={iconClassName} />,
    href: '#research',
  },
  {
    title: 'Publications',
    icon: <IconArticle className={iconClassName} />,
    href: '#publications',
  },
  {
    title: 'Experience',
    icon: <IconBriefcase2 className={iconClassName} />,
    href: '#experience',
  },
  {
    title: 'Awards',
    icon: <IconTrophy className={iconClassName} />,
    href: '#awards',
  },
  {
    title: 'LinkedIn',
    icon: <IconBrandLinkedin className={iconClassName} />,
    href: 'https://www.linkedin.com/in/jun417/',
  },
  {
    title: 'Email',
    icon: <IconMail className={iconClassName} />,
    href: 'mailto:jr4799@columbia.edu',
  },
]

export function FloatingDockNav() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <FloatingDock
        items={links}
        desktopClassName="border border-neutral-200/80 bg-white/88 shadow-[0_18px_60px_-34px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        mobileClassName="ml-auto border border-neutral-200/80 bg-white/88 shadow-[0_18px_60px_-34px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      />
    </div>
  )
}
