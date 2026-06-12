import {
  RESEARCH_PROJECTS,
  getResearchProject,
} from "@/data/research-projects";
import { notFound } from "next/navigation";
import ResearchProjectClient from "./ResearchProjectClient";

export function generateStaticParams() {
  return RESEARCH_PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ResearchProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getResearchProject(slug);

  if (!project) {
    notFound();
  }

  return <ResearchProjectClient project={project} />;
}
