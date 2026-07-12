import { Link } from "react-router-dom";
import { LinkButton } from "@/components/ui/LinkButton";

export function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-signal">404 / no signal</p>
      <h1 className="mb-4 font-display text-4xl font-semibold text-paper">This page went off the grid.</h1>
      <p className="mb-8 max-w-md text-fog">
        The page you're looking for doesn't exist, or the link may be out of date.
      </p>
      <LinkButton href="/">Back to home</LinkButton>
      <Link to="/projects" className="mt-4 font-mono text-xs uppercase tracking-wider text-fog hover:text-signal">
        Or browse projects
      </Link>
    </div>
  );
}
