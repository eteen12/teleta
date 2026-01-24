import Image from 'next/image'

import { ButtonLinkExternal, PlainButtonLink } from '@/components/elements/button'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { HeroLeftAlignedWithPhoto } from '@/components/sections/hero-left-aligned-with-photo'
import { TeamFourColumnGrid, TeamMember } from '@/components/sections/team-four-column-grid'
import { TestimonialTwoColumnWithLargePhoto } from '@/components/sections/testimonial-two-column-with-large-photo'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithPhoto
        id="hero"
        headline="Why we built Teleta Vox"
        subheadline={
          <p>
            Teleta Vox was born from a conversation between a UBCO student and a realtor about the friction in existing
            industry tools. Following an MIT hackathon, a small team got an idea and began building and refining the
            product, with a focus on real-world usability and market readiness.
          </p>
        }
        photo={
          <Image
            src="/team/team.jpeg"
            alt=""
            width={1800}
            height={945}
            className="not-dark:bg-white/75 dark:bg-black/75"
          />
        }
      />

      {/* Testimonial */}
      <TestimonialTwoColumnWithLargePhoto
        id="testimonial"
        quote={<p>I&apos;ll be done that by monday.</p>}
        img={
          <Image
            src="/team/ahab.JPG"
            alt=""
            className="not-dark:bg-white/75 dark:bg-black/75"
            width={1400}
            height={1000}
          />
        }
        name="Ahab Masud"
        byline="Founding engineer"
      />
      {/* Team */}
      <TeamFourColumnGrid
        id="team"
        headline="Our team at Teleta Development"
        subheadline={
          <p>
            We started as a small group of developers working closely with industry professionals to build better tools
            from the ground up.
          </p>
        }
      >
        <TeamMember
          img={
            <Image
              src="/team/dave.png"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="David Alton"
          byline="Co-Founder / Marketing / Realtor"
        />
        <TeamMember
          img={
            <Image
              src="/team/ethan.png"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Ethan Breitkreutz"
          byline="Co-Founder / Software developer"
        />
        <TeamMember
          img={
            <Image
              src="/team/av.png"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Advaith Madhu"
          byline="Founding engineer"
        />
        <TeamMember
          img={
            <Image
              src="/team/ahab2.png"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={800}
              height={1000}
            />
          }
          name="Ahab Masud"
          byline="Founding engineer"
        />
      </TeamFourColumnGrid>
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Have anymore questions?"
        subheadline={
          <p>Chat to someone on our sales team, who will make promises about our roadmap that we won't keep.</p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLinkExternal href="https://www.linkedin.com/company/teletadevelopment/" size="lg">
              Contact us
            </ButtonLinkExternal>

          
          </div>
        }
      />
    </>
  )
}
