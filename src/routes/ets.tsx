import { createFileRoute } from "@tanstack/react-router";
import Page from "@/pages/ets";

export const Route = createFileRoute("/ets")({
  component: Page,
});
