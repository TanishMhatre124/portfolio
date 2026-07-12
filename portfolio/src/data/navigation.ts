import type { NavItem } from "@/types";

export const navigation: NavItem[] = [
  { label: "Home", path: "/#home", isRoute: false },
  { label: "About", path: "/#about", isRoute: false },
  { label: "Experience", path: "/#experience", isRoute: false },
  { label: "Projects", path: "/projects", isRoute: true },
  { label: "Certifications", path: "/certifications", isRoute: true },
  { label: "Blog", path: "/blog", isRoute: true },
  { label: "Contact", path: "/#contact", isRoute: false },
];
