# Neblify Website

Modern, professional website for Neblify Solution Pvt. Ltd. - AI, ML, Generative AI, DevOps and Cloud cost optimization services.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 + Shadcn UI
- **Animations:** Framer Motion + GSAP + Lenis
- **Blog:** MDX with next-mdx-remote
- **Forms:** React Hook Form + Zod + Resend
- **Analytics:** Google Analytics 4 + Google Tag Manager
- **Hosting:** Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your actual API keys
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app                    # Next.js app directory
  /about               # About us pages
  /solutions           # Service pages
  /case-studies        # Case studies
  /resources           # Resources hub
  /blog                # Blog system
  /contact             # Contact page
  /testimonials        # Client testimonials
  /legal               # Privacy & Terms
  /sitemap             # HTML sitemap
/components            # React components
  /ui                  # Shadcn UI components
  /sections            # Reusable sections
  /animations          # Animation components
/content/blog          # MDX blog posts
/lib                   # Utilities
/public                # Static assets

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Deploying to Vercel

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository

3. **Configure Environment Variables:**
   Add the following environment variables in Vercel dashboard:
   ```
   RESEND_API_KEY=your_resend_api_key
   CONTACT_EMAIL_TO=sales@neblify.com,support@neblify.com
   CONTACT_EMAIL_FROM=noreply@neblify.com
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   NEXT_PUBLIC_SITE_URL=https://neblify.com
   ```

4. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

5. **Configure Custom Domain:**
   - Go to Project Settings > Domains
   - Add your domain: neblify.com
   - Follow the DNS configuration instructions

### Post-Deployment Setup

1. **Branding Assets:**
   - ✅ Logo integrated: `/public/images/NeblifyLogo.png`
   - ✅ Colors updated in `app/globals.css` to match logo
   - Logo automatically used in Header and Footer

2. **Update Social Media Links:**
   - Update social media URLs in Footer component
   - Provide actual social media handles

3. **Configure Social Media Widget:**
   - Sign up for Curator.io or EmbedSocial
   - Get your widget embed code
   - Add to Resources page

4. **Add Team Photos:**
   - Upload leadership team photos to `/public/images/team/`
   - Update About page with actual team information

5. **Write Blog Posts:**
   - Create MDX files in `/content/blog/`
   - Follow the format in `welcome-to-neblify.mdx`

## Features

✅ **Modern Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4
✅ **Responsive Design:** Mobile-first, fully responsive
✅ **SEO Optimized:** Meta tags, sitemaps, robots.txt, structured data
✅ **Performance:** Optimized images, code splitting, lazy loading
✅ **Animations:** Smooth animations with Framer Motion
✅ **Blog System:** MDX-powered blog with syntax highlighting
✅ **Contact Forms:** Validated forms with Resend email integration
✅ **Analytics:** Google Analytics 4 & Tag Manager ready
✅ **Legal Pages:** Privacy Policy and Terms of Use
✅ **Accessibility:** WCAG compliant components

## Company Information

**Neblify Solution Pvt. Ltd.**
- Address: B33, Hilton Tower, Datta Jagadamba Marg, Sher-e-punjab, Andheri East, Mumbai 400093
- Phone: +91 9920770489
- Sales: +91 9082933404
- Email: sales@neblify.com, support@neblify.com
