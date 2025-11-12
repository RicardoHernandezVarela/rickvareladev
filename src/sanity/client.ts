import { createClient } from "next-sanity";

const SANITY_PROJECT_ID =
  process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const SANITY_PROJECT_DATASET =
  process.env.SANITY_PROJECT_DATASET ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET;

export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_PROJECT_DATASET,
  apiVersion: "2024-11-01",
  useCdn: false,
});
