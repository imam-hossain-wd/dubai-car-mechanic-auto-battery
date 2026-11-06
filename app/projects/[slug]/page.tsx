
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteConfig } from "@/config/siteConfig";
import { projectData } from "@/data/ProjectData";
import ProjectDetailPage from "@/components/pages/ProjectPage/ProjectDetailPage";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* ============================================================
   STATIC PARAMS
============================================================ */

export function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}


export default async function ProjectDetail({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = projectData.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
