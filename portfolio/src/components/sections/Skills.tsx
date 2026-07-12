import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/utils/cn";

type SkillFilter = "All" | (typeof skillGroups)[number]["category"];

export function Skills() {
  const categories = useMemo(
    () => ["All", ...skillGroups.map((group) => group.category)] as SkillFilter[],
    []
  );
  const [active, setActive] = useState<SkillFilter>("All");
  const visibleGroups = active === "All" ? skillGroups : skillGroups.filter((group) => group.category === active);

  return (
    <section id="skills" className="border-t border-line py-24 sm:py-32">
      <div className="container max-w-content">
        <SectionHeading
          index="04"
          eyebrow="Capability"
          title="Technical expertise"
          description="A structured view of the stack, organized into category cards with quick filters for focused scanning."
        />

        <div className="mb-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              layout
              onClick={() => setActive(cat)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-200",
                active === cat
                  ? "border-signal/60 bg-signal/10 text-signal"
                  : "border-line bg-panel text-fog hover:border-fog hover:text-paper hover:bg-background"
              )}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 34 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleGroups.map((group) => (
              <motion.article
                key={group.category}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-line/80 bg-panel/80 p-6 backdrop-blur-sm"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-paper">{group.category}</h3>
                    {group.description && <p className="mt-2 text-sm leading-relaxed text-fog">{group.description}</p>}
                  </div>
                  <span className="rounded-full border border-line bg-background px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-fog">
                    {group.skills.length}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, index) => (
                    <motion.span
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2, delay: index * 0.015, ease: [0.16, 1, 0.3, 1] }}
                      whileHover={{ y: -1 }}
                      className="inline-flex rounded-full border border-line bg-background px-3.5 py-1.5 text-sm font-medium text-paper transition-colors hover:border-signal/40 hover:bg-signal/5"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
