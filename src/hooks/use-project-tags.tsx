import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export function useProjectTags() {
  const projectTags = useQuery(api.projectTags.get);

  return {
    projectTags,
  };
}
