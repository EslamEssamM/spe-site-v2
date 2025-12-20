import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/data-camp";

export const Route = createFileRoute("/data-camp")({
  component: Page,
});
