import type { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "ml-python-udemy",
    title: "Machine Learning & Python — Data Science for Business and AI",
    issuer: "Udemy — Brighter Futures Hub",
    image: "/images/cert1.jpeg",
    issuedDate: "June 23, 2026",
    verifyUrl:
      "https://www.udemy.com/share/101WsU3@dtI_XdGhssEvNCy6byQZwV6eT0lSZY1NHflwGW0JgEsvCTcqLh0yy_EYpdJ6msip4w==/",
    category: "Machine Learning",
  },
  {
    id: "fullstack-udemy",
    title: "Full Stack Web Development",
    issuer: "Udemy",
    image: "/images/cert2.jpeg",
    issuedDate: "Sep 2024",
    verifyUrl: null,
    category: "Web Development",
  },
  {
    id: "aws-fundamentals",
    title: "AWS Fundamentals",
    issuer: "Amazon Web Services",
    image: "/images/cert3.jpeg",
    issuedDate: "Jun 2023",
    verifyUrl: null,
    category: "Cloud",
  },
];
