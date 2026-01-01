import './globals.css'
import realtorConfig from '../src/data/realtor.json'

const { realtor } = realtorConfig

// Build SEO-friendly keywords from service areas
const serviceAreasList = realtor.serviceAreas.join(', ')
const keywords = `home buyer Richmond, first time home buyer Richmond, homes for sale Richmond, Richmond real estate agent, buyer's agent Richmond, ${realtor.serviceAreas.map(area => `homes for sale ${area}, ${area} real estate`).join(', ')}, Richmond VA real estate, home buying guide Richmond, how to buy a house Richmond, affordable homes Richmond, starter homes Richmond, home buyer consultation, James Strum, The Strum Group, Long & Foster, real estate agent, home buying guide, real estate consultation, home buyer strategy`

export const metadata = {
  title: 'Home Buyer Smart Profile | James Strum | Richmond, VA',
  description: 'Expert home buyer consultation for Richmond area. James Strum helps you find homes, get pre-approved, and craft winning offers. Clear steps. Fast replies. Local guidance.',
  keywords: keywords,
  authors: [{ name: realtor.fullName }],
  openGraph: {
    type: 'website',
    url: 'https://homebuyerconsultation.netlify.app/',
    title: 'Home Buyer Smart Profile | James Strum | Richmond, VA',
    description: 'Expert home buyer consultation for Richmond area. James Strum helps you find homes, get pre-approved, and craft winning offers. Clear steps. Fast replies. Local guidance.',
    images: [realtor.assets.headshotUrl],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home Buyer Smart Profile | James Strum | Richmond, VA',
    description: 'Expert home buyer consultation for Richmond area. James Strum helps you find homes, get pre-approved, and craft winning offers. Clear steps. Fast replies. Local guidance.',
    images: [realtor.assets.headshotUrl],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": realtor.fullName,
              "jobTitle": realtor.title,
              "description": `Top real estate agent specializing in home buyers (first-time and repeat buyers) in Richmond, Virginia and surrounding areas`,
              "image": realtor.assets.headshotUrl,
              "telephone": realtor.phone,
              "email": realtor.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5706 Grove Avenue",
                "addressLocality": "Richmond",
                "addressRegion": "VA",
                "postalCode": "23226",
                "addressCountry": "US"
              },
              "areaServed": realtor.serviceAreas.map(area => ({
                "@type": "City",
                "name": area,
                "containedIn": {
                  "@type": "State",
                  "name": "Virginia"
                }
              })),
              "serviceType": "Home Buyer Consultation, First Time Home Buyer Services, Off-Market Home Access, Pre-Approval Assistance",
              "memberOf": {
                "@type": "Organization",
                "name": realtor.team
              },
              "worksFor": {
                "@type": "Organization",
                "name": realtor.brokerage
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}


