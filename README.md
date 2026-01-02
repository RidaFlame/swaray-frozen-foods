# Swaray - Premium Frozen Foods Website

A premium static showcase website for a frozen food company built with React, Vite, and Tailwind CSS.

## Features

- 🌍 **Multilingual Support**: French (default), English, and Arabic with RTL support
- 🎨 **Premium Design**: Clean, modern UI with custom color scheme
- 📱 **Responsive**: Fully responsive design for all devices
- 🛍️ **Product Catalog**: Browse products by category (Seafood, Vegetables, Meat)
- 📧 **Contact Form**: EmailJS integration for quote requests
- 💬 **WhatsApp Integration**: Direct WhatsApp contact button
- ✨ **Animations**: Smooth animations using Framer Motion

## Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router v6** - Routing
- **Framer Motion** - Animations
- **React i18next** - Internationalization
- **EmailJS** - Email service
- **Lucide React** - Icons

## Project Structure

```
swaray-website/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   └── ProductCard.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Catalogue.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Quality.jsx
│   │   └── Contact.jsx
│   ├── data/             # Data files
│   │   └── products.json
│   ├── i18n/             # Internationalization
│   │   ├── config.js
│   │   └── locales/
│   │       ├── fr.json
│   │       ├── en.json
│   │       └── ar.json
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## EmailJS Setup

To enable the contact form, you need to configure EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the following in `src/pages/Contact.jsx`:
   - `serviceId`: Your EmailJS service ID
   - `templateId`: Your EmailJS template ID
   - `publicKey`: Your EmailJS public key

The form will send emails to: `ririda6680@gmail.com`

## Color Scheme

- **Primary**: `#5f3a47` (Deep Maroon/Burgundy)
- **Secondary**: `#494539` (Dark Olive/Charcoal)
- **Tertiary**: `#f4dabc` (Cream/Beige)

## Typography

- **Headings**: Montserrat
- **Body**: Lato

## Contact Information

- **Phone**: +212 637 102 373
- **Email**: ririda6680@gmail.com
- **WhatsApp**: [Click to chat](https://wa.me/212637102373)

## License

All rights reserved © 2024 Swaray

