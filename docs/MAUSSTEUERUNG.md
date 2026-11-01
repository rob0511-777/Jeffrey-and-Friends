# Sprachgesteuertes Koordinatennetz und Zustimmungen

Entwicklungsstand `feature/mouse-grid-2-i18n`, aufbauend auf
`feature/mouse-grid-consent` (PR #5). Diese Erweiterung ist experimentell.
Die Grundfunktion wurde laut Nutzerrückmeldung mit OpenAI Live auf einem echten
Windows-Rechner ausprobiert, mit wechselhafter Reaktion. Eine vollständige Abnahme
liegt nicht vor. **Die hier ergänzten Korrekturen, Viereransichten und Diagnosen
sind noch nicht unter Windows getestet.** PRs #4, #5 und #6 bleiben eigenständig.

## Starten und bedienen

„Raster anzeigen“ startet die Koordinatensteuerung auf dem ausgewählten Monitor.
Alternativ das Textfeld verwenden, bei deutscher Bediensprache zum Beispiel
„Jeffrey, zeig das Raster“. Ohne Live-Gespräch kann einmaliges Windows-Zuhören
zum Start verwendet werden, sofern ein passender Windows-Erkenner installiert ist.

**OpenAI Live:** Die bereits vorhandene Transkription übernimmt auch Rasterbefehle.
Das Gespräch bleibt verbunden. Reine Mausbefehle werden vor einer KI-Antwort lokal
geprüft; die App fordert dafür keine Modellantwort an. Normale Fragen und
Bildschirm-/Textaufträge können zwischen Rasterbefehlen gestellt werden. Beispiel:
„D4“ → „Feld unterteilen“ → „B3“ → „Jeffrey, kannst du mir erklären, was auf diesem
Bildschirm steht?“ → „Raster aus“. Der letzte Befehl beendet nur das Raster.
Ein Bildschirmauftrag verwendet weiterhin die vorhandene separate Datenschutzfreigabe.

Im Live-Gespräch gelangen auch Mausbefehle als Audio an den vorhandenen Anbieter.
Es entsteht keine weitere API-Verbindung allein für das Raster; die laufende
Audio-/Transkriptionsnutzung kann weiterhin Kosten verursachen. Ohne Aktivität
trennt die Sitzung wie bisher nach 45 Sekunden, spätestens nach 15 Minuten.
Das Raster bleibt nach einem Idle-Disconnect aktiv. Danach übernimmt der lokale
Rasterhörer. Bei gewähltem OpenAI und eingeschaltetem Wakeword akzeptiert dieser
auch den aktiven Charakternamen und dessen lokalisierte Begrüßung, um Live erneut
zu starten. Alternativ „Live sprechen“ verwenden.

**Gemini Live:** Das bisherige minimale Kompatibilitäts-Setup liefert keinen
verlässlichen appseitigen Nutzertranskriptkanal für das Abfangen von Mausbefehlen.
Es wird deshalb unverändert ohne zusätzliche Transkriptions-/Tool-Konfiguration
betrieben. Raster per Oberfläche oder Textfeld starten; dabei endet Gemini Live,
bevor die lokale Erkennung übernimmt. Vor einem neuen Gemini-Gespräch das Raster
beenden. Das ist ein ausdrücklicher Fallback, keine nahtlose Gemini-Integration.

**Lokaler Rasterhörer:** Ein Windows-System.Speech-Erkenner verarbeitet nur die
feste Grammatik der Bediensprache. Alle fünf Charakternamen bleiben verwendbar.
`InstalledRecognizers()` muss die exakte Locale melden. Ein installiertes
Sprachpaket oder Windows-Diktat allein beweist diese Unterstützung nicht.
Fehlt der Erkenner, stoppt die Bewegung; eine verständliche Meldung verweist auf
Textfeld und Schaltflächen. Nach Installation den Modus beenden und neu starten.
[Sechs Sprachen, Befehle und Grenzen](MEHRSPRACHIGKEIT.md).

Es startet immer nur ein Mikrofonbesitzer. Vor Live und vor einmaligem Zuhören
wartet die App auf das bestätigte Ende der lokalen Erkenner. Bleibt die Freigabe
unbestätigt, erfolgt kein zweiter Zugriff; Textfeld und Stopp bleiben verfügbar,
gegebenenfalls App neu starten. Nach Live-Ende startet die lokale Rastererkennung
erst nach der rendererseitigen Freigabe. Spontane Kommentare und PC-Hinweise
pausieren während der Koordinatensteuerung, um die eigene Erkennung nicht zu stören.

Die folgenden Beispiele gelten bei **Bediensprache Deutsch**:

| Befehl | Wirkung |
| --- | --- |
| „Jeffrey, A3“, „B4“, „Feld D2“ | Mittelpunkt des Feldes wählen und anfahren |
| „Berta 3“, „Cäsar 2“, „Delta 4“ | Buchstabieralternativen; auch Anton, Alpha, Bravo, Charlie, Dora |
| „D4 links oben“ | Mittelpunkt des linken oberen Viertels von D4 anfahren |
| „Links oben“, „rechts oben“, „links unten“, „rechts unten“ | In A1–D5 intern vierteln; in der Viereransicht das entsprechende sichtbare Feld auswählen |
| „Nochmals links oben“ | In A1–D5 nochmals intern vierteln; in der Viereransicht dasselbe sichtbare Feld wählen, ohne zusätzliche Viertelung |
| „Mitte“ | Mittelpunkt des aktuellen Zielbereichs anfahren |
| „Feld unterteilen“ | Erste Unterteilung: A1–D5; ab zweiter Unterteilung: vier sichtbare Richtungsfelder |
| „Zurück“ | Genau einen Auswahl-, internen Viertelungs- oder Rasterunterteilungsschritt zurücknehmen; vorhandenes vorheriges Ziel anfahren |
| „Raster neu starten“, „Koordinatennetz zurücksetzen“ | Vollständiger Monitor, Auswahl löschen |
| „Maus hierhin“ | Zuletzt gewähltes Ziel erneut anfahren |
| „Raster ausblenden“, „Raster 0 Prozent“ | Unsichtbar, Koordinatenmodus hört weiter lokal zu |
| „Raster 50 Prozent“ | Sichtbarkeit setzen, 0–100 als Zahl; auch z. B. „fünfzig“ |
| „Raster anzeigen“ | Sichtbar machen; bei 0 % auf 100 % setzen |
| „Stopp“, „Maus stoppen“, „Maus anhalten“ | Bewegung abbrechen, aktuelle Position behalten |
| „Koordinatennetz beenden“, „Raster aus“ | Bewegung stoppen, Overlay und lokalen Rasterhörer beenden; bestehendes OpenAI Live bleibt aktiv |

[Übersichtliche deutsche Befehlsliste mit natürlichen Varianten](MAUSBEFEHLE.de.md).
Zum Beispiel „Fahr mal bitte nach B3“, „Unterteile dieses Feld“ und
„Halte die Maus an“. „Mach das ausgewählte Feld kleiner“ bedeutet Unterteilen.

„Stopp“ wirkt auch während der Rasterinitialisierung. Bei Erkennung wird der
Stoppbefehl sofort an den laufenden nativen Bewegungsprozess geschickt; nach
Verarbeitung des Stopps erzeugt der Bewegungsalgorithmus keine weiteren Frames.
Die Ende-zu-Ende-Latenz der echten Spracherkennung muss unter Windows gemessen
werden. Die große Schaltfläche **Maus STOPP** ist unabhängig von Spracherkennung
bedienbar und per Tastatur erreichbar. „Stopp“ lässt den Modus aktiv; Schlaf,
Charakter-/Anbieterwechsel oder tatsächliches Beenden der App verlassen ihn.
Das Schließen der Einstellungen verbirgt weiterhin nur das Fenster; über das
Tray lässt es sich wieder öffnen. App-Ende erfolgt über „Beenden“ im Tray.

Keine Klicks, Doppelklicks, Drag-and-drop oder Scrollaktionen. Das Raster fängt
keine Mausinteraktionen ab und übernimmt keinen Fensterfokus. Zitate, Verneinungen
und angehängte Aktionen werden vom Parser nicht als gültige Mausbefehle freigegeben.
Eine eingeschränkte Sprachgrammatik kann Fehlhörer nicht vollständig ausschließen;
Stopp und Modus beenden bleiben die direkten Korrekturwege.

## Raster, Feinsteuerung und Einstellungen

Das Grundraster hat immer vier Reihen und fünf Spalten. Die gesamte native
Monitorfläche einschließlich Taskleiste wird lückenlos auf ganze Pixel aufgeteilt.
D4 auf einem Monitor mit 1920×1080 Pixeln ab (0,0) hat das Ziel (1344,945), sein
linkes oberes Viertel (1248,877). Rechts/unten ist die exklusive Rechteckgrenze.

Ebene 0 zeigt A1–D5 über den gesamten Monitor. Die erste sichtbare Unterteilung
eines gewählten Feldes zeigt erneut A1–D5 in diesem Feld. Ab der **zweiten sichtbaren
Rasterunterteilung** gibt es immer vier Felder: links oben, rechts oben, links
unten, rechts unten. Beispiel: „D4“ → „Feld unterteilen“ → „B3“ → „Feld unterteilen“.
Das letzte Raster liegt genau im gewählten B3-Bereich; es enthält keine A1–D5-Ziele.

In einer A1–D5-Ansicht vierteln Richtungsbefehle die ausgewählte Region intern,
ohne sichtbare Linien zu verschieben. Diese Feinsteuerung zählt nicht als neue
sichtbare Rasterebene. In einer Viereransicht wählen dieselben Richtungsbefehle
dagegen das entsprechende **sichtbare** Viertel des aktuellen Rasters. Auch
„nochmals links oben“ wählt dort dasselbe Feld; erst „Feld unterteilen“ erzeugt
darin eine neue Viereransicht. So erfolgt keine versehentliche doppelte Viertelung.
„Mitte“ fährt die Mitte des gewählten Bereichs an und viertelt nicht.

Elternraster bleiben dezent sichtbar, die aktive Region gelb und das Ziel als Punkt.
Es gibt keine Ecklegende. Viererfelder erhalten lokalisierte Richtungsbeschriftungen,
bei kleineren Flächen Kürzel (Deutsch LO/RO/LU/RU); bei nur wenigen DIP-Pixeln
verschwinden auch diese. Die vier Richtungsziele bleiben gültig. A1–D5 werden in
der Viereransicht mit einer verständlichen Meldung abgewiesen.

„Zurück“ nimmt jeweils genau einen tatsächlich geänderten Auswahl-, Viertelungs-
oder Rasterunterteilungsschritt zurück. Nach Auswahl in der Viereransicht löscht
das erste Zurück die Auswahl; das nächste kehrt zur vorherigen Rasteransicht zurück.
Existiert ein früheres Ziel, wird es angefahren. Ohne früheres Ziel wird nur die
Auswahl aufgehoben und die Bewegung gestoppt. Höchstens 256 Rückschritte bleiben
im Speicher; „Raster neu starten“ löscht die gesamte Historie und alle Ebenen.

Unter „Raster & Bewegung einstellen“:

- Sichtbarkeit 0–100 %, Vorgabe 100 %. Bei 0 % bleiben Modus und Befehle aktiv (gemeinsames OpenAI-Transkript oder lokaler Erkenner).
  Der Wert wird gespeichert; explizites „Raster anzeigen“ macht ein unsichtbares
  Raster wieder sichtbar. Nach App-Start ist der Koordinatenmodus immer aus.
- Bewegungsgeschwindigkeit 200–3000 physische Pixel/Sekunde, Vorgabe 900. Dies ist
  die mittlere Richtgeschwindigkeit für neue Bewegungen; sanftes Beschleunigen und
  Abbremsen ergibt eine höhere Spitzengeschwindigkeit. Dauer 80 ms bis 60 s.
- Maximale Unterteilungstiefe 1–8, Vorgabe 4. Raster- und Viertelungsschritte zählen
  gemeinsam; reine Auswahl bereits sichtbarer Felder erhöht die Tiefe nicht.
  Die erste neue 4×5-Ansicht braucht mindestens 10×8 Pixel. Eine neue Viereransicht
  und interne Viertelung brauchen mindestens 4×4; kleinster resultierender Zielbereich ist 2×2 Pixel.
  Änderung der Tiefengrenze stoppt und setzt ein aktives Raster zurück.

Während der Monitorermittlung werden bestätigte Befehle geordnet gepuffert, maximal
64 wartende Aufträge. Stopp verwirft diese sofort und invalidiert den ausstehenden
Rasterstart. Live-Befehle erhalten eigene einmalige Kennungen statt einer einzigen
überschreibbaren Freigabe; Wiederholungen und nach neuerem Auftrag verspätet
übergebene ältere Kennungen werden abgewiesen. Ein weiterer Sprachbeginn allein
verwirft keine bereits bestätigte Freigabe. Die 30-Sekunden-Frist bleibt erhalten.

Neue Ziele ersetzen laufende Bewegungen ausgehend von der dann tatsächlichen
Zeigerposition. Der native Prozess prüft den gewählten Monitor vor jedem Frame.
Fehlt er oder stimmen seine Grenzen nicht mehr, endet die Bewegung mit fester
Fehlermeldung. Ein von Windows begrenzter Zeiger wird nicht als „Ziel erreicht“
bestätigt. Physische Eingaben oder Cursor-Sperren anderer Anwendungen können die
Bewegung beeinflussen und sind unter Windows zu prüfen.

## Monitore und DPI

Die vorhandene Desktop-Vision-Auswahl wird wiederverwendet: Monitor des aktuellen
bzw. zuletzt aktiven fremden Fensters, dann Mausmonitor, dann Hauptmonitor.
Die App-Fenster zählen nicht als Ziel. Explizit zum Beispiel:

- „Raster auf Monitor zwei“ oder „Zeig das Koordinatennetz auf Bildschirm eins“
- „Raster auf den linken Bildschirm“ / „Raster auf den rechten Monitor“
- „Raster auf den Bildschirm mit meiner Maus“

Nummern sind GDI-`DISPLAYn` und können von der Windows-Einstellungsanzeige abweichen.
Ein fehlender ausdrücklich gewählter Monitor wird nicht stillschweigend ersetzt.
Eine erneute explizite Monitorauswahl setzt Raster und Ziel zurück.

Native Rechtecke und Cursorziele verwenden physische Pixel, auch bei negativen
Ursprüngen und verschiedenen Skalierungen. Nur das Overlay wird mit Electrons
`screenToDipRect` in DIP umgerechnet; bloßes Dividieren durch einen DPI-Faktor
würde bei gemischter Skalierung die Ursprünge verfälschen. 16:9, 21:9, 32:9 und
Hochkant benötigen keine Sonderraster. Monitorwechsel, Hotplug, Auflösungs- oder
Skalierungsänderung beenden den Modus; danach ausdrücklich neu starten.

Ziele bleiben innerhalb des gewählten Monitors. Befindet sich der Zeiger vorher
auf einem anderen Monitor, führt die Bewegung vom tatsächlichen Start zum Ziel
über den virtuellen Desktop. Windows kann an Lücken zwischen Monitoren den Zeiger
begrenzen; dieser Übergang braucht einen echten Mehrmonitor-Test. Es gibt keinen
absichtlichen Sprung zum Rand des gewählten Monitors.

## Getrennte Cloud-Zustimmungen

Bildschirmaufnahme und markierter Text haben jeweils einen eigenen App-Dialog:

| Auswahl | Geltung |
| --- | --- |
| Abbrechen | Keine Übertragung, keine neue gespeicherte Freigabe |
| Einmal erlauben | Nur der konkrete Auftrag; Vorlesen umfasst dessen sequenzielle Audioabschnitte |
| Auf diesem Gerät dauerhaft erlauben | Weitere ausdrücklich angeforderte Aufträge derselben Datenart an OpenAI, auch nach App-Neustart |

Der Dialog benennt Datenart, OpenAI, mögliche vertrauliche Inhalte und API-Kosten,
vorübergehende Verarbeitung in der App sowie die Datenschutzregeln des Empfängers.
Abbrechen ist die Standardauswahl. Der Status wird versioniert im lokalen
`settings.json`-App-Profil gespeichert, ohne Inhalte oder Schlüssel. Bestehende
Prozessfreigaben und unbekannte Schema-Versionen werden nicht übernommen.

Widerruf unter **KI-ANBIETER & KOSTEN → Datenschutz → Bildschirm-/Text-Freigabe
widerrufen**. Nur die gewählte dauerhafte Freigabe wird entfernt; laufende
Desktop-/Textausgabe wird vorsorglich abgebrochen. Offene Dialogantworten können
einen zwischenzeitlichen Widerruf nicht überschreiben. Wenn Speichern fehlschlägt,
bleibt der Widerruf zur Laufzeit wirksam und die App meldet den Speicherfehler;
vor Neustart muss das Einstellungsprofil wieder beschreibbar sein. Dauerhafte
Zustimmung erlaubt eine Übertragung erst nach erfolgreichem Speichern.

Es gibt weiterhin keine Hintergrundaufnahme oder Textüberwachung. Ein neuer
expliziter Bildschirm-/Textbefehl ist immer erforderlich. Empfängerwechsel erbt
keine Freigabe; derzeit besitzt nur OpenAI den passenden Cloud-Auswahlpfad.
Lokal/Offline braucht keine Cloud-Zustimmung. Gemini bleibt ohne geeigneten
Bild-/Auswahl-/TTS-Pfad, ohne automatischen Anbieterwechsel. Die UIA-Auswahl wird
vor einem Text-Cloud-Dialog ausgelesen: bei UIA-Fehler gibt es keinen solchen
Dialog und keine Übertragung. Windows-UAC, SmartScreen und Mikrofonrechte sind
unabhängige Systemberechtigungen und ersetzen keine App-Zustimmung.

Temporäre Bildpuffer, begrenzte Audioabschnitte und bestehende Löschpfade bleiben
erhalten. Keine Diagnose protokolliert Inhalte, Titel, Transkripte oder API-Schlüssel.
Allgemeine Chat-Nachrichten bleiben wie bisher flüchtig im Chat; direkte
Rasterbefehle erscheinen nicht als Chatzeilen und werden nicht als Gedächtnisnotizen
gespeichert. Bei OpenAI Live sind sie Bestandteil der bestehenden Audioübertragung.

## Windows-Abnahme (noch offen)

Die aktuellen Korrekturen und Ergebnisse stehen im
[Testnachweis Reaktion und Viererunterteilung](ai/testing/2026-11-01-mouse-response-quarters.md).
Für Messungen gibt es die ausdrücklich aktivierbare, inhaltsfreie
[Mausdiagnose](MAUS-DIAGNOSE.md). Der
[ursprüngliche #7-Nachweis](ai/testing/2026-11-01-feature-mouse-grid-2-i18n.md)
beschreibt den Stand vor diesen Korrekturen.
Insbesondere echte DPI-/Mehrmonitor-Ausrichtung, alle verfügbaren Windows-Sprachen,
Sprach-Stopp-Latenz und OpenAI-/Gemini-Audioübergänge sind noch offen.
Der [Nachweis von PR #5](ai/testing/2026-10-31-feature-mouse-grid-consent.md)
beschreibt den historischen Stand mit exklusivem lokalen Modus und Ecklegende.
