VIKKA SIMPLE STORE — INSTALLATION

इस वेबसाइट में:
- Customer products देख सकता है, cart बना सकता है और order WhatsApp पर भेज सकता है।
- Admin panel से product add/edit/delete कर सकते हैं।
- कोई database/PHP जरूरी नहीं। GitHub Pages, Hostinger या static hosting पर चलती है।

सबसे जरूरी सेटअप:
1. config.js खोलें।
2. whatsappNumber में अपना WhatsApp नंबर country code सहित लिखें।
   उदाहरण: भारत का नंबर 9876543210 हो तो 919876543210 लिखें।
   +, space या dash न लगाएँ।
3. index.html खोलकर test करें। Local test में browser security के कारण products.json fetch न चले तो ZIP को hosting पर upload करके जाँचें या VS Code Live Server इस्तेमाल करें।

HOSTINGER:
1. hPanel > Websites > Manage > File Manager > public_html
2. ZIP upload करें और Extract करें।
3. ZIP के अंदर की सभी फाइलें सीधे public_html में रखें (index.html public_html के root में होना चाहिए)।
4. अपना domain खोलें।

GITHUB PAGES:
1. GitHub पर नया Public repository बनाएँ।
2. ZIP extract करके सभी files repository के root में upload करें।
3. Settings > Pages > Deploy from a branch > main > /(root) > Save.
4. GitHub Pages URL पर site खुलेगी।

PRODUCT ADD/EDIT:
1. वेबसाइट के URL के बाद /admin.html खोलें।
2. Product जोड़ें या edit/delete करें।
3. Download products.json दबाएँ।
4. Download हुई products.json को Hosting/GitHub repository के root में पुरानी products.json की जगह upload/commit करें।
5. Product image के लिए सार्वजनिक image URL डालें। अपनी image hosting में assets folder में upload करके assets/photo.jpg जैसा path भी दे सकते हैं।

IMPORTANT LIMITATION:
- Admin panel में बदलाव पहले आपके browser में ही बनते हैं। Download की हुई products.json को hosting पर replace करने के बाद ही सभी customers को update दिखेगा।
- WhatsApp order बटन WhatsApp chat खोलता है और message तैयार करता है। ग्राहक को WhatsApp में Send दबाना होगा।
- यह वेबसाइट खुद payment collect नहीं करती, courier booking/tracking नहीं करती और order database में save नहीं करती।
- Admin page पर कोई password login नहीं है। URL सार्वजनिक हो सकता है; इसे केवल भरोसेमंद व्यक्ति के साथ साझा करें। यह सरल starter version है।
- Order तभी आपके WhatsApp पर आएगा जब config.js में सही नंबर सेट होगा और ग्राहक WhatsApp में Send दबाएगा।
