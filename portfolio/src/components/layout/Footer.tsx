import { Github, Linkedin, Instagram } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { socialLinks } from "@/data/socialLinks";
import { navigation } from "@/data/navigation";
import { Link } from "react-router-dom";

const iconMap = { github: Github, linkedin: Linkedin, instagram: Instagram, email: Github };

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container max-w-content py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-paper">{personalInfo.name}</p>
            <p className="mt-2 max-w-xs text-sm text-fog">{personalInfo.role}</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navigation.map((item) =>
              item.isRoute ? (
                <Link key={item.label} to={item.path} className="font-mono text-xs uppercase tracking-wider text-fog hover:text-signal">
                  {item.label}
                </Link>
              ) : (
                <a key={item.label} href={item.path} className="font-mono text-xs uppercase tracking-wider text-fog hover:text-signal">
                  {item.label}
                </a>
              )
            )}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.label}
                  className="text-fog transition-colors hover:text-signal"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 text-xs text-fog md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
