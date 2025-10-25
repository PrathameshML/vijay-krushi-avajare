# Vijay Krushi Avajare - Static Website

**Since 1996** - Agricultural equipment dealer in Takali, Miraj, Sangli, Maharashtra.

## 🚀 Features

- ✅ **Bilingual**: English (default) + Marathi with language toggle
- ✅ **30+ Products**: Power weeders, HTP sprayers, seeders, garden tools, equipment
- ✅ **Responsive Design**: Mobile-first, works on all devices
- ✅ **Fast & Lightweight**: Pure HTML/CSS/JS, no frameworks
- ✅ **SEO Ready**: Meta tags, semantic HTML
- ✅ **Contact Integration**: WhatsApp, phone, email, enquiry form
- ✅ **Product Filtering**: Search and category filters

## 📁 Project Structure

```
vijay_krushi/
├── index.html              # Home page
├── products.html           # Products listing with filters
├── product.html            # Product detail template
├── about.html              # About & store info
├── contact.html            # Contact page with form
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   ├── i18n.js         # Bilingual translations
│   │   ├── main.js         # Site logic
│   │   └── products-data.js # Embedded product data
│   └── placeholder.svg     # Fallback image
├── images/
│   ├── logo.png            # VKA logo
│   └── *.png               # Product images
├── robots.txt              # SEO
├── sitemap.xml             # SEO
└── README.md
```

## 🛠️ Local Development

### Option 1: Python HTTP Server
```bash
cd vijay_krushi
python -m http.server 8000
```
Visit: http://localhost:8000

### Option 2: Node.js HTTP Server
```bash
npx http-server -p 8000
```

### Option 3: VS Code Live Server
Install "Live Server" extension and click "Go Live"

## 📦 Deployment

### Deploy to Netlify (Free)
1. Create account at https://netlify.com
2. Drag & drop the `vijay_krushi` folder
3. Site will be live at `https://your-site.netlify.app`
4. Connect custom domain later

### Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/vijay-krushi.git
git push -u origin main
```
Enable GitHub Pages in repo settings → Pages → Source: main branch

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

## ✏️ Content Management

### Add New Product
Edit `assets/js/products-data.js` and add to the array:
```javascript
{
  "name": "Product Name",
  "name_mr": "उत्पादनाचे नाव",
  "category": "Power Weeder",
  "keywords": ["keyword1", "keyword2"],
  "images": ["images/product.png"],
  "specs": {
    "Engine": "170F",
    "Power": "5.1 kW"
  }
}
```

### Update Contact Info
- **Phone/WhatsApp**: Search & replace `912333214210` in all HTML files
- **Email**: Search & replace `vkaavajare@gmail.com`
- **Address**: Edit `about.html` and `contact.html`

### Add Product Images
1. Place images in `images/` folder
2. Update `images` array in `assets/js/products-data.js`
3. Recommended: Optimize images before uploading

## 🌐 Bilingual Support

Language toggle button switches between English and Marathi. Translations are in `assets/js/i18n.js`.

To add/edit translations:
```javascript
const strings = {
  en: { key: "English text" },
  mr: { key: "मराठी मजकूर" }
};
```

## 📞 Contact Information

- **Phone**: 02333 214210
- **WhatsApp**: [Chat](https://wa.me/912333214210)
- **Email**: vkaavajare@gmail.com
- **Address**: Pate No. 7191, Bapurao Patil Galli, Sonali Naka, Takali Road, Takali - 416 111, Ta. Miraj, Dist. Sangli, Maharashtra

## 🎨 Customization

### Colors
Edit CSS variables in `assets/css/style.css`:
```css
:root {
  --accent: #2d5f2e;    /* Green from logo */
  --accent2: #8b5a3c;   /* Brown from logo */
}
```

### Logo
Replace `images/logo.png` with your logo (recommended: 200x200px PNG with transparency)

## 📊 Analytics (Optional)

Add Google Analytics by inserting before `</head>` in all HTML files:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔒 Form Setup

Contact form uses Formspree. To activate:
1. Sign up at https://formspree.io
2. Create a form
3. Replace `your-id` in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
   ```

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

© 2025 Vijay Krushi Avajare. All rights reserved.

---

**Built with ❤️ for farmers** | Since 1996 | Empowering You
