"use client";

import { useEffect, useState } from "react";

const words = [
  "Prozesse",
  "Workflows",
  "Rechnungen",
  "Buchhaltung",
  "Freigaben",
  "Abläufe",
  "Dokumente",
  "Berichte",
  "Bestellungen",
  "Belege",
  "Zahlungen",
];

export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => {
        setLeaving(current);
        return (current + 1) % words.length;
      });
    }, 1900);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className="rotating-word" aria-live="polite">
      {words.map((word, wordIndex) => {
        const state = wordIndex === index ? "is-active" : wordIndex === leaving ? "is-leaving" : "is-wait";

        return (
          <span key={word} className={`rotating-word-item ${state}`} aria-hidden={wordIndex !== index}>
            {word}.
          </span>
        );
      })}
    </span>
  );
}
