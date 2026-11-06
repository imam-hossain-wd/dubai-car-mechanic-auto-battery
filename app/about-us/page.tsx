import AboutPage from '@/components/pages/AboutPage/AboutPage'
import React from 'react'
import { Metadata } from "next";
import { siteMetadata } from '@/seo/metadata/metadata';

export const metadata: Metadata = siteMetadata.about;
export default function About () {
  return <AboutPage />
}
