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
  title: 'Teleta Development | Canadian AI Tech Solutions',
  description:
    'Canadian AI tech company building software that does the work for you. Home of Teleta Vox, the first AI-first CRM built for BC real estate agents.',

  openGraph: {
    title: 'Teleta Development | Canadian AI Tech Solutions',
    description:
      'Canadian AI tech company building software that does the work for you. Home of Teleta Vox, the first AI-first CRM built for BC real estate agents.',
    url: 'https://teleta.dev/',
    siteName: 'Teleta Development',
    locale: 'en_US',
    type: 'website',
    images: 'https://teletadevelopment.ca/product/mainPhoto.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Teleta" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
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
                <NavbarLink href="/#flagship">Teleta Vox</NavbarLink>
                <NavbarLink href="/#team">Team</NavbarLink>
              </>
            }
            logo={
              <NavbarLogo href="/">
                <span className="font-display text-2xl font-medium tracking-[-0.04em] text-mist-950 dark:text-white">
                  Teleta.
                </span>
              </NavbarLogo>
            }
            actions={
              <>
                {/* <PlainButtonLink href="#" className="max-sm:hidden">
                  Log in
                </PlainButtonLink> */}
                <a
                  href="https://www.linkedin.com/company/teletadevelopment/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#e2e2e2] px-4 py-2 text-sm/7 font-medium text-mist-950 transition-colors hover:border-mist-950 dark:border-mist-800 dark:text-white dark:hover:border-white"
                >
                  Contact us
                </a>
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
                  <FooterLink href="/#flagship">Teleta Vox</FooterLink>
                </FooterCategory>
                <FooterCategory title="Company">
                  {/* <FooterLink href="/about">About</FooterLink> */}
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
            fineprint="© 2026 Teleta Development · Canadian AI tech solutions · Kelowna, BC"
          />
        </>
      </body>
    </html>
  )
}
