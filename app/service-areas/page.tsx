import ServiceAreasPage from '@/components/pages/ServiceAreaPage/ServiceAreaPage'
import React from 'react'
import { Metadata } from "next";
import { siteMetadata } from '@/seo/metadata/metadata';

export const metadata: Metadata = siteMetadata.areaWeServe;
export default function ServiceAreas() {
  return <ServiceAreasPage />
}
