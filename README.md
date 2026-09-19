# Dent-Html

Maintainable dental-learning repository with a modular runtime plus complete standalone study pages.

## Entry Points
- `index.html` = existing modular production/static-server entry point
- `metabolism-protein-session5.html` = full interactive Session 5 study page, imported from the supplied HTML and redesigned
- `src/app/index.html` = modular development entry point

## Session 5 Import
The complete **Metabolism of Proteins — Session 5** source is now present in the repository as a standalone page.

Design/runtime changes:
- externalized the large embedded GUMS hero image to `assets/gums-header.png`
- premium responsive dental/biochemistry visual system
- upgraded sticky navigation, hero treatment, cards, callouts, flashcards, quiz and analytics surfaces
- added page-reading progress and active table-of-contents highlighting
- preserved the original study content, quiz logic, flashcards, settings and local progress state
- preserved a stable designed checkpoint in `versions/metabolism-protein-session5-premium-v1.html`

## Architecture
- `src/components/` = modular component markup and component CSS
- `src/scripts/` = application/runtime controllers
- `src/styles/` = global tokens, base, responsive and motion layers
- `assets/` = shared media assets
- `docs/` = architecture, migration and import notes
- `tests/` = dependency-free static smoke checks
- `versions/` = stable checkpoints

## Run
Serve the repository through an HTTP static server. Open `index.html` for the modular runtime or `metabolism-protein-session5.html` for the complete Session 5 page.

## Current Migration State
The original Session 5 source is no longer missing: it is imported as a complete standalone page. The modular runtime under `src/` remains intact and can continue migrating the standalone page component-by-component without reconstructing source content.

## Development Rules
Every major component must have:
- clear ownership
- documentation
- debug notes
- change tracking
