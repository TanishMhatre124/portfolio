import { ArrowRight, ArrowUpRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/LinkButton";
import { Card } from "@/components/ui/Card";

export function BlogPreview() {
  const latest = blogs.slice(0, 3);

  return (
    <section id="blog" className="border-t border-line py-24 sm:py-32">
      <div className="container max-w-content">
        <SectionHeading
          index="08"
          eyebrow="Writing"
          title="Blog & insights"
          description="Notes on data engineering, ML, and systems I'm building — written for practitioners, not search engines."
        />

        <div className="grid gap-6 sm:grid-cols-3">
          {latest.map((post) => {
            const content = (
              <Card className="flex h-full flex-col overflow-hidden hover:border-signal/40">
                <div className="aspect-[16/9] overflow-hidden bg-ink">
                  <img src={post.image} alt="" loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-2 font-mono text-[11px] uppercase tracking-wider text-fog">
                    {post.date} · {post.readTime}
                  </p>
                  <h3 className="mb-2 font-display text-base font-semibold leading-snug text-paper">{post.title}</h3>
                  <p className="mb-4 line-clamp-2 text-sm text-fog">{post.excerpt}</p>
                  <span className="mt-auto flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-signal">
                    {post.externalUrl ? (
                      <>
                        Read <ArrowUpRight size={12} />
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

        <div className="mt-10 flex justify-center">
          <LinkButton href="/blog" variant="secondary">
            View all posts <ArrowRight size={16} />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
