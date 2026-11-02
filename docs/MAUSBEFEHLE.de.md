# Deutsche Mausbefehle

Für **Bediensprache Deutsch**, auf `feature/desktop-clicks-menus-characters`, gestapelt auf PR #7.
Die folgenden Beispiele passieren den Befehlsparser in automatisierten Tests.
Echte Windows-Erkennung und Sprach-Stopp-Latenz der neuen Varianten sind noch
nicht praktisch geprüft. Man kann dieselben Befehle ins vorhandene Textfeld eingeben.

| Auftrag | Beispiele | Eindeutige Wirkung |
| --- | --- | --- |
| Start / anzeigen | „Raster anzeigen“, „Jeffrey, zeig das Raster“, „Zeig mir das Koordinatennetz“ | Raster auf automatisch gewähltem Monitor; unsichtbares Raster wieder sichtbar |
| Ziel auswählen | „B3“, „Feld Berta drei“, „Fahr nach B3“, „Fahr mal bitte nach B3“, „Bewege die Maus zu B3“, „Geh zu Feld Berta drei“ | Mittelpunkt von B3 im sichtbaren A1–D5-Raster anfahren |
| Unterteilen | „Feld unterteilen“, „Unterteile das Feld“, „Unterteile dieses Feld“, „Teil das Feld nochmal“, „Mach das ausgewählte Feld kleiner“ | Nur den bereits ausgewählten Bereich sichtbar unterteilen; ohne Auswahl keine beliebige Zielwahl |
| Sichtbares Viertel wählen | „Links oben“, „rechts oben“, „links unten“, „rechts unten“ | In der Viereransicht das entsprechende sichtbare Feld auswählen und dessen Mitte anfahren |
| Interne Feinsteuerung | „D4 links oben“, „Nochmals links oben“, „Mitte“ | Im A1–D5-Raster intern vierteln; Mitte viertelt nicht. In der Viereransicht wählen Richtungen immer das sichtbare Feld, auch bei Wiederholung |
| Einen Schritt zurück | „Zurück“, „Geh einen Schritt zurück“ | Genau eine Auswahl, interne Viertelung oder sichtbare Unterteilung zurücknehmen |
| Vollständiger Reset | „Raster neu starten“, „Koordinatennetz zurücksetzen“, „Zeig mir wieder das ganze Raster“ | Wieder Grundraster des gewählten Monitors; Historie und Auswahl löschen |
| Stopp | „Stopp“, „Stop“, „Hör auf“, „Abbrechen“, „Maus stoppen“, „Maus anhalten“, „Halte die Maus an“ | Sofort nach bestätigter Erkennung Bewegung und wartende Aufträge stoppen; kein Sprung zum alten Ziel |
| Letztes Ziel | „Maus hierhin“ | Zuletzt gewählten Mittelpunkt erneut anfahren |
| Sichtbarkeit | „Raster ausblenden“, „Raster 0 Prozent“, „Raster 50 Prozent“, „Raster fünfzig Prozent“ | Nur Sichtbarkeit ändern; Steuerung bleibt aktiv |
| Nur Raster beenden | „Raster aus“, „Koordinatennetz beenden“, „Raster beenden“ | Bewegung und Raster beenden; bestehendes OpenAI-Live-Gespräch bleibt aktiv |
| Monitor wählen | „Raster auf Monitor zwei“, „Raster auf den linken Bildschirm“, „Raster auf den rechten Monitor“, „Raster auf den Bildschirm mit meiner Maus“ | Expliziten Monitor auswählen; dessen Grundraster neu starten |

Anstelle von Jeffrey funktionieren weiterhin Kelly, Krak, Bronco und James.
Buchstabierformen bleiben erhalten: etwa Anton/Alpha, Be/Berta/Bravo,
Zeh/Cäsar/Charlie und De/Dora/Delta; Zahlen 1–5 oder eins/zwei/zwo/drei/vier/fünf.
Der neue lokale Grammatikumfang bleibt unter der bisherigen 4.000-Phrasen-Grenze.

Beispiel für die neue Bedienfolge:

1. „Raster anzeigen“ → „D4“ → „Feld unterteilen“: wieder A1–D5 innerhalb D4.
2. „B3“ → „Unterteile dieses Feld“: vier Richtungsfelder innerhalb B3.
3. „Links oben“ wählt das sichtbare linke obere Feld. Wiederholen wählt dasselbe
   Feld; es erfolgt keine weitere versteckte Viertelung.
4. „Teil das Feld nochmal“ erzeugt im gewählten Viertel vier neue Felder.
5. „Geh einen Schritt zurück“ nimmt die letzte Unterteilung zurück.

Keine Teilfreigaben: „Fahr nicht nach B3“, „Fahr nach B3 und klick dort“,
„Er sagte Fahr nach B3“, bloße Erklärungen/Befehlsbeispiele und zitierte Befehle
werden nicht als Mausauftrag akzeptiert. Unklare Formulierungen lösen keine
beliebige Bewegung aus. Eine echte Spracherkennung kann trotzdem falsch
transkribieren; die große **Maus STOPP**-Schaltfläche bleibt unabhängig erreichbar.
Zusammengesetzte Aufträge bleiben gesperrt. Die folgenden neuen Einzelaufträge
werden getrennt und ausdrücklich angefordert; keine Tastaturautomation.

[Rasternavigation und Grenzen](MAUSSTEUERUNG.md) ·
[Andere Sprachen](MEHRSPRACHIGKEIT.md) · [Reaktionszeit messen](MAUS-DIAGNOSE.md)

## Neue Einzelklicks, native Menüs und Charakteraufrufe

Neue Befehle benötigen **Bediensprache Deutsch (`de-DE`)**. Die fünf anderen
Rastersprachen bleiben unverändert. Texteingabe funktioniert ebenfalls.

| Auftrag | Vollständige Beispiele | Wirkung / Voraussetzung |
| --- | --- | --- |
| Ein Linksklick | „Linksklick“, „Mach einen Linksklick“, „Klick mit der linken Maustaste“ | Genau ein Klick an der tatsächlichen aktuellen Zeigerposition, auch ohne Raster |
| Ein Rechtsklick | „Rechtsklick“, „Mach einen Rechtsklick“, „Klick mit der rechten Maustaste“ | Ein Klick; danach das tatsächlich geöffnete fremde Kontextmenü lokal prüfen |
| Menüeintrag wählen | „Wähle Kopieren“, „Wähle Einfügen“, „Wähle Nummer 2“, „Wähle Nummer zwei“ | Nur aktueller sichtbarer, aktivierter UIA-Eintrag; Nummer nur, wenn neben dem Menü angezeigt |
| Untermenü öffnen | „Öffne das Untermenü Senden an“ | Nur vorhandenes UIA-ExpandCollapse-Pattern; neue Liste ersetzt die vorherige |
| Menü schließen | „Menü schließen“ | Zugeordnetes natives Menü schließen und lokale Liste verwerfen |
| Konkrete Bestätigung | „Wähle Löschen“ → „Bestätige Löschen“ oder die angezeigte „Bestätige Nummer 3“ | Nur der angefragte aktuelle Eintrag; kein allgemeines „Ja“ |
| Abbrechen / Stopp | „Abbrechen“, „Stopp“, bestehende Stoppvarianten | Wartende Menüaktion/Bestätigung verwerfen und bisherige Bewegung stoppen |
| Figur rufen | „Kelly, komm bitte“, „Ruf Kelly“, „Wechsle zu Bronco“, „Ich möchte mit James sprechen“, „Aktiviere Krak“, „Wechsle zu Jeffrey“ | Bestehendes Charakterprofil nutzen; Live geordnet beenden, keine neue Sitzung automatisch starten |

Alle fünf Namen funktionieren in den expliziten Rufmustern. Der alleinstehende
Name behält sein bisheriges Wakeword-Verhalten. Ein bereits aktiver Charakter wird
nur gezeigt. „Kelly hat gestern gesagt …“, „Erzähl mir etwas über James“,
„Ruf nicht Kelly“, zitierte Befehle und „Linksklick und Rechtsklick“ wechseln
keine Figur und erteilen keinen Klickauftrag.

Während Bewegung oder gedrückter Maustasten wird ein Klick abgewiesen; zunächst
Stopp verwenden und Tasten lösen. Doppelklick, Drag-and-drop und Scrollen sind
nicht ergänzt. ASR-Fehlhörer bleiben möglich; automatische Parserprüfungen sind
keine reale Sprachabnahme.

Mit OpenAI Live wird ausschließlich das vorhandene finale Nutzertranskript
verwendet. Ohne Live: vorhandenes einmaliges „Zuhören“, oder im aktiven Raster/
gebundenen Menü derselbe lokale Windows-Erkenner. Ein zur Bediensprache passender
`System.Speech`-Erkenner ist erforderlich. Ohne Raster oder Menü läuft kein neuer
Dauerhörer. Für Gemini wird keine neue Live-Transkriptunterstützung zugesagt.

Bei gleichen Eintragsnamen die **angezeigte Nummer** verwenden. Fehlende Liste,
Fokuswechsel oder nicht unterstützte UIA-Patterns erlauben keine Ersatzaktion.
Menünamen mit Zitaten oder nicht sprechbarer Satzstruktur gegebenenfalls über
angezeigte Nummern wählen. Menütexte bleiben lokal; gesprochene Befehle bleiben
bei OpenAI Live Teil der bestehenden Cloud-Audioübertragung.

[Native Kontextmenüs und Grenzen](KONTEXTMENUES.md) ·
[Testnachweis und Windows-Prüfliste](ai/testing/2026-11-02-desktop-actions.md)
