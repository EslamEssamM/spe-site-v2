import { createRoute } from "@tanstack/react-router";
import Page from "@/pages/ets";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/etc",
  component: Page,
});
