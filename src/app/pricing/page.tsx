import Image from 'next/image'

import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimpleCentered } from '@/components/sections/call-to-action-simple-centered'
import { FAQsAccordion, Faq } from '@/components/sections/faqs-accordion'
import { PlanComparisonTable } from '@/components/sections/plan-comparison-table'
import { Plan, PricingHeroMultiTier } from '@/components/sections/pricing-hero-multi-tier'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'

// Your new data source
const tiersData = [
  {
    name: 'Solo',
    price: { monthly: '$30', annually: '$330' },
    description: 'Everything you need to stay organized—without the admin.',
    features: ['Voice to CRM/tasks', 'Task follow up & scheduling', 'Unlimited voice interactions'],
    featured: false,
  },
  {
    name: 'Pro',
    price: { monthly: '$39', annually: '$445' },
    description: 'Built for agents closing deals every month.',
    features: [
      'Voice to CRM/tasks',
      'Task follow up & scheduling',
      'Calendar + email sync',
      'Context-aware follow-ups from email conversations',
      'CRM insights',
    ],
    featured: true,
  },
  {
    name: 'Teams',
    price: { monthly: '$320', annually: '$3700' },
    description: 'Dedicated support and infrastructure for your company.',
    features: ['Everything in pro', 'Multiple agents under 1 account', 'Max 10 agents'],
    featured: false,
  },
]

function plans(option: string) {
  // Helper to get the correct price based on the toggle state
  const getPrice = (tier: (typeof tiersData)[0]) => (option === 'Monthly' ? tier.price.monthly : tier.price.annually)

  // Helper to determine the period text
  const getPeriod = () => (option === 'Monthly' ? '/month' : '/year')

  return (
    <>
      {tiersData.map((tier) => (
        <Plan
          key={tier.name}
          name={tier.name}
          price={getPrice(tier)}
          period={getPeriod()}
          subheadline={<p>{tier.description}</p>}
          badge={tier.featured ? 'Most Popular' : undefined}
          features={tier.features}
          cta={
            // Use the solid ButtonLink for the featured plan, Soft for others
            tier.featured ? (
              <ButtonLink href="#" size="lg">
                Start free trial
              </ButtonLink>
            ) : (
              <SoftButtonLink href="#" size="lg">
               Buy now
              </SoftButtonLink>
            )
          }
        />
      ))}
    </>
  )
}

export default function Page() {
  return (
    <>
      {/* Hero */}
      <PricingHeroMultiTier
        id="pricing"
        headline="Purchasing not yet available"
        subheadline={
          <p>
            coming soon!
          </p>
        }
        options={['Monthly', 'Yearly']}
        plans={{ Monthly: plans('Monthly'), Yearly: plans('Yearly') }}
      
      />
      {/* Plan Comparison Table */}
      <PlanComparisonTable
        id="pricing"
        plans={['Solo', 'Pro', 'Teams']}
        features={[
          {
            title: 'Core Features',
            features: [
              {
                name: 'Voice to CRM/tasks',
                value: { Solo: true, Pro: true, Teams: true },
              },
              {
                name: 'Task follow up & scheduling',
                value: { Solo: true, Pro: true, Teams: true },
              },
              {
                name: 'Unlimited voice interactions',
                value: { Solo: true, Pro: true, Teams: true },
              },
            ],
          },
          {
            title: 'Intelligence & Sync',
            features: [
              {
                name: 'Calendar + email sync',
                value: { Solo: false, Pro: true, Teams: true },
              },
              {
                name: 'Context-aware follow-ups',
                value: { Solo: false, Pro: true, Teams: true },
              },
              {
                name: 'CRM insights',
                value: { Solo: false, Pro: true, Teams: true },
              },
            ],
          },
          {
            title: 'Team & Scale',
            features: [
              {
                name: 'Multiple agents',
                value: { Solo: false, Pro: false, Teams: true },
              },
              {
                name: 'Max Agents',
                value: { Solo: '1', Pro: '1', Teams: '10' },
              },
            ],
          },
        ]}
      />
     
     
      {/* Call To Action */}
      <CallToActionSimpleCentered
        id="call-to-action"
        headline="Ready to streamline your workflow?"
        subheadline={<p>Chat to our sales team or book a demo to see how we can help you close more deals.</p>}
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Chat with us
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
  