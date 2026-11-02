# Mausreaktion mit festen Ereigniscodes messen

Für PR #8, Branch `feature/desktop-clicks-menus-characters`, aufbauend auf PR #7. Diese Diagnose ist standardmäßig aus
und wird nicht als Einstellung gespeichert. Die neuen Messpfade wurden mit
Simulationen unter Linux geprüft, **noch nicht praktisch unter Windows**.
Sie sind für die Trennung von Erkennung, Befehlsübergabe und Bewegung gedacht.

## Ausdrücklich einschalten und wieder abschalten

App vollständig beenden. Im Repository-Verzeichnis in Windows PowerShell:

```powershell
$env:JEFFREY_MOUSE_DIAGNOSTICS='1'
npm start
```

Im selben Terminal erscheinen höchstens **1.024** Zeilen mit dem Präfix
`[mouse-diag]`. Es wird keine Diagnosedatei automatisch angelegt. Nach Erreichen
des Limits wird keine weitere Zeile ausgegeben; für einen neuen Messlauf App
neu starten. Die eigentliche Steuerung bleibt vom Diagnoselimit unabhängig.

Zum Abschalten App beenden und im Terminal:

```powershell
Remove-Item Env:JEFFREY_MOUSE_DIAGNOSTICS -ErrorAction SilentlyContinue
npm start
```

Die Umgebung gilt nur für diesen Startprozess und seine Kinder, nicht als
systemweit gespeicherte Einstellung. Die Diagnose öffnet keine zweite Audio-
oder Cloud-Verbindung. Ein freiwilliger OpenAI-Live-Test nutzt jedoch die
bestehende kostenpflichtige Verbindung; automatisierte Tests nutzen nur Fakes.

## Inhalt einer Zeile

Reines synthetisches Formatbeispiel:

```json
{"code":"native-start","id":12,"elapsedMs":830,"sincePreviousMs":4}
```

- `code`: ausschließlich ein fest erlaubter Ereignis-/Ergebniscode.
- `id`: rein numerische lokale Kennung. `0` bedeutet ohne konkreten Live-Auftrag,
  zum Beispiel UI-Stopp oder lokale Eingabe. Keine Anbieter-Item-IDs im Output.
- `elapsedMs`: Zeit seit Beginn dieser App-Diagnose, keine absolute Uhrzeit.
- `sincePreviousMs`: Abstand zum vorher erfassten Ereignis derselben Kennung.
  Bei dazwischenliegenden Codes ist das nicht automatisch die gesuchte Teilstrecke;
  für Vergleiche die `elapsedMs` der betreffenden beiden Codes verwenden.

Keine Audioinhalte, Teil-/Volltranskripte, ausgewählten Texte, Koordinaten,
Fenstertitel, Schlüssel, URLs oder freien Fehlertexte. Empfangene fremde Felder
werden nicht ausgegeben. Ungültige Codes/Kennungen/Zeitwerte werden verworfen.
Die Ausgabe ist begrenzt, auch wenn fehlerhafte oder viele Ereignisse eintreffen.

## Auswertung des Weges von Sprache bis Bewegung

| Abschnitt | Codes | Bedeutung / Grenze |
| --- | --- | --- |
| Sprache / Abschluss | `speech-start`, `speech-stop`, `transcript-final` | Empfang der vorhandenen OpenAI-Ereignisse. Abstand vom empfangenen VAD-Stopp zum finalen Transkript enthält ASR-/Netz-/Rendererlatenz; kein Messwert vom tatsächlichen akustischen Satzende. Zuordnung über Item-ID nur intern, sofern vorhanden. |
| Parser | `parser-accept`, `parser-reject` | Parser erkennt lokalen Mausauftrag oder gibt den Satz an normale Verarbeitung weiter. Reject allein bedeutet bei normalem Gespräch keinen Fehler. Die zu prüfende Testformulierung außerhalb des Logs notieren, keine privaten Transkripte ergänzen. |
| Nicht ausführbar | `duplicate`, `turn-busy` | Wiederholtes Transkript verworfen oder bestehender Desktopauftrag blockiert diesen Turn; Stopp wird vor dieser Sperre verarbeitet. |
| IPC | `ipc-send`, `ipc-received`, `ipc-rejected`, `ipc-return` | Übergabe durch Renderer, Annahme im Hauptprozess, abgelehnte Freigabe oder abgeschlossener IPC-Aufruf. `ipc-return` bedeutet nicht „Maus angekommen“. |
| Befehlswarteschlange | `queue-start`, `command-ok`, `command-error`, `command-cancelled` | Dispatch begonnen, akzeptiert/abgeschlossen, Fehler oder Abbruch. `command-ok` bestätigt die lokale Bearbeitung, nicht das Ende der asynchronen Bewegung. |
| Helferinitialisierung | `helper-ready`, `native-write` | Vor einem gepufferten Ziel wird der native Helfer bereit und erhält MOVE. Bei bereits bereitem Helfer fehlt ein neues `helper-ready` regulär. |
| Bewegungsbeginn | `native-start` | Empfang der Bestätigung des ersten ausgeführten nativen Schreibframes. Das START-Signal wird nur bei ausdrücklich aktivierter Diagnose ausgegeben. Kein Bildschirmbild oder optischer Beweis des ersten veränderten Pixels. |
| Bewegung | `native-start`, `native-done` | Näherungsweise Bewegungsdauer einschließlich Pipe-/Prozess-/Empfangsverzögerung. Windows-Cursorbegrenzung kann statt Done einen Fehler liefern. |
| Ersetzen / Stopp | `native-superseded`, `stop`, `command-cancelled` | Noch nicht gesendetes Ziel ersetzt, Stopp verarbeitet oder wartender Auftrag verworfen. Späte native Start-/Endsignale älterer Ziele werden ignoriert. |

Die Prozesse benutzen Zeitwerte desselben Rechners. Ereignisse können wegen
IPC-/Pipe-Pufferung gebündelt oder geringfügig anders geordnet eintreffen.
Systemzeitänderungen können Abstände beeinflussen; negative Differenzen werden
auf null begrenzt. Diese kleine Diagnose ersetzt keinen Profiler und beweist
keine genaue reine Server-ASR- oder Betriebssystem-Renderlatenz.

## Empfohlener Windows-Messlauf

1. Ohne private Inhalte und mit konstant eingestellter Mausgeschwindigkeit testen.
   Zunächst Raster per Schaltfläche starten, damit der native Helfer bereits warm
   ist. Dann mit derselben ungefährlichen Zielfolge mehrere Live-Befehle prüfen.
2. Dieselbe Folge nach komplettem Raster-/App-Neustart wiederholen. Lange Zeit
   vor `helper-ready` deutet auf Start/Compiler/Helferbereitschaft; kein Beweis
   langsamer Interpolation. Noch keine Geschwindigkeit ändern.
3. Die natürlichen Befehle aus [der Liste](MAUSBEFEHLE.de.md) und die alten kurzen
   Varianten vergleichen. Finales Transkript ohne `parser-accept` getrennt von
   akzeptiertem Befehl mit später IPC-/Helferübergabe betrachten.
4. Schnell „Raster anzeigen“ → „D4“ testen; Initialisierung muss Auswahl puffern.
   Dazwischen Stopp testen: keine spätere Bewegung aus der Warteschlange.
5. Langsame lange Bewegung mit Stopp, neue Ziele während Bewegung, normale Frage
   zwischen Mausbefehlen und drei reale 45-Sekunden-Disconnects mit Wakeword testen.
   Die große Stopp-Schaltfläche bleibt unabhängig von ASR erreichbar.
6. Nur die begrenzten `[mouse-diag]`-Zeilen und nicht vertrauliche Testschritte
   weitergeben. Keine privaten Sprach-/Bildschirmproben für die Fehlersuche erzeugen.

Belegte Softwareursachen und Testgrenzen:
[Testnachweis](ai/testing/2026-11-01-mouse-response-quarters.md).

## Ergänzung: ersten Rasterstart und Wiederöffnen unterscheiden

Mit derselben ausdrücklich aktivierten, begrenzten Diagnose sind nun weitere
feste Codes verfügbar. Format, Opt-in, 1.024-Zeilen-Grenze und Inhaltsfreiheit
bleiben unverändert. Keine neuen Logdateien oder Transkriptfelder.

| Abschnitt | Zusätzliche Codes | Aussage |
| --- | --- | --- |
| Finale lokale Klassifikation | `grid-start` | Unterstützter Start lokal erkannt; weiterhin `parser-accept` und `ipc-send` derselben numerischen Kennung |
| Monitorermittlung | `snapshot-start`, `snapshot-ready` | Snapshot angefordert/erhalten; keine Titel, Handles oder Koordinaten |
| Nativer Dienst | `input-ready` | Tatsächliches READY des Maushelfers erhalten oder bei warmem Helfer bereits bestätigt |
| Overlay | `overlay-created`, `overlay-loaded` | Fenster erzeugt und Seite geladen; noch kein Nachweis fertiger Zeichnung |
| Zeichnung / Fehler | `overlay-ready`, `overlay-error` | Aktuelle Bestätigung des richtigen Renderers nach Zeichenframe oder fester Lade-/Bereitschaftsfehler |

Beim ersten Start: `grid-start` → IPC → `queue-start` → Snapshot → `input-ready`
→ Overlay-Laden → `overlay-ready` → `command-ok`/`ipc-return`. Die genaue
Reihenfolge unmittelbar benachbarter IPC-Codes kann durch Pufferung variieren.
Beim Wiederanzeigen eines bereits aktiven Rasters entfallen Snapshot/Neustart;
eine neue Zeichnung wird trotzdem bestätigt. Lokale/UI-Aufträge dürfen Kennung 0
verwenden. Mehrere VAD-Ereignisse dürfen keinen bestätigten Auftrag widerrufen.

**Für Rasterstart** erfolgt `command-ok` erst nach nativer Bereitschaft und
Zeichnungsbestätigung. **Für eine Bewegung** bleibt es die Dispatch-Bestätigung;
erst `native-done` bestätigt die überprüfte Zielposition. Auch `overlay-ready`
beweist keine gemessene erste sichtbare Windows-Pixel-/Compositorzeit.

Unter Windows getrennt prüfen: kalter App-/Live-Start, Start während Jeffrey spricht,
„Raster aus“ und Wiederöffnen, verborgenes aktives Raster, wiederholte Starts während
Initialisierung, drei reale 45-Sekunden-Disconnects und neue Live-Sitzung. Fehlt
`grid-start`, gibt es keinen Beleg einer lokalen Parserannahme; ohne Inhaltslogs kann
man die tatsächliche ASR-Transkription damit nicht rekonstruieren. Nicht pauschal
ASR, Netzwerk oder Windows als Ursache behaupten. Bei technischen Fehlern bleibt
es bei visueller Statusmeldung, ohne freie KI-Ersatzantwort.

Belegte Gegenprobe und aktuelle Tests:
[Rasterstart und Scrollen](ai/testing/2026-11-02-grid-start-scroll.md).
Scrollen erzeugt keine ungedrosselten Detail-/Koordinatenlogs; zum Prüfen der
Scrollrichtung und App-Reaktion die unkritischen manuellen Schritte dort verwenden.

## Nachtrag: Ladeabschluss vor Rasterzeichnung (Windows-Regression)

`overlay-loaded` gehört zu `did-finish-load`. Electron kann zu diesem Zeitpunkt
noch `isLoading() == true` melden. Der neue feste Code **`overlay-load-stopped`**
markiert den anschließend behandelten Ladeabschluss. Erst danach kann der Zustand
bei freiem Ladeguard gesendet und das Fenster angezeigt werden; **`overlay-ready`**
bleibt die getrennte Bestätigung des aktuellen Renderer-Zeichenframes.

Bei Startfehler die Kette `input-ready` → `overlay-loaded` →
`overlay-load-stopped` → `overlay-ready` vergleichen. Ein fehlender Helfercode ist
von einem fehlenden Ladeabschluss bzw. Frame-Ack zu unterscheiden. Keine Inhalte
oder freien Ausnahmen ergänzen. Limit, Opt-in und Acht-Sekunden-Fristen bleiben gleich.
[Reproduzierter Ablauf, Electron-Test und Windows-Schritte](ai/testing/2026-11-02-grid-overlay-regression.md).
