[English](README.md) | [Deutsch](README.de.md)

# Jeffrey and Friends

![The five Jeffrey and Friends characters](assets/jeffrey-and-friends-v072.png)

A voice-controlled Windows 11 desktop assistant with five animated AI characters,
cloud conversations, local text AI and experimental voice-guided mouse positioning.
Built with Electron, HTML, CSS and JavaScript.

**Version metadata: 0.7.4.** This README describes the development snapshot on
`feature/mouse-grid-consent` (PR #5), including Desktop Vision 2.0 from PR #4.
These additions are **not yet merged into `main`**. The image above is existing
team artwork, not a screenshot of the experimental controls.

The current interface and local command recognition are primarily German.
An English README does not add an English interface or translate recognized commands.

## Contents

- [Development status](#development-status)
- [Characters, voices and everyday features](#characters-voices-and-everyday-features)
- [Install on Windows 11](#install-on-windows-11)
- [First steps and voice commands](#first-steps-and-voice-commands)
- [AI providers and costs](#ai-providers-and-costs)
- [Desktop Vision 2.0](#desktop-vision-20)
- [Experimental mouse control](#experimental-mouse-control)
- [Privacy and saved consent](#privacy-and-saved-consent)
- [Troubleshooting](#troubleshooting)
- [Development and validation](#development-and-validation)
- [Planned features](#planned-features)
- [Further documentation](#further-documentation)

## Development status

Repository and PR status checked on **31 October 2026**:

| Stage | Available in that stage | Status and limits |
| --- | --- | --- |
| [`main`](https://github.com/rob0511-777/Jeffrey-and-Friends/tree/main) — stable development baseline | Five characters, voices/filters, wakewords, OpenAI Realtime, Gemini Live, local text AI, costs/budget, limited Windows tools and basic one-shot OpenAI analysis of the **primary** screen | Existing baseline; this does not certify every feature on every Windows installation. Screenshot consent lasts for the app process. |
| [Desktop Vision 2.0 — PR #4](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/4), `feature/desktop-vision-2` | Builds on `main`: monitor targeting, Windows UI Automation text selection, reading/explaining/summarizing, desktop-request reliability fixes and the existing AI selector moved below **DIREKT SPRECHEN** | Open draft PR. Native Windows selection, focus and mixed-DPI behavior still require practical validation. Screen/text cloud approvals are separate and last for the app process. |
| [Mouse control and consent — PR #5](https://github.com/rob0511-777/Jeffrey-and-Friends/pull/5), `feature/mouse-grid-consent` | Builds on PR #4: A1–D5 grid, refinements, smooth positioning, local grid commands and separate one-request or durable cloud consent with revocation | Open draft PR; experimental. Live conversation pauses during coordinate control. Real Windows acceptance testing remains outstanding. |
| [Planned work](#planned-features) | Future interaction and language improvements | Not implemented; no delivery date promised. |

Use the PR #5 branch for the complete feature set described below. Checking out
`main` does not provide the PR #4/#5 additions. A branch name identifies source
code, not a published installer or release.

## Characters, voices and everyday features

Select one character at a time. Changing character ends an active live session;
in PR #5 it also exits coordinate control.

| Character | Personality | Default OpenAI voice |
| --- | --- | --- |
| Jeffrey | Helpful desktop robot with a dry sense of humor | `shimmer` |
| Kelly | Warm, confident virtual assistant | `coral` |
| Krak | Mischievous green fantasy goblin | `cedar` |
| Bronco | Grumpy scrapyard robot with sarcastic humor | `verse` |
| James | Polite British butler robot | `ash` |

Character voice/style settings are saved separately. Jeffrey and Bronco have
configurable local robotic/rough audio filters; they do not make different
providers sound identical. Gemini uses its own audio voices. Local Windows speech
uses an installed Windows voice rather than the OpenAI character voices.
Kelly and Krak have audio-driven mouth animation. Animation is an approximation,
not studio lip synchronization; separate eyelid animation is currently disabled.

Other existing features include a transparent character overlay, gestures, size
and position controls, optional spontaneous comments, an optional local memory,
PC status, web/Chrome/Idealo helpers and a limited list of Windows program launches.
These depend on their switches, installed applications and, for cloud tools,
provider access and possible API charges. They are not unrestricted desktop automation.

## Install on Windows 11

### Requirements

- Windows 11 and its included **Windows PowerShell 5.1** (`powershell.exe`).
- [Node.js LTS](https://nodejs.org/en/download) with npm; Node.js 24 LTS is the
  recommended version for this snapshot. Reopen your terminal after installation.
- Internet access to install Electron and to use cloud providers. A local model
  may also need an initial download and suitable hardware.
- A microphone for voice input; headphones help prevent echo.
- For wakewords, **Einmal zuhören** and grid commands: an installed German
  **Windows desktop speech recognizer** (`System.Speech`, `de-DE`). Check German
  speech components under Windows **Time & language → Language & region**.
- For cloud use: your own OpenAI or Gemini API key and access to the selected model.
  For local AI: a separately installed OpenAI-compatible local model server.
- [Git for Windows](https://gitforwindows.org/) if you use the clone method below.
  Git is not needed for the ZIP method.

Allow microphone access for desktop apps in Windows **Privacy & security →
Microphone** when using voice features. Run the app as a normal user; administrator
rights are not a standard installation requirement.

### Get the current development snapshot

Open PowerShell in the folder where you want to keep the project:

```powershell
git clone --branch feature/mouse-grid-consent https://github.com/rob0511-777/Jeffrey-and-Friends.git
cd Jeffrey-and-Friends
.\START-Windows.cmd
```

Alternatively, open the [repository](https://github.com/rob0511-777/Jeffrey-and-Friends),
select **feature/mouse-grid-consent**, choose **Code → Download ZIP**, extract the
entire archive, and double-click `START-Windows.cmd` in the extracted project folder.
Do not run it from inside the ZIP archive.

The startup script installs Electron through npm if it is missing, then starts the
app. The first run needs internet access. Keep the terminal open to see startup
errors. A local AI model is not included and must be set up separately.

For a manual start from the project folder:

```powershell
npm install
npm start
```

`VORSCHAU.html` offers a browser-based visual simulation. It is not the Windows
app and does not validate real audio, screen access or mouse movement.

## First steps and voice commands

1. Choose Jeffrey, Kelly, Krak, Bronco or James.
2. In this development snapshot, **KI-Modus** is directly below **DIREKT SPRECHEN**.
   Choose a provider. Keys, costs and other settings remain under **KI-ANBIETER & KOSTEN**.
3. Save the provider key, or configure a local server and model. Check the cost settings.
4. Click **Live sprechen** for supported cloud audio. For local text, type a message
   under **TEXT UND WINDOWS-SPRACHE**. **Einmal zuhören** recognizes one utterance
   through Windows; processing the recognized request can still use the chosen cloud provider.
5. Optionally enable the local wakeword listener and use **Codewort kostenlos testen**.
   Say the selected character's name, such as **Jeffrey** or **Hallo James**.
   The wakeword test is local; a normal successful wakeup starts the selected live
   service and can incur charges. Local text mode has no full live-audio session.

The following examples are **German commands**, kept unchanged so you can use them
with the current recognizers. Replace the character name with the active character.

| Command or control | Meaning and requirement |
| --- | --- |
| “Jeffrey” / “Hallo James” | Wake the selected character; background wakewords must be enabled and German speech recognition installed. |
| “Jeffrey, verschwinde” | Hide the character and close live conversation; Gemini's current minimal setup does not enable the transcripts needed for these app-side live commands. Use its UI stop. |
| “Stopp” / the **Stopp** button | Stop app speech/processing through the supported command path; in active coordinate mode, also stop mouse motion without exiting that mode. |
| “Jeffrey, schau auf Monitor zwei” | Analyze the explicitly chosen screen with OpenAI; PR #4 or later. |
| “Jeffrey, lies mir den markierten Text vor” | Read a real UI Automation text selection; PR #4 or later and a supported provider. |
| “Erklär mir den markierten Text” / “Fasse den markierten Text zusammen” | Explain/summarize a supported selection using OpenAI or a configured local text model; PR #4 or later. |
| “Jeffrey, zeig das Koordinatennetz” | Start coordinate control; PR #5, Windows and local German speech components. |

**Aktiv** allows enabled spontaneous comments; **Ruhe** suppresses them while
manual requests and optional wakewords remain available. **Schlaf** stops voice,
wakeword and coordinate activity. Closing the settings window only hides it:
reopen it from the tray icon, or choose **Beenden** in the tray menu to quit.

Live sessions close after **45 seconds of conversation inactivity**, not after
45 seconds of total use. There is also a 15-minute safety limit. Switch providers
between sessions: changing **KI-Modus** stops the current connection and separate
read-aloud output; it does not silently continue with another provider.

## AI providers and costs

| Mode | What works | Requirements and limits |
| --- | --- | --- |
| **OpenAI** | Realtime voice, general text, screen analysis, selected-text explanation/summary and character TTS | API key, model access and internet. API usage may be billed; a ChatGPT subscription is not API credit. Screen/selection transfers require their own consent. |
| **Gemini** | Gemini Live audio conversations | Gemini API key and an available Live model. The current compatibility setup does not enable optional tool declarations or input/output transcripts. General text chat, image/selection analysis and the matching selected-text TTS path are not provided here; no automatic provider switch. |
| **Lokal** | Text chat and selected-text explanation/summary via a local server; existing Windows speech can read selected text | Server/model must be installed and running on this PC. No complete local Realtime audio pipeline and no image analysis through this interface. Windows speech is not the OpenAI character voice. |
| **Automatisch** | Text uses a configured local model, or limited built-in responses without a model; live audio requires explicit paid-fallback permission | Not a general-purpose task router. With paid audio fallback enabled, the available Gemini key is preferred, otherwise OpenAI. The provider stays fixed within a session. No automatic cloud text fallback. |

Create a key in the [OpenAI API dashboard](https://platform.openai.com/api-keys) or
[Google AI Studio](https://aistudio.google.com/app/apikey), then save it in the matching
provider field under **KI-ANBIETER & KOSTEN**. Gemini key validation accepts classic
`AIza` keys and `AQ.` authorization keys; accepted syntax does not guarantee access
to a particular Live model. Keep keys out of chat messages and shared screenshots.

For local setup, enter the server address and model, then use **Lokale Modelle prüfen**:

| Server | Typical address |
| --- | --- |
| [Ollama](https://ollama.com/) | `http://127.0.0.1:11434/v1` |
| [LM Studio](https://lmstudio.ai/) | `http://127.0.0.1:1234/v1` |
| [llama.cpp](https://github.com/ggml-org/llama.cpp) | `http://127.0.0.1:8080/v1` |

Only loopback addresses (`localhost`, `127.0.0.1`, `::1`) are accepted. Download and
serve a model using the chosen server's instructions; the app does not install one.
Local inference avoids cloud inference charges, but still uses your hardware.

Cost displays distinguish provider-reported usage from estimates. Prices are editable
assumptions, not a live price feed or an official invoice. Audio, text/image analysis,
TTS, web searches and optional OpenAI spoken comments can incur separate charges.
Budget warnings occur at 50/80/100%; an optional local block prevents new paid activity
at the configured limit. It is not a guaranteed provider-side spending cap.
Gemini free-tier eligibility, quotas, regions and model availability can change.

Check the current [OpenAI pricing](https://openai.com/api/pricing/),
[Gemini pricing](https://ai.google.dev/gemini-api/docs/pricing) and
[Gemini terms](https://ai.google.dev/gemini-api/terms). Provider privacy and retention
rules apply to transferred data. See the [provider setup guide](docs/HYBRID-AI-SETUP.md)
for additional technical detail (German).

## Desktop Vision 2.0

### Screen recognition and monitors

Screen access happens only on an explicit request: one screenshot of one selected
monitor is sent to OpenAI for explanation or reading visible content. It is not
continuous screen monitoring. Gemini and local interfaces do not support this image path.

From PR #4 onward, automatic selection prefers the active or last active foreign
application's monitor, then the pointer monitor, then the primary monitor. The
assistant's own windows are ignored. Explicit commands include “Schau auf Monitor
zwei”, “Schau auf den linken Bildschirm” and “Schau auf den Bildschirm mit meiner Maus”.
Numbers mean **GDI `DISPLAYn`**, which may differ from Windows Settings display numbers.
Negative coordinates and mixed-DPI geometry are handled in the implementation;
real hardware validation is still required. `main` only has the earlier primary-screen path.

### Marked text: read, explain or summarize

Mark text in the target application, then give a selection command. The app reads
it through **Windows UI Automation**, without copying to the clipboard, simulating
Ctrl+C or substituting a screenshot. Marking text alone does not trigger reading.

Support depends on the application exposing a suitable text-selection provider.
Windows Notepad/Editor and browser selections need practical testing; image/canvas
text and some PDF or custom controls may not expose one. Fields reported as password/protected
are excluded. Missing support and technical UIA failures are reported separately.
A UIA failure occurs before the text cloud-consent dialog and does not authorize transfer.

Reading uses existing OpenAI TTS with the character voice/filters, or installed
Windows speech in local mode. It does not ask a text model to rewrite the selection.
Explanation/summary uses OpenAI or the configured local model. Maximum selection:
**24,000 characters**, reduced to **3,500** for local explanation/summary. Long
read-aloud output is processed in sequential chunks and can be stopped.

See [Desktop Vision and safe Windows diagnosis](docs/DESKTOP-ERKENNUNG.md) (German).
The PR #4 fixes include request cancellation and UIA operation diagnostics;
automated reproductions are not proof of success with every native Windows provider.

## Experimental mouse control

**PR #5 only.** Start with **Raster anzeigen**, the text field, **Einmal zuhören**,
or the start command in an existing OpenAI Live session. In that last case the
start utterance has already passed through cloud transcription. Gemini users should
use the UI, text field or one-time Windows recognition to start the mode.

The overlay is transparent to normal mouse clicks and does not take focus.
Its **4 rows × 5 columns** are labeled **A1–D5** on the selected monitor.
Targets use physical Windows pixels, including negative monitor origins; only the
overlay geometry is converted to Electron display units. Portrait and ultrawide
formats keep the same 4×5 layout. Monitor selection follows the Desktop Vision rules.

| German grid command | Action |
| --- | --- |
| “A3”, “Feld D2”, “Berta 3”, “Cäsar 2”, “Delta 4” | Move smoothly to the cell center; spelling alternatives help distinguish B/C/D. |
| “D4 links oben” / “D4 rechts unten” | Move to the center of the named quarter of the cell. |
| “Links oben”, “rechts oben”, “links unten”, “rechts unten” | Quarter the current target region internally; visible grid geometry stays unchanged. |
| “Nochmals links oben” / “Mitte” | Refine again, or move to the current region's center. |
| “Feld unterteilen” | Explicitly turn the selected region into another 4×5 grid. |
| “Zurück” / “Raster neu starten” / “Koordinatennetz zurücksetzen” | Undo one refinement, or reset to the full monitor. |
| “Maus hierhin” | Move to the last selected target again. |
| “Raster 50 Prozent” / “Raster ausblenden” | Set visibility, or hide the overlay while local coordinate commands remain active. |
| “Raster anzeigen” | Show the grid; if visibility is 0%, restore it to 100%. |
| “Stopp” / **Maus STOPP** | Stop motion at the current position; coordinate mode stays active. |
| “Koordinatennetz beenden” / **Modus beenden** | Stop motion, close the grid and stop its local listener. |

Example: **A3 → Feld unterteilen → B4 → Feld unterteilen → D2**.
Small regions receive a large readable legend and an outline of the actual area;
this does not capture or magnify screen contents.

Saved settings: **visibility 0–100%** (default 100%), **speed 200–3000 pixels/second**
(default 900), **maximum refinement depth 1–8** (default 4). Raster and quartering
steps share the limit. Pixel limits prevent subdivisions below useful regions:
a new grid needs at least 10×8 pixels, quartering at least 4×4. Speed is an average
guide with acceleration/deceleration, not a constant instantaneous speed.

While coordinate mode is active, a **local German Windows recognizer** handles fixed
commands. Live conversation, its wakeword start and spontaneous output pause; they
are not used as a parallel conversation channel. After leaving the mode, normal
wakeword behavior returns. Hidden grid **does not mean microphone off**.
Coordinate mode never resumes automatically after an app restart.

New targets replace ongoing moves. Sleep, character/provider changes, app exit and
display-configuration changes exit coordinate control and stop motion. A movement started on
another monitor crosses the virtual desktop; monitor gaps, Windows cursor constraints,
real DPI alignment and spoken-stop latency still need Windows tests. **No mouse
clicks, double-clicks, dragging or scrolling are implemented.**

See the [mouse-control guide and Windows checklist](docs/MAUSSTEUERUNG.md) (German).

## Privacy and saved consent

PR #5 changes consent to the following choices, stored separately for **screenshots**
and **selected text**, and bound to **OpenAI**:

| Choice shown in the app | Effect |
| --- | --- |
| **Abbrechen** | Cancel; no new permission or transfer. |
| **Einmal erlauben** | Allow only the current request, including its read-aloud chunks. The next request asks again. |
| **Auf diesem Gerät dauerhaft erlauben** | Save approval in the local app profile across voice sessions and full app restarts. Further actions still need an explicit user request. |

Revoke either approval under **KI-ANBIETER & KOSTEN → Datenschutz** using the
screen/text revoke button. Revocation cancels current desktop/text processing and
prevents a pending dialog from restoring the revoked approval. It cannot recall data
already sent. Save failures are reported; durable approval is not granted unless
saving succeeds. If revocation cannot be saved, it remains effective for the current
run; resolve the profile write problem before restarting.

Old process-only approvals are not silently upgraded. A different provider does
not inherit permission. In `main`/PR #4, approvals are process-only; PR #5's
**Einmal** is deliberately narrower. Local processing needs no cloud-transfer consent.
Windows microphone/UAC/SmartScreen prompts are separate from the app's cloud dialog.

Cloud conversations transmit microphone audio or typed prompts to the chosen provider;
these screen/text approvals do not cover every kind of chat traffic. Local wakeword
and active grid recognition do not send audio to a cloud recognizer. Hiding a character
closes live chat but does not leave an already active coordinate mode; use its exit
command or **Schlaf** to stop that local listener too.

Keys are kept in the main process and encrypted with Electron `safeStorage` when
OS encryption is available; otherwise newly saved keys remain in memory for that run.
Settings, durable consent and usage metadata live in the local app profile. Optional
memory notes are stored locally and supplied to the chosen AI provider when memory is
enabled. Do not put keys or confidential notes in repository files or screenshots.

Screen/selection contents are handled temporarily rather than intentionally written
to files or diagnostic logs; direct selected-text reading is excluded from ordinary
chat history and memory. This is not a guarantee about the cloud provider's retention.
There is no automatic screen or selection monitoring.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| Startup reports missing Node/npm or stops installing Electron | Install Node.js LTS with npm, reopen the terminal, extract the full project and check network access. Read the startup terminal error. |
| Wakeword, one-time listening or grid commands fail | Check microphone permissions and an installed German desktop recognizer. Use the wakeword test; restart grid mode after installing speech components. The text field remains an alternative. |
| Live stops after a quiet period | The 45-second idle disconnect is expected. Start Live again or use the enabled wakeword after leaving coordinate mode. |
| Live cannot start while the grid is active | Say “Koordinatennetz beenden” or click **Modus beenden** first. Simultaneous live chat and coordinate mode are not implemented. |
| Selected text cannot be read | Try a non-sensitive selection in Notepad/Editor. Check UIA support, focus and the safe diagnosis guide; the absence of a cloud dialog after a UIA failure is expected. Do not assume administrator rights will fix it. |
| Wrong screen or misplaced pointer | Check GDI `DISPLAYn`, active-window/pointer selection, scaling and monitor layout. Reopen the grid after changes; mixed-DPI hardware needs practical validation. |
| Cloud model or key fails | Check provider access, selected model, quota/billing and the key saved in the app. Gemini is not general text mode here. |
| Local AI is unavailable | Start the model server, load a model and verify its loopback address/model name. The app does not start or download the server/model. |

## Development and validation

Run from the project folder after installing dependencies:

```powershell
npm test
powershell.exe -NoLogo -NoProfile -File tests/mouse-motion.test.ps1
powershell.exe -NoLogo -NoProfile -Mta -File tests/read-selection.test.ps1
```

The PR #5 report records **434 Node tests**, **31 simulated UIA cases**, and managed
movement checks under Linux/PowerShell 7, without paid API calls. In that sandbox,
Node was run as `node --test --test-isolation=none tests/*.test.cjs`.
These are simulation/contract checks, **not native Windows integration tests**.
They do not certify Windows PowerShell 5.1, real recognition, stop latency,
microphone handover, UIA providers, overlay click-through or mixed-DPI cursor accuracy.

See the [PR #5 test evidence](docs/ai/testing/2026-10-31-feature-mouse-grid-consent.md)
and [UIA diagnosis](docs/ai/testing/2026-10-31-feature-desktop-vision-2-uia-operations.md)
(German) for reproducible checks and outstanding Windows acceptance work.

## Planned features

**The following are not implemented in the current snapshot:**

- Simultaneous AI conversation and mouse control without switching modes.
- A more intuitive in-place grid subdivision experience directly inside the selected
  cell. The explicit **Feld unterteilen** operation already exists in PR #5;
  the redesigned interaction is future work.
- Mouse clicks, double-clicks and further desktop actions beyond the existing limited tools.
- A fully multilingual interface and voice-command system for **German, English,
  Chinese, Japanese, Spanish and Portuguese**. AI-generated conversation in another
  language does not provide a translated interface or a matching local command grammar.
- Language settings directly in the upper control area.

## Further documentation

These existing detailed guides are currently German; both READMEs cover the full
installation and everyday workflow in their respective language.

- [AI setup, model servers and budget](docs/HYBRID-AI-SETUP.md)
- [Desktop Vision, monitors and selected text](docs/DESKTOP-ERKENNUNG.md)
- [Mouse control, consent and Windows acceptance checklist](docs/MAUSSTEUERUNG.md)
- [Animation architecture](ANIMATION-ARCHITEKTUR.md)
- [Earlier usage and technical notes](LIESMICH.md) — historical details may describe older versions.
- [Version 0.7.4 changes](AENDERUNGEN-0.7.4.md)
- [Repository](https://github.com/rob0511-777/Jeffrey-and-Friends)
