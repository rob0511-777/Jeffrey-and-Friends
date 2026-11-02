# Rasterstart-Regression: Electron-Ladeabschluss und Zeichnungsbestätigung

> Nachtrag vom 02.11.2026: Der Benutzer bestätigt inzwischen unter Windows das
> wieder funktionierende Raster und Scrollen wie gewünscht; Links-/Rechtsklick und
> bisherige Maussteuerung waren zuvor positiv getestet. Die folgenden technischen
> Versuche beschreiben ihren damaligen Prüfstand. Sie sind keine vollständige
> eigene Windows-Abnahme. [Aktueller Praxistest und Dokumentationsprüfung](2026-11-02-user-practice-docs.md).

Stand 02.11.2026 (Europe/Berlin), [Draft PR #8](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/8),
`feature/desktop-clicks-menus-characters`. Untersucht: funktionierend gemeldeter
Stand `7a1a834` gegenüber fehlerhaft gemeldetem `aa95e1cd06e02174b2d74321e319252acf944216`.
Gezielter Programmfix: `b7e985082f0e6a06a4dd764b5a7fa35b948209c9`.

## Beobachtung und nachgewiesener Fehlerablauf

Der Nutzer meldet unter Windows kein sichtbares Raster, erst „Raster wird geladen
und gezeichnet …“, danach teilweise den Overlayfehler. Hier wurde **kein eigener
Windows-Test** ausgeführt. Die Ladereihenfolge ist jedoch mit dem vorhandenen
**echten Electron 45.0.0 unter Linux (Ozone Headless)** reproduziert:

```text
did-finish-load: isLoading() == true, Fenster noch nicht sichtbar
overlay-loaded
did-stop-loading: isLoading() == false, Fenster weiterhin nicht sichtbar
kein gesendeter Rasterzustand / kein Renderer-Frame-Ack
overlay-error nach Bereitschaftsfrist
```

`grid-overlay.cjs` veröffentlichte bei `did-finish-load` erneut den Zustand, aber
`publish()` sendet und zeigt nur bei `!webContents.isLoading()`. Im beobachteten
Ablauf war diese Bedingung noch falsch. Für den anschließenden Wechsel bei
`did-stop-loading` fehlte der Empfänger. Damit fehlte der Anstoß für Zustand,
Fenstersichtbarkeit, Zeichnung und deren Ack. Die neue Bereitschaftswarteschlange
wartete weiter, bis der Timeout das Fenster zerstörte.

Der `isLoading`-Guard und `did-finish-load`-Aufruf existierten bereits in `7a1a834`.
Neu zwischen den untersuchten Ständen war das Warten auf die Zeichnung samt
Timeout/Bereinigung: Nachfolgende gepufferte Befehle konnten keinen weiteren
Zustandsversand mehr anstoßen, bevor der Start fertig war. Das erklärt die
reproduzierte Abhängigkeit im Code. Welche Ereignisreihenfolge beim betroffenen
Windows-Rechner exakt auftrat, bleibt dort anhand der Phasencodes zu bestätigen;
kein pauschaler Nachweis aller Windows-/GPU-/DPI-Ursachen.

Die bisherigen Fenster-Fakes setzten `loading=false` **vor** `did-finish-load` und
bestätigten teils den Ack direkt. Deshalb erfassten sie diese reale Reihenfolge
nicht. Das war eine Testlücke. Die neuen Tests führen Preload/Renderer gemeinsam
aus bzw. verwenden den tatsächlichen Electron-Prozess.

## Eng begrenzte Korrektur

- Zusätzlichen, instanzgebundenen `did-stop-loading`-Empfänger **vor `loadFile`**
  registrieren und dort den letzten aktuellen Rasterzustand veröffentlichen.
- Erst dann werden bei erfülltem Ladeguard Zustand gesendet und `showInactive()`
  aufgerufen. Danach zeichnet der bestehende Renderer und sendet seinen Ack.
- Absender-/Generationsprüfung, Frame-Ack, native Helferbereitschaft, Fehlerbereinigung
  und beide Acht-Sekunden-Fristen bleiben unverändert. Kein vorzeitiger Erfolg,
  kein Entfernen der Bereitschaftsprüfung und keine Timeout-Erhöhung.
- Alte Fensterereignisse wirken wegen des bestehenden Instanzvergleichs nicht
  auf eine neue Instanz. Ladefehler/Timeout/Abbruch bleiben durch bisherige Tests geprüft.
- Opt-in-Diagnose um genau den festen Code `overlay-load-stopped` ergänzen.
  Keine freien Fehlertexte, Transkripte, Fenstertitel, Koordinaten oder Inhaltslogs.

Produktionsänderung ausschließlich in `grid-overlay.cjs` (ein Empfänger samt
Kommentar) und der erlaubten Codeliste in `mouse-diagnostics.cjs`.
Scrollen, Klicks, native Menüs, Charakterwechsel, Rastergeometrie, Main-/Live-
Dispatcher, Stimmen/Einstellungen, Provider und Paketversion 0.7.4 sind bytegleich
zum Ausgangsstand. Keine Refaktorierung, neuen Funktionen oder Abhängigkeiten.

## Tatsächlich ausgeführte Tests

| Prüfung | Vor Korrektur | Mit Korrektur | Aussagegrenze |
| --- | --- | --- | --- |
| Vollständige vorhandene Node-Suite | **651 bestanden**, Exit 0 | **654 bestanden**, 0 Fehler, Exit 0 | Node 24.19.0/Linux, simulierte Systemgrenzen |
| Neue Node-Regressionen | **3 fehlgeschlagen** | **3 bestanden** | Reale Produktionsmodule, nachgebildete DOM-/IPC-/Ladeereignisgrenzen |
| Neuer Electron-Komponententest | **FAIL, Exit 1** | **PASS, Exit 0** | Echtes Electron 45/Linux Headless, tatsächlicher BrowserWindow-/Preload-/Renderer-/IPC-/Frame-Lebenszyklus |
| Bestandsschutz | 82 bestehende Testdateien unverändert | Bestanden | Kein Abschwächen vorhandener Fälle; geschützte Produktionspfade bytegleich |
| Syntax, Markdown, Links, Diff | — | Bestanden | Keine Windows-PowerShell-/native Input-Abnahme |

`tests/grid-overlay-load-order.test.cjs` spielt die tatsächlich beobachtete
Reihenfolge nach: `did-finish-load` bei `loading=true`, danach `did-stop-loading`
bei `loading=false`. Es verwendet den echten `mouse-grid-preload.cjs` und
`mouse-grid-renderer.js`, das reale Rastermodell und den Rastercontroller.
Getrennt geprüft werden das `show`-Objekt der Schaltfläche und der reale deutsche
Sprachparser. Nach Ladeende muss das Fenster ohne weiteren Befehl angezeigt sein;
vor dem simulierten Zeichenframe darf der Start trotzdem nicht erfolgreich enden.
Keine echte Mikrofonerkennung oder physische Schaltflächenbetätigung behaupten.

`tests/electron/grid-overlay-lifecycle.cjs` lädt die echte `mouse-grid.html` im
produktiven isolierten Overlay. Es prüft beide Startformen, Sichtbarkeitsflag,
20 DOM-Zellen, wartende B3-Auswahl und Wiederöffnen. Seine native Eingabe und
Monitordaten sind synthetisch. Unter Linux wird nur die dort nicht vorhandene
Windows-DPI-Konvertierung durch Identität ersetzt (`nativeDpi=false`). Kein
physischer Windows-Bildschirm, Cursor, Audio, UIA oder API-Aufruf wird getestet.
Ein sichtbares Fensterflag/DOM-Nachweis ist keine visuelle Windows-Abnahme.

Zusätzliche Gegenprobe nach der Korrektur: Derselbe echte Electron-Test mit
unverändertem `grid-overlay.cjs` aus `aa95e1c` per temporärem Ladehook **Exit 1**;
mit aktuellem Modul **Exit 0**. Arbeitsdateien wurden nicht zurückgesetzt.
Die Reihenfolge `did-finish-load:true` → `did-stop-loading:false` wurde in beiden
Durchläufen erneut gemessen. Lokale Ergebnisartefakte (nicht committet):
`/workspace/work/overlay-regression-final-node.txt`,
`/workspace/work/grid-electron-counterfactual.txt`,
`/workspace/work/grid-electron-regression-green.txt`.

Keine eigenen Windows- oder bezahlten Live-API-Tests. Die PowerShell-/Eingabe-
Vertragstests aus dem [vorigen Nachweis](2026-11-02-grid-start-scroll.md) sind
historische Linux-Simulationen und wurden für diesen reinen Overlayfix nicht neu
als Windows-Nachweis ausgegeben.

## Ausführen

```bash
node --test --test-isolation=none tests/*.test.cjs
```

Mit bereits installierten Projektabhängigkeiten, unter Windows PowerShell:

```powershell
& .\node_modules\.bin\electron.cmd .\tests\electron\grid-overlay-lifecycle.cjs
```

Dieser separate Komponententest erzeugt nur ein synthetisches, durchklickbares
Rasterfenster. Er nutzt weder API-Schlüssel noch Mikrofon oder native Eingaben.
Er ersetzt die manuelle App-Prüfung nicht. Zum echten Start der App weiterhin
`npm start`. Keine neue Testabhängigkeit oder npm-Skriptänderung.

In dieser Linux-Umgebung mit vorhandenem Electron-Binary wurde ausgeführt:

```bash
/workspace/Jeffrey-Friends/node_modules/electron/dist/electron --no-sandbox --ozone-platform=headless --disable-gpu tests/electron/grid-overlay-lifecycle.cjs
```

Die Flags gehören ausschließlich zum isolierten Linux-Test, nicht zur App-
Konfiguration oder einer Empfehlung, Windows-Sicherheitsfunktionen abzuschalten.

## Kurze Windows-Prüfung: noch offen

1. App vollständig neu starten; Raster zuerst per Schaltfläche starten. Es muss
   ohne Folgebefehl sichtbar werden und erst nach Zeichnung Bereitschaft melden.
2. „Raster aus“, dann „Jeffrey, bitte zeig mir das Raster“ mehrfach wiederholen;
   zusätzlich Live aus/an und lokaler Sprachweg. Keine zweite Overlay-/Mikrofoninstanz.
3. Direkt „Raster anzeigen“ → „B3“: Auswahl darf warten und anschließend ausgeführt
   werden. Stopp während Start sowie Laden-/Abbruchfehler dürfen keinen späten Erfolg
   melden; erneuter Start muss möglich bleiben.
4. Bei Fehlern [Diagnose](../../MAUS-DIAGNOSE.md) ausdrücklich einschalten. Erwartet:
   `input-ready` → `overlay-created`/`overlay-loaded` → `overlay-load-stopped` →
   `overlay-ready` → `command-ok`. Nur feste Codes/Zeitabstände weitergeben.
   Ohne `input-ready` native Helferbereitschaft separat untersuchen; nach
   `overlay-load-stopped` ohne `overlay-ready` Preload/Renderer/Frame prüfen.
5. Unkritischer Regressionstest: Scrollen/Stopp, Einzelklicks, Kontextmenü,
   Charakterwechsel, A1–D5 und Viererunterteilung. Geometrie, Stimmen und gespeicherte
   Einstellungen müssen unverändert bleiben. Keine kostenpflichtigen Live-Tests
   ohne gesonderten Auftrag.

## Dateien

- `grid-overlay.cjs`, `mouse-diagnostics.cjs`
- `tests/grid-overlay-load-order.test.cjs`, `tests/electron/grid-overlay-lifecycle.cjs`
- Dieser Nachweis, Verweis im vorigen Nachweis, `docs/MAUS-DIAGNOSE.md`,
  `docs/MAUSSTEUERUNG.md`, `docs/ai/HANDOVER.md`
