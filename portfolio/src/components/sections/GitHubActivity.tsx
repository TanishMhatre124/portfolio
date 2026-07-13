import { useEffect, useMemo, useState } from "react";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/LinkButton";
import { Card } from "@/components/ui/Card";
import { cn } from "@/utils/cn";

const GITHUB_USERNAME = "TanishMhatre124";

interface Repo {
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

export function GitHubActivity() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const reposPerPage = 6;

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API request failed");
        return res.json();
      })
      .then((data: Repo[]) => {
        if (!cancelled) setRepos(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const totalPages = Math.max(1, Math.ceil((repos?.length ?? 0) / reposPerPage));
  const currentRepos = useMemo(() => {
    if (!repos) return null;
    const start = (page - 1) * reposPerPage;
    return repos.slice(start, start + reposPerPage);
  }, [page, repos]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [page, totalPages]);

  return (
    <section id="github" className="border-t border-line py-24 sm:py-32">
      <div className="container max-w-content">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="07" eyebrow="Open source" title="GitHub activity" />
          <div className="flex flex-wrap gap-3">
            <LinkButton href={`https://github.com/${GITHUB_USERNAME}`} variant="secondary" external>
              <Github size={16} /> View all repositories
            </LinkButton>
          </div>
        </div>

        <Card className="mb-8 overflow-hidden p-4">
          {/* Prefer GitHub's official contribution SVG; fall back to ghchart if unavailable */}
          <GitHubContribImage username={GITHUB_USERNAME} className="w-full brightness-110 contrast-110 saturate-125" />
        </Card>

        {error && (
          <p className="text-sm text-fog">
            Live repository data couldn't be loaded right now — visit the GitHub profile directly using the button above.
          </p>
        )}

        {!error && (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {(currentRepos ?? Array.from({ length: reposPerPage })).map((repo, i) =>
              repo ? (
                <a
                  key={(repo as Repo).name}
                  href={(repo as Repo).html_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block"
                >
                  <Card className="h-full p-5 hover:border-signal/40">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-mono text-sm font-medium text-paper">{(repo as Repo).name}</h3>
                      <ExternalLink size={14} className="text-fog" />
                    </div>
                    <p className="mb-4 line-clamp-2 min-h-[2.5rem] text-xs text-fog">
                      {(repo as Repo).description ?? "No description provided."}
                    </p>
                    <div className="flex items-center gap-4 font-mono text-xs text-fog">
                      {(repo as Repo).language && <span>{(repo as Repo).language}</span>}
                      <span className="flex items-center gap-1">
                        <Star size={12} /> {(repo as Repo).stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} /> {(repo as Repo).forks_count}
                      </span>
                    </div>
                  </Card>
                </a>
              ) : (
                <div key={i} className="h-[9.5rem] animate-pulse rounded-md border border-line bg-panel" />
              )
            )}
            </div>

            {repos && repos.length > reposPerPage && (
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <p className="font-mono text-xs uppercase tracking-wider text-fog">
                  Page {page} of {totalPages}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setPage((current) => Math.max(1, current - 1))}
                    disabled={page === 1}
                    className={cn(
                      "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors",
                      page === 1
                        ? "cursor-not-allowed border-line text-fog opacity-50"
                        : "border-line bg-panel text-paper hover:border-signal/40 hover:text-signal"
                    )}
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={() => setPage((current) => Math.min(totalPages, current + 1))}
                    disabled={page === totalPages}
                    className={cn(
                      "rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors",
                      page === totalPages
                        ? "cursor-not-allowed border-line text-fog opacity-50"
                        : "border-line bg-panel text-paper hover:border-signal/40 hover:text-signal"
                    )}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

function GitHubContribImage({
  username,
  className,
}: {
  username: string;
  className?: string;
}) {
  const [src, setSrc] = useState(
    `https://github.com/users/${username}/contributions`
  );

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      src={src}
      alt={`${username} GitHub contribution graph`}
      loading="lazy"
      className={className}
      onError={() => setSrc(`https://ghchart.rshah.org/2da44e/${username}`)}
    />
  );
}
