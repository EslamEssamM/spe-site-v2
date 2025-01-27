import { createRoute } from "@tanstack/react-router";
import Page from "@/pages/partners";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/partners",
  component: Page,
});
