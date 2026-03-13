// =====================================================
// lib/tests.ts
// =====================================================

import { navItems } from "../data/navItems";
import { featuredProjects } from "../data/projects";
import { paintingItems, calligraphyItems, photographyItems } from "../data/gallery";

export function runSelfChecks() {
  const tests = [
    {
      name: "nav items have non-empty href strings",
      pass: navItems.every((item) => typeof item.href === "string" && item.href.trim().length > 0),
    },
    {
      name: "nav hrefs use hash links in this single-file preview",
      pass: navItems.every((item) => item.href.startsWith("#")),
    },
    {
      name: "featured projects contain title, description, and tech",
      pass: featuredProjects.every(
        (item) => item.title.trim().length > 0 && item.description.trim().length > 0 && item.tech.trim().length > 0,
      ),
    },
    {
      name: "gallery sections are not empty",
      pass: paintingItems.length > 0 && calligraphyItems.length > 0 && photographyItems.length > 0,
    },
    {
      name: "nav titles are unique",
      pass: new Set(navItems.map((item) => item.title)).size === navItems.length,
    },
  ];

  tests.forEach((test) => {
    if (!test.pass) {
      throw new Error(`Self-check failed: ${test.name}`);
    }
  });
}