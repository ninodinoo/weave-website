# Weave Website — Plan

## Konzept
Eine minimalistische, terminal-styled Landing Page. Schwarzer Hintergrund, weiße Monospace-Schrift, ASCII-Art. Sieht aus wie ein Terminal, fühlt sich an wie ein Terminal. Keine Stock-Fotos, keine Gradients, keine Corporate-Vibes.

---

## Design

### Farbschema
- **Background:** `#0a0a0a` (fast schwarz)
- **Text:** `#e0e0e0` (weiches weiß)
- **Accent:** `#4ade80` (grün, wie Terminal-Output)
- **Dimmed:** `#555555` (für Comments/Sekundärtext)
- **Cursor-Blink:** grüner blinkender Block-Cursor an strategischen Stellen

### Typografie
- **Monospace only** — JetBrains Mono oder Fira Code
- Keine Sans-Serif, keine Serif, nichts anderes
- Text erscheint mit Typewriter-Effekt (optional, dezent)

### Stil-Elemente
- `$` Prompt-Prefix vor Aktionen
- `#` Comment-Style für Erklärungen
- `---` Divider wie in Markdown
- Code-Blöcke für alles
- Minimale Animationen: Cursor-Blink, Typewriter, sanftes Fade-In beim Scrollen

---

## Sections (Single Page, scrollbar)

### 1. Hero
```
 ██╗    ██╗███████╗ █████╗ ██╗   ██╗███████╗
 ██║    ██║██╔════╝██╔══██╗██║   ██║██╔════╝
 ██║ █╗ ██║█████╗  ███████║██║   ██║█████╗
 ██║███╗██║██╔══╝  ██╔══██║╚██╗ ██╔╝██╔══╝
 ╚███╔███╔╝███████╗██║  ██║ ╚████╔╝ ███████╗
  ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝

  Your AI workflow, woven to perfection.

  $ npx weave
```
- ASCII-Banner groß zentriert
- Tagline drunter
- Ein einziger Install-Befehl, klickbar (kopiert in Clipboard)
- Dezenter blinkender Cursor nach `$ npx weave█`

### 2. What is Weave?
```
# what is weave?

Weave is a framework that lives inside your AI coding tool.
It learns how you work, understands your project,
and builds the perfect workflow — automatically.

> No config files to write.
> No templates to copy.
> Just a conversation.
```
- Kurz, direkt, terminal-style
- Kein Marketing-Blabla

### 3. How it works
Drei Schritte, dargestellt wie Terminal-Output:

```
$ weave init
  ✓ Detected: Claude Code
  ✓ Files installed

$ /weave:onboarding
  > Tell me about your project...
  > What's your tech stack?
  > How do you like to work?
  ✓ Workflow generated

$ just work.
  ✓ Agents configured
  ✓ Teams assembled
  ✓ Rules personalized
  ✓ Evolving in background...
```

### 4. Features
Jedes Feature als "Datei" dargestellt:

```
├── onboarding.md      # AI interviews you, builds your workflow
├── agent-teams.md     # Specialized agents that work together
├── evolve.md          # Your setup improves while you work
├── sync.md            # One workflow, every platform
└── your-rules.md      # Everything tailored to YOU
```

Jede "Datei" expandiert on-click/hover mit kurzer Erklärung.

### 5. Platforms
```
# supported platforms

  [Claude Code]  ✓ ready
  [Cursor]       ◻ coming soon
  [Codex]        ◻ coming soon
  [Windsurf]     ◻ coming soon
```

### 6. Demo / Preview
Ein eingebettetes "Terminal-Window" das eine simulierte Onboarding-Session zeigt:
- Fake Terminal-Chrome (Titelleiste mit Dots)
- Typewriter-Animation eines Onboarding-Gesprächs
- Zeigt wie Weave Fragen stellt und dann Files generiert
- Loopt oder ist interaktiv scrollbar

### 7. Get Started
```
$ npx weave

# or check the source:
$ git clone https://github.com/[user]/weave
```
- Nochmal der Install-Command (copy-to-clipboard)
- GitHub-Link
- Star-Button / GitHub Badge

### 8. Footer
```
---
built by nino
github · npm · license: MIT
```
Minimal. Keine Social-Links-Leiste, kein Newsletter, kein Cookie-Banner.

---

## Tech-Stack Website

### Option A — Minimal (Empfehlung)
- **Astro** — Static Site Generator, fast, simpel
- **Vanilla CSS** — kein Tailwind nötig bei dem Stil
- **Kein JavaScript-Framework** — pure HTML/CSS + minimales JS für Animationen
- Hosted auf **GitHub Pages** (kostenlos)

### Option B — Wenn mehr Interaktivität gewünscht
- **Next.js** Static Export
- Für das Terminal-Demo-Widget eventuell eine kleine React-Komponente

### Animationen
- Typewriter-Effekt: pures JS, ~20 Zeilen
- Cursor-Blink: CSS `@keyframes`
- Scroll-Fade-In: Intersection Observer, ~10 Zeilen JS
- Keine Animation-Libraries nötig

---

## Seiten-Struktur
```
weave-website/
├── src/
│   ├── index.html          # Single Page
│   ├── styles/
│   │   ├── reset.css
│   │   └── terminal.css    # Das gesamte Styling
│   ├── scripts/
│   │   ├── typewriter.js   # Typewriter-Effekt
│   │   ├── clipboard.js    # Copy-to-Clipboard für Commands
│   │   └── demo.js         # Terminal-Demo Animation
│   └── assets/
│       └── og-image.png    # Social Preview (Terminal-Screenshot-Style)
├── public/
│   └── favicon.ico         # Terminal-Icon oder Weave-Logo
└── package.json
```

---

## Offene Fragen
- ~~Domain: weave.dev? weave-ai.dev? getweave.dev?~~ → GitHub Pages (kostenlos), z.B. `username.github.io/weave-website`
- ~~Soll die Website ein eigenes Repo sein oder im Weave-Hauptrepo unter /website?~~ → Eigenes Repo: `weave-website`. Weave Plugin auch eigenes Repo: `weave`
- ~~Braucht es ein Logo oder reicht der ASCII-Banner als Branding?~~ → ASCII-Banner IST das Logo. Kein grafisches Logo.
- ~~Soll die Demo interaktiv sein (User kann tippen) oder nur eine Animation?~~ → Nur Animation, nicht interaktiv
