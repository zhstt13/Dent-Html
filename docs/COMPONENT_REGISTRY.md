# Dent-Html Component Registry

## Purpose
Central registry for maintainable HTML architecture.

## Components

| Component | Responsibility | Architecture Status | Original Content Migration |
|---|---|---|---|
| Header | Branding and header actions | Mounted | Pending original source |
| Hero | Main visual introduction | Mounted | Pending original source |
| Navigation | Section navigation | Mounted + controller wired | Pending original styling/content |
| Lecture | Educational content blocks | Mounted | Pending original source |
| Flashcard Engine | Interactive cards | Mounted + controller wired | Pending original data/content |
| Quiz Engine | Questions and answer selection | Mounted + controller wired | Pending original data/logic |
| Modal | Shared modal mount | Mounted | Pending original behavior/content |
| Motion System | Shared reusable animation layer | Foundation ready | Pending original motion migration |
| Responsive Layer | Mobile/Desktop adaptation | Foundation ready | Pending original responsive rules |

## Rule
Every migrated component must preserve:
- original content and behavior
- clear owner file
- dependencies
- debug notes
- change history
