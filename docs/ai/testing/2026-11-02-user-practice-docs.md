# Benutzer-Praxistest und Sicherung des funktionierenden Standes

Erfasst am **02.11.2026 (Europe/Berlin)** für
[Draft PR #8](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/8),
Branch `feature/desktop-clicks-menus-characters`, Basis weiterhin
`feature/mouse-grid-2-i18n` ([PR #7](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/7)).
Ausgangs-HEAD: `b77cddd2a9012e625d488817c93b04caf9556397`;
Programmfix: `b7e985082f0e6a06a4dd764b5a7fa35b948209c9`.

## Benutzerbestätigung unter Windows

Quelle ist die ausdrückliche Rückmeldung des Benutzers im aktuellen Sicherungsauftrag,
kein vom Agenten beobachteter oder selbst ausgeführter Windows-Test.
Das genaue Datum jedes vorausgegangenen Einzeltests, Windows-Build, Zielanwendungen,
Monitore, DPI-Werte und Messzeiten wurden nicht mitgeliefert.

| Bereich | Gemeldetes Ergebnis | Aussagegrenze |
| --- | --- | --- |
| Raster nach Korrektur | Funktioniert wieder | Grundfunktion bestätigt; keine vollständige Kaltstart-/DPI-/Monitor-/Sitzungsmatrix |
| Scrollen | Funktioniert jetzt wie gewünscht | Nicht als Einzelmessung von Schrittweite, Stopp-Latenz, Routingfällen oder exakter 30-Sekunden-Grenze auslegen |
| Links-/Rechtsklick | Zuvor positiv getestet | Keine pauschale Abnahme aller UIA-Kontextmenüs oder geschützter Anwendungen |
| Bisherige Maussteuerung | Zuvor positiv getestet | Nicht jede neue Phrase oder Viererebene einzeln bestätigt |

**Bekannt offen:** „Jeffrey, Ruhe“ erzeugt laut Benutzer weiterhin Bestätigungen
und spätere Antworten. Keine Korrektur, eigene Ursachenmessung oder Abnahme dieses
Verhaltens in diesem Dokumentationsauftrag.

## Frisch in dieser Sitzung ausgeführte Prüfungen

| Prüfung | Ergebnis / Umfang |
| --- | --- |
| Branch und Arbeitsbaum bei Start | Frischer Checkout; richtiger #8-Branch, sauber; HEAD und origin bei `b77cddd` |
| GitHub-Abgleich | #8 offen/Draft, Basis #7; gemeldeter Ausgangscommit bereits remote vorhanden |
| Node-Suite | `node --test --test-isolation=none tests/*.test.cjs` — **654 bestanden, 0 Fehler, Exit 0**, Linux/Node 24.22.1 |
| Markdown, relative Links/Anker, Sprachparität | **8 Markdown-Dateien gerendert, 77 lokale Links, davon 6 mit Anker geprüft; 31 gemeinsame EN/DE-Fakten und dieselben Entwicklungslinks; Exit 0** |
| Bestandsschutz | **Bestanden:** nur 8 Markdown-Dateien und das exakte englische main-Bild; Programm-/Test-/Paketdateien gegenüber `b77cddd` unverändert; deutsches Bild unverändert; `git diff --check` Exit 0 |

Die Node-Suite prüft Produktionslogik mit simulierten Systemgrenzen. Keine eigene
vollständige Windows-Abnahme, keine neue PowerShell-/native UIA-/SendInput-Ausführung,
kein neuer echter Electron-Lauf und keine bezahlten Live-API-Tests dieser Sitzung.
Frühere erfolgreiche Linux-/PowerShell-/Electron-Versuche sind in den historischen
Nachweisen dokumentiert; ihre Ergebnisse wurden hierfür nicht neu erzeugt.

## README und Sicherungsumfang

Zuerst gelesen: README und Bildänderungen auf `main` bei
`e2e34f96cc8402349eb8b97f6fc2b54c4adfc0a9` (README-Sprachreihenfolge aus
`dd10ba8`, englisches Projektbild aus `e2e34f9`). Die neue README erhält diesen
Bestand und ergänzt beide Sprachen um dieselben #7/#8-Funktionen und Grenzen.
94 nicht ersetzte Inhaltsblöcke der aktuellen main-README sind erhalten; lediglich
die Statusabsätze werden aktualisiert, die Basiserkennung gekennzeichnet und
die deutschen Überschriften an dieselbe Gliederungstiefe angepasst.

- Englisch zuerst, darunter Deutsch; jeweils passendes bestehendes Projektbild.
- Raster A1–D5, erste A1–D5-Unterteilung, ab zweiter Ebene vier Richtungsfelder;
  natürliche Befehle, weiche Bewegung, Zurück/Reset/Stopp.
- Einzelklicks, lokale native UIA-Menüs mit konkreter Bestätigung und Grenzen,
  ausdrückliche Aufrufe aller fünf bestehenden Charaktere.
- Scrollschritt ±120, langsamer Lauf ±15 höchstens alle 250 ms, Stopp und maximal
  30 Sekunden; Routing unter den Zeiger und Anwendungsgrenzen.
- Klare Trennung zwischen `main`, PR #7 und PR #8; neue Aktionsphrasen nur `de-DE`.
- Benutzer-Praxistest, offene Windows-Prüfungen und „Jeffrey, Ruhe“ in beiden Sprachen.

Keine Programmänderung, neue Abhängigkeit, Versionsänderung, Merge oder Release.
Das englische Bild wird bytegleich aus `main` übernommen, das deutsche nicht verändert.
Die Sicherung gilt für den zugänglichen GitHub-Stand und diesen Dokumentationssatz.
**Der lokale Windows-Arbeitsbaum war hier nicht zugänglich**; dortige uncommittete
Änderungen wurden nicht geprüft. Historische Worktree-Pfade sind nicht vorausgesetzt.

## Noch gezielt unter Windows zu prüfen

- Kalte/wiederholte App- und Live-Starts; Wiederöffnen/unsichtbares Raster, sofortige
  B3-Folge, Stopp beim Start und Retry; Start während normaler/Desktop-Sprachausgabe.
- Alle natürlichen Varianten, Viererebenen/Zurück/Reset, echte gemischte DPI,
  Mehrmonitore/Hotplug, passende installierte Erkenner für alle sechs Sprachen.
- Scrollschritt und Dauerlauf in Explorer, Browser und Editor; inaktive Fenster
  mit Routing ein/aus, Teilimpulse, Richtungswechsel ohne Fristverlängerung,
  Stopp-Latenz und 30-Sekunden-Grenze, Fokus-/Zeiger-/Kanalwechsel und Menü-/Tastenfälle.
- Echte UIA-Menüs, Win11-Explorer/„Weitere Optionen anzeigen“, Win32 und Untermenüs;
  fehlende/mehrdeutige Einträge, Nummern, Platzmangel, destruktive Bestätigung/Abbruch.
- Alle fünf Charakteraufrufe, schnelle Wechsel, aktive gleiche Figur, Timeout,
  tatsächliche Mikrofon-/Track-Freigabe, Schlaf und Stopp während der Übergabe.
- Echte 45-Sekunden-Disconnects/Wakeword-Wiederaufnahme und Anbieterübergaben;
  bestehende Desktop-/Text-/Zustimmungspfade praktisch regressionsprüfen.

## Zugehörige Nachweise

- [Raster-Ladereihenfolge und gezielter Fix](2026-11-02-grid-overlay-regression.md)
- [Rasterstart, Scrollbedingungen und frühere Simulationen](2026-11-02-grid-start-scroll.md)
- [Klicks, Menüs und Charakteraufrufe](2026-11-02-desktop-actions.md)
- [Befehlsliste](../../MAUSBEFEHLE.de.md), [Maussteuerung](../../MAUSSTEUERUNG.md),
  [Handover](../HANDOVER.md), [zweisprachige README](../../../README.md)
