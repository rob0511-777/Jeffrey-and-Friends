# Bediensprache, Gesprächssprache und Sprachbefehle

Experimenteller Entwicklungsstand `feature/mouse-grid-2-i18n`, Basis PR #5.
Die sechs Kataloge und Befehlsparser sind implementiert und automatisiert geprüft.
**Noch nicht unter Windows getestet:** native Spracherkennung, Schriftdarstellung,
Screenreader, Audio und Mikrofonübergänge. Keine Zusage vollständiger Sprachsteuerung
allein aufgrund einer auswählbaren Sprache.

## Einstellungen

Direkt unter der bestehenden einzigen **KI-Modus**-Auswahl stehen:

- **Bediensprache:** Oberfläche, Menüs, Datenschutzdialoge, Statusmeldungen und
  lokale Befehle. Deutsch ist die Vorgabe für bestehende Profile.
- **KI-Gesprächssprache:** Automatisch oder eine der sechs Sprachen. Automatisch
  bittet das Modell, der aktuellen Sprache des Nutzers zu folgen. Eine feste Wahl
  ergänzt eine Antwortsprachen-Anweisung. Die tatsächliche Modellantwort ist
  anbieterabhängig; Stimme, Klangfilter und Persönlichkeit werden nicht ersetzt.

Beide Werte werden unabhängig in `settings.json` im bestehenden lokalen App-Profil
als `uiLocale` und `conversationLanguage` gespeichert. Sprachwechsel beendet
laufendes Live und Vorlesen und stoppt die Mausbewegung. Das Raster bleibt aktiv;
sein lokaler Erkenner wird mit der neuen Bediensprache neu gestartet. Live kann
anschließend neu gestartet werden. Charakterprofile, Notizen, API-Schlüssel und
vorhandene Datenschutzfreigaben werden dadurch nicht gelöscht.

| Sprache | Locale | Auswahlbeschriftung |
| --- | --- | --- |
| Deutsch | de-DE | Deutsch |
| Englisch | en-GB | English |
| Mandarin, vereinfacht | zh-CN | 简体中文 |
| Japanisch | ja-JP | 日本語 |
| Spanisch | es-ES | Español |
| Portugiesisch, Brasilien | pt-BR | Português (Brasil) |

Die Sprachbezeichnungen bleiben zur Wiedererkennbarkeit in ihrer eigenen Sprache.
Die Oberfläche verwendet Unicode und verfügbare Windows-/CJK-Ersatzschriften.
Beschriftete native Dropdowns, Fokusreihenfolge, Status-/Alarmrollen und die große
Stopp-Schaltfläche bleiben erhalten. Automatische UI-Übersetzung verändert keine
Chatbeiträge, markierten Originaltexte, Notizen oder Charakteräußerungen. Lokale
vorgefertigte Charakterkommentare und der einfache Offline-Antwortfallback können
weiterhin deutsch sein; Modellantworten folgen der neuen Präferenz bestmöglich.

## Tatsächliche Erkennungsvoraussetzungen

| Eingabeweg | Verhalten und Voraussetzung |
| --- | --- |
| Textfeld und Raster-/Stopp-Schaltflächen | Kein Mikrofon und kein Windows-Erkenner nötig; native Maussteuerung benötigt Windows. |
| Lokales Wakeword, einmaliges Zuhören, lokaler Rasterhörer | Windows `System.Speech` muss unter `InstalledRecognizers()` genau die Bediensprache anbieten. Keine stille Ersatzsprache. Mikrofonzugriff muss verfügbar sein. |
| OpenAI Live | Bestehende Cloud-Audioverbindung und Transkription. Mausbefehle werden anhand des Transkripts lokal geprüft; Erkennungsqualität für die jeweilige Sprache muss praktisch geprüft werden. |
| Gemini Live | Bestehender minimaler Audioaufbau ohne verlässlich konfigurierten gemeinsamen Nutzertranskriptkanal. Rasterstart beendet Live und nutzt den lokalen Windows-Fallback. |
| Lokale KI | Bestehende lokale Textinferenz; kein neuer vollständiger lokaler Audioanbieter. |

Windows-Diktat, Win+H und moderne Windows-Sprachpakete sind nicht gleichbedeutend
mit einem installierten älteren `System.Speech`-Erkenner. Die App prüft bei jedem
Start eines lokalen Hörers die tatsächlich aufgelisteten Engines. Falls die
Sprache fehlt oder die Engine nicht verfügbar ist, zeigt sie die Locale und den
Hinweis auf Textfeld/Schaltflächen. Es startet keine Cloud-Ersatzerkennung.
Win+H kann der Nutzer selbst verwenden; dessen Verfügbarkeit und Datenschutz
richten sich nach Windows, nicht nach dem App-Erkenner.

Ohne private Texte lässt sich die lokale Engine-Liste in **Windows PowerShell**
prüfen:

```powershell
Add-Type -AssemblyName System.Speech
[System.Speech.Recognition.SpeechRecognitionEngine]::InstalledRecognizers() |
    Select-Object @{Name='Locale';Expression={$_.Culture.Name}}
```

Die Ausgabe enthält nur Locales. Fehlt die gewünschte Locale, passende
Desktop-Spracherkennung installieren, App neu starten und erneut prüfen. Ist für
das System keine passende Engine verfügbar, Textfeld und Schaltflächen verwenden.
Nach nicht bestätigter Mikrofonfreigabe verweigert die App einen zweiten Zugriff;
auch dann bleiben Text und Stopp bedienbar. Gegebenenfalls App neu starten.

## Befehlsbeispiele

Beispiele gelten für die jeweilige **Bediensprache**, unabhängig von der
KI-Gesprächssprache. Die Grammatik ist bewusst begrenzt; keine freie Übersetzung
beliebiger Befehle. Namen Jeffrey, Kelly, Krak, Bronco und James bleiben unverändert.

| Locale | Anzeigen / Beenden | Unterteilen / Zurück / Reset | Feinsteuerung / Stopp | Expliziter Monitor |
| --- | --- | --- | --- | --- |
| de-DE | Raster anzeigen / Raster aus | Feld unterteilen / Zurück / Raster neu starten | links oben / Stopp | Raster auf Monitor zwei |
| en-GB | show grid / grid off | subdivide cell / back / reset grid | top left / stop | show grid on monitor two |
| zh-CN | 显示网格 / 关闭网格 | 细分单元格 / 返回 / 重置网格 | 左上 / 停止 | 显示网格在显示器二 |
| ja-JP | グリッドを表示 / グリッドを終了 | セルを分割 / 戻る / グリッドをリセット | 左上 / 停止 | グリッドを表示 モニター二 |
| es-ES | mostrar cuadrícula / cerrar cuadrícula | subdividir celda / atrás / reiniciar cuadrícula | arriba izquierda / detener | mostrar cuadrícula en monitor dos |
| pt-BR | mostrar grade / encerrar grade | subdividir célula / voltar / reiniciar grade | superior esquerdo / parar | mostrar grade no monitor dois |

A1–D5 gelten in jeder Sprache. Der Parser berücksichtigt zum Beispiel „Berta 3“,
„bee three“, „比三“, „ビー さん“, „be tres“ und „bê três“. Eingabe als Text ist auch
möglich, wenn Windows die Aussprache nicht erkennt. „Stop“ und „Stopp“ sind zusätzlich
in den anderen fünf Rastergrammatiken enthalten. Weitere Varianten stehen zentral
in `mouse-locales.js`; die bisherige deutsche Grammatik bleibt in `mouse-commands.js`.

Erkannte Verneinungen, Zitate und angehängte Desktopaktionen werden abgewiesen.
Eine geschlossene Windows-Grammatik verhindert nicht jede Fehltranskription:
bei unklarer Bewegung sofort Stopp oder die Stopp-Schaltfläche verwenden.
Es werden keine Klicks oder Tastatureingaben ausgeführt.

Ausdrückliche Desktop-/Textbeispiele: „read selected text“, „朗读选中文本“,
„選択したテキストを読む“, „leer texto seleccionado“, „ler texto selecionado“.
Die zusätzlichen fünf Sprachen unterstützen derzeit fest definierte Grundbefehle
für Bildschirm, Vorlesen, Erklären und Zusammenfassen; die umfangreichere deutsche
Grammatik und ihre Kontextregeln bleiben erhalten. Es gibt keine Zusage, dass jede
freie Formulierung in jeder Sprache erkannt wird. Windows-UIA-Voraussetzungen und
Cloud-Zustimmung ändern sich nicht. [Desktop-Erkennung](DESKTOP-ERKENNUNG.md).

## Aufbau für Entwickler

`locales/catalog.js` enthält 450 eindeutige UI-Schlüssel mit sechs Texten pro
Schlüssel und eine Zuordnung bisheriger deutscher UI-Texte. `i18n.js` normalisiert
Locales, ersetzt reine Textplatzhalter und stellt die Antwortsprachen-Anweisung
bereit. Neue Texte erhalten semantische Schlüssel. Die `ui.s…`- und `legacy.m…`-
Schlüssel dienen der bestehenden Oberfläche und sollen bei Ergänzungen stabil bleiben.
Kein HTML aus Übersetzungen ausführen. Platzhalter in allen sechs Sprachen erhalten.

`i18n-runtime.js` übersetzt bestehende DOM-Textknoten und zugängliche Beschriftungen,
ohne Steuerelemente oder deren Eventhandler zu ersetzen. Chat, Notizen und die
Charaktersprechblase sind von der allgemeinen DOM-Übersetzung ausgenommen;
technische Hinweise werden vor der Ausgabe gezielt übersetzt. `main.cjs` übersetzt
native Dialoge und Menüs. Unbekannte fremde Anbieterfehler werden in den anderen
Sprachen verständlich zusammengefasst; feste UIA-/HTTP-Diagnosecodes bleiben erkennbar.
Windows-eigene Dialoge bleiben in der Betriebssystemsprache.

`mouse-locales.js` enthält Parserdaten und die daraus erzeugten festen Grammatiken.
PowerShell bekommt Unicode-Phrasen als UTF-8-JSON bzw. sichere Prozessargumente,
keine dynamischen Shellbefehle. Der Rasterhelfer bleibt ASCII-kompatibler Quelltext
für Windows PowerShell 5.1. Keine zusätzlichen Abhängigkeiten.

[Teststand und Windows-Prüfliste](ai/testing/2026-11-01-feature-mouse-grid-2-i18n.md).

## Spätere Zusammenführung mit README-PR #6

`README.md` und `README.de.md` aus #6 wurden für diesen Auftrag nicht bearbeitet.
Nach fachlicher Abnahme diese Aussagen in beiden Sprachen gemeinsam aktualisieren:

- Versions-/Branchmatrix: Maussteuerung 2.0 und sechs Sprachkataloge als eigenen
  experimentellen Entwicklungsstand aufführen; keine neue Release-Version behaupten.
- Ecklegende durch Unterteilung am echten Ziel mit schwachen Elternrastern ersetzen.
- OpenAI: bestehende Transkripte teilen, reine Mausbefehle ohne Antwortanforderung,
  Rasterende unabhängig vom Gespräch; Audio-/Transkriptionskosten bleiben möglich.
- Gemini: exklusiven lokalen Fallback und fehlende nahtlose Integration offen nennen.
- Die beiden Sprachfelder, Windows-Engine-Voraussetzung, Text-/Schaltflächenfallback,
  Antwortsprachen-Präferenz und noch offene Windows-Abnahme erklären.
- Dauerhafte OpenAI-Zustimmungen unverändert beschreiben; bestehende technische
  Links auf diese Datei und den neuen Testnachweis ergänzen.

PR #6 bleibt eigenständig. Diese Liste ist kein Auftrag, ihn jetzt zu verändern.
