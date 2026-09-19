# Dent HTML — Figma Handoff Contract

## Figma

File:
https://www.figma.com/design/rUMTqCZUJyxYhxkm5GW747

## Role of Figma

Figma is used for:
- visual composition
- responsive key frames
- component appearance
- state references
- scientific artwork reference
- visual QA

Figma is **not** the only source of product behavior.

GitHub design spec owns:
- interaction rules
- performance constraints
- state inventory
- implementation invariants
- release gate

---

## Current Figma Structure

Starter plan limits the file to three pages, so structure is intentionally compact.

### 00 · Foundations + Components
- dark-first palette
- typography
- spacing/radius foundations
- core component visual references

### 01 · Desktop Study
Contains work for:
- Lecture
- Flashcards
- Flashcard Answer
- Quiz
- Analytics

### 02 · Mobile Study
Contains work for:
- Lecture
- Flashcards
- Flashcard Answer
- Quiz
- Analytics

---

## Current Visual Direction

Clinical Editorial Biotech.

Key visual motifs:
- metabolic atlas
- scientific labels
- restrained line networks
- strong Persian typography
- dark navy surface system
- cyan/mint/violet accents

Avoid:
- glass-everywhere
- decorative neon haze
- cinematic effects with no UX value
- image-heavy article content

---

## Figma Work Still Required

When Figma MCP budget becomes available again:

### Desktop
- Quiz Setup
- Quiz Question
- Quiz Correct
- Quiz Incorrect
- Quiz Result
- Analytics Empty
- Settings

### Mobile
- TOC Sheet
- Flashcards Complete
- Quiz Setup
- Quiz Correct
- Quiz Incorrect
- Quiz Result
- Analytics Empty
- Settings Sheet

### Foundations
- final button states
- option states
- focus states
- callout variants
- progress variants
- mobile/desktop nav variants

---

## Asset Rules

Figma should create/source visual references only where they materially help:

- metabolic atlas hero
- pathway diagrams
- molecule/node diagrams
- icon family
- complex scientific comparison visuals

Do not export raster versions of:
- buttons
- cards
- text
- pills
- gradients
- basic shapes

These must be native HTML/CSS.

---

## Handoff Naming

Preferred frame naming:

`Platform / Area / State`

Examples:
- Desktop / Flashcards / Front
- Desktop / Quiz / Incorrect
- Mobile / Quiz / Question
- Mobile / Analytics / Empty

Components:
`Component / Variant / State`

---

## Responsive Handoff

Figma does not need every breakpoint.

Required visual anchors:
- 390px mobile
- 768px compact/tablet only when composition changes
- 1440px desktop

Intermediate behavior is governed by `03_RESPONSIVE_AND_PERFORMANCE.md`.

---

## Conflict Policy

If a Figma frame conflicts with this repository:

1. Check whether GitHub spec was updated later.
2. Check whether the Figma change is documented.
3. If not documented, GitHub spec remains authoritative.
4. Record any approved divergence before implementation.

---

## Final Design Freeze

Before coding:
- required states exist in either Figma or explicit spec
- no unanswered navigation/layout question
- performance contract accepted
- component naming stabilized
- mobile composition reviewed separately
