import { SiteConfig } from "@/config/siteConfig";

export const siteMetadata = {
  // 1. Home Page (/) - Core Brand & Main Service Hub
  home: {
    title: `24/7 Mobile Car Repair & Auto Battery Service Dubai | ${SiteConfig.brandName}`,
    description: `${SiteConfig.description} Call ${SiteConfig.displayNumber} for 10-30 min doorstep arrival.`,
    verification: {
      google: "01i1sA77rcQi6yCJMlnwo5S5gZ8UwNqNoh0W2y_-uic",
    },
    alternates: {
      canonical: SiteConfig.url,
    },
    openGraph: {
      title: `24/7 Doorstep Car Repair & Battery Service Dubai | ${SiteConfig.brandName}`,
      description: `Dubai's premier 24/7 mobile mechanic service. On-site computer diagnostics, battery replacement, AC repair, and instant mechanical fixes delivered anywhere in Dubai within 10–30 minutes. Zero towing needed.`,
      url: SiteConfig.url,
      siteName: SiteConfig.brandName,
      images: [
        {
          url: `${SiteConfig.url}${SiteConfig.ogImage}`,
          width: 1200,
          height: 630,
          alt: `24/7 Emergency Mobile Car Repair Dubai - ${SiteConfig.brandName}`,
        },
      ],
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `24/7 Mobile Car Repair Dubai | ${SiteConfig.responseTime} Arrival | ${SiteConfig.brandName}`,
      description: `Emergency roadside assistance and mobile mechanics anywhere in Dubai in ${SiteConfig.responseTime}. Upfront pricing & genuine spare parts. Call ${SiteConfig.displayNumber} now.`,
      images: [`${SiteConfig.url}${SiteConfig.ogImage}`],
    },
  },

  // 2. Services Main Hub (/services) - Transactional Intent Cluster
  services: {
    title: `Mobile Car Repair & Battery Services Dubai | On-Site Auto Mechanics 24/7`,
    description: `Explore 19+ mobile car repair services across Dubai — battery replacement, computer diagnostics, starter motor, alternator & AC repair. Rapid ${SiteConfig.responseTime} arrival.`,
    alternates: {
      canonical: `${SiteConfig.url}/services`,
    },
    openGraph: {
      title: `Certified On-Site Mobile Auto Repair & Diagnostic Services in Dubai | ${SiteConfig.brandName}`,
      description: `Explore fully equipped mobile workshop services in Dubai. Certified mechanics available round-the-clock for battery, electrical, engine, AC, and roadside repairs.`,
      url: `${SiteConfig.url}/services`,
      siteName: SiteConfig.brandName,
      images: [
        { 
          url: `${SiteConfig.url}${SiteConfig.ogImage}`, 
          width: 1200, 
          height: 630,
          alt: `Mobile Auto Repair Services Dubai - ${SiteConfig.brandName}`
        }
      ],
      type: "website",
    },
  },

  // 3. Area We Serve (/area-we-serve) - Hyper-Local GEO Footprint
  areaWeServe: {
    title: `Mobile Mechanic Service Areas in Dubai | 24/7 Rapid Doorstep Dispatch`,
    description: `24/7 mobile car repair covering 20+ Dubai communities: Al Barari, Majan, Silicon Oasis, Arabian Ranches, Sports City, Motor City & more. Call ${SiteConfig.displayNumber}.`,
    alternates: {
      canonical: `${SiteConfig.url}/area-we-serve`,
    },
    openGraph: {
      title: `Fastest On-Site Mobile Auto Repair Service Across 20+ Dubai Neighborhoods`,
      description: `Strategically deployed mobile mechanic vans dispatched from ${SiteConfig.location} covering Dubailand, Silicon Oasis, Downtown, JVC, and major expressways 24/7.`,
      url: `${SiteConfig.url}/area-we-serve`,
      siteName: SiteConfig.brandName,
      images: [
        { 
          url: `${SiteConfig.url}${SiteConfig.ogImage}`, 
          width: 1200, 
          height: 630,
          alt: `Dubai Service Areas Coverage Map - ${SiteConfig.brandName}`
        }
      ],
      type: "website",
    },
  },

  // 4. Projects & Gallery (/projects) - Visual Proof & Trust Signals
  projects: {
    title: `Mobile Car Repair Projects & Work Proof Dubai | ${SiteConfig.brandName}`,
    description: `Browse verified photos of our mobile workshop fleet in action across Dubai: on-spot battery replacements, computer diagnostic scans, AC gas refills, and emergency roadside rescues.`,
    alternates: {
      canonical: `${SiteConfig.url}/projects`,
    },
    openGraph: {
      title: `Real On-Site Mobile Auto Repair Photo Projects Dubai | ${SiteConfig.brandName}`,
      description: `Transparent visual evidence of certified mechanics executing roadside repair services and routine car maintenance directly at client locations in Dubai.`,
      url: `${SiteConfig.url}/projects`,
      siteName: SiteConfig.brandName,
      images: [
        { 
          url: `${SiteConfig.url}${SiteConfig.ogImage}`, 
          width: 1200, 
          height: 630,
          alt: `On-site Car Mechanics Gallery - ${SiteConfig.brandName}`
        }
      ],
      type: "website",
    },
  },

  // 5. Contact Us (/contact) - Immediate Conversion & Call Action
  contact: {
    title: `Contact 24/7 Mobile Mechanic Dubai | Call ${SiteConfig.displayNumber}`,
    description: `Need emergency car repair or battery replacement in Dubai? Contact our dispatch center 24/7 via call or WhatsApp at ${SiteConfig.displayNumber}. On-site response in ${SiteConfig.responseTime}!`,
    alternates: {
      canonical: `${SiteConfig.url}/contact`,
    },
    openGraph: {
      title: `24/7 Emergency Mobile Mechanic Contact Dubai | ${SiteConfig.brandName}`,
      description: `Get instant emergency assistance from certified mobile mechanics in Dubai. Contact us now for ${SiteConfig.responseTime} arrival, upfront pricing, and guaranteed work.`,
      url: `${SiteConfig.url}/contact`,
      siteName: SiteConfig.brandName,
      images: [
        { 
          url: `${SiteConfig.url}${SiteConfig.ogImage}`, 
          width: 1200, 
          height: 630,
          alt: `Contact 24/7 Mobile Mechanic Service Dubai`
        }
      ],
      type: "website",
    },
  },

  // 6. About Us (/about) - E-E-A-T & Authority Building
  about: {
    title: `About ${SiteConfig.brandName} | Trusted 24/7 Mobile Mechanics Dubai`,
    description: `Operating since ${SiteConfig.foundedYear}, ${SiteConfig.brandName} delivers 24/7 mobile auto fixes across Dubai. ASE-certified mechanics, genuine OEM parts, and guaranteed workmanship.`,
    alternates: {
      canonical: `${SiteConfig.url}/about`,
    },
    openGraph: {
      title: `About ${SiteConfig.brandName} - Dubai's Trusted 24/7 On-Site Auto Repair Service`,
      description: `Discover how ${SiteConfig.brandName} redefined roadside assistance in Dubai with ${SiteConfig.responseTime} mobile mechanic response, certified technicians, transparent pricing, and service warranties.`,
      url: `${SiteConfig.url}/about`,
      siteName: SiteConfig.brandName,
      images: [
        { 
          url: `${SiteConfig.url}${SiteConfig.ogImage}`, 
          width: 1200, 
          height: 630,
          alt: `About ${SiteConfig.brandName}`
        }
      ],
      type: "website",
    },
  },

  // 7. Privacy Policy (/privacy)
  privacy: {
    title: `Privacy Policy | ${SiteConfig.brandName}`,
    description: `Official privacy policy for ${SiteConfig.brandName}. Learn how we protect customer data, GPS location dispatch data, and secure payment processing.`,
    alternates: {
      canonical: `${SiteConfig.url}/privacy`,
    },
    openGraph: {
      title: `Privacy Policy | ${SiteConfig.brandName}`,
      description: `Data governance, customer privacy standards, and dispatch location protocols for ${SiteConfig.brandName}.`,
      url: `${SiteConfig.url}/privacy`,
      siteName: SiteConfig.brandName,
      type: "website",
    },
  },

  // 8. Terms of Service (/terms)
  terms: {
    title: `Terms of Service & Warranty Policy | ${SiteConfig.brandName}`,
    description: `Review service agreements, 12-24 month labor warranties, transparent pricing guarantees, and emergency mobile mechanic dispatch policies for ${SiteConfig.brandName}.`,
    alternates: {
      canonical: `${SiteConfig.url}/terms`,
    },
    openGraph: {
      title: `Terms of Service & Repair Warranty | ${SiteConfig.brandName}`,
      description: `Official terms of service, repair warranties, and transparent pricing standards for ${SiteConfig.brandName} mobile auto services in Dubai.`,
      url: `${SiteConfig.url}/terms`,
      siteName: SiteConfig.brandName,
      type: "website",
    },
  },
};