# Portfolio Frontend

Website portfolio publik yang dibangun dengan React, Vite, dan Tailwind CSS dengan support bilingual.

## 📋 Daftar Isi

- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Menjalankan Project](#menjalankan-project)
- [Struktur Project](#struktur-project)
- [Customization](#customization)
- [Bilingual Support](#bilingual-support)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## ✨ Fitur

- ✅ **Responsive Design** - Mobile, tablet, desktop compatible
- ✅ **Bilingual Support** - Indonesian & English
- ✅ **Dark Mode** - Toggle light/dark theme
- ✅ **Smooth Animations** - Framer Motion effects
- ✅ **Project Gallery** - Showcase portfolio projects
- ✅ **Experience Timeline** - Work experience showcase
- ✅ **Skills Showcase** - Display technical skills
- ✅ **Contact Form** - Message submissions
- ✅ **SEO Optimized** - Meta tags & structured data
- ✅ **Performance** - Fast loading dengan Vite

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **HTTP Client**: Axios
- **State Management**: React Context API
- **Package Manager**: npm

## 📦 Prerequisites

Pastikan sudah terinstall:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0
- **Backend API** running di `http://localhost:5000` (untuk data)

## 🚀 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/HUSNUL-MUTMAINNAH-sys/portfolio-frontend.git
cd portfolio-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```bash
cp .env.example .env
```

Edit file `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

## ⚙️ Konfigurasi

### Environment Variables

```env
# Development
VITE_API_URL=http://localhost:5000/api

# Production (set di Vercel/hosting provider)
VITE_API_URL=https://your-backend-api.com/api
```

### Backend Connection

Pastikan backend API sudah running:

```bash
# Terminal lain
cd ../portfolio-backend
npm run dev
```

## 🏃 Menjalankan Project

### Development Mode

```bash
npm run dev
```

Application akan berjalan di `http://localhost:5173` dengan hot module replacement.

### Build untuk Production

```bash
npm run build
```

Output akan tersimpan di folder `dist/`

### Preview Build

```bash
npm run preview
```

Preview production build secara lokal sebelum deploy.

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build untuk production
npm run preview     # Preview production build
npm run lint        # Run ESLint
npm run type-check  # Check TypeScript types
```

## 📁 Struktur Project

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Experience section
│   ├── Skills.tsx      # Skills section
│   ├── TechStack.tsx   # Tech stack section
│   ├── FeaturedProjects.tsx  # Featured projects
│   ├── ProjectGallery.tsx    # Project gallery
│   ├── Achievements.tsx      # Achievements section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   ├── Reveal.tsx      # Scroll reveal animation
│   ├── MouseFollower.tsx     # Mouse follower effect
│   ├── ScrollProgressBar.tsx # Scroll progress indicator
│   ├── LoadingScreen.tsx     # Loading animation
│   ├── LanguageToggle.tsx    # Language switcher
│   └── ...
│
├── context/            # React Context
│   ├── DataContext.tsx     # Portfolio data context
│   └── LanguageContext.tsx # Language/i18n context
│
├── data/              # Static data
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── achievements.ts
│   └── ...
│
├── hooks/             # Custom hooks
│   └── useDarkMode.ts # Dark mode toggle
│
├── services/          # API & services
│   └── api.ts         # Axios instance & API calls
│
├── types/             # TypeScript types
│   └── index.ts
│
├── public/            # Static assets
│   ├── favicon.svg
│   ├── profile-placeholder.svg
│   └── projects/      # Project images
│
├── App.tsx            # Main App component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎯 Sections

### 1. Navbar
- Logo/name
- Navigation links
- Language toggle
- Dark mode toggle

### 2. Hero
- Profile photo
- Introduction
- CTA buttons

### 3. About
- About me description
- Skills overview
- Download CV button

### 4. Experience
- Timeline of work experiences
- Companies & roles
- Dates & descriptions

### 5. Skills
- Technical skills
- Skill categories
- Proficiency levels

### 6. Tech Stack
- Programming languages
- Frameworks & libraries
- Tools & platforms

### 7. Featured Projects
- Showcase 3-6 featured projects
- Project cards dengan images
- Links to project details

### 8. Project Gallery
- Full gallery of all projects
- Filter by category
- Search functionality

### 9. Achievements
- Certifications
- Awards
- Accomplishments

### 10. Contact
- Contact form
- Social links
- Email & phone

### 11. Footer
- Copyright info
- Quick links
- Social media

## 🌍 Bilingual Support

### Language Toggle

```tsx
// In components
import { useLanguage } from '../context/LanguageContext';

const MyComponent = () => {
  const { language, setLanguage } = useLanguage();
  const text = translations[language];
  
  return <div>{text.title}</div>;
};
```

### Supported Languages

- 🇮🇩 Indonesian (id)
- 🇬🇧 English (en)

### Data Structure

```typescript
// Bilingual content example
const project = {
  id: 1,
  title: {
    en: "Project Name",
    id: "Nama Proyek"
  },
  description: {
    en: "Description in English",
    id: "Deskripsi dalam Bahasa Indonesia"
  }
};
```

## 🌙 Dark Mode

### Toggle Dark Mode

```tsx
import { useDarkMode } from '../hooks/useDarkMode';

const MyComponent = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  
  return <button onClick={toggleDarkMode}>Toggle Theme</button>;
};
```

### Tailwind Dark Mode

Project menggunakan Tailwind CSS dark mode. Tambahkan prefix `dark:` untuk dark mode styles:

```jsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content
</div>
```

## ✨ Animations

### Scroll Reveal

```tsx
import { Reveal } from '../components/Reveal';

<Reveal>
  <h1>This will reveal on scroll</h1>
</Reveal>
```

### Framer Motion

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

## 📱 Responsive Design

Project fully responsive dengan breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

```jsx
// Tailwind responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

## 🚢 Deployment

### Deploy ke Vercel (Recommended)

1. **Push ke GitHub**
   ```bash
   git push origin main
   ```

2. **Connect ke Vercel**
   - Buka [Vercel Dashboard](https://vercel.com/)
   - Click "New Project" → Import repository
   - Pilih `portfolio-frontend` repo

3. **Configure Build Settings**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Environment Variables**
   - Set `VITE_API_URL` ke production backend URL
   - Example: `https://your-backend.vercel.app/api`

5. **Deploy**
   - Vercel akan auto-build & deploy
   - Access di URL yang disediakan

### Deploy ke Netlify

1. Push ke GitHub
2. Connect repo di Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Set environment variables
5. Deploy

### Deploy ke GitHub Pages

1. Update `vite.config.ts`:
   ```typescript
   export default {
     base: '/portfolio-frontend/',
     // ...
   }
   ```

2. Build & push:
   ```bash
   npm run build
   git add dist
   git commit -m "Deploy"
   git push
   ```

### Production Checklist

- [ ] Backend API URL sudah diupdate
- [ ] Environment variables configured di hosting
- [ ] Build sukses tanpa errors
- [ ] Data loading dari API works
- [ ] Images display correctly
- [ ] Forms submission works
- [ ] Dark mode works
- [ ] Language toggle works
- [ ] Mobile responsiveness tested
- [ ] Performance optimized (PageSpeed Insights > 90)

## 🎨 Customization

### Colors

Edit `tailwind.config.js` untuk customize theme colors:

```javascript
module.exports = {
  theme: {
    colors: {
      primary: '#3B82F6',
      secondary: '#10B981',
      // ...
    }
  }
}
```

### Fonts

Edit `src/index.css` untuk customize fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
```

### Content

### Data Files

Edit files di `src/data/` untuk update portfolio content:

- `profile.ts` - Profile info
- `projects.ts` - Projects list
- `skills.ts` - Skills
- `experience.ts` - Work experience
- `achievements.ts` - Achievements

## 🐛 Troubleshooting

### Port 5173 Already in Use

```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :5173
kill -9 <PID>
```

### Backend Connection Error

```
Failed to fetch data from API
```

**Solution:**
1. Verify backend running: `http://localhost:5000/api/profile`
2. Check `VITE_API_URL` di `.env`
3. Verify CORS setting di backend
4. Check browser console untuk error details

### Images Not Loading

1. Verify image URLs di data files
2. Check image files exist di `public/` atau backend
3. Verify backend image upload working
4. Check browser console untuk 404 errors

### Dark Mode Not Working

1. Check `useDarkMode` hook
2. Verify localStorage working
3. Check Tailwind CSS config

### Build Fails

```bash
# Clear cache
rm -rf node_modules dist .cache
npm install
npm run build
```

### Language Toggle Not Working

1. Check `LanguageContext.tsx`
2. Verify translations di components
3. Check localStorage untuk language preference

## 📖 Dokumentasi Tambahan

- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/)

## 📝 License

MIT License - Bebas digunakan untuk keperluan personal atau komersial.

## 👤 Author

**HUSNUL-MUTMAINNAH**
- GitHub: [@HUSNUL-MUTMAINNAH-sys](https://github.com/HUSNUL-MUTMAINNAH-sys)
- Portfolio: [Your Portfolio URL]

## 🤝 Contributing

Contributions welcome! Feel free to fork dan submit pull requests.

---

**Last Updated**: August 2026
