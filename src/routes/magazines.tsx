import { createFileRoute } from "@tanstack/react-router";
import MagazineListPage from "@/pages/MagazineListPage";
export const Route = createFileRoute("/magazines")({
  component: MagazineListPage,
});
