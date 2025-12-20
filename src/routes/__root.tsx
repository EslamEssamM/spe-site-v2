// src/routes/__root.tsx
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/shared/SmoothScroll";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
