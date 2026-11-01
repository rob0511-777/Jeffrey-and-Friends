# Hybrid-KI und Kostenkontrolle einrichten

Die einzige vorhandene Auswahl **KI-Modus** befindet sich direkt unter dem
vollständigen Kasten **DIREKT SPRECHEN**. Optionen und Speicherung bleiben
unverändert. API-Schlüssel, Kostenanzeigen und weitere Einstellungen bleiben
unter **KI-ANBIETER & KOSTEN**. Ein Wechsel stoppt aktive OpenAI-/Gemini-Verbindungen
und separat laufendes Vorlesen; es wird kein zweiter Gesprächsweg gestartet.


Stand der Preisannahmen: 24. Oktober 2026. Die in der App hinterlegten Preise sind editierbare Rechenwerte, keine Live-Preisliste und kein Rechnungssaldo.

## Die vier Modi

### OpenAI – Qualität

Dies ist der Standard- und Referenzmodus. Er verwendet den bestehenden OpenAI-Realtime-Pfad. Die bisherigen Stimmen sowie die lokalen Audioeffekte von Jeffrey und Bronco bleiben unverändert. Den OpenAI-Schlüssel im Einstellungsfenster speichern; der Renderer erhält nur den Status „vorhanden/nicht vorhanden“.

### Gemini – Sparmodus

Dieser Modus verwendet die Gemini Live API für Sprachsitzungen. Seit der Google-Umstellung können neue Authorization Keys mit AQ. beginnen; ältere AIza-Standard-Keys werden ebenfalls akzeptiert. Die Gemini-Stimmen unterscheiden sich hörbar von den OpenAI-Originalstimmen; die App weist darauf hin. Charakterpersönlichkeit und die geprüften Windows-Werkzeuge bleiben verfügbar.

1. In Google AI Studio einen API-Schlüssel erstellen. Neue Authorization Keys können mit AQ. beginnen; Details stehen in der [offiziellen Google-Schlüsseldokumentation](https://ai.google.dev/gemini-api/docs/api-key).
2. In Jeffrey and Friends Gemini auswählen, Schlüssel speichern und ein unterstütztes Live-Modell eintragen.
3. Vor dem Einsatz die aktuellen Limits und Bedingungen prüfen.

Es gibt keine Zusage unbegrenzter Gratisnutzung. Free-Tier-Verfügbarkeit, Regionen, Modelle und Limits können sich ändern. Bei unbezahlten Google-Diensten können Daten gemäß den jeweils geltenden Bedingungen zur Produktverbesserung verwendet werden; keine vertraulichen Inhalte übertragen. Für Nutzer im EWR, der Schweiz und dem Vereinigten Königreich gelten bei kostenpflichtigen Diensten zusätzliche regionale Vertragsanforderungen.

Offizielle Quellen:

- [Gemini Live API](https://ai.google.dev/gemini-api/docs/live)
- [Gemini API Preise und Free Tier](https://ai.google.dev/gemini-api/docs/pricing)
- [Gemini API Nutzungsbedingungen](https://ai.google.dev/gemini-api/terms)

### Lokal – Offline

Der lokale Modus spricht eine OpenAI-kompatible Loopback-Schnittstelle an. Er akzeptiert ausschließlich localhost, 127.0.0.1 oder ::1 und sendet keine Anfrage an einen Cloud-Fallback.

Typische Adressen:

- Ollama: http://127.0.0.1:11434/v1
- LM Studio: http://127.0.0.1:1234/v1
- llama.cpp server: http://127.0.0.1:8080/v1

Den lokalen Server zuerst starten, dann „Modelle laden“ wählen und ein Modell auswählen. Dieser Modus stellt Textinferenz bereit. Ein lokales Textmodell ist keine vollständige Realtime-Sprachlösung; Mikrofoneingabe und natürliche Charakterstimmen werden nicht vorgetäuscht. Vorhandene lokale Sprachausgabe kann Text separat vorlesen, erreicht aber nicht die OpenAI-Stimmenqualität.

### Automatisch – Kosten optimieren

Einfache Textaufgaben gehen bevorzugt an das lokale Modell. Lokale Windows-Funktionen bleiben lokal. Der Provider wird während einer laufenden Sprachsitzung nicht gewechselt. Kostenpflichtige OpenAI- oder Gemini-Audiositzungen sind im Automatikmodus erst erlaubt, wenn „kostenpflichtigen Audio-Fallback erlauben“ ausdrücklich aktiviert wurde. Es gibt keinen parallelen Mehrfachaufruf zur Qualitätsauswahl.

## Kosten und Budget

Die Anzeige unterscheidet gemeldete und geschätzte Nutzung. Sie zeigt Sitzung, Tag, Monat, Anbieter und gesondert erfassbare Websuche. Preise können in den Einstellungen geändert werden. Für nicht gemeldete Nutzung verwendet die App nachvollziehbare Schätzungen und zeigt keine Scheinpräzision als Anbieterrechnung an.

Ein Monatsbudget kann Warnungen bei 50, 80 und 100 Prozent auslösen. Optional werden neue kostenpflichtige Sitzungen ab 100 Prozent blockiert. Bereits laufende Sitzungen werden nicht mitten im Gespräch getrennt. Das lokale Budget ist keine serverseitige Ausgabensperre: verzögerte oder unvollständige Nutzungsdaten können zu Abweichungen führen. Zusätzlich sollten beim Anbieter eigene Limits gesetzt werden.

OpenAI-Quellen:

- [OpenAI API Pricing](https://openai.com/api/pricing/)
- [OpenAI Realtime Guide](https://platform.openai.com/docs/guides/realtime)

## Datenschutz und Schlüssel

- Schlüssel werden im Electron-Hauptprozess mit safeStorage verschlüsselt abgelegt.
- Wenn Betriebssystemverschlüsselung nicht verfügbar ist, bleiben neue Schlüssel nur im Arbeitsspeicher.
- Schlüssel werden nicht an den Renderer zurückgegeben, nicht protokolliert und nicht im Kostenjournal gespeichert.
- Das Kostenjournal enthält nur technische Nutzungszähler, Anbieter, Modell, Zeit und Kostenschätzung; keine Prompts oder Transkripte.
- Schlafmodus, Ausblenden, Charakterwechsel und Beenden schließen aktive Cloud-Mikrofonverbindungen.

## Validierungsstand

Alle automatischen Provider-Tests arbeiten mit simulierten Antworten. Es wurden keine echten oder kostenpflichtigen OpenAI-/Gemini-Tests ausgeführt. Vor einer Veröffentlichung sind freiwillige manuelle Audio-Smoke-Tests mit eigenen Schlüsseln empfehlenswert.

## Sprachen, Raster und Datenschutzfreigaben

Direkt unter der einzigen KI-Auswahl stehen **Bediensprache** und
**KI-Gesprächssprache**. Beide werden unabhängig gespeichert. Die Bediensprache
bestimmt Oberfläche, lokale Befehle und den angeforderten Windows-Erkenner;
die Gesprächssprache ergänzt die Modellanweisung, ohne Charakterstimme oder Filter
zu wechseln. „Automatisch“ folgt der Sprache des Nutzers. Ein Wechsel beendet
laufendes Live und Vorlesen, damit die neue Konfiguration beim Neustart gilt;
Profile, Notizen, Schlüssel und Zustimmungen bleiben erhalten.
[Sprachen und Erkennungsvoraussetzungen](MEHRSPRACHIGKEIT.md).

OpenAI Live verwendet denselben Mikrofon- und Transkriptpfad für Gespräch und
Mausbefehle. Automatische VAD-Modellantworten sind abgeschaltet; nach Prüfung des
Transkripts fordert die App nur für normale Gesprächsbeiträge eine Antwort an.
Reine Mausbefehle werden lokal ausgeführt. Dadurch entfällt eine unnötige
Modellantwort, nicht die Kosten der bereits laufenden Audioübertragung.
Keine zweite oder allein fürs Raster kostenpflichtige Transkriptionsverbindung.

Nach dem unveränderten 45-Sekunden-Idle-Disconnect kann ein aktives Raster lokal
weiter bedient werden. Bei OpenAI und aktiviertem Wakeword kann der lokale
Rasterhörer das Gespräch wieder aufrufen. „Raster aus“ beendet nur die
Koordinatensteuerung. Mikrofonübergaben warten auf bestätigtes Prozessende;
bei Fehler bleiben Text und Schaltflächen verfügbar.

Gemini bleibt beim bestehenden minimalen Live-Setup. Ohne verlässlich verfügbaren
Nutzertranskriptkanal wird keine gemeinsame Maussteuerung behauptet: Rasterstart
beendet Gemini Live und verwendet den exklusiven lokalen Windows-Hörer. Für ein
neues Gemini-Gespräch das Raster beenden. Die lokale KI bleibt ein Textmodellpfad,
keine vollständige lokale Realtime-Sprachlösung.

Bildschirm- und Textfreigabe bleiben getrennt für OpenAI dauerhaft im lokalen
App-Profil speicherbar und widerrufbar. „Einmal“ gilt für genau eine Anfrage.
Ein anderer Empfänger erbt diese Freigaben nicht. Die Dialoge sind in sechs
Sprachen vorhanden; Windows-Systemmeldungen werden nicht von der App übersetzt.
[Bedienung und Windows-Prüfliste](MAUSSTEUERUNG.md).

Diese neuen Sprach-/Mikrofonpfade sind **noch nicht unter Windows getestet**.
Automatisierte Tests simulieren Anbieter und Betriebssystemgrenzen; es erfolgten
keine kostenpflichtigen Live-API-Tests.

## Reaktionszeiten und Befehlsübergabe

Bestätigte OpenAI-Mausbefehle besitzen nun getrennte einmalige Kennungen. Ein
weiterer Befehl oder ein gewöhnlicher Sprachbeginn überschreibt ihre Freigabe
nicht. Während der Rasterinitialisierung werden Folgeaufträge geordnet gepuffert;
Stopp verwirft wartende Aufträge. Modellantworten bleiben getrennt geordnet.
Die Audio-/Transkriptionsqualität des echten Windows-Systems ist damit noch nicht
garantiert: [optionale Zeitdiagnose](MAUS-DIAGNOSE.md) und
[aktueller Testnachweis](ai/testing/2026-11-01-mouse-response-quarters.md).
