// src/routes/__root.tsx
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Footer from "@/components/Footer";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
      {/* <TanStackRouterDevtools position="bottom-right" /> */}
    </>
  );
}
