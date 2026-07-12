import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { cn } from "@/utils/cn";

type SortOption = "featured" | "az" | "za";

export function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    let list = projects.filter((p) => {
      const matchesQuery =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()));
      const matchesCategory = category === "All" || p.categories.includes(category as never);
      return matchesQuery && matchesCategory;
    });

    if (sort === "az") list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "za") list = [...list].sort((a, b) => b.title.localeCompare(a.title));
    if (sort === "featured") list = [...list].sort((a, b) => Number(b.featured) - Number(a.featured));

    return list;
  }, [query, category, sort]);

  return (
    <div className="pt-32 pb-24">
      <div className="container max-w-content">
        <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-signal">Archive</div>
        <h1 className="mb-4 font-display text-4xl font-semibold text-paper sm:text-5xl">All projects</h1>
        <p className="mb-12 max-w-2xl text-fog">
          Every system I've shipped worth showing — search by name, tech, or filter by category.
        </p>

        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-sm">
            <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-fog" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              aria-label="Search projects"
              className="w-full rounded border border-line bg-panel py-2.5 pl-10 pr-4 text-sm text-paper outline-none transition-colors focus:border-signal"
            />
          </div>

          <label className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-fog">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="rounded border border-line bg-panel px-3 py-2 text-paper outline-none focus:border-signal"
            >
              <option value="featured">Featured first</option>
              <option value="az">A → Z</option>
              <option value="za">Z → A</option>
            </select>
          </label>
        </div>

        <div className="mb-12 flex flex-wrap gap-2">
          {["All", ...projectCategories].map((cat) => (
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

        {filtered.length === 0 ? (
          <div className="rounded-md border border-line bg-panel px-6 py-16 text-center">
            <p className="text-fog">No projects match that search. Try a different keyword or clear the filter.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
