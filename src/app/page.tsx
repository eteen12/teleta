import Image from 'next/image'
import type { ReactNode } from 'react'

import { StatementRotator } from '@/components/statement-rotator'

// ─── Container helper ───
function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-2xl px-6 md:max-w-3xl lg:max-w-7xl lg:px-10 ${className}`}>{children}</div>
}

// ════════════════════════════════════════════════════════════════
//  HERO — editorial masthead: full-width headline, record strip,
//  wide team photo banner
// ════════════════════════════════════════════════════════════════
function Hero() {
  const facts = [
    { label: 'Founded', value: '2025' },
    { label: 'Based in', value: 'Kelowna, BC' },
    { label: 'Ownership', value: 'Founder-led' },
  ]

  return (
    <section className="overflow-hidden pt-14 pb-16 lg:pt-20 lg:pb-24">
      <Container>
        <h1
          className="font-display tracking-[-0.04em] text-balance text-mist-950 dark:text-white"
          style={{ fontSize: 'clamp(2.75rem, 7.5vw, 6.5rem)', lineHeight: 1.02 }}
        >
          Teleta Development.
        </h1>

        <div className="mt-8 flex flex-col gap-6 lg:mt-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="font-display max-w-md text-2xl/8 tracking-[-0.02em] text-mist-950 sm:text-3xl/9 dark:text-white">
            Canadian AI tech solutions.
          </p>
          <p className="max-w-md text-lg/7 text-[#474747] dark:text-mist-400">
            We&apos;re a Kelowna-based software company building AI that does the work — not software that asks you to.
            Our flagship: the first AI-first CRM built specifically for BC real estate agents.
          </p>
        </div>

        {/* Record strip — company facts as structured data, CTAs right */}
        <div className="mt-10 flex flex-col gap-6 border-y border-[#e2e2e2] py-6 lg:flex-row lg:items-center lg:justify-between dark:border-mist-800">
          <dl className="flex flex-wrap gap-x-10 gap-y-4 sm:gap-x-14">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[11px] font-semibold tracking-[0.04em] text-[#474747]/50 dark:text-mist-500">
                  {f.label}
                </dt>
                <dd className="font-display mt-1 text-base font-medium tracking-[-0.02em] text-mist-950 dark:text-white">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#flagship"
              className="inline-flex items-center justify-center gap-1 rounded-full bg-mist-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-mist-800 dark:bg-white dark:text-mist-950 dark:hover:bg-mist-200"
            >
              See Teleta Vox
            </a>
            <a
              href="#team"
              className="inline-flex items-center justify-center gap-1 rounded-full px-5 py-3 text-sm font-medium text-mist-950 transition-colors hover:bg-mist-950/10 dark:text-white dark:hover:bg-white/10"
            >
              Meet the team
            </a>
          </div>
        </div>

        {/* Wide team photo banner */}
        <div className="mt-10 overflow-hidden rounded-2xl" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}>
          <Image
            src="/team/teleta-team.jpeg"
            alt="The Teleta team"
            width={1024}
            height={964}
            className="aspect-[4/3] w-full object-cover sm:aspect-[16/7]"
            priority
          />
        </div>
      </Container>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════
//  WHAT WE DO — sticky intro left, tagged editorial rows right
// ════════════════════════════════════════════════════════════════
function WhatWeDo() {
  const items = [
    {
      tag: 'Products',
      title: "We build software we'd pay for.",
      body: 'We design, build, and own our products end to end — from the AI models to the last pixel. If a tool needs a training video, we consider it broken. Everything we ship works the way you already think.',
    },
    {
      tag: 'Automation',
      title: 'AI that removes admin work.',
      body: 'Notes, follow-ups, filing, receipts, mileage — the invisible hours that eat a working day. Our systems listen, extract, sort, and file automatically, so the busywork happens without you.',
    },
    {
      tag: 'In the field',
      title: 'Built alongside the people who use it.',
      body: 'Every product starts in the field, not in a boardroom. Our flagship was shaped by working realtors from day one — real deals, real files, real deadlines. We build with our users, then we ship.',
    },
  ]

  return (
    <section id="what-we-do" className="bg-white py-24 lg:py-32 dark:bg-mist-950">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-24">
          {/* Sticky intro */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 text-xs font-semibold tracking-[0.04em] text-[#474747]/50 dark:text-mist-500">
              What we do
            </p>
            <h2 className="font-display max-w-sm text-4xl/[1.08] tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl/[1.08] dark:text-white">
              Software that pulls its own weight.
            </h2>
            <p className="mt-6 max-w-xs text-base/7 text-[#474747] dark:text-mist-400">
              A small Canadian team shipping AI products for people who work in the field, not at a desk.
            </p>
          </div>

          {/* Rows */}
          <div className="flex flex-col">
            {items.map((f, i) => (
              <div
                key={f.tag}
                className={`group py-12 first:pt-0 ${
                  i < items.length - 1 ? 'border-b border-[#e2e2e2] dark:border-mist-800' : 'pb-0'
                }`}
              >
                <span className="font-display text-3xl leading-none font-medium tracking-[-0.04em] text-[#e2e2e2] transition-colors duration-300 group-hover:text-mist-950 dark:text-mist-800 dark:group-hover:text-white">
                  {f.tag}
                </span>
                <h3 className="font-display mt-5 text-2xl/8 font-medium tracking-[-0.03em] text-balance text-mist-950 sm:text-3xl/9 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-3 max-w-lg text-base/7 text-[#474747] dark:text-mist-400">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════
//  BIG STATEMENT
// ════════════════════════════════════════════════════════════════
function Statement() {
  return (
    <section className="bg-[#eeeeee] py-28 lg:py-40 dark:bg-mist-900">
      <Container>
        <p className="mb-16 text-xs font-semibold tracking-[0.04em] text-[#474747]/50 lg:mb-20 dark:text-mist-500">
          What we believe
        </p>

        <div className="max-w-5xl">
          <h2
            className="font-display leading-[1.04] font-medium tracking-[-0.04em] text-mist-950 dark:text-white"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6.5rem)' }}
          >
            Most software makes you do the work.
          </h2>
        </div>

        <div className="mt-12 flex justify-end overflow-hidden lg:mt-16">
          <span className="sr-only">We build AI that does it for you.</span>
          <StatementRotator />
        </div>
      </Container>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════
//  FLAGSHIP — Teleta Vox: transcript signature, then features
//  left with sticky screenshot right
// ════════════════════════════════════════════════════════════════
function Flagship() {
  const filed = [
    { kind: 'Contact', detail: 'The Hendersons — updated' },
    { kind: 'Task', detail: 'Send disclosure — today' },
    { kind: 'Reminder', detail: 'Follow up — Friday, 9:00 AM' },
    { kind: 'Note', detail: 'Showing — 424 Lakeshore Rd' },
  ]

  const features = [
    { label: 'Voice', title: 'Talk or text your CRM — no menus, no training.' },
    { label: 'Receipts', title: 'Drop receipts, get an accountant-ready spreadsheet.' },
    { label: 'Mileage', title: 'One tap, every kilometre tracked for tax time.' },
    { label: 'Files', title: 'Every document sorted, linked to the right deal, filed.' },
  ]

  return (
    <section id="flagship" className="scroll-mt-20 bg-white py-28 lg:py-36 dark:bg-mist-950">
      <Container>
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-6 text-xs font-semibold tracking-[0.04em] text-[#474747]/50 dark:text-mist-500">
              Flagship product
            </p>
            <h2 className="font-display text-4xl/[1.08] tracking-[-0.04em] text-mist-950 sm:text-5xl/[1.08] dark:text-white">
              Teleta Vox.
            </h2>
          </div>
          <p className="text-base/7 text-[#474747] lg:max-w-[280px] lg:pb-2 lg:text-right dark:text-mist-400">
            The first AI-first CRM built specifically for BC real estate agents. Talk, and it handles the rest.
          </p>
        </div>

        {/* Signature — one voice note becomes filed records */}
        <div className="mb-14 grid overflow-hidden rounded-2xl bg-[#f9f9f9] lg:mb-16 lg:grid-cols-2 dark:bg-mist-900">
          <div className="flex flex-col justify-between gap-8 border-b border-[#e2e2e2] p-8 lg:border-r lg:border-b-0 lg:p-12 dark:border-mist-800">
            <div>
              <p className="mb-6 text-[11px] font-semibold tracking-[0.04em] text-[#474747]/50 dark:text-mist-500">
                You say
              </p>
              <p className="font-display text-2xl/9 font-medium tracking-[-0.02em] text-balance text-mist-950 italic sm:text-3xl/10 dark:text-white">
                &ldquo;Just showed 424 Lakeshore to the Hendersons — send them the disclosure and remind me to follow up
                Friday.&rdquo;
              </p>
            </div>
            <p className="text-sm text-[#474747]/60 dark:text-mist-500">One voice note. Four records.</p>
          </div>

          <div className="flex flex-col justify-center p-8 lg:p-12">
            <p className="mb-4 text-[11px] font-semibold tracking-[0.04em] text-[#474747]/50 dark:text-mist-500">
              Vox files
            </p>
            <div className="flex flex-col">
              {filed.map((r, i) => (
                <div
                  key={r.kind}
                  className={`group flex items-baseline justify-between gap-4 py-4 ${
                    i < filed.length - 1 ? 'border-b border-[#e2e2e2] dark:border-mist-800' : ''
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="w-20 shrink-0 text-[11px] font-semibold tracking-[0.04em] text-[#474747]/50 dark:text-mist-500">
                      {r.kind}
                    </span>
                    <span className="text-sm text-mist-950 dark:text-white">{r.detail}</span>
                  </div>
                  <span className="shrink-0 text-[11px] font-semibold tracking-[0.04em] text-[#474747]/40 transition-colors duration-300 group-hover:text-[#474747] dark:text-mist-600 dark:group-hover:text-mist-300">
                    ✓ Filed
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Compact feature grid */}
        <div className="grid gap-x-16 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.label} className="group border-b border-[#e2e2e2] py-6 dark:border-mist-800">
              <p className="text-[11px] font-semibold tracking-[0.04em] text-[#474747]/50 transition-colors duration-300 group-hover:text-[#474747] dark:text-mist-500 dark:group-hover:text-mist-300">
                {f.label}
              </p>
              <p className="font-display mt-2 text-lg font-medium tracking-[-0.02em] text-mist-950 dark:text-white">
                {f.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <a
            href="mailto:contact@teletavox.com"
            className="inline-flex items-center justify-center gap-1 rounded-full bg-mist-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-mist-800 dark:bg-white dark:text-mist-950 dark:hover:bg-mist-200"
          >
            Get in touch
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-mist-950 transition-all duration-200 hover:gap-3 dark:text-white"
          >
            Contact →
          </a>
        </div>
      </Container>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════
//  SERVICES — custom software, consultation-first
// ════════════════════════════════════════════════════════════════
function Services() {
  const steps = [
    {
      num: '01',
      title: 'Book a consultation',
      body: "Reach out and tell us about your business. We'll sit down with you, map out the busywork, and find where software can actually move the needle.",
    },
    {
      num: '02',
      title: 'We design and build',
      body: 'A custom tool scoped to your goal — designed, built, and shipped end to end by the same team behind Teleta Vox.',
    },
    {
      num: '03',
      title: 'You get back to work',
      body: 'We hand over software that pulls its own weight, and we stick around to keep it that way as your business grows.',
    },
  ]

  return (
    <section id="services" className="scroll-mt-20 bg-[#eeeeee] py-28 lg:py-36 dark:bg-mist-900">
      <Container>
        {/* Header */}
        <div className="mb-16 flex flex-col gap-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-6 text-xs font-semibold tracking-[0.04em] text-[#474747]/50 dark:text-mist-500">
              Custom software
            </p>
            <h2 className="font-display max-w-xl text-4xl/[1.08] tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl/[1.08] dark:text-white">
              Have a goal? We&apos;ll build the software.
            </h2>
          </div>
          <p className="text-base/7 text-[#474747] lg:max-w-[280px] lg:pb-2 lg:text-right dark:text-mist-400">
            Beyond our own products, we partner with businesses to build custom AI tools that get them where
            they&apos;re going.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-8 lg:gap-12">
          {steps.map((s) => (
            <div key={s.num} className="group border-t border-[#d4d4d4] pt-6 dark:border-mist-800">
              <span className="font-display text-[3rem] leading-none font-medium tracking-[-0.06em] text-[#d4d4d4] transition-colors duration-300 group-hover:text-mist-950 dark:text-mist-800 dark:group-hover:text-white">
                {s.num}
              </span>
              <h3 className="font-display mt-5 text-xl font-medium tracking-[-0.02em] text-mist-950 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm/6 text-[#474747] dark:text-mist-400">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-4">
          <a
            href="mailto:contact@teletavox.com?subject=Consultation"
            className="inline-flex items-center justify-center gap-1 rounded-full bg-mist-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-mist-800 dark:bg-white dark:text-mist-950 dark:hover:bg-mist-200"
          >
            Book a consultation
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-mist-950 transition-all duration-200 hover:gap-3 dark:text-white"
          >
            Contact →
          </a>
        </div>
      </Container>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════
//  TEAM — staggered grid
// ════════════════════════════════════════════════════════════════
function Team() {
  const members = [
    { img: '/team/dave.png', name: 'David Alton', role: 'Co-Founder · Marketing · Realtor' },
    { img: '/team/ethan.png', name: 'Ethan Breitkreutz', role: 'Co-Founder · Software' },
    { img: '/team/av.png', name: 'Advaith Madhu', role: 'Founding Engineer' },
  ]

  return (
    <section id="team" className="scroll-mt-20 bg-[#f9f9f9] py-28 lg:py-36 dark:bg-mist-900">
      <Container>
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-20">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.04em] text-[#474747]/50 dark:text-mist-500">The team</p>
            <h2 className="font-display max-w-md text-4xl/[1.08] tracking-[-0.04em] text-balance text-mist-950 sm:text-5xl/[1.08] dark:text-white">
              Small team. Big output.
            </h2>
          </div>
          <p className="max-w-xs text-base/7 text-[#474747] sm:text-right dark:text-mist-400">
            Three people in Kelowna, building like thirty. Started with a conversation between a student and a realtor.
          </p>
        </div>

        {/* Staggered grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3">
          {members.map((m, i) => (
            <div key={m.name} className={`flex flex-col gap-4 ${i % 2 === 1 ? 'lg:mt-12' : ''}`}>
              <div
                className="aspect-[4/5] overflow-hidden rounded-2xl bg-white dark:bg-mist-800"
                style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.06)' }}
              >
                <Image src={m.img} alt={m.name} width={800} height={1000} className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="font-display text-lg font-medium tracking-[-0.02em] text-mist-950 dark:text-white">
                  {m.name}
                </p>
                <p className="mt-1 text-xs text-[#474747]/60 dark:text-mist-500">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════
//  BEHIND THE NAME — dictionary entry
// ════════════════════════════════════════════════════════════════
function NameOrigin() {
  return (
    <section className="bg-white py-28 lg:py-36 dark:bg-mist-950">
      <Container className="flex flex-col items-center text-center">
        <p className="text-xs font-semibold tracking-[0.04em] text-[#474747]/50 dark:text-mist-500">Behind the name</p>
        <p className="font-display mt-8 text-6xl tracking-[-0.04em] text-mist-950 sm:text-7xl dark:text-white">
          Teleta.
        </p>
        <p className="mt-4 text-sm text-[#474747]/60 italic dark:text-mist-500">
          from the Greek <em>τελετή</em> — an initiation; a rite
        </p>
        <p className="mt-8 max-w-xl text-base/7 text-[#474747] dark:text-mist-400">
          In ancient Greece, a <em>teleta</em> was an initiation — the rite that brought you into a new way of seeing.
          Rooted in <em>teléō</em>: to complete. Both live in what we ship — software that initiates a new way of
          working, and work that finishes itself.
        </p>
        <p className="font-display mt-10 max-w-2xl text-2xl/9 font-medium tracking-[-0.03em] text-balance text-mist-950 sm:text-3xl/10 dark:text-white">
          An initiation, built in. Completion, guaranteed.
        </p>
      </Container>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════
//  CONTACT CTA — ledger close: heading left, big email right
// ════════════════════════════════════════════════════════════════
function ContactCta() {
  return (
    <section id="contact" className="bg-[#f9f9f9] py-24 lg:py-32 dark:bg-mist-900">
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.04em] text-[#474747]/50 dark:text-mist-500">
            Get in touch
          </p>
          <h2 className="font-display text-3xl/9 font-medium tracking-[-0.03em] text-mist-950 sm:text-[2.5rem]/10 dark:text-white">
            Work with us.
          </h2>
          <p className="mt-4 max-w-md text-base/7 text-[#474747] dark:text-mist-400">
            Whether you&apos;re an agent who wants the flagship or a company that wants to build — we&apos;d love to
            talk.
          </p>
        </div>
        <div className="flex flex-col items-start gap-6">
          <a
            href="mailto:contact@teletavox.com"
            className="font-display text-2xl font-medium tracking-[-0.03em] break-all text-mist-950 underline decoration-[#e2e2e2] decoration-2 underline-offset-8 transition-colors hover:decoration-mist-950 sm:text-3xl dark:text-white dark:decoration-mist-700 dark:hover:decoration-white"
          >
            contact@teletavox.com
          </a>
          <a
            href="https://www.linkedin.com/company/teletadevelopment/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-1 rounded-full bg-mist-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-mist-800 dark:bg-white dark:text-mist-950 dark:hover:bg-mist-200"
          >
            Contact us on LinkedIn
          </a>
        </div>
      </Container>
    </section>
  )
}

// ════════════════════════════════════════════════════════════════
//  PAGE
// ════════════════════════════════════════════════════════════════
export default function Page() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Statement />
      <Flagship />
      <Services />
      <Team />
      <NameOrigin />
      <ContactCta />
    </>
  )
}
