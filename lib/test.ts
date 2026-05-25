// =====================================================
// lib/tests.ts
// =====================================================

import { featuredProjects } from "../data/projects";
import { paintingItems, calligraphyItems, photographyItems } from "../data/gallery";
import { siteSections } from "../data/sections";

export function runSelfChecks() {
  const navCardSections = siteSections.filter((section) => section.showInNavCards);
  const navbarSections = siteSections.filter((section) => section.showInNavbar);

  const tests = [
    {
      name: "section ids are unique",
      pass: new Set(siteSections.map((section) => section.id)).size === siteSections.length,
    },
    {
      name: "nav cards have titles and descriptions",
      pass: navCardSections.every(
        (section) => section.navTitle?.trim().length && section.navDescription?.trim().length,
      ),
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
      name: "navbar items have visible labels",
      pass: navbarSections.every((section) => (section.navbarLabel ?? section.navTitle)?.trim().length),
    },
  ];

  tests.forEach((test) => {
    if (!test.pass) {
      throw new Error(`Self-check failed: ${test.name}`);
    }
  });
}
