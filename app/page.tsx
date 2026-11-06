import HomePage from "@/components/pages/HomePage/HomePage";
import { siteMetadata } from "@/seo/metadata/metadata";
import { Metadata } from "next";

export const metadata: Metadata = siteMetadata.home;
export default function Home() {
  return <HomePage />
}
