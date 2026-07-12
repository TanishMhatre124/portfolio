import type { Achievement } from "@/types";

export const achievements: Achievement[] = [
  {
    id: "event-head-megaleio",
    role: "Event Head",
    organization: "National Level Technical Event — Megaleio",
    image: "/images/drone.jpeg",
    orgLogo: "/images/perplexity.png",
    points: [
      "Directed a 20-member organizing team through planning, execution, and coordination of a large-scale national technical event.",
      "Streamlined team operations and delegated responsibilities, ensuring successful delivery through structured leadership.",
    ],
    tags: ["Leadership", "Project Management", "Team Coordination", "Strategic Planning", "Operational Excellence"],
  },
  {
    id: "pr-head",
    role: "PR Head",
    organization: "National Level Technical Event",
    image: "/images/pr.jpeg",
    orgLogo: "/images/perplexity.png",
    points: [
      "Led end-to-end public relations, outreach, and promotional strategy to raise event visibility and drive participation.",
      "Coordinated with internal teams, sponsors, and participants to ensure stakeholder engagement and seamless execution.",
    ],
    tags: ["Public Relations", "Marketing & Outreach", "Corporate Communications", "Event Coordination"],
  },
];
