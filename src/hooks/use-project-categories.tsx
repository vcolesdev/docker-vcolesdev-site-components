import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export function useProjectCategories() {
  const projectCategories = useQuery(api.projectCategories.get);

  return {
    projectCategories,
  };
}
