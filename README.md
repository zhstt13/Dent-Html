# Dent-Html

Interactive dental/biochemistry learning interface with a production-ready standalone study page and a modular migration scaffold.

## Production Entry Point
- `index.html` = full standalone **Protein Metabolism · Session 05** experience
- Includes lecture content, flashcards, topic quiz, analytics, settings, local progress storage, and responsive UI
- The embedded branded hero image is web-optimized to keep the standalone page substantially lighter

## Modular Architecture
- `src/components/` = component markup and component CSS
- `src/scripts/` = application/runtime controllers
- `src/styles/` = global tokens, base, responsive and motion layers
- `content/` = structured-content experiments and schemas
- `docs/` = architecture and migration status
- `tests/` = dependency-free static smoke checks
- `versions/` = stable checkpoints

## Current Migration State
The original full Session 05 HTML source has now been imported into the repository and is the production `index.html`.

The `src/` modular runtime remains as a separate migration scaffold for future decomposition. It should not be treated as the current production source until the full standalone page has been migrated component-by-component without feature loss.

## Design Layer
The production page now has a premium study UI with:
- branded session masthead
- glass/sticky navigation
- stronger visual hierarchy for lecture sections
- upgraded callouts, fact cards, diagrams, tables and memory hooks
- redesigned flashcards, quiz states, analytics and modal surfaces
- light/dark/sepia theme compatibility
- mobile-specific layout refinements
- reduced-motion support

## Source Preservation
Git history preserves the pre-redesign full import:
- Full source import: `2836c38949e77130e29f7c77dd1671b070267b3f`
- Premium redesign: `f3dd4a42d2e556fc11ed23d9154e18d00a7c48c7`

## Development Rules
Every major component should keep:
- clear ownership
- documentation
- debug notes
- change tracking
- no silent feature removal during modular migration
