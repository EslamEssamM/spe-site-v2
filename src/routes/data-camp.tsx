import { createRoute } from "@tanstack/react-router";
import Page from "@/pages/data-camp";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/data-camp",
  component: Page,
});
