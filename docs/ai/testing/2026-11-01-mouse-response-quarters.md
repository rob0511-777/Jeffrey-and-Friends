# PR #7 – verlässlichere Übergabe, natürliche Befehle und Viererfelder

Stand 01.11.2026. Bestehender Branch `feature/mouse-grid-2-i18n`,
Basis der hier beschriebenen Korrektur `408d1dea2e456fbec86207dc3a668227ef58462e`.
PR #7 bleibt gegen `feature/mouse-grid-consent` gestapelt. PRs #4, #5 und #6,
die separaten README-Arbeiten und die Version 0.7.4 bleiben unverändert.

## Beobachtung und belegte Ursachen

Der Nutzer berichtet einen grundsätzlich erfolgreichen Versuch der Maussteuerung
mit OpenAI Live auf einem echten Windows-Rechner, aber wechselhafte Reaktionen.
Das ist eine Nutzerrückmeldung, keine von dieser Umgebung ausgeführte Abnahme.
Diese Folgeänderungen wurden ausschließlich unter Linux simuliert/geprüft.

Drei getrennte Einflüsse sind im bisherigen Code belegbar:

1. **Start-/Auswahl-Rennen:** `show` wartet auf die asynchrone Monitorermittlung.
   Ein direkt folgender `select` wurde vorher gegen `grid === null` ausgeführt
   und verworfen. Ein gezielter Test mit verzögertem Snapshot schlug vor der
   Korrektur fehl. Jetzt geordnete Dispatch-Warteschlange, maximal 64 wartende
   Aufträge. Stopp/Exit/Topologieänderung invalidieren Initialisierung und
   wartende Aufträge sofort. Bewegungsframes werden nicht serialisiert abgewartet;
   neue Ziele ersetzen weiterhin eine laufende Bewegung.
2. **Überschriebene Freigabe:** Ein einziges `lastMouseRequest` wurde durch den
   nächsten bestätigten Satz oder gewöhnlichen Sprachbeginn ersetzt/gelöscht.
   Isolierte Gegenprobe mit unverändertem Main-Code aus `408d1de` und zwei
   bestätigten Legacy-Befehlen: älterer B3-Auftrag abgelehnt, jüngster D4-Auftrag
   angenommen. Jetzt getrennte einmalige numerische Kennungen für OpenAI-Mausaufträge,
   begrenzter Freigabepuffer, weiterhin gleicher Absender/aktives Live, gleicher
   ausdrücklicher Text und 30-Sekunden-Frist. Verwendete, wiederholte, nach Stopp
   ausstehende und nach neuerem IPC-Auftrag verspätet übergebene ältere Kennungen
   werden abgewiesen. Die ursprünglichen String-Aufrufe bleiben kompatibel.
3. **Strikte Parsermuster:** Alle zehn neu angeforderten natürlichen Varianten
   fehlten vorher. Der initiale gezielte Testlauf zeigte zehn entsprechende
   Fehler. Varianten sind jetzt explizit Parseraktionen zugeordnet; natürliche
   Feldpräfixe stehen auch in der geschlossenen lokalen Windows-Grammatik.
   Negationen, Zitate, Beispiele und Zusatzaktionen bleiben abgewiesen.

Diese Befunde erklären mögliche Verluste/Uneinheitlichkeit im Softwarepfad.
Sie beweisen **nicht**, welcher Anteil der realen Windows-Beobachtung durch ASR,
Netzwerk, Audio/VAD, Helferstart, IPC-Last oder eigentliche Bewegung entstand.
Die Geschwindigkeit und Interpolationsformel wurden nicht erhöht/geändert.
Keine Bewegung auf Teiltranskripte und kein weiterer bezahlter Modellaufruf.

## Viererfelder und Auswahlhistorie

- Ebene 0 und erste sichtbare Unterteilung: 4×5/A1–D5.
- Zweite und weitere sichtbare Unterteilungen: 2×2 mit den vorhandenen Richtungen.
- Eigener `subdivisionDepth` trennt sichtbare Rasterebenen vom bisherigen
  Gesamttiefenbudget einschließlich interner Feinsteuerung.
- Im 4×5-Raster verfeinern Richtungen die ausgewählte Region intern. In einer
  Viereransicht wählen sie ausschließlich eines der vier sichtbaren Felder;
  Wiederholung erzeugt keine zusätzliche Viertelung. „Feld unterteilen“ ist der
  ausdrückliche Auftrag zur nächsten sichtbaren Verkleinerung.
- A1–D5-Ziele in Viereransicht werden vor einer Modellmutation abgewiesen.
  Beschriftungen sind lokalisiert, bei kleinen Flächen abgekürzt oder ausgeblendet.
- Der Renderer erhält die gleichen ganzzahligen Zellen wie das Bewegungsmodell;
  Elternansichten besitzen ihre eigene Geometrie. Keine separate Ecklegende.
- Zurück nimmt genau einen geänderten Auswahl-, internen Viertelungs- oder
  Unterteilungsschritt zurück. Bis zu 256 Schritte; Reset leert die Historie.
  Auswahl sichtbarer Felder verbraucht kein zusätzliches Tiefenbudget.
- Neue 4×5-Ansicht braucht mindestens 10×8 Pixel, neue Viereransicht mindestens
  4×4 Pixel. Ungerade Abmessungen werden ohne Lücken ganzzahlig partitioniert.

## Optionale Diagnose

`JEFFREY_MOUSE_DIAGNOSTICS=1` vor App-Start aktiviert maximal 1.024 strukturierte
Konsolenzeilen. Standard aus, keine gespeicherte Freigabe und keine automatische
Datei. Feste Codes, numerische Kennungen und relative Abstände, keine Inhalte,
Koordinaten, Titel, Schlüssel oder freien Fehlertexte. Der native START-Hinweis
wird nur bei dieser Aktivierung ausgegeben. Frame-Interpolation, Betriebssystem-
prüfung pro Frame und Stoppgeneration bleiben bestehen.

[Windows-Anleitung und Grenzen](../../MAUS-DIAGNOSE.md) unterscheiden empfangene
VAD-/Transkriptzeiten, Parser, IPC, Warteschlange, Helferbereitschaft, ersten
nativen Schreibframe und Bewegungsende. Zeiten enthalten Prozess-/Pipe-/Netzanteile;
keine Behauptung einer isoliert gemessenen ASR-Latenz oder des ersten sichtbaren Pixels.

## Tatsächlich ausgeführte Tests

Umgebung: Linux, Node 24.19.0, portable PowerShell 7.4.7.
**Keine kostenpflichtigen Live-API-Aufrufe, keine echten neuen Windows-Tests.**

```sh
node --test --test-isolation=none tests/*.test.cjs
```

Aktueller Gesamtstand: **508 bestanden, 0 Fehler**. Ausgangsstand vor diesem
Auftrag: **472 bestanden, 0 Fehler**, ebenfalls frisch unter Linux ausgeführt.

Wesentliche neue/angepasste Regressionen:

| Bereich | Nachweis |
| --- | --- |
| Alle zehn angeforderten deutschen Varianten | Parseraktion, Ziel und alle fünf Namen; lokale Grammatik enthält Varianten |
| Gespräch / Verneinungen / Zitate / angehängte Aktionen | Keine Freigabe oder teilweise Ausführung |
| Bestehende Befehle und fünf andere Sprachen | Vorhandene Suite; alle 2.809 deutschen Grammatikphrasen passieren Parser, weiterhin unter 4.000 |
| 4×5 → 4×5 → vier Felder | Richtige Region, weitere Viereransicht, Elternraster, keine unsichtbaren A1–D5-Ziele |
| Richtungen / Zurück / Reset | Keine doppelte Viertelung, Auswahl und Unterteilung einzeln zurücknehmbar |
| Physische Geometrie | Ungerade Breite/Höhe, negative Ursprünge, lückenlose Flächen, Tiefe/Pixelminimum und DPI-Stub |
| Reaktionspfad | Snapshot verzögert, Folgeauswahl gepuffert, Stopp verwirft Queue, mehrere Freigaben, VAD ohne Entzug, Wiederholung/veraltete Übergabe abgewiesen |
| Diagnose | Standard aus, explizit an, feste Felder/Codes, ungültige Daten und private Zusatzfelder verworfen, Limit, finale statt Teiltranskripte, Start/Ende nur für aktuelles Ziel |
| Gespräch / Bestand | Bestehende geordnete Antworten, Desktop-/Textpfade, Zustimmung, Mikrofonfreigaben, Wakeword und 45-Sekunden-Limit |

Weitere tatsächlich ausgeführte Prüfungen:

- `tests/read-selection.test.ps1`: **31 bestanden, 0 Fehler**, Mock-UIA unter Linux.
- `tests/mouse-motion.test.ps1`: PASS, inklusive einmaligem Started-Ereignis,
  Interpolation, negativen Koordinaten, Stopp, Ersetzen, ungültigem Monitor und
  begrenztem Cursor; C# 5 mit verwalteten OS-Grenzen, keine echten `user32`-Aufrufe.
- Geänderte JavaScript-Quellen geparst und sechs vollständige Katalogspalten mit
  passenden Platzhaltern geprüft; jetzt 465 Schlüssel. Markdown/relative Links
  sowie Diff-/Scope-Prüfung gegen `408d1de`.
- Charakter-/Stimmenfilter-/Lippenquellen, Paketdateien, README-Dateien, Provider,
  Desktop-/Textdienste und Zustimmungsschema bleiben unverändert. Native Bewegung
  erhielt nur das erste-Frame-Ereignis mit explizit aktivierter Ausgabe.

## Noch nötige Windows-11-Prüfung

1. Neue deutsche Sätze und kurze Altbefehle im selben OpenAI-Live-Gespräch vergleichen.
   Zwischen Mausbefehlen normale Frage und ausdrückliche Bildschirmfrage stellen;
   nur Mausbefehle dürfen ohne unnötige KI-Antwort ausgeführt werden.
2. Mit optionaler Diagnose langsame Reaktionen zuordnen: VAD-Stopp bis finales
   Transkript, Parserannahme, IPC, Queue, kalter/warmer Helfer, Start bis Done.
   Keine Ursache allein aus gefühlter Dauer oder voreiliger Geschwindigkeitserhöhung
   ableiten. Vertrauliche Inhalte aus allen Testschritten heraushalten.
3. D4 → Unterteilen → B3 → Unterteilen: vier korrekt platzierte Richtungsfelder.
   Richtungen wiederholen, weiter unterteilen, einzeln Zurück, vollständiger Reset,
   A1–D5 in Viereransicht ablehnen; kleine/ungerade Bereiche und alle Locales prüfen.
4. Neue Ziele während langer Bewegung, Sprach-Stopp und UI-Stopp während Start
   und Bewegung. Keine nachlaufenden Ziele. Stopp-Latenz einschließlich ASR messen.
5. Negative Monitore, 100/125/150/200 % und gemischte DPI, Hochkant, Hotplug,
   Monitorlücken, Durchklickbarkeit, Fokus und reale Zeigerposition vergleichen.
6. Drei reale 45-Sekunden-Disconnects mit erneutem Wakeword-Start, bestätigte
   Mikrofonübergabe, Schlaf und Charakter-/Anbieterwechsel. Gemini-Fallback erhalten.
7. Editor-/Browser-UIA, Bildschirmmonitorwahl, Vorlesen, getrennte dauerhafte/Einmal-
   Freigaben und Widerruf sowie alle fünf Stimmen/Filter/Animationen erneut prüfen.

Die Nutzerrückmeldung über einen grundsätzlich erfolgreichen früheren Windows-
Versuch ersetzt diese Abnahme der neuen Korrekturen nicht. Keine vollständige
Windows-Freigabe, kein Merge und kein Release aus diesen Simulationsergebnissen.

[Bedienung](../../MAUSSTEUERUNG.md) · [Deutsche Befehle](../../MAUSBEFEHLE.de.md) ·
[Historischer #7-Nachweis](2026-11-01-feature-mouse-grid-2-i18n.md)
