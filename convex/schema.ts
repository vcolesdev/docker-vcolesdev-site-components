import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  navlinks: defineTable({
    href: v.string(),
    icon: v.string(),
    name: v.string(),
  }),
  projectCategories: defineTable({
    name: v.string(),
    slug: v.string(),
  }),
  projectTags: defineTable({
    slug: v.string(),
    title: v.string(),
  }),
  projects: defineTable({
    category: v.string(),
    description: v.string(),
    name: v.string(),
    slug: v.string(),
    tags: v.array(v.string()),
    url: v.string(),
  }),
  projectsList: defineTable({
    category: v.id("projectCategories"),
    description: v.string(),
    name: v.string(),
    slug: v.string(),
    tags: v.array(v.id("projectTags")),
    url: v.string(),
  })
});