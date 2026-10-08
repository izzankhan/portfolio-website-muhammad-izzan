import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for /portfolio — renders nested children (portfolio.index and
// portfolio.$slug). Page body lives in portfolio.index.tsx.
export const Route = createFileRoute("/portfolio")({
  component: PortfolioLayout,
});

function PortfolioLayout() {
  return <Outlet />;
}
