import { useMemo } from "react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

// A thin vertical waveform fixed to the page edge. As the reader scrolls, the
// trace "resolves" from flat noise into a clean signal — a literal rendering
// of Tanish's own framing: turning information into insight.
const POINTS = 48;

export function SignalTrace() {
  const progress = useScrollProgress();
  const reducedMotion = usePrefersReducedMotion();

  const path = useMemo(() => {
    const height = 640;
    const width = 40;
    const segments: string[] = [];
    for (let i = 0; i <= POINTS; i++) {
      const t = i / POINTS;
      const y = t * height;
      const noise = Math.sin(i * 12.9898) * 0.5 + 0.5;
      const clean = Math.sin(t * Math.PI * 3) * 0.5 + 0.5;
      // Blend from noisy to clean based on how far the reader has scrolled past this point
      const localProgress = Math.min(1, Math.max(0, (progress - t + 0.35) / 0.35));
      const value = noise * (1 - localProgress) + clean * localProgress;
      const x = 8 + value * (width - 16);
      segments.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return segments.join(" ");
  }, [progress]);

  if (reducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-0 top-0 z-40 hidden h-screen w-10 lg:block"
    >
      <svg viewBox="0 0 40 640" preserveAspectRatio="none" className="h-full w-full">
        <path d={path} fill="none" stroke="#E8A33D" strokeWidth="1.25" strokeOpacity="0.55" strokeLinecap="round" />
      </svg>
    </div>
  );
}
