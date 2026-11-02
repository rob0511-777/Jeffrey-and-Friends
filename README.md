# Jeffrey and Friends

[English](#english) | [Deutsch](#deutsch)

<a id="english"></a>

## English

![Jeffrey and Friends — the team](assets/jeffrey-and-friends-v072.png)

Jeffrey and Friends is a voice-controlled Windows 11 desktop assistant built with Electron, HTML, CSS and JavaScript.

**Current version: 0.7.4**

This page describes the code on `main`. Additional desktop, selected-text and mouse-control features are developed in separate pull requests; they are not included merely by downloading `main`. See [PR #4](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/4), [PR #5](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/5) and [PR #7](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/7) for their respective development versions. This README change does not merge those features.

The app supports OpenAI Realtime, Gemini Live and local OpenAI-compatible text models. Its five desktop characters are independent of the selected provider:

- **Jeffrey** — friendly futuristic robot
- **Kelly** — charming, capable virtual assistant
- **Krak** — mischievous green fantasy goblin
- **Bronco** — grumpy, rusty scrapyard robot
- **James** — polite English butler robot with his own voice and local wakeword

Kelly and Krak use a local, audio-synchronized 2D viseme rig. Mouth movement is derived from the WebRTC audio actually playing and combined with German transcript visemes. This replaced the former fixed mouth-shape sequence. Version 0.6.4 also removed artificial eye overlays that sometimes appeared as black bars.

The documentation language does not change the application's interface or recognized commands. The examples below retain the German commands used by this baseline.

### Features

- OpenAI Realtime voice conversations over WebRTC
- Gemini Live voice conversations with clearly identified different voices
- Local text AI through Ollama, LM Studio or llama.cpp
- Cost overview, configurable prices and a local monthly budget
- Automatic mode without paid cloud fallback unless explicitly permitted
- Individual character voices and personalities
- Local wakewords and voice commands
- One-shot desktop viewing, reading and explanation on explicit request
- Active, quiet and sleep modes
- Transparent desktop characters with hologram effects
- Adjustable character size and position
- Web, Chrome and Idealo searches and a limited set of checked Windows actions
- PC status, optional spontaneous comments and local memory
- Protected API-key storage using Electron `safeStorage`

### AI providers

| Mode | Suitable for | Important limitation |
| --- | --- | --- |
| **OpenAI — quality** | Realtime conversations with the established voices | Reference mode; API use may incur charges |
| **Gemini — economy** | Gemini Live conversations | Voices differ from OpenAI; free-tier availability and limits depend on the Google account |
| **Local — offline** | Text tasks through Ollama, LM Studio or llama.cpp | No cloud text inference, but no complete Realtime voice solution |
| **Automatic — optimize costs** | Cost-conscious selection between sessions | No paid audio fallback without explicit permission |

The provider remains fixed during an active voice session, avoiding parallel provider requests and audible switching in the middle of a conversation.

### See and understand the desktop

All five characters respond to requests such as “Schau dir meinen Bildschirm an” (look at my screen), “Lies mir diese Fehlermeldung vor” (read this error message) or “Was ist das für ein Fenster?” (what window is this?).

After approval for cloud transfer, each explicit screen request captures the primary Windows display once and sends it to OpenAI for analysis. The explanation uses the existing speech output. Images remain briefly in app memory; this is not continuous monitoring or desktop automation. The current Gemini Live and local interfaces do not provide image analysis.

Setup, privacy, limitations and manual Windows checks are documented in [Desktop recognition](docs/DESKTOP-ERKENNUNG.md) (German).

### Requirements

- Windows 11
- Node.js LTS and internet access for installation and cloud modes
- A microphone for live voice conversations
- Your own OpenAI or Gemini API key for the corresponding cloud mode
- Optionally, a local OpenAI-compatible server for offline text mode

### Start on Windows 11

1. Clone the repository or download and extract its ZIP archive.
2. Install [Node.js LTS](https://nodejs.org/).
3. Run `START-Windows.cmd`.
4. Select a character in the control window and click **Live sprechen**.

On first start, the script installs Electron automatically through `npm install`.

#### Initial setup

1. Open settings and choose a mode under **KI-Anbieter & Kosten**.
2. Save your OpenAI or Gemini key in the protected key field.
3. For local mode, select a server address and model.
4. Check prices and, optionally, the monthly budget.
5. Select a character and use **Live sprechen** or text mode.

Both newer Gemini authorization keys beginning with `AQ.` and classic `AIza` keys are supported. Never put API keys in repository files, screenshots or logs.

For a free visual simulation, open `VORSCHAU.html`. It is explicitly a simulation without real audio.

### Costs, budget and privacy

- The app distinguishes reported usage from calculated estimates.
- It displays session, daily and monthly costs, with separately configurable web-search costs.
- Warnings appear at 50%, 80% and 100% of the local monthly budget. New paid sessions can optionally be blocked at 100%.
- The software budget is not a guaranteed provider-side spending cap. Provider usage values may arrive late or be incomplete.
- Keys are protected in the Electron main process through `safeStorage` and are not returned to the renderer.
- Sleep, hiding the character, character changes and quitting close active cloud microphone connections.
- Cloud audio and analysis may incur API charges. A ChatGPT subscription does not include OpenAI API credit.

### Known limitations

- Gemini voices are not identical to the existing OpenAI voices.
- The tested Gemini compatibility mode uses a minimal session setup; optional Gemini tool declarations and transcripts are not enabled.
- Local mode provides text inference, not a complete Realtime audio pipeline.
- Gemini free-tier use is not guaranteed and depends on current Google limits, region and account settings.

### Development and tests

```powershell
npm test
```

The hybrid-AI development report records 139 automated tests. Gemini Live was manually tested on the target Windows PC with a personal key. These are historical results, not a new test run for this documentation update.

Automated provider tests use simulated responses and incur no API fees. Paid OpenAI Live tests require explicit authorization.

### Technical notes

Current lip synchronization is an audio-synchronized, transcript-assisted viseme estimate, not studio forced alignment. Real eye animation is disabled until separate eye and eyelid assets are available. See [LIESMICH.md](LIESMICH.md) and [ANIMATION-ARCHITEKTUR.md](ANIMATION-ARCHITEKTUR.md) (German).

API keys, user profiles and local memory data are not stored in the repository.

### Bronco — version 0.6.6

The fourth character has his own voice (`verse`), dry humor, local wakeword and directly controlled mechanical lower jaw. The existing Kelly/Krak viseme rig remains unchanged. See [version 0.6.5 notes](AENDERUNGEN-0.6.5.md) and [version 0.6.6 notes](AENDERUNGEN-0.6.6.md).

### New in version 0.7.1

Bronco moves his hands only during actually audible Realtime speech; otherwise they remain still. See [version 0.7.1 notes](AENDERUNGEN-0.7.1.md).

### James — version 0.7.2

James adds a British butler personality and the Ash voice. Clicking the fifth character tile switches the character and voice. His optional wakeword is “James” / “Hallo James”; “James, verschwinde” hides him. The other approved characters remain available.

### New in version 0.7.4

Jeffrey and Friends adds OpenAI quality mode, Gemini Live economy mode, local OpenAI-compatible text models and a cost-conscious automatic mode. It also provides protected key storage, cost estimates, budget warnings and an optional budget stop. Existing characters, voices, local audio effects, animations and Windows tools are retained.

See [version 0.7.4 changes and known limitations](AENDERUNGEN-0.7.4.md).

### Hybrid-AI setup

The four modes, API keys, local servers, prices and budget limits are explained in [the hybrid-AI setup guide](docs/HYBRID-AI-SETUP.md) (German). OpenAI remains the quality and reference mode.

---

<a id="deutsch"></a>

## Deutsch

[English](#english) | [Deutsch](#deutsch)

![Jeffrey and Friends - das Team](assets/jeffrey-and-friends-v072.png)

Jeffrey and Friends ist ein sprachgesteuerter Windows-11-Desktop-Assistent auf Basis von Electron, HTML, CSS und JavaScript.

**Aktuelle Version: 0.7.4**

Diese Seite beschreibt den Code auf `main`. Weitere Desktop-, Textauswahl- und Mausfunktionen entstehen in separaten Entwicklungsständen: [PR #4](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/4), [PR #5](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/5) und [PR #7](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/7). Der Download von `main` enthält diese Ergänzungen nicht automatisch. Diese README-Änderung übernimmt keine Programmänderungen.

Die Anwendung unterstützt OpenAI Realtime, Gemini Live und lokale OpenAI-kompatible Textmodelle. Die fünf Desktop-Charaktere bleiben davon unabhängig:

- **Jeffrey** – freundlicher futuristischer Roboter
- **Kelly** – charmante, kompetente virtuelle Assistentin
- **Krak** – schelmischer grüner Fantasy-Kobold
- **Bronco** – mürrischer rostiger Schrottplatz-Roboter
- **James** – höflicher englischer Butler-Roboter (eigene Stimme, lokales Weckwort)

Kelly und Krak besitzen ein lokales, audio-synchronisiertes 2D-Viseme-Rig. Die Mundbewegung wird am tatsächlich abgespielten WebRTC-Audio analysiert und mit deutschen Transkript-Visemen kombiniert. Die bisherige feste Mundbildfolge wurde entfernt. In Version 0.6.4 wurden zusätzlich künstliche Augen-Overlays entfernt, die gelegentlich als schwarze Balken sichtbar wurden.

## Funktionen

- OpenAI-Realtime-Sprachgespräche über WebRTC
- Gemini-Live-Sprachgespräche mit deutlich gekennzeichneten abweichenden Stimmen
- lokale Text-KI über Ollama, LM Studio oder llama.cpp
- Kostenübersicht, konfigurierbare Preise und lokales Monatsbudget
- Automatikmodus ohne kostenpflichtigen Cloud-Fallback ohne ausdrückliche Freigabe
- eigene Stimme und Persönlichkeit pro Charakter
- lokale Weckwörter und Sprachbefehle
- Desktop auf ausdrücklichen Befehl einmalig betrachten, vorlesen und erklären
- Aktiv-, Ruhe- und Schlafmodus
- transparente Desktop-Darstellung mit Hologramm-Effekten
- frei verschiebbare Position und einstellbare Größe
- Websuche, Chrome-/Idealo-Suche und geprüfte Windows-Aktionen
- PC-Status, optionale spontane Kommentare und lokales Gedächtnis
- geschützte API-Schlüsselablage mit Electron `safeStorage`

## KI-Anbieter

| Modus | Geeignet für | Wichtiger Hinweis |
| --- | --- | --- |
| **OpenAI – Qualität** | Realtime-Sprachgespräche mit den bewährten Stimmen | Referenzmodus; API-Nutzung kann kostenpflichtig sein |
| **Gemini – Sparmodus** | Gemini-Live-Sprachgespräche | Stimmen unterscheiden sich von OpenAI; Free Tier und Limits richten sich nach dem Google-Konto |
| **Lokal – Offline** | Textaufgaben über Ollama, LM Studio oder llama.cpp | Keine Cloud-Textinferenz, aber keine vollständige Realtime-Sprachlösung |
| **Automatisch – Kosten optimieren** | Kostenbewusste Auswahl zwischen Sitzungen | Kein kostenpflichtiger Audio-Fallback ohne ausdrückliche Freigabe |

Der Anbieter bleibt während einer aktiven Sprachsitzung fest. Dadurch entstehen keine parallelen Mehrfachanfragen und kein hörbarer Anbieterwechsel mitten im Gespräch.

### Desktop sehen und verstehen

Alle fünf Charaktere reagieren beispielsweise auf „Schau dir meinen Bildschirm an“,
„Lies mir diese Fehlermeldung vor“ oder „Was ist das für ein Fenster?“. Nach Zustimmung
zur Cloud-Übertragung wird auf jeden ausdrücklichen Bildschirmbefehl genau eine
Aufnahme des primären Windows-Bildschirms mit OpenAI ausgewertet und über die
vorhandene Sprachausgabe erklärt. In der App bleiben die Bilder nur kurz im
Arbeitsspeicher; es gibt keine dauerhafte Überwachung oder Computeraktionen.
Die derzeitigen Gemini-Live- und lokalen Schnittstellen bieten keine Bildanalyse.
Einrichtung, Datenschutz, Grenzen und manuelle Windows-Prüfschritte stehen in
[Desktop sehen und verstehen](docs/DESKTOP-ERKENNUNG.md).

### Voraussetzungen

- Windows 11
- Node.js LTS und Internetzugang für Installation und Cloud-Modi
- Mikrofon für Live-Sprachgespräche
- Eigener OpenAI- oder Gemini-API-Schlüssel für den jeweiligen Cloud-Modus
- Optional ein lokaler OpenAI-kompatibler Server für den Offline-Textmodus

## Start unter Windows 11

1. Repository klonen oder als ZIP herunterladen.
2. [Node.js LTS](https://nodejs.org/) installieren.
3. `START-Windows.cmd` starten.
4. Im Steuerfenster den Charakter auswählen und **Live sprechen** anklicken.

Beim ersten Start installiert das Skript Electron automatisch über `npm install`.

### Erste Einrichtung

1. Einstellungen öffnen und unter **KI-Anbieter & Kosten** einen Modus wählen.
2. Für OpenAI oder Gemini den eigenen Schlüssel geschützt speichern.
3. Für den lokalen Modus Serveradresse und Modell auswählen.
4. Preise und optionales Monatsbudget kontrollieren.
5. Charakter auswählen und **Live sprechen** oder den Textmodus verwenden.

Neue Gemini-Authorization-Keys mit `AQ.` sowie klassische `AIza`-Keys werden unterstützt. API-Schlüssel gehören niemals in Repository-Dateien, Screenshots oder Logs.
Für die kostenfreie visuelle Simulation kann `VORSCHAU.html` geöffnet werden. Sie ist ausdrücklich als Simulation ohne echtes Audio gekennzeichnet.

## Kosten, Budget und Datenschutz

- Die App unterscheidet gemeldete Nutzung von rechnerischen Schätzungen.
- Sitzungs-, Tages- und Monatskosten sowie gesondert bestimmbare Websuchkosten werden angezeigt.
- Warnungen erscheinen bei 50, 80 und 100 Prozent des lokalen Monatsbudgets; neue kostenpflichtige Sitzungen können bei 100 Prozent blockiert werden.
- Das Software-Budget ist keine garantierte serverseitige Ausgabensperre. Anbieterwerte können verzögert oder unvollständig eintreffen.
- Schlüssel werden im Electron-Hauptprozess über `safeStorage` geschützt und nicht an den Renderer zurückgegeben.
- Schlafmodus, Ausblenden, Charakterwechsel und Beenden schließen aktive Cloud-Mikrofonverbindungen.
- Cloud-Audio und Analysen können API-Kosten verursachen. Ein ChatGPT-Abonnement enthält kein OpenAI-API-Guthaben.

## Bekannte Grenzen

- Gemini-Stimmen sind nicht identisch mit den bestehenden OpenAI-Stimmen.
- Der getestete Gemini-Kompatibilitätsmodus verwendet ein minimales Sitzungs-Setup; optionale Gemini-Tooldeklarationen und Transkriptionen sind derzeit nicht aktiviert.
- Der lokale Modus liefert Textinferenz, aber keine vollständige Realtime-Audiokette.
- Eine Gemini-Free-Tier-Nutzung ist nicht garantiert und hängt von aktuellen Google-Limits, Region und Kontoeinstellungen ab.

## Entwicklung und Tests

```powershell
npm test
```

Der historische Hybrid-KI-Testnachweis nennt 139 automatische Tests; dies ist kein neuer Testlauf dieser Dokumentationsänderung. Gemini Live wurde auf dem Ziel-Windows-PC mit einem eigenen Schlüssel erfolgreich manuell getestet. Automatisierte Provider-Tests verwenden simulierte Antworten und verursachen keine API-Gebühren; kostenpflichtige OpenAI-Live-Tests erfolgen nur nach ausdrücklicher Freigabe.

## Technische Hinweise

Die aktuelle Lippen-Synchronisation ist eine audio-synchronisierte, transkriptgestützte Viseme-Schätzung und kein Studio-Forced-Alignment. Echte Augenanimation ist deaktiviert, bis getrennte Augen- und Lid-Assets verfügbar sind. Weitere Details stehen in [LIESMICH.md](LIESMICH.md) und [ANIMATION-ARCHITEKTUR.md](ANIMATION-ARCHITEKTUR.md).

API-Schlüssel, Benutzerprofile und lokale Gedächtnisdaten werden nicht im Repository gespeichert.

## Bronco (v0.6.6)

Vierter Charakter mit eigener Stimme (`verse`), trockenem Humor, lokalem Weckwort und direkt bedienbarem mechanischem Unterkiefer. Das bestehende Kelly/Krak-Viseme-Rig wird nicht geändert. Details in `AENDERUNGEN-0.6.5.md` und `AENDERUNGEN-0.6.6.md`.

## Neu in v0.7.1
Bronco bewegt seine Haende nur bei tatsaechlich hoerbarer Realtime-Sprachausgabe; sonst bleiben sie ruhig. Details in `AENDERUNGEN-0.7.1.md`.


## Neue Figur: James (v0.7.2)

James bietet britische Butler-Persönlichkeit und die Stimme Ash. Stimme und Figur wechseln beim Anklicken der fünften Charakterkachel. Optionales Weckwort: „James“/„Hallo James“; Beenden mit „James, verschwinde“. Die vom Nutzer genehmigten übrigen Figuren bleiben erhalten.

## Neu in v0.7.4

Jeffrey and Friends unterstützt jetzt OpenAI als Qualitätsmodus, Gemini Live als Sparmodus, lokale OpenAI-kompatible Textmodelle sowie einen kostenbewussten Automatikmodus. Dazu kommen eine geschützte Schlüsselablage, Kostenschätzungen, Budgetwarnungen und ein optionaler Budgetstopp. Die bestehenden Charaktere, Stimmen, lokalen Audioeffekte, Animationen und Windows-Werkzeuge bleiben erhalten.

Die vollständigen Änderungen und bekannten Grenzen stehen in [AENDERUNGEN-0.7.4.md](AENDERUNGEN-0.7.4.md).

## Hybrid-KI einrichten

Die vier Modi, API-Schlüssel, lokale Server, Preise und Budgetgrenzen sind in [docs/HYBRID-AI-SETUP.md](docs/HYBRID-AI-SETUP.md) beschrieben. OpenAI bleibt der Qualitäts- und Referenzmodus.
