# Jeffrey and Friends – Kontextpaket für die nächste Codex-Sitzung

Geprüft am **02.11.2026 (UTC)**. Keine Zugangsdaten, privaten Inhalte oder
Chatprotokolle. Keine Freigabe für Merge, Release oder kostenpflichtige API-Tests.

## Repository und belastbarer Stand

| Angabe | Stand |
| --- | --- |
| Repository | [rob0511-777/Jeffrey-and-Friends](https://github.com/rob0511-777/Jeffrey-and-Friends) |
| Aktueller Branch | `feature/desktop-clicks-menus-characters` |
| Aktueller PR | [Draft PR #8](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/8), offen, nicht gemergt; Basis #7 |
| Geprüfter Programmstand (vollständig) | `3ad8e75df140c308b65c8da2ae8adcc0f4b4b673` |
| HEAD bei Draft-Erstellung, vor diesem PR-Link-Nachtrag | `a96dbd9b3893bb25e9c93ee2da87ec318ae1a6f9` |
| Basis / unveränderter PR #7 | `feature/mouse-grid-2-i18n`, `ff3f610720e6ebc02c810e9bada90baa2710c050` |
| Aktueller Worktree | `/workspace/work/desktop-actions` |
| Gemeinsames Repository | `/workspace/Jeffrey-Friends` |
| Paket / Prüfung | 0.7.4, Electron 45.0.0; Linux, Node 24.19.0, PowerShell 7.4.7 |

Der geprüfte Programmstand umfasst `442e099` (Desktopaktionen/Regressionstests)
und `3ad8e75` (sichtbare Nummern). `a96dbd9` ergänzt Dokumentation und Testnachweis;
der anschließende Dokumentationscommit ergänzt diesen verifizierten PR-Link. Den exakten aktuellen
HEAD mit `git rev-parse HEAD` feststellen; ein Dokument kann seinen eigenen
Commit-Hash nicht enthalten. `git log -4 --oneline` zeigt die Folgecommits.

Der lokale `origin` verweist noch auf den alten Alias
`https://github.com/rob0511-777/Jeffrey-Friends.git`; für Fetch/Push wurde die
kanonische Repository-URL verwendet, ohne Remote-Konfiguration zu verändern.
Nur diesen neuen Branch pushen. #7 und ältere Branches/PRs bleiben unberührt.

## Lokale Änderungen und erhaltene Arbeit

Im neuen Worktree stammen die Programmänderungen und neuen Tests ausschließlich
aus diesem Auftrag; sie sind im obigen Implementierungscommit enthalten. Diese
Übergabe und die aktualisierten technischen Dokumente sind separat committet.
Vor dem PR-Link-Nachtrag war der neue Arbeitsbaum sauber; der Nachtrag wird ebenfalls
committet und gepusht. Bei Wiederaufnahme
immer `git status --short --branch` prüfen und zusätzliche Nutzeränderungen erhalten.

Die ältere, **untracked** Übergabe bleibt unverändert im alten Worktree
`/workspace/work/mouse-grid-2-i18n/docs/ai/HANDOVER.md` erhalten. Ihr SHA-256:
`ed850d52693e99a36a78915c299c36923e6ba1895920d611c4153ee5f21d2d60`.
Sie wurde weder übernommen noch committet oder überschrieben. Diese neue, anhand
des Codes geprüfte Übergabe erfüllt den aktuellen ausdrücklichen Dokumentationsauftrag.
Andere Worktrees (`desktop-vision-2`, `mouse-grid-consent`, `readme-bilingual`)
nicht zurücksetzen oder ungefragt bearbeiten.

## PR-Abhängigkeiten

GitHub-Metadaten von #4–#7 erneut geprüft: offen, Draft, nicht gemergt.

| PR | Inhalt / Branch | Basis | Vollständiger Head |
| --- | --- | --- | --- |
| [#4](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/4) | Desktop Vision 2.0 / `feature/desktop-vision-2` | `main` | `178277ebc7fee8b103dda4b58e1d077360844bac` |
| [#5](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/5) | Maussteuerung 1.0, dauerhafte Zustimmung / `feature/mouse-grid-consent` | #4 | `f72dbd32ed9226d7c9370e6ff495cec42096b339` |
| [#6](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/6) | Zweisprachige README / `docs/bilingual-readme` | #5 | `0e3427d941ab138892ea7fdd1f8cf233115aec55` |
| [#7](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/7) | Maussteuerung 2.0, sechs Sprachen / `feature/mouse-grid-2-i18n` | #5 | `ff3f610720e6ebc02c810e9bada90baa2710c050` |
| [#8](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/8) | Klicks, echte UIA-Menüs, Figurenrufe / aktueller Branch | **#7** | `a96dbd9b3893bb25e9c93ee2da87ec318ae1a6f9` bei Draft-Erstellung; danach nur PR-Link-Nachtrag |

Abfolge: `main → #4 → #5 → #7 → #8`; **#6 zweigt parallel von #5 ab**.
`main` steht in den Metadaten auf `255916479077953230d4f3edc5641ca51326a5b3`.
#6 ist nicht enthalten: geerbte README.md bleibt historisch, README.de.md existiert
hier noch nicht. READMEs nicht ungefragt aus #6 kopieren oder aktualisieren.
Die technischen Dokumente beschreiben den aktuellen experimentellen Stand.

## Bereits umgesetzte Basis und frühere Verbesserungen

- Fünf Charaktere Jeffrey/Kelly/Krak/Bronco/James mit bestehenden Profilen, Stimmen,
  Filtern und Wakewords. OpenAI, Gemini und lokale KI unverändert erhalten.
- Desktop Vision mit Monitorwahl; Auswahltext lokal über UIA, ohne Zwischenablage
  oder Strg+C. Vorlesen/Erklären/Zusammenfassen bleiben an Anbietergrenzen gebunden.
  Ursache des früheren Auswahlfehlers war nachweislich der falsche Namespace für
  `System.Windows.Automation.Text.TextPatternRangeEndpoint`; in #4 korrigiert.
- Bildschirm-/Textfreigaben getrennt: Abbrechen, einmal für konkreten Auftrag,
  dauerhaft auf Gerät; versioniert, für OpenAI, widerrufbar im bestehenden Bereich.
  UIA-Fehler erreichen den Cloud-Dialog nicht. Windows-Systemrechte sind unabhängig.
- Grundraster und erste sichtbare Unterteilung A1–D5; **zweite und tiefere sichtbare
  Unterteilungen mit vier Richtungsfeldern**. Bereits implementiert, nicht mehr geplant.
  Wiederholung wählt dasselbe sichtbare Viertel; erst Unterteilen erzeugt neue Ebene.
  Interne Feinsteuerung in A1–D5 getrennt. Zurück/Reset, Elternraster, Pixel-/Tiefen-
  grenzen, Transparenz und sanfte physische Bewegung bleiben erhalten.
- **Natürlichere deutsche Mausbefehle bereits implementiert:** „Fahr nach B3“,
  „Fahr mal bitte nach B3“, „Bewege die Maus zu B3“, „Geh zu Feld Berta drei“,
  „Unterteile dieses Feld“, „Teil das Feld nochmal“, „Mach das ausgewählte Feld
  kleiner“, „Geh einen Schritt zurück“, „Zeig mir wieder das ganze Raster“,
  „Halte die Maus an“. Lokale Grammatik und Parser durch Tests geprüft.
- **Schwankende OpenAI-Reaktion:** In #7 belegte Softwareursachen bereits behoben:
  Auswahl während asynchronem Rasterstart (jetzt Queue), überschreibbare einzige
  Freigabe (jetzt einmalige Kennungen), fehlende natürliche Parservarianten.
  Reale ASR-/Netz-/VAD-/Startlatenzen wurden nicht gemessen. Optionale inhaltsfreie
  Diagnose `JEFFREY_MOUSE_DIAGNOSTICS=1` existiert; keine Tempoerhöhung.
- Neueste Nutzerrückmeldung: aktueller Rasterstand unter echtem Windows erfolgreich,
  Nutzer mit Verhalten zufrieden. Das rechtfertigt Erhalt der Basis; keine eigene
  vollständige Windows-Abnahme daraus ableiten. Weitere Latenzmessungen nur bei
  konkretem Bedarf, keine spekulative Nachbesserung des funktionierenden Bestands.
- Gemeinsames OpenAI-Live-Transkript für Gespräch und Raster, kein Extra-Modellaufruf
  je Rasterbefehl. 45-Sekunden-Idle, 15-Minuten-Limit, Wakeword und lokale Freigaben.
  Gemini behält lokalen Rasterfallback ohne verlässlich gemeinsamen Live-Transkriptweg.
- Sechs bestehende Bediensprachen und Gesprächspräferenzen; passende lokale
  `System.Speech`-Engine nötig, nicht bloß modernes Windows-Sprachpaket.

## Neu implementiert: aktueller Auftrag

1. **Explizite Einzelklicks**, sechs deutsche Varianten, tatsächliche Cursorposition,
   ohne Raster. Ablehnung während Bewegung/gedrückter Tasten, keine Teilaufträge,
   Einmalfreigaben für finale Live-Transkripte und IPC. Bestehender lokaler Sprachweg.
2. **Echte native Kontextmenüs**, nach Rechtsklick lokal UIA lesen, exakter Name oder
   angezeigte Nummer. Nicht fokussierende durchlässige Liste außerhalb des Menüs,
   höchstens 30 Nummern; UIA-Liste höchstens 100 Einträge. Fehlender Platz: keine Liste
   und keine Nummernauswahl. Keine Jeffrey-Befehlsliste statt Anwendungsmenü.
3. **Vor jeder Menüaktion erneut binden/prüfen**: Prozess, Eigentümerfenster,
   Vordergrund, Runtime-ID, Eventgeneration, Fingerprint, Bounds, sichtbar/aktiviert/
   unterstütztes Pattern. Untermenüs per ExpandCollapse, Auswahl per Invoke; tatsächliches
   Ersatzmenü nach Invoke kann neu gebunden werden. Keine Koordinaten-/Tastenfallbacks.
4. **Konkrete destruktive Bestätigung** per aktuellem Namen oder Nummer; keine allgemeine
   Zustimmung, kein „Ja“. Stopp/Abbrechen/Fokus-/Menü-/Sitzungswechsel verwerfen sie.
5. **Explizite Figurenrufe** über vorhandenen Wechselpfad; bloße Erwähnung oder einzelner
   Name kein neuer Wechselauftrag. Gleiche aktive Figur nur zeigen. Neuer Sprachwechsel
   wartet auf bestätigte lokale Freigabe und Renderer-Live-Ende nach Track.stop;
   Timeout fünf Sekunden, keine neue Sitzung automatisch. Überholte Aufrufe verfallen.
6. **30 neue UI-Schlüssel in sechs Sprachen**, nun 495 insgesamt. Neue Befehle nur bei
   `de-DE`; übrige fünf Raster-/Desktopsprachen erhalten. Kein UI-Umbau, keine neuen
   gespeicherten Einstellungen, keine Stimme/Charakterdefinition/Abhängigkeit geändert.

## Wichtige technische Entscheidungen und Grenzen

- Neue Module isolieren Parser, Einmalfreigabe, Orchestrierung, Charakterübergabe,
  UIA-Transport/-Policy und Nur-Lese-Anzeige. Kleine Hooks in Main/Realtime/Sprachweg;
  bestehende Bewegungsinterpolation/Koordinaten-/Rasterlogik nicht refaktoriert.
- Klick im vorhandenen nativen Prozess: atomarer Down/Up-Block, abschließend geprüfte
  Freigaben beider Tasten bis zu drei Versuchen. Bei unbestätigter Freigabe weitere
  Eingaben sperren. Stopp invalidiert vorbereitete Klicks, bevor native Eingabe beginnt.
  Bereits angenommene Windows-Aktionen können nicht rückgängig gemacht werden.
- UIA erfordert `ControlType.Menu` im selben Zielprozess und passende Eigentümerbezüge;
  MenuItem oder Win11-artige Buttons innerhalb dieses Menüs mit Invoke/ExpandCollapse.
  Kein universeller Menüsupport, keine Rechteerhöhung. Win11-Explorer/Win32 real offen.
  Konservative globale Popup-/Foreground-Ereignisse können auch fremde Popups invalidieren.
- Menünamen nur flüchtig lokal in Helfer/Main/readonly-Overlay. Kein Log, keine Datei,
  kein Chat/Gedächtnis, keine zusätzliche Modell-/TTS-Übertragung. Bestehende Live-Audio-
  übertragung enthält weiterhin gesprochene Auswahlbefehle. Bestehender ausdrücklich
  freigegebener Screenshot kann sichtbare Menüs wie andere Bildschirmteile enthalten.
- Native Kopieren/Einfügen darf normale Anwendungsfunktion ausführen; die App greift
  nicht auf die Zwischenablage zu. Keine Doubleclicks, Drag-and-drop oder Scrollaktionen.
- Destruktivklassifikation verwendet Beschriftungsschlüsselwörter, keine universelle
  semantische Sicherheitsanalyse. Mehrdeutige Namen nur per aktueller angezeigter Nummer.
- PowerShell-5.1-/native API-Kompatibilität anhand Syntax/C#5 vorbereitet, nicht real
  nachgewiesen. Simulationen prüfen keine installierten Windows-Assemblies, UIA-Provider,
  Message Hooks, SendInput, UIPI, DPI, Overlayfokus oder echte Mikrofonfreigabe.
- Basisgrenzen: Auswahl maximal 24.000 Zeichen, lokale Erklärung/Zusammenfassung 3.500;
  Gemini ohne geeigneten Auswahl-/TTS-Pfad; keine automatische Anbieterumschaltung.

## Tatsächlich ausgeführte Tests

| Prüfung | Ergebnis | Einordnung |
| --- | --- | --- |
| Ausgangs-Node-Suite vor Änderungen | 508 bestanden, 0 Fehler | Linux / simulierte Systemgrenzen |
| Vollständige finale Node-Suite | **590 bestanden, 0 Fehler, Exit 0** | Linux; 508 unveränderte Basisfälle plus 82 neue Fälle |
| Bewegungs-Vertragstest | PASS | Produktions-C#5 mit injizierten OS-Grenzen |
| Neuer Klick-Vertragstest | PASS | Simuliertes SendInput, Busy/Stop/Cleanup |
| Neuer Kontextmenü-Vertragstest | PASS | Produktions-C#5, Fake-UIA/native Fenster und Events |
| Bestehender Textauswahltest | **31 bestanden, 0 Fehler** | PowerShell 7.4.7 mit Mock-UIA |
| Quellen/Katalog/Dokumentation/Diff | bestanden | JS-Syntax, PS-Parsing, 495×6 Texte/Platzhalter, Markdown/relative Links |

**Keine selbst ausgeführten echten Windows-Tests und keine bezahlten Live-API-Tests.**
Nutzerfeedback zum Basisraster bleibt davon getrennt. Detaillierte Fälle, Dateiliste
und noch offene Windows-11-Prüfschritte:
[aktueller Testnachweis](testing/2026-11-02-desktop-actions.md).
Frühere Ursachen und #7-Nachweis:
[Reaktion/Viererfelder](testing/2026-11-01-mouse-response-quarters.md).

## Relevante Dateien, Start und Tests

- `main.cjs`, `realtime.js`, `preload.cjs`: bestehende Dispatcher/Live-Hooks.
- `desktop-action-commands.js`, `desktop-action-gate.cjs`, `desktop-action-service.cjs`,
  `character-call-transition.cjs`: neue ausdrückliche Aufträge und Übergaben.
- `context-menu.cjs`, `windows-context-menu.cjs`, `scripts/context-menu.ps1`,
  `scripts/context-menu.cs`: lokale Policy, UIA und Fensterzuordnung.
- `context-menu-overlay.cjs`, `context-menu-preload.cjs`, `context-menu-renderer.js`,
  `context-menu.html`, `context-menu.css`: isolierte lokale Anzeige.
- `windows-mouse.cjs`, `scripts/move-pointer.ps1`, `scripts/physical-mouse.cs`:
  vorhandener Bewegungsprozess mit neuer gesicherter Klickoperation.
- `grid-listener.cjs`, `scripts/grid-listen.ps1`, `mouse-commands.js`:
  Ergänzung des bestehenden lokalen Hörers. `mouse-control.cjs`, Rastermodell und
  Rasterrenderer selbst unverändert.
- `locales/catalog.js`, [deutsche Befehle](../MAUSBEFEHLE.de.md),
  [Menügrenzen](../KONTEXTMENUES.md), [Sprachen](../MEHRSPRACHIGKEIT.md),
  [Maussteuerung](../MAUSSTEUERUNG.md), [optionale Diagnose](../MAUS-DIAGNOSE.md).

```bash
cd /workspace/work/desktop-actions
git status --short --branch
git rev-parse HEAD
git log -4 --oneline
node --test --test-isolation=none tests/*.test.cjs
```

Windows 11: Node LTS, Windows PowerShell 5.1 und passende lokale Erkennungsengine;
Mikrofonrechte prüfen, ohne Administrator starten. Im Projektordner:

```powershell
npm install --no-audit --no-fund
npm start
npm test
powershell.exe -NoProfile -File tests/mouse-motion.test.ps1
powershell.exe -NoProfile -File tests/mouse-click.test.ps1
powershell.exe -NoProfile -File tests/context-menu-uia.test.ps1
powershell.exe -NoProfile -File tests/read-selection.test.ps1
```

Die vier PowerShell-Vertragstests bleiben Simulationen. Lokal verfügbar ist
`/workspace/work/uia-diagnostics/pwsh` für Linux; das ist kein Repositorybestandteil.
ASR-Locale ohne Inhalte prüfen:

```powershell
Add-Type -AssemblyName System.Speech
[System.Speech.Recognition.SpeechRecognitionEngine]::InstalledRecognizers() |
    Select-Object @{Name='Locale';Expression={$_.Culture.Name}}
```

## Offene Aufgaben und konkrete nächste Schritte

1. Branch/HEAD/Arbeitsbaum und Draft-Basis gegen GitHub prüfen. Keinen alten PR ändern,
   keinen Merge/Rebase auf main und keine Veröffentlichung aus dieser Übergabe ableiten.
2. Unkritische Windows-11-Abnahme nach dem [Testnachweis](testing/2026-11-02-desktop-actions.md):
   Helferstart unter PowerShell 5.1, Klicks mit/ohne Raster, reale Tastenfreigabe,
   Explorer-Neu-/Klassikmenüs, UIA-Patterns, Untermenüs, Fokuswechsel und Nummern.
3. Konkrete Bestätigung/Abbruch mit entbehrlicher Testdatei, niemals private Inhalte
   protokollieren. Overlay außerhalb des Menüs, DPI/Mehrmonitor und fehlenden Platz prüfen.
4. Charakterrufe aller fünf Figuren während Live und lokal, schnelle Wechsel,
   gleiche Figur/Timeout/Schlaf/Stopp; echtes Track-Ende vor neuem Hörer nachweisen.
5. Funktionierende PR-#7-Rastersequenz und bestehende Desktop-/Text-/Zustimmungs-/
   Providerpfade praktisch regressionsprüfen. Reale 45-Sekunden-Reconnects prüfen.
   Bezahlte Live-Aufrufe nur mit gesondertem Auftrag.
6. Bei echten Windows-Fehlern feste Operations-/Fehlercodes statt Menü-/Textinhalten
   erfassen, gezielt reproduzieren, minimale Korrektur im neuen Branch. Keine spekulative
   Refaktorierung oder Veränderung der bereits abgenommenen Rasterbedienung.
7. Spätere READMEs mit #6 gemeinsam abstimmen; nicht jetzt überschreiben. Neue Befehle
   in fünf weiteren Sprachen sind **nicht implementiert**, nur neue UI-Texte übersetzt.
   Doppelklick/Drag/Scroll sind außerhalb dieses Auftrags, keine Verfügbarkeitszusage.

## Kurzer Startprompt

> Lies docs/ai/HANDOVER.md, prüfe feature/desktop-clicks-menus-characters, HEAD und
> Arbeitsbaum, Draft PR #8 sowie dessen Basis feature/mouse-grid-2-i18n (PR #7). Erhalte das
> funktionierende Raster und vorhandene lokale Änderungen. Trenne die 590 Node- und
> UIA-/Klick-Simulationen von echter Windows-Abnahme. Bearbeite nur den nächsten
> ausdrücklich beauftragten Punkt; keine bezahlten APIs, kein Merge/Release.
