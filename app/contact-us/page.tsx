import ContactPage from '@/components/pages/ContactPage/ContactPage'
import React from 'react'
import { Metadata } from "next";
import { siteMetadata } from '@/seo/metadata/metadata';

export const metadata: Metadata = siteMetadata.contact;
export default function page() {
  return <ContactPage />
}
