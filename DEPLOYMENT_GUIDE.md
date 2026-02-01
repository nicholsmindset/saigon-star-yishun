# Deployment Guide - Saigon Star Yishun

Complete guide for deploying the Saigon Star Yishun website to Netlify.

## 🚀 Quick Deployment

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. **Go to Netlify**
   - Visit [netlify.com](https://www.netlify.com)
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select repository: `nicholsmindset/saigon-star-yishun`

3. **Configure Build Settings**
   - Netlify will auto-detect the settings from `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `20`

4. **Deploy**
   - Click "Deploy site"
   - Wait 2-3 minutes for build and deployment
   - Your site will be live at: `https://[random-name].netlify.app`

5. **Custom Domain** (Optional)
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `saigonstar.sg` or your preferred domain
   - Follow DNS configuration instructions

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize Netlify site
netlify init

# Deploy to production
netlify deploy --prod
```

## 📋 Pre-Deployment Checklist

### ✅ Required
- [x] GitHub repository created and code pushed
- [x] `netlify.toml` configuration file added
- [x] `public/_redirects` file for routing
- [x] Build tested locally: `npm run build`
- [x] Preview tested locally: `npm run dev`

### 🔧 Recommended
- [ ] Custom domain purchased and configured
- [ ] SSL certificate (automatic with Netlify)
- [ ] Environment variables configured (if any)
- [ ] Contact form backend setup (if needed)
- [ ] Google Analytics tracking ID added
- [ ] Google Search Console verification

## 🌐 Post-Deployment Setup

### 1. Domain Configuration

**If using `saigonstar.sg`:**

1. **Add Custom Domain in Netlify**
   - Site settings → Domain management → Add custom domain
   - Enter: `saigonstar.sg`
   - Also add: `www.saigonstar.sg`

2. **Configure DNS** (at your domain registrar)
   ```
   Type  | Name | Value
   ------|------|-------
   A     | @    | 75.2.60.5 (Netlify IP)
   CNAME | www  | [your-site].netlify.app
   ```

3. **Enable HTTPS**
   - Netlify auto-provisions SSL certificate
   - Wait 24-48 hours for DNS propagation
   - Force HTTPS redirect in Site settings

### 2. SEO & Analytics Setup

**Google Search Console:**
1. Visit [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `https://saigonstar.sg`
3. Verify ownership using HTML tag method
4. Submit sitemap: `https://saigonstar.sg/sitemap.xml`

**Google Analytics:**
1. Create GA4 property for the website
2. Add tracking code to `index.html`
3. Verify tracking in GA4 Real-time reports

**Google My Business:**
1. Update website URL to your live Netlify URL
2. Enable "Book Appointment" button
3. Link to Reviews page for social proof

### 3. Performance Optimization

**Image Optimization:**
- All images already optimized as WebP format
- Progressive loading implemented
- Lazy loading enabled for below-fold images

**Caching:**
- Static assets cached for 1 year
- Images cached for 1 year
- HTML files not cached (immediate updates)

**CDN:**
- Netlify automatically serves via global CDN
- Edge caching reduces latency worldwide

## 🔒 Security Configuration

All security headers are configured in `netlify.toml`:

- ✅ X-Frame-Options: DENY (prevents clickjacking)
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection: enabled
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy: restricted geolocation, mic, camera
- ✅ HTTPS enforcement (via Netlify dashboard)

## 📊 Monitoring & Maintenance

### Netlify Dashboard

**Build & Deploy:**
- Monitor build status and logs
- View deploy history
- Rollback to previous deploys if needed

**Analytics (if enabled):**
- Page views and unique visitors
- Top pages and traffic sources
- Bandwidth usage

**Forms (if configured):**
- Form submissions from Contact page
- Email notifications setup

### Performance Monitoring

**Core Web Vitals:**
- Use Google PageSpeed Insights
- Monitor Largest Contentful Paint (LCP)
- Track First Input Delay (FID)
- Measure Cumulative Layout Shift (CLS)

**Uptime Monitoring:**
- Use UptimeRobot or similar service
- Monitor every 5 minutes
- Alert via email/SMS for downtime

## 🚨 Troubleshooting

### Build Failures

**"Command failed: npm run build"**
```bash
# Test build locally first
npm run build

# Check for TypeScript errors
npm run typecheck

# Verify all dependencies installed
npm install
```

**"Node version mismatch"**
- Netlify uses Node 20 (specified in netlify.toml)
- Ensure local development uses Node 18+

### Routing Issues

**404 errors on page refresh:**
- Verify `public/_redirects` file exists
- Check `netlify.toml` redirect rules
- HashRouter should handle all routing client-side

**Images not loading:**
- Check image paths use leading slash: `/gallery-1.webp`
- Verify images exist in `public/` folder
- Check browser console for 404 errors

### Performance Issues

**Slow initial load:**
- Run Lighthouse audit in Chrome DevTools
- Check image sizes and compression
- Verify lazy loading implementation
- Review JavaScript bundle size

## 📱 Testing Checklist

### Pre-Launch Testing

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS and Android)
- [ ] Verify all navigation links work
- [ ] Test booking flow and WhatsApp integration
- [ ] Verify Google Maps embed loads
- [ ] Test form submissions (if applicable)
- [ ] Check all images load properly
- [ ] Verify responsive design on all screen sizes
- [ ] Test accessibility with screen reader
- [ ] Validate SEO meta tags (view page source)

### Post-Launch Verification

- [ ] Google Search Console shows no errors
- [ ] Sitemap submitted and indexed
- [ ] Google Analytics tracking works
- [ ] SSL certificate active (HTTPS)
- [ ] Custom domain resolves correctly
- [ ] No mixed content warnings
- [ ] Social sharing works (test Facebook, WhatsApp)
- [ ] Page speed scores >90 on mobile and desktop

## 🎯 Go-Live Plan

### Day 1: Soft Launch
1. Deploy to Netlify with temporary URL
2. Complete full testing checklist
3. Share with stakeholders for review
4. Fix any issues found

### Day 2-3: Domain Setup
1. Configure custom domain
2. Wait for DNS propagation
3. Enable HTTPS
4. Test all functionality on live domain

### Day 4: SEO Setup
1. Submit sitemap to Google Search Console
2. Setup Google Analytics tracking
3. Update Google My Business with new URL
4. Monitor indexing status

### Day 5: Marketing Launch
1. Announce on social media (Instagram, Facebook)
2. Update all marketing materials with new URL
3. Add website to business cards and signage
4. Email existing customers about new website

### Ongoing: Monitor & Optimize
1. Weekly: Check Google Search Console for errors
2. Monthly: Review Google Analytics reports
3. Monthly: Run performance audits
4. Quarterly: Update content and images
5. Quarterly: Review and update SEO strategy

## 📞 Support

**Netlify Support:**
- Documentation: [docs.netlify.com](https://docs.netlify.com)
- Community: [answers.netlify.com](https://answers.netlify.com)
- Status: [netlifystatus.com](https://netlifystatus.com)

**Technical Issues:**
- GitHub Repository: [github.com/nicholsmindset/saigon-star-yishun](https://github.com/nicholsmindset/saigon-star-yishun)
- Create issue for bugs or feature requests

---

**Repository:** https://github.com/nicholsmindset/saigon-star-yishun
**Live Preview:** http://localhost:3000 (development)
**Production:** To be deployed
