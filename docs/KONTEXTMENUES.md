# Einzelklicks und sprachbedienbare native Windows-Kontextmenüs

Experimenteller Folgebranch `feature/desktop-clicks-menus-characters`, Basis PR #7.
Die Implementierung wurde unter Linux mit nachgebildeten OS-/UIA-Grenzen geprüft.
**Keine eigene Windows-11-Abnahme dieser Umgebung.** Der Nutzer meldet inzwischen
funktionsfähige Einzelklicks; daraus folgt keine allgemeine Menü-/UIA-Abnahme.
Es gibt keine universelle Menüunterstützung. Rasternavigation bleibt erhalten;
die Startbestätigung ist gezielt korrigiert.

## Bedienung

1. Bediensprache Deutsch wählen, Mauszeiger auf ein unkritisches Testziel bewegen.
2. „Rechtsklick“ sagen: ein einzelner nativer Klick an der tatsächlichen Position.
3. Das **native Kontextmenü der Zielanwendung** öffnet sich. Die lokale Jeffrey-
   Anzeige listet daneben dessen tatsächlich auslesbare UIA-Einträge, keine eigenen
   Jeffrey-Aktionen. Sie nimmt keinen Fokus an und fängt keine Mausklicks ab.
4. „Wähle Kopieren“ oder eine **angezeigte** „Wähle Nummer zwei“ sagen. Bei mehreren
   gleichnamigen Einträgen ist die angezeigte Nummer nötig. „Öffne das Untermenü
   Senden an“ verwendet das passende native ExpandCollapse-Pattern.
5. Bei „Wähle Löschen“ verlangt die Anzeige „Bestätige Löschen“ bzw. die konkrete
   „Bestätige Nummer …“. Ein allgemeines „Ja“ reicht nicht. „Abbrechen“ verwirft die
   Bestätigung und erhält die bisherige Stoppwirkung für Bewegungen.
6. „Menü schließen“ schließt das zugeordnete native Menü. Ein Fokus-/Menüwechsel
   verwirft die bisherige Liste; anschließend ausdrücklich neu öffnen.

Einzelne Linksklicks funktionieren auch ohne Raster und ohne Menü. Beide Klickarten
werden während Bewegung oder gedrückter linker/rechter Maustaste abgewiesen.
Ein Klick wartet nicht auf eine zufällige Zwischenposition. Kein Doppelklick,
Drag-and-drop oder neues Tastaturkommando. Begrenztes Scrollen ist separat
[ergänzt](MAUSSTEUERUNG.md#zuverlässiger-rasterstart-und-begrenztes-scrollen);
bei geöffnetem Menü wird es abgewiesen, ein Rechtsklick beendet einen Scrolllauf zuerst.

Ohne Live steht der vorhandene einmalige lokale Zuhörweg zur Verfügung. Bei aktivem
Raster oder zugeordnetem Menü verwendet die App denselben lokalen Windows-Hörer
mit ergänzter Grammatik. Kein zweites Mikrofon und kein automatischer Cloud-Fallback.
Voraussetzung: ein `System.Speech`-Erkenner für `de-DE`, zugängliches Mikrofon und
Windows PowerShell 5.1. Gemini hat weiterhin keinen zuverlässig gemeinsamen
Live-Nutzertranskriptweg; neue Sprachbefehle dort lokal oder per Textfeld verwenden,
nicht als nachgewiesene Gemini-Live-Funktion verstehen.

## Welche Menüs erfasst werden

Das lokale UIA-Backend untersucht nach einem ausdrücklichen Rechtsklick Menüs im
ermittelten Zielprozess. Es benötigt einen sichtbaren `ControlType.Menu`-Wurzelknoten
mit passenden Eigentümer-/Fenstergrenzen. Klassische Win32-Popupfenster (`#32768`)
und passende moderne Menüwurzeln werden berücksichtigt. Innerhalb dieses Menüs
werden `MenuItem` sowie `Button` (z. B. die Windows-11-Befehlsleiste) gelesen,
sofern sie die nötigen `Invoke`-/`ExpandCollapse`-Patterns anbieten. Beliebige
Anwendungs-Schaltflächen außerhalb eines gebundenen Menüs werden nicht ausgewählt.

Windows-11-Explorer, „Weitere Optionen anzeigen“, klassische Menüs und Untermenüs
sind konkrete Abnahmeziele; ihr Erfolg ist hier **nicht** praktisch nachgewiesen.
Nach `Invoke` kann ein tatsächlich entstandenes Ersatzmenü neu gebunden werden.
Nach `Expand` wird das tatsächlich geöffnete Untermenü neu gelesen. Der alte
Menübaum und alte Bestätigungen gelten danach nicht weiter.

Grenzen: anderer Hostprozess als das Ziel, fehlende Menüwurzel, unzugängliche UIA,
benutzerdefinierte/gezeichnete Menüs, fehlende Patterns, erhöhte Anwendungen,
UAC-/gesperrter Desktop und geschützte Fenster können abgewiesen werden. Es gibt
keine automatische Rechteerhöhung, geratenen Koordinaten oder Tastatur als Ersatz.
Bei einem UIA-Fehler wird keine alternative Aktion ausgeführt. Technische Fehler
und nicht unterstützte Menüs haben feste unterschiedliche Meldungen; rohe
Ausnahmen, Titel oder Eintragsnamen werden nicht als Diagnose ausgegeben.

Die Suche ist begrenzt (bis 512 Knoten, Tiefe 8; höchstens 100 erfasste Einträge).
Die Anzeige zeigt abhängig vom freien Platz höchstens 30 nummerierte Einträge.
Andere erfasste Einträge sind nur über ihren vollständigen eindeutigen Namen
wählbar. Ohne freien Platz außerhalb des nativen Menüs bleibt die Anzeige unsichtbar;
Nummernwahl wird dann gesperrt. Lange Beschriftungen können visuell gekürzt werden.
Bei nicht sprechbaren Sonderzeichen die angezeigte Nummer verwenden.

## Zuordnung, Bestätigung und Abbruch

Jede Aktion prüft Menükennung, Prozess, Eigentümerfenster, Vordergrundzuordnung,
UIA-Runtime-IDs, Grenzen, Namen sowie Sichtbarkeit, Aktivierung und Pattern erneut.
Native Vordergrund-/Popup-Ereignisse invalidieren die Zuordnung, selbst wenn später
wieder dasselbe Fenster aktiv ist. Die Ereignisprüfung ist bewusst konservativ:
auch ein fremdes Popup kann ein erneutes Öffnen nötig machen. Ein lokaler Poll
prüft nur das bereits aktive Menü, ungefähr alle 700 ms; kein allgemeines Mitlesen.

Bestätigungen sind an genau einen aktuellen Eintrag und diesen Menüstand gebunden.
Die Erkennung destruktiver Beschriftungen umfasst u. a. Löschen, Entfernen,
Deinstallieren, Formatieren und entsprechende Schlüsselwörter mehrerer Sprachen.
Sie ist keine vollständige semantische Risikobewertung beliebiger Anwendungen.
Bei Namensänderung, Fokusverlust, anderem Menü, Fehler, Stopp, Schlafmodus,
Sitzungsende, Anbieter-/Charakterwechsel oder „Abbrechen“ verfällt die Freigabe.
Native Menüschließung nutzt eine begrenzte `WM_CANCELMODE`-Nachricht und prüft,
ob das Menü tatsächlich verschwunden ist; keine simulierte Escape-Taste.

Vorbereitetes Klicken wird bei Stopp/neuer Bewegung verworfen. Down/Up werden als
zusammenhängender `SendInput`-Block gesendet; danach folgen geprüfte Freigaben beider
Tasten (höchstens drei Versuche). Bei nicht bestätigter Freigabe sperrt die App
weitere Eingaben und verlangt Wiederherstellung/Stopp, gegebenenfalls Neustart.
Wenn Windows eine Eingabe ablehnt, kann die App die OS-Ausführung nicht garantieren.
Eine bereits von Windows angenommene Aktion (`SendInput`/`Invoke`) lässt sich durch
späteres Abbrechen nicht rückgängig machen. Unklarer Ausgang wird nicht automatisch
wiederholt. Doppelte finale Live-Transkripte/IPC-Kennungen führen nicht zum Zweitklick;
bewusst neu gesprochene Einzelaufträge bleiben möglich.

## Datenschutz und Kosten

Menütexte bleiben nur vorübergehend im lokalen UIA-Helfer, Hauptprozess und der
isolierten, nur lesenden Zusatzanzeige. Keine Datei, kein Chat-/Gedächtniseintrag,
keine Protokollierung und keine zusätzliche Übertragung an KI oder TTS. Nach
Invalidierung werden Liste, Anzeige und wartende Bestätigung geleert. Die App
liest oder schreibt die Zwischenablage nicht. Ein ausdrücklich ausgewähltes
**natives** Kopieren/Einfügen führt lediglich seine normale Anwendungsfunktion aus.

Bei OpenAI Live sind gesprochene Auswahlbefehle weiterhin Bestandteil der bereits
aktiven Cloud-Audioübertragung. Es wird weder eine weitere Modellantwort je Klick
angefordert noch ein separater kostenpflichtiger Aufruf für die UIA-Liste gestartet.
Laufende Audio-/Transkriptionskosten bleiben möglich. Ein separat ausdrücklich
angeforderter, freigegebener Screenshot kann sichtbare Menüs wie andere
Bildschirminhalte enthalten; die vorhandenen Bildschirm-/Textzustimmungen bleiben
unverändert. Native Menüs benötigen keine neue Cloud-Freigabe für rein lokale UIA.

[Befehle](MAUSBEFEHLE.de.md) · [Maussteuerung](MAUSSTEUERUNG.md) ·
[Testnachweis und Windows-Prüfliste](ai/testing/2026-11-02-desktop-actions.md)
