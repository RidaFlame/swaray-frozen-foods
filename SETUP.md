# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure EmailJS** (Required for Contact Form)
   
   Edit `src/pages/Contact.jsx` and replace:
   - `YOUR_SERVICE_ID` with your EmailJS service ID
   - `YOUR_TEMPLATE_ID` with your EmailJS template ID
   - `YOUR_PUBLIC_KEY` with your EmailJS public key
   
   To get these credentials:
   1. Sign up at https://www.emailjs.com/
   2. Create an email service (Gmail, Outlook, etc.)
   3. Create an email template with these variables:
      - `{{to_email}}` - Destination email (will be set to ririda6680@gmail.com)
      - `{{from_name}}` - Sender's name
      - `{{from_email}}` - Sender's email
      - `{{company}}` - Company name (optional)
      - `{{phone}}` - Phone number
      - `{{message}}` - Message content

3. **Add Product Images** (Optional)
   
   The products reference images in `/images/` directory. You can:
   - Add actual product images to `public/images/`
   - Or the app will automatically use placeholder images
   
   Image structure:
   ```
   public/
     images/
       seafood/
         shrimp-premium.jpg
         salmon-fillet.jpg
       vegetables/
         mixed-vegetables.jpg
         spinach-leaves.jpg
       meat/
         beef-tenderloin.jpg
         chicken-breast.jpg
   ```

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- `primary`: #5f3a47
- `secondary`: #494539
- `tertiary`: #f4dabc

### Products
Edit `src/data/products.json` to add/modify products. Each product should have:
- `id`: Unique identifier
- `category`: "seafood", "vegetables", or "meat"
- `images`: Array of image paths
- `translations`: Object with `fr`, `en`, `ar` translations
- `specs`: Product specifications

### Translations
Edit files in `src/i18n/locales/` to modify translations:
- `fr.json` - French translations
- `en.json` - English translations
- `ar.json` - Arabic translations

## Notes

- The website is fully static - no backend required
- All product data is stored in `products.json`
- WhatsApp button links to: +212 637 102 373
- Contact form sends emails to: ririda6680@gmail.com
- RTL (Right-to-Left) layout automatically activates for Arabic

