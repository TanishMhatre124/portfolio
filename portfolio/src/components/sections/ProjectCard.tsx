import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const displayedTech = project.techStack.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Card className="group flex h-full flex-col overflow-hidden hover:border-signal/40">
        <Link to={`/projects/${project.slug}`} className="block overflow-hidden">
          <div className="aspect-[16/10] overflow-hidden bg-ink">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex flex-wrap gap-2">
            {project.categories.slice(0, 2).map((cat) => (
              <Badge key={cat}>{cat}</Badge>
            ))}
          </div>

          <Link to={`/projects/${project.slug}`}>
            <h3 className="font-display text-lg font-semibold text-paper transition-colors group-hover:text-signal">
              {project.title}
            </h3>
          </Link>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-fog">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {displayedTech.map((tech, index) => (
              <span key={tech} className="font-mono text-[11px] text-fog">
                {tech}
                {index !== displayedTech.length - 1 && (
                  <span className="ml-1.5 text-line">/</span>
                )}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
            <Link
              to={`/projects/${project.slug}`}
              className="font-mono text-xs uppercase tracking-wider text-signal transition-colors hover:text-paper"
            >
              View details
            </Link>

            <div className="flex items-center gap-3 text-fog">
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Source code"
                  className="hover:text-signal"
                >
                  <Github size={16} />
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Live demo"
                  className="hover:text-signal"
                >
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}