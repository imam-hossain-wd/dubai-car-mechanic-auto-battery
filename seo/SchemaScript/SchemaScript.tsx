import { SiteConfig } from "@/config/siteConfig";
import { getServicesNameSlug } from "@/utils/getServicesNameSlug";


export default function SchemaScript() {
  const services = getServicesNameSlug();

  // Helper to ensure fully qualified image URLs
  const getImageUrl = (imagePath: string) => {
    if (!imagePath || imagePath === "/") return `${SiteConfig.url}/ogImage.png`;
    return imagePath.startsWith("http")
      ? imagePath
      : `${SiteConfig.url}${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["AutoRepair", "AutomotiveBusiness", "EmergencyService", "LocalBusiness"],
        "@id": `${SiteConfig.url}/#organization`,
        "name": SiteConfig.brandName,
        "url": SiteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "@id": `${SiteConfig.url}/#logo`,
          "url": getImageUrl(SiteConfig.ogImage),
          "contentUrl": getImageUrl(SiteConfig.ogImage),
          "caption": SiteConfig.brandName,
        },
        "image": {
          "@type": "ImageObject",
          "url": getImageUrl(SiteConfig.ogImage),
        },
        "description": SiteConfig.description,
        "telephone": SiteConfig.phoneNumber || SiteConfig.displayNumber,
        "email": SiteConfig.email,
        "priceRange": "AED",
        "currenciesAccepted": "AED",
        "paymentAccepted": "Cash, Credit Card, Debit Card, Online Transfer, Apple Pay",
        "foundingDate": String(SiteConfig.foundedYear || "2020"),
        "founder": {
          "@type": "Person",
          "name": SiteConfig.authorName.trim(),
        },
        "hasMap": SiteConfig.GMB?.mapsLink,
        "sameAs": SiteConfig.socialLinks
          .map((s) => s.href)
          .filter(
            (href) =>
              href &&
              href.trim().length > 0 &&
              !href.endsWith(".com/") &&
              href !== "https://www.youtube.com"
          ),
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SiteConfig.location,
          "addressLocality": SiteConfig.city,
          "addressRegion": SiteConfig.city,
          "postalCode": "00000",
          "addressCountry": SiteConfig.country === "UAE" ? "AE" : SiteConfig.country,
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": parseFloat(SiteConfig.GMB.latitude),
          "longitude": parseFloat(SiteConfig.GMB.longitude),
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": SiteConfig.phoneNumber || SiteConfig.displayNumber,
            "contactType": "customer service",
            "contactOption": "TollFree",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"],
          },
          {
            "@type": "ContactPoint",
            "telephone": SiteConfig.phoneNumber || SiteConfig.displayNumber,
            "contactType": "emergency",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"],
          },
        ],
        "openingHoursSpecification": SiteConfig.operatingHours.map((item) => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": `https://schema.org/${item.day}`,
          "opens": "00:00",
          "closes": "23:59",
        })),
        "areaServed": [
          {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": parseFloat(SiteConfig.GMB.latitude),
              "longitude": parseFloat(SiteConfig.GMB.longitude),
            },
            "geoRadius": "35000",
          },
          {
            "@type": "City",
            "name": SiteConfig.city,
            "sameAs": "https://en.wikipedia.org/wiki/Dubai",
          },
          ...SiteConfig.serviceAreas.map((area) => ({
            "@type": "AdministrativeArea",
            "name": `${area.name}, ${SiteConfig.city}`,
          })),
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "24/7 Doorstep Mobile Car Repair & Battery Services",
          "itemListElement": (services || []).map((service, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "itemOffered": {
              "@type": "Service",
              "@id": `${SiteConfig.url}/services/${service.slug}#service`,
              "name": service.name,
              "url": `${SiteConfig.url}/services/${service.slug}`,
              "description": `Professional 24/7 ${service.name} across ${SiteConfig.city} delivered directly to your location in ${SiteConfig.responseTime} by ${SiteConfig.brandName}.`,
              "provider": {
                "@id": `${SiteConfig.url}/#organization`,
              },
              "areaServed": {
                "@type": "City",
                "name": SiteConfig.city,
              },
              "priceCurrency": "AED",
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SiteConfig.url}/#website`,
        "url": SiteConfig.url,
        "name": SiteConfig.brandName,
        "description": SiteConfig.description,
        "publisher": {
          "@id": `${SiteConfig.url}/#organization`,
        },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${SiteConfig.url}/services?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}