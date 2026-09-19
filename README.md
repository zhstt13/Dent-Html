# Dent-Html

Dental-learning repository with a premium production study page and a preserved modular runtime.

## Entry Points
- `index.html` = **production UI** for Metabolism of Proteins — Session 5
- `metabolism-protein-session5.html` = normalized standalone import with an external GUMS hero asset
- `src/index.html` = modular development/runtime entry point

## Session 5 Import
The complete **Metabolism of Proteins — Session 5** source is present in the repository and has been redesigned as the current production experience.

Design/runtime changes include:
- premium responsive dental/biochemistry visual system
- upgraded GUMS hero and session masthead
- polished sticky navigation, cards, callouts, flashcards, quiz and analytics surfaces
- mobile/tablet refinements and dark/sepia compatibility
- preserved original study content, quiz logic, flashcards, settings and local progress state
- normalized standalone copy at `metabolism-protein-session5.html`
- stable checkpoint at `versions/metabolism-protein-session5-premium-v1.html`

## Next-Generation Design Source

The next Dent HTML redesign is now **design-first and implementation-gated**.

- Product/design source of truth: `design/`
- Master spec: `design/00_MASTER_DESIGN_SPEC.md`
- Screen/state map: `design/01_SCREEN_AND_STATE_MAP.md`
- Design system: `design/02_DESIGN_SYSTEM.md`
- Responsive/performance contract: `design/03_RESPONSIVE_AND_PERFORMANCE.md`
- Figma handoff: `design/04_FIGMA_HANDOFF.md`
- Implementation gate: `design/05_IMPLEMENTATION_GATE.md`
- Machine-readable tokens: `design/tokens.json`
- Machine-readable states: `design/state-map.json`
- Figma visual source: https://www.figma.com/design/rUMTqCZUJyxYhxkm5GW747

**Rule:** the current `index.html` remains production until the new design passes the implementation gate. New visual decisions must be captured under `design/` before they are implemented in production.

## Architecture
- `index.html` = production page
- `src/components/` = modular component markup and component CSS
- `src/scripts/` = modular application/runtime controllers
- `src/styles/` = global tokens, base, responsive and motion layers
- `assets/` = shared media assets
- `docs/` = architecture, migration and import notes
- `tests/` = dependency-free release and smoke checks
- `versions/` = stable checkpoints

## Run
Serve the repository through an HTTP static server:
- open `index.html` for the current premium production page
- open `src/index.html` for the modular runtime
- open `metabolism-protein-session5.html` for the normalized standalone import

## Validation
GitHub Actions validates both layers:
1. modular component/runtime integrity under `src/`
2. production Session 5 DOM and interaction structure
3. standalone Session 5 import and its external hero asset

## Development Rule
Do not make the production page pass by destroying the modular runtime, or vice versa. The two layers are intentionally validated independently.
