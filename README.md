# Swaray - Premium Frozen Foods Showcase Website

A premium, modern static showcase website for a frozen food company built with React, Vite, and Tailwind CSS. Features multilingual support (French, English, Arabic) with RTL support for Arabic.

## 🚀 Features

- **Premium Design**: Modern, clean, and appetizing UI with smooth animations
- **Multilingual Support**: French, English, and Arabic with proper RTL layout
- **Responsive Design**: Mobile-first approach, works on all devices
- **Product Catalog**: Browse frozen food products (Seafood, Vegetables, Meat)
- **Contact Forms**: EmailJS integration for quote requests
- **WhatsApp Integration**: Direct ordering via WhatsApp
- **Quality & Certifications**: Showcase company certifications and quality standards
- **Smooth Animations**: Framer Motion for engaging user experience

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **Framer Motion** - Animations
- **React i18next** - Internationalization
- **Lucide React** - Icons
- **EmailJS** - Email Service

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/swaray-frozen-foods.git
cd swaray-frozen-foods
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📝 Configuration

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `src/pages/Contact.jsx`:
   - `serviceId`: Your EmailJS service ID
   - `templateId`: Your EmailJS template ID
   - `publicKey`: Your EmailJS public key

See `EMAILJS_SETUP.md` for detailed instructions.

## 🌐 Languages

- **French (fr)** - Default language
- **English (en)**
- **Arabic (ar)** - With RTL support

Translations are located in `src/i18n/locales/`

## 📁 Project Structure

```
swaray-frozen-foods/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Catalogue.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Quality.jsx
│   │   └── Contact.jsx
│   ├── data/          # Data files
│   │   └── products.json
│   ├── i18n/          # Internationalization
│   │   ├── config.js
│   │   └── locales/
│   ├── hooks/         # Custom hooks
│   ├── App.jsx        # Main app component
│   ├── main.jsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Static assets
├── package.json
└── vite.config.js
```

## 🎨 Design System

- **Primary Color**: `#5f3a47`
- **Secondary Color**: `#494539`
- **Tertiary Color**: `#f4dabc`
- **Heading Font**: Montserrat
- **Body Font**: Lato
- **Arabic Font**: Cairo

## 📄 License

This project is private and proprietary.

## 👤 Contact

For questions or support, please contact the project owner.

---

Built with ❤️ for Swaray Frozen Foods
