# Dent-Html Cleanup Audit v1

## هدف
بررسی فایل‌های اضافی، placeholderها و مواردی که قبل از release نهایی نیاز به تصمیم دارند.

## بررسی

### فایل‌های Runtime
- state: حفظ شود
- content loader: حفظ شود
- controllers: حفظ شود
- components: حفظ شود

### موارد نیازمند بررسی دستی
- placeholder components
- snapshot اصلی Dent HTML در صورت وجود
- نسخه‌های migration قدیمی

## تصمیم
هیچ فایل مهمی حذف نشد تا زمانی که وابستگی آن در Runtime به صورت کامل تایید شود.

## وضعیت
Cleanup audit completed.
