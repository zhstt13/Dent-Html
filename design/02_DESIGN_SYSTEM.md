# Dent HTML — Design System v1

## 1. Typography

Primary Persian font:
**Vazirmatn**

Fallback:
- Noto Sans Arabic
- system sans-serif

### Desktop scale

| Token | Size | Line height | Weight |
|---|---:|---:|---|
| Display/Hero | 56–64 | 1.15 | ExtraBold |
| H1 | 40 | 1.35 | Bold |
| H2 | 30 | 1.4 | Bold |
| H3 | 22 | 1.5 | SemiBold |
| Body/L | 18 | 1.75 | Regular |
| Body/M | 16 | 1.8 | Regular |
| Body/S | 14 | 1.75 | Regular |
| Label | 12–13 | 1.5 | Medium |

### Mobile scale

| Token | Size |
|---|---:|
| Display | 28–32 |
| H1 | 24–28 |
| H2 | 20–22 |
| H3 | 17–18 |
| Body | 15–16 |
| Small | 12–13 |
| Label | 10–12 |

### Rules
- body کمتر از 14px نشود.
- Persian body line-height فشرده نشود.
- long-form content بیشتر از ~72 characters/line نشود.
- all-caps انگلیسی فقط برای kicker/metadata.

---

## 2. Color

Dark-first semantic palette:

| Role | Hex |
|---|---|
| Canvas | #071019 |
| Surface | #0C1723 |
| Surface Subtle | #122131 |
| Surface Elevated | #182A3D |
| Text Primary | #F4F8FF |
| Text Secondary | #9DB0C7 |
| Border | #253A50 |
| Primary Cyan | #61D7FF |
| Secondary Mint | #73EDC1 |
| Accent Violet | #A88DFF |
| Success | #60E3A1 |
| Warning | #FFBE68 |
| Danger | #FF7E96 |

### Usage limits
- Cyan = primary action / active signal
- Mint = learning success / mastery
- Violet = concept / memory
- Amber = warning / clinical bridge
- Red = error / incorrect

Accent colors نباید به‌صورت همزمان روی یک سطح با رقابت یکسان استفاده شوند.

---

## 3. Spacing

Base unit: 4px

Core:
- 4
- 8
- 12
- 16
- 20
- 24
- 32
- 40
- 48
- 64

### Typical
- card padding mobile: 16–20
- card padding desktop: 20–32
- section gap: 32–48
- major region gap: 48–64

---

## 4. Radius

- 8: tiny controls
- 12: compact controls
- 16: option/buttons
- 20: cards
- 24: major cards
- 32: hero only
- 999: pills

Do not use 24–32 radius on every surface.

---

## 5. Borders & Elevation

Default:
- 1px border
- low contrast

Elevation levels:

### E0
No shadow.

### E1
Subtle shadow for sticky nav/modal.

### E2
Only modal / major floating overlay.

Repeated content cards should prefer border/surface difference over shadow.

---

## 6. Motion

Durations:
- Fast: 120ms
- Base: 180ms
- Slow: 260ms

Allowed properties:
- opacity
- transform
- clip-path only if lightweight and tested

Avoid animating:
- filter
- box-shadow
- background-position
- backdrop-filter
- width/height for long sequences

### Flashcard
Default:
- 180–260ms
- modest rotateY or crossfade
- reduced-motion: instant/crossfade

### Tab switch
- 120–180ms opacity + 4–8px translate

### Feedback
- no shake loop
- one short state transition

---

## 7. Components

### Button
Variants:
- Primary
- Secondary
- Ghost
- Danger

States:
- Default
- Hover
- Focus
- Pressed
- Disabled

### Option
States:
- Default
- Hover
- Focus
- Selected
- Correct
- Incorrect
- Disabled

### Callout
Variants:
- Concept
- Clinical
- Warning
- Memory

### Metric
Simple, no nested card.

### Progress
- linear
- segment optional

### Bottom Nav
Mobile only.

### Reading Rail
Desktop Lecture only.

---

## 8. Iconography

Style:
- simple outline
- 1.75–2px stroke
- rounded geometry
- no detailed 3D icons

Use icon only where it improves scanning.

---

## 9. Scientific Visuals

Preferred:
- SVG
- line diagram
- node network
- pathway
- simplified molecule representations

Avoid:
- decorative 3D molecule renders in repeated blocks
- large raster artwork inside article
- continuous particle animation

---

## 10. Density

Lecture = low/medium density  
Flashcards = low density  
Quiz = medium density  
Analytics = medium density

The UI should not have dashboard density everywhere.
