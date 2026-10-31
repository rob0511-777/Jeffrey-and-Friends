[English](README.md) | [Deutsch](README.de.md)

# Jeffrey and Friends

![Die fünf Charaktere von Jeffrey and Friends](assets/jeffrey-and-friends-v072.png)

Ein sprachgesteuerter Windows-11-Desktop-Assistent mit fünf animierten KI-Charakteren,
Cloud-Gesprächen, lokaler Text-KI und experimenteller Mauspositionierung per Sprache.
Entwickelt mit Electron, HTML, CSS und JavaScript.

**Versionsangabe: 0.7.4.** Diese README beschreibt den Entwicklungsstand von
`feature/mouse-grid-consent` (PR #5), einschließlich Desktop Vision 2.0 aus PR #4.
Diese Erweiterungen sind **noch nicht nach `main` übernommen**. Das Bild oben ist
vorhandenes Team-Artwork, kein Screenshot der experimentellen Bedienoberfläche.

Oberfläche und lokale Befehlserkennung sind derzeit vorwiegend deutsch.
Eine englische README ergänzt weder eine englische Oberfläche noch übersetzte Steuerbefehle.

## Inhalt

- [Entwicklungsstand](#entwicklungsstand)
- [Charaktere, Stimmen und Alltagsfunktionen](#charaktere-stimmen-und-alltagsfunktionen)
- [Installation unter Windows 11](#installation-unter-windows-11)
- [Erste Schritte und Sprachbefehle](#erste-schritte-und-sprachbefehle)
- [KI-Anbieter und Kosten](#ki-anbieter-und-kosten)
- [Desktop Vision 2.0](#desktop-vision-20)
- [Experimentelle Maussteuerung](#experimentelle-maussteuerung)
- [Datenschutz und gespeicherte Zustimmungen](#datenschutz-und-gespeicherte-zustimmungen)
- [Probleme lösen](#probleme-lösen)
- [Entwicklung und Prüfung](#entwicklung-und-prüfung)
- [Geplante Funktionen](#geplante-funktionen)
- [Weiterführende Dokumentation](#weiterführende-dokumentation)

## Entwicklungsstand

Repository- und PR-Status geprüft am **31. Oktober 2026**:

| Stand | In diesem Stand verfügbar | Status und Grenzen |
| --- | --- | --- |
| [`main`](https://github.com/rob0511-777/Jeffrey-and-Friends/tree/main) — stabile Entwicklungsbasis | Fünf Charaktere, Stimmen/Filter, Wakewords, OpenAI Realtime, Gemini Live, lokale Text-KI, Kosten/Budget, begrenzte Windows-Werkzeuge und grundlegende einmalige OpenAI-Auswertung des **primären** Bildschirms | Vorhandene Basis; keine Zertifizierung jeder Funktion auf jeder Windows-Installation. Bildschirm-Zustimmung gilt für den App-Prozess. |
| [Desktop Vision 2.0 — PR #4](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/4), `feature/desktop-vision-2` | Baut auf `main` auf: Monitorauswahl, Windows-UI-Automation-Textauswahl, Vorlesen/Erklären/Zusammenfassen, Zuverlässigkeitskorrekturen für Desktop-Anfragen und vorhandene KI-Auswahl unter **DIREKT SPRECHEN** verschoben | Offener Draft-PR. Native Windows-Auswahl, Fokus und gemischte DPI-Skalierung müssen noch praktisch geprüft werden. Bildschirm-/Text-Cloud-Zustimmungen sind getrennt und gelten für den App-Prozess. |
| [Maussteuerung und Zustimmungen — PR #5](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/5), `feature/mouse-grid-consent` | Baut auf PR #4 auf: A1–D5-Raster, Verfeinerungen, weiche Positionierung, lokale Rasterbefehle und getrennte einmalige oder dauerhafte Cloud-Zustimmungen mit Widerruf | Offener Draft-PR; experimentell. Live-Gespräche pausieren im Koordinatenmodus. Die echte Windows-Abnahme steht noch aus. |
| [Geplante Arbeiten](#geplante-funktionen) | Künftige Verbesserungen bei Bedienung und Sprachen | Nicht implementiert; kein Liefertermin zugesagt. |

Für den vollständigen unten beschriebenen Funktionsumfang den Branch aus PR #5
verwenden. `main` enthält die Erweiterungen aus PR #4/#5 noch nicht. Ein Branchname
bezeichnet Quellcode, keinen veröffentlichten Installer oder Release.

## Charaktere, Stimmen und Alltagsfunktionen

Es ist jeweils ein Charakter aktiv. Ein Charakterwechsel beendet die laufende
Live-Sitzung; in PR #5 verlässt er zusätzlich den Koordinatenmodus.

| Charakter | Persönlichkeit | OpenAI-Standardstimme |
| --- | --- | --- |
| Jeffrey | Hilfsbereiter Desktop-Roboter mit trockenem Humor | `shimmer` |
| Kelly | Warme, selbstbewusste virtuelle Assistentin | `coral` |
| Krak | Schelmischer grüner Fantasy-Kobold | `cedar` |
| Bronco | Mürrischer Schrottplatz-Roboter mit sarkastischem Humor | `verse` |
| James | Höflicher britischer Butler-Roboter | `ash` |

Stimme und Sprechstil werden je Charakter gespeichert. Jeffrey und Bronco besitzen
konfigurierbare lokale Roboter-/Rauheitsfilter; dadurch klingen unterschiedliche
Anbieter nicht identisch. Gemini verwendet eigene Audiostimmen. Lokale Windows-Sprache
nutzt eine installierte Windows-Stimme statt der OpenAI-Charakterstimmen.
Kelly und Krak haben audiogesteuerte Mundanimationen. Die Animation ist eine Näherung,
keine Studio-Lippensynchronisation; getrennte Lidanimation ist derzeit deaktiviert.

Weitere vorhandene Funktionen sind ein transparentes Charakter-Overlay, Gesten,
Größen- und Positionsregler, optionale spontane Kommentare, ein optionales lokales
Gedächtnis, PC-Status, Web-/Chrome-/Idealo-Hilfen und eine begrenzte Auswahl startbarer
Windows-Programme. Voraussetzung sind die jeweiligen Schalter, installierte Anwendungen
und bei Cloud-Werkzeugen Anbieterzugriff sowie mögliche API-Kosten.
Dies ist keine uneingeschränkte Desktop-Automatisierung.

## Installation unter Windows 11

### Voraussetzungen

- Windows 11 mit der enthaltenen **Windows PowerShell 5.1** (`powershell.exe`).
- [Node.js LTS](https://nodejs.org/en/download) mit npm; Node.js 24 LTS wird für
  diesen Stand empfohlen. Nach der Installation das Terminal neu öffnen.
- Internetzugang für die Electron-Installation und Cloud-Anbieter. Ein lokales Modell
  benötigt eventuell einen anfänglichen Download und passende Hardware.
- Mikrofon für Spracheingabe; Kopfhörer helfen gegen Echo.
- Für Wakewords, **Einmal zuhören** und Rasterbefehle: ein installierter deutscher
  **Windows-Desktop-Spracherkenner** (`System.Speech`, `de-DE`). Deutsche Sprachkomponenten
  unter Windows **Zeit und Sprache → Sprache und Region** prüfen.
- Für Cloud-Nutzung: eigener OpenAI- oder Gemini-API-Schlüssel und Zugriff auf das gewählte
  Modell. Für lokale KI: separat installierter OpenAI-kompatibler lokaler Modellserver.
- [Git für Windows](https://gitforwindows.org/), wenn die folgende Klonmethode genutzt
  wird. Für die ZIP-Methode ist Git nicht erforderlich.

Bei Sprachfunktionen unter Windows **Datenschutz und Sicherheit → Mikrofon** den
Zugriff für Desktop-Apps erlauben. Die App als normaler Benutzer starten;
Administratorrechte sind keine übliche Installationsvoraussetzung.

### Aktuellen Entwicklungsstand beziehen

PowerShell in dem Ordner öffnen, in dem das Projekt gespeichert werden soll:

```powershell
git clone --branch feature/mouse-grid-consent https://github.com/rob0511-777/Jeffrey-and-Friends.git
cd Jeffrey-and-Friends
.\START-Windows.cmd
```

Alternativ das [Repository](https://github.com/rob0511-777/Jeffrey-and-Friends) öffnen,
**feature/mouse-grid-consent** auswählen, **Code → Download ZIP** wählen, das gesamte
Archiv entpacken und im entpackten Projektordner `START-Windows.cmd` doppelklicken.
Nicht aus dem ZIP-Archiv heraus starten.

Das Startskript installiert Electron bei Bedarf über npm und startet anschließend
die App. Der erste Start benötigt Internetzugang. Das Terminal für mögliche
Startfehler geöffnet lassen. Ein lokales KI-Modell ist nicht enthalten und muss separat eingerichtet werden.

Für einen manuellen Start aus dem Projektordner:

```powershell
npm install
npm start
```

`VORSCHAU.html` bietet eine visuelle Simulation im Browser. Sie ist nicht die
Windows-App und prüft weder echtes Audio noch Bildschirmzugriff oder Mausbewegung.

## Erste Schritte und Sprachbefehle

1. Jeffrey, Kelly, Krak, Bronco oder James auswählen.
2. In diesem Entwicklungsstand befindet sich **KI-Modus** direkt unter **DIREKT SPRECHEN**.
   Anbieter wählen. Schlüssel, Kosten und weitere Einstellungen bleiben unter **KI-ANBIETER & KOSTEN**.
3. Anbieterschlüssel speichern oder lokalen Server und Modell einrichten. Kosteneinstellungen prüfen.
4. Für unterstütztes Cloud-Audio **Live sprechen** anklicken. Für lokale Textverarbeitung
   unter **TEXT UND WINDOWS-SPRACHE** eine Nachricht eingeben. **Einmal zuhören** erkennt
   eine Äußerung über Windows; die anschließende Verarbeitung kann trotzdem den gewählten
   Cloud-Anbieter verwenden.
5. Optional den lokalen Wakeword-Hörer aktivieren und **Codewort kostenlos testen** nutzen.
   Den Namen des gewählten Charakters sagen, etwa **Jeffrey** oder **Hallo James**.
   Der Wakeword-Test bleibt lokal; ein normaler erfolgreicher Weckruf startet den gewählten
   Live-Dienst und kann Kosten verursachen. Lokale Text-KI bietet keine vollständige Live-Audiositzung.

Die folgenden Beispiele sind **deutsche Befehle** für die derzeitigen Erkenner.
Den Charakternamen durch den Namen der aktiven Figur ersetzen.

| Befehl oder Bedienelement | Bedeutung und Voraussetzung |
| --- | --- |
| „Jeffrey“ / „Hallo James“ | Gewählten Charakter wecken; Hintergrund-Wakewords müssen aktiviert und deutsche Spracherkennung installiert sein. |
| „Jeffrey, verschwinde“ | Figur ausblenden und Live-Gespräch schließen; Geminis aktuelles Minimal-Setup aktiviert die für solche App-seitigen Live-Befehle nötigen Transkripte nicht. Dort die Stoppfläche nutzen. |
| „Stopp“ / Schaltfläche **Stopp** | App-Sprachausgabe/-Verarbeitung über den unterstützten Befehlspfad stoppen; im aktiven Koordinatenmodus zusätzlich die Mausbewegung stoppen, ohne den Modus zu verlassen. |
| „Jeffrey, schau auf Monitor zwei“ | Ausdrücklich gewählten Bildschirm mit OpenAI auswerten; ab PR #4. |
| „Jeffrey, lies mir den markierten Text vor“ | Echte UI-Automation-Textauswahl vorlesen; ab PR #4 und mit geeignetem Anbieter. |
| „Erklär mir den markierten Text“ / „Fasse den markierten Text zusammen“ | Unterstützte Auswahl mit OpenAI oder eingerichtetem lokalem Textmodell erklären/zusammenfassen; ab PR #4. |
| „Jeffrey, zeig das Koordinatennetz“ | Koordinatenmodus starten; PR #5, Windows und lokale deutsche Sprachkomponenten erforderlich. |

**Aktiv** erlaubt eingeschaltete spontane Kommentare; **Ruhe** unterdrückt diese,
während manuelle Anfragen und optionale Wakewords verfügbar bleiben. **Schlaf**
stoppt Sprach-, Wakeword- und Koordinatenaktivität. Das Schließen der Einstellungen
verbirgt nur das Fenster: über das Tray-Symbol wieder öffnen oder im Tray-Menü
**Beenden** zum vollständigen Beenden wählen.

Live-Sitzungen enden nach **45 Sekunden Gesprächspause**, nicht nach insgesamt
45 Sekunden Nutzung. Zusätzlich gibt es ein 15-Minuten-Sicherheitslimit. Anbieter
zwischen Sitzungen wechseln: Eine Änderung von **KI-Modus** stoppt die aktuelle
Verbindung und separates Vorlesen; sie setzt das Gespräch nicht heimlich mit einem anderen Anbieter fort.

## KI-Anbieter und Kosten

| Modus | Verfügbare Funktionen | Voraussetzungen und Grenzen |
| --- | --- | --- |
| **OpenAI** | Realtime-Sprache, allgemeiner Text, Bildschirmauswertung, Erklärung/Zusammenfassung markierter Texte und Charakter-TTS | API-Schlüssel, Modellzugriff und Internet. API-Nutzung kann kostenpflichtig sein; ein ChatGPT-Abo ist kein API-Guthaben. Bildschirm-/Textübertragungen benötigen eigene Zustimmung. |
| **Gemini** | Gemini-Live-Audiogespräche | Gemini-API-Schlüssel und verfügbares Live-Modell. Das aktuelle Kompatibilitäts-Setup aktiviert weder optionale Werkzeugdeklarationen noch Eingabe-/Ausgabetranskripte. Allgemeiner Textchat, Bild-/Textauswahlanalyse und der passende Auswahl-TTS-Pfad sind hier nicht verfügbar; kein automatischer Anbieterwechsel. |
| **Lokal** | Textchat und Erklärung/Zusammenfassung ausgewählter Texte über einen lokalen Server; vorhandene Windows-Sprache kann Auswahl vorlesen | Server/Modell müssen auf diesem PC installiert und gestartet sein. Keine vollständige lokale Realtime-Audiokette und keine Bildanalyse über diese Schnittstelle. Windows-Sprache ist nicht die OpenAI-Charakterstimme. |
| **Automatisch** | Text nutzt ein eingerichtetes lokales Modell oder ohne Modell begrenzte eingebaute Antworten; Live-Audio braucht ausdrückliche Freigabe des kostenpflichtigen Fallbacks | Keine allgemeine Aufgabenvermittlung. Bei freigegebenem Audio-Fallback wird ein vorhandener Gemini-Schlüssel bevorzugt, sonst OpenAI. Der Anbieter bleibt während einer Sitzung fest. Kein automatischer Cloud-Text-Fallback. |

Einen Schlüssel im [OpenAI-API-Dashboard](https://platform.openai.com/api-keys) oder in
[Google AI Studio](https://aistudio.google.com/app/apikey) erstellen und im passenden
Anbieterfeld unter **KI-ANBIETER & KOSTEN** speichern. Die Gemini-Schlüsselprüfung
akzeptiert klassische `AIza`-Schlüssel und `AQ.`-Authorization-Keys; ein angenommenes
Format garantiert keinen Zugriff auf ein bestimmtes Live-Modell. Schlüssel nicht in
Chatnachrichten oder geteilte Screenshots aufnehmen.

Für lokale KI Serveradresse und Modell eintragen und **Lokale Modelle prüfen** nutzen:

| Server | Typische Adresse |
| --- | --- |
| [Ollama](https://ollama.com/) | `http://127.0.0.1:11434/v1` |
| [LM Studio](https://lmstudio.ai/) | `http://127.0.0.1:1234/v1` |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | `http://127.0.0.1:8080/v1` |

Zulässig sind nur Loopback-Adressen (`localhost`, `127.0.0.1`, `::1`). Das Modell nach
Anleitung des jeweiligen Servers herunterladen und bereitstellen; die App installiert
es nicht. Lokale Inferenz vermeidet Cloud-Inferenzkosten, nutzt aber eigene Hardware.

Die Kostenanzeige trennt gemeldete Nutzung und Schätzungen. Preise sind veränderbare
Rechenannahmen, keine Live-Preisliste oder offizielle Rechnung. Audio, Text-/Bildanalyse,
TTS, Websuche und optionale gesprochene OpenAI-Kommentare können getrennte Kosten verursachen.
Budgetwarnungen erscheinen bei 50/80/100 %; eine optionale lokale Sperre verhindert neue
kostenpflichtige Aktivität ab dem eingestellten Limit. Sie ist keine garantierte
Ausgabensperre beim Anbieter. Geminis Free Tier, Kontingente, Regionen und Modellverfügbarkeit können sich ändern.

Aktuelle [OpenAI-Preise](https://openai.com/api/pricing/),
[Gemini-Preise](https://ai.google.dev/gemini-api/docs/pricing) und
[Gemini-Bedingungen](https://ai.google.dev/gemini-api/terms) prüfen. Für übertragene Daten
gelten Datenschutz- und Aufbewahrungsregeln des Anbieters. Weitere technische Details
stehen im [Anbieter-Leitfaden](docs/HYBRID-AI-SETUP.md).

## Desktop Vision 2.0

### Bildschirm-Erkennung und Monitore

Bildschirmzugriff erfolgt nur auf ausdrückliche Anfrage: Eine Aufnahme eines gewählten
Monitors wird zum Erklären oder Lesen sichtbarer Inhalte an OpenAI gesendet. Dies ist
keine dauerhafte Bildschirmüberwachung. Gemini und lokale Schnittstellen bieten diesen Bildpfad nicht.

Ab PR #4 bevorzugt die automatische Auswahl den Monitor des aktiven oder zuletzt aktiven
fremden Anwendungsfensters, danach den Mausmonitor und zuletzt den Hauptmonitor. Eigene
Assistentenfenster werden ignoriert. Ausdrückliche Befehle sind etwa „Schau auf Monitor
zwei“, „Schau auf den linken Bildschirm“ und „Schau auf den Bildschirm mit meiner Maus“.
Nummern bezeichnen **GDI-`DISPLAYn`** und können von den Nummern in den Windows-Einstellungen abweichen.
Negative Koordinaten und gemischte DPI-Geometrie sind in der Implementierung berücksichtigt;
die echte Hardwareprüfung steht noch aus. `main` besitzt nur den früheren Hauptbildschirm-Pfad.

### Markierter Text: vorlesen, erklären oder zusammenfassen

Text in der Zielanwendung markieren und anschließend einen Auswahlbefehl geben. Die App
liest ihn über **Windows UI Automation**, ohne Zwischenablage, simuliertes Strg+C oder
Ersatz-Screenshot. Markieren allein löst kein Vorlesen aus.

Voraussetzung ist ein geeigneter Textauswahl-Provider der Anwendung. Windows-Editor und
Browser-Auswahlen müssen praktisch geprüft werden; Bild-/Canvas-Text und manche PDF- oder
Spezialsteuerelemente stellen eventuell keinen bereit. Als Passwort/geschützt gemeldete Felder
sind ausgeschlossen. Fehlende Unterstützung und technische UIA-Fehler werden getrennt gemeldet.
Ein UIA-Fehler tritt vor dem Text-Cloud-Dialog auf und erteilt keine Übertragungsfreigabe.

Vorlesen nutzt vorhandene OpenAI-TTS mit Charakterstimme/Filtern oder installierte
Windows-Sprache im lokalen Modus. Es fordert kein Textmodell zur Umformulierung der Auswahl auf.
Erklärung/Zusammenfassung verwendet OpenAI oder das eingerichtete lokale Modell. Maximale
Auswahl: **24.000 Zeichen**, für lokale Erklärung/Zusammenfassung auf **3.500** reduziert.
Lange Vorleseausgaben laufen in aufeinanderfolgenden Abschnitten und lassen sich stoppen.

Siehe [Desktop Vision und sichere Windows-Diagnose](docs/DESKTOP-ERKENNUNG.md).
Die PR-#4-Korrekturen betreffen unter anderem Anfrageabbrüche und UIA-Operationsdiagnosen;
automatische Reproduktionen belegen keinen Erfolg mit jedem nativen Windows-Provider.

## Experimentelle Maussteuerung

**Nur PR #5.** Start über **Raster anzeigen**, Textfeld, **Einmal zuhören** oder den
Startbefehl in einer laufenden OpenAI-Live-Sitzung. Im letzten Fall wurde der Startsatz
bereits durch die Cloud transkribiert. Bei Gemini über Oberfläche, Textfeld oder
einmalige Windows-Erkennung starten.

Das Overlay lässt normale Mausklicks durch und übernimmt keinen Fokus.
Seine **4 Reihen × 5 Spalten** sind auf dem gewählten Monitor mit **A1–D5** beschriftet.
Ziele verwenden physische Windows-Pixel einschließlich negativer Monitorursprünge; nur
die Overlay-Geometrie wird in Electron-Anzeigeeinheiten umgerechnet. Hochkant- und
Ultrawide-Formate behalten das 4×5-Raster. Die Monitorwahl folgt den Desktop-Vision-Regeln.

| Deutscher Rasterbefehl | Aktion |
| --- | --- |
| „A3“, „Feld D2“, „Berta 3“, „Cäsar 2“, „Delta 4“ | Weich zum Feldmittelpunkt bewegen; Buchstabieralternativen helfen bei B/C/D. |
| „D4 links oben“ / „D4 rechts unten“ | Mittelpunkt des genannten Feldviertels anfahren. |
| „Links oben“, „rechts oben“, „links unten“, „rechts unten“ | Aktuellen Zielbereich intern vierteln; sichtbare Rastergeometrie bleibt gleich. |
| „Nochmals links oben“ / „Mitte“ | Erneut verfeinern oder zum Mittelpunkt des aktuellen Bereichs bewegen. |
| „Feld unterteilen“ | Ausgewählten Bereich ausdrücklich in ein weiteres 4×5-Raster aufteilen. |
| „Zurück“ / „Raster neu starten“ / „Koordinatennetz zurücksetzen“ | Eine Verfeinerung zurücknehmen oder auf den vollständigen Monitor zurücksetzen. |
| „Maus hierhin“ | Letztes ausgewähltes Ziel erneut anfahren. |
| „Raster 50 Prozent“ / „Raster ausblenden“ | Sichtbarkeit einstellen oder Overlay ausblenden; lokale Koordinatenbefehle bleiben aktiv. |
| „Raster anzeigen“ | Raster anzeigen; bei 0 % Sichtbarkeit auf 100 % zurückstellen. |
| „Stopp“ / **Maus STOPP** | Bewegung an aktueller Position stoppen; Koordinatenmodus bleibt aktiv. |
| „Koordinatennetz beenden“ / **Modus beenden** | Bewegung stoppen, Raster schließen und lokalen Rasterhörer beenden. |

Beispiel: **A3 → Feld unterteilen → B4 → Feld unterteilen → D2**.
Kleine Bereiche erhalten eine große lesbare Legende und einen Rahmen um die tatsächliche
Region; dabei werden keine Bildschirminhalte aufgenommen oder vergrößert.

Gespeicherte Einstellungen: **Sichtbarkeit 0–100 %** (Vorgabe 100 %), **Geschwindigkeit
200–3000 Pixel/Sekunde** (Vorgabe 900), **maximale Unterteilungstiefe 1–8** (Vorgabe 4).
Raster- und Viertelungsschritte teilen sich das Limit. Pixelgrenzen verhindern zu kleine
Bereiche: Ein neues Raster braucht mindestens 10×8 Pixel, eine Viertelung mindestens 4×4.
Die Geschwindigkeit ist ein mittlerer Richtwert mit Beschleunigen/Abbremsen, keine konstant
anliegende Geschwindigkeit.

Im Koordinatenmodus verarbeitet ein **lokaler deutscher Windows-Erkenner** feste Befehle.
Live-Gespräch, dessen Wakeword-Start und spontane Ausgaben pausieren; sie bilden keinen
parallelen Gesprächskanal. Nach Beenden gilt wieder das normale Wakeword-Verhalten.
Unsichtbares Raster bedeutet **nicht Mikrofon aus**. Nach einem App-Neustart wird der
Koordinatenmodus nie automatisch fortgesetzt.

Neue Ziele ersetzen laufende Bewegungen. Schlaf, Charakter-/Anbieterwechsel, App-Ende und
Änderungen der Bildschirmkonfiguration stoppen/beenden die Koordinatensteuerung. Beginnt
eine Bewegung auf einem anderen Monitor, führt sie über den virtuellen Desktop; Monitorlücken,
Windows-Zeigerbegrenzungen, echter DPI-Abgleich und Sprach-Stopp-Latenz müssen noch unter
Windows geprüft werden. **Keine Mausklicks, Doppelklicks, Zieh- oder Scrollaktionen implementiert.**

Siehe [Maussteuerungs-Anleitung und Windows-Prüfliste](docs/MAUSSTEUERUNG.md).

## Datenschutz und gespeicherte Zustimmungen

PR #5 führt die folgenden Auswahlmöglichkeiten ein, getrennt gespeichert für
**Bildschirmaufnahmen** und **markierten Text** sowie gebunden an **OpenAI**:

| Auswahl in der App | Wirkung |
| --- | --- |
| **Abbrechen** | Abbrechen; keine neue Erlaubnis oder Übertragung. |
| **Einmal erlauben** | Nur den aktuellen Auftrag einschließlich Vorleseabschnitten erlauben. Die nächste Anfrage fragt erneut. |
| **Auf diesem Gerät dauerhaft erlauben** | Zustimmung im lokalen App-Profil über Sprachsitzungen und vollständige App-Neustarts hinweg speichern. Weitere Aktionen benötigen weiterhin einen ausdrücklichen Nutzerauftrag. |

Beide Freigaben lassen sich unter **KI-ANBIETER & KOSTEN → Datenschutz** über die jeweilige
Bildschirm-/Text-Schaltfläche widerrufen. Widerruf bricht laufende Desktop-/Textverarbeitung
ab und verhindert, dass ein offener Dialog die widerrufene Freigabe wiederherstellt.
Bereits gesendete Daten lassen sich damit nicht zurückholen. Speicherfehler werden gemeldet;
dauerhafte Erlaubnis gilt erst nach erfolgreichem Speichern. Kann der Widerruf nicht gespeichert
werden, wirkt er für den laufenden App-Prozess; vor Neustart das Schreibproblem des Profils beheben.

Alte Prozessfreigaben werden nicht heimlich erweitert. Ein anderer Anbieter erbt keine
Erlaubnis. In `main`/PR #4 gelten Freigaben für den App-Prozess; **Einmal** in PR #5 ist
bewusst enger gefasst. Lokale Verarbeitung braucht keine Cloud-Zustimmung.
Windows-Mikrofon-/UAC-/SmartScreen-Meldungen sind unabhängig vom App-Cloud-Dialog.

Cloud-Gespräche übertragen Mikrofon-Audio oder Texteingaben an den gewählten Anbieter;
die Bildschirm-/Textfreigaben decken nicht sämtlichen Gesprächsverkehr ab. Lokale Wakeword-
und aktive Rastererkennung senden kein Audio an einen Cloud-Erkenner. Ausblenden einer
Figur schließt Live, verlässt aber keinen bereits aktiven Koordinatenmodus; dessen
Beenden-Befehl oder **Schlaf** stoppt auch den lokalen Rasterhörer.

Schlüssel bleiben im Hauptprozess und werden bei verfügbarer Betriebssystemverschlüsselung
mit Electron `safeStorage` verschlüsselt; sonst bleiben neu gespeicherte Schlüssel nur für
diesen Lauf im Speicher. Einstellungen, dauerhafte Freigaben und Nutzungsmetadaten liegen im
lokalen App-Profil. Optionale Merksätze werden lokal gespeichert und bei aktivem Gedächtnis
an den gewählten KI-Anbieter übergeben. Keine Schlüssel oder vertraulichen Notizen in
Repository-Dateien oder Screenshots ablegen.

Bildschirm-/Auswahlinhalte werden vorübergehend verarbeitet statt gezielt in Dateien oder
Diagnoseprotokolle geschrieben; direktes Auswahl-Vorlesen bleibt außerhalb des normalen
Chatverlaufs und Gedächtnisses. Daraus folgt keine Garantie zur Aufbewahrung beim Cloud-Anbieter.
Es gibt keine automatische Bildschirm- oder Auswahlüberwachung.

## Probleme lösen

| Symptom | Prüfschritte |
| --- | --- |
| Start meldet fehlendes Node/npm oder die Electron-Installation bricht ab | Node.js LTS mit npm installieren, Terminal neu öffnen, vollständiges Projekt entpacken und Netzwerkzugang prüfen. Fehlermeldung im Startterminal lesen. |
| Wakeword, einmaliges Zuhören oder Rasterbefehle funktionieren nicht | Mikrofonrechte und installierten deutschen Desktop-Erkenner prüfen. Wakeword-Test nutzen; Rastermodus nach Installation von Sprachkomponenten neu starten. Das Textfeld bleibt als Alternative. |
| Live endet nach einer Sprechpause | Der 45-Sekunden-Idle-Disconnect ist beabsichtigt. Live erneut starten oder nach Beenden des Koordinatenmodus das aktivierte Wakeword nutzen. |
| Live startet bei aktivem Raster nicht | Zuerst „Koordinatennetz beenden“ sagen oder **Modus beenden** anklicken. Gleichzeitiges Live-Gespräch und Koordinatenmodus sind nicht implementiert. |
| Markierter Text lässt sich nicht lesen | Unvertrauliche Auswahl im Windows-Editor versuchen. UIA-Unterstützung, Fokus und sichere Diagnoseanleitung prüfen; Dass nach einem UIA-Fehler kein Cloud-Dialog erscheint, ist erwartetes Verhalten. Nicht pauschal Administratorrechte als Lösung annehmen. |
| Falscher Bildschirm oder versetzter Zeiger | GDI-`DISPLAYn`, Fenster-/Mausmonitorwahl, Skalierung und Monitoranordnung prüfen. Raster nach Änderungen neu öffnen; gemischte DPI-Hardware muss praktisch geprüft werden. |
| Cloud-Modell oder Schlüssel funktioniert nicht | Anbieterzugriff, gewähltes Modell, Kontingent/Abrechnung und gespeicherten Schlüssel prüfen. Gemini ist hier kein allgemeiner Textmodus. |
| Lokale KI nicht erreichbar | Modellserver starten, Modell laden und Loopback-Adresse/Modellname prüfen. Die App startet oder lädt Server/Modell nicht selbst. |

## Entwicklung und Prüfung

Nach Installation der Abhängigkeiten aus dem Projektordner ausführen:

```powershell
npm test
powershell.exe -NoLogo -NoProfile -File tests/mouse-motion.test.ps1
powershell.exe -NoLogo -NoProfile -Mta -File tests/read-selection.test.ps1
```

Der PR-#5-Nachweis dokumentiert **434 Node-Tests**, **31 simulierte UIA-Fälle** sowie
Bewegungsprüfungen mit simulierten Betriebssystemgrenzen unter Linux/PowerShell 7, ohne
bezahlte API-Aufrufe. In dieser Sandbox lief Node mit
`node --test --test-isolation=none tests/*.test.cjs`.
Dies sind Simulations-/Vertragsprüfungen, **keine nativen Windows-Integrationstests**.
Sie bestätigen weder Windows PowerShell 5.1 noch echte Erkennung, Stopp-Latenz,
Mikrofonübergabe, UIA-Provider, Overlay-Klickdurchlässigkeit oder gemischten DPI-Zeigerabgleich.

Siehe [PR-#5-Testnachweis](docs/ai/testing/2026-10-31-feature-mouse-grid-consent.md)
und [UIA-Diagnose](docs/ai/testing/2026-10-31-feature-desktop-vision-2-uia-operations.md)
für reproduzierbare Prüfungen und die ausstehende Windows-Abnahme.

## Geplante Funktionen

**Folgendes ist im aktuellen Stand nicht implementiert:**

- Gleichzeitige KI-Unterhaltung und Maussteuerung ohne Moduswechsel.
- Eine intuitivere Rasterunterteilung direkt innerhalb des ausgewählten Feldes.
  Der ausdrückliche Befehl **Feld unterteilen** existiert bereits in PR #5;
  die überarbeitete Bedienung ist geplant.
- Mausklicks, Doppelklicks und weitere Desktop-Aktionen über die vorhandenen begrenzten Werkzeuge hinaus.
- Eine vollständig mehrsprachige Oberfläche und Sprachsteuerung für **Deutsch, Englisch,
  Chinesisch, Japanisch, Spanisch und Portugiesisch**. Eine KI-Unterhaltung in einer
  anderen Sprache ersetzt weder übersetzte Oberfläche noch passende lokale Befehlsgrammatik.
- Spracheinstellungen direkt im oberen Bedienbereich.

## Weiterführende Dokumentation

Die vorhandenen Detailanleitungen sind derzeit deutsch; beide READMEs beschreiben
Installation und Alltagsbedienung vollständig in ihrer jeweiligen Sprache.

- [KI-Einrichtung, Modellserver und Budget](docs/HYBRID-AI-SETUP.md)
- [Desktop Vision, Monitore und markierter Text](docs/DESKTOP-ERKENNUNG.md)
- [Maussteuerung, Zustimmung und Windows-Prüfliste](docs/MAUSSTEUERUNG.md)
- [Animationsarchitektur](ANIMATION-ARCHITEKTUR.md)
- [Ältere Bedienungs- und Technikhinweise](LIESMICH.md) — historische Angaben können ältere Versionen beschreiben.
- [Änderungen in Version 0.7.4](AENDERUNGEN-0.7.4.md)
- [Repository](https://github.com/rob0511-777/Jeffrey-and-Friends)
