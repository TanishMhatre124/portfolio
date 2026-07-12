import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { CertificationsPreview } from "@/components/sections/CertificationsPreview";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <Skills />
      <Achievements />
      <CertificationsPreview />
      <GitHubActivity />
      <BlogPreview />
      <Contact />
    </>
  );
}
