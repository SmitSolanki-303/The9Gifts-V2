---
version: 1.0
name: The9Gifts-design-system
description: A premium, bespoke design language for The9Gifts — a cinematic commerce platform built on a dual-track architecture. The editorial (cinematic) track lives on pure black canvases with edge-to-edge photography, giant Space Grotesk display type, and striking Gold pill buttons. The transactional (light) track flips to a crisp white canvas with soft, layered drop shadows and clear, legible Inter body typography. The two tracks share typographic DNA (the ss03 stylistic set) but diverge sharply in canvas polarity to balance immersive storytelling with frictionless commerce.

colors:
  primary: "#c79a42" # Brand Gold
  primary-foreground: "#000000" # Black text on Gold
  ink: "#000000"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  canvas-night: "#000000"
  canvas-night-elevated: "#0a0a0a"
  canvas-light: "#ffffff"
  canvas-cream: "#fbfbf5"
  shade-30: "#d4d4d8"
  shade-40: "#a1a1aa"
  shade-50: "#71717a"
  shade-60: "#52525b"
  shade-70: "#3f3f46"
  hairline-light: "#e4e4e7"
  hairline-dark: "#1e2c31"

typography:
  display-xxl:
    fontFamily: "Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: 96px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: 2.4px
    fontFeature: ss03
  display-xl:
    fontFamily: "Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: 70px
    fontWeight: 300
    lineHeight: 1.0
    letterSpacing: 0
    fontFeature: ss03
  display-lg:
    fontFamily: "Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: 55px
    fontWeight: 300
    lineHeight: 1.16
    letterSpacing: 0
    fontFeature: ss03
  display-md:
    fontFamily: "Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: 48px
    fontWeight: 300
    lineHeight: 1.14
    letterSpacing: 0
    fontFeature: ss03
  heading-xl:
    fontFamily: "Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 1.28
    letterSpacing: 0.42px
    fontFeature: ss03
  heading-lg:
    fontFamily: "Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.14
    letterSpacing: 0.36px
    fontFeature: ss03
  heading-md:
    fontFamily: "Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.3px
    fontFeature: ss03
  heading-sm:
    fontFamily: "Space Grotesk, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: 0.72px
    fontFeature: ss03
  body-lg:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 18px
    fontWeight: 500
    lineHeight: 1.56
    letterSpacing: 0
    fontFeature: ss03
  body-md:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: ss03
  body-strong:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: ss03
  caption:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.49
    letterSpacing: 0.28px
    fontFeature: ss03
  micro:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.13px
    fontFeature: ss03
  eyebrow-cap:
    fontFamily: "Inter, Helvetica, Arial, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0.72px
    fontFeature: ss03
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
    fontFeature: ss03

rounded:
  xs: 4px
  sm: 5px
  md: 8px
  lg: 12px
  xl: 20px
  pill: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  huge: 64px

components:
  button-primary-pill:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-primary-pill-pressed:
    backgroundColor: "{colors.shade-70}"
    textColor: "{colors.primary-foreground}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  button-outline-on-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-dark}"
    border: "2px solid {colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 26px
  button-outline-on-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.pill}"
    padding: 12px 24px
  text-input:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 12px
  card-pricing:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-feature-cinematic:
    backgroundColor: "{colors.canvas-night-elevated}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  card-photo-frame:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xl}"
    padding: 0px
  nav-bar-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  nav-bar-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.body-md}"
    rounded: "{rounded.xs}"
    padding: 16px 24px
  footer-dark:
    backgroundColor: "{colors.canvas-night}"
    textColor: "{colors.on-dark}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 24px
  footer-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 64px 24px
---

## Overview

The9Gifts runs two parallel design tracks that share typographic DNA and a single button vocabulary, but diverge in canvas polarity. The editorial (cinematic) track lives on `{colors.canvas-night}` (`#000000`) — full-bleed photography, giant `{typography.display-xxl}` headlines in Space Grotesk set at light weights (300), and striking Gold CTA pills (`button-primary-pill`). The pages read like the spread of a high-end luxury print magazine: generous negative space, photography that speaks for itself, and refined gold accents.

The transactional track flips to `{colors.canvas-light}` and `{colors.canvas-cream}` (an off-white that's barely warmer than pure white). Product grids, checkouts, and content blocks sit on this lighter canvas, with the same pill button system but optimized for legibility and commerce flows. 

Typography is split across two main families. **Space Grotesk** at light weights handles every display, headline, and editorial moment. **Inter** handles every UI body, button label, caption, and form field. Across both families, the OpenType `ss03` stylistic set is enabled — a character-level signature for the bespoke brand.

**Key Characteristics:**
- Two-canvas system: `{colors.canvas-night}` for cinematic editorial sections, `{colors.canvas-light}` for transactional surfaces.
- Pill-shape (`{rounded.pill}`) is the only button shape across both tracks.
- Light-weight (300) geometric display typography is the signature.
- Brand Gold (`#c79a42`) replaces pastels, used for primary actions and subtle highlights.
- Stacked soft shadows (`shadow-layered-light`) add depth on the light track without harshness.

## Colors

### Brand & Accent
- **Brand Gold** (`{colors.primary}` — `#c79a42`): The core luxury accent. Used for primary pill buttons, selected active states, and typographic highlights.

### Surface
- **Canvas Night** (`{colors.canvas-night}` — `#000000`): Pure black hero, cinematic feature pages, dark footers.
- **Canvas Night Elevated** (`{colors.canvas-night-elevated}` — `#0a0a0a`): Dark CTA blocks, cards on cinematic surfaces.
- **Canvas Light** (`{colors.canvas-light}` — `#ffffff`): Product grids, content blocks.
- **Hairline Light** (`{colors.hairline-light}` — `#e4e4e7`): 1px borders on light cards.

### Text
- **Ink** (`{colors.ink}` — `#000000`): All text on light canvas.
- **On Dark** (`{colors.on-dark}` — `#ffffff`): All text on dark canvas.
- **Primary Foreground** (`{colors.primary-foreground}` — `#000000`): Text over the Gold primary buttons (maximizing contrast).

## Typography

### Font Family

The display tier is **Space Grotesk** at light weights (300–500). The UI tier is **Inter** at 400–600. The OpenType `ss03` stylistic set is enabled globally (`font-feature-settings: "ss03"`).

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 96px | 300 | 1.0 | 2.4px | Cinematic hero headline |
| `{typography.display-xl}` | 70px | 300 | 1.0 | 0 | Section opener on cinematic pages |
| `{typography.heading-xl}` | 28px | 500 | 1.28 | 0.42px | Card title / pricing tier name |
| `{typography.body-lg}` | 18px | 500 | 1.56 | 0 | Marketing body lead, large body |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default UI body, pill-button labels |
| `{typography.caption}` | 14px | 500 | 1.49 | 0.28px | Helper copy, footnotes |
| `{typography.eyebrow-cap}` | 12px | 400 | 1.2 | 0.72px | All-caps eyebrow above large headlines |

## Layout

### Spacing System
- **Base unit**: 8px
- **Tokens**: `{spacing.xxs}` 2px · `{spacing.xs}` 4px · `{spacing.sm}` 8px · `{spacing.md}` 12px · `{spacing.lg}` 16px · `{spacing.xl}` 24px · `{spacing.xxl}` 32px · `{spacing.huge}` 64px.

### Whitespace Philosophy
The cinematic track treats whitespace as luxury. Hero sections utilize 128–192px of vertical padding, allowing photography and typography to breathe. Transactional tracks tighten to ~64px between bands to facilitate quick scanning and commerce actions.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat, no shadow | Default surface |
| 1 | `inset 0 1px 0 rgba(255,255,255,0.04)` | Subtle inset highlight on dark cinematic cards (`shadow-inset-dark`) |
| 3 | Soft, stacked layered tiny shadows | Product cards, light track CTA cards (`shadow-layered-light`) producing a soft paper halo. |

## Components

### Buttons
**`button-primary-pill`**
- Background `{colors.primary}` (Gold), text `{colors.primary-foreground}` (Black).
- Used for high-impact actions like "Start Customizing" or "View All Products".

**`button-outline-on-dark`** and **`button-outline-on-light`**
- Transparent backgrounds with a clean 1px or 2px border. Used for secondary actions.

### Cards & Containers
**`card-feature-cinematic`**
- Pure dark block (`bg-background` in dark theme), holding a strong singular message, paired with a Gold CTA.

**`card-photo-frame`**
- Full-bleed photography container without padding. No text overlays inside the card; imagery stands alone.

## Theme Strategy (Light vs Dark)

The9Gifts utilizes a fluid **Light & Dark Theme** system natively supported by Tailwind CSS (`next-themes`).
To ensure components gracefully invert when the user toggles their system preference, strictly adhere to semantic variables rather than hardcoded colors.

**Semantic Rules:**
- **Backgrounds**: Always use `bg-background` for base canvases, `bg-card` for elevated containers, and `bg-accent` for subtle highlights. **Never** use hardcoded `bg-white` or `bg-black`.
- **Text**: Always use `text-foreground` for primary text and `text-muted-foreground` for secondary/tertiary text. **Never** use `text-white` or `text-black` unless over a purely brand-colored container (e.g. `text-primary-foreground` on Gold buttons).
- **Shadows & Borders**: Use `border-border` for outlines. For shadows, prefer `shadow-md dark:shadow-neutral-800/50` over explicit RGB values to ensure the shadow fades correctly against dark canvases.

## Do's and Don'ts

### Do
- Use `{rounded.pill}` for buttons globally.
- Render display tiers (Space Grotesk) at light weights to maintain the bespoke, elegant signature.
- Pair the Black canvas with White typography and Gold accents.
- Use full-bleed imagery without text overlays.
- Rely exclusively on semantic tokens (`bg-background`, `text-foreground`) for all UI blocks.

### Don't
- Don't mix random pastel colors. Stick to the refined Gold, Black, White palette.
- Don't use rounded-rectangle buttons.
- Don't stack thick, heavy shadows on dark backgrounds. Let the black canvas be completely flat.
- Don't hardcode `bg-white`, `bg-black`, `text-white`, or `text-black` in structural elements.

