import { createFileRoute } from "@tanstack/react-router";
import MagazinePage from "@/pages/magazinePage";

export const Route = createFileRoute("/magazines/$id")({
  component: MagazinePage,
});
