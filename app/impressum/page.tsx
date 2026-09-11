import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Jantaro",
};

export default function Impressum() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Jantaro Startseite">
          Jantaro
        </Link>
        <nav aria-label="Hauptnavigation">
          <Link href="/#leistungen">Leistungen</Link>
          <Link href="/#vorgehen">Vorgehen</Link>
          <Link href="/#fragen">Fragen</Link>
        </nav>
      </header>

      <section className="legal section-pad">
        <h1>Impressum</h1>
        <p>
          Jantaro
          <br />
          E-Mail: <a href="mailto:kontakt@jantaro.de">kontakt@jantaro.de</a>
        </p>
      </section>
    </main>
  );
}
