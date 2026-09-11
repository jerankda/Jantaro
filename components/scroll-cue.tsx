"use client";

import { useEffect, useState } from "react";

export function ScrollCue() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 24);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a className={`scroll-cue${hidden ? " is-hidden" : ""}`} href="#beispiele" aria-label="Zu den Beispielen scrollen">
      <span className="scroll-mouse" aria-hidden="true">
        <i />
      </span>
    </a>
  );
}
