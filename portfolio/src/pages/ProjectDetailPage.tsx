import { useEffect, type ReactNode } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/LinkButton";
import { Card } from "@/components/ui/Card";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">{title}</p>
      {children}
    </div>
  );
}

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/projects" replace />;

  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="pb-24">
      <div className="border-b border-line pt-32 pb-16">
        <div className="container max-w-content">
          <Link to="/projects" className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fog hover:text-signal">
            <ArrowLeft size={14} /> All projects
          </Link>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.categories.map((cat) => (
              <Badge key={cat}>{cat}</Badge>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-display text-3xl font-semibold text-paper sm:text-5xl"
          >
            {project.title}
          </motion.h1>
          <p className="mb-8 max-w-2xl text-lg text-fog">{project.tagline}</p>

          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <LinkButton href={project.demoUrl} variant="primary" external>
                Live demo <ArrowUpRight size={16} />
              </LinkButton>
            )}
            {project.sourceUrl && (
              <LinkButton href={project.sourceUrl} variant="secondary" external>
                <Github size={16} /> Source code
              </LinkButton>
            )}
          </div>
        </div>
      </div>

      <div className="container max-w-content pt-12">
        <Card className="mb-4 overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full object-cover" />
        </Card>

        <div className="grid gap-12 lg:grid-cols-[1fr_0.6fr]">
          <div>
            <Section title="Overview">
              <p className="leading-relaxed text-fog">{project.overview}</p>
            </Section>

            <Section title="Problem">
              <p className="leading-relaxed text-fog">{project.problem}</p>
            </Section>

            <Section title="Solution">
              <p className="leading-relaxed text-fog">{project.solution}</p>
            </Section>

            <Section title="Architecture">
              <p className="leading-relaxed text-fog">{project.architecture}</p>
            </Section>

            <Section title="Workflow">
              <ol className="space-y-3">
                {project.workflow.map((step, i) => (
                  <li key={step} className="flex gap-4 text-sm leading-relaxed text-fog">
                    <span className="font-mono text-signal">{String(i + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </Section>

            <Section title="Features">
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-fog">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {f}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Challenges">
              <div className="space-y-5">
                {project.challenges.map((c) => (
                  <div key={c.heading}>
                    <p className="mb-1.5 font-display text-sm font-semibold text-paper">{c.heading}</p>
                    <p className="text-sm leading-relaxed text-fog">{c.body}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Results">
              <ul className="space-y-3">
                {project.results.map((r) => (
                  <li key={r} className="flex gap-3 text-sm leading-relaxed text-paper">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {r}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Lessons learned">
              <ul className="space-y-3">
                {project.lessonsLearned.map((l) => (
                  <li key={l} className="flex gap-3 text-sm leading-relaxed text-fog">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {l}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Future improvements">
              <ul className="space-y-3">
                {project.futureImprovements.map((f) => (
                  <li key={f} className="flex gap-3 text-sm leading-relaxed text-fog">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {f}
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <Card className="p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-fog">Tech stack</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-fog">Highlights</p>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="text-sm leading-relaxed text-paper">
                    {h}
                  </li>
                ))}
              </ul>
            </Card>
          </aside>
        </div>

        <nav className="mt-16 border-t border-line pt-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">Project Navigation</p>
            <p className="text-sm text-fog">Move between case studies</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              to={`/projects/${prev.slug}`}
              className="group flex min-h-[120px] items-center justify-between gap-4 rounded-2xl border border-line/80 bg-panel px-5 py-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-signal/40 hover:bg-background"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-background text-signal transition-colors group-hover:border-signal/40">
                  <ArrowLeft size={16} />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">Previous</p>
                  <p className="mt-1 max-w-[18rem] font-display text-base font-semibold leading-snug text-paper sm:text-lg">
                    {prev.title}
                  </p>
                </div>
              </div>
            </Link>

            <Link
              to={`/projects/${next.slug}`}
              className="group flex min-h-[120px] items-center justify-between gap-4 rounded-2xl border border-line/80 bg-panel px-5 py-5 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-signal/40 hover:bg-background"
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">Next</p>
                <p className="mt-1 max-w-[18rem] font-display text-base font-semibold leading-snug text-paper sm:text-lg">
                  {next.title}
                </p>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-background text-signal transition-colors group-hover:border-signal/40">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
