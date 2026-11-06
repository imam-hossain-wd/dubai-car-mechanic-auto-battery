import ServicesPage from '@/components/pages/ServicePage/ServicePage'
import { siteMetadata } from '@/seo/metadata/metadata';
import { Metadata } from "next";

export const metadata: Metadata = siteMetadata.services;
export default function Service() {
  return <ServicesPage />
}
