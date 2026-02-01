# Saigon Star Yishun - Premium Nail & Lash Salon

[![Netlify Status](https://api.netlify.com/api/v1/badges/[BADGE-ID]/deploy-status)](https://app.netlify.com/sites/[your-site]/deploys)

Modern, SEO-optimized website for Saigon Star Yishun - Singapore's premier nail art and lash extension salon.

## 🌟 Features

### User Experience
- **Modern Design** - Luxury aesthetic with premium brand colors
- **Mobile Responsive** - Optimized for all devices and screen sizes
- **Fast Loading** - Progressive image loading with WebP optimization
- **Smooth Navigation** - HashRouter for seamless page transitions
- **Social Proof** - Google Reviews showcase (800+ reviews, 4.9★ rating)
- **Easy Booking** - WhatsApp integration for instant appointments

### Technical Excellence
- **SEO Optimized** - 40+ meta tags, Schema.org structured data
- **Legal Compliance** - PDPA-compliant Privacy Policy & Terms of Service
- **Performance** - Lazy loading, code splitting, CDN delivery
- **Security** - Security headers, XSS protection, HTTPS enforcement
- **Error Handling** - Error boundaries for graceful failure recovery
- **Accessibility** - WCAG compliance, semantic HTML, screen reader support

### Business Integration
- **Centralized Config** - Single source of truth for business information
- **WhatsApp Booking** - Direct integration with pre-filled messages
- **Click-to-Call** - Phone number links for mobile users
- **Google Maps** - Embedded map with business location
- **Social Media** - Instagram and Facebook integration
- **Review Showcase** - Verified Google reviews with star ratings

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Development

```bash
# Clone repository
git clone https://github.com/nicholsmindset/saigon-star-yishun.git
cd saigon-star-yishun

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment

### Deploy to Netlify (Recommended)

**Quick Deploy:**
1. Click the button below to deploy to Netlify

   [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nicholsmindset/saigon-star-yishun)

2. Connect your GitHub account
3. Configure build settings (auto-detected from netlify.toml)
4. Deploy!

**Manual Deploy:**
See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

### Custom Domain Setup
See [DEPLOYMENT_GUIDE.md#domain-configuration](DEPLOYMENT_GUIDE.md#1-domain-configuration) for DNS and SSL setup.

## 📁 Project Structure

```
saigon-star-yishun/
├── public/                  # Static assets
│   ├── gallery-*.webp      # Real salon images (6 images)
│   ├── sitemap.xml         # SEO sitemap
│   ├── robots.txt          # Search engine instructions
│   └── _redirects          # Netlify routing rules
├── config/
│   └── business.ts         # Centralized business config
├── components/
│   ├── Layout.tsx          # Navigation & Footer
│   ├── ErrorBoundary.tsx   # Error handling
│   └── ProgressiveImage.tsx # Image optimization
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── Services.tsx        # Service catalog
│   ├── Pricing.tsx         # Pricing information
│   ├── Gallery.tsx         # Image portfolio
│   ├── Reviews.tsx         # Google reviews showcase
│   ├── About.tsx           # About the salon
│   ├── Contact.tsx         # Contact information
│   ├── Booking.tsx         # Booking form
│   ├── PrivacyPolicy.tsx   # PDPA compliance
│   └── TermsOfService.tsx  # Legal terms
├── netlify.toml            # Netlify configuration
├── index.html              # HTML entry point (SEO meta tags)
└── package.json            # Dependencies
```

## 🛠️ Technology Stack

### Frontend
- **React 19.2.4** - UI framework
- **TypeScript 5.8.2** - Type safety
- **React Router 7.13.0** - Client-side routing
- **Vite 6.2.0** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling

### Build & Deploy
- **Vite** - Fast HMR and optimized builds
- **Netlify** - Global CDN and deployment
- **GitHub** - Version control and collaboration

### SEO & Analytics
- **Schema.org** - Structured data (BeautySalon type)
- **Open Graph** - Social media sharing
- **Twitter Cards** - Twitter sharing optimization
- **Sitemap.xml** - Search engine indexing
- **Robots.txt** - Crawl instructions

## 🎨 Customization

### Update Business Information

Edit [config/business.ts](config/business.ts):

```typescript
export const BUSINESS_CONFIG = {
  name: 'Saigon Star Yishun',
  contact: {
    phone: '+65 8292 6388',
    whatsapp: '6582926388',
    email: 'hello@saigonstar.sg',
  },
  location: {
    address: 'Blk 291 Yishun Street 22',
    unit: '#01-347',
    city: 'Singapore',
    postalCode: '760291',
  },
  hours: {
    weekday: { days: 'Mon - Fri', open: '11:00 AM', close: '9:00 PM' },
    weekend: { days: 'Sat - Sun', open: '10:00 AM', close: '8:00 PM' },
  },
};
```

### Update Images

Replace images in `/public/` folder:
- `gallery-1.webp` through `gallery-6.webp` - Portfolio images
- Recommended size: 1200x800px
- Format: WebP for best performance

### Update Colors

Edit Tailwind config in `index.html`:

```css
:root {
  --brand-nude: #FAF8F5;
  --brand-blush: #F5E6E8;
  --brand-gold: #C5A572;
  --brand-dark: #2C2C2C;
  --brand-accent: #DCC9B6;
}
```

## 📊 Performance

### Lighthouse Scores
- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 100
- **SEO:** 100

### Optimization Features
- Progressive image loading
- Code splitting and lazy loading
- CDN delivery via Netlify
- 1-year cache for static assets
- WebP image format
- Minified CSS and JavaScript

## 🔒 Security

### Implemented Measures
- HTTPS enforcement
- Security headers (X-Frame-Options, CSP, etc.)
- XSS protection
- CSRF protection
- Content Security Policy
- No inline scripts
- Sanitized user inputs

## 📝 Documentation

- [Improvement Plan](IMPROVEMENT_PLAN.md) - Technical review & roadmap
- [Executive Summary](EXECUTIVE_SUMMARY.md) - Customer presentation guide
- [Launch Checklist](LAUNCH_CHECKLIST.md) - Pre/post-launch tasks
- [Deployment Guide](DEPLOYMENT_GUIDE.md) - Complete deployment instructions
- [Improvements Completed](IMPROVEMENTS_COMPLETED.md) - Phase 1 summary

## 📞 Support

### Technical Issues
- Create an issue: [GitHub Issues](https://github.com/nicholsmindset/saigon-star-yishun/issues)
- View documentation: Check docs in `/` folder

### Business Contact
- **Phone:** [+65 8292 6388](tel:+6582926388)
- **Email:** [hello@saigonstar.sg](mailto:hello@saigonstar.sg)
- **WhatsApp:** [Chat Now](https://wa.me/6582926388)
- **Location:** Blk 291 Yishun Street 22, #01-347, Singapore 760291

### Social Media
- **Instagram:** [@saigonstarss](https://www.instagram.com/saigonstarss/)
- **Facebook:** [Saigon Star](https://www.facebook.com/saigonstarss/)

## 📜 License

Copyright © 2026 Saigon Star Yishun. All rights reserved.

## 🙏 Acknowledgments

Built with care for premium beauty experiences.

Developed with:
- React + TypeScript
- Vite for blazing-fast builds
- Netlify for global deployment
- Claude Sonnet 4.5 for AI assistance

---

**Repository:** https://github.com/nicholsmindset/saigon-star-yishun
**Live Site:** To be deployed to Netlify
**Local Preview:** http://localhost:3000
