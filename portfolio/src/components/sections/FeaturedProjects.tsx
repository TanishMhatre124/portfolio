import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/LinkButton";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 6);

  return (
    <section id="projects" className="border-t border-line py-24 sm:py-32">
      <div className="container max-w-content">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <SectionHeading
            index="03"
            eyebrow="Selected work"
            title="Featured projects"
            description="A working sample — end-to-end systems, not tutorials, each shipped with a measurable outcome."
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <LinkButton href="/projects" variant="secondary">
            View all projects <ArrowRight size={16} />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
