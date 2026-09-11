const questions = [
  {
    question: "Für welche Betriebe ist Jantaro gedacht?",
    answer:
      "Für kleine und mittelständische Unternehmen mit wiederkehrenden administrativen Prozessen. Besonders sinnvoll ist unsere Arbeit dort, wo E-Mail, Excel, DATEV, ERP, CRM oder Fachsoftware heute noch manuell miteinander verbunden werden.",
  },
  {
    question: "Wie setzt sich die Investition zusammen?",
    answer:
      "Der Aufwand richtet sich nach Prozessumfang, Schnittstellen und gewünschtem Automatisierungsgrad. Nach der Analyse erhalten Sie ein transparentes Festpreisangebot ohne versteckte Positionen.",
  },
  {
    question: "Wann ist eine Lösung einsatzbereit?",
    answer:
      "Klar abgegrenzte Abläufe können oft innerhalb weniger Wochen produktiv laufen. Größere Systemlandschaften setzen wir in kontrollierten Etappen um, damit der Betrieb jederzeit stabil bleibt.",
  },
  {
    question: "Braucht unser Team technisches Vorwissen?",
    answer:
      "Nein. Wir übersetzen Ihre fachlichen Abläufe in Technik, dokumentieren die Lösung verständlich und sorgen dafür, dass Ihr Team sie im Alltag sicher bedienen kann.",
  },
  {
    question: "Bleiben Freigaben durch Menschen möglich?",
    answer:
      "Ja. Kritische Entscheidungen bleiben bewusst bei den zuständigen Personen. Die Automatisierung bereitet Informationen vor, prüft Regeln und übergibt genau an den vorgesehenen Kontrollpunkten.",
  },
  {
    question: "Was geschieht nach dem Start?",
    answer:
      "Wir beobachten die ersten produktiven Läufe, beheben Reibungspunkte und entwickeln die Automatisierung bei Bedarf weiter. Zuständigkeiten und Support werden vor dem Go-live klar vereinbart.",
  },
];

export function Faq() {
  return (
    <div className="faq-list">
      {questions.map((item, index) => (
        <details key={item.question} open={index === 0}>
          <summary>
            <span>0{index + 1}</span>
            <strong>{item.question}</strong>
            <i aria-hidden="true">+</i>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
