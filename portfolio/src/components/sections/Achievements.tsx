import { motion } from "framer-motion";
import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-line py-24 sm:py-32">
      <div className="container max-w-content">
        <SectionHeading index="05" eyebrow="Beyond code" title="Leadership & responsibility" />

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="p-6">
                <p className="mb-1 font-mono text-xs uppercase tracking-wider text-signal">{item.role}</p>
                <h3 className="mb-4 font-display text-lg font-semibold text-paper">{item.organization}</h3>
                <ul className="mb-5 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-fog">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
