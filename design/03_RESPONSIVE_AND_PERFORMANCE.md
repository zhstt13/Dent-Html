# Dent HTML — Responsive & Performance Contract

## 1. Primary Target

اولویت:
1. Mid-range Android
2. Modern mobile browsers
3. Desktop Chromium/Safari/Firefox

Design نباید فقط روی flagship phone روان باشد.

---

## 2. Breakpoints

Breakpoints باید براساس layout failure انتخاب شوند، نه صرفاً device names.

Baseline:
- <= 600px: mobile
- 601–920px: tablet/compact
- 921–1180px: desktop compact
- >1180px: desktop full

---

## 3. Mobile Rules

### Navigation
- bottom nav
- settings در top bar
- TOC در sheet/drawer

### Content
- single column
- no fixed side rail
- no decorative full-height fixed backgrounds

### Actions
- touch target >= 44px
- primary actions near lower half when practical

### Tables
- horizontal scroll فقط در صورت اجبار
- sticky first column only if tested

---

## 4. Desktop Rules

- max content container: ~1320–1440px
- reading text narrower than container
- TOC rail max ~220–260px
- hero two-column only when width permits
- nav sticky allowed

---

## 5. Performance Budget

### Initial payload
Targets, not excuses:

- HTML: <= 350KB uncompressed
- CSS: <= 80KB uncompressed
- JS authored/runtime bundle: <= 120KB uncompressed where practical
- above-the-fold image assets: <= 250KB total
- individual hero visual: <= 120KB WebP/AVIF or SVG equivalent

### Images
- no base64 megabyte-scale images inside HTML
- use WebP/AVIF or SVG
- explicit width/height
- lazy-load below fold

### DOM
- do not render all interactive states simultaneously if hidden
- Quiz: render current question state, not 45 full question cards
- Flashcards: render current card, not 50 complete card DOM trees
- Analytics rows can render on demand if dataset grows

### CSS
Forbidden at scale:
- backdrop-filter on repeated cards
- huge multi-layer shadow on repeated cards
- multiple full-screen fixed pseudo-elements
- infinite animated gradient backgrounds
- universal transition: all
- filter blur animations

### JS
- passive scroll listeners
- prefer IntersectionObserver
- one centralized scroll progress calculation
- throttle/rAF when needed
- no pointermove effects on mobile
- no layout reads/writes in uncontrolled loops

---

## 6. Runtime Targets

On a representative mid-range Android device:

- scroll should visually target 60fps
- no repeated long task > 50ms during ordinary scroll
- tab switch should feel immediate
- input response < 100ms perceived
- no visible CLS during initial render
- LCP target <= 2.5s on reasonable 4G/Wi-Fi conditions
- layout shift target CLS <= 0.05

These are release targets and must be measured, not guessed.

---

## 7. Fixed/Sticky Budget

Maximum preferred:
- 1 sticky top bar on desktop
- 1 bottom nav on mobile
- optional thin reading progress indicator

Avoid stacking:
- top nav
- side rail
- floating dock
- fixed glow layer
- fixed cursor spotlight
- multiple sticky content boxes

همزمان.

---

## 8. Motion Budget

At most:
- 1 major transition triggered by state change
- 1 progress animation
- small hover states on desktop

No decorative loop is required for v1.

---

## 9. Reduced Motion

`prefers-reduced-motion: reduce` must:
- remove card flip
- remove entrance translation
- stop nonessential animated progress
- preserve state change through instant visual update

---

## 10. QA Devices

Minimum manual matrix:

### Mobile
- 360×800
- 390×844
- 412×915

### Tablet
- ~768px width

### Desktop
- 1280×720
- 1440×900
- 1920×1080

---

## 11. Performance Release Gate

Release fails if:
- scroll jank is obvious
- fixed layers repaint continuously
- hero asset dominates payload
- hidden tabs keep heavy animation alive
- mobile thermal/battery load is visibly excessive
- interaction logic blocks main thread
