import Image from 'next/image'

import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, ButtonLinkExternal, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Screenshot } from '@/components/elements/screenshot'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        eyebrow={<AnnouncementBadge href="/about" text="Meet our team" cta="" />}
        headline="Talk, we'll handle the rest."
        subheadline={
          <p>
            Turn natural speech into notes, CRM entries, tasks, and follow-ups—without lifting a finger. Built for
            agents, by agents.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="/pricing" size="lg">
              Start free trial
            </ButtonLink>

            {/* <PlainButtonLink href="#" size="lg">
              See how it works <ArrowNarrowRightIcon />
            </PlainButtonLink> */}
          </div>
        }
        demo={
          <>
            <Screenshot className="rounded-md lg:hidden" wallpaper="blue" placement="bottom-right">
              <Image
                src="/product/mainPhoto.png"
                alt="product image"
                width={1670}
                height={1408}
                className="bg-white/75"
              />
            </Screenshot>
            <Screenshot className="rounded-lg max-lg:hidden" wallpaper="blue" placement="bottom">
              <Image
                src="/product/mainPhoto.png"
                alt="product image"
                className="bg-white/75"
                width={3440}
                height={1990}
              />
            </Screenshot>
          </>
        }
      />
      {/* Features */}
      <FeaturesTwoColumnWithDemos
        id="features"
        eyebrow="Powerful AI Assistant"
        headline="Turn conversations into organized notes, tasks, and follow-ups — automatically."
        subheadline={
          <p>
            Talk to Teleta Vox, and it logs every client interaction, updates your CRM, schedules and follows-up,
            answers your questions — all without lifting a finger.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot wallpaper="purple" placement="bottom-right">
                  <Image src="/product/ai.png" alt="product image" className="" width={1800} height={1250} />
                </Screenshot>
              }
              headline="Advanced LLM models"
              subheadline={
                <p>
                  Our AI models are fine-tuned in-house specifically for realtors, understanding client conversations,
                  property details, and workflows so you get accurate notes, tasks, and follow-ups every time.
                </p>
              }
              cta={<Link href="#">Included in our base plan</Link>}
            />
            <Feature
              demo={
                <Screenshot wallpaper="blue" placement="bottom-left">
                  <Image src="/product/tasksPage.png" alt="product image" className="" width={1800} height={1250} />
                </Screenshot>
              }
              headline="Task Follow-Up & Scheduling"
              subheadline={
                <p>
                  Teleta Vox automatically schedules follow-ups and sends emails for you, using the notes you’ve taken
                  about your clients. It understands the context of your conversations and emails, ensuring every
                  message is personalized and timely — so you never miss an opportunity.
                </p>
              }
              cta={<Link href="#">Some features in Pro</Link>}
            />
          </>
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Built for Realtors"
        headline="The AI assistant powering client interactions and deals."
        subheadline={
          <p>
            Teleta Vox helps real estate professionals stay on top of every client conversation. From solo agents to
            growing teams, it automatically logs meetings, updates your CRM, and schedules follow-ups — ensuring nothing
            slips through the cracks.
          </p>
        }
      >
        <Stat stat="Zero clicks" text="Automates note-taking, follow-ups, and CRM updates effortlessly." />
        <Stat stat="AI-powered" text="Understands client conversations and context to keep your workflow seamless." />
      </StatsWithGraph>

      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-2"
          question="Can multiple agents use the same Teleta Vox account?"
          answer="Each agent needs their own account to ensure CRM data and tasks are tracked correctly. Teleta Vox supports team accounts and makes collaboration seamless."
        />
        <Faq
          id="faq-3"
          question="How does the AI understand my clients and conversations?"
          answer="Teleta Vox uses in-house tuned AI models designed specifically for realtors. It can extract names, property info, client preferences, and schedule follow-ups automatically."
        />
        <Faq
          id="faq-4"
          question="Will Teleta Vox replace my email or calendar?"
          answer="No, it works alongside your existing email and calendar. It reads your messages and schedules follow-ups automatically, keeping your workflow streamlined."
        />
        <Faq
          id="faq-5"
          question="Is my client data secure?"
          answer="Absolutely. All data is encrypted in transit and at rest, and Teleta Vox only accesses information needed to provide CRM automation. We never share your data with third parties."
        />
        <Faq
          id="faq-6"
          question="Can I customize follow-up messages?"
          answer="Yes! Teleta Vox lets you set templates and personalize messages so every email matches your style and tone."
        />
        <Faq id="faq-7" question="When will the product be available" answer="Aiming for spring 2026!" />
      </FAQsTwoColumnAccordion>

      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="Pricing to fit your needs."
        plans={
          <>
            <Plan
              name="Solo"
              price="$30"
              period="/mo"
              subheadline={<p>Everything you need to stay organized—without the admin.</p>}
              features={['Voice to CRM/tasks', 'Task follow up & scheduling', 'Unlimited voice interactions']}
              cta={
                <SoftButtonLink href="/pricing" size="lg">
                  Buy now
                </SoftButtonLink>
              }
            />

            <Plan
              name="Pro"
              price="$39"
              period="/mo"
              subheadline={<p>Built for agents closing deals every month.</p>}
              badge="Most popular"
              features={[
                'Voice to CRM/tasks',
                'Task follow up & scheduling',
                'Calendar + email sync',
                'Context-aware follow-ups from email conversations',
                'CRM insights',
              ]}
              cta={
                <ButtonLink href="/pricing" size="lg">
                  Start free trial
                </ButtonLink>
              }
            />

            <Plan
              name="Teams"
              price="$320"
              period="/mo"
              subheadline={<p>Dedicated support and infrastructure for your company.</p>}
              features={['Everything in Pro', 'Multiple agents under 1 account', 'Max 10 agents']}
              cta={
                <SoftButtonLink href="/pricing" size="lg">
                  Buy now
                </SoftButtonLink>
              }
            />
          </>
        }
      />
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Save time, focus on your clients, not admin"
        subheadline={
          <p>
            Let Teleta Vox handle your notes, follow-ups, and CRM updates automatically. Spend less time on manual work
            and more time building relationships and closing deals.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLinkExternal href="https://www.linkedin.com/company/teletadevelopment/" size="lg">
              Contact us
            </ButtonLinkExternal>

            <PlainButtonLink href="/pricing" size="lg">
              Start free trial <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
