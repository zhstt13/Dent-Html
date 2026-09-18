# Dent-Html

Maintainable modular architecture for the Dent HTML dental learning project.

## Entry Points
- `index.html` = production/static-server entry point
- `src/app/index.html` = development entry point

## Architecture
- `src/components/` = component markup and component CSS
- `src/scripts/` = application/runtime controllers
- `src/styles/` = global tokens, base, responsive and motion layers
- `docs/` = architecture and migration status
- `tests/` = dependency-free static smoke checks
- `versions/` = stable checkpoints

## Run
Serve the repository through an HTTP static server and open `index.html`. Component loading uses `fetch()`, so direct `file://` opening is not a supported runtime mode.

## Current Migration State
The modular runtime is runnable, but the repository does not yet contain the original full Dent HTML snapshot. Placeholder component content must be replaced from the actual original source rather than reconstructed.

## Development Rules
Every major component must have:
- clear ownership
- documentation
- debug notes
- change tracking
