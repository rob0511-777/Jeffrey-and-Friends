# Testnachweis: Rasterstart und begrenztes Mausradscrollen

> Nachtrag vom 02.11.2026: Der Benutzer bestätigt inzwischen unter Windows das
> wieder funktionierende Raster und Scrollen wie gewünscht; Links-/Rechtsklick und
> bisherige Maussteuerung waren zuvor positiv getestet. Die folgenden technischen
> Versuche beschreiben ihren damaligen Prüfstand. Sie sind keine vollständige
> eigene Windows-Abnahme. [Aktueller Praxistest und Dokumentationsprüfung](2026-11-02-user-practice-docs.md).

Geprüft am 02.11.2026 (Europe/Berlin). Repository
[rob0511-777/Jeffrey-and-Friends](https://github.com/rob0511-777/Jeffrey-and-Friends),
Branch `feature/desktop-clicks-menus-characters`, [Draft PR #8](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/8), Basis weiterhin PR #7.
Ausgangscommit `7a1a834e4208358a16196f694f875dcad6fae57c`;
Programmcommit `60b0d9aa6f51662fce0ee50b9548bfeeb9a62f26`. Kein Merge, Release oder Versionswechsel.

Nachfolgend meldete der Nutzer eine Regression: Raster erscheint gar nicht mehr.
Der [gesonderte Nachweis](2026-11-02-grid-overlay-regression.md) korrigiert eine
Testlücke in der Electron-Ladereihenfolge. Die folgenden Ergebnisse bleiben der
historische Stand dieses Auftrags, keine nachträgliche Windows-Abnahme.

## Windows-Rückmeldung und belegte Ursachen getrennt

Nutzerfeedback: Bewegung, Unterteilungen sowie Einzelklicks funktionieren gut.
Rasterstart wird teilweise erst nach Wiederholung ausgeführt; stattdessen spricht
Jeffrey häufig. Das ist kein in dieser Linux-Umgebung selbst beobachteter Windows-Test.
Das tatsächliche ASR-Transkript bzw. der Anteil von Windows, VAD, Netzwerk oder
kaltem Prozessstart lässt sich ohne Windows-Messung nicht vollständig bestimmen.

Folgende Bedingungen wurden dagegen im Produktionscode reproduziert:

1. **Steuerparser hinter einem frühen Busy-Abbruch:** Bei aktivem Desktop-Vorlesen
   (`desktopReadoutResponseId`) bzw. Desktop-Verarbeitung wurde der finale
   Rasterstart vor dem Mausparser verworfen. Test: trotz unterstütztem vollständigem
   Starttranskript **kein IPC-Mausauftrag**. Jetzt werden ausdrückliche Steueraufträge
   zuerst geprüft und übernommen; sie verwerfen die bisherige Desktop-Auswertung/
   -Sprachantwort. Gewöhnliche Sprachereignisse bleiben davon getrennt.
2. **Widerruf einer alten normalen Antwort nicht dauerhaft zugeordnet:** Ein
   übernommener Steuerbefehl blockierte Antworten nur über `desktopBlocked`. Neuer
   VAD-Sprachbeginn setzte das Flag zurück; ein verspätetes `response.created` einer
   schon zuvor angeforderten normalen Antwort durfte wieder starten. Nun bleiben
   deren begrenzte clientseitige Kennungen widerrufen. Ein alter Antwortstart wird
   abgebrochen und verbraucht keine inzwischen neue Gesprächsanforderung.
3. **Zu frühe Startbestätigung:** Der Rasterdienst wartete weder auf das tatsächliche
   `READY` des nativen Helfers noch auf geladene/gezeichnete Overlayinhalte. In den
   Tests wurde trotz ausbleibender Bereitschaft Erfolg gemeldet bzw. ein Helferfehler
   übergangen. Jetzt wartet er sequenziell auf Helferbereitschaft und aktuelle
   Zeichnungsbestätigung des richtigen Overlay-Renderers, jeweils maximal acht
   Sekunden. Ladefehler/Timeout/Rendererverlust liefern feste Fehler, keinen Erfolg.
   Veraltete Ereignisse eines zerstörten Overlays dürfen keinen neuen Start zerstören.

Dies belegt konkrete Softwarefehler bzw. fehlende Fehlererkennung. Es belegt nicht,
dass alle realen Windows-Aussetzer dieselbe Ursache hatten. Keine neue Startphrase
wurde geraten oder eine nicht unterstützte Äußerung pauschal als Befehl umgedeutet.
Parsernormalisierung und bestehende Start-/Monitorvarianten bleiben erhalten.

## Gegenprobe und unveränderter Bestand

Vor Programmänderungen: `node --test --test-isolation=none tests/*.test.cjs`,
**590 bestanden, 0 Fehler, Exit 0**. Lokales Arbeitsartefakt:
`/workspace/work/scroll-baseline-node.txt`. Arbeitsbaum bei Beginn sauber.

Gezielte Tests waren vor der jeweiligen Korrektur rot. Zusätzlich isolierte
Gegenprobe mit unverändertem `mouse-control.cjs`, `grid-overlay.cjs` und
`realtime.js` aus `7a1a834` (nur temporärer Node-Ladehook außerhalb des Repositories):
**6 von 11 Fällen fehlgeschlagen**, 5 bereits vorher bestanden. Nach Wiederherstellung
des aktuellen Codes alle 11 und die vollständige Suite grün. Keine Arbeitsdatei
für die Gegenprobe zurückgesetzt. Ergebnis lokal:
`/workspace/work/grid-start-counterfactual.txt`.

Alle **73 bestehenden Testdateien** sind bytegleich zum Ausgangscommit. Raster-
und Klick-/Menütests wurden nicht abgeschwächt. Die native Bewegungsengine einschließlich
Interpolation ist unverändert. Paketversion 0.7.4, Abhängigkeiten, Charakterdefinitionen,
Stimmen, Filter, gespeicherte Einstellungen, Anbieter-/Live-Konfiguration,
45-Sekunden-Idle und Bildschirm-/Text-/Zustimmungspfade bleiben erhalten.
README-/Bildänderungen auf `main` wurden nicht übernommen oder verändert. `main`
steht bei der Remoteprüfung auf `e2e34f96cc8402349eb8b97f6fc2b54c4adfc0a9`;
#7 bleibt auf `ff3f610720e6ebc02c810e9bada90baa2710c050`.

## Frisch ausgeführte Prüfungen

| Prüfung | Ergebnis | Art und Grenze |
| --- | --- | --- |
| Vollständige Node-Suite | **651 bestanden, 0 Fehler, Exit 0** | Node 24.19.0/Linux, 590 unveränderte Basisfälle + 61 neue; simulierte OS-/Electron-/IPC-/Audio-/Providergrenzen |
| `tests/mouse-motion.test.ps1` | PASS, Exit 0 | Produktions-C#5 mit injizierten Cursor-/Monitorgrenzen, keine user32-Ausführung |
| `tests/mouse-click.test.ps1` | PASS, Exit 0 | Produktionsklicklogik, simuliertes SendInput/Busy/Release; kein Windows-Klick |
| `tests/mouse-wheel.test.ps1` | PASS, Exit 0 | Produktions-Scrollengine und Zielbindung, künstliche Zeit/SendInput/Routing/Fokusgrenzen |
| `tests/context-menu-uia.test.ps1` | PASS, Exit 0 | Bestehendes Menübackend mit Fake-UIA/Fenster-/Eventgrenzen |
| `tests/read-selection.test.ps1` | **31 bestanden, 0 Fehler**, Exit 0 | Bestehender Auswahlcode mit Mock-UIA |
| Quellen/Katalog | Bestanden | Geänderte JS-Syntax, PowerShell-Quellenparser, **511 Schlüssel × 6 Sprachen** und gleiche Platzhalter |
| Dokumentation/Scope | Bestanden | Sieben technische Markdown-Dateien gerendert, 41 relative Links/Anker, Diff- und Bestandsschutzprüfung |

PowerShell lief als portable Version 7.4.7 unter Linux. C#-Sprachversion 5 wurde
explizit kompiliert. **Das ist keine Ausführung unter Windows PowerShell 5.1 und
kein Test installierter Windows-Assemblies, PInvoke, SendInput oder UIA-Provider.**
Es gab keine selbst ausgeführten echten Windows- oder kostenpflichtigen Live-API-Tests.
Die Sandbox benötigt `--test-isolation=none`; npm-Skripte bleiben unverändert.
Finaler lokaler Node-Output: `/workspace/work/scroll-final-node.txt`. Keine Logs,
Caches, Diagnosedaten oder privaten Inhalte werden committet.

## Neue Fälle und festgelegtes Scrollverhalten

- Erster Start wartet auf native und Overlaybereitschaft; Fehler räumt Zustand auf.
  Wiederholte Starts teilen die laufende Initialisierung ohne Parallelstart.
  Wiederöffnen und unsichtbares aktives Raster bleiben gültig. Stopp während
  Initialisierung, verspätete/alte Freigaben, Queue und Sichtbarkeitsregeln bleiben
  durch die bestehenden und neuen Fälle abgesichert. Zusätzlich Main/IPC über drei
  simulierte Sprachsitzungen mit zwei `closed`/`opened`-Übergängen geprüft: alte
  Freigaben gelten nicht, frischer erster Start wird einmalig angenommen. Dies ist
  kein echter 45-Sekunden-Disconnect und keine Audioverbindungsprüfung.
- Rasterstart während Desktop-Sprachausgabe wird übernommen; alte normale Antwort
  bleibt auch nach VAD gesperrt. Technische Fehler bei Raster, Klick, Menü und
  Scrollen erzeugen keine freie Ersatzantwort. Die nächste normale Frage bleibt möglich.
- Acht deutsche Scrollvarianten, höfliche Anreden mit allen fünf Namen, zwei neue
  Stoppformulierungen. Verneinungen, Zitate, Erwähnungen und zusammengesetzte Aufträge
  werden abgewiesen. Übrige fünf Sprachen behalten ihre bisherigen Befehle, ohne
  eine neue Scrollgrammatik zu behaupten.
- Schritt: ein nativer Wheelimpuls ±120; langsam: ±15 höchstens alle 250 ms, maximal
  30 Sekunden. Wiederholung und Richtungswechsel erzeugen weder zweite Schleife noch
  zusätzliche Sofortimpulse und verlängern die Frist nicht. Verzögerte Ticks werden
  nicht nachgeholt. Ein Schritt ersetzt einen Dauerlauf.
- Nur bestätigtes Windows-Wheelrouting unter den Zeiger (Wert 2) wird zugelassen.
  Zielbereich/Prozess, Cursorposition, Vordergrund und Menü-/Tastenstatus werden geprüft.
  Änderung stoppt vor weiterer Eingabe. Keine Aktivierung, Klicks, Cursorbewegung,
  Tasten- oder Zwischenablagefallbacks. SendInput-Erfolg bestätigt keine Pixelbewegung.
- Bewegung/Klick beendet Scrollen zuerst. Scrollen bei Bewegung, ausstehendem Klick
  oder offenem Menü wird ohne Warteschlange abgewiesen. Stopp, Schlaf, Live-Ende,
  Charakter-/Anbieterwechsel, App-Ende, Helper-/Steuerkanalverlust invalidieren den Lauf.
  Keine Ereignisse nach verarbeitetem nativen Stopp; eine bereits angenommene
  Windows-Eingabe ist nicht rückgängig zu machen.
- Native Bestätigungsfrist und Pipe-Fehler bereinigen den Auftrag ohne Wiederholung.
  Alte Acks/Endmeldungen starten nichts neu. Ohne Raster bleibt derselbe lokale
  Steuerhörer für den langsamen Lauf aktiv; kein paralleles Wakeword-Mikrofon.

## Reproduzierbare Tests

```powershell
npm test
powershell.exe -NoProfile -File tests/mouse-motion.test.ps1
powershell.exe -NoProfile -File tests/mouse-click.test.ps1
powershell.exe -NoProfile -File tests/mouse-wheel.test.ps1
powershell.exe -NoProfile -File tests/context-menu-uia.test.ps1
powershell.exe -NoProfile -File tests/read-selection.test.ps1
```

Unter Linux dieselben fünf Dateien mit `pwsh -NoProfile -File …` und für Node:

```bash
node --test --test-isolation=none tests/*.test.cjs
```

Auch auf Windows bleiben diese PowerShell-Vertragstests Simulationen. Für die
tatsächliche Betriebssystemintegration ist die folgende manuelle Abnahme notwendig.

## Konkrete Windows-11-Prüfliste: noch offen

1. **Kalter Start:** App vollständig beenden, normaler Benutzer, Windows PowerShell
   5.1, `de-DE`-System.Speech-Engine, `npm start`. Direkt nach App-/Live-Start je einen
   dokumentierten Startbefehl sprechen. Erste Darstellung und Status verfolgen;
   mit Schaltfläche/Textpfad vergleichen. Mehrfach während Initialisierung anfordern:
   eine Rasterinstanz, kein konkurrierender Mikrofonprozess.
2. **Wiederaufnahme:** „Raster aus“ und neu starten, mehrfach wiederholen; verborgenes
   aktives Raster wieder anzeigen. Drei echte 45-Sekunden-Disconnects, lokaler Weg,
   Wakeword und Live-Neustart. Stopp während Snapshot/Helper-/Overlaystart: keine
   verspätete Bewegung oder falsche Erfolgsmeldung.
3. **Jeffrey spricht:** Während normaler KI-Ausgabe und separat während Desktop-
   vorlesen Raster starten. Übernommener Befehl muss stumm verarbeitet werden, keine
   freie Ersatzantwort. Danach normale Frage beantworten lassen. Technischen Fehler
   unkritisch provozieren, Fehlstatus statt Erfolg und anschließend erneut starten.
4. **Messen:** Optional [inhaltsfreie Diagnose](../../MAUS-DIAGNOSE.md) ausdrücklich
   aktivieren. `grid-start`, Snapshot, `input-ready`, `overlay-loaded` und `overlay-ready`
   getrennt vergleichen. Nur feste Codes/Zeitabstände teilen, keine Transkripte,
   privaten Fenstertitel, Bilder oder Schlüssel. Keine Ursache ohne Messbeleg behaupten.
5. **Scrollschritte:** Explorer, unterstützter Browser, Editor mit unkritisch langem
   Inhalt; beide Richtungen mit/ohne/verborgenem Raster, OpenAI Live und lokal.
   Ein Schritt ±120, keine Zeigerbewegung, keine zusätzlichen Klicks. Windows-Zeilen-
   und Seiteneinstellungen variieren; keinen Pixelabstand erwarten.
6. **Inaktives Fenster:** Andere App fokussieren, Zeiger auf Testfenster. Windows-
   Option „Inaktive Fenster beim Daraufzeigen scrollen“ ein/aus. Bei nicht bestätigtem
   Routing keine Eingabe; keine heimliche Fokus-/Zieländerung. Anwendungen, die
   Hintergrund-/Teilimpulse ignorieren, gesondert als Einschränkung notieren.
7. **Langsamer Lauf:** Gleichmäßige Teilimpulse, Wiederholungen, Richtungswechsel;
   keine Parallel-/Nachholschübe und Ende spätestens nach 30 Sekunden ohne Verlängerung
   durch gleiche Befehle. Sprach-/UI-Stopp, Zeiger-/Fokuswechsel, Menü öffnen,
   physische Taste halten, Live-/lokalen Kanal verlieren, Schlaf/Charakter/Anbieter/
   App-Ende: keine späteren Scrollimpulse. Schon zugestellte OS-Impulse getrennt betrachten.
8. **Bestand:** Links-/Rechtsklick, native Kontextmenüs/Untermenüs/Bestätigung/Abbruch,
   alle fünf Figuren mit unveränderten Stimmen, A1–D5 → erste Unterteilung → B3 →
   Viereransicht → Wiederholung/Zurück/Reset. Mehrmonitore/DPI, Editor-/Browser-
   Textauswahl, Bildschirmfreigaben/Widerruf und Gemini-/lokaler Fallback erhalten.

Bezahltes OpenAI-/Gemini-Live hier nur mit gesondertem Auftrag testen. Eine grüne
Simulation ist keine Windows-Abnahme oder Zusage gleichmäßiger echter ASR-/Stopp-Latenz.

## Bewusst offen: „Jeffrey, Ruhe“

Der Nutzer meldet weiterhin gesprochene Bestätigungen und spätere Antworten trotz
„Jeffrey, Ruhe“. Dieser Auftrag baut Ruhemodus/Gesprächigkeit ausdrücklich nicht um.
**Nicht behoben, nicht eigenständig unter Windows reproduziert.** Als getrennten
Folgeauftrag untersuchen; keine Änderung an Charakteren oder allgemeiner Gesprächslogik
als Teil dieser Korrektur behaupten.

## Dateiliste dieser Fortsetzung

Programm und neue Tests:

- `desktop-action-commands.js`
- `desktop-action-service.cjs`
- `grid-overlay.cjs`
- `locales/catalog.js`
- `main.cjs`
- `mouse-commands.js`
- `mouse-control.cjs`
- `mouse-diagnostics.cjs`
- `mouse-grid-preload.cjs`
- `mouse-grid-renderer.js`
- `realtime.js`
- `scripts/physical-mouse.cs`
- `tests/grid-overlay-ready.test.cjs`
- `tests/grid-start-diagnostics.test.cjs`
- `tests/grid-start-native-ready.test.cjs`
- `tests/grid-start-reliability.test.cjs`
- `tests/mouse-wheel.test.ps1`
- `tests/scroll-commands.test.cjs`
- `tests/scroll-main-integration.test.cjs`
- `tests/scroll-service.test.cjs`
- `tests/windows-scroll.test.cjs`
- `windows-mouse.cjs`

Dokumentation: `docs/MAUSBEFEHLE.de.md`, `docs/MAUSSTEUERUNG.md`,
`docs/MAUS-DIAGNOSE.md`, `docs/MEHRSPRACHIGKEIT.md`, `docs/KONTEXTMENUES.md`,
dieser Testnachweis und `docs/ai/HANDOVER.md`. Historische Testberichte bleiben
als damaliger Stand erhalten; README und Bilder wurden nicht geändert.
