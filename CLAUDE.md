# Neblify Website - Project Documentation

## Project Overview

A modern, professional website for **Neblify Solution Pvt. Ltd.** - delivering cutting-edge AI, ML, Generative AI, DevOps, and Cloud cost optimization services.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 + Shadcn UI
- **Animations:** Framer Motion + GSAP + Lenis
- **Blog:** MDX with next-mdx-remote
- **Forms:** React Hook Form + Zod + Resend
- **Analytics:** Google Analytics 4 + Google Tag Manager
- **Hosting:** Vercel

## Brand Colors (From Logo)

```css
Primary Blue: #1E88E5 (hsl(207, 81%, 51%))
Dark Navy: #0D47A1 (hsl(216, 87%, 35%))
Accent Gold: #FDB515 (hsl(42, 98%, 54%))
White: #FFFFFF
Light Gray: #F5F5F5
```

## Project Structure

```
/app
  /about              # About Us, Careers
  /solutions          # All service pages
    /generative-ai    # Generative AI consulting
    /ai-integration   # AI Integration services
    /custom-ai-models # Custom AI development
    /mlops            # MLOps & deployment
    /ai-strategy      # AI strategy
    /cloud-optimization # Cloud cost optimization
  /blog               # Blog system with MDX
    /[slug]           # Dynamic blog posts
  /case-studies       # Client case studies
  /testimonials       # Client testimonials
  /contact            # Contact form
  /resources          # Resources hub
  /legal              # Privacy & Terms
  /sitemap            # HTML sitemap
/components
  /ui                 # Shadcn UI components
  /sections           # Header, Footer
  /analytics          # GA4, GTM
/content/blog         # MDX blog posts
/lib                  # Utilities, validations
/public
  /images             # Logo and images
```

## Key Features

 **Responsive Design** - Mobile-first, fully responsive
 **SEO Optimized** - Meta tags, sitemaps, robots.txt, structured data
 **Performance** - Optimized images, code splitting, lazy loading
 **Animations** - Smooth animations with Framer Motion
 **Blog System** - MDX-powered blog with syntax highlighting and reading time
 **Contact Forms** - Validated forms with email integration (Resend)
 **Analytics Ready** - Google Analytics 4 & Tag Manager integration
 **Legal Pages** - GDPR-compliant Privacy Policy and Terms of Use
 **Accessibility** - WCAG compliant components

## Pages

### Main Pages
- **Home** (`/`) - Hero, services, stats, testimonials, CTA
- **About** (`/about`) - Mission, vision, leadership, history
- **Careers** (`/about/careers`) - Job listings and benefits
- **Contact** (`/contact`) - Contact form with company info

### Solutions
- **Solutions Overview** (`/solutions`)
- **Generative AI** (`/solutions/generative-ai`)
- **AI Integration** (`/solutions/ai-integration`)
- **Custom AI Models** (`/solutions/custom-ai-models`)
- **MLOps** (`/solutions/mlops`)
- **AI Strategy** (`/solutions/ai-strategy`)
- **Cloud Optimization** (`/solutions/cloud-optimization`)

### Resources
- **Blog** (`/blog`) - MDX blog system
- **Case Studies** (`/case-studies`) - Client success stories
- **Testimonials** (`/testimonials`) - Client reviews
- **Resources Hub** (`/resources`) - All resources

### Legal
- **Privacy Policy** (`/legal/privacy`)
- **Terms of Use** (`/legal/terms`)
- **Sitemap** (`/sitemap`)

## Development

### Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run development server
npm run dev
```

### Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Variables

```env
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key

# Contact Form
CONTACT_EMAIL_TO=sales@neblify.com,support@neblify.com
CONTACT_EMAIL_FROM=noreply@neblify.com

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://neblify.com
```

## Content Management

### Adding Blog Posts

Create MDX files in `/content/blog/`:

```mdx
---
title: "Your Blog Post Title"
date: "2025-01-20"
excerpt: "Brief description"
author: "Author Name"
tags: ["AI", "Machine Learning"]
image: "/images/blog/post-image.jpg"
---

Your content here with **markdown** support...
```

### Creating New Solution Pages

1. Create directory: `/app/solutions/your-solution/`
2. Copy template from `/app/solutions/generative-ai/page.tsx`
3. Customize content, services, and benefits

## Company Information

**Neblify Solution Pvt. Ltd.**
- **Address:** B33, Hilton Tower, Datta Jagadamba Marg, Sher-e-punjab, Andheri East, Mumbai 400093
- **Phone:** +91 9920770489
- **Sales:** +91 9082933404
- **Email:** sales@neblify.com, support@neblify.com

## Deployment

### Vercel Deployment

1. **Push to Git:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push
   ```

2. **Import to Vercel:**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Import your repository
   - Framework: Next.js (auto-detected)

3. **Add Environment Variables** in Vercel dashboard

4. **Configure Domain:**
   - Add custom domain: `neblify.com`
   - Update DNS records as instructed

5. **Deploy!**

See `DEPLOYMENT.md` for detailed instructions.

## Customization

### Logo

✅ **Current Logo:**
- Location: `/public/images/NeblifyLogo.png`
- Automatically used in Header and Footer
- Reusable component: `components/logo.tsx`

**To Update Logo:**
1. Replace `/public/images/NeblifyLogo.png` with new file
2. Logo automatically updates throughout the site
3. Supports PNG, JPG, or SVG formats

### Update Colors

Colors are configured in:
- `/app/globals.css` - CSS variables
- `/tailwind.config.ts` - Tailwind theme

Current color scheme matches the Neblify logo:
- Primary: Blue (#1E88E5)
- Secondary: Navy (#0D47A1)
- Accent: Gold (#FDB515)

### Update Team Info

Edit `/app/about/page.tsx`:
- Add team member photos to `/public/images/team/`
- Update names, roles, and bios

### Update Social Media

Edit `/components/sections/footer.tsx`:
- Replace placeholder links with actual URLs

## Code Organization

### Components

- **UI Components** (`/components/ui/`) - Reusable Shadcn components
- **Section Components** (`/components/sections/`) - Header, Footer
- **Analytics** (`/components/analytics/`) - GA4, GTM

### Libraries

- **Validations** (`/lib/validations/`) - Zod schemas for forms
- **Blog Utils** (`/lib/blog.ts`) - Blog post utilities
- **Utils** (`/lib/utils.ts`) - General utilities

### Server Actions

- **Contact Form** (`/app/actions/contact.ts`) - Form submission handler

## Best Practices

-  Use Server Components by default
-  Use Client Components only when needed (`'use client'`)
-  Validate all forms on both client and server
-  Optimize images with `next/image`
-  Use TypeScript for type safety
-  Follow mobile-first responsive design
-  Maintain accessibility standards

## Support

- **Documentation:** See README.md and DEPLOYMENT.md
- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Contact:** support@neblify.com

---

**Built with d for Neblify Solution Pvt. Ltd.**
**Version:** 1.0.0
**Last Updated:** January 2025
