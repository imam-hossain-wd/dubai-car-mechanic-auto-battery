import { SiteConfig } from "@/config/siteConfig";
import { getServicesNameSlug } from "@/utils/getServicesNameSlug";


export default async function sitemap(){
  const baseUrl = SiteConfig?.url || "https://www.automekcarrepairdubai.com";
  const currentDate = new Date().toISOString();

  const services = getServicesNameSlug();
  const staticPages = [
    "/",
    "/services",
    "/service-area",
    "/about-us",
    "/contact-us",
    "/projects",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const servicePages = (services || []).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages];
}