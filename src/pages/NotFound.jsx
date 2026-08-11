import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-extrabold text-primary">404</p>
      <h1 className="mt-3 font-display text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-2 text-ink-muted">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Button as={NavLink} to="/" className="mt-6">
        <ArrowLeft className="h-4 w-4" /> Back home
      </Button>
    </section>
  );
}
