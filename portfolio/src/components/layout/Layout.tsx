import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignalTrace } from "./SignalTrace";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SignalTrace />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
