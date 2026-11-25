SHOPER – PROFESSIONAL MULTI-PAGE STORE (FIREBASE LIVE ADMIN)
============================================================

यह संस्करण GitHub Pages/Hostinger static hosting पर चलता है और live store data Firebase से पढ़ता है।

मुख्य पेज:
- index.html – Home
- shop.html – Products / Shop
- contact.html – Contact
- admin.html – Admin dashboard

ज़रूरी सेटअप:
1. FIREBASE-SETUP-HINDI.txt को ध्यान से पढ़ें और Firebase Authentication, Realtime Database Rules तथा Storage Rules सेट करें।
2. Firebase Authentication में अपना Admin email/password स्वयं बनाएं। पुराना demo username/password अब काम नहीं करता।
3. ZIP के अंदर की सभी files और assets folder को GitHub repository root में upload करके पुरानी files replace करें।
4. अपना GitHub Pages URL खोलें। Admin URL के अंत में /admin.html लगाएं।
5. पहली बार Admin > Import / Export से पुरानी site-data.json import करें।

अब Admin में Product Add/Edit/Delete, Categories, Store Design, Logo, Visibility और Contact settings Firebase में save होंगे और public pages पर live update होंगे। Product/logo images Firebase Storage में upload होंगी।

नोट: WhatsApp order flow अभी WhatsApp message खोलता है; order database में save नहीं होता।
\nORDER SYSTEM: ग्राहक Product detail में WhatsApp Order या Website Order (Admin Panel) चुन सकता है। दोनों का order Firebase Realtime Database के orders node में सेव होगा। Admin Panel > Orders में orders और status manage करें। Firebase Rules के लिए FIREBASE-SETUP-HINDI.txt देखें।\n