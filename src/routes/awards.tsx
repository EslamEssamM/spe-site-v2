import { createFileRoute } from "@tanstack/react-router";
import AwardsPage from "@/pages/AwardsPage";

export const Route = createFileRoute("/awards")({
  component: AwardsPage,
});
