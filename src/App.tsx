import { motion } from 'motion/react'
import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  FileText,
  GraduationCap,
  Mail,
  MapPin,
  Trophy,
} from 'lucide-react'
import { AgentField } from '@/components/AgentField'
import { FlipAvatar } from '@/components/FlipAvatar'
import { FlipNameBoard } from '@/components/FlipNameBoard'
import { FloatingDockNav } from '@/components/FloatingDockNav'
import { LinkPreview } from '@/components/ui/link-preview'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]

const profileHighlights = [
  { label: 'Program', value: 'Columbia CS PhD' },
  { label: 'Focus', value: 'AI Agent Security' },
]

const researchItems = [
  {
    title: 'AI Agent Security',
    text: 'Security, reliability, and evaluation of LLM agents that use tools, browse interfaces, execute code, and operate inside changing software environments.',
    tags: ['agent runtime', 'tool use', 'prompt injection'],
  },
  {
    title: 'Software Engineering Agents',
    text: 'Methods and benchmarks for agents that turn requirements, screenshots, DOM state, APIs, and UI mockups into verifiable engineering actions.',
    tags: ['testing', 'program repair', 'UI automation'],
  },
  {
    title: 'Mobile & GUI Evaluation',
    text: 'Evaluation frameworks for Android and GUI navigation tasks, with emphasis on realistic workflows, behavior traces, and failure analysis beyond pass/fail scoring.',
    tags: ['Android', 'benchmarks', 'navigation'],
  },
]

const publications = [
  {
    image: '/papers/appforge_construction.png',
    imageAlt: 'Construction pipeline for the AppForge benchmark',
    venue: 'ICLR 2026',
    status: 'Selected publication',
    title: 'From Assistant to Independent Developer: Are GPTs Ready for Software Development?',
    authors:
      'Dezhi Ran, Yuan Cao, Mengzhou Wu, Simin Chen, Yuzhe Guo, Jun Ren, Zihe Song, Hao Yu, Jialei Wei, Linyi Li, Wei Yang, Baishakhi Ray, and Tao Xie',
    note: 'AppForge evaluates whether LLM agents can build complete Android apps from natural-language specifications, using validated functional tests rather than surface-level demos.',
    links: [
      ['arXiv', 'https://arxiv.org/abs/2510.07740'],
      ['OpenReview', 'https://openreview.net/forum?id=XrP8dp1rCg'],
      ['Project', 'https://appforge-bench.github.io'],
    ],
  },
  {
    image: '/papers/sail-system-architecture.png',
    imageAlt: 'System architecture of SAIL',
    venue: 'arXiv 2024',
    status: 'Preprint',
    title: 'SAIL: LLM-based Android UI Test Migration with Skill-Adaptive Imitation Learning',
    authors:
      'Mengzhou Wu, Hao Wang, Jun Ren, Yuan Cao, Yuetong Li, Alex Jiang, Dezhi Ran, Yitao Hu, Wei Yang, and Tao Xie',
    note: 'SAIL adapts source UI-test skills to target applications, improving Android UI test migration across heterogeneous app interfaces.',
    links: [['arXiv', 'https://arxiv.org/abs/2409.13311']],
  },
  {
    image: '/papers/sphinx-navigation-workflow.png',
    imageAlt: 'Goal-based mobile UI navigation workflow evaluated by Sphinx',
    venue: 'arXiv 2025',
    status: 'Preprint',
    title: 'Beyond Pass or Fail: Multi-Dimensional Benchmarking of Foundation Models for Goal-based Mobile UI Navigation',
    authors:
      'Dezhi Ran, Mengzhou Wu, Hao Yu, Yuetong Li, Jun Ren, Yuan Cao, Xia Zeng, Haochuan Lu, Zexin Xu, Mengqian Xu, Ting Su, Liangchao Yao, Ting Xiong, Wei Yang, Yuetang Deng, Assaf Marron, David Harel, and Tao Xie',
    note: 'Introduces a multi-dimensional benchmark for evaluating goal understanding, planning, grounding, and instruction following in mobile UI navigation.',
    links: [['arXiv', 'https://arxiv.org/abs/2501.02863']],
  },
  {
    image: '/papers/juntas-mergeability-study.png',
    imageAlt: 'Distribution of merging losses across NLP model branches',
    venue: 'FSE 2026',
    status: 'Under review',
    title: 'Juntas: A Collaborative Development Framework for Foundation Models with Mergeability-Aware Adaptation',
    authors: null,
    note: 'A collaborative development framework for foundation models, focused on adaptation workflows and mergeability-aware model evolution.',
    links: [],
  },
  {
    image: '/papers/point-cloud-visual-comparison.png',
    imageAlt: 'Original and multimodally upsampled point-cloud comparison',
    venue: 'TRB 2026',
    status: 'Accepted for presentation',
    title: 'Multimodal Point Cloud Upsampling via Image-Guided Conditional Diffusion Models',
    authors: null,
    note: 'Explores multimodal point-cloud upsampling with image-guided conditional diffusion for transportation and scene-understanding settings.',
    links: [],
  },
]

const experienceItems = [
  {
    icon: BriefcaseBusiness,
    title: 'Software Engineering Research Intern',
    org: 'Alipay, Ant Group',
    place: 'Hangzhou, China',
    date: 'Mar 2026 - Jun 2026',
    details:
      'Building LLM-based test-case generation systems that translate PRDs, UI mockups, screenshots, and DOM state into executable YAML tests.',
  },
  {
    icon: BookOpen,
    title: 'AI Research Assistant',
    org: 'Fudan University',
    place: 'Shanghai, China',
    date: 'Jul 2025 - Mar 2026',
    details:
      'Developed framework-agnostic infrastructure for automated API endpoint discovery and MCP generation across heterogeneous web stacks.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Software Engineering Intern',
    org: 'Oak Ridge National Laboratory',
    place: 'Oak Ridge, TN',
    date: 'Jan 2025 - May 2025',
    details:
      'Contributed to digital-twin modules for scene reconstruction, mobility systems, and autonomous-driving research prototypes.',
  },
  {
    icon: BookOpen,
    title: 'RISE Group Research Assistant',
    org: 'Peking University',
    place: 'Beijing, China',
    date: 'May 2024 - Sep 2024',
    details:
      'Studied LLM limitations in end-to-end mobile app development and skill-adaptive imitation learning for Android UI test migration.',
  },
]

const educationItems = [
  {
    school: 'Columbia University',
    degree: 'PhD in Computer Science',
    date: '2026 - 2031 expected',
    detail: 'Advisor: Prof. Zhuo Zhang.',
  },
  {
    school: 'University of Texas at Dallas',
    degree: 'BS in Computer Science',
    date: '2021 - 2024',
    detail: "Research advisor: Prof. Wei Yang. Dean's List, top 10% of class.",
  },
]

const awards = [
  {
    title: 'Amazon Trusted AI Challenge',
    date: 'Jul 2025',
    detail: 'Top 10 global team with a $250,000 research grant.',
  },
  {
    title: 'Trusted AI AWS Research Credit',
    date: 'Oct 2024',
    detail: '$1.35M compute credit award supporting trusted AI research.',
  },
  {
    title: 'RowdyHack 2024',
    date: 'Feb 2024',
    detail: 'General Track 1st Place at a Major League Hacking event.',
  },
]

const newsItems = [
  ['2026.08', 'Joined Columbia University as a Computer Science PhD student.'],
  ['2026.03', 'Started as a Software Engineering Research Intern at Alipay, Ant Group.'],
  ['2025.07', 'Selected as a top 10 global team in the Amazon Trusted AI Challenge.'],
]

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#f8faf7] pb-24 text-[#16191d]">
      <AgentField />
      <FloatingDockNav />

      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-neutral-300/80 bg-[#fffefa]/94 backdrop-blur-md">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
            <a className="text-sm font-bold text-[#174a78]" href="#about">
              JR
            </a>
            <div className="hidden items-center gap-1 text-sm font-semibold text-neutral-700 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="rounded-full px-3 py-1.5 transition hover:bg-white hover:text-[#174a78]"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </header>

        <section
          id="about"
          className="mx-auto grid min-h-[84svh] max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-[minmax(0,1fr)_300px] md:px-8 md:py-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="min-w-0"
          >
            <p className="academic-kicker mb-4 flex flex-wrap items-center gap-3">
              <span>Computer Science PhD Student</span>
              <span className="h-px w-8 bg-[#8b3f22]" />
              <span>Columbia University</span>
            </p>

            <div className="h-28 w-full max-w-[28rem] md:h-36">
              <TextHoverEffect text="JUN REN" duration={0.18} />
            </div>
            <FlipNameBoard />
            <h1 className="sr-only">Jun Ren</h1>

            <div className="academic-body mt-8 max-w-3xl space-y-4">
              <p>
                I am Jun Ren, a Computer Science PhD student at{' '}
                <LinkPreview className="story-link" url="https://www.cs.columbia.edu/">
                  Columbia University
                </LinkPreview>{' '}
                advised by Prof.{' '}
                <LinkPreview className="story-link" url="https://zzhang.xyz/">
                  Zhuo Zhang
                </LinkPreview>
                . My research focuses on <strong>AI agent security</strong>, trustworthy
                agentic systems, and software-engineering automation.
              </p>
              <p>
                I study how LLM-based agents reason, act, test software, interact with user
                interfaces, and fail in realistic automation settings. I am especially interested in
                workflows that turn requirements, UI mockups, screenshots, DOM state, and APIs into
                secure, reliable, and verifiable engineering actions.
              </p>
              <p>
                Before Columbia, I collaborated with Prof.{' '}
                <LinkPreview
                  className="story-link"
                  url="https://personal.utdallas.edu/~wxy180002"
                >
                  Wei Yang
                </LinkPreview>{' '}
                on mobile UI testing and foundation-model evaluation, alongside research roles at
                Ant Group, Fudan University, Oak Ridge National Laboratory, Peking University, UT
                Dallas, and the University of Houston.
              </p>
            </div>

            <div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-2">
              {profileHighlights.map((item) => (
                <div key={item.label} className="border-t border-neutral-400/70 pt-3">
                  <p className="academic-label">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[0.98rem] font-semibold text-neutral-950">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
              <a className="contact-link" href="mailto:jr4799@columbia.edu">
                <Mail size={16} /> Email
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/jun417/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ArrowUpRight size={16} /> LinkedIn
              </a>
              <a className="contact-link" href="#publications">
                <FileText size={16} /> Publications
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55, ease: 'easeOut' }}
            className="w-full max-w-[280px] justify-self-start md:justify-self-end"
          >
            <FlipAvatar />
            <dl className="mt-5 space-y-3 text-sm font-medium text-neutral-700">
              <IconFact icon={Building2} text="Columbia University" />
              <IconFact icon={MapPin} text="New York, NY" />
              <IconFact icon={GraduationCap} text="AI Agent Security" />
            </dl>
          </motion.aside>
        </section>

        <section id="research" className="border-y border-neutral-300/80 bg-white/88">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[220px_minmax(0,1fr)] md:px-8">
            <SectionHeading eyebrow="Research focus" title="Agenda" />
            <div className="grid gap-0 md:grid-cols-3">
              {researchItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="academic-copy border-t border-neutral-300 py-5 md:border-l md:border-t-0 md:px-6 md:first:border-l-0 md:first:pl-0"
                >
                  <span className="academic-label mb-3 block text-[#8b3f22]">
                    0{index + 1}
                  </span>
                  <h3 className="academic-card-title mb-2">{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="academic-chip"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="publications"
          className="border-y border-neutral-300/80 bg-[#fffefa]/92"
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[220px_minmax(0,1fr)] md:px-8">
            <SectionHeading eyebrow="Selected work" title="Publications" />
            <div className="space-y-6">
              {publications.map((paper, index) => (
                <PublicationCard key={paper.title} paper={paper} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="border-y border-neutral-300/80 bg-white/90">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[220px_minmax(0,1fr)] md:px-8">
            <SectionHeading eyebrow="Appointments" title="Experience" />
            <div className="divide-y divide-neutral-200">
              {experienceItems.map((item) => (
                <TimelineItem key={`${item.org}-${item.date}`} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="awards"
          className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[220px_minmax(0,1fr)] md:px-8"
        >
          <SectionHeading eyebrow="Curriculum vitae" title="Education & Awards" />
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
            <div>
              <h3 className="academic-kicker mb-3 flex items-center gap-2 text-neutral-700">
                <GraduationCap size={16} /> Education
              </h3>
              <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                {educationItems.map((item) => (
                  <div key={item.school} className="py-4">
                    <div className="flex flex-wrap justify-between gap-2">
                      <p className="academic-card-title text-[1.08rem]">{item.school}</p>
                      <p className="academic-date">{item.date}</p>
                    </div>
                    <p className="academic-meta mt-1 font-semibold text-neutral-800">{item.degree}</p>
                    <p className="academic-meta mt-2">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="academic-kicker mb-3 flex items-center gap-2 text-neutral-700">
                <Trophy size={16} /> Honors
              </h3>
              <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                {awards.map((item) => (
                  <div key={item.title} className="py-4">
                    <div className="flex flex-wrap justify-between gap-2">
                      <p className="academic-card-title text-[1.08rem]">{item.title}</p>
                      <p className="academic-date text-[#8b3f22]">{item.date}</p>
                    </div>
                    <p className="academic-meta mt-2">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="news" className="border-y border-neutral-300/80 bg-[#eef5ef]/92">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[220px_minmax(0,1fr)] md:px-8">
            <SectionHeading eyebrow="Updates" title="News" />
            <ol className="divide-y divide-neutral-200/90">
              {newsItems.map(([date, text]) => (
                <li
                  key={date}
                  className="grid gap-2 py-4 md:grid-cols-[88px_minmax(0,1fr)]"
                >
                  <time className="academic-date">{date}</time>
                  <span className="academic-meta text-neutral-800">{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[220px_minmax(0,1fr)] md:px-8"
        >
          <SectionHeading eyebrow="Connect" title="Contact" />
          <div>
            <p className="academic-copy max-w-2xl">
              I am interested in robust LLM agents, trustworthy software automation, realistic
              benchmarks, and collaborations around secure agentic workflows.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm font-medium">
              <a className="contact-link" href="mailto:jr4799@columbia.edu">
                <Mail size={16} /> jr4799@columbia.edu
              </a>
              <a
                className="contact-link"
                href="https://www.linkedin.com/in/jun417/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <ArrowUpRight size={16} /> LinkedIn
              </a>
              <a className="contact-link" href="#publications">
                <FileText size={16} /> Publications
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function IconFact({ icon: Icon, text }: { icon: typeof Building2; text: string }) {
  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 shrink-0 text-[#235789]" size={16} />
      <dd>{text}</dd>
    </div>
  )
}

function PublicationCard({
  paper,
  index,
}: {
  paper: (typeof publications)[number]
  index: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.04, duration: 0.42 }}
      className="grid gap-5 border-t border-neutral-300 pt-6 md:grid-cols-[220px_minmax(0,1fr)]"
    >
      <div className="overflow-hidden border border-neutral-300 bg-white shadow-[0_18px_48px_-34px_rgba(0,0,0,0.5)]">
        <img
          className="aspect-[16/10] w-full bg-white p-2 object-contain"
          src={paper.image}
          alt={paper.imageAlt}
        />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="academic-label text-[#174a78]">[{paper.venue}]</span>
          <span className="academic-chip py-1">
            {paper.status}
          </span>
        </div>
        <h3 className="academic-paper-title mt-2">{paper.title}</h3>
        {paper.authors && <p className="academic-meta mt-2">{paper.authors}</p>}
        <p className="academic-copy mt-3 max-w-3xl">{paper.note}</p>
        {paper.links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            {paper.links.map(([label, href]) => (
              <LinkPreview className="paper-link" key={href} url={href}>
                {label} <ArrowUpRight size={14} />
              </LinkPreview>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}

function TimelineItem({ item }: { item: (typeof experienceItems)[number] }) {
  const Icon = item.icon

  return (
    <article className="grid gap-4 py-5 md:grid-cols-[148px_minmax(0,1fr)]">
      <div className="academic-date flex items-center gap-2">
        <CalendarDays size={14} /> {item.date}
      </div>
      <div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="academic-card-title flex items-center gap-2">
              <Icon size={17} className="text-[#235789]" />
              {item.title}
            </h3>
            <p className="academic-meta mt-1 font-semibold">
              {item.org} · {item.place}
            </p>
          </div>
        </div>
        <p className="academic-copy mt-3 max-w-3xl">{item.details}</p>
      </div>
    </article>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="academic-kicker text-neutral-700">
        {eyebrow}
      </p>
      <h2 className="academic-section-title mt-2">{title}</h2>
    </div>
  )
}

export default App
