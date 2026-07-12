import { useMemo, useState } from "react";
import { Search, Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Card } from "@/components/ui/Card";
import { cn } from "@/utils/cn";

export function CertificationsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(certifications.map((c) => c.category))], []);

  const filtered = certifications.filter((c) => {
    const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase()) || c.issuer.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || c.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="container max-w-content">
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">Credentials</div>
        <h1 className="mb-4 font-display text-4xl font-semibold text-paper sm:text-5xl">Certifications</h1>
        <p className="mb-12 max-w-2xl text-fog">Verified certificates and professional credentials, kept current.</p>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-sm">
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-fog" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certifications..."
              aria-label="Search certifications"
              className="w-full rounded border border-line bg-panel py-2.5 pl-10 pr-4 text-sm text-paper outline-none transition-colors focus:border-signal"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-sm border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
                  category === cat ? "border-signal text-signal" : "border-line text-fog hover:border-fog hover:text-paper"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-md border border-line bg-panel px-6 py-16 text-center">
            <p className="text-fog">No certifications match that search.</p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cert) => (
              <Card key={cert.id} className="flex flex-col p-6">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-sm border border-line text-signal">
                  <Award size={16} />
                </span>
                <h3 className="mb-1 font-display text-sm font-semibold leading-snug text-paper">{cert.title}</h3>
                <p className="mb-1 text-xs text-fog">{cert.issuer}</p>
                <p className="mb-4 font-mono text-[11px] text-fog">Issued {cert.issuedDate}</p>
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-auto flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-signal hover:text-paper"
                  >
                    Verify <ExternalLink size={12} />
                  </a>
                ) : (
                  <span className="mt-auto font-mono text-xs uppercase tracking-wider text-fog">Verification link pending</span>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
