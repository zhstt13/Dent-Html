# Dent HTML — Screen & State Map

## 1. Global Application State

```
APP
├── Lecture
│   ├── Reading
│   ├── TOC open
│   └── Settings overlay
├── Flashcards
│   ├── Front
│   ├── Back
│   ├── Confidence recorded
│   └── Deck complete
├── Quiz
│   ├── Setup
│   ├── Question / unanswered
│   ├── Question / selected
│   ├── Feedback / correct
│   ├── Feedback / incorrect
│   └── Result
└── Analytics
    ├── No data
    └── Data available
```

---

## 2. Lecture

### L0 — Session entry
Primary action: ادامه مطالعه

Secondary:
- مرور فلش‌کارت
- settings

### L1 — Reading
Visible:
- current section
- reading progress
- main content

Desktop:
- TOC rail

Mobile:
- TOC hidden behind trigger

### L2 — TOC active
Current anchor highlighted.
Click/press:
- scroll to section
- focus section heading
- mobile drawer closes

### L3 — Settings open
Background interaction disabled.
Escape/back closes.

---

## 3. Flashcards

### F0 — Deck ready
- card count
- category/topic
- start

### F1 — Front
Contains:
- card index
- prompt
- optional neutral diagram
- reveal

Must not contain:
- answer
- answer initials
- answer-highlighted molecules
- confidence actions before reveal

### F2 — Back
Contains:
- answer
- explanation
- memory hook only if useful
- confidence actions

### F3 — Confidence committed
Update:
- progress
- mastery data
- next card

### F4 — Complete
- reviewed count
- strong / weak summary
- review weak cards
- restart

---

## 4. Quiz

### Q0 — Setup
- question count
- topic
- start action

### Q1 — Unanswered
Submit disabled.

### Q2 — Selected
One option selected.
Submit enabled.

### Q3 — Correct
- user selection stays visible
- correct label
- explanation
- next

### Q4 — Incorrect
- wrong selection marked
- correct option revealed
- explanation
- review topic shortcut
- next

### Q5 — Results
- score
- accuracy
- topic breakdown
- mistakes
- analytics shortcut

---

## 5. Analytics

### A0 — Empty
Message:
«هنوز داده‌ی کافی برای تحلیل عملکرد نداریم.»

CTA:
- شروع آزمون
- مرور فلش‌کارت

### A1 — Populated
Order:
1. key metrics
2. mastery
3. next best action
4. recent mistakes (optional)

---

## 6. Desktop Frame Inventory

Required final frames:

- Desktop / Lecture
- Desktop / Flashcards Front
- Desktop / Flashcards Back
- Desktop / Quiz Setup
- Desktop / Quiz Question
- Desktop / Quiz Correct
- Desktop / Quiz Incorrect
- Desktop / Quiz Result
- Desktop / Analytics Empty
- Desktop / Analytics Populated
- Desktop / Settings

---

## 7. Mobile Frame Inventory

Required final frames:

- Mobile / Lecture
- Mobile / TOC Sheet
- Mobile / Flashcards Front
- Mobile / Flashcards Back
- Mobile / Flashcards Complete
- Mobile / Quiz Setup
- Mobile / Quiz Question
- Mobile / Quiz Correct
- Mobile / Quiz Incorrect
- Mobile / Quiz Result
- Mobile / Analytics Empty
- Mobile / Analytics Populated
- Mobile / Settings Sheet

---

## 8. Cross-state Rules

### Rule 1
State تغییر می‌کند؛ shell بی‌دلیل دوباره ساخته نمی‌شود.

### Rule 2
هر state باید یک primary action مشخص داشته باشد.

### Rule 3
هیچ state نباید از رنگ به‌تنهایی برای انتقال معنی استفاده کند.

### Rule 4
در mobile، action اصلی باید با یک دست قابل دسترس باشد.

### Rule 5
بازخورد درست/غلط فقط بعد از ثبت پاسخ نمایش داده شود.

### Rule 6
Back فلش‌کارت فقط بعد از reveal قابل مشاهده است.

---

## 9. Keyboard / Accessibility Map

Desktop:
- Tab: focus traversal
- Enter/Space: activate
- Escape: close modal/sheet
- Arrow keys: optional flashcard/quiz navigation only if conflict ایجاد نکند

Focus:
- visible
- 2px minimum
- high contrast

Touch:
- minimum interactive target: 44×44px
