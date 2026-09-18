# Dent-Html Integration Status

## Current Phase
Runnable modular shell complete; original-content migration pending.

## Completed
- Root production entry point added at `index.html`.
- Development entry point aligned at `src/app/index.html`.
- Header, hero, navigation, lecture, flashcard, quiz and modal mount points registered.
- Runtime now resolves component paths from the loaded app script, so nested and root entry points use the same loader.
- Component styles are loaded per component.
- Navigation controller is wired to component targets.
- Flashcard controller and markup are wired.
- Quiz controller is browser-script compatible and wired to selectable options.
- Theme controller is included in the entry points.
- Static smoke test added for component/runtime wiring.

## Known Constraint
The original full Dent HTML source is not present in this repository. Existing header, hero, lecture and other content is still placeholder/foundation content and must not be treated as a faithful migration of the original design.

## Next Execution Order
1. Add the original HTML snapshot to the repository.
2. Map each original section to its component owner.
3. Move original markup into component files without changing behavior.
4. Move original CSS into component/global layers.
5. Move original JavaScript into controllers.
6. Run responsive and visual regression QA.
7. Create a stable release checkpoint under `versions/`.
