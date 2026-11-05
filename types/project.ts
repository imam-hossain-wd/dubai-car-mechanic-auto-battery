export interface ProjectSEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface ProjectClientOverview {
  carModel: string;
  issueReported: string;
  responseTimeMinutes: number;
  completionTimeHours: string;
}

export interface ProjectFAQ {
  question: string;
  answer: string;
}

/** Full project shape used across the app */
export interface Project {
  id?: string;
  slug?: string;
  title: string;
  service: string;
  category?: string;
  area: string;
 description?: string;
  image?: string | any;
  seo?: ProjectSEO;
  clientOverview?: ProjectClientOverview;
  problemAnalysis?: string;
  diagnosticSteps?: string[];
  solutionDetails?: string;
  partsReplaced?: string[];
  resultsSummary?: string;
  faqs?: ProjectFAQ[];
}

/** Full item — all fields required (used for source data) */
export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  service: string;
  category: string;
  area: string;
  image: any;
  seo: ProjectSEO;
  clientOverview: ProjectClientOverview;
  problemAnalysis: string;
  diagnosticSteps: string[];
  solutionDetails: string;
  partsReplaced: string[];
  resultsSummary: string;
  faqs: ProjectFAQ[];
}

export interface ProjectsProps {
  projects?: Project[];
}