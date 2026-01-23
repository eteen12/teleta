import Image from 'next/image'

import { ButtonLinkExternal } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Teleta Development',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <>
          <NavbarWithLinksActionsAndCenteredLogo
            id="navbar"
            links={
              <>
                <NavbarLink href="/pricing">Pricing</NavbarLink>
                <NavbarLink href="/about">About</NavbarLink>
                {/* <NavbarLink href="#">Docs</NavbarLink> */}
              </>
            }
            logo={
              <NavbarLogo href="/">
                <Image src="/logo/teleta-logo-white-transparent.png" alt="teleta" className="" width={85} height={28} />
              </NavbarLogo>
            }
            actions={
              <>
                {/* <PlainButtonLink href="#" className="max-sm:hidden">
                  Log in
                </PlainButtonLink> */}
                <ButtonLinkExternal href="https://www.linkedin.com/company/teletadevelopment/" size="lg">
                  Contact us
                </ButtonLinkExternal>
              </>
            }
          />

          <Main>{children}</Main>

          <FooterWithNewsletterFormCategoriesAndSocialIcons
            id="footer"
            cta={
              <NewsletterForm
                headline="Stay in the loop"
                subheadline={<p>By the way entering your email does nothing.</p>}
                action="#"
              />
            }
            links={
              <>
                <FooterCategory title="Product">
                  <FooterLink href="/pricing">Pricing</FooterLink>
                </FooterCategory>
                <FooterCategory title="Company">
                  <FooterLink href="/about">About</FooterLink>
                  <li className={'text-mist-700 dark:text-mist-400'}>
                    <a href="https://linkedin.com/company/teletadevelopment" target="blank">
                      Linkedin
                    </a>
                  </li>
                </FooterCategory>
                <FooterCategory title="Resources">
                  <li className={'text-mist-700 dark:text-mist-400'}>
                    <a href="https://linkedin.com/company/teletadevelopment" target="blank">
                      Contact
                    </a>
                  </li>
                </FooterCategory>
                <FooterCategory title="Legal"></FooterCategory>
              </>
            }
            fineprint="© 2025 Teleta Development"
          />
        </>
      </body>
    </html>
  )
}
