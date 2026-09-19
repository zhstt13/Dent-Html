# Dent HTML — Master Design Spec v1

## 1. Product Definition

Dent HTML یک **Study Experience فارسی برای علوم دندانپزشکی و بیوشیمی** است، نه یک landing page و نه یک جزوه‌ی HTML تزئین‌شده.

محصول باید چهار کار را به‌ترتیب انجام دهد:

1. **Understand** — فهم مطلب در Lecture
2. **Recall** — بازیابی فعال در Flashcards
3. **Assess** — سنجش در Quiz
4. **Adapt** — تصمیم بعدی در Analytics

تجربه باید برای مطالعه‌ی طولانی، مرور سریع و استفاده‌ی روزانه روی موبایل مناسب باشد.

---

## 2. Design North Star

### Clinical Editorial Biotech

زبان بصری نهایی ترکیبی از سه کیفیت است:

- **Clinical:** دقیق، تمیز، کنترل‌شده و قابل اعتماد
- **Editorial:** typography و composition قوی برای محتوای طولانی
- **Biotech:** هویت علمی مدرن از طریق diagram، network، labels و data visualization

### چیزی که نمی‌خواهیم

- cyberpunk
- dashboard شلوغ
- glassmorphism روی همه‌چیز
- glow روی همه‌ی کارت‌ها
- کارت داخل کارت داخل کارت
- gradient به‌عنوان جایگزین hierarchy
- animation دائمی
- fixed elementهای متعدد
- hero عظیم که مطالعه را عقب بیندازد
- نسخه‌ی موبایل به‌عنوان desktop کوچک‌شده

---

## 3. UX Principles

### P1 — Content before decoration
هر عنصر بصری باید یکی از این کارها را انجام دهد:
- فهم hierarchy
- حفظ context
- کاهش بار شناختی
- نشان‌دادن state
- کمک به تصمیم بعدی

در غیر این صورت حذف می‌شود.

### P2 — One dominant task per state
در هر state فقط یک هدف اصلی برجسته است.

مثال:
- Lecture: مطالعه
- Flashcard Front: یادآوری
- Flashcard Back: ارزیابی اعتماد
- Quiz Question: انتخاب پاسخ
- Quiz Feedback: فهم اشتباه
- Analytics: انتخاب مرور بعدی

### P3 — Progressive disclosure
اطلاعات فرعی تا زمان نیاز پنهان یا کم‌رنگ هستند.

### P4 — Motion communicates state
motion فقط برای:
- تغییر tab
- flip/reveal
- feedback
- progress
- modal
- focus transition

استفاده می‌شود.

### P5 — Mobile is a native composition
mobile باید layout و navigation خودش را داشته باشد.

---

## 4. Information Architecture

### Global shell
- Product mark
- Session identity
- Primary navigation
- Reading/progress indicator
- Settings access

### Primary areas
- Lecture
- Flashcards
- Quiz
- Analytics

### Secondary
- Settings
- Reset
- Import/export progress
- Theme
- Font controls

---

## 5. Entry / Session Hero

Hero باید «ورودی جلسه» باشد، نه پوستر تبلیغاتی.

### محتوا
- Biochemistry label
- Session number
- عنوان فارسی
- توضیح یک‌خطی
- Learning objectives
- current progress
- Continue action
- Secondary recall action
- Session stats

### Visual anchor
به‌جای عکس stock یا glow تزئینی:

**Metabolic Atlas**
- مرکز: Amino Acid
- خروجی‌ها: Urea / TCA / Glucose / Ketone
- خطوط ساده و ثابت
- بدون animation دائمی
- قابل تبدیل به SVG سبک

### Desktop
- copy و actions سمت راست
- atlas سمت چپ
- حداکثر ارتفاع تقریبی: 360–430px

### Mobile
- visual atlas کامل حذف یا خلاصه می‌شود.
- عنوان و progress در اولویت است.
- learning objectives به chips کوتاه تبدیل می‌شوند.

---

## 6. Lecture Experience

Lecture مهم‌ترین بخش محصول است و باید بیشترین polish را داشته باشد.

### Desktop layout
- Top navigation
- Reading rail / TOC
- Main reading surface

### Mobile layout
- Compact top bar
- Content-first reading
- Bottom navigation
- TOC به drawer/sheet تبدیل شود، نه ستون ثابت

### Reading width
متن طولانی نباید تمام عرض صفحه را پر کند.

هدف:
- Desktop text measure: حدود 60–72 کاراکتر فارسی در هر خط
- Mobile: عرض طبیعی viewport با padding 16–20px

### Content block taxonomy

#### Section Heading
- index
- title
- optional summary

#### Big Idea
برای مفهوم مرکزی هر بخش.

#### Concept Callout
توضیح مفهومی کوتاه.

#### Clinical Bridge
رابطه‌ی مطلب با اهمیت بالینی.

#### Memory Hook
فقط برای mnemonic واقعی، نه هر نکته.

#### Comparison
برای دو یا سه مفهوم قابل مقایسه.

#### Pathway
نمایش مرحله‌ای مسیر.

#### Formula / Reaction
سطح مجزا با typography مناسب.

#### Table
سطح ساده و خوانا؛ sticky header فقط در صورت نیاز.

#### Key Fact
برای اطلاعاتی که باید سریع دیده شود.

### ممنوع
- هر پاراگراف در کارت جدا
- shadow سنگین روی متن
- border روی همه‌ی بلوک‌ها
- انیمیشن scroll reveal برای تک‌تک پاراگراف‌ها

---

## 7. Flashcards

Flashcards باید Active Recall را حفظ کند.

### Front state
نمایش:
- progress
- deck/category
- prompt
- neutral conceptual visual
- reveal action

**جواب نباید به هیچ شکل روی Front لو برود.**

### Back state
نمایش:
- answer
- concise explanation
- optional memory hook
- confidence actions:
  - نمی‌دانستم
  - تقریباً
  - بلد بودم

### Desktop
- progress rail کوچک
- card area مرکزی

### Mobile
- card تقریباً تمام عرض
- actions در پایین state
- بدون 3D سنگین
- flip می‌تواند با fade + rotateY محدود پیاده شود، ولی باید reduced-motion fallback داشته باشد.

---

## 8. Quiz

Quiz سه state اصلی دارد.

### Q1 — Unanswered
- question number
- difficulty/topic
- question
- options
- submit disabled تا انتخاب

### Q2 — Correct feedback
- انتخاب کاربر
- correct marker
- explanation
- next action

### Q3 — Incorrect feedback
- انتخاب اشتباه مشخص
- جواب صحیح مشخص
- explanation
- optional “مرور مبحث”

### Rule
Feedback نباید قبل از submit در DOM بصری فعال باشد.

### Visual behavior
رنگ فقط signal است:
- success = سبز
- incorrect = قرمز
- selected neutral = cyan/blue

رنگ نباید تنها نشانه‌ی state باشد؛ icon/text label هم لازم است.

---

## 9. Analytics

Analytics قرار نیست dashboard مدیریتی باشد.

فقط اطلاعاتی نمایش داده شود که مطالعه‌ی بعدی را عوض می‌کند.

### Required metrics
- Overall accuracy
- Answered count
- Weak topic count

### Mastery list
برای هر topic:
- name
- mastery %
- bar
- optional trend

### Next Best Action
مهم‌ترین block صفحه:
- 1–3 پیشنهاد مرور
- دلیل کوتاه
- CTA برای شروع مرور

### Optional later
- recent mistakes
- spaced repetition queue
- streak

این موارد در v1 الزامی نیستند.

---

## 10. Navigation

### Desktop
Top nav:
- Lecture
- Flashcards
- Quiz
- Analytics
- Settings

Reading rail فقط داخل Lecture.

### Mobile
Bottom navigation:
- جزوه
- کارت
- آزمون
- تحلیل

Settings در top bar.

### No duplicate navigation
Floating side rail قبلی حذف می‌شود؛ navigation نباید دو بار تکرار شود.

---

## 11. Settings

Settings باید modal/sheet ساده باشد.

Controls:
- Theme
- Font size
- Line height
- Reset progress
- Export/import progress در صورت وجود runtime support

### Mobile
Bottom sheet ترجیح دارد.

---

## 12. Empty / Error / Loading States

### Empty analytics
«هنوز داده‌ی کافی برای تحلیل نداریم.»

### Quiz no selection
submit disabled + hint.

### Flashcards complete
summary + restart/review weak cards.

### Storage error
state باید قابل ادامه باشد؛ خطای localStorage نباید کل app را بشکند.

### Loading
از skeleton فقط برای داده‌ی واقعاً async استفاده شود. محتوای static نباید loading fake داشته باشد.

---

## 13. Visual Personality

### Base
- dark navy / charcoal
- cyan signal
- mint learning/success
- violet memory/concept
- amber warning/clinical

### Light
در v1 طراحی ثانویه است.
Light نباید صرفاً invert رنگ Dark باشد.

### Surfaces
حداکثر سه سطح اصلی:
1. Canvas
2. Surface
3. Elevated/Subtle

---

## 14. Figma Status

Figma:
https://www.figma.com/design/rUMTqCZUJyxYhxkm5GW747

موجود:
- Foundations
- Desktop Lecture
- Desktop Flashcards
- Desktop Flashcard Answer
- Desktop Quiz feedback draft
- Desktop Analytics
- Mobile Lecture
- Mobile Flashcards
- Mobile Flashcard Answer
- Mobile Quiz question/feedback draft
- Mobile Analytics

به‌دلیل محدودیت Starter، GitHub مرجع تصمیم‌هاست و Figma مرجع visual composition.

---

## 15. Non-negotiable Invariants

در implementation:
- محتوای آموزشی حذف نشود.
- منطق فلش‌کارت حفظ شود.
- منطق Quiz حفظ شود.
- local progress حفظ شود.
- settings سالم بماند.
- accessibility با appearance معاوضه نشود.
- نسخه‌ی جدید نباید برای رسیدن به ظاهر بهتر performance را خراب کند.

---

## 16. Definition of Premium

Premium یعنی:
- hierarchy قوی
- whitespace هدفمند
- typography دقیق
- visual anchor اختصاصی
- state design کامل
- microinteraction کنترل‌شده
- consistency
- سرعت

Premium یعنی «تصمیم بهتر»، نه «افکت بیشتر».
