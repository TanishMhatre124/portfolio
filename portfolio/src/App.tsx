import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Home } from "@/pages/Home";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";
import { CertificationsPage } from "@/pages/CertificationsPage";
import { BlogPage } from "@/pages/BlogPage";
import { NotFound } from "@/pages/NotFound";

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
