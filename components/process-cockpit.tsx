"use client";

import { useEffect, useState } from "react";

const manualSteps = [
  "Rechnung aus dem Postfach holen",
  "Kreditor und Betrag übertragen",
  "Freigabe per E-Mail einholen",
  "Buchung in DATEV erfassen",
];

const autoSteps = [
  "Beleg erkannt",
  "Daten geprüft und kontiert",
  "Freigabe vorbereitet",
  "Buchung erstellt",
];

const manualClocks = ["00:00", "02:10", "05:40", "09:20", "12:04"];
const manualCosts = ["0,00", "2,80", "7,60", "12,50", "16,40"];

export function ProcessCockpit() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timeout = window.setTimeout(() => setPhase(5), 0);
      return () => window.clearTimeout(timeout);
    }

    const interval = window.setInterval(() => {
      setPhase((current) => (current === 5 ? 0 : current + 1));
    }, 1500);

    return () => window.clearInterval(interval);
  }, []);

  const manualIndex = Math.min(phase, 4);
  const autoDone = phase >= 2;
  const impact = phase >= 5;

  return (
    <div className="demo" aria-label="Ein Rechnungseingang von Hand gegen denselben Ablauf automatisiert">
      <div className="demo-head">
        <span>RECHNUNGSEINGANG</span>
        <b>4.280,00 €</b>
      </div>

      <div className="demo-grid">
        <div className="demo-col">
          <span className="demo-kicker">VON HAND</span>
          <p className="demo-time">{manualClocks[manualIndex]}</p>
          <p className="demo-cost">{manualCosts[manualIndex]} € Prozesskosten</p>
          <ol>
            {manualSteps.map((step, index) => (
              <li key={step} className={index < manualIndex ? "is-on" : ""}>
                <i />
                <span>{step}</span>
                <small>{index < manualIndex ? manualClocks[index + 1] : ""}</small>
              </li>
            ))}
          </ol>
        </div>

        <div className={`demo-col ${autoDone ? "is-done" : ""}`}>
          <span className="demo-kicker">AUTOMATISIERT</span>
          <p className="demo-time">{autoDone ? "0,8 Sek" : "00:00"}</p>
          <p className="demo-cost">{autoDone ? "0,18" : "0,00"} € Prozesskosten</p>
          <ol>
            {autoSteps.map((step) => (
              <li key={step} className={autoDone ? "is-on" : ""}>
                <i />
                <span>{step}</span>
                <small>{autoDone ? "0,8s" : ""}</small>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className={`demo-foot ${impact ? "is-on" : ""}`}>
        <span>47 gleiche Vorgänge in einer Woche</span>
        <strong>
          −9,4 Std
          <em>−1.220 €</em>
        </strong>
      </div>
    </div>
  );
}
