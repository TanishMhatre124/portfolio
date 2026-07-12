import { ArrowRight, ExternalLink, Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/LinkButton";
import { Card } from "@/components/ui/Card";

export function CertificationsPreview() {
  return (
    <section id="certifications" className="border-t border-line py-24 sm:py-32">
      <div className="container max-w-content">
        <SectionHeading index="06" eyebrow="Credentials" title="Certifications" />

        <div className="grid gap-5 sm:grid-cols-3">
          {certifications.map((cert) => (
            <Card key={cert.id} className="flex flex-col p-6">
              <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-sm border border-line text-signal">
                <Award size={16} />
              </span>
              <h3 className="mb-1 font-display text-sm font-semibold leading-snug text-paper">{cert.title}</h3>
              <p className="mb-3 text-xs text-fog">{cert.issuer}</p>
              <p className="mb-4 font-mono text-[11px] text-fog">{cert.issuedDate}</p>
              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-auto flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-signal hover:text-paper"
                >
                  Verify <ExternalLink size={12} />
                </a>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <LinkButton href="/certifications" variant="secondary">
            View all certifications <ArrowRight size={16} />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
