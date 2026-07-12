import { ArrowUpRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import { Card } from "@/components/ui/Card";

export function BlogPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container max-w-content">
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">Writing</div>
        <h1 className="mb-4 font-display text-4xl font-semibold text-paper sm:text-5xl">Blog & insights</h1>
        <p className="mb-12 max-w-2xl text-fog">
          Technical articles and write-ups on data engineering, machine learning, and the systems I'm building.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => {
            const content = (
              <Card className="flex h-full flex-col overflow-hidden hover:border-signal/40">
                <div className="aspect-[16/9] overflow-hidden bg-ink">
                  <img src={post.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-fog">
                    {post.date} · {post.readTime}
                  </p>
                  <h2 className="mb-2 font-display text-lg font-semibold leading-snug text-paper">{post.title}</h2>
                  <p className="mb-4 text-sm leading-relaxed text-fog">{post.excerpt}</p>
                  <span className="mt-auto flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-signal">
                    {post.externalUrl ? (
                      <>
                        Read on Substack <ArrowUpRight size={12} />
                      </>
                    ) : (
                      "Coming soon"
                    )}
                  </span>
                </div>
              </Card>
            );

            return post.externalUrl ? (
              <a key={post.id} href={post.externalUrl} target="_blank" rel="noreferrer noopener" className="block">
                {content}
              </a>
            ) : (
              <div key={post.id}>{content}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
