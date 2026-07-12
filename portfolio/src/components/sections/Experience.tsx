import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line py-24 sm:py-32">
      <div className="container max-w-content">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where the work has run in production"
        />

        <ol className="relative space-y-10 border-l border-line pl-8 sm:pl-10">
          {experience.map((role, i) => (
            <motion.li
              key={role.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-signal sm:-left-[calc(2.5rem+5px)]" />

              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-paper">{role.role}</h3>
                <span className="font-mono text-xs uppercase tracking-wider text-signal">{role.date}</span>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-fog">
                <span className="text-paper">{role.company}</span>
                <span className="flex items-center gap-1">
                  <MapPin size={13} /> {role.location}
                </span>
              </div>

              <ul className="mb-4 space-y-2.5">
                {role.achievements.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-fog">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {role.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
