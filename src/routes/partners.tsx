import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/partners";

export const Route = createFileRoute("/partners")({
  component: Page,
});
