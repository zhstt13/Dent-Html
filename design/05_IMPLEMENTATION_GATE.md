# Dent HTML — Implementation Gate

## Status

**Redesign implementation is gated.**

Current `index.html` remains production until this gate passes.

---

## 1. Design Freeze Checklist

Before touching production redesign:

- [x] Product direction defined
- [x] Core IA defined
- [x] Lecture composition defined
- [x] Flashcard front/back behavior defined
- [x] Quiz state model defined
- [x] Analytics purpose defined
- [x] Mobile navigation model defined
- [x] Desktop navigation model defined
- [x] Design tokens defined
- [x] Performance budget defined
- [x] Figma source established
- [ ] Final Quiz states visually reviewed
- [ ] Settings states visually reviewed
- [ ] Empty states visually reviewed
- [ ] Final accessibility pass
- [ ] Final design QA

No implementation should invent missing states silently.

---

## 2. Build Order

### Stage 1 — Runtime freeze
Create a stable checkpoint of current production behavior.

Verify:
- Lecture content
- 50 flashcards
- 45 quiz questions
- theme/settings
- local progress
- analytics
- reset/backup behavior if present

### Stage 2 — Tokens
Implement:
- color variables
- typography
- spacing
- radius
- motion durations
- z-index contract

No component CSS before tokens exist.

### Stage 3 — Shell
Implement:
- app background
- top navigation desktop
- top bar + bottom nav mobile
- tab switching
- settings trigger
- reading progress

### Stage 4 — Lecture
Implement:
- hero
- metabolic atlas SVG
- TOC
- reading surface
- Big Idea
- Concept
- Clinical Bridge
- Memory Hook
- Comparison
- Pathway
- Tables

### Stage 5 — Flashcards
Implement explicit states:
- Front
- Back
- Confidence
- Complete

Rule:
Front must never leak answer content.

### Stage 6 — Quiz
Implement:
- setup
- unanswered
- selected
- correct
- incorrect
- result

### Stage 7 — Analytics
Implement:
- empty
- populated
- next best action

### Stage 8 — Settings
Implement desktop modal and mobile sheet.

### Stage 9 — Responsive
Test all required widths.
Do not patch mobile after desktop is “finished”; mobile is a first-class target.

### Stage 10 — Performance
Measure:
- payload
- long tasks
- scroll smoothness
- layout shifts
- image weight

### Stage 11 — Regression
Compare with current production:
- no missing content
- no broken question
- no broken flashcard
- no state loss
- no settings regression

---

## 3. Code Architecture Rules

### CSS
Suggested layers:

```
src/styles/
├── tokens.css
├── base.css
├── shell.css
├── lecture.css
├── flashcards.css
├── quiz.css
├── analytics.css
├── settings.css
├── responsive.css
└── motion.css
```

### JS
Separate controllers by responsibility.

Avoid one giant script owning:
- navigation
- quiz
- flashcards
- analytics
- settings
- scrolling

### State
One canonical app state.
UI renders from state.
Do not use visual DOM classes as the only data store.

---

## 4. Performance Fail Conditions

Implementation is rejected if any of these appear:

- repeated backdrop-filter cards
- multiple fixed decorative layers
- pointer-follow spotlight
- continuous parallax
- infinite gradient animation
- scroll listeners doing DOM queries every event
- all 50 flashcards rendered as heavy hidden cards
- all 45 quiz questions rendered simultaneously
- large base64 artwork in HTML
- animation of filter/blur during scrolling

---

## 5. Visual Fail Conditions

Rejected if:

- redesign looks like old layout with new colors
- every section is a card
- hero dominates first screen on mobile
- content hierarchy depends on glow
- desktop side navigation duplicated by floating dock
- dark mode becomes low-contrast gray-on-gray
- mobile typography is desktop typography scaled down mechanically

---

## 6. Accessibility Gate

Required:
- semantic buttons
- keyboard access
- visible focus
- 44×44 touch targets
- color-independent correct/incorrect labels
- reduced motion
- heading order
- table semantics
- modal focus containment
- sufficient contrast

---

## 7. Release Gate

A redesign can replace production only when:

- design QA passes
- functional tests pass
- mobile QA passes
- performance budget is within tolerance
- current learning data/content is preserved
- no known P0/P1 bug remains
- stable checkpoint is created under `versions/`

---

## 8. Decision Rule

When implementation pressure conflicts with this spec:

**Do not patch around the spec.**

Either:
1. implement the defined behavior, or
2. update the design decision in GitHub first.

This repository is the memory of the product.
