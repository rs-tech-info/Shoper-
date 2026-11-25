SHOPER STORE – INSTALLATION GUIDE (Hindi)

FEATURES
- Responsive customer storefront for mobile and computer.
- Products can have up to 4 images uploaded from your device (no image URLs).
- Customer selects product, enters name, phone, address and quantity.
- Order details open in WhatsApp to send to the store owner.
- Admin dashboard to add, edit and delete products.
- Works on GitHub Pages, Hostinger static hosting and other static hosting.

FILES
index.html       Customer website
admin.html       Admin login/dashboard
style.css        Design
app.js           Storefront + WhatsApp order
admin.js         Admin product manager
products.json    Published product data

DEFAULT ADMIN LOGIN
Username: adminhero
Password: Hero@1998

IMPORTANT SECURITY WARNING
This is a simple static starter. Login credentials are visible in admin.js and are NOT secure for a public production store. Anyone who inspects the JavaScript can discover them. Change the credentials before publishing, and do not reuse this password anywhere else. For secure admin login use a backend/server-side authentication system.

SETUP
1. Extract this ZIP on your computer.
2. Open app.js in Notepad.
3. Find: const WA_NUMBER = "919876543210";
4. Replace with your WhatsApp number in international format, digits only, e.g. 91XXXXXXXXXX. Do not add + or spaces.
5. Upload ALL files (not the ZIP) into the website root:
   - Hostinger: public_html
   - GitHub Pages: repository root (or configured publishing folder)
6. Open https://your-domain/ and https://your-domain/admin.html

ADD PRODUCTS
1. Open /admin.html and login.
2. Add product name, price, optional old price, description.
3. Choose 1 to 4 product image files from your phone/computer.
4. Save product.
5. Click "Export store data". A products.json file downloads.
6. Upload the downloaded products.json to the website root, replacing the old products.json.
7. Refresh the customer website.

ORDER FLOW
Customer order opens WhatsApp with product, quantity, name, phone and address filled in. Customer must tap Send in WhatsApp. This static version does not store orders in a central database or automatically notify you if customer does not send the WhatsApp message.

PRODUCT STORAGE
The admin saves changes in the current browser until export. The exported products.json contains product images embedded as base64 data, so the image files do not need separate uploads. Upload the new products.json after changes to publish them for all visitors. Large image files make products.json large; use compressed images (ideally under 500 KB each).

GITHUB PAGES
Upload all files to a GitHub repository and enable Settings > Pages. GitHub Pages supports static HTML/CSS/JS. It does not run PHP or server-side databases.

HOSTINGER
Upload all extracted files to public_html. This version is static and does not require PHP or a database.

For real secure multi-user admin and centrally saved orders, a server/backend upgrade is required.
