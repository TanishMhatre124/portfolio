import type { BlogPost } from "@/types";

export const blogs: BlogPost[] = [
  {
    id: "practical-rag",
    slug: "practical-guide-to-rag-systems",
    title: "A practical guide to RAG systems",
    excerpt: "How to integrate retrieval-augmented generation for accurate, grounded question-answering systems.",
    date: "Apr 18, 2026",
    image: "/images/blog1.jpeg",
    externalUrl: null,
    readTime: "6 min read",
  },
  {
    id: "resilient-pipelines",
    slug: "building-resilient-data-pipelines",
    title: "Building resilient data pipelines",
    excerpt: "Best practices for designing ETL pipelines with real monitoring and observability built in from day one.",
    date: "May 2, 2026",
    image: "/images/blog1.jpeg",
    externalUrl:
      "https://open.substack.com/pub/tanishmhatre/p/master-sql-unlock-data-insights-with?utm_source=share&utm_medium=android&r=6uicvh",
    readTime: "8 min read",
  },
  {
    id: "master-sql",
    slug: "master-sql-select-filtering",
    title: "Master SQL: unlock data insights with SELECT & filtering",
    excerpt: "How to turn raw tables into actionable insight using core SQL commands, filtering, and query design.",
    date: "Dec 9, 2025",
    image: "/images/blog1.jpeg",
    externalUrl:
      "https://open.substack.com/pub/tanishmhatre/p/master-sql-unlock-data-insights-with?utm_source=share&utm_medium=android&r=6uicvh",
    readTime: "5 min read",
  },
];
