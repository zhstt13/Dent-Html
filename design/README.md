# Dent HTML — Design Source of Truth

این پوشه مرجع اصلی طراحی نسل بعدی Dent HTML است.

## وضعیت

- **Implementation status:** Design-first / implementation gated
- **Current production:** `index.html`
- **Design authority:** فایل‌های این پوشه
- **Visual reference:** Figma
- **Figma file:** https://www.figma.com/design/rUMTqCZUJyxYhxkm5GW747
- **Primary direction:** Dark-first Clinical Editorial Biotech
- **Primary surfaces:** Lecture / Flashcards / Quiz / Analytics
- **Primary device:** Mobile first, then desktop adaptation

## قانون اصلی

تا وقتی `05_IMPLEMENTATION_GATE.md` اجازه ندهد، بازطراحی جدید نباید مستقیم روی `index.html` پیاده شود.

هدف این تصمیم جلوگیری از چرخه‌ی قبلی است:

1. اضافه‌کردن CSS بدون تغییر composition
2. افزایش glow / blur / fixed layers
3. ظاهر شلوغ‌تر بدون hierarchy بهتر
4. افت performance و لگ اسکرول
5. ایجاد باگ در stateهای تعاملی
6. دوباره‌کاری بعد از پیاده‌سازی

## فایل‌ها

- `00_MASTER_DESIGN_SPEC.md` — تعریف کامل محصول و جهت نهایی طراحی
- `01_SCREEN_AND_STATE_MAP.md` — نقشه‌ی صفحه‌ها، stateها و جریان‌ها
- `02_DESIGN_SYSTEM.md` — رنگ، تایپوگرافی، spacing، radius، motion و component language
- `03_RESPONSIVE_AND_PERFORMANCE.md` — رفتار responsive و بودجه‌ی عملکرد
- `04_FIGMA_HANDOFF.md` — قرارداد بین GitHub و Figma
- `05_IMPLEMENTATION_GATE.md` — شرط شروع و ترتیب پیاده‌سازی
- `tokens.json` — توکن‌های machine-readable
- `state-map.json` — state map قابل استفاده برای توسعه و QA

## ترتیب تصمیم‌گیری در تعارض

1. Design decision ثبت‌شده در این پوشه
2. Figma frame تأییدشده
3. رفتار موجود و سالم production
4. تصمیم موردی در زمان implementation

اگر Figma و این spec با هم تعارض داشتند، spec برنده است مگر اینکه تغییر جدید به‌صورت صریح در GitHub ثبت شود.

## تعریف Done برای طراحی

طراحی زمانی آماده‌ی implementation است که:

- همه‌ی صفحه‌های اصلی و stateهای لازم تعریف شده باشند.
- mobile و desktop رفتار مشخص داشته باشند.
- محتوا برای ایجاد ظاهر بهتر قربانی نشده باشد.
- هیچ interaction مهمی به حدس توسعه‌دهنده وابسته نباشد.
- performance budget قابل سنجش باشد.
- visual system با یک hero و چند کارت نمایشی اشتباه گرفته نشده باشد.
- stateهای Quiz و Flashcard قبل و بعد از پاسخ از هم جدا باشند.
- QA checklist در implementation gate پاس شود.
