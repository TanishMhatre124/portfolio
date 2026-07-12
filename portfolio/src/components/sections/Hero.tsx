import { motion } from "framer-motion";
import { ArrowRight, FileDown, CircleDot, Github, Linkedin, Instagram } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { socialLinks } from "@/data/socialLinks";
import { LinkButton } from "@/components/ui/LinkButton";

const iconMap = { github: Github, linkedin: Linkedin, instagram: Instagram };

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container grid max-w-content gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-sm border border-line px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-signal"
          >
            <CircleDot size={12} className="animate-blink" />
            {personalInfo.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-semibold leading-[1.1] text-paper sm:text-5xl lg:text-6xl"
          >
            {personalInfo.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-fog"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <LinkButton href="/#contact" variant="primary">
              Contact me <ArrowRight size={16} />
            </LinkButton>
            <LinkButton href="/projects" variant="secondary">
              View projects
            </LinkButton>
            <LinkButton href={personalInfo.resumeUrl} variant="ghost" external>
              <FileDown size={16} /> Resume
            </LinkButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex items-center gap-5"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              if (!Icon) return null;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.label}
                  className="text-fog transition-colors hover:text-signal"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex min-h-[360px] items-center justify-center rounded-md border border-line bg-panel p-4 sm:min-h-[420px] lg:p-6"
        >
          <div className="relative h-full w-full overflow-hidden rounded-sm border border-line/70 bg-background/30">
            <img
              src="/images/profilepicture.jpeg"
              alt="Tanish Mhatre portrait"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
