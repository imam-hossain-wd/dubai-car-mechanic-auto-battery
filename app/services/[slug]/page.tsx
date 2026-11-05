// app/(marketing)/services/[slug]/page.tsx

import { services } from "@/data/services/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteConfig } from "@/config/siteConfig";
import ServiceDetailPage from "@/components/pages/ServicePage/ServiceDetailPage";

/* ============ Dynamic Metadata ============ */
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const service = services?.find((s) => s?.slug === slug);

    if (!service) {
        return {
            title: "Service Not Found | Go Battery Car Repair Dubai",
            description: "The requested service could not be found.",
        };
    }

    return {
        title: service.metaTitle || `${service.name} in ${SiteConfig.city} | ${SiteConfig.brandName}`,
        description:
            service.metaDescription ||
            `${service.name} in ${SiteConfig.city}. ${service.intro?.content?.slice(0, 140)}`,
        alternates: {
            canonical: `${SiteConfig.url}/services/${service.slug}`,
        },
        openGraph: {
            title: service.metaTitle,
            description: service.metaDescription,
            url: `${SiteConfig.url}/services/${service.slug}`,
            type: "website",
        },
    };
}

/* ============ Dynamic JSON-LD Schema ============ */
function generateServiceSchema(service: (typeof services)[number]) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.name,
        description: service.metaDescription || service.intro?.content,
        provider: {
            "@type": "AutoRepair",
            name: SiteConfig.brandName,
            telephone: SiteConfig.phoneNumber,
            url: SiteConfig.url,
            address: {
                "@type": "PostalAddress",
                addressLocality: SiteConfig.location,
                addressRegion: SiteConfig.city,
                addressCountry: SiteConfig.country,
            },
        },
        areaServed: SiteConfig.serviceAreas.map((a) => a.name),
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "AED",
        },
    };
}

/* ============ Page Component ============ */
export default async function ServiceDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = services.find((s) => s?.slug === slug);
    if (!service) return notFound();

    const schema = generateServiceSchema(service);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <ServiceDetailPage service={service} slug={slug} />
        </>
    );
}