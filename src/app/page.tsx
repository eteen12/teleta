import Image from 'next/image'

import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'

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
            <ButtonLink href="#" size="lg">
              Start free trial
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              See how it works <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        demo={
          <>
            <Screenshot className="rounded-md lg:hidden" wallpaper="blue" placement="bottom-right">
              <Image
                src="/product/tasksPage.png"
                alt="product image"
                width={1670}
                height={1408}
                className="bg-white/75"
              />
            </Screenshot>
            <Screenshot className="rounded-lg max-lg:hidden" wallpaper="blue" placement="bottom">
              <Image
                src="/product/tasksPage.png"
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
                  <Image src="/product/tasksPage.png" alt="product image" className="" width={1800} height={1250} />
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
        eyebrow="Built for scale"
        headline="The inbox powering customer conversations everywhere."
        subheadline={
          <p>
            Oatmeal helps teams deliver personal, organized, and fast customer support across the world. From small
            startups to enterprise teams, we process millions of messages each month — using a massive network of low
            wage workers stationed around the globe.
          </p>
        }
      >
        <Stat stat="2M+" text="Emails manually processed every week across thousands of teams." />
        <Stat stat="99.98%" text="Uptime — because your customers never stop complaining." />
      </StatsWithGraph>
      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
        headline="What our customers are saying"
        subheadline={<p>We've given these customers a significant discount in exchange for their honest reviews.</p>}
      >
        <Testimonial
          quote={
            <p>
              Oatmeal has completely transformed our customer support operations. To be fair, we weren't doing any
              customer support at all so the bar was pretty low.
            </p>
          }
          img={
            <Image
              src="/img/avatars/10-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Jordan Rogers"
          byline="Founder at Anomaly"
        />
        <Testimonial
          quote={
            <p>
              We use Oatmeal's automation features to make cancellation requests disappear into a black hole, improving
              our retention rates by over 300%.
            </p>
          }
          img={
            <Image
              src="/img/avatars/15-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Lynn Marshall"
          byline="Founder at Pine Labs"
        />
        <Testimonial
          quote={
            <p>
              I've been using the spare time that Oatmeal has freed up to work not just one, but two other jobs, all
              while hitting my core KPIs. My bosses have no idea.
            </p>
          }
          img={
            <Image
              src="/img/avatars/13-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Rajat Singh"
          byline="Head of Support at Concise"
        />
        <Testimonial
          quote={
            <p>
              Oatmeal has given us key insights into how much our customers absolutely hate using our product and how we
              can improve it to stop them from leaving us.
            </p>
          }
          img={
            <Image
              src="/img/avatars/12-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="John Walters"
          byline="CPO at Orbital"
        />
        <Testimonial
          quote={
            <p>
              As a solo founder, Oatmeal has been a lifesaver. It makes it look like Looply is an actual company with
              multiple employees, when in reality it's just me and an AI.
            </p>
          }
          img={
            <Image
              src="/img/avatars/11-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Noah Gold"
          byline="CEO at Looply"
        />
        <Testimonial
          quote={
            <p>
              Thanks to Oatmeal, we've managed to cut our support costs in half by laying off dozens of employees, while
              still improving response times and customer satisfaction.
            </p>
          }
          img={
            <Image
              src="/img/avatars/14-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Mark Levinson"
          byline="COO at Quirk"
        />
      </TestimonialThreeColumnGrid>
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="Do I need a credit card to start the free trial?"
          answer="Yes, but don't worry, you won't be charged until the trial period is over. We won't send you an email reminding you when this happens because we are really hoping you'll forget and we can keep charging you until your cards expires"
        />
        <Faq
          id="faq-2"
          question="Can my whole team use the same inbox?"
          answer="Yes, the more the merrier! Oatmeal works best when your entire company has access. We will charge you per additional seat, but we won't tell you about this until you get your invoice."
        />
        <Faq
          id="faq-3"
          question="Is the AI agent actually a bunch of people in India?"
          answer="Not just India! We have people in lots of countries around the world pretending to be an AI, including some that are currently under sanctions, so we can't legally mention them here."
        />
        <Faq
          id="faq-4"
          question="Does Oatmeal replace my email client?"
          answer="Absolutely. The idea is that we transition you away from email entirely, so you become completely dependent on our service. Like a parasite living off a host."
        />
      </FAQsTwoColumnAccordion>
      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="Pricing to fit your business needs."
        plans={
          <>
            <Plan
              name="Starter"
              price="$12"
              period="/mo"
              subheadline={<p>Small teams getting started with shared inboxes</p>}
              features={[
                'Shared inbox for up to 2 mailboxes',
                'Tagging & assignment',
                'Private notes',
                'Automatic replies',
                'Email support',
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
                </SoftButtonLink>
              }
            />
            <Plan
              name="Growth"
              price="$49"
              period="/mo"
              subheadline={<p>Growing teams needing collaboration and insights</p>}
              badge="Most popular"
              features={[
                'Everything in Starter',
                'Inbox Agent',
                'Unlimited mailboxes',
                'Collision detection',
                'Snippets and templates',
                'Reporting dashboard',
                'Slack integration',
              ]}
              cta={
                <ButtonLink href="#" size="lg">
                  Start free trial
                </ButtonLink>
              }
            />
            <Plan
              name="Pro"
              price="$299"
              period="/mo"
              subheadline={<p>Support-focused organizations and larger teams</p>}
              features={[
                'Everything in Growth',
                'Custom roles & permissions',
                'Automation engine',
                'API access',
                'SLA tracking',
                'SSO support',
                'SOC 2 compliance',
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
                </SoftButtonLink>
              }
            />
          </>
        }
      />
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Ready to make customer support feel simple again?"
        subheadline={
          <p>
            Join hundreds of teams using Oatmeal to deliver faster, friendlier email support — using a massive network
            of low wage workers stationed around the globe
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Start free trial
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              Book a demo <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
