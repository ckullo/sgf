# SGF Indonesia Company Profile Website

A modern, responsive React-based company profile website for SGF Indonesia, specializing in government procurement solutions and LKPP requirements.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Display of completed projects with filtering capabilities
- **Team Section**: Professional team member profiles
- **Client Testimonials**: Customer feedback and success stories
- **SEO Optimized**: Built with SEO best practices in mind

## 📋 Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Navigate to the project directory:
```bash
cd sgf-company-profile
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```
The application will be available at `http://localhost:3000`

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
sgf-company-profile/
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Team.jsx
│   │   ├── Clients.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/            # Content configuration
│   │   └── content.js   # All website content (easy to modify)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── public/              # Static assets
├── index.html           # HTML entry point
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## 🎨 Customization

### Updating Content

All website content can be easily modified in the `src/data/content.js` file. This includes:

- Company information
- About section content
- Services descriptions
- Team member profiles
- Client list
- Portfolio projects
- Testimonials

### Changing Colors

To change the website color scheme, edit the `tailwind.config.js` file:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',    // Change primary color
      secondary: '#1e40af',  // Change secondary color
      accent: '#3b82f6',     // Change accent color
    }
  }
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## 🔧 Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling and validation
- **React Icons** - Icon library

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary and confidential. All rights reserved by SGF Indonesia.

## 📞 Contact

For any questions or support, please contact:
- Email: info@sgfindonesia.com
- Phone: +62 21 1234 5678
- Website: https://sgfindonesia.com

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

---

Made with ❤️ by SGF Indonesia Development Team