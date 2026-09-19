# Content Pipeline Validation

## Invalid content cases

- Missing lesson should not crash runtime.
- Missing flashcards should return an empty collection.
- Missing quizzes should return an empty collection.
- Invalid JSON should be handled by loader errors.

## Runtime flow

Content -> Loader -> Validation -> Controller -> Component

## Current flows

- Flashcard controller consumes content loader path.
- Quiz flow loads quizzes from content data.
