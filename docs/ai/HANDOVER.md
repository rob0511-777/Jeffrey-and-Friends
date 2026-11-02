# Jeffrey and Friends – Kontextpaket für die nächste Codex-Sitzung

Geprüft am **02.11.2026 (Europe/Berlin)**. Keine Zugangsdaten, privaten Inhalte oder
Chatprotokolle. Keine Freigabe für Merge, Release oder kostenpflichtige API-Tests.

## Repository und belastbarer Stand

| Angabe | Stand |
| --- | --- |
| Repository | [rob0511-777/Jeffrey-and-Friends](https://github.com/rob0511-777/Jeffrey-and-Friends) |
| Aktueller Branch | `feature/desktop-clicks-menus-characters` |
| Aktueller PR | [Draft PR #8](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/8), offen, nicht gemergt; Basis #7 |
| Geprüfter Programmstand (vollständig) | `b7e985082f0e6a06a4dd764b5a7fa35b948209c9` |
| Historischer HEAD bei Draft-Erstellung | `a96dbd9b3893bb25e9c93ee2da87ec318ae1a6f9` |
| Basis / unveränderter PR #7 | `feature/mouse-grid-2-i18n`, `ff3f610720e6ebc02c810e9bada90baa2710c050` |
| Aktueller Worktree | `/workspace/work/desktop-actions` |
| Gemeinsames Repository | `/workspace/Jeffrey-Friends` |
| Paket / Prüfung | 0.7.4, Electron 45.0.0; Linux, Node 24.19.0, PowerShell 7.4.7 |

Der aktuelle Regressionsauftrag startete bei `aa95e1cd06e02174b2d74321e319252acf944216`
mit sauberem Arbeitsbaum. Der Nutzer meldete: Raster erschien bei `7a1a834`, nach
dem Update kein Raster mehr, Ladehinweis gefolgt von Overlayfehler. Der obige
Programmcommit ergänzt gezielt den fehlenden Electron-Ladeabschluss. Native Eingabe,
Main/Realtime, Bereitschaftsprüfung, Acht-Sekunden-Fristen und Geometrie bleiben gleich.
Dokumentation/Übergabe folgen separat; exakten HEAD mit `git rev-parse HEAD` prüfen.
Ein Dokument kann seinen eigenen Commit-Hash nicht enthalten.
Vorherige Folgecommits: `60b0d9a` Rasterstart/Scrollen, `61baad1` Dokumentation,
`aa95e1c` Sitzungsregression. Frühere #8-Commits `442e099`, `3ad8e75`, `a96dbd9`, `7a1a834`.

Der lokale `origin` verweist noch auf den alten Alias
`https://github.com/rob0511-777/Jeffrey-Friends.git`; für Fetch/Push wurde die
kanonische Repository-URL verwendet, ohne Remote-Konfiguration zu verändern.
Nur diesen neuen Branch pushen. #7 und ältere Branches/PRs bleiben unberührt.

## Lokale Änderungen und erhaltene Arbeit

Ausgangszustand dieser Fortsetzung: sauber, keine fremden Programmänderungen oder
vorgemerkten Dateien. Aktueller Programmcode und neue Tests sind im obigen Commit;
technische Dokumente/Übergabe werden separat committet und auf denselben #8-Branch
gepusht. Zum Abschluss wird ein sauberer Arbeitsbaum geprüft. Bei Wiederaufnahme
`git status --short --branch` prüfen und neu hinzugekommene Nutzeränderungen erhalten.

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
| [#8](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/8) | Klicks, echte UIA-Menüs, Figurenrufe / aktueller Branch | **#7** | `b7e985082f0e6a06a4dd764b5a7fa35b948209c9` Programmstand; Dokumentationscommit folgt |

Abfolge: `main → #4 → #5 → #7 → #8`; **#6 zweigt parallel von #5 ab**.
`main` steht in den Metadaten auf `e2e34f96cc8402349eb8b97f6fc2b54c4adfc0a9`.
#6 ist nicht enthalten: geerbte README.md bleibt historisch, README.de.md existiert
hier noch nicht. READMEs nicht ungefragt aus #6 kopieren oder aktualisieren.
Die technischen Dokumente beschreiben den aktuellen experimentellen Stand.
README-/Bildänderungen auf dem inzwischen weiterentwickelten `main` weder überschreiben
noch unnötig übernehmen. Der aktuelle Auftrag integriert diese Änderungen nicht.

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
- Vorherige Nutzerrückmeldung: Bewegung, Unterteilungen und Einzelklicks unter Windows
  funktionieren gut. **Rasterstart ist weiterhin unzuverlässig**, teils mit Reden
  statt Ausführung. Das ist der gezielte Folgeauftrag; keine vollständige eigene
  Windows-Abnahme oder pauschale Latenzursache aus diesem Feedback ableiten.
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
6. **30 ursprüngliche plus 16 weitere UI-Schlüssel in sechs Sprachen**, nun 511 insgesamt. Neue Befehle nur bei
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
  nicht auf die Zwischenablage zu. Keine Doppelklicks oder Drag-and-drop. Scrollen ist nun begrenzt ergänzt (siehe unten).
- Destruktivklassifikation verwendet Beschriftungsschlüsselwörter, keine universelle
  semantische Sicherheitsanalyse. Mehrdeutige Namen nur per aktueller angezeigter Nummer.
- PowerShell-5.1-/native API-Kompatibilität anhand Syntax/C#5 vorbereitet, nicht real
  nachgewiesen. Simulationen prüfen keine installierten Windows-Assemblies, UIA-Provider,
  Message Hooks, SendInput, UIPI, DPI, Overlayfokus oder echte Mikrofonfreigabe.
- Basisgrenzen: Auswahl maximal 24.000 Zeichen, lokale Erklärung/Zusammenfassung 3.500;
  Gemini ohne geeigneten Auswahl-/TTS-Pfad; keine automatische Anbieterumschaltung.

## Voriger Folgeauftrag: Rasterstart und Scrollen

Programmcommit `60b0d9aa6f51662fce0ee50b9548bfeeb9a62f26`; nur gezielte Ergänzungen im bestehenden #8-Branch.
Keine Refaktorierung, keine neuen Einstellungen oder Abhängigkeiten.

**Belegt und korrigiert:**

1. `desktopInFlight` verwarf einen finalen Rasterstart vor der Parserprüfung, wenn
   Desktop-Auswertung/-Vorlesen aktiv war. Jetzt ausdrücklichen Steuerauftrag zuerst
   erkennen; dieser verwirft die bisherige Desktop-Antwort, ohne normalen VAD pauschal
   zum Abbruchgrund zu machen.
2. `desktopBlocked` allein hielt eine alte normale Antwort nach neuem VAD nicht
   gesperrt. Nun bleiben deren begrenzte clientseitige Kennungen widerrufen; auch
   spätes `response.created` darf keine neue Gesprächsanforderung verbrauchen.
3. Start meldete Erfolg vor tatsächlichem Helfer-READY und Overlayzeichnung. Nun
   maximal acht Sekunden auf Helferbereitschaft und danach acht Sekunden auf
   aktuelle Zeichnungsbestätigung des richtigen Overlay-Renderers warten. Feste
   Fehler/Timeout, Fehleroverlay verwerfen, Retry mit frischer Instanz, alte Events
   ignorieren. Start-/Ergebnisstatus visuell, keine freie KI-Ersatzantwort.

Der tatsächliche Anteil dieser Fehler an Windows-ASR-/Netz-/Startlatenzen ist
**nicht gemessen**. Zusatzdiagnose: `grid-start`, `snapshot-start/ready`,
`input-ready`, `overlay-created/loaded/ready/error`, weiterhin ausdrückliches
Opt-in `JEFFREY_MOUSE_DIAGNOSTICS=1`, feste Codes/Nummern/Zeitabstände, keine Inhalte.
`overlay-ready` bestätigt Rendererzeichnung, keine gemessene Windows-Compositorzeit.

**Scrollen implementiert, nur de-DE:** „Scroll[e] nach oben/unten“, „Scroll[e]
langsam nach oben/unten“, „Hör auf zu scrollen“, „Scrollen stoppen“; höfliche
Anrede mit allen fünf Namen. „Stopp“ behält seine bisherige Wirkung.

- Schritt ±120 native Mausradeinheiten; langsam ±15 höchstens alle 250 ms,
  maximal 30 Sekunden. Eine Schleife, keine Nachholschübe. Wiederholung/Richtungswechsel
  erhöht weder Rate noch Laufzeit. Schritt ersetzt Dauerlauf.
- Ohne Raster, keine Zeigerbewegung/Fokus-Klick/Tastatur. Nur bestätigtes Windows-
  Routing unter den Zeiger (`SPI_GETMOUSEWHEELROUTING == 2`); sonst verständlich
  abweisen. Systemoption nicht ändern. Apps können Teil-/Hintergrundimpulse ignorieren;
  SendInput-Erfolg ist keine Garantie tatsächlicher Pixelbewegung.
- Zielbereich/-prozess, tatsächliche Cursorposition und Vordergrund binden. Änderung,
  geöffnetes natives Menü oder gehaltene Taste stoppt/verweigert den Lauf.
- Bewegung/Klick beendet Scrollen zuerst. Während Bewegung/Klick/gebundenem Menü
  wird Scrollen ohne Queue abgewiesen. Stopp, Schlaf, Sitzung/Charakter/Anbieter,
  App-/Helfer-/Steuerkanalverlust invalidieren den Lauf. Keine alten Acks neu ausführen;
  bereits angenommene OS-Eingabe nicht rückgängig zu machen.
- Lokal hält derselbe Steuerhörer auch ohne Raster Stopp bereit; kein paralleler
  Wakeword-/Mikrofonprozess. Verlust der lokalen Erkennung stoppt den Lauf. OpenAI
  nutzt vorhandene finale Transkripte; keine Extra-Modellanfrage. Andere fünf neue
  Scrollgrammatiken nicht implementiert, bestehende Befehle/Provider erhalten.

**Offen und nicht umgesetzt:** „Jeffrey, Ruhe“ löst laut Nutzer weiterhin gesprochene
Bestätigungen und spätere Antworten aus. Kein eigener Windows-Ursachennachweis und
kein größerer Ruhemodus-/Gesprächigkeitsumbau in diesem Auftrag. Separat beauftragen.

## Vorheriger Teststand (vor der aktuellen Overlayregression)

| Prüfung | Ergebnis | Einordnung |
| --- | --- | --- |
| Ausgangs-Node-Suite vor Änderungen | 590 bestanden, 0 Fehler | Frisch unter Linux ausgeführt |
| Vollständige finale Node-Suite | **651 bestanden, 0 Fehler, Exit 0** | 590 erhaltene + 61 neue Fälle; simulierte Systemgrenzen |
| Isolierte Gegenprobe mit drei Originalmodulen aus 7a1a834 | **6/11 fehlgeschlagen**, danach 11/11 und gesamte Suite grün | Belegt Rasterstart-/Antwort-/Bereitschaftsbedingungen, keine Windows-Reproduktion |
| Bewegungs-/Klick-Vertragstests | beide PASS | Produktions-C#5 mit injizierten OS-Grenzen |
| Neuer Scroll-Vertragstest | PASS | Produktionsengine/Zielbindung, virtuelle Zeit und simuliertes SendInput/Routing |
| Kontextmenü-Vertragstest | PASS | Bestehendes Produktions-C#5 mit Fake-UIA/Fenstern/Events |
| Textauswahltest | **31 bestanden, 0 Fehler** | PowerShell 7.4.7 unter Linux mit Mock-UIA |
| Quellen/Katalog/Dokumentation/Diff | bestanden | JS-/PS-Quellen, 511×6 Texte/Platzhalter, Markdown/Links/Anker, Bestandsschutz |

73 bestehende Testdateien bytegleich erhalten. Native Bewegungsengine unverändert.
**Keine selbst ausgeführten Windows-Tests und keine bezahlten Live-API-Tests.**
C#5-Kompilierung/PS7-Parsing beweisen keine Windows-PowerShell-5.1-/PInvoke-Ausführung.
Voriger [Testnachweis und Windows-Plan](testing/2026-11-02-grid-start-scroll.md);
[ursprünglicher #8-Nachweis](testing/2026-11-02-desktop-actions.md) und
[historischer #7-Nachweis](testing/2026-11-01-mouse-response-quarters.md) bleiben getrennt.

## Aktuelle Overlayregression: Ursache und minimale Korrektur

**Nachgewiesen mit echtem Electron 45/Linux Headless:** `did-finish-load` meldete
noch `isLoading() == true`. `publish()` sendete deshalb weder Zustand noch
`showInactive()`. Danach wechselte der Wert bei `did-stop-loading` auf false,
aber dieser Empfänger fehlte. Kein Zustand → kein Zeichenframe-Ack → Timeout
und Fensterbereinigung. Der neue wartende Start blockierte auch folgende gepufferte
Befehle. Die früheren Fakes hatten loading schon vor `did-finish-load` auf false
gesetzt und diesen Ablauf deshalb übersehen.

Korrektur ausschließlich in `grid-overlay.cjs`: instanzgebundenen Empfänger für
`did-stop-loading` vor `loadFile` registrieren und letzten Zustand erneut veröffentlichen.
Im bestehenden Ladeguard folgen Zustand/Anzeigen, dann echter Renderer-Frame-Ack.
Keine Bereitschaftsprüfung entfernt, keine Frist erhöht, kein vorzeitiger Erfolg.
Ein zusätzlicher fester Diagnosecode `overlay-load-stopped` trennt Ladeabschluss
von `overlay-loaded` und `overlay-ready`. Keine Inhalts-/Titel-/Transkriptlogs.

Neue Node-Tests führen echten Preload/Renderer mit nachgebildeter DOM-/IPC-Grenze
aus: Schaltflächen-show und deutscher Sprachparser müssen bei der beobachteten
Ladereihenfolge ohne weiteren Befehl anzeigen, aber auf den Frame-Ack warten.
Zusätzlicher echter Electron-Komponententest mit produktivem HTML/Preload/Renderer,
20 Zellen, wartender B3-Auswahl und Wiederöffnen. Native Eingabe/Monitordaten sind
synthetisch; Linux-DPI-Konvertierung ist eine Identitätsgrenze. Kein vollständiger
Windows-/Mikrofon-/DPI-Test, keine sichtbare physische Bildschirmabnahme.

| Aktuelle Prüfung | Ergebnis |
| --- | --- |
| Vor Änderungen vorhandene Node-Suite | 651 bestanden, 0 Fehler |
| Vollständige aktuelle Node-Suite | **654 bestanden, 0 Fehler, Exit 0** |
| Neue Node-Fälle ohne/mit Korrektur | **3 rot → 3 grün** |
| Echter Electron-Test ohne/mit korrigiertem Overlaymodul | **Exit 1 → Exit 0**, gleiche beobachtete Ladereihenfolge |
| Bestandsschutz | 82 bisherige Testdateien bytegleich; Scrollen/Klicks/Menüs/Figuren/Geometrie und Main/Realtime unverändert |

Keine eigenen Windows- oder bezahlten Live-Tests. Der genaue Ablauf am betroffenen
Windows-Rechner bleibt zu bestätigen. [Aktueller Nachweis und Windows-Prüfung](testing/2026-11-02-grid-overlay-regression.md).
Der separate Komponententest läuft mit installierten Projektabhängigkeiten unter Windows:

```powershell
& .\node_modules\.bin\electron.cmd .\tests\electron\grid-overlay-lifecycle.cjs
```

Er erzeugt ausschließlich ein synthetisches Raster, keine native Eingabe oder Cloud-/
Mikrofonverbindung. Unter Linux hier Electron 45 mit Ozone Headless, kein Windowsnachweis.

## Relevante Dateien, Start und Tests

- `main.cjs`, `realtime.js`, `preload.cjs`: bestehende Dispatcher/Live-Hooks.
- `desktop-action-commands.js`, `desktop-action-gate.cjs`, `desktop-action-service.cjs`,
  `character-call-transition.cjs`: neue ausdrückliche Aufträge und Übergaben.
- `context-menu.cjs`, `windows-context-menu.cjs`, `scripts/context-menu.ps1`,
  `scripts/context-menu.cs`: lokale Policy, UIA und Fensterzuordnung.
- `context-menu-overlay.cjs`, `context-menu-preload.cjs`, `context-menu-renderer.js`,
  `context-menu.html`, `context-menu.css`: isolierte lokale Anzeige.
- `windows-mouse.cjs`, `scripts/move-pointer.ps1`, `scripts/physical-mouse.cs`:
  vorhandener Bewegungsprozess mit gesicherter Klickoperation und begrenzter Scrollengine.
- `grid-listener.cjs`, `scripts/grid-listen.ps1`, `mouse-commands.js`:
  Ergänzung des bestehenden lokalen Hörers. `mouse-control.cjs` bestätigt Startbereitschaft;
  `grid-overlay.cjs`/`mouse-grid-preload.cjs`/`mouse-grid-renderer.js` ergänzen den
  Zeichnungs-Ack. Rastergeometrie und Zeichenregeln bleiben erhalten.
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
powershell.exe -NoProfile -File tests/mouse-wheel.test.ps1
powershell.exe -NoProfile -File tests/context-menu-uia.test.ps1
powershell.exe -NoProfile -File tests/read-selection.test.ps1
```

Die fünf PowerShell-Vertragstests bleiben Simulationen. Lokal verfügbar ist
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
2. **Zuerst aktuelle Rasterregression unter Windows prüfen:** App kalt starten,
   Schaltfläche und Sprachstart, Schließen/Wiederöffnen, direkt folgende B3-Auswahl,
   Stopp beim Start und Retry. Erwartete Diagnose: `input-ready` → `overlay-loaded`
   → `overlay-load-stopped` → `overlay-ready`. [Nachweis](testing/2026-11-02-grid-overlay-regression.md).
   Danach [bisherige Windows-11-Prüfliste](testing/2026-11-02-grid-start-scroll.md): kalter
   App-/Live-Start, Wiederöffnen, ausgeblendetes Raster, Start während normaler und
   Desktop-Sprachausgabe, drei 45-Sekunden-Disconnects, keine freie KI-Ersatzantwort.
   Helfer/Zeichnungs-Ack unter PowerShell 5.1 und gemischten DPI praktisch bestätigen.
   Scrollschritte/-lauf in Explorer, Browser, Editor und inaktiven Fenstern, Windows-
   Routing ein/aus, Teilimpulse, Richtung/Frist/Stopp/Kanalverlust prüfen.
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
   Doppelklick/Drag sind außerhalb dieses Auftrags. Scrollen ist nun implementiert;
   „Jeffrey, Ruhe“ bleibt offener separater Punkt, keine Korrektur behaupten.

## Kurzer Startprompt

> Lies docs/ai/HANDOVER.md, prüfe feature/desktop-clicks-menus-characters, HEAD und
> Arbeitsbaum, Draft PR #8 sowie dessen Basis feature/mouse-grid-2-i18n (PR #7). Erhalte das
> funktionierende Raster und vorhandene lokale Änderungen. Trenne die 654 Node- und
> UIA-/Klick-/Scroll-Simulationen und den Linux-Electron-Test von echter Windows-Abnahme. Bearbeite nur den nächsten
> ausdrücklich beauftragten Punkt; keine bezahlten APIs, kein Merge/Release.
