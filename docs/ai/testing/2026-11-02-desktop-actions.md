# Testnachweis: Einzelklicks, native Kontextmenüs und Charakteraufrufe

Stand: 02.11.2026, Linux, Node 24.19.0, portable PowerShell 7.4.7.
Branch `feature/desktop-clicks-menus-characters`, Basis PR #7 auf
`ff3f610720e6ebc02c810e9bada90baa2710c050`.
Geprüfter Programmstand: `3ad8e75df140c308b65c8da2ae8adcc0f4b4b673`.
Implementierung `442e09986275c021c2570288d2b84ebc60a3d446`, anschließend
explizit sichtbare Nummern mit Regressionstest in `3ad8e75`.

## Ausgangsstand und Vorgehen

Vor Programmänderungen lief die vollständige vorhandene Node-Suite: **508 bestanden,
0 Fehler, Exit 0** (`/workspace/work/actions-baseline-node.txt`, lokales Arbeitsartefakt).
Die vorhandene nicht committete Übergabe im #7-Worktree wurde geprüft und erhalten.
Der Nutzer meldet inzwischen einen erfolgreichen echten Windows-Test der aktuellen
Rastersteuerung. Das ist Nutzerrückmeldung zur Basis, kein eigener Windows-Test
und keine Abnahme der hier neuen Funktionen.

Gezielte rote Tests gingen Parser, Klick-/Menü- und Integrationscode voraus.
Auch die später ergänzte bestätigte Charakter-Sprachübergabe schlug vor ihrem
Modul zunächst mit zwei fehlenden Implementierungsfällen fehl. Bestehende Tests
wurden nicht abgeschwächt oder geändert. Neue Tests ergänzen die 508 Basisfälle.
Keine neuen Abhängigkeiten und keine kostenpflichtigen Live-API-Aufrufe.

## Frisch ausgeführte Prüfung

| Prüfung | Ergebnis | Aussagegrenze |
| --- | --- | --- |
| `node --test --test-isolation=none tests/*.test.cjs` | **590 bestanden, 0 Fehler, Exit 0** | Echte Node-Ausführung unter Linux; OS-/Electron-/IPC-/Audio-/Providergrenzen simuliert |
| `tests/mouse-motion.test.ps1` | **PASS**, Exit 0 | Produktions-Bewegungsalgorithmus, injizierte Cursor-/Monitorgrenzen, C# 5; keine user32-Ausführung |
| `tests/mouse-click.test.ps1` | **PASS**, Exit 0 | Produktions-Klicklogik, simuliertes SendInput/gedrückte Tasten, Busy/Stop/Release; kein Windows-Klick |
| `tests/context-menu-uia.test.ps1` | **PASS**, Exit 0 | Produktions-Menübackend kompiliert mit C# 5, Fake-UIA und Fake-Fenster-/Eventgrenzen; kein echtes Kontextmenü |
| `tests/read-selection.test.ps1` | **31 bestanden, 0 Fehler**, Exit 0 | Bestehender UIA-Auswahlskriptcode mit Fake-UIA; keine Editor-/Browser-Abnahme |
| Geänderte JavaScript-Quellen | Syntaxprüfung bestanden | Kein Nachweis einer echten Electron-Sitzung |
| PowerShell-Quellen | Parserprüfung bestanden | PowerShell 7 unter Linux ist keine Windows-PowerShell-5.1-Ausführung |
| Sprachkatalog | **495 Schlüssel × 6 Sprachen**, nichtleere Werte und gleiche Platzhalter | Keine echte Sprach-/Schrift-/ASR-Abnahme |
| Dokumentation | Sechs geänderte technische Markdown-Dateien gerendert, relative Links geprüft | Keine Neuprüfung aller externen URLs |
| Scope / Diff | `git diff --check` bestanden; bestehende Tests und geschützte Dateien unverändert | Keine pauschale Garantie gegen alle OS-Regressionsfälle |

Normale Prozessisolation ist in dieser Sandbox nicht verfügbar; deshalb wurde
`--test-isolation=none` verwendet, ohne die vorhandenen npm-Skripte zu ändern.
Der abschließende Node-Output liegt lokal unter `/workspace/work/actions-final-node.txt`;
Logs und Umgebungsartefakte werden nicht committet.

## Neue automatisierte Fälle

- Vollständige sechs deutsche Klickvarianten, fünf explizite Figurenrufmuster,
  kanonische Namen aller fünf Figuren; keine Aktion aus Zitaten, Verneinungen,
  Erwähnungen, Doppelklickwünschen und zusammengesetzten Aufträgen.
- Einmalige, sitzungs-/text-/fristgebundene finale Live-Freigaben; doppelte und
  verspätete IPC-/Transkriptübergaben; keine Aktion aus Teiltranskripten und keine
  zusätzliche Modellantwort. Interleaving mit vorhandenen Rasterbefehlen bleibt gültig.
- Klick während Bewegung/gedrückter Taste, Abbruch vor nativer Bereitschaft und
  während Vorbereitung, partielle Eingabe, Ausnahme und geprüfte Tastenfreigabe;
  weitere Eingaben bei unbestätigter Freigabe gesperrt. Transparente Jeffrey-Fenster
  werden bei der Zielbesitzerermittlung übergangen.
- Menüprozess/-fenster, Fokusverlust, erneutes gleiches Menü mit anderem Eventstand,
  Runtime-ID/Fingerprint, geschlossene/verschobene Menüs, deaktivierte/unsichtbare
  Einträge, gleiche Namen, sichtbare Nummern, Untermenü und Ersatzmenü nach Invoke.
- Konkrete destruktive Bestätigung per Name/Nummer, ungültige bzw. veraltete
  Bestätigung, Abbruch während asynchroner Prüfung, tatsächliche Schließbestätigung.
- UIA-Suche mit vielen irrelevanten Knoten und einem veralteten fremden Element;
  Win11-artiger UIA-Button im echten Menübaum; unzugängliches Pattern ohne Ersatz.
- Nicht fokussierende Nur-Lese-Anzeige außerhalb nativer Menügrenzen, fehlender
  Platz, negative/gebrochene Pixelgrenzen, DIP-Konvertierung und Datenschutzlöschung.
- Charakterwechsel über vorhandenen Pfad mit unveränderten Profilen; gleiche Figur
  ohne Neustart; lokale Mikrofonfreigabe, passendes Live-Ende, Timeout, überlappende
  Aufrufe, neuestes Ziel und Abbruch. Kein automatischer Sitzungsneustart.
- Bestehende 508 Fälle einschließlich Raster, Koordinaten/Viererfelder, Stopp,
  Sprachkataloge, 45-Sekunden-Timer, Desktop-/Text-/Zustimmungs- und Providerpfade.

## Reproduzierbare Befehle

```powershell
npm test
powershell.exe -NoProfile -File tests/mouse-motion.test.ps1
powershell.exe -NoProfile -File tests/mouse-click.test.ps1
powershell.exe -NoProfile -File tests/context-menu-uia.test.ps1
powershell.exe -NoProfile -File tests/read-selection.test.ps1
```

Die PowerShell-Vertragstests bleiben **auch unter Windows Simulationen**.
Sie rufen nicht die echten UIA-Menüs oder SendInput auf. Unter Linux alternativ:

```bash
node --test --test-isolation=none tests/*.test.cjs
pwsh -NoProfile -File tests/mouse-motion.test.ps1
pwsh -NoProfile -File tests/mouse-click.test.ps1
pwsh -NoProfile -File tests/context-menu-uia.test.ps1
pwsh -NoProfile -File tests/read-selection.test.ps1
```

## Konkrete Windows-11-Abnahme: noch offen

Nur unkritische Testdateien/-inhalte verwenden. Keine Texte, Fenstertitel,
Audioaufnahmen oder Schlüssel in Diagnose-/PR-Ausgaben übernehmen.

1. **Start und Laufzeit:** Windows PowerShell 5.1, normale Benutzerrechte, Node LTS,
   `npm install --no-audit --no-fund`, `npm start`. Native Helfer müssen ohne
   Assembly-/PInvoke-/Encodingfehler starten. `System.Speech`-Engine `de-DE` prüfen.
2. **Klicks:** Mit sichtbarem, verborgenem und beendetem Raster je sechs Varianten
   testen. Tatsächliche Cursorposition verwenden. Während langer Fahrt abweisen;
   Stopp vor Klick/Helperstart, physisch gehaltene Taste und unkritischer Fehlerfall.
   Keine unbeabsichtigten Zweitklicks, keine gehaltenen Buttons zurücklassen.
3. **Sprachwege:** OpenAI Live sowie einmaliges lokales Zuhören ohne Raster;
   derselbe lokale Hörer bei aktivem Raster/Menü. Kein konkurrierendes Mikrofon.
   Drei reale 45-Sekunden-Disconnects mit anschließender Raster-/Klick-/Menübedienung
   und Wakeword-Wiederaufnahme. Bezahltes Live nur mit gesonderter Freigabe testen.
4. **Windows-11-Explorer:** Rechtsklick auf unkritische Datei/Fläche; neue Iconleiste,
   Einfügen/Kopieren, „Weitere Optionen anzeigen“ und dessen klassisches Ersatzmenü.
   Erfolg und nicht unterstützte UIA-Strukturen ausdrücklich getrennt notieren.
5. **Klassische Win32-Menüs und Untermenüs:** Eindeutiger Name/Nummer, deaktivierter
   Eintrag, zwei gleiche Namen, „Senden an“, Untermenü neu lesen, Menü schließen.
6. **Ungültige Bindung:** Fokus zu anderer App, anderes Fenster desselben Prozesses,
   Menü schließen/erneut öffnen, Eintragsänderung, Stopp/Abbrechen während Prüfung.
   Alte Nummern, Namen und Bestätigungen dürfen keine Aktion mehr auslösen.
7. **Bestätigung:** Löschen nur an entbehrlicher Testdatei anfordern. Ohne konkrete
   Bestätigung keine Aktion; „Ja“, falsche Nummer, Fokuswechsel und Abbrechen
   verwerfen. Namen-/Nummernbestätigung danach nur für genau den aktuellen Eintrag.
8. **Anzeige / DPI:** Mehrmonitore, negative Ursprünge, verschiedene Skalierungen,
   Menüs am Rand/großes Menü ohne Platz. Kein Fokuswechsel/Überdecken, Nummern nur
   sichtbar und aktuell; nach Schließen keine alten Menütexte in der Anzeige.
9. **Charaktere:** Alle fünf explizit rufen, Wiederholung derselben Figur,
   schnelle wechselnde Aufträge, Stopp/Schlaf/Anbieterwechsel während Übergabe,
   alte Live-Verbindung tatsächlich geschlossen vor neuem Mikrofonstart. Stimmen,
   Filter und gespeicherte Profile identisch; kein automatischer neuer Live-Start.
10. **Regression:** A1–D5 → erste Unterteilung → B3 → zweite Unterteilung mit vier
    Richtungen, Wiederholung ohne Doppelviertelung, Zurück/Reset/Monitore/Stopps.
    Bildschirm-/Textauswahl im Editor/Browser, Cloud-Dialog/Widerruf, Gemini-Fallback
    und lokale KI unverändert; übrige fünf Rastersprachen mit verfügbaren Engines.

**Eigene echte Windows-Tests: keine.** Ebenso keine reale OpenAI-/Gemini-Audioabnahme,
kein bezahlter API-Test, keine verlässliche Aussage zu ASR-/Stopp-Latenz. Details der
Unterstützungsgrenzen stehen in [KONTEXTMENUES.md](../../KONTEXTMENUES.md).

## Geänderte Dateien

Implementierung und neue Tests:

- `character-call-transition.cjs`
- `context-menu-overlay.cjs`
- `context-menu-preload.cjs`
- `context-menu-renderer.js`
- `context-menu.cjs`
- `context-menu.css`
- `context-menu.html`
- `desktop-action-commands.js`
- `desktop-action-gate.cjs`
- `desktop-action-service.cjs`
- `grid-listener.cjs`
- `index.html`
- `locales/catalog.js`
- `main.cjs`
- `mouse-commands.js`
- `preload.cjs`
- `realtime.js`
- `scripts/context-menu.cs`
- `scripts/context-menu.ps1`
- `scripts/grid-listen.ps1`
- `scripts/move-pointer.ps1`
- `scripts/physical-mouse.cs`
- `tests/character-call-transition.test.cjs`
- `tests/context-menu-overlay.test.cjs`
- `tests/context-menu-uia.test.ps1`
- `tests/context-menu.test.cjs`
- `tests/desktop-action-commands.test.cjs`
- `tests/desktop-action-integration.test.cjs`
- `tests/desktop-action-local.test.cjs`
- `tests/desktop-action-service.test.cjs`
- `tests/live-desktop-actions.test.cjs`
- `tests/mouse-click.test.ps1`
- `tests/windows-click.test.cjs`
- `tests/windows-context-menu.test.cjs`
- `windows-context-menu.cjs`
- `windows-mouse.cjs`

Dokumentation zusätzlich: `docs/MAUSBEFEHLE.de.md`, `docs/MAUSSTEUERUNG.md`,
`docs/MEHRSPRACHIGKEIT.md`, `docs/KONTEXTMENUES.md`, diese Datei und
`docs/ai/HANDOVER.md`.

`README.md`, README-PR #6, Paketversion 0.7.4, Abhängigkeiten, Charakterdefinitionen,
Stimmen/Filter, Einstellungen, Zustimmungsdienste und Bildschirm-/Textleser bleiben
unverändert. Es erfolgten keine Änderungen an bestehenden PRs, kein Merge/Release.
