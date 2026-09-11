import { Faq } from "@/components/faq";
import { ProcessCockpit } from "@/components/process-cockpit";
import { Reveal } from "@/components/reveal";
import { RotatingWord } from "@/components/rotating-word";
import { ScrollCue } from "@/components/scroll-cue";
import Link from "next/link";

const useCases = [
  {
    number: "01",
    title: "Rechnungen verarbeiten",
    body: "Rechnungen aus E-Mails erkennen, Daten auslesen und prüfen, Freigaben starten und Buchungen in DATEV oder dem ERP vorbereiten.",
    result: "E-MAIL → PRÜFUNG → DATEV / ERP",
  },
  {
    number: "02",
    title: "Kundenanfragen verteilen",
    body: "Anfragen automatisch erfassen, nach Inhalt und Dringlichkeit einordnen und direkt an die richtige Ansprechperson weiterleiten.",
    result: "POSTFACH → KATEGORIE → ZUSTÄNDIGKEIT",
  },
  {
    number: "03",
    title: "Daten synchronisieren",
    body: "Kunden-, Auftrags- oder Projektdaten zwischen Excel, CRM, ERP und internen Fachanwendungen aktuell halten.",
    result: "EXCEL ↔ CRM ↔ ERP",
  },
  {
    number: "04",
    title: "Freigaben steuern",
    body: "Prüfungen und Freigaben durch feste Schritte führen, Zuständige erinnern und bei Verzögerungen automatisch eskalieren.",
    result: "ANFRAGE → FREIGABE → ERINNERUNG",
  },
  {
    number: "05",
    title: "Reports erstellen",
    body: "Zahlen aus mehreren Quellen zusammenführen, wiederkehrende Reports erstellen und termingerecht an Empfänger versenden.",
    result: "DATEN → REPORT → VERSAND",
  },
  {
    number: "06",
    title: "Dokumente auslesen",
    body: "Informationen aus PDFs, Formularen und Belegen extrahieren, validieren und strukturiert weiterverarbeiten.",
    result: "PDF / FORMULAR → STRUKTURIERTE DATEN",
  },
];

const services = [
  {
    number: "01",
    title: "Manuelle Dateneingabe abschaffen",
    body: "Rechnungen, Bestellungen, Formulare und E-Mails werden automatisch ausgelesen, geprüft und in Ihre Systeme übertragen.",
    tags: "ERFASSEN / PRÜFEN / ÜBERTRAGEN",
  },
  {
    number: "02",
    title: "Systeme miteinander verbinden",
    body: "Daten aus CRM, ERP, DATEV, Excel oder Fachsoftware fließen automatisch dorthin, wo sie gebraucht werden.",
    tags: "VERBINDEN / SYNCHRONISIEREN / BEREITSTELLEN",
  },
  {
    number: "03",
    title: "Freigaben und Übergaben automatisieren",
    body: "Aufgaben, Prüfungen und Freigaben laufen durch definierte Schritte, inklusive Erinnerungen, Eskalationen und klarer Zuständigkeiten.",
    tags: "FREIGEBEN / ERINNERN / ESKALIEREN",
  },
  {
    number: "04",
    title: "Aus Daten Entscheidungen machen",
    body: "Automatische Reports und Dashboards zeigen, was gerade passiert, wo Vorgänge hängen und wann Ihr Team eingreifen muss.",
    tags: "REPORTING / STATUS / AUSNAHMEN",
  },
];

const workflowBefore = [
  "E-Mail öffnen und PDF herunterladen",
  "Rechnungsnummer und Betrag kopieren",
  "Kreditor suchen und Daten abgleichen",
  "Rechnung in DATEV oder ERP erfassen",
  "Freigabe per E-Mail einholen",
];

const workflowAfter = [
  ["Eingang", "Rechnung erkannt"],
  ["Prüfung", "Daten validiert"],
  ["Freigabe", "Automatisch angefragt"],
  ["Buchung", "In DATEV / ERP angelegt"],
  ["Ausnahme", "Nur bei Unklarheit ans Team"],
];

const integrations = [
  "Microsoft 365",
  "Outlook",
  "Excel",
  "SharePoint",
  "DATEV",
  "CRM",
  "ERP",
  "Datenbanken",
  "REST APIs",
  "Fachsoftware",
];

const deliverables = [
  {
    number: "01",
    title: "Prozessanalyse",
    body: "Dokumentierter Ist-Ablauf mit Engpässen, Fehlerquellen und konkretem Automatisierungspotenzial.",
  },
  {
    number: "02",
    title: "Technisches Konzept",
    body: "Ein klares Zielbild für Ablauf, Systeme, Schnittstellen, Prüfregeln und Verantwortlichkeiten.",
  },
  {
    number: "03",
    title: "Fertige Umsetzung",
    body: "Eine produktiv nutzbare Automatisierung, die in Ihrer bestehenden Systemlandschaft läuft.",
  },
  {
    number: "04",
    title: "Schnittstellen",
    body: "Eingerichtete Verbindungen zu den benötigten Programmen, Datenquellen und Fachanwendungen.",
  },
  {
    number: "05",
    title: "Tests & Abnahme",
    body: "Geprüfte Standard- und Ausnahmefälle sowie eine gemeinsame Abnahme vor dem Produktivstart.",
  },
  {
    number: "06",
    title: "Dokumentation",
    body: "Verständliche Unterlagen zu Ablauf, Bedienung, Zuständigkeiten und technischen Komponenten.",
  },
  {
    number: "07",
    title: "Übergabe",
    body: "Einweisung Ihres Teams und eine sauber übergebene Lösung statt einer technischen Blackbox.",
  },
  {
    number: "08",
    title: "Betrieb & Support",
    body: "Auf Wunsch laufende Überwachung, Fehlerbehebung und Weiterentwicklung nach dem Start.",
  },
];

const steps = [
  ["01", "Ablauf verstehen", "In einem kurzen Auftakt grenzen wir den Prozess, Beteiligte und das gewünschte Ergebnis ein."],
  ["02", "Realität prüfen", "Wir verfolgen den heutigen Weg im Detail und finden Medienbrüche, Wartezeiten und Fehlerquellen."],
  ["03", "Wirkung berechnen", "Aufwand und Nutzen werden messbar. Sie sehen vorab, wo sich eine Umsetzung tatsächlich lohnt."],
  ["04", "Lösung entwerfen", "Gemeinsam definieren wir Zielbild, Verantwortungen, Kontrollen und einen realistischen Fahrplan."],
  ["05", "Sicher umsetzen", "Wir bauen, testen und integrieren den Ablauf bis zum stabilen Betrieb und begleiten den Start."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Jantaro Startseite">Jantaro</a>
        <nav aria-label="Hauptnavigation">
          <a href="#beispiele">Beispiele</a>
          <a href="#leistungen">Leistungen</a>
          <a href="#vorgehen">Vorgehen</a>
        </nav>
      </header>

      <section className="hero section-pad" id="top">
        <div className="hero-copy">
          <h1>
            Wir automatisieren
            <br />
            Ihre <RotatingWord />
          </h1>
          <p className="hero-intro">
            Ihr Team verliert jeden Tag Zeit mit wiederkehrenden Aufgaben, manuellen Übergaben und doppelter Dateneingabe. Wir automatisieren diese Abläufe - zuverlässig und integriert in Ihre bestehende IT.
          </p>
          <div className="button-row">
            <a className="button button-dark" href="#kontakt">Erstgespräch vereinbaren ↗</a>
          </div>
          <p className="hero-proof">Kostenlos und unverbindlich</p>
        </div>
        <div className="hero-visual">
          <ProcessCockpit />
        </div>
        <ScrollCue />
      </section>

      <section className="impact section-pad" aria-labelledby="impact-title">
        <Reveal>
          <div className="impact-head">
            <div className="section-heading">
              <h2 id="impact-title">Manuelle Arbeit kostet mehr als <em>nur Zeit.</em></h2>
            </div>
            <p>Beispielrechnung auf Basis des oben gezeigten Rechnungseingangs.</p>
          </div>
          <div className="impact-grid">
            <article>
              <span>VOLUMEN</span>
              <strong>47</strong>
              <h3>Rechnungen pro Woche</h3>
              <p>Jeder Vorgang durchläuft dieselben manuellen Handgriffe erneut.</p>
            </article>
            <article>
              <span>AUFWAND</span>
              <strong>12 Min.</strong>
              <h3>Bearbeitung pro Rechnung</h3>
              <p>Öffnen, übertragen, prüfen, erfassen und zur Freigabe weiterleiten.</p>
            </article>
            <article className="impact-result">
              <span>VERLORENE KAPAZITÄT</span>
              <strong>9,4 Std.</strong>
              <h3>jede Woche</h3>
              <p>Fast ein kompletter Arbeitstag – jede Woche für denselben manuellen Ablauf.</p>
            </article>
          </div>
          <small className="impact-note">Beispielrechnung, kein pauschales Leistungsversprechen. Der tatsächliche Aufwand wird für Ihren Prozess individuell ermittelt.</small>
        </Reveal>
      </section>

      <section className="use-cases section-pad" id="beispiele" aria-labelledby="use-cases-title">
        <Reveal>
          <div className="section-heading">
            <h2 id="use-cases-title">Diese Arbeit<br /><em>automatisieren wir.</em></h2>
          </div>
          <div className="use-case-grid">
            {useCases.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <small>{item.result}</small>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="workflow section-pad" aria-labelledby="workflow-title">
        <Reveal>
          <div className="workflow-heading">
            <span>SO SIEHT DAS IN DER PRAXIS AUS</span>
            <h2 id="workflow-title">Eine Rechnung kommt an.<br /><em>Der Rest läuft automatisch.</em></h2>
          </div>
          <div className="workflow-grid">
            <article className="workflow-before">
              <div className="workflow-label"><span>VORHER / MANUELL</span><strong>5 Handgriffe pro Rechnung</strong></div>
              <ol>
                {workflowBefore.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}
              </ol>
            </article>
            <article className="workflow-after">
              <div className="workflow-label"><span>NACHHER / AUTOMATISIERT</span><strong><i /> Workflow aktiv</strong></div>
              <div className="automation-summary"><b>1</b><p>durchgängiger<br />System-Workflow</p></div>
              <div className="automation-flow">
                {workflowAfter.map(([label, text]) => (
                  <div className="automation-node" key={label}>
                    <i aria-hidden="true">✓</i>
                    <small>{label}</small>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
          <div className="workflow-result">
            <strong>Das Ergebnis</strong>
            <p>Statt jeden Vorgang vollständig von Hand zu bearbeiten, prüft Ihr Team nur noch Unklarheiten und Ausnahmen.</p>
          </div>
        </Reveal>
      </section>

      <section className="services section-pad" id="leistungen" aria-labelledby="services-title">
        <Reveal>
          <div className="section-heading services-heading">
            <h2 id="services-title">Weniger Handarbeit.<br /><em>Mehr verlässlicher Ablauf.</em></h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <small>{service.tags}</small>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="integrations section-pad" aria-labelledby="integrations-title">
        <Reveal>
          <div className="integration-grid">
            <div className="section-heading">
              <span className="eyebrow">IHRE SYSTEME BLEIBEN</span>
              <h2 id="integrations-title">Wir integrieren uns in <em>Ihre vorhandene IT.</em></h2>
              <p>Kein Plattformwechsel notwendig. Wir automatisieren auf Basis der Systeme, die Sie bereits verwenden, und binden individuelle Fachsoftware über vorhandene Schnittstellen an.</p>
            </div>
            <ul className="integration-list">
              {integrations.map((integration) => <li key={integration}>{integration}<span>↗</span></li>)}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="deliverables section-pad" id="ergebnis" aria-labelledby="deliverables-title">
        <Reveal>
          <div className="deliverables-head">
            <span>WAS SIE KONKRET BEKOMMEN</span>
            <div className="section-heading">
              <h2 id="deliverables-title">Kein Konzept für die Schublade.<br /><em>Eine fertige Lösung.</em></h2>
            </div>
            <p>Von der ersten Analyse bis zum stabilen Betrieb erhalten Sie alle Bausteine, die für eine nachvollziehbare und nutzbare Automatisierung notwendig sind.</p>
          </div>
          <div className="deliverable-grid">
            {deliverables.map((item) => (
              <article key={item.number}>
                <span>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="process section-pad" id="vorgehen" aria-labelledby="process-title">
        <Reveal>
          <div className="section-heading">
            <h2 id="process-title">Ein klarer Weg.<br /><em>Fünf belastbare Schritte.</em></h2>
          </div>
          <ol className="step-list">
            {steps.map(([number, title, body]) => (
              <li key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="faq section-pad" id="fragen" aria-labelledby="faq-title">
        <Reveal className="faq-reveal">
          <div className="section-heading faq-heading">
            <h2 id="faq-title">Direkte Fragen.<br /><em>Klare Antworten.</em></h2>
          </div>
          <Faq />
        </Reveal>
      </section>

      <section className="contact section-pad" id="kontakt" aria-labelledby="contact-title">
        <Reveal>
          <div className="contact-head">
            <span>UNVERBINDLICH ANFRAGEN</span>
            <h2 id="contact-title">Welcher Prozess<br /><em>kostet Sie noch Zeit?</em></h2>
            <p>Beschreiben Sie kurz, was heute noch manuell läuft. Wir prüfen, ob und wie sich der Prozess sinnvoll automatisieren lässt.</p>
          </div>
          <form className="contact-form">
            <div className="contact-fields">
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Ihr Name" />
              </label>
              <label>
                <span>E-Mail</span>
                <input type="email" name="email" placeholder="name@unternehmen.de" />
              </label>
              <label>
                <span>Unternehmen</span>
                <input type="text" name="company" placeholder="Unternehmen" />
              </label>
            </div>
            <label className="contact-message">
              <span>Was soll automatisch laufen?</span>
              <textarea name="process" rows={3} placeholder="Zum Beispiel: Eingehende Rechnungen werden heute manuell geprüft und in DATEV übertragen ..." />
            </label>
            <div className="contact-submit">
              <small>Wir melden uns innerhalb von 24h persönlich bei Ihnen.</small>
              <button className="button button-accent" type="button">Anfrage senden ↗</button>
            </div>
          </form>
        </Reveal>
        <footer>
          <span>© 2026 Jantaro</span>
          <Link href="/impressum">Impressum</Link>
          <a href="mailto:kontakt@jantaro.de">kontakt@jantaro.de</a>
        </footer>
      </section>
    </main>
  );
}
